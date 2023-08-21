/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  serverRuntimeConfig: {
    rootDir: __dirname,
  },
  images: {
    domains: [
      "",
    ],
  },
};

module.exports = nextConfig;
