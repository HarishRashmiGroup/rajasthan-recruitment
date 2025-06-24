'use client';

import { HStack, Text, Icon, Button } from '@chakra-ui/react';
import { FiThumbsUp, FiMessageCircle, FiShare2 } from 'react-icons/fi';

export default function BlogStats({ likes, comments, shares }: { likes: number, comments: number, shares: number }) {
    return (
        <HStack pt={2} w="full" zIndex={2}>
            <Button onClick={() => console.log('clicked')} size={'sm'} variant={'plain'} m={0} h={'auto'} p={1} color="gray.500" _hover={{ color: '#5d93fe' }}>
                <Icon as={FiThumbsUp} boxSize={4} />
                <Text fontSize="sm">{likes}</Text>
            </Button>
            <Button size={'sm'} variant={'plain'} m={0} h={'auto'} p={1} color="gray.500" _hover={{ color: '#5d93fe' }}>
                <Icon as={FiMessageCircle} boxSize={4} />
                <Text fontSize="sm">{comments}</Text>
            </Button>
            <Button size={'sm'} variant={'plain'} m={0} h={'auto'} p={1} color="gray.500" _hover={{ color: '#5d93fe' }}>
                <Icon as={FiShare2} boxSize={4} />
                <Text fontSize="sm">{shares}</Text>
            </Button>
        </HStack>
    );
}
