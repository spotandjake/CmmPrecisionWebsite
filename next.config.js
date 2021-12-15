/** @type {import('next').NextConfig} */
// eslint-disable-next-line no-undef
module.exports = {
  poweredByHeader: false,
  reactStrictMode: true,
  swcMinify: true,
  modern: true,
  optimizeFonts: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    workerThreads: true
  },
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
};