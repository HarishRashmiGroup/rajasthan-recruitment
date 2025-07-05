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
import { ChevronDownIcon } from 'lucide-react';

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
    slug: string;
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
            "id": "1",
            "title": "RSMSSB – Village Development Officer (VDO) 2025: Check Eligibility, Vacancies & Apply Online",
            "image": "https://blackbuck.blob.core.windows.net/blackbucks-media/Screenshot_2025-06-30_105048.png-1751260909100",
            "source": "RSMSSB",
            "timeAgo": "12h",
            "likes": 80,
            "comments": 7,
            "shares": 10,
            "isLarge": true,
            "sourceLogo": "https://rsmssb.rajasthan.gov.in/Static/website/images/logo_img.png",
            "slug": "rajasthan-rssb-vdo-recruitment-2025-guide"
        },
        {
            "id": "2",
            "title": "RPSC – School Lecturer (School Education) 2024: Check Eligibility, Vacancies & Apply Online",
            "image": "https://blackbuck.blob.core.windows.net/blackbucks-media/Screenshot_2025-06-30_105713.png-1751261245200",
            "source": "RPSC",
            "timeAgo": "4h",
            "likes": 58,
            "comments": 12,
            "shares": 2,
            "sourceLogo": "https://rpsc.rajasthan.gov.in/Images/RPSC_Logo.png",
            "slug": "rpsc-school-lecturer-2024-apply-online"
        },
        {
            "id": "3",
            "title": "RSMSSB – Group D (Class IV) 2025: Check Eligibility, Vacancies & Apply Online",
            "image": "https://blackbuck.blob.core.windows.net/blackbucks-media/Screenshot_2025-06-30_110338.png-1751261633873",
            "source": "RSMSSB",
            "timeAgo": "5h",
            "likes": 11,
            "comments": 19,
            "shares": 3,
            "sourceLogo": "https://rsmssb.rajasthan.gov.in/Static/website/images/logo_img.png",
            "slug": "rsmssb-group-d-recruitment-2025"
        },
        {
            "id": "4",
            "title": "Rajasthan High Court – Peon/Class-IV 2025: Check Eligibility, Vacancies & Apply Online",
            "image": "https://blackbuck.blob.core.windows.net/blackbucks-media/Screenshot_2025-06-30_110806.png-1751261901726",
            "source": "Rajasthan High Court",
            "timeAgo": "5h",
            "likes": 74,
            "comments": 6,
            "shares": 4,
            "sourceLogo": "https://hcraj.nic.in/hcraj/img/logo12102023.png",
            "slug": "rajasthan-high-court-peon-class-iv-2025"
        },
        {
            "id": "7",
            "title": "RSMSSB – Conductor Recruitment 2025X: Check Eligibility, Vacancies & Apply Online",
            "image": "https://blackbuck.blob.core.windows.net/blackbucks-media/Screenshot_2025-06-30_111611.png-1751262387324",
            "source": "RSMSSB",
            "timeAgo": "12h",
            "likes": 89,
            "comments": 6,
            "shares": 7,
            "isLarge": true,
            "sourceLogo": "https://rsmssb.rajasthan.gov.in/Static/website/images/logo_img.png",
            "slug": "rsmssb-conductor-recruitment-2025-apply-online"
        },
        {
            "id": "9",
            "title": "RSMSSB – Librarian Grade III 2025: Check Eligibility, Vacancies & Apply Online",
            "image": "https://blackbuck.blob.core.windows.net/blackbucks-media/Screenshot_2025-06-30_111915.png-1751262568321",
            "source": "RSMSSB",
            "timeAgo": "6h",
            "likes": 24,
            "comments": 20,
            "shares": 8,
            "sourceLogo": "https://rsmssb.rajasthan.gov.in/Static/website/images/logo_img.png",
            "slug": "rsmssb-librarian-grade-iii-2025"
        },
        {
            "id": "10",
            "title": "CURAJ Recruitment 2025: Apply for Professors, Associate & Assistant Professors",
            "image": "https://blackbuck.blob.core.windows.net/blackbucks-media/CURAJ_Recruitment_2025.png-1751699244834",
            "source": "CURAJ",
            "timeAgo": "6h",
            "likes": 24,
            "comments": 20,
            "isLarge": true,
            "shares": 8,
            "sourceLogo": "https://th.bing.com/th/id/OSK.c854a1a56084d3fc19a6719b113af6db?w=80&h=80&r=0&o=6&cb=B&pid=23.1",
            "slug": "curaj-teaching-recruitment-2025"
        }
    ]
        ;


    return (
        <Box w={'full'} display={'flex'} width={'full'} gap={4} position={'relative'} py={8} px={0} mb={16}>
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
                        <LinkWithLoader href={`/blog/${blog.slug}`}>
                            <BlogCard {...blog} />
                        </LinkWithLoader>
                    </Box>
                ))}
            </SimpleGrid>
            <Box maxW={'250px'} display={{ base: 'none', md: 'block' }} position={'relative'}>
                <Image alt='Advertisement' borderRadius={'md'} zIndex={2} position={{ base: 'relative', md: 'sticky', lg: 'sticky' }} top={{ base: 'auto', md: '102px' }} src="rr_adv.png"></Image>
            </Box>
            <Box position={'absolute'} w={'full'} display={'flex'} justifyContent={'center'} bottom={-12}>
                <Box border={'2px solid #5d93fe'} borderRadius={'lg'} _hover={{ bg: '#DEE9FF', cursor: 'pointer' }}>
                    <LinkWithLoader href='/blogs'>
                        <Box p={2} display={'flex'} alignItems={'center'} gap={2}>
                            <Text color={'#5d93fe'}>View More</Text>
                            <ChevronDownIcon size={20} color='#5d93fe' />
                        </Box>
                    </LinkWithLoader>
                </Box>
            </Box>
        </Box>
    );
};

export default BlogHome;