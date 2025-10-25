import bundleAnalyzer from "@next/bundle-analyzer";

/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: false,
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  swcMinify: true,

  images: {
    formats: ["image/avif", "image/webp"],
    domains: ["www.jpgstopdf.com", "pagead2.googlesyndication.com"],
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },

  async redirects() {
    return [
      { source: "/:path*/index.html", destination: "/:path*", permanent: true },
      { source: "/:path*/index.php", destination: "/:path*", permanent: true },
      {
        source: "/:path*/:file(Index|INDEX).html",
        destination: "/:path*",
        permanent: true,
      },
      {
        source: "/:path*/:file(Index|INDEX).php",
        destination: "/:path*",
        permanent: true,
      },
      { source: "/:path*.html", destination: "/:path*", permanent: true },
      { source: "/:path*.php", destination: "/:path*", permanent: true },
      {
        source: "/:path*/",
        has: [{ type: "header", key: "accept", value: "text/html" }],
        destination: "/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "jpgstopdf.com" }],
        destination: "https://www.jpgstopdf.com/:path*",
        permanent: true,
      },
    ];
  },

  // ✅ Webpack optimization (safe for dev & prod)
  webpack: (config, { dev, isServer }) => {
    // ✅ Only load Critters during *build time*, not dev server
    if (!dev && !isServer && process.env.NODE_ENV === "production") {
      try {
        const Critters = require("critters-webpack-plugin"); // ⬅️ CommonJS require avoids import.meta
        config.plugins.push(
          new Critters({
            preload: "swap",
            inlineFonts: true,
            pruneSource: false, // Keep Tailwind CSS intact
            reduceInlineStyles: true,
          })
        );
      } catch (err) {
        console.warn("⚠️ Skipping Critters in dev:", err.message);
      }
    }

    if (!dev && !isServer) {
      config.resolve.alias["react-dom"] = "react-dom/profiling";
      config.resolve.alias["scheduler/tracing"] =
        "scheduler/tracing-profiling";
    }

    return config;
  },
};

// ✅ Bundle Analyzer wrapper
const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

export default withBundleAnalyzer(nextConfig);
