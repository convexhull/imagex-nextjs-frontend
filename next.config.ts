import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    //TODO: turn false once dev done
    ignoreDuringBuilds: true,
  },
  /* config options here */
};

export default nextConfig;
