/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // 1. Remove index.html from any path
      {
        source: '/:path*/index.html',
        destination: '/:path*',
        permanent: true,
      },
      // 2. Remove index.php from any path
      {
        source: '/:path*/index.php',
        destination: '/:path*',
        permanent: true,
      },
      // 3. Remove trailing slash (HTML pages only, not static assets)
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
      // 4. Non-www → www (kept last so others apply first)
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
