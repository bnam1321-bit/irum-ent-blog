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

            {/* 의료보험 및 수면무호흡 증상 안내 */}
            <div className="mt-10 grid md:grid-cols-2 gap-6 relative z-10">
              <div className="p-6 rounded-2xl border-2 border-teal-100 bg-teal-50">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl">🏥</span>
                  <h3 className="font-bold text-lg" style={{ color: '#0D7377' }}>코골이/수면무호흡 검사 — 의료보험 적용</h3>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  2018년 7월부터 코골이·수면무호흡 증상에 대한 수면다원검사(PSG)가 건강보험 적용 항목으로 지정되었습니다. 보험사 기준에 따라 본인부담금이 다를 수 있으니 내원 안내를 통해 확인하시기 바랍니다.
                </p>
              </div>
              <div className="p-6 rounded-2xl border border-slate-100 bg-[#FAFAF8]">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl">⚠️</span>
                  <h3 className="font-bold text-base" style={{ color: '#4A3728' }}>수면무호흡이 가져오는 증상</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['고혁력','심근경색','뇌졸중','만성피로','기억력감퇴','우울증','성기능장애','하지불안증후군','조기사망','아동 ADHD','성장장애','학습장애','두통'].map((s) => (
                    <span key={s} className="px-2.5 py-1 rounded-full text-xs font-semibold bg-white border border-slate-200 text-slate-600">{s}</span>
                  ))}
                </div>
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
                <Image src="/images/KakaoTalk_20260514_131140418_02.jpg" alt="발란싱 캣 SBT-390 동적체평형검사" fill className="object-contain" />
              </div>
              <div className="aspect-video relative rounded-2xl overflow-hidden border border-slate-100 shadow-sm bg-white">
                <Image src="/images/KakaoTalk_20260514_131140418_03.jpg" alt="자동평형검사 훈련 컨텐츠" fill className="object-contain" />
              </div>
              <div className="aspect-video relative rounded-2xl overflow-hidden border border-slate-100 shadow-sm bg-white">
                <Image src="/images/KakaoTalk_20260514_131140418_04.jpg" alt="전정기능 분석 VNG 검사" fill className="object-cover" />
              </div>
              <div className="aspect-video relative rounded-2xl overflow-hidden border border-slate-100 shadow-sm bg-white">
                <Image src="/images/KakaoTalk_20260514_131140418_07.jpg" alt="VNG 각종 검사화면" fill className="object-cover" />
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

        {/* 자율신경 검사 장비 섹션 */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-12 border border-slate-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-green-50 rounded-full mix-blend-multiply filter blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>

            <div className="text-center mb-10 relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold mb-4" style={{ background: '#F0FDF4', color: '#16A34A' }}>
                💓 자율신경 검사 클리닉
              </div>
              <h2 className="text-2xl sm:text-3xl font-black mb-4" style={{ color: '#4A3728' }}>
                AFT-800 자율신경 기능 정밀 검사
              </h2>
              <p className="text-base leading-relaxed max-w-2xl mx-auto" style={{ color: '#7A6E62' }}>
                자세변화에 따른 생체신호를 분석하여 자율신경계 기능을 정밀하게 평가하는 장비로,<br className="hidden sm:block" /> 만성피로, 당뇨, 심혁관 환자의 조기 실조증 탐지에 필수적인 검사입니다.
              </p>
            </div>

            {/* AFT-800 장비 이미지 */}
            <div className="flex justify-center mb-10 relative z-10">
              <div className="relative w-full max-w-sm rounded-3xl overflow-hidden border border-slate-100 shadow-md bg-white p-4">
                <Image
                  src="/images/aft800_1.png"
                  alt="AFT-800 자율신경 기능 검사기"
                  width={480}
                  height={560}
                  className="w-full object-contain"
                />
              </div>
            </div>

            {/* 장비 스펙 2컀럼 */}
            <div className="grid md:grid-cols-2 gap-8 mb-8 relative z-10">
              {/* 심박변이와 혁압변화 측정 */}
              <div className="bg-[#FAFAF8] p-6 sm:p-8 rounded-2xl border border-slate-100">
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-3xl">💗</span>
                  <div>
                    <h3 className="font-bold text-lg" style={{ color: '#4A3728' }}>심박변이와 혁압변화 측정</h3>
                    <p className="text-xs font-semibold" style={{ color: '#16A34A' }}>AFT-800 (Heart Rate & Blood Pressure)</p>
                  </div>
                </div>
                <ul className="space-y-2.5">
                  {[
                    'Valsalva에 의한 심박수의 변화',
                    '직립 후 심박수의 변화',
                    '심ํ호흥후의 심박수의 변화',
                    '직립 후 혁압 반응',
                    'Handgrip 동안의 혁압 반응'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-slate-600">
                      <span className="font-bold mt-0.5" style={{ color: '#16A34A' }}>{i + 1}.</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* HRV 부하 측정 */}
              <div className="bg-[#FAFAF8] p-6 sm:p-8 rounded-2xl border border-slate-100">
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-3xl">📊</span>
                  <div>
                    <h3 className="font-bold text-lg" style={{ color: '#4A3728' }}>HRV 부하 측정</h3>
                    <p className="text-xs font-semibold" style={{ color: '#16A34A' }}>Heart Rate Variability 분석</p>
                  </div>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-sm text-slate-600">
                    <span className="font-bold mt-0.5" style={{ color: '#D4882B' }}>✓</span>
                    <span><strong style={{ color: '#4A3728' }}>PSD 분석:</strong> Power Spectral Density 분석을 통한 자세변화에 따른 교감/부교감 신경의 반응 측정</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-slate-600">
                    <span className="font-bold mt-0.5" style={{ color: '#D4882B' }}>✓</span>
                    <span><strong style={{ color: '#4A3728' }}>안정시보다 정확:</strong> 안정상태 측정시보다 자율신경 이상 탐지 정확도 향상 (검사시간: 6분 ~ 10분)</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* 검사항목 및 활용 */}
            <div className="relative z-10">
              <h3 className="text-lg font-black mb-5" style={{ color: '#4A3728' }}>AFT-800 검사항목 및 활용 대상</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {[
                  { num: '1', label: '기립성 저혁압', filled: true },
                  { num: '2', label: '자율신경계 실조증', filled: false },
                  { num: '3', label: '당뇨 신경병증', filled: true },
                  { num: '4', label: '실신, POTS, 운동중 실신 경험자', filled: false },
                  { num: '5', label: '내분비내과 · 신경과 · 심장내과', filled: true },
                ].map((item) => (
                  <div
                    key={item.num}
                    className={`relative p-4 rounded-2xl flex items-center gap-3 ${
                      item.filled ? 'text-white' : 'border-2 border-slate-200 text-slate-600'
                    }`}
                    style={item.filled ? { background: '#1E3A6E' } : {}}
                  >
                    <span
                      className="text-4xl font-black opacity-30 absolute right-3 bottom-1 leading-none"
                      style={{ color: item.filled ? '#ffffff' : '#CBD5E1' }}
                    >
                      {item.num}
                    </span>
                    <span className="text-sm font-bold relative z-10">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 자율신경 검사 필요 증상 */}
            <div className="mt-8 grid md:grid-cols-2 gap-6 relative z-10">
              <div className="p-6 rounded-2xl border border-slate-100 bg-[#F0FDF4]">
                <h3 className="font-bold text-base mb-4" style={{ color: '#15803D' }}>확인이 필요한 증상 체크리스트</h3>
                <ul className="space-y-2">
                  {[
                    '원인 없이 어지럽고 실신하는 경우',
                    '기립성저혁압, 저혁당 경험자, 두통, 수면장애가 있는 경우',
                    '당뇨, 고혁당, 손발이 저린 경우',
                    '심혁관 질환의 가족력과 거주력이 있는 경우',
                    '우울, 불안, 면역력저하, 신경성 장애로 고생하는 경우',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                      <span style={{ color: '#16A34A' }} className="font-bold mt-0.5">✔</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-6 rounded-2xl border border-slate-100 bg-[#FAFAF8]">
                <h3 className="font-bold text-base mb-4" style={{ color: '#4A3728' }}>자율신경계 이상 시 나타나는 증상</h3>
                <ul className="space-y-2">
                  {[
                    '만성피로, 소화장애, 손발저림, 과민성대장(설사) 증상',
                    '가슴 두근거림, 어지럼증, 현기증, 실신, 창백, 시력장애, 두통',
                    '안정시에도 맥박이 빠름 (100회/분 이상)',
                    '밤에 혁압이 상승하고 새벽에 혁압이 하강하여 기립성 저혁압 발생 (아침/식후/운동 시)',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                      <span style={{ color: '#D4882B' }} className="font-bold mt-0.5">✔</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* 비염수술 장비 섹션 */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-12 border border-slate-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-sky-50 rounded-full mix-blend-multiply filter blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>

            <div className="text-center mb-10 relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold mb-4" style={{ background: '#EFF6FF', color: '#2563EB' }}>
                🔪 비염·축농증 수술 클리닉
              </div>
              <h2 className="text-2xl sm:text-3xl font-black mb-4" style={{ color: '#4A3728' }}>
                축농증 및 비염수술 최신 의료장비
              </h2>
              <p className="text-base leading-relaxed max-w-2xl mx-auto" style={{ color: '#7A6E62' }}>
                OSSEOUNO Shaver System은 내시경 부비동 수술 전용 점진 수술기구로,<br className="hidden sm:block" /> 수술 중 통증과 출혈이 적고 수술시간이 단축됩니다.
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-8 relative z-10">
              {/* 장비 이미지 */}
              <div className="md:w-1/3 flex-shrink-0">
                <div className="rounded-3xl overflow-hidden border border-slate-100 shadow-md bg-white p-4 h-full flex items-center justify-center">
                  <Image
                    src="/images/img_osseouno.jpg"
                    alt="OSSEOUNO 셔이버 시스템 비염수술 장비"
                    width={300}
                    height={400}
                    className="w-full object-contain max-h-80"
                  />
                </div>
              </div>

              {/* 장비 정보 */}
              <div className="flex-1 space-y-5">
                <div className="p-5 rounded-2xl border border-slate-100 bg-[#FAFAF8]">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-5 h-5 rounded-full flex items-center justify-center text-white text-xs font-bold" style={{ background: '#2563EB' }}>▶</span>
                    <h3 className="font-bold text-base" style={{ color: '#2563EB' }}>제품용도</h3>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    내시경 부비동 수술에 쓰이는 기구로서 작은 트날이 물룹을 잘게 잘라서 흡입하여 제거할 수 있는 수술기구입니다.
                  </p>
                </div>

                <div className="p-5 rounded-2xl border border-slate-100 bg-[#FAFAF8]">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-5 h-5 rounded-full flex items-center justify-center text-white text-xs font-bold" style={{ background: '#2563EB' }}>▶</span>
                    <h3 className="font-bold text-base" style={{ color: '#2563EB' }}>적용수술</h3>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    축농증수술, 융종절제술, 유동절제술, 비개 절제술, 비중격성형술, 안화감압술, 안신경감압술 등
                  </p>
                </div>

                <div className="p-5 rounded-2xl border border-slate-100 bg-[#FAFAF8]">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-5 h-5 rounded-full flex items-center justify-center text-white text-xs font-bold" style={{ background: '#2563EB' }}>▶</span>
                    <h3 className="font-bold text-base" style={{ color: '#2563EB' }}>특·장점</h3>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-sm text-slate-600">
                      <span className="font-bold" style={{ color: '#D4882B' }}>1.</span>
                      수술 시 통증과 출혈이 적음
                    </li>
                    <li className="flex items-center gap-2 text-sm text-slate-600">
                      <span className="font-bold" style={{ color: '#D4882B' }}>2.</span>
                      수술이 용이하고 수술시간이 단축됨
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
