import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io', // Tells Next.js to trust Sanity's image CDN
      }
    ]
  }
};

export default nextConfig;
