"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    adsbygoogle: unknown[];
  }
}

const AdSenseAd = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
        console.log("7891680227");
      } catch (e) {
        console.log("AdSense error:", e);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: "inline-block", width: 200, height: 600 }}
      data-ad-client="ca-pub-3383607348636418"
      data-ad-slot="7891680227"
    />
  );
};

export default AdSenseAd;
