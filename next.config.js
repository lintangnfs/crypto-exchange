/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  serverRuntimeConfig: {
    rootDir: __dirname,
  },
  images: {
    domains: ["drive.google.com", "assets.coingecko.com"],
  },
};

module.exports = nextConfig;
