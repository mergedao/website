"use client";

import { motion } from "framer-motion";
import { cn } from "../../lib/utils";
import { forwardRef } from "react";

interface SectionContainerProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  variant?: "dark" | "light" | "gradient";
}

/**
 * 全屏Section容器
 * 每个Section占满一个视口高度
 * 简洁留白风格
 */
export const SectionContainer = forwardRef<HTMLElement, SectionContainerProps>(
  function SectionContainer({ children, className, id, variant = "dark" }, ref) {
    const variantClasses = {
      dark: "bg-black text-white",
      light: "bg-white text-black dark:bg-zinc-950 dark:text-white",
      gradient: "bg-gradient-to-b from-black via-zinc-900 to-black text-white",
    };

    return (
      <section
        ref={ref}
        id={id}
        className={cn(
          "relative h-screen w-full",
          "flex flex-col items-center justify-center",
          "px-6 md:px-12 lg:px-24",
          "overflow-hidden",
          variantClasses[variant],
          className
        )}
      >
        {children}
      </section>
    );
  }
);

/**
 * Section标题组件
 */
interface SectionTitleProps {
  badge?: string;
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionTitle({ badge, title, subtitle, className }: SectionTitleProps) {
  return (
    <div className={cn("text-center space-y-4 md:space-y-6", className)}>
      {badge && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="inline-block"
        >
          <span className="text-xs md:text-sm uppercase tracking-[0.3em] text-white/40 dark:text-white/40 font-mono">
            {badge}
          </span>
        </motion.div>
      )}
      
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        viewport={{ once: true }}
        className="text-3xl md:text-5xl lg:text-7xl font-bold tracking-tight leading-tight"
      >
        {title}
      </motion.h2>
      
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-xl md:text-3xl lg:text-4xl font-light text-white/60 dark:text-white/60"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}

/**
 * Section描述组件
 */
interface SectionDescriptionProps {
  lines: string[];
  highlight?: string;
  className?: string;
}

export function SectionDescription({ lines, highlight, className }: SectionDescriptionProps) {
  return (
    <div className={cn("max-w-2xl mx-auto space-y-6 text-center", className)}>
      {lines.map((line, index) => (
        <motion.p
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
          viewport={{ once: true }}
          className="text-base md:text-lg lg:text-xl text-white/50 dark:text-white/50 leading-relaxed font-light"
        >
          {line}
        </motion.p>
      ))}
      
      {highlight && (
        <motion.p
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-lg md:text-xl lg:text-2xl font-medium text-white dark:text-white pt-4"
        >
          {highlight}
        </motion.p>
      )}
    </div>
  );
}

