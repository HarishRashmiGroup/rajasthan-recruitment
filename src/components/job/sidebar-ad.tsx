"use client";

import React, { useEffect, useRef, useState } from "react";
import { Box, Image } from "@chakra-ui/react";

declare global {
  interface Window {
    adsbygoogle: Record<string, unknown>[];
  }
}

const SidebarAd: React.FC = () => {
  const adRef = useRef<HTMLDivElement>(null);
  const [adLoaded, setAdLoaded] = useState(false);

  useEffect(() => {
    try {
      window.adsbygoogle = window.adsbygoogle || [];
      window.adsbygoogle.push({});

      setTimeout(() => {
        if (adRef.current && adRef.current.childNodes.length > 0) {
          setAdLoaded(true);
        } else {
          setAdLoaded(false);
        }
      }, 2000);
    } catch (e) {
      console.error("AdSense error:", e);
      setAdLoaded(false);
    }

    const interval = setInterval(() => {
      setAdLoaded(false); 
      try {
        window.adsbygoogle.push({});
      } catch {}
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      minW="120px"
      maxW="250px"
      display={{ base: "none", md: "block" }}
      position="relative"
    >
      {adLoaded ? (
        <Box
          as="ins"
          className="adsbygoogle"
          ref={adRef}
          style={{ display: "block", width: "200px", height: "450px" }}
          data-ad-client="ca-pub-3383607348636418"
          data-ad-slot="7891680227"
        />
      ) : (
        <Image
          src="/rr_adv.png"
          alt="Fallback Ad"
          borderRadius="md"
          position="sticky"
          top="150px"
        />
      )}
    </Box>
  );
};

export default SidebarAd;
