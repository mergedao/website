import React from "react";
import { DiscordIcon, GitHubIcon, TwitterIcon } from "./icons";

export default function Footer() {
  const libs = [
    {
      name: "MCP文档",
      href: "https://mcp.vyagent.com/introduction",
      desc: "全面的MCP协议文档，帮助开发者快速接入我们的服务。",
    },
    {
      name: "MCP商店",
      href: "/services/mcp-store",
      desc: "丰富多样的AI模型和应用，满足各种业务场景需求。",
    },
    {
      name: "服务托管",
      href: "/services/mcp-hosting",
      desc: "稳定可靠的MCP服务托管，无需关心基础设施。",
    },
    {
      name: "API文档",
      href: "/api",
      desc: "详细的API使用文档，帮助您快速集成我们的服务。",
    },
    {
      name: "用户指南",
      href: "/guides",
      desc: "全面的用户指南，从入门到精通。",
    },
    {
      name: "客户案例",
      href: "/case-studies",
      desc: "了解其他客户如何使用我们的服务创造价值。",
    },
  ];
  return (
    <footer className="footer">
      <div className="container">
        <div className="columns is-multiline">
          <div className="column is-4">
            <h2 className="title is-5">纬曜智能</h2>
            <p>
              专业的MCP人工智能解决方案提供商，致力于帮助企业轻松接入和管理AI能力。
            </p>
          </div>
          <div className="column is-half tk-help is-hidden-mobile">
            <img
              src="/img/tokio-horizontal.svg"
              alt="tokio-logo"
              width="133"
              height="56"
            />
            <div className="tk-help-links">
              <p>
                Get Help:
                <a
                  href="https://github.com/tokio-rs/tokio/discussions"
                  target="_blank"
                >
                  <GitHubIcon className="is-medium" />
                </a>
                <a href="https://discord.gg/tokio" target="_blank">
                  <DiscordIcon className="is-medium" />
                </a>
              </p>
              <p>
                Stay up to date:
                <a href="https://twitter.com/tokio_rs" target="_blank">
                  <TwitterIcon className="is-medium" />
                </a>
              </p>
            </div>
          </div>
          <div className="column is-half">
            <div className="columns is-multiline is-mobile tk-footer-libs">
              {libs}
            </div>
          </div>
        </div>
        <div className="container has-text-centered">
          <p>
            Built with all the love in the world by{" "}
            <a
              href="https://twitter.com/carllerche"
              target="_blank"
              rel="noopener"
            >
              @carllerche
            </a>
          </p>
        </div>
        <div className="container has-text-centered">
          <p>
            with the help of{" "}
            <a
              href="https://github.com/tokio-rs/tokio/graphs/contributors"
              target="_blank"
            >
              our contributors
            </a>
            .
          </p>
        </div>
        <div className="container has-text-centered">
          <p>
            Hosted by{" "}
            <a
              href="https://netlify.com"
              target="_blank"
              rel="sponsored nofollow"
            >
              Netlify
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
