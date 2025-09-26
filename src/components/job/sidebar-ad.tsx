import React from "react";
import { Box, Image } from "@chakra-ui/react";
import AdSenseAd from "../ui/google-sidebar-ads";

const SidebarAd: React.FC = () => (
  <Box
    minW="120px"
    maxW="250px"
    display={{ base: "none", md: "block" }}
    position="relative"
  >
    <Image
      borderRadius="md"
      zIndex={2}
      position={{ base: "relative", md: "sticky" }}
      top={{ base: "auto", md: "150px" }}
      alt="Advertisement"
      src="/rr_adv.png"
    />
    <Box
      height={"fit-content"}
      position={"sticky"}
      width={"full"}
      zIndex={2}
      top={"150px"}
      display={{ base: "none", xl: "flex" }}
    >
      {/* <AdSenseAd
        slot="7891680227"
        style={{ width: 200, height: 450 }}
        format="rectangle"
      /> */}
      <AdSenseAd />
    </Box>
  </Box>
);

export default SidebarAd;
