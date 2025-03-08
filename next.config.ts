import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  sassOptions: {
    // bulma 0.8 has a bunch of future deprecations, but the next version breaks a lot of stuff
    // so we ignore the deprecation warnings here. These
    silenceDeprecations: [
      "color-functions",
      "import",
      "global-builtin",
      "legacy-js-api",
      "slash-div",
    ],
    quietDeps: true,
  },
  // 添加图片优化配置
  images: {
    domains: ['vyagent.com'],
    unoptimized: true, // 在静态导出模式下需要设置为true
  },
  // 添加安全头信息
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ];
  },
  // 添加重定向规则
  async redirects() {
    return [
      {
        source: '/docs',
        destination: '/docs/getting-started',
        permanent: true,
      },
      {
        source: '/api',
        destination: '/docs/api',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
