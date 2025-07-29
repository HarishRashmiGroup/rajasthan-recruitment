'use client'
import React, { useEffect, useRef, useState, useCallback, useMemo } from 'react';
import {
    Box,
    VStack,
    HStack,
    Text,
    Link,
    IconButton,
    useDisclosure,
    useBreakpointValue,
    Badge,
    Collapsible,
} from '@chakra-ui/react';
import { ChevronDown, ChevronUp, List, Hash } from 'lucide-react';
import { ArticleContentProps } from './article-content';

const TableOfContents = ({ content }: { content: ArticleContentProps }) => {
    const [activeSection, setActiveSection] = useState<string | null>(null);
    const [isScrolling, setIsScrolling] = useState(false);

    const isMobile = useBreakpointValue({ base: true, md: false });
    const { open, onToggle } = useDisclosure({ open: isMobile ? false : true });
    const tocWidth = useBreakpointValue({ base: '100%', md: '300px', lg: '350px' });
    const fontSize = useBreakpointValue({ base: 'sm', md: 'md' });
    const gap = useBreakpointValue({ base: 2, md: 3 });
    const tocContainerRef = useRef<HTMLDivElement | null>(null);
    const observerRef = useRef<IntersectionObserver | null>(null);
    const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    // Memoize headings to prevent unnecessary re-computations
    const headings = useMemo(() =>
        content.sections.filter(section => section.type === 'heading'),
        [content.sections]
    );

    // Generate anchor from title
    const generateAnchor = useCallback((title: string) => {
        return title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
    }, []);

    // Memoize headings with anchors for rendering
    const headingsWithAnchors = useMemo(() =>
        headings.map((heading, index) => ({
            ...heading,
            anchor: generateAnchor(heading.title),
            index
        })),
        [headings, generateAnchor]
    );

    const handleSectionClick = useCallback((anchor: string) => {
        if (typeof window === 'undefined') return;

        const element = document.getElementById(anchor);
        if (!element) return;

        setIsScrolling(true);
        setActiveSection(anchor);

        // Update URL hash without adding to history
        window.history.replaceState(null, '', `#${anchor}`);

        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });

        // Clear any existing timeout
        if (scrollTimeoutRef.current) {
            clearTimeout(scrollTimeoutRef.current);
        }

        // Reset scrolling state after animation completes
        scrollTimeoutRef.current = setTimeout(() => {
            setIsScrolling(false);
        }, 1000);
    }, []);

    // Scroll TOC item into view when active section changes
    const scrollTocItemIntoView = useCallback((anchor: string) => {
        if (!anchor || isMobile || !tocContainerRef.current) return;

        const tocItem = tocContainerRef.current.querySelector(`[data-toc-item="${anchor}"]`) as HTMLElement;
        if (!tocItem) return;

        const container = tocContainerRef.current;
        const itemTop = tocItem.offsetTop;
        const itemHeight = tocItem.offsetHeight;
        const containerHeight = container.offsetHeight;
        const scrollTop = container.scrollTop;

        // Calculate positions
        const itemBottom = itemTop + itemHeight;
        const viewportTop = scrollTop;
        const viewportBottom = scrollTop + containerHeight;

        // Check if item is outside viewport
        if (itemTop < viewportTop || itemBottom > viewportBottom) {
            // Calculate ideal scroll position (centered)
            const idealScroll = itemTop - (containerHeight / 2) + (itemHeight / 2);

            container.scrollTo({
                top: idealScroll,
                behavior: 'smooth'
            });
        }
    }, [isMobile]);

    // Initialize intersection observer to track content scrolling
    useEffect(() => {
        if (typeof window === 'undefined') return;

        // Clean up existing observer
        if (observerRef.current) {
            observerRef.current.disconnect();
        }

        const handleScroll = () => {
            if (isScrolling) return;

            const scrollPosition = window.scrollY + 100; // Adding header offset

            // Find the section that's currently in view
            let currentSection = null;

            headingsWithAnchors.forEach(({ anchor }) => {
                const element = document.getElementById(anchor);
                if (!element) return;

                const { offsetTop, offsetHeight } = element;
                const sectionBottom = offsetTop + offsetHeight;

                if (scrollPosition >= offsetTop && scrollPosition < sectionBottom) {
                    currentSection = anchor;
                }
            });

            if (currentSection && currentSection !== activeSection) {
                setActiveSection(currentSection);
                scrollTocItemIntoView(currentSection);

                // Update URL hash without adding to history
                window.history.replaceState(null, '', `#${currentSection}`);
            }
        };

        observerRef.current = new IntersectionObserver(
            (entries: IntersectionObserverEntry[]) => {
                if (isScrolling) return;
                if(!entries)return;
                // let mostVisibleEntry: IntersectionObserverEntry | null = null;
                // let highestRatio = 0;

                // entries.forEach((entry: IntersectionObserverEntry) => {
                //     if (entry.intersectionRatio > highestRatio) {
                //         highestRatio = entry.intersectionRatio;
                //         mostVisibleEntry = entry;
                //     }
                // });

                // if (mostVisibleEntry?.target && highestRatio > 0.1) {
                //     const el = mostVisibleEntry.target as HTMLElement;
                //     const anchor = el.id;

                //     if (anchor && anchor !== activeSection) {
                //         setActiveSection(anchor);
                //         scrollTocItemIntoView(anchor);
                //         window.history.replaceState(null, '', `#${anchor}`);
                //     }
                // }
            },
            {
                threshold: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
                rootMargin: '-100px 0px -50% 0px',
            }
        );


        // Observe all heading elements
        headingsWithAnchors.forEach(({ anchor }) => {
            const element = document.getElementById(anchor);
            if (element) {
                observerRef.current?.observe(element);
            }
        });

        // Add scroll listener as fallback
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            if (observerRef.current) {
                observerRef.current.disconnect();
            }
            window.removeEventListener('scroll', handleScroll);
            if (scrollTimeoutRef.current) {
                clearTimeout(scrollTimeoutRef.current);
            }
        };
    }, [headingsWithAnchors, activeSection, isScrolling, scrollTocItemIntoView]);

    // Handle initial hash if present
    useEffect(() => {
        if (typeof window === 'undefined') return;

        const handleHashChange = () => {
            const hash = window.location.hash.substring(1);
            if (hash && headingsWithAnchors.some(h => h.anchor === hash)) {
                setActiveSection(hash);
                scrollTocItemIntoView(hash);
            }
        };

        // Check initial hash
        handleHashChange();

        // Listen for hash changes
        window.addEventListener('hashchange', handleHashChange);
        return () => window.removeEventListener('hashchange', handleHashChange);
    }, [headingsWithAnchors, scrollTocItemIntoView]);

    // Calculate progress values
    const progressData = useMemo(() => {
        if (!activeSection) return { current: 0, total: headings.length, percentage: 0 };

        const currentIndex = headingsWithAnchors.findIndex(h => h.anchor === activeSection);
        const current = currentIndex >= 0 ? currentIndex + 1 : 0;
        const percentage = headings.length > 0 ? (current / headings.length) * 100 : 0;

        return { current, total: headings.length, percentage };
    }, [activeSection, headings.length, headingsWithAnchors]);

    const MobileHeader = () => (
        <HStack
            w="full"
            justify="space-between"
            p={4}
            bg="gray.50"
            borderRadius="md"
            cursor="pointer"
            onClick={onToggle}
            _hover={{ bg: 'gray.100' }}
        >
            <HStack gap={2}>
                <List size={20} />
                <Text fontWeight="bold" fontSize={fontSize}>
                    Table of Contents
                </Text>
                <Badge colorScheme="blue" variant="subtle">
                    {headings.length}
                </Badge>
            </HStack>
            <IconButton
                variant="ghost"
                size="sm"
                aria-label="Toggle TOC"
                onClick={() => open}
            >{open ? <ChevronUp size={16} /> : <ChevronDown size={16} />}</IconButton>
        </HStack>
    );

    const DesktopHeader = () => (
        <HStack gap={2} mb={4}>
            <List size={24} />
            <Text fontWeight="bold" fontSize="lg">
                Table of Contents
            </Text>
            <Badge colorScheme="blue" variant="subtle">
                {headings.length}
            </Badge>
        </HStack>
    );

    return (
        <Box
            w={tocWidth}
            p={4}
            bg="white"
            borderRadius="lg"
            position="relative"
            overflow="hidden"
            mb={8}
        // boxShadow="md"
        >
            {isMobile ? <MobileHeader /> : <DesktopHeader />}

            <Box
                ref={tocContainerRef}
                position="relative"
                overflow="auto"
                maxH={'40vh'}
                css={{
                    '&::-webkit-scrollbar': { width: '4px' },
                    '&::-webkit-scrollbar-track': { background: 'transparent' },
                    '&::-webkit-scrollbar-thumb': {
                        background: '#CBD5E0',
                        borderRadius: '2px',
                    },
                    '&::-webkit-scrollbar-thumb:hover': {
                        background: '#A0AEC0',
                    },
                }}
            >
                <Collapsible.Root unmountOnExit open={open}>
                    <Collapsible.Content>
                        <VStack align="stretch" gap={gap} mt={isMobile ? 4 : 0}>
                            {headingsWithAnchors.map((heading) => {
                                const isActive = activeSection === heading.anchor;

                                return (
                                    <Box
                                        key={`${heading.anchor}-toc`}
                                        data-toc-item={heading.anchor}
                                        ref={isActive ? (el: Element) => {
                                            if (el && !isScrolling) {
                                                scrollTocItemIntoView(heading.anchor);
                                            }
                                        } : null}
                                    >
                                        <Link
                                            onClick={() => handleSectionClick(heading.anchor)}
                                            display="flex"
                                            alignItems="flex-start"
                                            p={3}
                                            borderRadius="md"
                                            transition="all 0.2s ease"
                                            bg={isActive ? 'blue.50' : 'transparent'}
                                            borderLeft={isActive ? '3px solid' : '3px solid transparent'}
                                            borderLeftColor={isActive ? 'blue.500' : 'transparent'}
                                            _hover={{
                                                bg: isActive ? 'blue.100' : 'gray.50',
                                                transform: 'translateX(4px)',
                                                textDecoration: 'none'
                                            }}
                                            _active={{
                                                transform: 'translateX(2px)'
                                            }}
                                            cursor="pointer"
                                        >
                                            <HStack gap={3} align="flex-start" w="full">
                                                <Box mt={1} flexShrink={0}>
                                                    <Hash
                                                        size={14}
                                                        color={isActive ? '#3182ce' : '#718096'}
                                                    />
                                                </Box>
                                                <VStack align="start" gap={1} flex={1} minW={0}>
                                                    <Text
                                                        fontSize={fontSize}
                                                        fontWeight={isActive ? 'semibold' : 'medium'}
                                                        color={isActive ? 'blue.600' : 'gray.700'}
                                                        lineHeight="1.4"
                                                        maxLines={2}
                                                    >
                                                        {heading.title}
                                                    </Text>
                                                    <Text fontSize="xs" color="gray.500">
                                                        Section {heading.index + 1}
                                                    </Text>
                                                </VStack>
                                            </HStack>
                                        </Link>
                                    </Box>
                                );
                            })}
                        </VStack>
                    </Collapsible.Content>
                </Collapsible.Root>
            </Box>

            <Box mt={4} pt={4}>
                <HStack justify="space-between">
                    <Text fontSize="xs" color="gray.500">
                        Progress
                    </Text>
                    <Text fontSize="xs" color="blue.500" fontWeight="medium">
                        {progressData.current}/{progressData.total}
                    </Text>
                </HStack>
                <Box mt={2} h="2px" bg="gray.100" borderRadius="full">
                    <Box
                        h="full"
                        bg="blue.500"
                        borderRadius="full"
                        w={`${progressData.percentage}%`}
                        transition="width 0.3s ease"
                    />
                </Box>
            </Box>
        </Box>
    );
};

export default TableOfContents;