export default function Custom404() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl mb-6">Oops! Page not found.</p>
      <a href="/" className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700">Go Home</a>
    </main>
  );
}
