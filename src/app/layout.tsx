import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local"; // ⬅️ add
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"
import Footer from "@/components/footer";
import Header from "@/components/header";

const pretendard = localFont({ // ⬅️ add
  src: "../styles/font/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});

export const metadata: Metadata = {
  title: "비큐브 B-cube",
  description: "아주대학교 경영인텔리전스학과 소학회",
  icons: {
    icon: "/logo.svg"
  },
  keywords: ["B-cube", "비큐브", "아주대학교", "경영인텔리전스학과", "소학회", "이비즈", "e-비즈니스학과", "e-business", "IT기획", "웹개발", "앱개발", "백엔드", "프론트엔드", "피그마"],
  metadataBase: new URL("https://b-cube.kr"),
  openGraph: {
    title: "비큐브 B-cube",
    description: "아주대학교 경영인텔리전스학과 소학회",
    images: "/opengraph-image.png",
    url: "https://b-cube.kr",
    siteName: "비큐브 B-cube",
    locale: "ko_KR",
    type: "website",
  },
  other: {
    "naver-site-verification": "faeee0c5c10843f8a1f21c3ef305b36b5c7ac22b"
  }
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${pretendard.variable}`}>
      <body className="font-pretendard">
        <div
          style={{
            position: "fixed",
            width: "100vw",
            height: "100vh",
            zIndex: -1,
            pointerEvents: "none",
            backgroundImage: 'url("/addLayout.svg")',
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        />
          <Header />
          {children}
          <SpeedInsights />
          <Analytics />
          <Footer />
      </body>
    </html>
    
  );
}
