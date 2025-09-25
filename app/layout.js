// app/layout.js
import "../styles/globals.css";

export const metadata = {
  title: "PDFsMerger.com | Free Online PDF Merger",
  description: "Merge multiple PDF files online for free. Secure, fast, and easy PDF merging.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-800 antialiased">
        {children}
      </body>
    </html>
  );
}
