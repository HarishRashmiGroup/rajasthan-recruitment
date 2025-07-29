'use client'
import React, { useState, useEffect, useRef, useCallback, ReactNode } from 'react';

const useIntersectionObserver = (options = {}) => {
    const [activeSection, setActiveSection] = useState(null);
    const [isClient, setIsClient] = useState(false);
    const observerRef = useRef<IntersectionObserver | null>(null);
    const sectionsRef = useRef(new Map());

    useEffect(() => {
        setIsClient(true);
    }, []);

    const observe = useCallback((element: Element, sectionId: string | null) => {
        if (!element || !isClient) return;

        sectionsRef.current.set(sectionId, element);

        if (!observerRef.current && typeof window !== 'undefined') {
            observerRef.current = new IntersectionObserver((entries) => {
                let maxRatio = 0;
                let activeId: string | null = null;

                entries.forEach((entry) => {
                    const sectionId = entry.target.getAttribute('data-section-id');
                    if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
                        maxRatio = entry.intersectionRatio;
                        activeId = sectionId;
                    }
                });

                if (activeId) {
                    setActiveSection(activeId);
                    if (typeof window !== 'undefined' && window.history.replaceState) {
                        const anchor = entries.find(e => e.target.getAttribute('data-section-id') === activeId)?.target.id || activeId;
                        window.history.replaceState(null, '', `#${anchor}`);
                    }
                }
            }, {
                threshold: [0.1, 0.3, 0.5, 0.7, 1.0],
                rootMargin: '-20% 0px -35% 0px',
                ...options
            });
        }

        if (observerRef.current) {
            observerRef.current.observe(element);
        }
    }, [isClient]);

    const unobserve = useCallback((sectionId: string) => {
        const element = sectionsRef.current.get(sectionId);
        if (element && observerRef.current) {
            observerRef.current.unobserve(element);
            sectionsRef.current.delete(sectionId);
        }
    }, [isClient]);

    useEffect(() => {
        return () => {
            if (observerRef.current) {
                observerRef.current.disconnect();
            }
        };
    }, []);

    return { activeSection, observe, unobserve, isClient };
};

export default function SectionWrapper({ children, sectionId, title, className = "" }: { children: ReactNode | null, sectionId: string | null, title: string, className: string }) {
    const sectionRef = useRef(null);
    const { observe, isClient } = useIntersectionObserver();

    useEffect(() => {
        if (sectionRef.current && isClient && observe) {
            observe(sectionRef.current, sectionId);
        }
    }, [sectionId, observe, isClient]);

    const anchor = title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');

    return (
        <section
            ref={sectionRef}
            id={anchor}
            data-section-id={sectionId}
            className={className}
            style={{ scrollMarginTop: '80px' }}
        >
            {children}
        </section>
    );
};