import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-12">
      <div className="max-w-6xl mx-auto px-6 text-center space-y-4">
        <p>© {new Date().getFullYear()} JPGStoPDF.COM. All rights reserved.</p>

        <div className="flex justify-center space-x-6 flex-wrap">
          <Link href="/privacy" className="hover:underline">Privacy Policy</Link>
          <Link href="/termsandconditions" className="hover:underline">Terms and Conditions</Link>
          <Link href="/disclaimer" className="hover:underline">Disclaimer</Link>
          <Link href="/contact" className="hover:underline">Contact</Link>
          <Link href="/aboutus" className="hover:underline">About Us</Link>
          <Link href="/faq" className="hover:underline">FAQ</Link>
          <Link href="/sitemap.xml" className="hover:underline">Sitemap</Link>
        </div>

        {/* Google Analytics */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX', { page_path: window.location.pathname });
          `,
          }}
        />

        {/* Ads.txt note */}
        {/* Create a public/ads.txt file with your authorized ad sellers for Google AdSense */}
      </div>
    </footer>
  );
}
