export const metadata = {
  title: "FAQ | JPGSTOPDF.COM",
  description: "Answers to frequently asked questions about JPGSTOPDF.COM free online image to PDF converter.",
};

export default function FAQPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "Is this converter free?", acceptedAnswer: { "@type": "Answer", text: "Yes, it is completely free." } },
      { "@type": "Question", name: "Do I need to install software?", acceptedAnswer: { "@type": "Answer", text: "No installation required." } },
      { "@type": "Question", name: "Which image formats are supported?", acceptedAnswer: { "@type": "Answer", text: "JPG, PNG, JPEG, WebP." } },
    ],
  };

  return (
    <main className="max-w-4xl mx-auto my-10 px-4">
      <h1 className="text-3xl font-bold mb-6">Frequently Asked Questions</h1>
      {faqSchema.mainEntity.map((faq, idx) => (
        <div key={idx} className="mb-4">
          <h2 className="text-xl font-semibold text-blue-700">{faq.name}</h2>
          <p className="text-gray-700 mt-1">{faq.acceptedAnswer.text}</p>
        </div>
      ))}
    </main>
  );
}
