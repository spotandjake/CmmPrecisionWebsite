/** @type {import('next').NextConfig} */
//ts-ignore
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  //ts-ignore
  enabled: process.env.ANALYZE === 'true',
  openAnalyzer: false
});
// eslint-disable-next-line no-undef
module.exports = withBundleAnalyzer({
  poweredByHeader: false,
  reactStrictMode: true,
  swcMinify: true,
  optimizeFonts: true,
  // crossOrigin: 'use-credentials',
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    workerThreads: true,
    optimizeCss: true,
    // runtime: 'experimental-edge',
  },
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      Object.assign(config.resolve.alias, {
        react: 'preact/compat',
        'react-dom/test-utils': 'preact/test-utils',
        'react-dom': 'preact/compat',
      });
    }
    return config;
  },
});