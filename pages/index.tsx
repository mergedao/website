import React from "react";

import Hero from "../components/hero";
import Layout from "../components/layout";
import Footer from "../components/footer";
import Libs from "../components/libs";
import Logos from "../components/logos";
import Stack from "../components/stack";
import * as api from "../lib/api";

export default function Home({ app }) {
  return (
    <Layout
      seo={{
        title: '纬曜智能 - 专业MCP人工智能解决方案提供商',
        description: '纬曜智能通过MCP协议，帮助企业轻松接入和管理各种AI能力，包括模型商店和服务托管。',
        keywords: 'MCP, 人工智能, AI模型, 企业AI解决方案, 智能服务'
      }}
      blog={app.blog}
    >
      <div className="tk-landing">
        <Hero />
        <Logos />
        <Libs />
        <Stack />
      </div>
      <Footer />
    </Layout>
  );
}

export async function getStaticProps() {
  return await api.withAppProps();
}
