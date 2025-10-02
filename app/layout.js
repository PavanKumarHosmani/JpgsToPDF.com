import "./styles/globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import GoogleAnalytics from "../components/GoogleAnalytics";
import { SpeedInsights } from "@vercel/speed-insights/next";

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
    canonical: "https://www.jpgstopdf.com/",
    languages: {
      "en-US": "https://www.jpgstopdf.com/",
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* ✅ AdSense Verification Meta */}
        <meta
          name="google-adsense-account"
          content="ca-pub-2964380688781577"
        />

        {/* ✅ Google AdSense Script */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2964380688781577"
          crossOrigin="anonymous"
        ></script>

        {/* ✅ Social Meta Tags */}
        <meta property="og:title" content="JPG to PDF Converter" />
        <meta
          property="og:description"
          content="Free JPG to PDF converter online. Convert JPG, PNG & WebP images to PDF instantly and securely."
        />
        <meta property="og:url" content="https://www.jpgstopdf.com/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.jpgstopdf.com/apple-touch-icon.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="JPG to PDF Converter" />
        <meta
          name="twitter:description"
          content="Convert JPG, PNG, and WebP images to PDF instantly. Free, fast, and secure online tool."
        />
        <meta
          name="twitter:image"
          content="https://www.jpgstopdf.com/apple-touch-icon.png"
        />
      </head>

      <body>
        {/* ✅ Analytics */}
        <GoogleAnalytics measurementId="G-XXXXXXXXXX" />
        <SpeedInsights />

        {/* ✅ Layout */}
        <Header />
        <main>{children}</main>
        <Footer />

        {/* ✅ Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              url: "https://www.jpgstopdf.com/",
              name: metadata.title,
              description: metadata.description,
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
