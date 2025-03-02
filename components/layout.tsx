import React, { FC, ReactNode } from "react";

import Head from "next/head";
import Navigation from "./nav";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  display: "swap",
  subsets: ["latin"],
});

type Props = {
  title?: string;
  blog: any; // TODO: Don't know what this is yet...
  children: ReactNode;
};

function pageTitle(title: string | undefined): string {
  const name = "纬曜智能 - 专业的MCP人工智能解决方案";
  return title ? `${title} | ${name}` : name;
}

const Layout: FC<Props> = ({ title, blog, children }) => (
  <>
    <Head>
      <title>{pageTitle(title)}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        name="description"
        content="纬曜智能提供专业的MCP(Model Cloud Platform)解决方案，包括协议文档维护、MCP商店、服务托管及相关SaaS服务。"
      ></meta>
      <link rel="alternate icon" type="image/png" href="/favicon-32x32.png" />
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="alternate" type="application/rss+xml" href="/blog/index.xml" />
    </Head>
    <main className={roboto.className}>
      <Navigation blog={blog} />
      {children}
    </main>
  </>
);

export default Layout;
