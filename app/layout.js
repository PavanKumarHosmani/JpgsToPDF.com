// app/layout.js
import "./styles/globals.css"; // ✅ Tailwind + global CSS
import Header from "../components/Header";
import Footer from "../components/Footer";
import Script from "next/script";

export const revalidate = 86400; // cache page for 24 hours

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
  return (
    <html lang="en">
      <head>
        {/* ✅ Preconnect for AdSense performance */}
        <link rel="preconnect" href="https://pagead2.googlesyndication.com" />
        <link rel="preconnect" href="https://googleads.g.doubleclick.net" crossOrigin="anonymous"/>
        <link rel="dns-prefetch" href="https://pagead2.googlesyndication.com" />
        <link rel="dns-prefetch" href="https://googleads.g.doubleclick.net" />

        {/* ✅ Basic meta */}
        <meta
          name="google-adsense-account"
          content="ca-pub-2964380688781577"
        />
        <link rel="icon" href="/favicon.ico" />

        {/* ✅ Inline minimal critical CSS */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
              body {
  background:#fff;
  color:#111827;
  font-family:system-ui,sans-serif;
  -webkit-font-smoothing:antialiased;
  -moz-osx-font-smoothing:grayscale;
}
              header, footer { display: block; }
            `,
          }}
        />
      </head>

      <body className="bg-white text-gray-900">
        {/* ✅ Layout structure */}
        <Header />
        {children}
        <Footer />

        {/* ✅ Proper AdSense loader (inside body to avoid head warnings) change Strategy to "afterInteractive"*/} 
        <Script
          id="adsense-script"
          async
          strategy="lazyOnload" 
          crossOrigin="anonymous"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2964380688781577"
        />

        {/* ✅ Balanced 2-second delay for CLS stability and performance */}
        <Script id="adsense-delay" strategy="afterInteractive">
          {`
            window.addEventListener('load', function () {
              setTimeout(() => {
                try {
                  (adsbygoogle = window.adsbygoogle || []).push({});
                } catch (e) {
                  console.warn('AdSense not ready yet:', e);
                }
              }, 3500); // ✅ 2 seconds delay
            });
          `}
        </Script>

        {/* ✅ Structured data for SEO */}
        <Script
          id="ld-json"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "applicationCategory": "UtilityApplication",
              "operatingSystem": "All",
              "url": "https://www.jpgstopdf.com",
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
