import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Contact Us | JPGSTOPDF.COM",
  description: "Get in touch with the JPGSTOPDF.COM team for support or inquiries regarding the free image to PDF converter.",
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

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ContactPage",
              url: canonicalUrl,
              name: "Contact JPGSTOPDF.COM",
            }),
          }}
        />
      </Head>

      <Header />

      <main className="max-w-4xl mx-auto px-6 py-12 text-gray-800">
        <h1 className="text-4xl font-bold mb-6 text-center">Contact <span className="text-blue-600">JPGSTOPDF.COM</span></h1>

        <p className="mb-6 leading-relaxed">
          We’re here to help! If you have questions, feedback, or need assistance, you can reach us via email or use the contact form below.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">📧 Email</h2>
        <p className="mb-4 leading-relaxed">
          For general inquiries or support, email us at{" "}
          <a href="mailto:support@jpgstopdf.com" className="text-blue-600 hover:underline">
            support@jpgstopdf.com
          </a>.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">📝 Contact Form</h2>
        <p className="mb-4 leading-relaxed">
          Fill out the form below with your message, and our team will get back to you as soon as possible.
        </p>

        <form className="bg-white shadow-md rounded px-6 py-6 mb-6">
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Name</label>
            <input type="text" className="w-full border rounded px-3 py-2" placeholder="Your Name" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Email</label>
            <input type="email" className="w-full border rounded px-3 py-2" placeholder="you@example.com" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Message</label>
            <textarea className="w-full border rounded px-3 py-2" rows="5" placeholder="Your message here"></textarea>
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Send Message</button>
        </form>

        <h2 className="text-2xl font-semibold mt-8 mb-4">📍 Office Info</h2>
        <p className="leading-relaxed mb-6">
          While JPGSTOPDF.COM is a fully online service, our team is available globally to assist users. Responses are typically within 24-48 hours.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">💡 Tips for Contacting</h2>
        <ul className="list-disc list-inside mb-6 space-y-2">
          <li>Include your email for a faster response.</li>
          <li>Describe the issue clearly with screenshots if possible.</li>
          <li>Use concise subject lines in emails.</li>
        </ul>
      </main>

      <Footer />
    </>
  );
}
