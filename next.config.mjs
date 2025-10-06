/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // 1. Non-www → www
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'jpgstopdf.com' }],
        destination: 'https://www.jpgstopdf.com/:path*',
        permanent: true,
      },
      // 2. index.html → /
      {
        source: '/index.html',
        destination: '/',
        permanent: true,
      },
      // 3. index.php → /
      {
        source: '/index.php',
        destination: '/',
        permanent: true,
      },
      // 4. Remove trailing slash (but don’t break static assets like .js, .css, .png)
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
    ];
  },
};

export default nextConfig;
