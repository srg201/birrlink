import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"], // Use @svgr/webpack loader
    });
    return config;
  },
  output: 'export',
  images: {
    unoptimized: true
  }
};

export default nextConfig;
