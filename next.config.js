/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ecdegypt.com",
        pathname: "/public/imgs/**"
      },
    ],
  },
};

module.exports = nextConfig;
