// app/layout.js
import "./styles/globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import StickyAdBanners from "../components/StickyAdBanners";  // ✅ Add this
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
  return (
    <html lang="en">
      <head>
        <meta name="google-adsense-account" content="ca-pub-2964380688781577" />
        <link rel="preconnect" href="https://pagead2.googlesyndication.com" />
        <link rel="preconnect" href="https://googleads.g.doubleclick.net" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://fundingchoicesmessages.google.com" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <Header />

        {/* ✅ Sticky top & bottom AdSense banners */}
        <StickyAdBanners />

        {children}
        <Footer />

        {/* ✅ Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX', { page_path: window.location.pathname });
            `,
          }}
        />

        {/* ✅ AdSense global script (lazy) */}
        <Script
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2964380688781577"
          strategy="lazyOnload"
          crossOrigin="anonymous"
        />

        {/* ✅ Structured Data */}
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
