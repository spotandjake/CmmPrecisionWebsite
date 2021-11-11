/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  modern: true,
  optimizeFonts: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    workerThreads: true
  }
};