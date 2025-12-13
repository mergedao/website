import { MetadataRoute } from "next";

/**
 * sitemap.xml 生成
 * 帮助搜索引擎发现和索引网站的所有页面
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://your-domain.com";
  const currentDate = new Date().toISOString();

  return [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 1,
      alternates: {
        languages: {
          zh: baseUrl,
          en: `${baseUrl}/en`,
        },
      },
    },
    // 如果有其他页面，可以在这里添加
    // {
    //   url: `${baseUrl}/about`,
    //   lastModified: currentDate,
    //   changeFrequency: "monthly",
    //   priority: 0.8,
    // },
  ];
}

