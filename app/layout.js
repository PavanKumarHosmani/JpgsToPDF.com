import "./styles/globals.css";
import Header from '../components/Header';
import Footer from '../components/Footer';
import GoogleAnalytics from '../components/GoogleAnalytics';

export const metadata = {
  title: "JPGStoPDF | Convert Images to PDF",
  description: "Convert JPG, PNG, and WebP images to PDF instantly. Adjust orientation, margins, merge multiple files, and download high-quality PDFs online for free.",
  icons: {
    icon: "/favicon-32x32.png",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  const canonicalUrl = "https://www.jpgstopdf.com";

  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content="jpg to pdf, image to pdf, convert jpg, convert png, merge pdf, free pdf converter" />
        <link rel="canonical" href={canonicalUrl} />
        <link rel="alternate" href={canonicalUrl} hrefLang="en-us" />

        {/* Favicon */}
        <link rel="icon" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              url: canonicalUrl,
              name: metadata.title,
              description: metadata.description,
            }),
          }}
        />

        {/* Ads */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2964380688781577"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body>
        <GoogleAnalytics measurementId="G-XXXXXXXXXX" />
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
