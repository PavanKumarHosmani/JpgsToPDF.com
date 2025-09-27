// app/layout.js
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "https://www.jpgstopdf.com | Convert JPG to PDF",
  description:
    "Convert JPG images to PDF in seconds. Easily adjust orientation and margins. Upload your file and transform it. Select JPG images..",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "name": "JPGStopPDF",
        "url": "https://www.jpgstopdf.com",
        "description":
          "Convert JPG images to PDF in seconds. Easily adjust orientation and margins. Upload your file and transform it. Select JPG images.",
        "applicationCategory": "Utility",
        "operatingSystem": "Web",
        "creator": {
          "@type": "Organization",
          "name": "JPGStopPDF",
        },
      },
      {
        "@type": "Organization",
        "name": "JPGStopPDF",
        "url": "https://www.jpgstopdf.com",
        "logo": "https://www.jpgstopdf.com/logo.png",
        "sameAs": [
          "https://twitter.com/YourTwitter",
          "https://www.facebook.com/YourFacebook",
        ],
      },
    ],
  };

  return (
    <html lang="en">
      <head>
        {/* Favicon / Icons */}
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="48x48" href="/favicon-48x48.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon-1536x1536.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
