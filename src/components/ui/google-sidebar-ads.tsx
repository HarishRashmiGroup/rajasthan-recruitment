"use client";

import { useEffect } from "react";

interface AdSenseAd {
  [key: string]: unknown;
}

declare global {
  interface Window {
    adsbygoogle: AdSenseAd[];
  }
}
const AdSenseAd = () => {
  useEffect(() => {
    try {
      if (window) {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (e) {
      console.error("AdSense error:", e);
    }
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block" }}
      data-ad-client="ca-pub-3383607348636418"
      data-ad-slot="4740370254"
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  );
};

export default AdSenseAd;
