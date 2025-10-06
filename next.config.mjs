/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // 1. Remove index.html or index.php from ANY path (works for both jpgstopdf.com and www.jpgstopdf.com)
      {
        source: '/:path*/index(.html|.php)',
        has: [
          { type: 'host', value: 'jpgstopdf.com' },
        ],
        destination: 'https://www.jpgstopdf.com/:path*',
        permanent: true,
      },
      {
        source: '/:path*/index(.html|.php)',
        has: [
          { type: 'host', value: 'www.jpgstopdf.com' },
        ],
        destination: '/:path*',
        permanent: true,
      },

      // 2. Remove trailing slash (only HTML, not assets)
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

      // 3. Force non-www → www (for everything else)
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
