import React, { FC, ReactNode } from "react";
import classnames from "classnames";

type Library = {
  id: string;
  name: string;
  desc: ReactNode;
};

const LIBS: Library[] = [
  {
    id: "runtime",
    name: "可靠性",
    desc: "纬曜智能的MCP平台采用高可用架构设计，确保服务稳定可靠，即使在高负载情况下也能保持出色的性能和响应速度。",
  },
  {
    id: "hyper",
    name: "高性能",
    desc: "基于先进的分布式技术，我们的平台能够处理海量请求，支持大规模并发访问，为您的AI应用提供强大的算力支持。",
  },
  {
    id: "tonic",
    name: "易用性",
    desc: (
      <>
        简洁直观的<code>API</code>设计和完善的<code>SDK</code>支持，让您能够轻松集成我们的服务，快速构建智能应用，无需深入了解复杂的底层技术。
      </>
    ),
  },
  {
    id: "tower",
    name: "灵活性",
    desc: "我们的MCP平台提供丰富的配置选项和自定义能力，可以根据不同的业务需求进行灵活调整，从小型应用到企业级解决方案都能完美适配。",
  },
];

const Lib: FC<{ lib: Library }> = ({ lib }) => (
  <div
    className={classnames(
      "column",
      "is-half",
      "is-flex",
      "tk-lib",
      `tk-lib-${lib.id}`,
    )}
  >
    <div className="card">
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <h1 className="title is-4">{lib.name}</h1>
          </div>
        </div>
        <div className="content">
          <h2 className="subtitle">{lib.desc}</h2>
        </div>
        {/* <p className="learn-more has-text-right">
          <a href="#">了解更多 ➔</a>
        </p> */}
      </div>
    </div>
  </div>
);

const Libs: FC = () => (
  <section className="tk-features">
    <div className="container">
      <div className="columns is-multiline">
        {LIBS.map((lib) => (
          <Lib lib={lib} key={lib.id} />
        ))}
      </div>
    </div>
  </section>
);

export default Libs;
