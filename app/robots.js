export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        disallow: ["/api/", "/admin/", "/_next/", "/node_modules/", "/private/"],
      },
    ],
    sitemap: "https://jpgstopdf.com/sitemap.xml",
  };
}
