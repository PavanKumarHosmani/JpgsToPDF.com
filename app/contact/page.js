export const metadata = {
  title: "Contact Us | JPGSTOPDF.COM",
  description: "Get in touch with the JPGSTOPDF.COM team for support or inquiries regarding the free image to PDF converter.",
};

export default function ContactPage() {
  const pageUrl = "https://jpgstopdf.com/contact";

  return (
    <main className="max-w-4xl mx-auto my-10 px-4">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <p className="mb-4">
        If you have questions, feedback, or issues, reach out to us using the following options:
      </p>
      <ul className="list-disc list-inside space-y-2">
        <li>
          Email: <a href="mailto:support@jpgstopdf.com" className="text-blue-600 hover:underline">support@jpgstopdf.com</a>
        </li>
        <li>Use our contact form for inquiries.</li>
      </ul>

      {/* JSON-LD structured data for ContactPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            url: pageUrl,
            name: "Contact JPGSTOPDF.COM",
          }),
        }}
      />
    </main>
  );
}
