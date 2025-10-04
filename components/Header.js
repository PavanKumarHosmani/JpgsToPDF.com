import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-blue-700 text-white py-6 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6">
        <Link href="/" className="text-2xl font-bold">
          JPGStoPDF
        </Link>
        <nav className="space-x-6">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/compress" className="hover:underline">Compress Images</Link>
          <Link href="/mergepdf" className="hover:underline">merge pdf</Link>
          <Link href="/pdftojpg" className="hover:underline">Pdf To Jpg</Link>
        </nav>

      </div>
    </header>
  );
}
