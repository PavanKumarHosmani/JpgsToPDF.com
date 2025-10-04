// app/layout.js
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
  openGraph: {
    title: "JPG to PDF Converter",
    description:
      "Free JPG to PDF converter online. Convert JPG, PNG & WebP images to PDF instantly and securely.",
    url: "https://www.jpgstopdf.com/",
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
        {/* ✅ AdSense verification (no duplicates) */}
        <meta name="google-adsense-account" content="ca-pub-2964380688781577" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2964380688781577"
          crossOrigin="anonymous"
        ></script>

        {/* ✅ Google Analytics (replace G-XXXXXXXXXX with your ID) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX', { page_path: window.location.pathname });
            `,
          }}
        />
      </head>
      <body>
        <Header />
        {children}
        <Footer />

        {/* ✅ Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              url: "https://www.jpgstopdf.com/",
              name: "JPG to PDF Converter | Free JPG, PNG & WebP to PDF Converter",
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
