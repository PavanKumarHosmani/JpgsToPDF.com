export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/_next/static/"],
        disallow: ["/api/", "/admin/", "/node_modules/", "/private/"],
      },
    ],
    sitemap: "https://www.jpgstopdf.com/sitemap.xml",
  };
}
