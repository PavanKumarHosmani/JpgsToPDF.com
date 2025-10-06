/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Remove index.html or index.php from any path (works with or without www)
      {
        source: '/:path*/index{.:format}?', // matches index.html or index.php
        destination: '/:path*',
        permanent: true,
      },
      // Remove trailing slash (only HTML requests, not assets)
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
      // Non-www → www
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
