import { Box, Image, Stack, Text } from "@chakra-ui/react";
export const LandingMotivation = () => {
  return (
    <Box position={"relative"} mb={{ sm: 2, md: 4 }}>
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        opacity="0.2"
      >
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="grid"
              width="50"
              height="50"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 50 0 L 0 0 0 50"
                fill="none"
                stroke="#5d93fe"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </Box>
      <Stack
        m={{ base: 2, md: 2, lg: 0 }}
        justifyContent={{ base: "space-between", md: "space-around" }}
        alignItems={"center"}
        display={"flex"}
        direction={{ base: "row", md: "row" }}
      >
        <Text color={"#6B7280"} fontSize={{ base: "16px", md: "48px" }}>
          राह सही हो तो,
          <br />
          कठिनाई भी आसान लगती है।
        </Text>
        <Image
          minW={{ base: "147px", md: "295.35px" }}
          maxH={{ base: "20vh", md: "35vh" }}
          alt="Study Motivation"
          src="/rr-home.jpg"
        ></Image>
      </Stack>
    </Box>
  );
};
