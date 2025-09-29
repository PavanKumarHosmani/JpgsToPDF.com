import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Contact Us | JPGStoPDF.COM",
  description: "Get in touch with the JPGStoPDF.COM team for support, inquiries, or feedback about our free online image to PDF converter.",
};

export default function ContactPage() {
  const canonicalUrl = "https://www.jpgstopdf.com/contact";

  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="canonical" href={canonicalUrl} />
        <link rel="alternate" href={canonicalUrl} hreflang="en-us" />

        {/* Open Graph */}
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={`${canonicalUrl}/og-image.png`} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content={`${canonicalUrl}/og-image.png`} />

        {/* JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ContactPage",
              url: canonicalUrl,
              name: "Contact JPGStoPDF.COM",
            }),
          }}
        />
      </Head>


      <main className="max-w-4xl mx-auto px-6 py-12 text-gray-800">
        <h1 className="text-4xl font-bold mb-6 text-center">Contact Us</h1>
        <p className="mb-6 text-lg leading-relaxed">
          We’d love to hear from you! Whether you have questions, feedback, or issues,
          reach out to us using the options below.
        </p>

        <ul className="list-disc list-inside space-y-2">
          <li>Email: <a href="mailto:support@jpgstopdf.com" className="text-blue-600 hover:underline">support@jpgstopdf.com</a></li>
          <li>Use our contact form for inquiries and feedback.</li>
        </ul>
      </main>
    </>
  );
}
