import bundleAnalyzer from "@next/bundle-analyzer";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // ✅ Core setup
  trailingSlash: false,
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  swcMinify: true,

  // ✅ Image optimization
  images: {
    formats: ["image/avif", "image/webp"],
    domains: ["www.jpgstopdf.com", "pagead2.googlesyndication.com"],
  },

  // ✅ Security & caching headers
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

  // ✅ Redirect rules for SEO and canonical consistency
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

  // ✅ Webpack optimizations
  webpack: (config, { dev, isServer }) => {
    // Enable Critters only for production client build
    if (!dev && !isServer && process.env.NODE_ENV === "production") {
      try {
        const Critters = require("critters-webpack-plugin"); // use CommonJS require (fixes import.meta.url issue)
        config.plugins.push(
          new Critters({
            preload: "swap",
            inlineFonts: true,
            pruneSource: false, // Keep Tailwind CSS intact
            reduceInlineStyles: true,
          })
        );
      } catch (err) {
        console.warn("⚠️ Skipping Critters:", err.message);
      }
    }

    // ✅ Remove outdated React profiling aliases (cause of build failure)
    // (No need to manually alias react-dom in Next 14)
    return config;
  },
};

// ✅ Wrap with bundle analyzer (optional)
const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

export default withBundleAnalyzer(nextConfig);
