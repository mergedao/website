/* eslint-disable react-hooks/purity */
"use client";

import { motion } from "framer-motion";
import { useLocale } from "../../lib/context";
import { SectionContainer, SectionTitle, SectionDescription } from "./section-container";
import { useState, useEffect, useMemo } from "react";

/**
 * 第五屏：结 - 架构师的召唤
 * 行动号召，收集联系信息
 */
export function SectionCall() {
  const { content, locale } = useLocale();
  const section = content.sections.call;
  const [signal, setSignal] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [currentYear, setCurrentYear] = useState(2024);

  // 只在客户端挂载后生成随机位置，避免 hydration 不匹配
  useEffect(() => {
    setMounted(true);
    setCurrentYear(new Date().getFullYear());
  }, []);

  // 生成固定的随机位置数组（只在客户端）
  const starPositions = useMemo(() => {
    if (!mounted) return [];
    return Array.from({ length: 50 }, () => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: 2 + Math.random() * 2,
      delay: Math.random() * 3,
    }));
  }, [mounted]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (signal.trim()) {
      // TODO: 实际发送信号的逻辑
      console.log("Signal received:", signal);
      setSubmitted(true);
    }
  };

  return (
    <SectionContainer id="call" className="bg-black">
      {/* 细微的星点背景 */}
      {mounted && (
        <div className="absolute inset-0 z-0">
          {starPositions.map((pos, i) => (
            <motion.div
              key={i}
              className="absolute w-px h-px bg-white rounded-full"
              style={{
                left: `${pos.left}%`,
                top: `${pos.top}%`,
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.5, 0] }}
              transition={{
                duration: pos.duration,
                delay: pos.delay,
                repeat: Infinity,
              }}
            />
          ))}
        </div>
      )}

      {/* 内容 */}
      <div className="relative z-10 max-w-3xl mx-auto space-y-12 md:space-y-16">
        <SectionTitle
          badge={section.badge}
          title={section.title}
          subtitle={section.subtitle}
        />

        <SectionDescription
          lines={Array.isArray(section.description) ? section.description : [section.description]}
        />

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          viewport={{ once: true }}
          className="text-center pt-16 md:pt-20 space-y-6"
        >
          <div className="border-t border-white/10 pt-8">
            <p className="text-sm md:text-base text-white/30 font-mono tracking-wider mb-4">
              © {currentYear} · Order from Chaos
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-xs md:text-sm text-white/20 font-mono">
              <span>从混沌到秩序</span>
              <span className="hidden md:inline">·</span>
              <span>From Chaos to Order</span>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionContainer>
  );
}

