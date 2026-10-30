import { getAllPosts } from '@/lib/blog';
import Link from 'next/link';
import Image from 'next/image';
import TypographicCover from '@/app/components/TypographicCover';
import { SITE_URL } from '@/lib/constants';

export const metadata = {
  title: '이룸이비인후과의원 | 남양주 진접 귀·코·목 및 소아청소년과 협진',
  description: '남양주시 진접읍 이룸이비인후과의원. 이비인후과·소아청소년과 전문의 협진, 수면다원검사(Sonata Wireless 65채널)·양압기(Prisma Smart Max), 어지럼증(SBT-390·VNG), 자율신경(AFT-800), 비염·축농증 내시경 수술(OSSEOUNO Shaver) 클리닉.',
};

export default function Home() {
  const posts = getAllPosts();

  const homeJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${SITE_URL}/#webpage`,
    url: SITE_URL,
    name: '이룸이비인후과의원 공식 홈페이지 및 건강정보 칼럼',
    description: '남양주 진접 이룸이비인후과의원 진료 안내 및 전문의가 직접 작성한 귀·코·목 의학 칼럼 모음',
    isPartOf: { '@id': `${SITE_URL}/#clinic` },
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: posts.slice(0, 20).map((post, idx) => ({
        '@type': 'ListItem',
        position: idx + 1,
        url: `${SITE_URL}/blog/${encodeURIComponent(post.slug)}`,
        name: post.title,
        description: post.description,
      })),
    },
  };

  return (
    <div className="min-h-screen" style={{ background: '#FAFAF8' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd) }}
      />

      {/* Hero Section with Clinic Interior */}
      <div className="relative overflow-hidden" style={{ minHeight: '620px' }}>
        {/* Background: Clinic Interior Photo */}
        <div className="absolute inset-0">
          <Image
            src="/clinic-interior.jpg"
            alt="이룸이비인후과 원내 전경"
            fill
            priority
            className="object-cover"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0" style={{
            background: 'linear-gradient(135deg, rgba(74,55,40,0.88) 0%, rgba(74,55,40,0.65) 30%, rgba(43,170,173,0.5) 70%, rgba(30,138,141,0.75) 100%)'
          }}></div>
        </div>

        {/* Floating decorative elements */}
        <div className="absolute top-20 right-10 w-32 h-32 rounded-3xl opacity-10 rotate-45 animate-blob" style={{ background: '#D4882B' }}></div>
        <div className="absolute bottom-40 left-10 w-24 h-24 rounded-3xl opacity-10 -rotate-12 animate-blob animation-delay-2000" style={{ background: '#8BA53E' }}></div>

        {/* Content */}
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-28 sm:py-36">
          <div className="text-center">
            {/* 협진 배지 */}
            <div className="inline-flex items-center px-5 py-2.5 bg-white/15 backdrop-blur-md rounded-full mb-8 border border-white/25 shadow-lg">
              <span className="text-sm font-bold text-white tracking-wide">
                👨‍⚕️ 이비인후과 전문의 &nbsp;×&nbsp; 소아청소년과 전문의 협진
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 text-white break-keep leading-tight drop-shadow-lg">
              남양주 진접<br />
              이룸이비인후과
            </h1>
            <p className="text-lg sm:text-xl text-white/85 max-w-3xl mx-auto leading-relaxed break-keep font-medium drop-shadow">
              이비인후과 전문의와 소아청소년과 전문의가 함께하는<br className="hidden sm:block" />
              <strong className="text-white">원스톱 협진 시스템</strong>으로 온 가족의 건강을 돌봅니다.
            </p>

            {/* 협진 아이콘 카드 */}
            <div className="mt-10 flex justify-center gap-4 sm:gap-6">
              <div className="flex flex-col items-center gap-2 px-5 py-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
                <span className="text-3xl">👂</span>
                <span className="text-xs font-bold text-white/90">이비인후과<br/>전문의</span>
              </div>
              <div className="flex items-center text-white/50 text-2xl font-light">×</div>
              <div className="flex flex-col items-center gap-2 px-5 py-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
                <span className="text-3xl">👶</span>
                <span className="text-xs font-bold text-white/90">소아청소년과<br/>전문의</span>
              </div>
            </div>

            {/* 로고 3색 포인트 라인 */}
            <div className="mt-8 flex justify-center gap-2">
              <div className="w-12 h-1.5 rounded-full" style={{ background: '#D4882B' }}></div>
              <div className="w-12 h-1.5 rounded-full" style={{ background: '#2BAAAD' }}></div>
              <div className="w-12 h-1.5 rounded-full" style={{ background: '#8BA53E' }}></div>
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#FAFAF8] to-transparent"></div>
      </div>

      {/* AI / 검색엔진 시맨틱 요약 섹션 (시각적 디자인 유지) */}
      <section aria-label="이룸이비인후과의원 핵심 진료 및 보유 장비 요약" className="sr-only">
        <h2>이룸이비인후과의원 주요 클리닉 및 정밀 진단 장비 안내</h2>
        <p>경기도 남양주시 진접읍 해밀예당1로 30 센타플라자 6층에 위치한 이룸이비인후과의원(대표전화 031-571-5075)은 이비인후과 전문의와 소아청소년과 전문의가 협진하는 의료기관입니다.</p>
        <ul>
          <li>수면 클리닉: 소노스크린 플러스(Sonata Wireless) 65채널 무선 수면다원검사(PSG, 건강보험 적용) 및 독일 로벤스타인 프리즈마 스마트 맥스(Prisma Smart Max) 양압기 처방</li>
          <li>어지럼증·이명·난청 클리닉: 발란싱 캣(SBT-390) 동적체평형검사 및 바이오피드백 전정재활훈련기, 비디오 안진검사기(VNG), 청력검사 및 보청기 처방</li>
          <li>자율신경 클리닉: AFT-800 자율신경 기능 정밀 검사기를 통한 기립성 저혈압, 미주신경성 실신, 만성피로, 자율신경 실조증 진단</li>
          <li>비염·축농증 수술 클리닉: OSSEOUNO Shaver System(미세절삭기) 및 국소마취 시스템을 이용한 내시경 부비동염(축농증) 수술, 비용종(물혹) 제거, 하비갑개 절제술, 비중격 성형술</li>
        </ul>
      </section>

      {/* Blog Posts Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-16">
        {/* Section Title */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold mb-4" style={{ background: '#E8F6F6', color: '#2BAAAD' }}>
            📋 건강정보
          </div>
          <h2 className="text-3xl font-black" style={{ color: '#4A3728' }}>전문의가 전하는 귀·코·목 이야기</h2>
        </div>

        {posts.length === 0 ? (
          <div className="text-center py-32">
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-3xl mb-8 shadow-sm border" style={{ background: '#E8F6F6', borderColor: '#2BAAAD33' }}>
              <span className="text-5xl">📝</span>
            </div>
            <h3 className="text-xl font-bold mb-3" style={{ color: '#4A3728' }}>준비중입니다</h3>
            <p className="text-gray-500 text-lg">곧 유익한 건강정보를 만나보실 수 있습니다.</p>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, index) => (
              <Link key={post.slug} href={`/blog/${encodeURIComponent(post.slug)}`} className="group">
                <article
                  className="h-full bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/50 hover:scale-[1.02] hover:-translate-y-1"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative h-56 w-full">
                    <TypographicCover title={post.title} tags={post.tags} slug={post.slug} />
                    <div className="absolute bottom-4 right-4 z-10">
                      <time dateTime={post.date} className="px-3 py-1.5 bg-black/40 backdrop-blur-md text-white rounded-full text-xs font-semibold">
                        {post.date}
                      </time>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-black mb-3 line-clamp-2 transition-colors leading-tight tracking-tight" style={{ color: '#4A3728' }}>
                      {post.title}
                    </h3>
                    <p className="text-sm mb-5 line-clamp-3 leading-relaxed" style={{ color: '#7A6E62' }}>
                      {post.description}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t" style={{ borderColor: '#E8E2DA' }}>
                      <span className="text-sm font-bold group-hover:translate-x-2 transition-transform inline-flex items-center gap-2" style={{ color: '#2BAAAD' }}>
                        자세히 보기
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
