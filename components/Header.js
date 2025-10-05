import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-blue-700 text-white shadow-md">
      <div className="max-w-6xl mx-auto flex flex-wrap justify-between items-center px-4 py-3 md:py-5">
        {/* Logo */}
        <Link href="/" className="text-lg md:text-2xl font-bold">
          JPGStoPDF
        </Link>

        {/* Navigation - always visible */}
        <nav className="flex flex-wrap gap-3 md:gap-6 text-sm md:text-base mt-2 md:mt-0">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/jpgtopdf" className="hover:underline">JPG to PDF</Link>
          <Link href="/compressimage" className="hover:underline">Compress Images</Link>
          <Link href="/mergepdf" className="hover:underline">Merge PDF</Link>
          <Link href="/pdftojpg" className="hover:underline">PDF to JPG</Link>
        </nav>
      </div>
    </header>
  );
}
