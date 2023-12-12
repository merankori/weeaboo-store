/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    dirs: [
      'shared',
      'assets',
      'utils',
      'api',
      'assets',
      'constants',
      'services',
      'store',
    ],
  },
  images: {
    domains: ['image.dokodemo.world'],
  },
  env: {
    API_URL: process.env.API_URL,
  },
};

module.exports = nextConfig;
