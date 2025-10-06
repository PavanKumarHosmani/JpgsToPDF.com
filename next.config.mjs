/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: false, // ✅ enforce no trailing slash

  async redirects() {
    return [
      // ✅ Remove index.html (lowercase) → /path
      {
        source: '/:path*/index.html',
        destination: '/:path*',
        permanent: true,
      },
      // ✅ Remove index.php (lowercase) → /path
      {
        source: '/:path*/index.php',
        destination: '/:path*',
        permanent: true,
      },

      // ✅ Handle uppercase variants (Index.html / Index.php / INDEX.PHP etc.)
      {
        source: '/:path*/:file(Index|INDEX).html',
        destination: '/:path*',
        permanent: true,
      },
      {
        source: '/:path*/:file(Index|INDEX).php',
        destination: '/:path*',
        permanent: true,
      },

      // ✅ Redirect .html → clean URL
      {
        source: '/:path*.html',
        destination: '/:path*',
        permanent: true,
      },
      // ✅ Redirect .php → clean URL
      {
        source: '/:path*.php',
        destination: '/:path*',
        permanent: true,
      },

      // ✅ Remove trailing slash (only for HTML requests, not assets)
      {
        source: '/:path*/',
        has: [
          {
            type: 'header',
            key: 'accept',
            value: 'text/html',
          },
        ],
        destination: '/:path*',
        permanent: true,
      },

      // ✅ Non-www → www
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'jpgstopdf.com' }],
        destination: 'https://www.jpgstopdf.com/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
