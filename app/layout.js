// app/layout.js
import "../styles/globals.css";

export const metadata = {
  title: "PDFsMerger.com | Free Online PDF Merger",
  description: "Merge multiple PDF files online for free. Secure, fast, and easy PDF merging.",
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
          "name": "JPGStopPDF"
        }
      },
      {
        "@type": "Organization",
        "name": "JPGStopPDF",
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
        {children}
      </body>
    </html>
  );
}
