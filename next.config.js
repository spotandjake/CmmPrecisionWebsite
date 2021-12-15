/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
// Package Imports
const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');
/** @type {import('next').NextConfig} */
// eslint-disable-next-line no-undef
module.exports = withPlugins([
  [optimizedImages, {
    // these are the default values so you don't have to provide them if they are good enough for your use-case.
    // but you can overwrite them here with any valid value you want.
    inlineImageLimit: 8192,
    imagesFolder: 'images',
    imagesName: '[name]-[hash].[ext]',
    handleImages: ['jpeg', 'png', 'svg', 'webp', 'gif'],
    removeOriginalExtension: true,
    optimizeImages: true,
    optimizeImagesInDev: true,
    mozjpeg: {
      quality: 80,
    },
    optipng: {
      optimizationLevel: 3,
    },
    pngquant: false,
    gifsicle: {
      interlaced: true,
      optimizationLevel: 3,
    },
    svgo: {
      // enable/disable svgo plugins here
    },
    webp: {
      preset: 'default',
      quality: 75,
    },
  }],
], {
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
  images: {
    disableStaticImages: true,
  },
});