import type { Metadata } from 'next';
import './globals.css';
import localFont from 'next/font/local'; // ⬅️ add
import Footer from '@/components/footer';
import Header from '@/components/header';
import Script from 'next/script';
import { GoogleTagManager } from '@next/third-parties/google';
import { GoogleAnalytics } from '@next/third-parties/google';

const pretendard = localFont({
  // ⬅️ add
  src: '../styles/font/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard',
});

export const metadata: Metadata = {
  title: '비큐브 B-cube',
  description: '아주대학교 경영인텔리전스학과 소학회',
  icons: {
    icon: '/logo.svg',
  },
  keywords: [
    'B-cube',
    'bcube',
    '비큐브',
    '동아리',
    'IT동아리',
    '아주대학교',
    '경영인텔리전스학과',
    '소학회',
    '이비즈',
    'e-비즈니스학과',
    'e-business',
    'IT기획',
    '웹개발',
    '앱개발',
    '백엔드',
    '프론트엔드',
    '피그마',
  ],
  metadataBase: new URL('https://b-cube.kr'),
  openGraph: {
    title: '비큐브 B-cube',
    description: '아주대학교 경영인텔리전스학과 소학회',
    images: '/opengraph-image.png',
    url: 'https://b-cube.kr',
    siteName: '비큐브 B-cube',
    locale: 'ko_KR',
    type: 'website',
  },
  other: {
    'naver-site-verification': 'faeee0c5c10843f8a1f21c3ef305b36b5c7ac22b',
  },
  alternates: {
    canonical: 'https://b-cube.kr',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className={pretendard.variable}>
      <head>
        {/* GenLLMS meta-loader: data-id/data-lang은 발급 값으로 교체 */}
        <script
          defer
          src="http://localhost:3000/meta-loader.v1.js"
          data-id="56096b4b07d7"
          data-token="56096b4b07d7"
          data-watch-url="true"
          data-mode="override"></script>
      </head>
      <GoogleAnalytics gaId="G-16CC2DB93Q" />
      <body className="font-pretendard">
        {/* GenLLMS embed: username/key/lang은 발급 값으로 교체 */}
        <Script
          id="genllms-embed"
          src="https://genaiollms.com/embed.v1.js"
          data-username="suhwan-kim"
          data-key="557b915c479d4032849471358e7db21c"
          data-lang="ko"
          data-track-endpoint="https://genaiollms.com/api/integration/script/track"
          data-domain="b-cube.kr"
        />
        <noscript>
          <iframe
            src="https://genaiollms.com/prerender"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"></iframe>
        </noscript>
        <div
          style={{
            position: 'fixed',
            width: '100vw',
            height: '100vh',
            zIndex: -1,
            pointerEvents: 'none',
            background: 'linear-gradient(180deg, #06132D 65%, #14439F 145%)',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          }}
        />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
