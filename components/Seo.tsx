import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';

export interface SeoProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  type?: string;
  date?: string;
  url?: string;
  canonical?: string;
}

export default function Seo({
  title = '纬曜智能 - 专业MCP人工智能解决方案提供商',
  description = '纬曜智能是专业的MCP人工智能解决方案提供商，致力于帮助企业轻松接入和管理AI能力。我们提供MCP平台、AI模型商店和服务托管解决方案。',
  keywords = 'MCP, 人工智能, AI解决方案, 企业AI, 智能服务, 模型商店',
  image = '/img/og-image.jpg',
  type = 'website',
  date,
  url,
  canonical,
}: SeoProps) {
  const router = useRouter();
  const siteUrl = canonical || url || `https://vyagent.com${router.asPath}`;
  
  return (
    <Head>
      {/* 基础元标签 */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* 规范链接 */}
      <link rel="canonical" href={siteUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`https://vyagent.com${image}`} />
      <meta property="og:site_name" content="纬曜智能" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={siteUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`https://vyagent.com${image}`} />
      
      {/* 如果是文章，添加发布日期 */}
      {date && <meta property="article:published_time" content={date} />}
      
      {/* 移动设备优化 */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* 网站所有者验证 (替换为您的Google验证码) */}
      <meta name="google-site-verification" content="您的Google验证码" />
      
      {/* 添加结构化数据 - 组织信息 */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: '纬曜智能',
            url: 'https://vyagent.com',
            logo: 'https://vyagent.com/img/logo.png',
            description: '专业的MCP人工智能解决方案提供商，致力于帮助企业轻松接入和管理AI能力。',
            sameAs: [
              'https://github.com/vyagent',
              'https://twitter.com/vyagent',
              'https://discord.gg/vyagent'
            ]
          }),
        }}
      />
    </Head>
  );
} 