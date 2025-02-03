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
