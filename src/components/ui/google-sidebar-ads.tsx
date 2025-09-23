"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    adsbygoogle: unknown[];
  }
}

interface AdSenseAdProps {
  slot: string;
  client?: string;
  style?: React.CSSProperties;
  format?: string;
  layoutKey?: string;
  width?: number | string;
  height?: number | string;
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
