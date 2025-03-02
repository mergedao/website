import React, { FC, useEffect } from "react";
import classnames from "classnames";

type StackLayer = {
  id: string;
  short?: string;
  name: string;
  desc: string;
  zIndex: number;
  href?: string;
};

const STACK_LAYERS: StackLayer[] = [
  {
    id: 'tokio',
    short: "平台",
    name: "智能云平台",
    desc: "纬曜智能提供全面的MCP(Model Cloud Platform)解决方案，帮助您轻松部署和管理AI模型。",
    zIndex: 0,
  },
  {
    id: 'runtime',
    short: "文档",
    name: "协议文档库",
    desc: "我们提供专业的MCP协议文档维护服务，确保您始终掌握最新的接口规范和最佳实践。",
    zIndex: 3,
    href: "https://mcp.vyagent.com/introduction",
  },
  {
    id: 'hyper',
    short: "商店",
    name: "模型应用店",
    desc: "在我们的MCP商店中，您可以找到各种高质量的AI模型和应用，满足不同业务场景的需求。",
    zIndex: 4,
    href: "/services/mcp-store",
  },
  {
    id: 'tonic',
    short: "托管",
    name: "云端托管库",
    desc: "我们提供稳定可靠的模型托管服务，让您无需关心基础设施，专注于业务创新。",
    zIndex: 6,
    href: "/services/mcp-hosting",
  },
  {
    id: 'tower',
    short: "集成",
    name: "系统集成器",
    desc: "提供专业的MCP系统集成服务，帮助您将AI能力无缝融入现有业务系统。",
    zIndex: 5,
    href: "/services/integration",
  },
  {
    id: 'mio',
    short: "接口",
    name: "接口服务库",
    desc: "简单易用的API接口，让您轻松接入各类AI模型能力。",
    zIndex: 2,
    href: "/services/api",
  },
  {
    id: 'tracing',
    short: "分析",
    name: "数据分析器",
    desc: "全面的使用数据分析，帮助您了解模型性能和用户使用情况，优化业务决策。",
    zIndex: 0,
    href: "/services/analytics",
  },
  {
    id: 'bytes',
    short: "云服",
    name: "云服务平台",
    desc: "基于MCP的一站式SaaS解决方案，满足企业各类AI应用场景需求。",
    zIndex: 1,
    href: "/services/saas",
  },
];

const Menu: FC = () => (
  <div className="column is-2 tk-menu is-hidden-touch">
    <div className="container anchor">
      <aside className="menu">
        <ul className="menu-list">
          {STACK_LAYERS.map((layer) => (
            <li key={layer.id} className={`tk-lib-${layer.id}`}>
              <a href={`#tk-lib-${layer.id}`}>{layer.short || layer.name}</a>{" "}
            </li>
          ))}
        </ul>
      </aside>
    </div>
  </div>
);

const Layer: FC<{ layer: StackLayer }> = ({ layer }) => (
  <div className="card">
    <div
      id={"tk-lib-stack-" + layer.id}
      className={classnames("card-content", `tk-lib-${layer.id}`)}
    >
      <div className="media">
        <div className="media-content">
          <a
            id={`tk-lib-${layer.id}`}
            style={{
              display: "block",
              position: "relative",
              top: "-40vh",
              visibility: "hidden",
            }}
          />
          <h1 className="title is-4">
            <img src={`/img/icons/${layer.id}.svg`} alt={layer.name} />
            {layer.name}
          </h1>
        </div>
      </div>
      <div className="content">
        <h2 className="subtitle">{layer.desc}</h2>
        {layer.href && (
          <p className="learn-more has-text-right">
            <a href={layer.href}>Learn more ➔</a>
          </p>
        )}
      </div>
    </div>
  </div>
);

export default function Stack() {
  useEffect(() => {
    var stack = document.getElementsByClassName(
      "tk-stack-active",
    ) as HTMLCollectionOf<HTMLElement>;
    var links = document.querySelectorAll(".tk-stack .menu li");
    var lines = document.getElementById("tk-stack-lines");

    // Done in JS so that when JS is not enabled, no links are enabled.
    links[0].classList.add("is-active");

    var stackElems = [];
    for (var i = 0; i < stack.length; ++i) {
      var stackId = stack[i].dataset.stackId;
      var div = document.getElementById("tk-lib-stack-" + stackId);
      // The boolean stores whether it is currently opaque.
      stackElems.push([stack[i], div, true]);
    }

    if (stackElems.length > 0) {
      var fn = function () {
        onscrollUpdateStacks(stackElems, links, lines);
      };
      window.addEventListener("scroll", fn);
      window.addEventListener("resize", fn);
      setTimeout(fn);
    }
  }, []);
  return (
    <section className="tk-stack">
      <div className="container">
        <div className="columns">
          <Menu />

          <div className="column is-5-desktop is-half-tablet tk-libs">
            {STACK_LAYERS.map((l) => (
              <Layer layer={l} key={l.id} />
            ))}
          </div>

          <div className="column is-half is-hidden-mobile">
            <div className="container anchor">
              {STACK_LAYERS.slice(1).map(({ id, zIndex }) => (
                <img
                  key={id}
                  className="tk-stack-active"
                  data-stack-id={id}
                  src={"/img/stack-" + id + ".svg"}
                  style={{ zIndex: zIndex }}
                />
              ))}
              {/* Special handling */}
              <img
                id="tk-stack-lines"
                data-stack-id="lines"
                src="/img/stack-lines.svg"
                style={{ zIndex: 7 }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function onscrollUpdateStacks(stackElems, links, lines) {
  var i;
  var stackBox = stackElems[0][0].getBoundingClientRect();
  var stackMid = (stackBox.top + 3 * stackBox.bottom) / 4.0;

  var current = -1;
  var currentY = -Infinity;
  // Find the thing to highlight.
  for (i = 0; i < stackElems.length; ++i) {
    var divBox = stackElems[i][1].getBoundingClientRect();
    // We want to highlight it if the div is sufficiently far down compared
    // to the floating stack image.
    if (divBox.top < stackMid) {
      // And among those, we want the top one.
      if (currentY < divBox.top) {
        current = i;
        currentY = divBox.top;
      }
    }
  }

  var didUpdate = false;

  for (i = 0; i < stackElems.length; ++i) {
    // Update the elements that don't have the correct state already.
    var shouldBeOpaque = current == -1 || current == i;
    if (stackElems[i][2] == shouldBeOpaque) continue;

    stackElems[i][2] = shouldBeOpaque;

    if (shouldBeOpaque) {
      didUpdate = true;
      stackElems[i][0].classList.add("tk-stack-active");
    } else {
      didUpdate = true;
      stackElems[i][0].classList.remove("tk-stack-active");
    }
  }

  if (didUpdate) {
    for (let i = 0; i < links.length; ++i) {
      links[i].classList.remove("is-active");
    }

    links[current + 1].classList.add("is-active");

    if (current != -1 && stackElems[current][0].dataset.stackId == "tracing") {
      lines.classList.add("tk-stack-active");
    } else {
      lines.classList.remove("tk-stack-active");
    }
  }
}
