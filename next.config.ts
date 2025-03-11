import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    //TODO: turn false once dev done
    ignoreDuringBuilds: true,
  },
  compiler: {
    // TODO: Once dev done, uncomment
    // removeConsole: process.env.NODE_ENV === "production",
  },
  /* config options here */
};

export default nextConfig;
