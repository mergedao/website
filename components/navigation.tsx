"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useTheme, useLocale } from "../lib/context";
import { Sun, Moon, Languages } from "lucide-react";
import { AnimatedLogo } from "./ui/logo";

export interface NavigationProps {
  sections?: { id: string; label: string }[];
  activeSection?: string;
  onNavigate?: (id: string) => void;
}

export function Navigation({ sections = [], activeSection, onNavigate }: NavigationProps) {
  const { theme, toggleTheme } = useTheme();
  const { locale, toggleLocale, content } = useLocale();
  const [scrolled, setScrolled] = useState(false);

  // Section 标题映射 - 根据 locale 和 section id 返回显示文本
  const sectionTitles: Record<string, { zh: string; en: string }> = {
    chaos: { zh: '启', en: 'Chaos' },
    insight: { zh: '微元', en: 'Insight' },
    projects: { zh: '项目', en: 'Projects' },
    order: { zh: '秩序', en: 'Order' },
    vision: { zh: '愿景', en: 'Vision' },
    call: { zh: '共建', en: 'Call' },
  };

  const getSectionTitle = (id: string): string => {
    return sectionTitles[id]?.[locale] || sectionTitles[id]?.zh || id;
  };

  // 监听滚动，添加背景效果
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(id);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 px-4 md:px-6 py-2.5 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-black/30 border-b border-white/10 shadow-lg shadow-black/5"
          : "backdrop-blur-md bg-black/10"
      }`}
      style={{
        WebkitBackdropFilter: scrolled ? "blur(24px) saturate(180%)" : "blur(12px) saturate(150%)",
        backdropFilter: scrolled ? "blur(24px) saturate(180%)" : "blur(12px) saturate(150%)",
      }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Logo + Title */}
        <motion.a
          href="#chaos"
          onClick={(e) => handleNavClick(e, "chaos")}
          whileHover={{ scale: 1.02 }}
          className="flex items-center gap-2 text-white/80 hover:text-white transition-colors duration-200 cursor-pointer flex-shrink-0"
        >
          <AnimatedLogo size={24} />
          <span className="text-xs md:text-sm font-mono tracking-wider">
            {content.nav.title}
          </span>
        </motion.a>

        {/* Navigation Links - 在 header 中间显示 */}
        {sections.length > 0 && (
          <nav className="flex items-center gap-1 md:gap-2 lg:gap-3 flex-1 justify-center overflow-x-auto scrollbar-hide">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                onClick={(e) => handleNavClick(e, section.id)}
                className={`px-2 md:px-3 py-1.5 text-xs md:text-sm font-mono transition-all duration-200 cursor-pointer rounded-md whitespace-nowrap ${
                  activeSection === section.id
                    ? "text-white bg-white/15 shadow-sm"
                    : "text-white/60 hover:text-white hover:bg-white/10"
                }`}
              >
                <span className="hidden sm:inline">{getSectionTitle(section.id)}</span>
                <span className="sm:hidden">{section.label}</span>
              </a>
            ))}
          </nav>
        )}

        {/* Right side controls */}
        <div className="flex items-center gap-1 md:gap-2 flex-shrink-0">
          {/* 语言切换链接 */}
          <button
            onClick={toggleLocale}
            className="inline-flex items-center gap-1 px-1.5 py-1 text-white/50 hover:text-white text-xs font-mono transition-colors duration-200 cursor-pointer"
            aria-label="Toggle language"
          >
            <Languages className="w-3 h-3" />
            <span className="hidden md:inline">
              {locale === 'zh' ? '中文' : 'EN'}
            </span>
          </button>

          <span className="text-white/20 text-xs">|</span>

          {/* 主题切换链接 */}
          <button
            onClick={toggleTheme}
            className="inline-flex items-center justify-center p-1 text-white/50 hover:text-white text-xs transition-colors duration-200 cursor-pointer"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <Sun className="w-3 h-3" />
            ) : (
              <Moon className="w-3 h-3" />
            )}
          </button>
        </div>
      </div>
    </motion.nav>
  );
}

interface SectionIndicatorProps {
  sections: { id: string; label: string }[];
  activeSection: string;
  onNavigate: (id: string) => void;
}

export function SectionIndicator({ sections, activeSection, onNavigate }: SectionIndicatorProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.8 }}
      className="fixed right-4 md:right-8 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-3"
    >
      {sections.map((section) => {
        return (
          <button
            key={section.id}
            onClick={() => onNavigate(section.id)}
            className="group flex items-center gap-3 cursor-pointer"
            aria-label={`Navigate to ${section.label}`}
          >
            <motion.div
              className={`w-2 h-2 rounded-full transition-all ${
                activeSection === section.id
                  ? 'bg-white scale-125'
                  : 'bg-white/20 group-hover:bg-white/40'
              }`}
            />
            <span
              className={`text-xs font-mono opacity-0 group-hover:opacity-100 transition-opacity ${
                activeSection === section.id ? 'text-white' : 'text-white/40'
              }`}
            >
              {section.label}
            </span>
          </button>
        );
      })}
    </motion.div>
  );
}
