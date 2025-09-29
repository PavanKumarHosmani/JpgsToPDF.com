import "./styles/globals.css";
import Header from '../components/Header';
import Footer from '../components/Footer';
import GoogleAnalytics from '../components/GoogleAnalytics';

export const metadata = {
  title: "JPGStoPDF | Convert Images to PDF",
  description: "Free online JPG to PDF converter with secure and fast processing.",
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
        <link rel="canonical" href={canonicalUrl} />
        <link rel="alternate" href={canonicalUrl} hrefLang="en-us" />
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
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
      </head>
      <body>
        <GoogleAnalytics measurementId="G-XXXXXXXXXX" />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

