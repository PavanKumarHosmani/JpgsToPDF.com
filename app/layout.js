import "./styles/globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import GoogleAnalytics from "../components/GoogleAnalytics";
import { SpeedInsights } from "@vercel/speed-insights/next"

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
      <body>
        <GoogleAnalytics measurementId="G-XXXXXXXXXX" />
        <Header />

        <main>{children}</main>
         <SpeedInsights/>

        <Footer />

        {/* ✅ Google Ads */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2964380688781577"
          crossOrigin="anonymous"
        ></script>

        {/* ✅ Global Structured Data (Webpage) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              url: "https://www.jpgstopdf.com/",
              name: metadata.title,
              description: metadata.description,
            }),
          }}
        />
      </body>
    </html>
  );
}
