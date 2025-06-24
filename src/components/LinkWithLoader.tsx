'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Link } from '@chakra-ui/react';
import NextLink from 'next/link';
import FullScreenLoader from './FullScreenLoader';

interface LinkWithLoaderProps {
    href: string;
    children: React.ReactNode;
}

export default function LinkWithLoader({ href, children }: LinkWithLoaderProps) {
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const target = e.target as HTMLElement;
        const isInsideButton = target.closest('button');

        if (isInsideButton) {
            return;
        }
        setLoading(true);
        router.push(href);
    };

    return (
        <>
            {loading && <FullScreenLoader />}
            <Link
                as={NextLink}
                href={href}
                onClick={handleClick}
                h="full"
                w="full"
                p={0}
                m={0}
                borderRadius="lg"
                _hover={{ textDecoration: 'none' }}
                _focus={{ boxShadow: 'none', outline: 'none', border: 'none' }}
                _focusVisible={{ boxShadow: 'none', outline: 'none' }}
                _active={{ boxShadow: 'none', border: 'none' }}
                border="none"
                textDecoration="none"
            >
                {children}
            </Link>
        </>
    );
}
