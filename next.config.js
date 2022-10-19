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
    newNextLinkBehavior: true,
    optimizeCss: true,
    // runtime: 'experimental-edge',
  },
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
})