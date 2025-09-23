"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    adsbygoogle: unknown[];
  }
}

interface AdSenseAdProps {
  slot: string; // Ad slot ID (required)
  client?: string; // AdSense client ID (default to yours)
  style?: React.CSSProperties; // Optional CSS
  format?: string; // e.g., "auto", "rectangle", "fluid"
  layoutKey?: string; // Optional layout key for fluid ads
  width?: number | string; // Optional width (px or %)
  height?: number | string; // Optional height (px or %)
}

const AdSenseAd: React.FC<AdSenseAdProps> = ({
  slot,
  client = "ca-pub-3383607348636418",
  style,
  format = "auto",
  layoutKey,
  width,
  height,
}) => {
  useEffect(() => {
    try {
      if (typeof window !== "undefined") {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (e) {
      console.error("AdSense error:", e);
    }
  }, []);

  const mergedStyle: React.CSSProperties = {
    display: "block",
    width: width || undefined,
    height: height || undefined,
    ...style,
  };

  return (
    <ins
      className="adsbygoogle"
      style={mergedStyle}
      data-ad-client={client}
      data-ad-slot={slot}
      data-ad-format={format}
      {...(layoutKey ? { "data-ad-layout-key": layoutKey } : {})}
      {...(width || height
        ? {
            "data-full-width-responsive":
              format === "auto" ? "true" : undefined,
          }
        : {})}
    />
  );
};

export default AdSenseAd;
