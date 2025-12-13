"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import { Navigation, SectionIndicator } from "@/components/navigation";
import {
  SectionChaos,
  SectionInsight,
  SectionProjects,
  SectionOrder,
  SectionVision,
  SectionCall,
} from "@/components/sections";
import { useLocale } from "@/lib/context";
import { SEOContent } from "@/components/seo-content";

/**
 * 主页面
 * 微元熵减宣言 - 从混沌到秩序
 */
export default function Home() {
  const { locale } = useLocale();
  const [activeSection, setActiveSection] = useState("chaos");

  // Section配置 - 使用 useMemo 避免每次渲染都重新创建
  const sections = useMemo(() => [
    { 
      id: "chaos", 
      label: locale === 'zh' ? '启' : 'I',
    },
    { 
      id: "insight", 
      label: locale === 'zh' ? '承' : 'II',
    },
    { 
      id: "projects", 
      label: locale === 'zh' ? '项目' : 'Projects',
    },
    { 
      id: "order", 
      label: locale === 'zh' ? '转' : 'III',
    },
    { 
      id: "vision", 
      label: locale === 'zh' ? '合' : 'IV',
    },
    { 
      id: "call", 
      label: locale === 'zh' ? '结' : 'V',
    },
  ], [locale]);

  // 监听滚动，更新当前Section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3; // 使用 1/3 位置作为触发点

      // 找到当前最接近的 section
      let currentSection = sections[0]?.id || "chaos";
      let minDistance = Infinity;

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          const sectionCenter = offsetTop + offsetHeight / 2;
          const distance = Math.abs(scrollPosition - sectionCenter);

          // 如果滚动位置在 section 范围内
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            if (distance < minDistance) {
              minDistance = distance;
              currentSection = section.id;
            }
          }
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // 初始化

    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  // 导航到指定Section
  const navigateToSection = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <main className="relative">
      {/* SEO 内容 - 对搜索引擎可见，对用户隐藏 */}
      <SEOContent />

      {/* 顶部导航 */}
      <Navigation 
        sections={sections}
        activeSection={activeSection}
        onNavigate={navigateToSection}
      />

      {/* 侧边导航指示器 */}
      <SectionIndicator
        sections={sections}
        activeSection={activeSection}
        onNavigate={navigateToSection}
      />

      {/* 六个全屏Section */}
      <SectionChaos />
      <SectionInsight />
      <SectionProjects />
      <SectionOrder />
      <SectionVision />
      <SectionCall />
    </main>
  );
}
