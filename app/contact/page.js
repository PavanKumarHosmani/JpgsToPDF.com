import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function ContactPage() {
  const title = "Contact Us | JPGStoPDF.COM";
  const description =
    "Get in touch with JPGStoPDF.COM for support, questions, or feedback. Contact us via email or our contact form for assistance with JPG to PDF, Merge PDF, Compress Images, or PDF to JPG tools.";
  const canonicalUrl = "https://www.jpgstopdf.com/contact";

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonicalUrl} />
        <link rel="alternate" href={canonicalUrl} hreflang="en-us" />

        {/* Open Graph */}
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

        {/* JSON-LD Schema with contact info */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ContactPage",
              url: canonicalUrl,
              name: "Contact JPGStoPDF.COM",
              description: description,
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  email: "support@jpgstopdf.com",
                  contactType: "customer support",
                  availableLanguage: "English",
                },
              ],
            }),
          }}
        />
      </Head>

      {/* <Header /> */}

      <main className="max-w-4xl mx-auto px-6 py-12 text-gray-800">
        <h1 className="text-4xl font-bold mb-6 text-center">Contact Us</h1>

        <p className="mb-4">
          At <strong>JPGStoPDF.COM</strong>, we value our users and strive to
          provide quick and reliable support. If you have any questions about our
          tools—whether it’s <a href="/compress" className="text-blue-600 underline">image compression</a>, 
          <a href="/merge" className="text-blue-600 underline">PDF merging</a>, 
          <a href="/to-jpg" className="text-blue-600 underline">PDF to JPG conversion</a>, 
          or <a href="/convert" className="text-blue-600 underline">image to PDF conversion</a>—we’re here to help.
        </p>

        <p className="mb-4">
          Our support team responds to common inquiries about file limits,
          supported formats, privacy practices, and tool usage. We also welcome
          feedback and feature requests to improve JPGStoPDF.COM further.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">How to Reach Us</h2>
        <ul className="list-disc list-inside space-y-2 mb-6">
          <li>
            Email us directly at{" "}
            <a href="mailto:support@jpgstopdf.com" className="text-blue-600 hover:underline">
              support@jpgstopdf.com
            </a>{" "}
            for technical support or general questions.
          </li>
          <li>
            Use our on-site contact form for quick inquiries and feedback.
          </li>
        </ul>

        <p>
          We aim to respond within 24–48 hours to all support requests. Thank you
          for trusting JPGStoPDF.COM as your go-to free online PDF and image tool.
        </p>
      </main>

      {/* <Footer /> */}
    </>
  );
}
