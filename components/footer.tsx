import React from "react";
import { DiscordIcon, GitHubIcon, TwitterIcon } from "./icons";

export default function Footer() {
  const productLinks = [
    {
      name: "MCP平台",
      href: "/platform",
      desc: "我们的核心产品，连接和管理多种AI能力",
    },
    {
      name: "MCP商店",
      href: "/services/mcp-store",
      desc: "丰富多样的AI模型和应用，满足各种业务场景需求",
    },
    {
      name: "服务托管",
      href: "/services/mcp-hosting",
      desc: "稳定可靠的MCP服务托管，无需关心基础设施",
    },
  ];
  
  const resourceLinks = [
    {
      name: "MCP文档",
      href: "https://mcp.vyagent.com/introduction",
      desc: "全面的MCP协议文档，帮助开发者快速接入",
    },
    {
      name: "API文档",
      href: "/api",
      desc: "详细的API使用文档，快速集成我们的服务",
    },
    {
      name: "用户指南",
      href: "/guides",
      desc: "全面的用户指南，从入门到精通",
    },
  ];
  
  const companyLinks = [
    {
      name: "关于我们",
      href: "/about",
      desc: "了解纬曜智能的愿景和使命",
    },
    {
      name: "客户案例",
      href: "/case-studies",
      desc: "了解其他客户如何使用我们的服务创造价值",
    },
    {
      name: "联系我们",
      href: "/contact",
      desc: "获取技术支持或商务合作",
    },
  ];
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="columns is-multiline">
          <div className="column is-4">
            <h2 className="title is-5">纬曜智能</h2>
            <p className="mb-4">
              专业的MCP人工智能解决方案提供商，致力于帮助企业轻松接入和管理AI能力。
            </p>
            <div className="social-links mt-4">
              <a href="https://github.com/vyagent" target="_blank" className="mr-3">
                <GitHubIcon className="is-medium" />
              </a>
              <a href="https://discord.gg/vyagent" target="_blank" className="mr-3">
                <DiscordIcon className="is-medium" />
              </a>
              <a href="https://twitter.com/vyagent" target="_blank">
                <TwitterIcon className="is-medium" />
              </a>
            </div>
          </div>
          
          <div className="column is-8">
            <div className="columns is-multiline">
              <div className="column is-one-third">
                <h3 className="title is-6 mb-3">产品服务</h3>
                {productLinks.map((link) => (
                  <div key={link.name} className="mb-3">
                    <a href={link.href} className="tk-lib">
                      <span className="tk-lib-name">{link.name}</span>
                      <p className="tk-lib-desc is-size-7">{link.desc}</p>
                    </a>
                  </div>
                ))}
              </div>
              
              <div className="column is-one-third">
                <h3 className="title is-6 mb-3">开发资源</h3>
                {resourceLinks.map((link) => (
                  <div key={link.name} className="mb-3">
                    <a href={link.href} className="tk-lib">
                      <span className="tk-lib-name">{link.name}</span>
                      <p className="tk-lib-desc is-size-7">{link.desc}</p>
                    </a>
                  </div>
                ))}
              </div>
              
              <div className="column is-one-third">
                <h3 className="title is-6 mb-3">公司</h3>
                {companyLinks.map((link) => (
                  <div key={link.name} className="mb-3">
                    <a href={link.href} className="tk-lib">
                      <span className="tk-lib-name">{link.name}</span>
                      <p className="tk-lib-desc is-size-7">{link.desc}</p>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <hr className="mt-5 mb-5" />
        
        <div className="columns">
          <div className="column is-8">
            <p className="is-size-7">
              © {new Date().getFullYear()} 纬曜智能科技有限公司 版权所有
            </p>
          </div>
          <div className="column is-4 has-text-right">
            <p className="is-size-7">
              由 <a href="https://cloudflare.com" target="_blank" rel="sponsored nofollow">Cloudflare</a> 提供技术支持
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
