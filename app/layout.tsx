import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { AppProviders } from "@/lib/context";
import { StructuredData } from "./structured-data";

// 主字体：Space Grotesk - 现代、技术感
const spaceGrotesk = Space_Grotesk({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

// 等宽字体：JetBrains Mono - 代码感、精确
const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

// 基础 URL - 需要根据实际部署域名修改
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://your-domain.com";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "微元熵减 | Order from Chaos - AI驱动的智能基底",
    template: "%s | 微元熵减",
  },
  description: "从混沌到秩序 - AI驱动的智能基底，将高边际成本的无序转化为零边际成本的结构。通过微元解构和智能重构，逆转数字世界的熵增。",
  keywords: [
    "微元熵减",
    "熵减",
    "AI自动化",
    "智能基底",
    "Order from Chaos",
    "微元",
    "负熵",
    "AI驱动",
    "智能重构",
    "数字世界重构",
    "自动化未来",
    "意图即现实",
    "μ-entropy",
    "negentropy",
    "AI intelligence",
    "automation",
    "digital transformation",
  ],
  authors: [{ name: "μ-entropy", url: baseUrl }],
  creator: "μ-entropy",
  publisher: "μ-entropy",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    locale: "zh_CN",
    alternateLocale: ["en_US"],
    url: baseUrl,
    siteName: "微元熵减 | Order from Chaos",
    title: "微元熵减 | Order from Chaos - AI驱动的智能基底",
    description: "从混沌到秩序 - AI驱动的智能基底，将高边际成本的无序转化为零边际成本的结构。通过微元解构和智能重构，逆转数字世界的熵增。",
    images: [
      {
        url: `${baseUrl}/og-image.jpg`, // 需要创建 OG 图片
        width: 1200,
        height: 630,
        alt: "微元熵减 - Order from Chaos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "微元熵减 | Order from Chaos",
    description: "从混沌到秩序 - AI驱动的智能基底，逆转数字世界的熵增",
    images: [`${baseUrl}/og-image.jpg`],
    creator: "@mu-entropy", // 如果有 Twitter 账号
  },
  alternates: {
    canonical: baseUrl,
    languages: {
      "zh-CN": baseUrl,
      "en-US": `${baseUrl}/en`,
      "x-default": baseUrl,
    },
  },
  category: "Technology",
  classification: "AI, Automation, Digital Transformation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh" className="dark">
      <body
        className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} font-sans antialiased bg-black text-white`}
      >
        <StructuredData />
        <AppProviders>
          {children}
        </AppProviders>
      </body>
    </html>
  );
}
