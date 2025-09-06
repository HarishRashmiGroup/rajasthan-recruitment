'use client'
import { Box, Button, Icon, Image, Text } from "@chakra-ui/react";
import { UserPlus2 } from "lucide-react";
import { useRouter } from "next/navigation";

export const Navbar = () => {
    const route = useRouter();
    return (
        <Box bg={'white'} position={'sticky'} w={'full'} top={0} zIndex={99} display={'flex'} justifyContent={'space-between'} p={4} borderBottom={'2px solid #5d93fe'}>
            <Box display={'flex'} justifyContent={'left'}  onClick={()=>route.push('/')} cursor={'pointer'}>
                <Box minW={'40px'}>
                    <Image src='/rr.png' alt="" boxSize="40px" mr={3} />
                </Box>
                <Text  color="#5d93fe" fontSize="lg" mt={1} lineHeight={1} fontWeight="medium" userSelect="none">Rajasthan<br />Recruitment</Text>
            </Box>
            <Button
                variant="outline"
                color="#5d93fe"
                borderColor={'#5d93fe'}
                borderWidth={'2px'}
                borderRadius="md"
                _hover={{ borderColor: '#DEE9FF', bg: '#DEE9FF', cursor: 'pointer' }}
                p={2}
                onClick={() => window.open("https://t.me/rajasthanrecruitment", "_blank")}
            >
                <Icon as={UserPlus2} boxSize={4} mr={2} />
                Join
            </Button>
        </Box>
    );

}