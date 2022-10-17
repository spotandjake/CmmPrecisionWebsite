/** @type {import('next').NextConfig} */
// eslint-disable-next-line no-undef
module.exports = {
  poweredByHeader: false,
  reactStrictMode: true,
  swcMinify: true,
  optimizeFonts: true,
  crossOrigin: 'use-credentials',
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    workerThreads: true,
    newNextLinkBehavior: true,
    optimizeCss: true,
    runtime: 'experimental-edge',
  },
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
};