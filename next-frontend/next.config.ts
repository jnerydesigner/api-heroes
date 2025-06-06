import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      new URL("http://localhost:5544/**"),
      new URL("https://github.com/**"),
    ],
  },
};

export default nextConfig;
