import fs from "fs";
import path from "path";
import Header from "../components/Header";
import Footer from "../components/Footer";
import StickyAdBanners from "../components/StickyAdBanners";
import Script from "next/script";

export const metadata = {
  title: "JPG to PDF Converter | Free JPG, PNG & WebP to PDF Converter",
  description:
    "Convert JPG, PNG, and WebP images to PDF instantly. Adjust orientation, margins, merge multiple files, and download high-quality PDFs online for free.",
  icons: {
    icon: "/favicon-32x32.png",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
  alternates: {
    canonical: "https://www.jpgstopdf.com",
    languages: { "en-US": "https://www.jpgstopdf.com" },
  },
  openGraph: {
    title: "JPG to PDF Converter",
    description:
      "Free JPG to PDF converter online. Convert JPG, PNG & WebP images to PDF instantly and securely.",
    url: "https://www.jpgstopdf.com",
    type: "website",
    images: [
      {
        url: "https://www.jpgstopdf.com/apple-touch-icon.png",
        width: 512,
        height: 512,
        alt: "JPGStoPDF Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "JPG to PDF Converter",
    description:
      "Convert JPG, PNG, and WebP images to PDF instantly. Free, fast, and secure online tool.",
    images: ["https://www.jpgstopdf.com/apple-touch-icon.png"],
  },
};

export default function RootLayout({ children }) {
  // ✅ Inline the small layout.css file directly
  let inlineCSS = "";
  try {
    const cssPath = path.join(process.cwd(), ".next/static/css/app/layout.css");
    inlineCSS = fs.readFileSync(cssPath, "utf8");
  } catch {
    inlineCSS = "body{background:#fff}"; // fallback if missing
  }

  // ✅ Also inline your global styles (optional)
  try {
    const globalPath = path.join(process.cwd(), "app/styles/globals.css");
    const globalCSS = fs.readFileSync(globalPath, "utf8");
    inlineCSS += "\n" + globalCSS;
  } catch {}

  return (
    <html lang="en">
      <head>
        {/* ✅ Inline critical CSS to eliminate render-blocking */}
        <style dangerouslySetInnerHTML={{ __html: inlineCSS }} />

        {/* ✅ Preconnect only necessary AdSense origins */}
        <link rel="preconnect" href="https://pagead2.googlesyndication.com" />
        <link rel="preconnect" href="https://googleads.g.doubleclick.net" />

        {/* ✅ Preload key image for LCP */}
        <link rel="preload" as="image" href="/apple-touch-icon.png" />

        <meta
          name="google-adsense-account"
          content="ca-pub-2964380688781577"
        />
        <link rel="icon" href="/favicon.ico" />
      </head>

      <body>
        <Header />
        <StickyAdBanners />
        {children}
        <Footer />

        {/* ✅ Lazy-load AdSense after full page load */}
        <Script id="adsense-loader" strategy="afterInteractive">
          {`
            window.addEventListener('load', function() {
              const s = document.createElement('script');
              s.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2964380688781577';
              s.async = true;
              s.crossOrigin = 'anonymous';
              document.body.appendChild(s);
            });
          `}
        </Script>

        {/* ✅ Structured Data for SEO */}
        <Script
          id="ld-json"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              url: "https://www.jpgstopdf.com",
              name:
                "JPG to PDF Converter | Free JPG, PNG & WebP to PDF Converter",
              description:
                "Convert JPG, PNG, and WebP images to PDF instantly. Adjust orientation, margins, merge multiple files, and download high-quality PDFs online for free.",
              publisher: {
                "@type": "Organization",
                name: "JPGStoPDF",
                logo: {
                  "@type": "ImageObject",
                  url: "https://www.jpgstopdf.com/apple-touch-icon.png",
                },
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
