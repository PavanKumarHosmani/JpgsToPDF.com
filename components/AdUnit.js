"use client";
import { useEffect } from "react";

export default function AdUnit() {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error("Adsense error:", e);
    }
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block", width: "100%", minHeight: "250px" }}
      data-ad-client="ca-pub-2964380688781577"
      data-ad-format="auto"
      data-full-width-responsive="true"
    ></ins>
  );
}
