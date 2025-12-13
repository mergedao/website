/**
 * 结构化数据组件 (JSON-LD)
 * 用于帮助搜索引擎和大模型更好地理解网站内容
 */

export function StructuredData() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://your-domain.com";

  // 组织/网站结构化数据
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "微元熵减 | μ-entropy",
    alternateName: "Order from Chaos",
    url: baseUrl,
    logo: `${baseUrl}/favicon.svg`,
    description: "AI驱动的智能基底，将高边际成本的无序转化为零边际成本的结构",
    foundingDate: "2024",
    sameAs: [
      // 可以添加社交媒体链接
      // "https://twitter.com/mu-entropy",
      // "https://github.com/mu-entropy",
    ],
  };

  // 网站结构化数据
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "微元熵减 | Order from Chaos",
    url: baseUrl,
    description: "从混沌到秩序 - AI驱动的智能基底，逆转数字世界的熵增",
    inLanguage: ["zh-CN", "en-US"],
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${baseUrl}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  // 项目/产品结构化数据
  const softwareApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "微元熵减",
    applicationCategory: "WebApplication",
    operatingSystem: "Web",
    description: "AI驱动的智能基底，通过微元解构和智能重构，将高边际成本的无序转化为零边际成本的结构",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    featureList: [
      "微元解构 - 将复杂场景抽象为最小单位",
      "智能重构 - AI驱动的自动化处理",
      "零边际成本 - 将高成本无序转化为低成本结构",
      "意图即现实 - 全自动化未来愿景",
    ],
  };

  // 文章/内容结构化数据（用于主页）
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "微元熵减宣言 - 从混沌到秩序",
    description: "通过微元视角解构数字世界的混沌，使用AI智能重构为有序结构",
    author: {
      "@type": "Organization",
      name: "μ-entropy",
    },
    publisher: {
      "@type": "Organization",
      name: "μ-entropy",
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/favicon.svg`,
      },
    },
    datePublished: "2024-01-01",
    dateModified: new Date().toISOString().split("T")[0],
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": baseUrl,
    },
    keywords: [
      "微元熵减",
      "熵减",
      "AI自动化",
      "智能基底",
      "Order from Chaos",
      "数字世界重构",
    ],
  };

  // BreadcrumbList 结构化数据
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "首页",
        item: baseUrl,
      },
    ],
  };

  const schemas = [
    organizationSchema,
    websiteSchema,
    softwareApplicationSchema,
    articleSchema,
    breadcrumbSchema,
  ];

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}

