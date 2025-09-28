// app/layout.js
import "../styles/globals.css";
import Script from 'next/script';

export const metadata = {
  title: "JGPSToPDF.com | Images JPG to PDF online",
  description: "Convert JPG images to PDF online for free. Fast, easy, and secure JPG to PDF converter.",
};

export default function RootLayout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "name": "PDFsMerger",
        "url": "https://www.jpgstopdf.com",
        "description": "Merge multiple PDF files online for free. Secure, fast, and easy PDF merging.",
        "applicationCategory": "Utility",
        "operatingSystem": "Web",
        "creator": {
          "@type": "Organization",
          "name": "JPGStoPDF"
        }
      },
      {
        "@type": "Organization",
        "name": "JPGStoPDF",
        "url": "https://www.jpgstopdf.com",
        "logo": "https://www.jpgstopdf.com/logo.png",
        "sameAs": [
          "https://twitter.com/YourTwitter",
          "https://www.facebook.com/YourFacebook"
        ]
      }
    ]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />

      </head>
      <body className="bg-gray-50 text-gray-800 antialiased">
      <Script
      id="adsense-script"
      strategy="afterInteractive"
      async
      src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2964380688781577"
      crossOrigin="anonymous"
    />
        {children}
      </body>
    </html>
  );
}
