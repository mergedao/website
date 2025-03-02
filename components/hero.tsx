import React, { FC } from "react";

const gettingStarted = "/tokio/tutorial";

const icons = [
  "bytes",
  "hyper",
  "mio",
  "runtime",
  "runtime2",
  "tonic",
  "tower",
  "tracing",
].map((id) => (
  <div key={id} id={`tk-float-${id}`} className="tk-float is-hidden-mobile">
    <img src={`/img/icons/${id == "runtime2" ? "runtime" : id}.svg`} />
  </div>
));

const Hero: FC = () => (
  <section className="hero is-primary tk-intro">
    <div className="hero-body">
      <div className="container tk-hero-bg">
        {icons}
        <div className="container has-text-centered has-text-left-mobile">
          <h1 className="title">
            专业的MCP人工智能解决方案，为您的业务赋能。
          </h1>
          <h2 className="subtitle">
            纬曜智能致力于提供全面的MCP(Model Cloud Platform)解决方案，
            包括协议文档维护、MCP商店、服务托管及相关SaaS服务。
            我们的平台让您能够轻松接入和管理各类AI模型，满足从小型项目到大规模企业应用的各种需求。
          </h2>
          <div className="has-text-centered-mobile">
            <a href={gettingStarted} className="button is-link is-medium">
              立即开始
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
