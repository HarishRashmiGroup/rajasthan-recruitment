"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    adsbygoogle: unknown[];
  }
}

interface AdProps {
  slot: string; 
  format?: string;
  style?: React.CSSProperties;
}

const AdSenseAd: React.FC<AdProps> = ({ slot, format = "auto", style }) => {
  useEffect(() => {
    try {
      if (typeof window !== "undefined") {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (e) {
      console.error("AdSense error:", e);
    }
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block", ...style }}
      data-ad-client="ca-pub-3383607348636418"
      data-ad-slot={slot}
      data-ad-format={format}
      data-full-width-responsive={format === "auto" ? "true" : undefined}
    />
  );
};

export default AdSenseAd;
