"use client";

import { motion } from "framer-motion";
import { 
  FileUser, 
  MessageSquareCode, 
  Server, 
  Wallet, 
  Smartphone 
} from "lucide-react";
import { useLocale } from "../../lib/context";
import { SectionContainer } from "./section-container";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { cn } from "@/lib/utils";

// 项目数据
const projects = [
  {
    id: "cv",
    url: "https://cv.vyagent.com",
    icon: FileUser,
    area: "md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]",
  },
  {
    id: "a2a",
    url: "https://a2a.vyagent.com",
    icon: MessageSquareCode,
    area: "md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]",
  },
  {
    id: "mcp",
    url: "https://mcp.vyagent.com",
    icon: Server,
    area: "md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]",
  },
  {
    id: "x402",
    url: "https://x402.vyagent.com",
    icon: Wallet,
    area: "md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]",
  },
  {
    id: "aitop",
    url: "https://aitop.vyagent.com",
    icon: Smartphone,
    area: "md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]",
  },
];

interface ProjectCardProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  url: string;
  delay: number;
}

const ProjectCard = ({ area, icon, title, description, url, delay }: ProjectCardProps) => {
  return (
    <motion.li 
      className={cn("min-h-[12rem] md:min-h-[14rem] list-none", area)}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: delay * 0.1 }}
      viewport={{ once: true }}
    >
      <a 
        href={url} 
        target="_blank" 
        rel="noopener noreferrer"
        className="block h-full group"
      >
        <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-zinc-200 dark:border-zinc-800 p-2 md:rounded-[1.5rem] md:p-3 transition-colors hover:transition-none">
          <GlowingEffect
            spread={40}
            glow={true}
            disabled={false}
            proximity={64}
            inactiveZone={0.01}
            borderWidth={3}
          />
          <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-[0.75px] border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-5 md:p-6 shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)]">
            <div className="relative flex flex-1 flex-col justify-between gap-3">
              <div className="w-fit rounded-lg border-[0.75px] border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 p-2 group-hover:bg-zinc-100 dark:group-hover:bg-zinc-700 transition-colors hover:transition-none">
                {icon}
              </div>
              <div className="space-y-2 md:space-y-3">
                <h3 className="pt-0.5 text-lg md:text-xl leading-tight font-semibold font-sans tracking-[-0.02em] text-zinc-900 dark:text-white group-hover:text-zinc-700 dark:group-hover:text-zinc-200 transition-colors hover:transition-none">
                  {title}
                </h3>
                <p className="font-sans text-sm leading-relaxed md:text-base md:leading-[1.375rem] text-zinc-500 dark:text-zinc-400">
                  {description}
                </p>
              </div>
            </div>
            {/* 外链指示 */}
            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity hover:transition-none">
              <svg 
                className="w-4 h-4 text-zinc-400 dark:text-zinc-500" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
                />
              </svg>
            </div>
          </div>
        </div>
      </a>
    </motion.li>
  );
};

/**
 * 支持的项目展示模块
 * 位于"欲重构宏观"模块之后
 */
export function SectionProjects() {
  const { content } = useLocale();
  const section = content.sections.projects;

  return (
    <SectionContainer id="projects" variant="light" className="!h-auto min-h-screen py-20 md:py-28">
      {/* 背景装饰 */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-radial from-zinc-200/50 dark:from-zinc-800/30 to-transparent blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-radial from-zinc-100/50 dark:from-zinc-800/20 to-transparent blur-3xl" />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto space-y-10 md:space-y-16">
        {/* 标题区域 */}
        <div className="text-center space-y-4 md:space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="text-xs md:text-sm uppercase tracking-[0.3em] text-zinc-400 dark:text-zinc-500 font-mono">
              {section.badge}
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-zinc-900 via-zinc-800 to-zinc-600 dark:from-white dark:via-zinc-200 dark:to-zinc-400"
          >
            {section.title}
          </motion.h2>

          {section.subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg md:text-xl lg:text-2xl font-light text-zinc-500 dark:text-zinc-400"
            >
              {section.subtitle}
            </motion.p>
          )}
        </div>

        {/* 项目卡片网格 */}
        <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
          {projects.map((project, index) => {
            const projectContent = section.items[project.id as keyof typeof section.items];
            const Icon = project.icon;
            return (
              <ProjectCard
                key={project.id}
                area={project.area}
                icon={<Icon className="h-5 w-5 text-zinc-600 dark:text-zinc-300" />}
                title={projectContent.title}
                description={projectContent.description}
                url={project.url}
                delay={index}
              />
            );
          })}
        </ul>

        {/* 底部描述 */}
        {section.description && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center text-base md:text-lg text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto"
          >
            {section.description}
          </motion.p>
        )}
      </div>
    </SectionContainer>
  );
}

