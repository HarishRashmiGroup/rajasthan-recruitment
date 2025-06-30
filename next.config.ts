import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ["@chakra-ui/react"],
  },
  images: {
    domains: ['blackbuck.blob.core.windows.net'],
  },
};

export default nextConfig;
