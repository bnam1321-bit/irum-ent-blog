import { getAllPosts } from '@/lib/blog';
import Link from 'next/link';
import Image from 'next/image';
import TypographicCover from '@/app/components/TypographicCover';

export const metadata = {
  title: '건강정보 | 이룸이비인후과',
  description: '이룸이비인후과에서 전하는 귀·코·목 건강 정보입니다. 이비인후과 전문의와 소아청소년과 전문의 협진.',
};

export default function Home() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen" style={{ background: '#FAFAF8' }}>
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

      {/* 협진 소개 섹션 */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 -mt-8">
        <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-12 border border-slate-100">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-black mb-4" style={{ color: '#4A3728' }}>
              전문의 협진, 더 정확한 진료
            </h2>
            <p className="text-base leading-relaxed max-w-2xl mx-auto" style={{ color: '#7A6E62' }}>
              이룸이비인후과는 이비인후과 전문의와 소아청소년과 전문의가
              함께 협진하여 귀·코·목 질환은 물론 온 가족의 건강까지 폭넓게 진료합니다.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="text-center p-6 rounded-2xl" style={{ background: '#FDF8F3' }}>
              <div className="w-14 h-14 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl" style={{ background: '#F5E6D3' }}>👂</div>
              <h3 className="font-bold mb-2" style={{ color: '#4A3728' }}>이비인후과 전문의</h3>
              <p className="text-sm" style={{ color: '#7A6E62' }}>비염, 축농증, 중이염, 코골이, 어지럼증 등 귀·코·목 전문 진료</p>
            </div>
            <div className="text-center p-6 rounded-2xl" style={{ background: '#F3FAF8' }}>
              <div className="w-14 h-14 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl" style={{ background: '#D5F0EC' }}>👶</div>
              <h3 className="font-bold mb-2" style={{ color: '#4A3728' }}>소아청소년과 전문의</h3>
              <p className="text-sm" style={{ color: '#7A6E62' }}>소아 중이염, 비염, 편도 비대 등 어린이 귀·코·목 질환 협진</p>
            </div>
          </div>
        </div>
      </div>

      {/* 수면/양압기 특화 장비 섹션 */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-12 border border-slate-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-teal-50 rounded-full mix-blend-multiply filter blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="text-center mb-10 relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold mb-4" style={{ background: '#E8F6F6', color: '#2BAAAD' }}>
              🔬 수면무호흡·코골이 클리닉
            </div>
            <h2 className="text-2xl sm:text-3xl font-black mb-4" style={{ color: '#4A3728' }}>
              수면다원검사 및 프리미엄 양압기 처방
            </h2>
            <p className="text-base leading-relaxed max-w-2xl mx-auto" style={{ color: '#7A6E62' }}>
              정확한 수면 상태 평가를 위한 65채널 최고급 수면다원검사 장비와<br className="hidden sm:block" /> 독일 로벤스타인 프리미엄 양압기를 통해 최적의 수면 솔루션을 제공합니다.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 relative z-10">
            {/* PRISMA SMART MAX */}
            <div className="bg-[#FAFAF8] p-6 sm:p-8 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">🫁</span>
                <div>
                  <h3 className="font-bold text-lg" style={{ color: '#4A3728' }}>프리즈마 스마트 맥스</h3>
                  <p className="text-xs font-semibold" style={{ color: '#2BAAAD' }}>독일 로벤스타인 양압지속유지기 (PRISMA SMART MAX)</p>
                </div>
              </div>
              <ul className="space-y-3 mt-6">
                <li className="flex items-start gap-3 text-sm text-slate-600">
                  <span className="font-bold mt-0.5" style={{ color: '#D4882B' }}>✓</span>
                  <span><strong style={{ color: '#4A3728' }}>저소음 설계:</strong> 수면에 방해받지 않는 편안한 사용 환경</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-600">
                  <span className="font-bold mt-0.5" style={{ color: '#D4882B' }}>✓</span>
                  <span><strong style={{ color: '#4A3728' }}>스마트 클라우드 연동:</strong> PRISMA CLOUD 원격 데이터 확인 및 설정 변경</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-600">
                  <span className="font-bold mt-0.5" style={{ color: '#D4882B' }}>✓</span>
                  <span><strong style={{ color: '#4A3728' }}>안심 리퍼 서비스:</strong> 국내 유일 양압기 내부 세척/교체 서비스 제공</span>
                </li>
              </ul>
            </div>

            {/* Sonata Wireless */}
            <div className="bg-[#FAFAF8] p-6 sm:p-8 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">📊</span>
                <div>
                  <h3 className="font-bold text-lg" style={{ color: '#4A3728' }}>소나타 수면평가장치</h3>
                  <p className="text-xs font-semibold" style={{ color: '#2BAAAD' }}>Sonata (Wireless) 65 channels PSG</p>
                </div>
              </div>
              <ul className="space-y-3 mt-6">
                <li className="flex items-start gap-3 text-sm text-slate-600">
                  <span className="font-bold mt-0.5" style={{ color: '#D4882B' }}>✓</span>
                  <span><strong style={{ color: '#4A3728' }}>65채널 초정밀 검사:</strong> 뇌파, 심전도, 근전도 등 수면 중 신체 변화를 완벽하게 분석</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-600">
                  <span className="font-bold mt-0.5" style={{ color: '#D4882B' }}>✓</span>
                  <span><strong style={{ color: '#4A3728' }}>무선(Wi-Fi) 연결 시스템:</strong> 복잡한 케이블 없이 환자의 편안한 수면 보장</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-600">
                  <span className="font-bold mt-0.5" style={{ color: '#D4882B' }}>✓</span>
                  <span><strong style={{ color: '#4A3728' }}>고해상도 샘플링:</strong> 누락 없는 정확한 데이터 오프라인/온라인 기록</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

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
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                <article
                  className="h-full bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/50 hover:scale-[1.02] hover:-translate-y-1"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative h-56 w-full">
                    <TypographicCover title={post.title} tags={post.tags} slug={post.slug} />
                    <div className="absolute bottom-4 right-4 z-10">
                      <div className="px-3 py-1.5 bg-black/40 backdrop-blur-md text-white rounded-full text-xs font-semibold">
                        {post.date}
                      </div>
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
