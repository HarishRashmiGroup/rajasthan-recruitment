import React from 'react';
import { Box, Image } from '@chakra-ui/react';

const SidebarAd: React.FC = () => (
    <Box
        minW="120px"
        maxW="250px"
        display={{ base: 'none', md: 'block' }}
        position="relative"
    >
        <Image
            borderRadius="md"
            zIndex={2}
            position={{ base: 'relative', md: 'sticky' }}
            top={{ base: 'auto', md: '150px' }}
            alt="Advertisement"
            src="/rr_adv.png"
        />
    </Box>
);

export default SidebarAd;
