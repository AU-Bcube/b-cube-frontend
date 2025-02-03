import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local"; // ⬅️ add
import { SpeedInsights } from "@vercel/speed-insights/next"
import { headers } from "next/headers";
import MobileNavigation from "@/mobileComponents/mobileNavigation";
import MobileFooter from "@/mobileComponents/mobileFooter";
import Navigation from "@/components/webNavigation";
import Footer from "@/components/footer";
import Header from "@/components/header";

const pretendard = localFont({ // ⬅️ add
  src: "../styles/font/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});

export const metadata: Metadata = {
  title: "B-cube",
  description: "아주대학교 경영인텔리전스학과 소학회",
  icons: {
    icon: "/logo.svg"
  },
  metadataBase: new URL("https://b-cube-frontend.vercel.app"),
  openGraph: {
    title: "B-cube",
    description: "아주대학교 경영인텔리전스학과 소학회",
    images: "/opengraph-image.png",
    url: "https://b-cube-frontend.vercel.app/",
    siteName: "B-cube",
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  const userAgent = headers().get("user-agent") || "";
  const isMobile = /Mobile|Android|iPhone/i.test(userAgent);
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
            backgroundSize: "cover", // 비율을 유지하며 화면을 덮음
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            opacity: 0.8,
          }}
        />
          <Header />
          {children}
          <SpeedInsights />
          <Footer />
      </body>
    </html>
    
  );
}
