"use client";

import { cn } from "@/lib/utils";

interface LogoProps {
  size?: number;
  className?: string;
  showText?: boolean;
}

/**
 * 微元熵减 Logo
 * 六边形分子结构 - 代表从混沌到秩序的转变
 * Hexagonal molecular structure - representing the transformation from chaos to order
 */
export function Logo({ size = 32, className, showText = false }: LogoProps) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
      >
        <defs>
          <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: "#60a5fa" }} />
            <stop offset="100%" style={{ stopColor: "#a78bfa" }} />
          </linearGradient>
        </defs>

        {/* Hexagonal structure - representing order */}
        <polygon
          points="16,4 26,10 26,22 16,28 6,22 6,10"
          fill="none"
          stroke="url(#logoGrad)"
          strokeWidth="1.5"
        />

        {/* Inner connections */}
        <line
          x1="16"
          y1="4"
          x2="16"
          y2="28"
          stroke="url(#logoGrad)"
          strokeWidth="1"
          opacity="0.5"
        />
        <line
          x1="6"
          y1="10"
          x2="26"
          y2="22"
          stroke="url(#logoGrad)"
          strokeWidth="1"
          opacity="0.5"
        />
        <line
          x1="26"
          y1="10"
          x2="6"
          y2="22"
          stroke="url(#logoGrad)"
          strokeWidth="1"
          opacity="0.5"
        />

        {/* Core node - the center of order */}
        <circle cx="16" cy="16" r="3.5" fill="url(#logoGrad)" />

        {/* Vertex nodes */}
        <circle cx="16" cy="4" r="2" fill="url(#logoGrad)" />
        <circle cx="26" cy="10" r="2" fill="url(#logoGrad)" />
        <circle cx="26" cy="22" r="2" fill="url(#logoGrad)" />
        <circle cx="16" cy="28" r="2" fill="url(#logoGrad)" />
        <circle cx="6" cy="22" r="2" fill="url(#logoGrad)" />
        <circle cx="6" cy="10" r="2" fill="url(#logoGrad)" />
      </svg>

      {showText && (
        <span className="font-medium bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
          μ-entropy
        </span>
      )}
    </div>
  );
}

/**
 * Animated Logo with hover effects
 */
export function AnimatedLogo({ size = 32, className, showText = false }: LogoProps) {
  return (
    <div className={cn("flex items-center gap-2 group cursor-pointer", className)}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0 transition-transform duration-300 group-hover:rotate-[30deg]"
      >
        <defs>
          <linearGradient id="animLogoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: "#60a5fa" }} />
            <stop offset="100%" style={{ stopColor: "#a78bfa" }} />
          </linearGradient>
          <filter id="logoGlow">
            <feGaussianBlur stdDeviation="1" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Hexagonal structure with glow on hover */}
        <g className="transition-all duration-300 group-hover:[filter:url(#logoGlow)]">
          <polygon
            points="16,4 26,10 26,22 16,28 6,22 6,10"
            fill="none"
            stroke="url(#animLogoGrad)"
            strokeWidth="1.5"
          />

          {/* Inner connections */}
          <line
            x1="16"
            y1="4"
            x2="16"
            y2="28"
            stroke="url(#animLogoGrad)"
            strokeWidth="1"
            opacity="0.5"
          />
          <line
            x1="6"
            y1="10"
            x2="26"
            y2="22"
            stroke="url(#animLogoGrad)"
            strokeWidth="1"
            opacity="0.5"
          />
          <line
            x1="26"
            y1="10"
            x2="6"
            y2="22"
            stroke="url(#animLogoGrad)"
            strokeWidth="1"
            opacity="0.5"
          />

          {/* Core node */}
          <circle cx="16" cy="16" r="3.5" fill="url(#animLogoGrad)" />

          {/* Vertex nodes */}
          <circle cx="16" cy="4" r="2" fill="url(#animLogoGrad)" />
          <circle cx="26" cy="10" r="2" fill="url(#animLogoGrad)" />
          <circle cx="26" cy="22" r="2" fill="url(#animLogoGrad)" />
          <circle cx="16" cy="28" r="2" fill="url(#animLogoGrad)" />
          <circle cx="6" cy="22" r="2" fill="url(#animLogoGrad)" />
          <circle cx="6" cy="10" r="2" fill="url(#animLogoGrad)" />
        </g>
      </svg>

      {showText && (
        <span className="font-medium bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent transition-opacity group-hover:opacity-80">
          μ-entropy
        </span>
      )}
    </div>
  );
}

