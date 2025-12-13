"use client";

import { motion } from "framer-motion";
import { useLocale } from "../../lib/context";
import { SectionContainer } from "./section-container";
import { BackgroundPaperShaders } from "../ui/background-paper-shaders";

/**
 * 第一屏：启 - 直面热力学定律
 * 视觉：混沌的粒子，代表熵增
 */
export function SectionChaos() {
  const { content } = useLocale();
  const section = content.sections.chaos;

  return (
    <SectionContainer id="chaos" className="bg-[#030303]">
      {/* Paper Design Shader 背景 */}
      <div className="absolute inset-0 z-0">
        <BackgroundPaperShaders
          effect="mesh"
          speed={1.0}
          colors={["#000000", "#1a1a1a", "#333333", "#ffffff"]}
        />
      </div>

      {/* 渐变遮罩 - 增强文字可读性 */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.08] via-transparent to-blue-500/[0.08] blur-3xl z-[1]" />

      {/* 内容 */}
      <div className="relative z-10 max-w-4xl mx-auto space-y-12 md:space-y-16">
        {/* SVG 滤镜用于神经元般的强烈蓝光效果 */}
        <svg className="absolute w-0 h-0">
          <defs>
            {/* 强烈的神经元蓝光滤镜 - 多层模糊和颜色增强 */}
            <filter id="neural-glow-cyan" x="-50%" y="-50%" width="200%" height="200%">
              {/* 第一层：大范围模糊 - 外发光 */}
              <feGaussianBlur stdDeviation="8" result="outerGlow" />
              {/* 第二层：中等模糊 - 中发光 */}
              <feGaussianBlur stdDeviation="4" result="midGlow" />
              {/* 第三层：小模糊 - 内发光 */}
              <feGaussianBlur stdDeviation="2" result="innerGlow" />
              
              {/* 颜色增强 - #3b82f6 蓝色光晕 */}
              <feColorMatrix
                in="outerGlow"
                type="matrix"
                values="0 0 0 0 0.231373
                        0 0 0 0 0.509804
                        0 0 0 0 0.964706
                        0 0 0 0.8 0"
                result="coloredOuter"
              />
              <feColorMatrix
                in="midGlow"
                type="matrix"
                values="0 0 0 0 0.231373
                        0 0 0 0 0.509804
                        0 0 0 0 0.964706
                        0 0 0 0.6 0"
                result="coloredMid"
              />
              <feColorMatrix
                in="innerGlow"
                type="matrix"
                values="0 0 0 0 0.231373
                        0 0 0 0 0.509804
                        0 0 0 0 0.964706
                        0 0 0 0.4 0"
                result="coloredInner"
              />
              
              {/* 合并所有发光层 */}
              <feMerge>
                <feMergeNode in="coloredOuter" />
                <feMergeNode in="coloredMid" />
                <feMergeNode in="coloredInner" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            
            {/* 脉冲动画用的滤镜 - 可变强度 */}
            <filter id="neural-glow-pulse" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="6" result="pulseGlow" />
              <feColorMatrix
                in="pulseGlow"
                type="matrix"
                values="0 0 0 0 0.231373
                        0 0 0 0 0.509804
                        0 0 0 0 0.964706
                        0 0 0 0.7 0"
                result="coloredPulse"
              />
              <feMerge>
                <feMergeNode in="coloredPulse" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
        </svg>

        {/* Badge */}
        {section.badge && (
          <div className="text-center">
            <span
              className="inline-block text-xs md:text-sm uppercase tracking-[0.3em] font-mono relative"
              style={{
                color: "#3b82f6",
                textShadow: "0 0 10px rgba(59, 130, 246, 0.5), 0 0 20px rgba(59, 130, 246, 0.3), 0 0 30px rgba(59, 130, 246, 0.2)",
              }}
            >
              {section.badge}
            </span>
          </div>
        )}

        {/* Title - 神经元蓝光效果 */}
        <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold tracking-tight leading-tight text-center relative">
          {/* 多层光晕背景 */}
          <span
            className="block absolute inset-0 blur-2xl opacity-30"
            style={{
              color: "#3b82f6",
            }}
          >
            {section.title}
          </span>
          
          {/* 主文字 */}
          <span
            className="block relative"
            style={{
              color: "#3b82f6",
            }}
          >
            {section.title}
          </span>
        </h2>

        {/* Description - 神经元蓝光效果 */}
        <div className="max-w-2xl mx-auto space-y-6 text-center">
          {Array.isArray(section.description) ? section.description.map((line, index) => (
            <p
              key={index}
              className="text-base md:text-lg lg:text-xl leading-relaxed font-semibold relative"
              style={{
                color: "#3b82f6",
                textShadow: "0 0 10px rgba(59, 130, 246, 0.4), 0 0 20px rgba(59, 130, 246, 0.2), 0 0 30px rgba(59, 130, 246, 0.1)",
              }}
            >
              {line}
            </p>
          )) : (
            <p
              className="text-base md:text-lg lg:text-xl leading-relaxed font-semibold relative"
              style={{
                color: "#3b82f6",
                textShadow: "0 0 10px rgba(59, 130, 246, 0.4), 0 0 20px rgba(59, 130, 246, 0.2), 0 0 30px rgba(59, 130, 246, 0.1)",
              }}
            >
              {section.description}
            </p>
          )}

          {/* Highlight with Strong Neural Glow Effect */}
          {section.highlight && (
            <p
              className="text-lg md:text-xl lg:text-2xl font-bold pt-6 relative"
              style={{
                color: "#3b82f6",
              }}
            >
              {section.highlight}
            </p>
          )}
        </div>
      </div>

      {/* 底部滚动提示 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-white/30"
        >
          <span className="text-xs uppercase tracking-widest font-mono">
            {content.nav.scrollHint}
          </span>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="animate-pulse"
          >
            <path
              d="M12 5v14m0 0l-6-6m6 6l6-6"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      </motion.div>
    </SectionContainer>
  );
}

