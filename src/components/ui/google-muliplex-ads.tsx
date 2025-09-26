"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    adsbygoogle: unknown[];
  }
}

const AdSenseMultiplexAd = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) {
        console.log("AdSense error:", e);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block" }}
      data-ad-client="ca-pub-3383607348636418"
      data-ad-slot="5458108440"
      data-ad-format="autorelaxed"
    />
  );
};

export default AdSenseMultiplexAd;
