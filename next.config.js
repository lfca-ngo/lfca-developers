/** @type {import('next').NextConfig} */
const nextConfig = {
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
