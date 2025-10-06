/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // 1. Strip index.html or index.php from any path (both www & non-www)
      {
        source: '/:path*/index(.html|.php)',
        destination: '/:path*',
        permanent: true,
      },
      // 2. Remove trailing slash (only for HTML requests, not assets)
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
      // 3. Force non-www → www
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
