'use client'
import React, { useEffect, useRef, useState, useCallback, useMemo } from 'react';
import {
    Box,
    VStack,
    HStack,
    Text,
    Link,
    Badge,
} from '@chakra-ui/react';
import { List, Hash } from 'lucide-react';
import { ArticleContentProps } from './article-content';

const TableOfContents = ({ content }: { content: ArticleContentProps }) => {
    const [activeSection, setActiveSection] = useState<string | null>(null);
    const tocContainerRef = useRef<HTMLDivElement | null>(null);

    const headings = useMemo(
        () => content.sections.filter(section => section.type === 'heading'),
        [content.sections]
    );

    const generateAnchor = useCallback((title: string) => {
        return title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
    }, []);

    const headingsWithAnchors = useMemo(
        () =>
            headings.map((heading, index) => ({
                ...heading,
                anchor: generateAnchor(heading.title),
                index
            })),
        [headings, generateAnchor]
    );

    const scrollTocToActiveItem = useCallback((anchor: string) => {
        // Add a small delay to ensure DOM is ready
        setTimeout(() => {
            if (!tocContainerRef.current) return;

            const tocItem = tocContainerRef.current.querySelector(
                `[data-toc-item="${anchor}"]`
            ) as HTMLElement;
            
            if (!tocItem) return;

            const container = tocContainerRef.current;
            const containerRect = container.getBoundingClientRect();
            const itemRect = tocItem.getBoundingClientRect();
            
            // Calculate relative positions
            const itemRelativeTop = itemRect.top - containerRect.top + container.scrollTop;
            const containerHeight = container.clientHeight;
            const itemHeight = itemRect.height;
            
            // Calculate ideal scroll position to center the item
            const idealScroll = itemRelativeTop - containerHeight / 2 + itemHeight / 2;
            
            // Ensure we don't scroll beyond bounds
            const maxScroll = container.scrollHeight - containerHeight;
            const finalScroll = Math.max(0, Math.min(idealScroll, maxScroll));

            container.scrollTo({
                top: finalScroll,
                behavior: 'smooth'
            });
        }, 100); // Small delay to ensure DOM is ready
    }, []);

    const handleSectionClick = useCallback((anchor: string) => {
        if (typeof window === 'undefined') return;

        const element = document.getElementById(anchor);
        if (!element) return;

        setActiveSection(anchor);

        // Use requestAnimationFrame to ensure state update is processed
        requestAnimationFrame(() => {
            window.history.replaceState(null, '', `#${anchor}`);

            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });

            // Scroll TOC after a short delay to allow for smooth scrolling
            scrollTocToActiveItem(anchor);
        });
    }, [scrollTocToActiveItem]);

    useEffect(() => {
        if (typeof window === 'undefined') return;

        const observer = new IntersectionObserver(
            entries => {
                let mostVisible: { ratio: number; id: string | null } = {
                    ratio: 0,
                    id: null
                };

                entries.forEach(entry => {
                    if (entry.isIntersecting && entry.intersectionRatio > mostVisible.ratio) {
                        mostVisible = {
                            ratio: entry.intersectionRatio,
                            id: entry.target.id
                        };
                    }
                });

                if (mostVisible.id && mostVisible.id !== activeSection) {
                    setActiveSection(mostVisible.id);
                }
            },
            {
                root: null,
                rootMargin: '0px 0px -60% 0px',
                threshold: [0.1, 0.25, 0.5, 0.75, 1.0]
            }
        );

        // Add a delay to ensure all elements are rendered
        const observeElements = () => {
            headingsWithAnchors.forEach(heading => {
                const el = document.getElementById(heading.anchor);
                if (el) observer.observe(el);
            });
        };

        // Use requestAnimationFrame to ensure DOM is ready
        requestAnimationFrame(observeElements);

        return () => {
            observer.disconnect();
        };
    }, [headingsWithAnchors, activeSection]);

    // Auto-scroll TOC when active section changes (from intersection observer)
    useEffect(() => {
        if (activeSection) {
            scrollTocToActiveItem(activeSection);
        }
    }, [activeSection, scrollTocToActiveItem]);

    useEffect(() => {
        if (typeof window === 'undefined') return;

        const hash = window.location.hash.substring(1);
        if (hash && headingsWithAnchors.some(h => h.anchor === hash)) {
            setActiveSection(hash);
            // Scroll to the TOC item after component mounts
            setTimeout(() => scrollTocToActiveItem(hash), 500);
        }
    }, [headingsWithAnchors, scrollTocToActiveItem]);

    const progressData = useMemo(() => {
        if (!activeSection)
            return { current: 0, total: headings.length, percentage: 0 };

        const currentIndex = headingsWithAnchors.findIndex(
            h => h.anchor === activeSection
        );
        const current = currentIndex >= 0 ? currentIndex + 1 : 0;
        const percentage = headings.length > 0 ? (current / headings.length) * 100 : 0;

        return { current, total: headings.length, percentage };
    }, [activeSection, headings.length, headingsWithAnchors]);

    return (
        <Box
            w="300px"
            p={4}
            bg="white"
            borderRadius="lg"
            position="relative"
            overflow="hidden"
            mb={8}
        >
            <HStack gap={2} mb={4}>
                <List size={24} />
                <Text fontWeight="bold" fontSize="lg">
                    Table of Contents
                </Text>
                <Badge colorScheme="blue" variant="subtle">
                    {headings.length}
                </Badge>
            </HStack>

            <Box
                ref={tocContainerRef}
                position="relative"
                overflow="auto"
                maxH="40vh"
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
                <VStack align="stretch" gap={3}>
                    {headingsWithAnchors.map((heading) => {
                        const isActive = activeSection === heading.anchor;

                        return (
                            <Box
                                key={`${heading.anchor}-toc`}
                                data-toc-item={heading.anchor}
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
                                        textDecoration: 'none'
                                    }}
                                    cursor="pointer"
                                >
                                    <HStack gap={3} align="flex-start" w="full">
                                        <Box mt={1} flexShrink={0}>
                                            <Hash
                                                size={14}
                                                color={isActive ? '#5d93fe' : '#DEE9FF'}
                                            />
                                        </Box>
                                        <VStack align="start" gap={1} flex={1} minW={0}>
                                            <Text
                                                fontSize="md"
                                                fontWeight={isActive ? 'semibold' : 'medium'}
                                                color={isActive ? 'blue.600' : 'gray.700'}
                                                lineHeight="1.4"
                                                lineClamp={2}
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
            </Box>

            {/* Progress bar */}
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