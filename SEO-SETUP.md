# SEO 快速设置指南

## 🚀 快速开始

### 1. 设置环境变量

创建 `.env.local` 文件（如果还没有），添加：

```bash
NEXT_PUBLIC_BASE_URL=https://your-actual-domain.com
```

**重要**: 将 `your-actual-domain.com` 替换为你的实际域名。

### 2. 创建 OG 图片

创建 `public/og-image.jpg` 文件：
- 尺寸: 1200x630 像素
- 格式: JPG 或 PNG
- 内容: 包含网站标题 "微元熵减 | Order from Chaos" 和核心视觉元素

### 3. 部署并验证

部署后，访问以下 URL 验证：

- ✅ `https://your-domain.com/robots.txt` - 应该显示 robots 规则
- ✅ `https://your-domain.com/sitemap.xml` - 应该显示 XML sitemap
- ✅ 使用 [Google Rich Results Test](https://search.google.com/test/rich-results) 测试结构化数据

### 4. 提交到搜索引擎

#### Google Search Console
1. 访问 [Google Search Console](https://search.google.com/search-console)
2. 添加网站属性
3. 验证所有权
4. 提交 sitemap: `https://your-domain.com/sitemap.xml`

#### Bing Webmaster Tools
1. 访问 [Bing Webmaster Tools](https://www.bing.com/webmasters)
2. 添加网站
3. 提交 sitemap

## 📊 已实现的 SEO 功能

### ✅ 技术 SEO
- [x] 完整的 metadata（title, description, keywords）
- [x] Open Graph 标签（社交媒体分享）
- [x] Twitter Card 标签
- [x] 多语言支持（hreflang）
- [x] Canonical URL
- [x] Robots 配置（包括大模型爬虫）

### ✅ 结构化数据
- [x] Organization（组织信息）
- [x] WebSite（网站信息）
- [x] SoftwareApplication（产品信息）
- [x] Article（内容信息）
- [x] BreadcrumbList（导航结构）

### ✅ 内容 SEO
- [x] SEO 内容组件（确保爬虫可读取关键内容）
- [x] 语义化 HTML 结构
- [x] 清晰的标题层级（H1-H4）
- [x] 关键词优化

### ✅ 技术文件
- [x] sitemap.xml（自动生成）
- [x] robots.txt（自动生成）

## 🎯 针对大模型的优化

已专门配置允许以下 AI 爬虫访问：
- GPTBot (OpenAI)
- ClaudeBot (Anthropic)
- CCBot (Common Crawl)
- ChatGPT-User

这些爬虫可以访问网站内容，帮助大模型理解和引用你的网站。

## 📝 下一步

1. **监控**: 在 Google Search Console 中监控搜索表现
2. **优化**: 根据数据持续优化内容和关键词
3. **更新**: 定期更新 sitemap 和内容

## 📚 详细文档

查看 `docs/seo-guide.md` 获取完整的 SEO 优化指南和最佳实践。

---

**提示**: 如果遇到问题，检查：
1. 环境变量 `NEXT_PUBLIC_BASE_URL` 是否正确设置
2. OG 图片是否存在
3. 部署后是否正确生成了 robots.txt 和 sitemap.xml

