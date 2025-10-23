"use client";

import { useEffect, useRef, useState } from "react";

export default function StickyAdBanners() {
  const [ready, setReady] = useState(false);
  const [showTop, setShowTop] = useState(false);
  const [showBottom, setShowBottom] = useState(false);
  const topRef = useRef(null);
  const bottomRef = useRef(null);

  // ✅ Wait for full page load
  useEffect(() => {
    const onLoad = () => setReady(true);
    if (document.readyState === "complete") setReady(true);
    else window.addEventListener("load", onLoad);
    return () => window.removeEventListener("load", onLoad);
  }, []);

  // ✅ Inject AdSense script once
  useEffect(() => {
    if (!ready) return;

    if (!document.querySelector("script[data-adsbygoogle]")) {
      const s = document.createElement("script");
      s.src =
        "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2964380688781577";
      s.async = true;
      s.crossOrigin = "anonymous";
      s.setAttribute("data-adsbygoogle", "true");
      document.body.appendChild(s);
    }

    // ✅ Push ads and detect fill
    const tryPush = (ref, setShow) => {
      if (!ref.current) return;
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
        // Check if AdSense actually filled the slot
        const checkAd = setInterval(() => {
          const iframe = ref.current.querySelector("iframe");
          if (iframe && iframe.offsetHeight > 0) {
            setShow(true);
            clearInterval(checkAd);
          }
        }, 800);

        // Stop checking after 5 seconds (no fill)
        setTimeout(() => clearInterval(checkAd), 5000);
      } catch (e) {
        console.warn("AdSense push failed:", e);
      }
    };

    const timer = setTimeout(() => {
      tryPush(topRef, setShowTop);
      tryPush(bottomRef, setShowBottom);
    }, 500);

    return () => clearTimeout(timer);
  }, [ready]);

  // ✅ Don’t render anything before page load or ad fill
  if (!ready) return null;

  return (
    <>
      {/* 🟦 Sticky Top Ad — only visible if filled */}
      {showTop && (
        <div
          className="fixed top-0 left-0 w-full z-40 flex justify-center bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm"
          style={{ height: "60px" }}
        >
          <ins
            ref={topRef}
            className="adsbygoogle"
            style={{
              display: "block",
              width: "100%",
              height: "60px",
              textAlign: "center",
            }}
            data-ad-client="ca-pub-2964380688781577"
            data-ad-slot="8347811225"
            data-ad-format="auto"
            data-full-width-responsive="true"
          ></ins>
        </div>
      )}

      {/* 🟨 Sticky Bottom Ad — only visible if filled */}
      {showBottom && (
        <div
          className="fixed bottom-0 left-0 w-full z-40 flex justify-center bg-white/95 backdrop-blur-sm border-t border-gray-200 shadow-inner"
          style={{ height: "60px" }}
        >
          <ins
            ref={bottomRef}
            className="adsbygoogle"
            style={{
              display: "block",
              width: "100%",
              height: "60px",
              textAlign: "center",
            }}
            data-ad-client="ca-pub-2964380688781577"
            data-ad-slot="2803840502"
            data-ad-format="auto"
            data-full-width-responsive="true"
          ></ins>
        </div>
      )}

      {/* ✅ Only add spacers if the ad is truly visible */}
      {showTop && <div className="h-[60px]" />}
      {showBottom && <div className="h-[60px]" />}
    </>
  );
}
