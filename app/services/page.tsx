import Image from 'next/image';

export const metadata = {
  title: '진료정보 | 이룸이비인후과',
  description: '이룸이비인후과의 전문 협진 시스템과 최첨단 수면평가 및 양압기 장비 정보를 안내합니다.',
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen" style={{ background: '#FAFAF8' }}>
      {/* Page Header */}
      <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 text-center bg-white border-b border-slate-100">
        <h1 className="text-4xl font-black mb-4" style={{ color: '#4A3728' }}>진료안내</h1>
        <p className="text-lg text-slate-500 max-w-2xl mx-auto">
          이룸이비인후과만의 특별한 진료 시스템과 최첨단 장비를 소개합니다.
        </p>
      </div>

      <div className="py-12">
        {/* 협진 소개 섹션 */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
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
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
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

        {/* 어지럼증/이명 특화 장비 섹션 */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-12 border border-slate-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-50 rounded-full mix-blend-multiply filter blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>
            
            <div className="text-center mb-10 relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold mb-4" style={{ background: '#FFF7ED', color: '#EA580C' }}>
                🌀 어지럼증·이명 클리닉
              </div>
              <h2 className="text-2xl sm:text-3xl font-black mb-4" style={{ color: '#4A3728' }}>
                대학병원급 정밀 어지럼증 검사 장비
              </h2>
              <p className="text-base leading-relaxed max-w-2xl mx-auto" style={{ color: '#7A6E62' }}>
                이석증, 메니에르병, 전정신경염 등 복잡한 어지럼증의 원인을<br className="hidden sm:block" /> 대학병원급 최첨단 장비를 통해 오차 없이 정밀하게 진단하고 치료합니다.
              </p>
            </div>

            {/* 검사 장비 이미지 갤러리 */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 relative z-10">
              <div className="aspect-video relative rounded-2xl overflow-hidden border border-slate-100 shadow-sm bg-white">
                <Image src="/images/sbt-390-1.png" alt="발란싱 캣 동적체평형검사기" fill className="object-contain" />
              </div>
              <div className="aspect-video relative rounded-2xl overflow-hidden border border-slate-100 shadow-sm bg-white">
                <Image src="/images/sbt-390-2.png" alt="동적체평형검사 및 평가 차트" fill className="object-contain" />
              </div>
              <div className="aspect-video relative rounded-2xl overflow-hidden border border-slate-100 shadow-sm bg-white">
                <Image src="/images/sbt-390-3.png" alt="자동평형검사 훈련 컨텐츠" fill className="object-contain" />
              </div>
              <div className="aspect-video relative rounded-2xl overflow-hidden border border-slate-100 shadow-sm bg-white">
                <Image src="/images/vng.png" alt="전정기능 분석 VNG 검사" fill className="object-contain" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 relative z-10">
              {/* SBT-390 */}
              <div className="bg-[#FAFAF8] p-6 sm:p-8 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">⚖️</span>
                  <div>
                    <h3 className="font-bold text-lg" style={{ color: '#4A3728' }}>발란싱 캣 동적체평형검사기</h3>
                    <p className="text-xs font-semibold" style={{ color: '#EA580C' }}>SBT-390 (검사 및 재활 훈련기)</p>
                  </div>
                </div>
                <ul className="space-y-3 mt-6">
                  <li className="flex items-start gap-3 text-sm text-slate-600">
                    <span className="font-bold mt-0.5" style={{ color: '#D4882B' }}>✓</span>
                    <span><strong style={{ color: '#4A3728' }}>초정밀 평형 평가:</strong> 동적체평형검사(6 Conditions) 및 자동평형검사 지원</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-slate-600">
                    <span className="font-bold mt-0.5" style={{ color: '#D4882B' }}>✓</span>
                    <span><strong style={{ color: '#4A3728' }}>실시간 Bio-feedback:</strong> 환자의 움직임, 무게중심 이동을 분석하여 즉각적인 훈련 연동</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-slate-600">
                    <span className="font-bold mt-0.5" style={{ color: '#D4882B' }}>✓</span>
                    <span><strong style={{ color: '#4A3728' }}>All-in-One 시스템:</strong> 맞춤 전정재활훈련(기초/심화)과 정밀 검사를 장비 한 대로 동시 진행</span>
                  </li>
                </ul>
              </div>

              {/* VNG */}
              <div className="bg-[#FAFAF8] p-6 sm:p-8 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">👁️</span>
                  <div>
                    <h3 className="font-bold text-lg" style={{ color: '#4A3728' }}>비디오 안진검사기 (VNG)</h3>
                    <p className="text-xs font-semibold" style={{ color: '#EA580C' }}>전정기능 분석 필수 검사 장비</p>
                  </div>
                </div>
                <ul className="space-y-3 mt-6">
                  <li className="flex items-start gap-3 text-sm text-slate-600">
                    <span className="font-bold mt-0.5" style={{ color: '#D4882B' }}>✓</span>
                    <span><strong style={{ color: '#4A3728' }}>원인 감별 진단:</strong> 어지럼증이 귀(전정계)의 문제인지 뇌 병변인지 정확하게 구분</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-slate-600">
                    <span className="font-bold mt-0.5" style={{ color: '#D4882B' }}>✓</span>
                    <span><strong style={{ color: '#4A3728' }}>정량적 안구 분석:</strong> 미세한 안구의 떨림(안진)을 비디오로 정밀하게 추적 및 분석</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-slate-600">
                    <span className="font-bold mt-0.5" style={{ color: '#D4882B' }}>✓</span>
                    <span><strong style={{ color: '#4A3728' }}>맞춤 치료 계획:</strong> 임상 현장에서 수집된 객관적 데이터를 바탕으로 최적의 치료 방향 설정</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
