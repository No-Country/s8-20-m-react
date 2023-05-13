/** @type {import('next').NextConfig} */
const nextConfig = {
  publicRuntimeConfig: {
    BASE_URL:
      process.env.NODE_env === 'development'
        ? 'http://localhost:3000/'
        : 'http://localhost:3000/'
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
