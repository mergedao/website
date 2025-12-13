"use client";

import { motion } from "framer-motion";
import { useLocale } from "../../lib/context";
import { SectionContainer } from "./section-container";
import { Scene } from "../ui/void-hero";
import { Search, Box, Sparkles } from "lucide-react";

/**
 * 第二屏：承 - 微元视角
 * 视觉：透镜聚焦效果，从混沌中识别结构
 */
export function SectionInsight() {
  const { content, locale } = useLocale();
  const section = content.sections.insight;

  // 微元示例
  const microElements = locale === 'zh' 
    ? [
        { icon: Search, label: "发现混沌", desc: "发现身边不边际成本高昂的场景" },
        { icon: Box, label: "抽象微元", desc: "抽象出如何让AI来解决这些场景" },
        { icon: Sparkles, label: "重构场景", desc: "重构这些场景，成为新注入智能的微元" },
      ]
    : [
        { icon: Search, label: "Discover Chaos", desc: "Discover the high-marginal-cost scenarios around you" },
        { icon: Box, label: "Abstract Micro-elements", desc: "Abstract how to let AI solve these scenarios" },
        { icon: Sparkles, label: "Reconstruct Scenarios", desc: "Reconstruct these scenarios into new intelligent micro-elements" },
      ];

  return (
    <SectionContainer id="insight" className="bg-[#0A0A0A] py-24 md:py-32">
      {/* 3D 立方体背景 */}
      <div className="absolute inset-0 z-0">
        <Scene />
      </div>

      {/* 内容区域 - 避开中间立方体，使用左右布局 */}
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        {/* 顶部标题区域 - 缩小尺寸 */}
        <div className="mb-12 md:mb-16">
          <div className="text-center space-y-3 md:space-y-4">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight leading-tight"
            >
              {section.title}
            </motion.h2>
            
            {section.subtitle && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-lg md:text-xl lg:text-2xl font-light text-white/60"
              >
                {section.subtitle}
              </motion.p>
            )}
          </div>
        </div>

        {/* 中间内容区域 - 左右布局避开立方体 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-start mb-16 md:mb-24">
          {/* 左侧：描述 - 靠左对齐 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6 w-[350px] mr-5"
          >
            <div className="space-y-6 text-left">
              {Array.isArray(section.description) ? section.description.map((line, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-base md:text-lg lg:text-xl text-white/50 leading-relaxed font-light"
                >
                  {line}
                </motion.p>
              )) : (
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="text-base md:text-lg lg:text-xl text-white/50 leading-relaxed font-light"
                >
                  {section.description}
                </motion.p>
              )}
            </div>
          </motion.div>

          {/* 右侧：微元示例 - 靠右对齐，移除图标 */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6 text-right w-[350px] break-words justify-self-end"
          >
            {/* <div className="text-sm md:text-base uppercase tracking-[0.2em] text-white/40 font-mono mb-4">
              {locale === 'zh' ? '熵减过程' : 'Micro-elements'}
            </div> */}
            <div className="space-y-4">
              {microElements.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-white/70 flex items-start gap-3"
                  >
                    <div className="flex-1">
                      <p className="text-base md:text-lg text-white/80 font-medium mb-1">
                        {item.label}
                      </p>
                      <p className="text-sm md:text-base text-white/40 font-mono">
                        {item.desc}
                      </p>
                    </div>
                    <div className="flex-shrink-0 mt-1">
                      <IconComponent className="w-5 h-5 text-white/60" />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* 底部高亮文字 */}
        <motion.p
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-lg md:text-xl lg:text-2xl font-medium text-white text-center"
        >
          {section.highlight}
        </motion.p>
      </div>
    </SectionContainer>
  );
}

