const withLess = require('next-with-less')
const path = require('path')

const lessVariablesFile = path.resolve(__dirname, './styles/variables.less')
const lessMixinsFile = path.resolve(__dirname, './styles/mixins.less')

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
              'Accept, Accept-Version, Authorization, Content-Length, Content-Type, Date',
          },
        ],
        source: '/(.*)',
      },
    ]
  },
  lessLoaderOptions: {
    additionalData: (content) =>
      `${content}\n\n@import '${lessVariablesFile}';\n\n@import '${lessMixinsFile}';`,
    lessOptions: {
      javascriptEnabled: true,
    },
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
  webpack(config) {
    config.module.rules.push({
      issuer: /\.[jt]sx?$/,
      test: /\.svg$/i,
      use: ['@svgr/webpack'],
    })

    return config
  },
}

module.exports = withLess(nextConfig)
