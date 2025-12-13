/**
 * 国际化配置
 * 支持中文(zh)和英文(en)
 */

export type Locale = 'zh' | 'en';

export const locales: Locale[] = ['zh', 'en'];

export const defaultLocale: Locale = 'zh';

// 内容结构定义
export interface SectionContent {
  badge: string;
  title: string;
  subtitle?: string;
  description: string | string[];
  highlight?: string;
}

export interface ProjectItem {
  title: string;
  description: string;
}

export interface ProjectsSectionContent {
  badge: string;
  title: string;
  subtitle?: string;
  description?: string;
  items: {
    cv: ProjectItem;
    a2a: ProjectItem;
    mcp: ProjectItem;
    x402: ProjectItem;
    aitop: ProjectItem;
  };
}

export interface Content {
  nav: {
    title: string;
    language: string;
    theme: string;
    scrollHint: string;
  };
  sections: {
    chaos: SectionContent;
    insight: SectionContent;
    projects: ProjectsSectionContent;
    order: SectionContent;
    vision: SectionContent;
    call: SectionContent;
  };
  footer: {
    placeholder: string;
    submit: string;
  };
}

// 中文内容
const zhContent: Content = {
  nav: {
    title: '微元熵减',
    language: '中/En',
    theme: '主题',
    scrollHint: '向下滚动',
  },
  sections: {
    chaos: {
      badge: '',
      title: '世界正处于混沌',
      description: [
        '这是一个物理学事实，也是世界的现状。',
        '尽管流水线解决了工业的自动化，但我们的生活、科研与创造，依然淹没在"非标场景"中。',
        '信息的碎片、意图的断裂、繁琐的对齐……',
        '这不是单纯的低效，这是能量的耗散。',
      ],
      highlight: '使用 AI 对抗熵增。',
    },
    insight: {
      badge: '',
      title: '欲重构宏观',
      subtitle: '先定义微元',
      description: [
        '拒绝使用规则/模版来进行伪标准化。',
        '我们将复杂的非标场景抽象为最小单位——微元。',
      ],
      highlight: '当以微元为基础，混沌便能呈现秩序化。',
    },
    projects: {
      badge: '已支持项目',
      title: '微元生态',
      subtitle: '探索我们正在构建的产品',
      description: '每一个项目都是微元理念的实践，让复杂变得简单。',
      items: {
        cv: {
          title: '微元简历',
          description: '智能简历生成与优化平台，让求职更高效。',
        },
        a2a: {
          title: 'A2A 协议中文版',
          description: 'Agent-to-Agent 协议中文文档，助力 AI 代理互联互通。',
        },
        mcp: {
          title: 'MCP 协议中文版',
          description: 'Model Context Protocol 中文文档，构建 AI 上下文管理标准。',
        },
        x402: {
          title: 'X402 协议中文版',
          description: 'HTTP 402 支付协议中文文档，开启 AI 原生支付新时代。',
        },
        aitop: {
          title: 'AITop 话费充值',
          description: '基于 X402 协议的话费充值平台，体验无摩擦支付。',
        },
      },
    },
    order: {
      badge: '',
      title: '从混沌，到秩序',
      subtitle: '用 AI 作为基础原则进行重构',
      description: [
        'AI 不是工具，是负熵',
        '不需要创造只需让每一个微元注入智能。',
        '像麦克斯韦妖一样，我们在信息的洪流中精准识别、连接、重组。',
      ],
      highlight: '将高边际成本的无序，转化为零边际成本的结构。',
    },
    vision: {
      badge: '',
      title: '意图即现实',
      description: [
        '想象一个全自动化的未来。',
        '所有的中间环节都被智能基底消解。',
        '无论是科学探索的深邃，还是日常生活的琐碎。',
        '没有任何摩擦力能阻挡创造力的传递。',
      ],
      highlight: '你发出意图，世界即刻重构。',
    },
    call: {
      badge: '',
      title: '蓝图',
      subtitle: '发现共建者',
      description: [
        '这是一场对数字世界的底层重构实验。',
        '既然你已经读到了这里，说明你也看见了那条通往有序的隐秘路径。',
        '不要只做旁观者。',
      ],
    },
  },
  footer: {
    placeholder: '',
    submit: '',
  },
};

