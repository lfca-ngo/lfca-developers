/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: `https://${process.env.DOCS_HOST}`,
          },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET,OPTIONS,PATCH,DELETE,POST,PUT',
          },
          {
            key: 'Access-Control-Allow-Headers',
            value:
              'accept,accept-version,authorization,content-length,content-type,date',
          },
        ],
        source: '/(.*)',
      },
    ]
  },
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        destination: '/api/:path*',
        has: [
          {
            type: 'host',
            value: process.env.API_HOST,
          },
        ],
        source: '/:path*',
      },
    ]
  },
  swcMinify: true,
}

module.exports = nextConfig
