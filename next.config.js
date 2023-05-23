/** @type {import('next').NextConfig} */
const nextConfig = {
  publicRuntimeConfig: {
    BASE_URL:
      process.env.NODE_env === 'development'
        ? 'http://localhost:3000/'
        : 'http://localhost:3000/',
  },
  
  images: {
    domains: [
      'i1.rgstatic.net',
      'img.lovepik.com',
  ],
    
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
