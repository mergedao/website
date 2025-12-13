import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true, // 静态导出需要禁用图片优化
  },
  // 静态导出时，trailingSlash 可以确保所有路由都有正确的路径
  trailingSlash: false,
};

export default nextConfig;
