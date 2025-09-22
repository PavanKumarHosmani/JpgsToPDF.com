import "../styles/globals.css";

export const metadata = {
  title: "Free Online JPG to PDF Converter | JPGSTOPDF.COM",
  description:
    "Convert JPG, PNG, and WebP images to a single PDF online for free. Fast, secure, and works on all devices.",
  keywords:
    "jpg to pdf, jpg to pdf converter, image to pdf, merge images to pdf, free pdf converter",
  alternates: { canonical: "https://jpgstopdf.com" },
  openGraph: {
    title: "Free Online JPG to PDF Converter",
    description: "Easily merge JPG, PNG, and WebP images into a single PDF online.",
    url: "https://jpgstopdf.com",
    type: "website",
    images: [
      {
        url: "https://jpgstopdf.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Free JPG to PDF Converter",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Online JPG to PDF Converter",
    description: "Convert JPG, PNG, and WebP images into a PDF online for free.",
    images: ["https://jpgstopdf.com/og-image.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-800">
        {children}
      </body>
    </html>
  );
}
