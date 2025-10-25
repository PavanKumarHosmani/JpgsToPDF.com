import "./styles/globals.css"; // ✅ Tailwind + global CSS
import Header from "../components/Header";
import Footer from "../components/Footer";
import StickyAdBanners from "../components/StickyAdBanners";
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
        {/* ✅ Preconnect for faster AdSense DNS */}
        <link rel="preconnect" href="https://pagead2.googlesyndication.com" />
        <link rel="preconnect" href="https://googleads.g.doubleclick.net" />

        {/* ✅ Preload LCP image & CSS */}
        <link rel="preload" as="image" href="/apple-touch-icon.png" />
        <link rel="preload" as="style" href="/_next/static/css/app/layout.css" />

        <meta
          name="google-adsense-account"
          content="ca-pub-2964380688781577"
        />
        <link rel="icon" href="/favicon.ico" />

        {/* ✅ Inline minimal critical CSS for instant paint */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
              body { background: #fff; color: #111827; }
              header, footer { display: block; }
            `,
          }}
        />

        {/* ✅ Defer layout.css loading (non-blocking print trick) */}
        <Script id="defer-layout-css" strategy="afterInteractive">
          {`
            requestIdleCallback(() => {
              const cssLink = document.createElement('link');
              cssLink.rel = 'stylesheet';
              cssLink.href = '/_next/static/css/app/layout.css';
              cssLink.media = 'print';
              cssLink.onload = () => (cssLink.media = 'all');
              document.head.appendChild(cssLink);
            });
          `}
        </Script>
      </head>

      <body className="bg-white text-gray-900">
        {/* ✅ Layout structure */}
        <Header />
        <StickyAdBanners />
        {children}
        <Footer />

        {/* ✅ Lazy-load AdSense after page load */}
        <Script id="adsense-loader" strategy="afterInteractive">
          {`
            window.addEventListener('load', function() {
              requestIdleCallback(() => {
                const s = document.createElement('script');
                s.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2964380688781577';
                s.async = true;
                s.crossOrigin = 'anonymous';
                document.body.appendChild(s);
              });
            });
          `}
        </Script>

        {/* ✅ Structured Data for SEO */}
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
