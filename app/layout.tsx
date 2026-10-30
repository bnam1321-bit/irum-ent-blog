import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import FloatingBar from "./components/FloatingBar";
import Footer from "./components/Footer";

// 구조화 데이터 (Schema.org JSON-LD — GEO 및 AI 검색엔진 최적화)
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  "@id": "https://erooment.co.kr/#clinic",
  "name": "이룸이비인후과의원",
  "alternateName": "이룸이비인후과",
  "description": "경기도 남양주시 진접읍에 위치한 이비인후과 전문의·소아청소년과 전문의 협진 의료기관. 수면다원검사(Sonata Wireless 65채널)·양압기(Prisma Smart Max) 수면 클리닉, 어지럼증·이명·난청 클리닉(SBT-390, VNG), 자율신경 기능검사 클리닉(AFT-800), 비염·축농증 내시경 수술 클리닉(OSSEOUNO Shaver) 운영.",
  "url": "https://erooment.co.kr",
  "telephone": "031-571-5075",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "경기도 남양주시 진접읍 해밀예당1로 30 센타플라자 6층",
    "addressLocality": "남양주시",
    "addressRegion": "경기도",
    "addressCountry": "KR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 37.738,
    "longitude": 127.178
  },
  "areaServed": [
    { "@type": "City", "name": "남양주시" },
    { "@type": "Place", "name": "남양주시 진접읍" },
    { "@type": "Place", "name": "남양주시 오남읍" },
    { "@type": "Place", "name": "남양주시 별내동" },
    { "@type": "Place", "name": "남양주시 퇴계원읍" },
    { "@type": "Place", "name": "남양주시 다산동" }
  ],
  "medicalSpecialty": [
    "Otolaryngology",
    "Pediatrics",
    "SleepMedicine"
  ],
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Thursday"],
      "opens": "09:00",
      "closes": "19:40"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Tuesday", "Wednesday", "Friday"],
      "opens": "09:00",
      "closes": "18:40"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Saturday"],
      "opens": "09:00",
      "closes": "14:00"
    }
  ],
  "availableService": [
    {
      "@type": "MedicalTest",
      "name": "수면다원검사 (Sonata Wireless 65채널) 및 양압기(Prisma Smart Max) 처방",
      "description": "코골이·수면무호흡증 진단을 위한 65채널 무선 수면다원검사(건강보험 적용) 및 독일 로벤스타인 프리미엄 양압기 처방"
    },
    {
      "@type": "MedicalTest",
      "name": "어지럼증·이명·전정기능 정밀검사 (SBT-390 동적체평형검사 및 VNG 비디오안진검사)",
      "description": "이석증, 메니에르병, 전정신경염, 돌발성 난청 감별 진단 및 바이오피드백 맞춤 전정재활훈련"
    },
    {
      "@type": "MedicalTest",
      "name": "자율신경 기능 정밀검사 (AFT-800)",
      "description": "자세 변화에 따른 심박변이도(HRV) 및 혈압 반응 분석을 통한 기립성 저혈압, 미주신경성 실신, 만성피로, 자율신경 실조증 진단"
    },
    {
      "@type": "MedicalProcedure",
      "name": "내시경 비염·축농증·비중격 수술 (OSSEOUNO Shaver System)",
      "description": "국소마취 시스템 및 미세절삭기(OSSEOUNO Shaver)를 활용한 비염, 축농증(부비동염), 비용종(물혹), 비중격만곡증 수술"
    }
  ]
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
  title: "이룸이비인후과의원 | 남양주 진접 이비인후과·소아청소년과 협진",
  description: "남양주시 진접읍 이룸이비인후과의원. 이비인후과·소아청소년과 전문의 협진, 수면다원검사(Sonata 65채널)·양압기, 어지럼증(SBT-390·VNG), 자율신경(AFT-800), 비염·축농증 수술 클리닉.",
  keywords: "남양주 이비인후과, 진접 이비인후과, 이룸이비인후과, 이룸이비인후과의원, 남양주 수면다원검사, 진접 어지럼증, AFT-800 자율신경검사, 비염수술, 축농증, 중이염, 코골이",
  alternates: {
    canonical: 'https://erooment.co.kr',
    types: {
      'text/plain': [
        { url: '/llms.txt', title: 'LLM Summary Context (llms.txt)' },
        { url: '/llms-full.txt', title: 'LLM Full Knowledge Base (llms-full.txt)' },
      ],
    },
  },
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
