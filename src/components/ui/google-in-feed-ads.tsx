"use client";

import { useEffect } from "react";

const InFeedAd: React.FC = () => {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
      console.log("4568995773");
    } catch (e) {
      console.error("AdSense error:", e);
    }
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block" }}
      data-ad-format="fluid"
      data-ad-layout-key="-fu-2i-17-2d+rw"
      data-ad-client="ca-pub-3383607348636418"
      data-ad-slot="4568995773"
    ></ins>
  );
};

export default InFeedAd;
