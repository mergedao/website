import { getAllPosts } from '../lib/api';

const Sitemap = () => {};

export const getServerSideProps = async ({ res }) => {
  const baseUrl = 'https://vyagent.com';
  const posts = getAllPosts(['slug']); // 假设您有这个函数来获取所有博客文章

  // 静态页面
  const staticPages = [
    '',
    '/platform',
    '/services/mcp-store',
    '/services/mcp-hosting',
    '/api',
    '/guides',
    '/about',
    '/case-studies',
    '/contact',
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${staticPages
        .map((url) => {
          return `
            <url>
              <loc>${baseUrl}${url}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>monthly</changefreq>
              <priority>0.8</priority>
            </url>
          `;
        })
        .join('')}
      ${posts
        .map((post) => {
          return `
            <url>
              <loc>${baseUrl}/blog/${post.slug}</loc>
              <lastmod>${new Date(post.date || new Date()).toISOString()}</lastmod>
              <changefreq>weekly</changefreq>
              <priority>0.7</priority>
            </url>
          `;
        })
        .join('')}
    </urlset>
  `;

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap; 