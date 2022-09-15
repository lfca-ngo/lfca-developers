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
            value: 'vercel.app',
          },
        ],
        source: '/:path*',
      },
    ]
  },
  swcMinify: true,
}

module.exports = nextConfig
