import { BlogCardProps } from "@/lib/api/types";
import { Avatar, Badge, Box, HStack, Image, Text, VStack } from "@chakra-ui/react";
import BlogStats from "./blog-stats";
import PlayOverlay from "../ui/play-overlay";

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
export default BlogCard;