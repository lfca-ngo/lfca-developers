/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return {
      beforeFiles: [
        {
          destination: '/api/:path*',
          has: [
            {
              type: 'host',
              value: 'api.lfca.ngo',
            },
          ],
          source: '/:path*',
        },
      ],
    }
  },
  swcMinify: true,
}

module.exports = nextConfig
