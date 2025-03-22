/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com", // ✅ Added Unsplash domain
      },
      {
        protocol: "https",
        hostname: "source.unsplash.com", // ✅ Added for dynamic image URLs
      }
    ],
  },
};

module.exports = nextConfig;
