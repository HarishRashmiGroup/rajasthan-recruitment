import React from 'react';
import {
    Box,
    Text,
    Image,
    HStack,
    VStack,
    SimpleGrid,
    Badge,
    Avatar
} from '@chakra-ui/react';
import BlogStats from './BlogStats';
import PlayOverlay from './PlayOverlay';
import LinkWithLoader from './LinkWithLoader';

interface BlogCardProps {
    id: string;
    title: string;
    image: string;
    source: string;
    timeAgo: string;
    likes: number;
    comments: number;
    shares: number;
    isSponsored?: boolean;
    isLarge?: boolean;
    hasPlayButton?: boolean;
    sourceLogo?: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
    title,
    image,
    source,
    timeAgo,
    likes,
    comments,
    shares,
    isSponsored = false,
    isLarge = false,
    hasPlayButton = false,
    sourceLogo
}) => {
    return (
        <Box
            bg="white"
            borderRadius="xl"
            overflow="hidden"
            boxShadow="sm"
            border="1px"
            borderColor="gray.100"
            transition="all 0.2s"
            _hover={{
                boxShadow: 'md',
                transform: 'translateY(-2px)',
            }}
            cursor="pointer"
            h="full"
        >
            <Box position="relative">
                <Image
                    src={image}
                    alt={title}
                    w="full"
                    h={isLarge ? "200px" : "150px"}
                    objectFit="cover"
                />
                {hasPlayButton && (
                    <PlayOverlay />
                )}
                {isSponsored && (
                    <Badge
                        position="absolute"
                        top={2}
                        right={2}
                        bg="#DEE9FF"
                        pl={1}
                        pr={1}
                        color={'#5d93fe'}
                        fontSize="xs"
                    >
                        Sponsored
                    </Badge>
                )}
            </Box>

            <VStack h={'full'} p={4} align="start" gap={2}>
                <HStack w="full">
                    {sourceLogo && (
                        <Avatar.Root size={'sm'} key={sourceLogo}>
                            <Avatar.Fallback name={source} />
                            <Avatar.Image src={sourceLogo} />
                        </Avatar.Root>
                    )}
                    <Text fontSize="sm" color="gray.600" fontWeight="medium">
                        {source}
                    </Text>
                    <Text fontSize="sm" color="gray.400">
                        •
                    </Text>
                    <Text fontSize="sm" color="gray.400">
                        {timeAgo}
                    </Text>
                </HStack>

                <Text
                    fontSize={isLarge ? "lg" : "md"}
                    fontWeight="semibold"
                    color="gray.800"
                    lineHeight="1.4"
                    maxLines={isLarge ? 3 : 2}
                >
                    {title}
                </Text>
                <BlogStats likes={likes} comments={comments} shares={shares} />
            </VStack>
        </Box>
    );
};

const BlogHome: React.FC = () => {
    const blogData: BlogCardProps[] = [
        {
            id: '1',
            title: 'RPSC RAS 2025 Notification Released: Check Eligibility, Vacancies & Apply Online',
            image: 'https://th.bing.com/th/id/OIP.kVo6qJobGsHqxDl81pmI4AHaEK?w=297&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
            source: 'RPSC',
            timeAgo: '2h',
            likes: 20,
            comments: 5,
            shares: 3,
            sourceLogo: 'https://upload.wikimedia.org/wikipedia/en/4/43/Rajasthan_Public_Service_Commission_logo.png'
        },
        {
            id: '2',
            title: 'REET 2025: Application Form Released — Important Dates and Syllabus Overview',
            image: 'https://th.bing.com/th/id/OIP.f3N9UIPNFRhgiLlLtP-VzgHaEK?w=271&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
            source: 'Board of Secondary Education Rajasthan',
            timeAgo: '6h',
            likes: 15,
            comments: 3,
            shares: 2,
            isSponsored: true,
            sourceLogo: 'https://bsedotnic.in/images/logo.png'
        },
        {
            id: '3',
            title: 'Start Free Today – Online Coaching for RPSC & REET — Limited Seats!',
            image: 'https://th.bing.com/th/id/OIP.8Yvwj4y_rdBeI9KirJnKfwHaDF?w=312&h=145&c=7&r=0&o=5&dpr=1.3&pid=1.7',
            source: 'EdTech Partner',
            timeAgo: '',
            likes: 0,
            comments: 0,
            shares: 0,
            isSponsored: false,
            hasPlayButton: true
        },
        {
            id: '4',
            title: 'Rajasthan Police Constable 2025: Admit Card Download Link Activated',
            image: 'https://th.bing.com/th/id/OIP.tfx-9w2-2hv7XOCZJ6UsJgHaEc?w=286&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
            source: 'Police Recruitment Board',
            timeAgo: '10h',
            likes: 28,
            comments: 1,
            shares: 4,
            sourceLogo: 'https://police.rajasthan.gov.in/images/logo.png'
        },
        {
            id: '5',
            title: 'RSMSSB Agriculture Supervisor Result 2025 Declared — Direct Link Here',
            image: 'https://th.bing.com/th/id/OIP.71PVjjV4wFy5NnLdZNHfLAHaEK?w=313&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
            source: 'RSMSSB',
            timeAgo: '1d',
            likes: 12,
            comments: 0,
            shares: 1,
            isLarge: true,
            sourceLogo: 'https://rsmssb.rajasthan.gov.in/images/logo.png'
        },
        {
            id: '6',
            title: 'Rajasthan High Court Clerk Recruitment 2025: Apply Before June 15',
            image: 'https://th.bing.com/th/id/OIP.8Yvwj4y_rdBeI9KirJnKfwHaDF?w=312&h=145&c=7&r=0&o=5&dpr=1.3&pid=1.7',
            source: 'Rajasthan High Court',
            timeAgo: '3h',
            likes: 5,
            comments: 1,
            shares: 0,
            sourceLogo: 'https://hcraj.nic.in/hcraj/hcraj_logo.jpg'
        },
        {
            id: '7',
            title: 'Upcoming Government Exams in Rajasthan: June-July 2025 Schedule',
            image: 'https://th.bing.com/th/id/OIP.ubiC3u0N8GW4dVtRXTsrAgHaEK?w=290&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
            source: 'Exam Calendar Desk',
            timeAgo: '12h',
            likes: 18,
            comments: 2,
            shares: 2,
            sourceLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Map_of_Rajasthan.svg/1200px-Map_of_Rajasthan.svg.png'
        }
    ];


    return (
        <Box w={'full'} display={'flex'} width={'full'} gap={4} position={'relative'} py={8} px={0}>
            <SimpleGrid
                columns={{ base: 1, md: 2, lg: 3, xl: 4 }}
                templateRows="auto"
                gap={4}
            >
                {blogData.map((blog, index) => (
                    <Box
                        key={`${blog.id}_${index}`}
                        gridColumn={{
                            base: "span 1",
                            md: blog.isLarge ? "span 2" : "span 1",
                            lg: blog.isLarge ? "span 2" : "span 1"
                        }}
                    >
                        <LinkWithLoader href={`/blog/ssc-cgl-2024-complete-guide`}>
                            <BlogCard {...blog} />
                        </LinkWithLoader>
                    </Box>
                ))}
            </SimpleGrid>
            <Box maxW={'250px'} display={{ base: 'none', md: 'block' }} position={'relative'}>
                <Image alt='Advertisement' borderRadius={'md'} zIndex={2} position={{ base: 'relative', md: 'sticky', lg: 'sticky' }} top={{ base: 'auto', md: '102px' }} src="rr_adv.png"></Image>
            </Box>
        </Box>
    );
};

export default BlogHome;