// 英文内容
const enContent: Content = {
  nav: {
    title: 'μ-entropy',
    language: '中/En',
    theme: 'Theme',
    scrollHint: 'Scroll Down',
  },
  sections: {
    chaos: {
      badge: '',
      title: 'The Universe Leans Toward Chaos',
      description: [
        'This is a law of physics, and the current state of the world.',
        'While assembly lines solved industrial automation, our lives, research, and creativity remain submerged in "non-standard contexts."',
        'Fragmented information. Broken intents. Tedious alignment...',
        'This is not mere inefficiency. This is energy dissipation.',
      ],
      highlight: 'Using AI to fight entropy.',
    },
    insight: {
      badge: '',
      title: 'To Reconstruct the Macro',
      subtitle: 'First Define the Micro-element',
      description: [
        'We refuse to use rules/templates for pseudo-standardization.',
        'We abstract complex non-standard contexts into the smallest unit—Micro-elements.',
      ],
      highlight: 'When based on Micro-elements, chaos can manifest as order.',
    },
    projects: {
      badge: 'Supported Projects',
      title: 'Micro-element Ecosystem',
      subtitle: 'Explore the products we are building',
      description: 'Each project is a practice of the Micro-element philosophy, making complexity simple.',
      items: {
        cv: {
          title: 'VY Resume',
          description: 'Intelligent resume generation and optimization platform for more efficient job hunting.',
        },
        a2a: {
          title: 'A2A Protocol (Chinese)',
          description: 'Agent-to-Agent protocol documentation in Chinese, enabling AI agent interconnection.',
        },
        mcp: {
          title: 'MCP Protocol (Chinese)',
          description: 'Model Context Protocol documentation in Chinese, building AI context management standards.',
        },
        x402: {
          title: 'X402 Protocol (Chinese)',
          description: 'HTTP 402 payment protocol documentation in Chinese, ushering in the AI-native payment era.',
        },
        aitop: {
          title: 'AITop Phone Recharge',
          description: 'Phone recharge platform based on X402 protocol, experience frictionless payments.',
        },
      },
    },
    order: {
      badge: '',
      title: 'From Chaos to Order',
      subtitle: 'Reconstructing with AI as the Fundamental Principle',
      description: [
        'AI is not a tool, it is negentropy.',
        'No need to create. Just inject intelligence into every Micro-element.',
        'Like Maxwell\'s Demon, we precisely identify, connect, and reorganize within the flood of information.',
      ],
      highlight: 'Transforming high-marginal-cost disorder into zero-marginal-cost structure.',
    },
    vision: {
      badge: '',
      title: 'Intent is Reality',
      description: [
        'Imagine a fully automated future.',
        'All intermediate steps are dissolved by an intelligent substrate.',
        'Whether the depth of scientific exploration or the trivialities of daily life.',
        'No friction can block the transmission of creativity.',
      ],
      highlight: 'You express intent, and the world instantly reconstructs.',
    },
    call: {
      badge: '',
      title: 'Blueprint',
      subtitle: 'Finding Co-builders',
      description: [
        'This is an experiment in fundamental reconstruction of the digital world.',
        'Since you have read this far, it means you have also seen that hidden path to order.',
        'Don\'t just be an observer.',
      ],
    },
  },
  footer: {
    placeholder: 'Input your signal or code here',
    submit: 'Send Signal',
  },
};

export const content: Record<Locale, Content> = {
  zh: zhContent,
  en: enContent,
};

export function getContent(locale: Locale): Content {
  return content[locale];
}

