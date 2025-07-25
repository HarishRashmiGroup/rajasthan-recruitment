'use client';

import { Flex, Icon } from '@chakra-ui/react';
import { FiPlay } from 'react-icons/fi';

export default function PlayOverlay() {
    return (
        <Flex
            opacity={0.8}
            justifyContent="center"
            alignContent="center"
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            bg="#DEE9FF"
            borderRadius="full"
            p={3}
            color="#5d93fe"
        >
            <Icon as={FiPlay} boxSize={6} />
        </Flex>
    );
}