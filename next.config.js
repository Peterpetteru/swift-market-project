/** @type {import('next').NextConfig} */
const nextConfig = {
  // THE FIX: This section gives Next.js permission to optimize
  // images from the 'images.unsplash.com' domain.
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

module.exports = nextConfig;

