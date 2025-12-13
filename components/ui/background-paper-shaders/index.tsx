"use client"

import { useSyncExternalStore } from "react"
import { MeshGradient, DotOrbit } from "@paper-design/shaders-react"

export type EffectType = "mesh" | "dots" | "combined"

export interface BackgroundPaperShadersProps {
  effect?: EffectType
  speed?: number
  className?: string
  colors?: string[]
  colorBack?: string
  size?: number
  sizeRange?: number
  spreading?: number
  distortion?: number
  swirl?: number
  grainMixer?: number
  grainOverlay?: number
}

// 使用 useSyncExternalStore 检测客户端挂载状态
const emptySubscribe = () => () => {}
const getClientSnapshot = () => true
const getServerSnapshot = () => false

function useIsMounted() {
  return useSyncExternalStore(emptySubscribe, getClientSnapshot, getServerSnapshot)
}

/**
 * 背景 Shader 效果组件
 * 使用 @paper-design/shaders-react 库实现黑白流动效果
 */
export function BackgroundPaperShaders({
  effect = "mesh",
  speed = 1.0,
  className = "",
  colors = ["#000000", "#1a1a1a", "#333333", "#ffffff"],
  colorBack = "#000000",
  size = 0.5,
  sizeRange = 0.3,
  spreading = 0.5,
  distortion,
  swirl,
  grainMixer,
  grainOverlay,
}: BackgroundPaperShadersProps) {
  const isMounted = useIsMounted()

  if (!isMounted) {
    return <div className={`w-full h-full bg-black ${className}`} />
  }

  return (
    <div className={`w-full h-full relative overflow-hidden ${className}`}>
      {effect === "mesh" && (
        <MeshGradient
          className="w-full h-full absolute inset-0"
          colors={colors}
          speed={speed}
          distortion={distortion}
          swirl={swirl}
          grainMixer={grainMixer}
          grainOverlay={grainOverlay}
        />
      )}

      {effect === "dots" && (
        <div className="w-full h-full absolute inset-0">
          <DotOrbit
            className="w-full h-full"
            colorBack={colorBack}
            colors={["#333333", "#1a1a1a", "#666666"]}
            speed={speed}
            size={size}
            sizeRange={sizeRange}
            spreading={spreading}
          />
        </div>
      )}

      {effect === "combined" && (
        <>
          <MeshGradient
            className="w-full h-full absolute inset-0"
            colors={colors}
            speed={speed * 0.5}
            distortion={distortion}
            swirl={swirl}
            grainMixer={grainMixer}
            grainOverlay={grainOverlay}
          />
          <div className="w-full h-full absolute inset-0 opacity-60">
            <DotOrbit
              className="w-full h-full"
              colorBack="transparent"
              colors={["#333333", "#1a1a1a"]}
              speed={speed * 1.5}
              size={size}
              sizeRange={sizeRange}
              spreading={spreading}
            />
          </div>
        </>
      )}

      {/* Lighting overlay effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/4 left-1/3 w-32 h-32 bg-gray-800/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: `${3 / speed}s` }}
        />
        <div
          className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-white/[0.02] rounded-full blur-2xl animate-pulse"
          style={{ animationDuration: `${2 / speed}s`, animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 right-1/3 w-20 h-20 bg-gray-900/[0.03] rounded-full blur-xl animate-pulse"
          style={{ animationDuration: `${4 / speed}s`, animationDelay: "0.5s" }}
        />
      </div>
    </div>
  )
}

// 默认导出
export default BackgroundPaperShaders
