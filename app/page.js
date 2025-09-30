import UploadForm from "../components/UploadForm";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center relative px-6 py-12">

      {/* Hero Section */}

            <UploadForm autoDownload={true} />
      <section className="max-w-5xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-center mb-6">
          Free Online JPG to PDF Converter
        </h1>
        <p className="text-lg text-gray-700 text-center mb-8">
          Convert JPG, PNG, and WebP images to PDF instantly. Adjust page
          orientation, set margins, merge multiple files into a single PDF,
          and download high-quality PDFs securely online for free. Our online
          converter is fast, safe, and works on any device without installation
          or registration. Whether you need a single file or want to merge
          multiple images, JPGStoPDF makes it simple and reliable for all users.
        </p>
        <p className="text-lg text-gray-700 text-center">
          With JPGStoPDF, you can create professional PDFs for work, school, or
          personal projects in seconds. No software installation is required,
          and your files remain private and secure.
        </p>
      </section>

      {/* Why Choose Section */}
      <section className="max-w-4xl mx-auto my-12 px-4">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Why Choose JPGStoPDF?
        </h2>
        <p className="text-gray-700 text-center mb-4">
          Our tool is designed to be simple, fast, and versatile for anyone who needs high-quality PDF conversion.
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Convert JPG, PNG, WebP to PDF instantly.</li>
          <li>Merge multiple images into a single PDF.</li>
          <li>Adjust page orientation and margins for custom layouts.</li>
          <li>Fast, secure, and works on all devices including mobile.</li>
          <li>No installation or registration required.</li>
          <li>Files are automatically deleted after processing to protect privacy.</li>
        </ul>
      </section>

      {/* How It Works Section */}
      <section className="max-w-4xl mx-auto my-12 px-4">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          How It Works
        </h2>
        <p className="text-gray-700 text-center mb-4">
          Using JPGStoPDF is quick and straightforward. Follow these steps:
        </p>
        <ol className="list-decimal list-inside space-y-2 text-gray-700">
          <li>Upload images using the form above.</li>
          <li>Arrange them in the order you want for your PDF.</li>
          <li>Click "Convert" to generate your PDF instantly.</li>
          <li>Download your PDF securely to your device.</li>
          <li>Optional: Adjust page orientation, margins, or merge additional files.</li>
        </ol>
      </section>

      {/* About Section */}
      <section className="max-w-4xl mx-auto my-12 px-4">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          About JPGStoPDF
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          JPGStoPDF is a free online tool that allows you to convert your images
          (JPG, PNG, WebP) into PDF format within seconds. You can merge multiple
          images, adjust page orientation, set margins, and create professional-quality
          PDFs without installing any software. 
        </p>
        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          Our service is fast, secure, and works on any device – desktop, tablet, or mobile.
          No registration is required, and your files are automatically deleted after processing
          to protect your privacy.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed">
          Whether you are creating documents for work, school, or personal use,
          JPGStoPDF provides a reliable and easy-to-use solution for all your PDF conversion needs.
        </p>
      </section>
    </main>
  );
}
