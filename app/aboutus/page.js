export const metadata = {
  title: "About Us | JPGStoPDF",
  description:
    "Learn more about JPGStoPDF – a free online tool to convert images to PDF. Fast, secure, and easy to use.",
};

export default function AboutPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12 text-gray-800">
      <h1 className="text-4xl font-bold mb-6 text-center">
        About <span className="text-blue-600">JPGStoPDF</span>
      </h1>

      <p className="mb-6 text-lg leading-relaxed">
        Welcome to <strong>JPGStoPDF</strong> – your simple, fast, and secure
        online solution to convert JPG images into high-quality PDF documents.
        Our mission is to make file conversions effortless and accessible to
        everyone, without installing any software.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">🌍 What We Do</h2>
      <p className="mb-6 leading-relaxed">
        JPGStoPDF provides a range of free PDF tools, including:
      </p>
      <ul className="list-disc list-inside mb-6 space-y-2">
        <li>Convert JPG, PNG, and other images to PDF</li>
        <li>Merge multiple PDF files into one document</li>
        <li>Compress and optimize PDF files</li>
        <li>Secure file handling with automatic deletion after 24 hours</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">🔒 Why Choose Us</h2>
      <ul className="list-disc list-inside mb-6 space-y-2">
        <li>100% free and always available</li>
        <li>No registration required</li>
        <li>Fast conversion powered by secure cloud servers</li>
        <li>Privacy-first: we don’t store your files permanently</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">🚀 Our Vision</h2>
      <p className="mb-6 leading-relaxed">
        We believe file conversion should be quick, easy, and accessible from
        any device. JPGStoPDF is built to handle millions of users around the
        world while ensuring top-notch security and performance.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">📩 Contact Us</h2>
      <p className="leading-relaxed">
        Have questions or feedback? We’d love to hear from you.  
        Reach out to us at{" "}
        <a
          href="mailto:support@jpgstopdf.com"
          className="text-blue-600 hover:underline"
        >
          support@jpgstopdf.com
        </a>
        .
      </p>
    </main>
  );
}
