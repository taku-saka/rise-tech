import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  // basePath: "/ssg_page2/out",
  // assetPrefix: "/ssg_page2/out",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
