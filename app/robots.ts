import { MetadataRoute } from "next";

/**
 * robots.txt 配置
 * 告诉搜索引擎爬虫哪些页面可以访问
 */
export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://your-domain.com";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/_next/",
          "/admin/",
        ],
      },
      // 专门针对 Googlebot 的规则
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/api/", "/admin/"],
      },
      // 针对大模型爬虫的规则（如 GPTBot, ClaudeBot 等）
      {
        userAgent: ["GPTBot", "ClaudeBot", "anthropic-ai", "CCBot", "ChatGPT-User"],
        allow: "/",
        disallow: ["/api/", "/admin/"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}

