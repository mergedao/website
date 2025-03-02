# Tokio Website

The website for the Tokio project. Lives at https://tokio.rs.

Besides containing the content for the website, it also includes crates
containing the example code used in the tutorial. These crates can be compiled
and run.

* [hello-tokio](tutorial-code/hello-tokio/src/main.rs)
* [spawning](tutorial-code/spawning/src/main.rs)
* [shared-state](tutorial-code/shared-state/src/main.rs)
* [channels](tutorial-code/channels/src/main.rs)
* [io](tutorial-code/io)
    * [echo-server-copy](tutorial-code/io/src/echo-server-copy.rs)
    * [echo-server](tutorial-code/io/src/echo-server.rs)
* [mini-tokio](tutorial-code/mini-tokio/src/main.rs)

## Contributing

Thinking about contributing? Great! This should help you get the website running
locally.

### Getting Started

The website is built using [Next.js] paired with the [Bulma] CSS framework.
You'll need NPM to install the required packages with:

```bash
npm install
```

Next, start the development server:

```bash
npm run dev
```

Then, open [http://localhost:3000](http://localhost:3000).

[Next.js]: https://nextjs.org/
[Bulma]: https://bulma.io/

### Resources

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [Bulma documentation](https://bulma.io/documentation/) - learn about Bulma.

## License

This project is licensed under the [MIT license](LICENSE).

### Contribution

Unless you explicitly state otherwise, any contribution intentionally submitted
for inclusion in Tokio by you, shall be licensed as MIT, without any additional
terms or conditions.

You can run our tests by running the commands:
```
# in doc-test (unstable APIs are needed by some tests)
RUSTFLAGS="--cfg tokio_unstable" cargo +nightly test

# in tutorial-code
cargo test --all
```
The doc tests verify that all code blocks are valid Rust, and the tutorial-code folder
contains the full code examples from the tutorial.

---
date: "2024-06-10"
title: "MCP协议完全指南"
description: "2024年6月10日"
---

MCP(Model Cloud Platform)协议是连接AI模型和应用的桥梁。本文将为您详细介绍MCP协议的基本概念、核心组件和最佳实践。

## 什么是MCP协议

MCP协议是一套标准化的接口规范，用于定义AI模型服务的调用方式、参数传递、结果返回等交互环节。通过统一的协议，开发者可以轻松接入不同的AI模型，而无需关心底层实现细节。

## MCP协议的核心组件

- **模型定义**：描述模型的基本信息、输入输出格式等。
- **调用接口**：标准化的API调用方式，包括同步调用和异步调用。
- **状态管理**：模型运行状态的监控和管理机制。
- **安全认证**：确保模型调用的安全性和合法性。

## 如何使用MCP协议

本文将通过一个简单的示例，展示如何使用MCP协议调用一个图像识别模型...
