import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http", // <-- must match your URL
        hostname: "10.10.7.7", // exact IP
        port: "5005", // optional, must match
        pathname: "/image/**", // allow all images under /image
      },
    ],
  },
  allowedDevOrigins: ["http://localhost:3000"],
};

export default nextConfig;
