import React, { FC, useCallback, useState } from "react";
import classnames from "classnames";
import SocialLinks from "./social-links";

// TODO: what is this thing??
type Blog = any;

const Brand: FC = () => (
  <a href="/" className="navbar-item">
    <img
      src="/img/tokio-horizontal.svg"
      alt="tokio-logo"
      width="133"
      height="56"
    />
  </a>
);

const Links: FC<{ blog: Blog }> = ({ blog }) => {
  const links = Object.entries({
    "MCP文档": "https://mcp.vyagent.com/introduction",
    "MCP商店": "/services/mcp-store",
    "服务托管": "/services/mcp-hosting",
    "SaaS服务": "/services/saas",
    "博客": blog.href,
  }).map(([name, href]) => (
    <a key={name} href={href} className="navbar-item navbar-text">
      {name}
    </a>
  ));

  return <>{links}</>;
};

const Navigation: FC<{ blog: Blog }> = ({ blog }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleNav = useCallback(() => {
    setExpanded((prev) => !prev);
  }, []);

  return (
    <nav
      className="navbar is-spaced"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <Brand />
          <a
            role="button"
            className={classnames("navbar-burger", {
              "is-active": expanded,
            })}
            aria-label="menu"
            aria-expanded="false"
            onClick={() => toggleNav()}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </a>
        </div>
        <div
          className={classnames("navbar-menu", {
            "is-active": expanded,
          })}
        >
          <div className="navbar-end">
            <Links blog={blog} />

            <hr className="is-hidden-mobile" />

            <SocialLinks />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
