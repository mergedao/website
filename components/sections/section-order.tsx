"use client";

import { motion } from "framer-motion";
import { useLocale, useTheme } from "../../lib/context";
import { SectionContainer, SectionDescription } from "./section-container";

/**
 * 第三屏：转 - 从混沌到秩序
 * 核心Slogan，视觉高潮
 * 视觉：几何线条形成完美秩序
 */
export function SectionOrder() {
  const { content } = useLocale();
  const { theme } = useTheme();
  const section = content.sections.order;
  
  // 根据主题设置文字渐变
  const titleGradient = theme === 'dark' 
    ? "bg-gradient-to-b from-white via-white to-white/60"
    : "bg-gradient-to-b from-black via-black to-black/60";
  
  const subtitleColor = theme === 'dark'
    ? "text-white/50"
    : "text-black/50";

  return (
    <SectionContainer 
      id="order" 
      className={theme === 'dark' ? "bg-black" : "bg-white"}
    >
      {/* 几何网格背景 - 秩序的象征 */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* 动态线条 */}
        <svg
          className="absolute inset-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor={theme === 'dark' ? "rgba(255,255,255,0)" : "rgba(0,0,0,0)"} />
              <stop offset="50%" stopColor={theme === 'dark' ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"} />
              <stop offset="100%" stopColor={theme === 'dark' ? "rgba(255,255,255,0)" : "rgba(0,0,0,0)"} />
            </linearGradient>
          </defs>
          
          {/* 水平线 */}
          {[...Array(8)].map((_, i) => (
            <motion.line
              key={`h-${i}`}
              x1="0%"
              y1={`${(i + 1) * 12}%`}
              x2="100%"
              y2={`${(i + 1) * 12}%`}
              stroke="url(#line-gradient)"
              strokeWidth="1"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.5, delay: i * 0.1, ease: "easeOut" }}
              viewport={{ once: true }}
            />
          ))}
          
          {/* 垂直线 */}
          {[...Array(12)].map((_, i) => (
            <motion.line
              key={`v-${i}`}
              x1={`${(i + 1) * 8}%`}
              y1="0%"
              x2={`${(i + 1) * 8}%`}
              y2="100%"
              stroke={theme === 'dark' ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.03)"}
              strokeWidth="1"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.5 + i * 0.05, ease: "easeOut" }}
              viewport={{ once: true }}
            />
          ))}
        </svg>

        {/* 中央光晕 */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          viewport={{ once: true }}
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full bg-gradient-radial blur-3xl ${
            theme === 'dark' 
              ? 'from-white/[0.05] via-transparent to-transparent' 
              : 'from-black/[0.05] via-transparent to-transparent'
          }`}
        />
      </div>

      {/* 内容 */}
      <div className="relative z-10 max-w-5xl mx-auto space-y-8 md:space-y-12">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className={`text-xs md:text-sm uppercase tracking-[0.3em] font-mono ${
            theme === 'dark' ? 'text-white/40' : 'text-black/40'
          }`}>
            {section.badge}
          </span>
        </motion.div>

        {/* 核心Slogan - 超大字体 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="text-center space-y-2"
        >
          <h2 className={`text-4xl md:text-6xl lg:text-8xl xl:text-9xl font-bold tracking-tight bg-clip-text text-transparent ${titleGradient}`}>
            {section.title}
          </h2>
          {section.subtitle && (
            <p className={`text-2xl md:text-3xl lg:text-4xl font-light ${subtitleColor} tracking-wide`}>
              {section.subtitle}
            </p>
          )}
        </motion.div>

        {/* 分隔线 */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className={`w-24 md:w-32 h-px bg-gradient-to-r from-transparent to-transparent mx-auto ${
            theme === 'dark' ? 'via-white/30' : 'via-black/30'
          }`}
        />

        {/* 描述 */}
        <SectionDescription
          lines={Array.isArray(section.description) ? section.description : [section.description]}
          highlight={section.highlight}
        />
      </div>
    </SectionContainer>
  );
}

