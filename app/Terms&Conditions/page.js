export const metadata = {
  title: "Terms & Conditions | JPGSTOPDF.COM",
  description:
    "Read the Terms & Conditions for JPGSTOPDF.COM. Understand the rules and guidelines for using our free online JPG to PDF converter.",
};

export default function TermsPage() {
  const pageUrl = "https://jpgstopdf.com/Terms&Conditions";

  return (
    <main className="max-w-3xl mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-3xl font-bold mb-4 text-center">Terms & Conditions</h1>
      <p className="text-gray-700 mb-2">
        Welcome to JPGSTOPDF.COM. By accessing or using our service, you agree to
        be bound by these Terms & Conditions.
      </p>
      <p className="text-gray-700 mb-2">
        You may use the service only for lawful purposes. You agree not to upload
        content that violates any applicable laws, infringes third-party rights,
        or contains harmful material.
      </p>
      <p className="text-gray-700 mb-2">
        JPGSTOPDF.COM reserves the right to modify, suspend, or discontinue the
        service at any time without prior notice.
      </p>
      <p className="text-gray-700">
        By using our website, you acknowledge that all files are processed
        temporarily and securely, and you agree to our disclaimer and privacy
        practices.
      </p>

      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            url: pageUrl,
            name: "Terms & Conditions - JPGSTOPDF.COM",
          }),
        }}
      />
    </main>
  );
}
