/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: [
      "lh3.googleusercontent.com",
      "res.cloudinary.com",
      "lh3.google.com",
      "drive.google.com",
    ],
  },
};

module.exports = nextConfig;
