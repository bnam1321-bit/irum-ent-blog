import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import FloatingBar from "./components/FloatingBar";
import Footer from "./components/Footer";

// 구조화 데이터 (Schema.org JSON-LD)
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  "name": "이룸이비인후과",
  "url": "https://erooment.co.kr",
  "telephone": "031-571-5075",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "경기도 남양주시 진접읍 해밀예당1로 30 센타플라자 6층",
    "addressLocality": "Namyangju",
    "addressCountry": "KR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 37.738,
    "longitude": 127.178
  },
  "medicalSpecialty": "Otolaryngology"
};

// Noto Sans KR - 한글 최적화 웹폰트
const notoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: '--font-noto',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://erooment.co.kr'),
  title: "이룸이비인후과 | 남양주 진접 이비인후과",
  description: "남양주 진접 이룸이비인후과, 귀·코·목 전문 진료, 비염, 축농증, 중이염, 코골이 치료 안내.",
  keywords: "남양주 이비인후과, 진접 이비인후과, 이룸이비인후과, 비염, 축농증, 중이염, 코골이, 편도염",
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon.png', sizes: '192x192', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${notoSansKR.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main>
          {children}
        </main>
        <Footer />
        <FloatingBar />
      </body>
    </html>
  );
}
