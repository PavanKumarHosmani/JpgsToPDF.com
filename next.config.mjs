/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Remove index.html from any path
      {
        source: '/:path*/index.html',
        destination: '/:path*',
        permanent: true,
      },
      // Remove index.php from any path
      {
        source: '/:path*/index.php',
        destination: '/:path*',
        permanent: true,
      },
      // Remove trailing slash (only for HTML requests, not assets)
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
      // Non-www → www (must come last)
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
