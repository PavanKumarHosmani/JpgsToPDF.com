import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function DisclaimerPage() {
  const title = "Disclaimer | JPGStoPDF.COM";
  const description =
    "Read the disclaimer for JPGStoPDF.COM. Learn about limitations, liability, and proper usage of our free online JPG to PDF converter.";
  const canonicalUrl = "https://www.jpgstopdf.com/disclaimer";

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonicalUrl} />
        <link rel="alternate" href={canonicalUrl} hreflang="en-us" />

        {/* OpenGraph */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content="https://www.jpgstopdf.com/og-image.png" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content="https://www.jpgstopdf.com/og-image.png" />

        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              url: canonicalUrl,
              name: "Disclaimer - JPGStoPDF.COM",
              description: description,
              about: {
                "@type": "WebApplication",
                name: "JPG to PDF Converter",
                applicationCategory: "Utility",
              },
            }),
          }}
        />
      </Head>

      {/* <Header /> */}

      <main className="max-w-4xl mx-auto px-6 py-12 text-gray-800">
        <h1 className="text-4xl font-bold mb-6 text-center">Disclaimer</h1>

        <p className="mb-4">
          JPGStoPDF.COM is a free online tool for converting images to PDF.
          While we strive to provide reliable and secure services, we cannot
          guarantee uninterrupted or error-free operation.
        </p>

        <p className="mb-4">
          By using this website, you acknowledge and agree that JPGStoPDF.COM
          shall not be held liable for any loss, damage, or inconvenience
          arising from the use of this service. Users are solely responsible
          for ensuring that files uploaded and converted comply with applicable
          laws and regulations.
        </p>

        <p className="mb-4">
          All uploaded files are processed securely and deleted automatically
          after conversion. No copies are retained, ensuring user privacy and
          data protection.
        </p>

        <p>
          This disclaimer is subject to change at any time. We recommend
          reviewing it regularly to stay informed about our policies and
          limitations.
        </p>
      </main>

      {/* <Footer /> */}
    </>
  );
}
