"use client";

import { motion } from "framer-motion";
import { useLocale } from "../../lib/context";
import { SectionContainer, SectionTitle, SectionDescription } from "./section-container";

/**
 * 第四屏：合 - 意图即现实
 * 视觉：流体传输，顺滑无阻力
 */
export function SectionVision() {
  const { content } = useLocale();
  const section = content.sections.vision;

  return (
    <SectionContainer id="vision" className="bg-zinc-950">
      {/* 流动光束背景 */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* 流动的光线 */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
            style={{
              top: `${20 + i * 15}%`,
              left: '-100%',
              width: '200%',
            }}
            initial={{ x: '-50%', opacity: 0 }}
            whileInView={{ x: '0%', opacity: 1 }}
            transition={{
              duration: 3,
              delay: i * 0.2,
              ease: "linear",
              repeat: Infinity,
              repeatType: "loop",
            }}
            viewport={{ once: true }}
          />
        ))}

        {/* 渐变光晕 */}
        <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-black/50 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/50 to-transparent" />
      </div>

      {/* 内容 */}
      <div className="relative z-10 max-w-4xl mx-auto space-y-12 md:space-y-16">
        <SectionTitle
          badge={section.badge}
          title={section.title}
        />

        <SectionDescription
          lines={Array.isArray(section.description) ? section.description : [section.description]}
        />

        {/* 高亮承诺 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center pt-8"
        >
          <p className="text-xl md:text-2xl lg:text-3xl font-medium text-white leading-relaxed">
            {section.highlight}
          </p>
        </motion.div>

        {/* 视觉化：意图 -> 现实 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-4 md:gap-8 pt-8"
        >
          <div className="text-center">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border border-white/20 flex items-center justify-center bg-white/[0.02]">
              <span className="text-2xl md:text-3xl">💭</span>
            </div>
            <p className="text-sm md:text-base text-white/40 mt-3 font-mono">Intent</p>
          </div>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 1 }}
            viewport={{ once: true }}
            className="w-16 md:w-32 h-px bg-gradient-to-r from-white/10 via-white/40 to-white/10"
          />

          <div className="text-center">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border border-white/20 flex items-center justify-center bg-white/[0.02]">
              <span className="text-2xl md:text-3xl">⚡</span>
            </div>
            <p className="text-sm md:text-base text-white/40 mt-3 font-mono">Transform</p>
          </div>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            viewport={{ once: true }}
            className="w-16 md:w-32 h-px bg-gradient-to-r from-white/10 via-white/40 to-white/10"
          />

          <div className="text-center">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border border-white/20 flex items-center justify-center bg-white/[0.02]">
              <span className="text-2xl md:text-3xl">✨</span>
            </div>
            <p className="text-sm md:text-base text-white/40 mt-3 font-mono">Reality</p>
          </div>
        </motion.div>
      </div>
    </SectionContainer>
  );
}

