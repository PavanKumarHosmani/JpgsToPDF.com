import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Disclaimer | JPGStoPDF.COM",
  description: "Read the disclaimer for JPGStoPDF.COM. Learn about limitations, liability, and proper usage of our free online JPG to PDF converter.",
};

export default function DisclaimerPage() {
  const canonicalUrl = "https://www.jpgstopdf.com/disclaimer";

  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="canonical" href={canonicalUrl} />
        <link rel="alternate" href={canonicalUrl} hreflang="en-us" />

        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={`${canonicalUrl}/og-image.png`} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content={`${canonicalUrl}/og-image.png`} />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              url: canonicalUrl,
              name: "Disclaimer - JPGStoPDF.COM",
            }),
          }}
        />
      </Head>


      <main className="max-w-4xl mx-auto px-6 py-12 text-gray-800">
        <h1 className="text-4xl font-bold mb-6 text-center">Disclaimer</h1>

        <p className="mb-4">
          JPGStoPDF.COM is a free online tool for converting images to PDF. We strive to provide reliable service but do not guarantee uninterrupted or error-free operation.
        </p>

        <p className="mb-4">
          By using this site, you agree that JPGStoPDF.COM is not responsible for any loss or damage caused by the use of this service.
        </p>

        <p>
          All uploaded files are processed securely and deleted automatically after processing.
        </p>
      </main>
    </>
  );
}
