

export default function ServicesPage() {
    return (
        <div className="min-h-screen bg-slate-50 py-20 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-black text-slate-900 mb-6 drop-shadow-sm">진료 안내</h1>
                    <p className="text-xl text-slate-600 font-medium">이룸이비인후과는 다음과 같은 진료를 제공합니다</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    {/* 비염 / 알레르기 비염 */}
                    <div className="bg-white rounded-3xl p-8 shadow-md hover-lift border border-slate-100">
                        <div className="w-16 h-16 rounded-2xl bg-teal-50 border border-teal-100 flex items-center justify-center text-3xl mb-6 shadow-sm">
                            👃
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">비염 / 알레르기 비염</h3>
                        <p className="text-slate-600 leading-relaxed">
                            코막힘, 콧물, 재채기 등 비염 증상의 정확한 진단과 치료
                        </p>
                    </div>

                    {/* 축농증 (부비동염) */}
                    <div className="bg-white rounded-3xl p-8 shadow-md hover-lift border border-slate-100">
                        <div className="w-16 h-16 rounded-2xl bg-teal-50 border border-teal-100 flex items-center justify-center text-3xl mb-6 shadow-sm">
                            🫁
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">축농증 (부비동염)</h3>
                        <p className="text-slate-600 leading-relaxed">
                            급성·만성 부비동염의 체계적인 진단과 치료
                        </p>
                    </div>

                    {/* 중이염 / 난청 */}
                    <div className="bg-white rounded-3xl p-8 shadow-md hover-lift border border-slate-100">
                        <div className="w-16 h-16 rounded-2xl bg-teal-50 border border-teal-100 flex items-center justify-center text-3xl mb-6 shadow-sm">
                            👂
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">중이염 / 난청</h3>
                        <p className="text-slate-600 leading-relaxed">
                            중이염, 이명, 난청 등 귀 질환 전문 진료
                        </p>
                    </div>

                    {/* 편도염 / 인후염 */}
                    <div className="bg-white rounded-3xl p-8 shadow-md hover-lift border border-slate-100">
                        <div className="w-16 h-16 rounded-2xl bg-teal-50 border border-teal-100 flex items-center justify-center text-3xl mb-6 shadow-sm">
                            🗣️
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">편도염 / 인후염</h3>
                        <p className="text-slate-600 leading-relaxed">
                            목 통증, 편도 부종, 인후 불편감 치료
                        </p>
                    </div>

                    {/* 코골이 / 수면무호흡 */}
                    <div className="bg-white rounded-3xl p-8 shadow-md hover-lift border border-slate-100">
                        <div className="w-16 h-16 rounded-2xl bg-teal-50 border border-teal-100 flex items-center justify-center text-3xl mb-6 shadow-sm">
                            😴
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">코골이 / 수면무호흡</h3>
                        <p className="text-slate-600 leading-relaxed">
                            코골이 및 수면무호흡증 검사와 치료
                        </p>
                    </div>

                    {/* 어지럼증 */}
                    <div className="bg-white rounded-3xl p-8 shadow-md hover-lift border border-slate-100">
                        <div className="w-16 h-16 rounded-2xl bg-teal-50 border border-teal-100 flex items-center justify-center text-3xl mb-6 shadow-sm">
                            💫
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">어지럼증</h3>
                        <p className="text-slate-600 leading-relaxed">
                            이석증, 메니에르병 등 어지럼증 원인 진단과 치료
                        </p>
                    </div>
                </div>

                {/* 진료 시간 */}
                <div className="bg-white rounded-3xl p-12 shadow-xl border border-slate-100">
                    <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center tracking-tight">진료 시간</h2>
                    <div className="max-w-2xl mx-auto space-y-4">
                        <div className="flex justify-between py-3 border-b border-slate-100">
                            <span className="font-semibold text-slate-700">평일 (월~금)</span>
                            <span className="text-slate-600">09:00 ~ 18:30</span>
                        </div>
                        <div className="flex justify-between py-3 border-b border-slate-100">
                            <span className="font-semibold text-slate-700">휴게시간 (월~금)</span>
                            <span className="text-slate-600">13:00 ~ 14:00</span>
                        </div>
                        <div className="flex justify-between py-3 border-b border-slate-100">
                            <span className="font-semibold text-teal-700">토요일</span>
                            <span className="text-slate-600">09:00 ~ 13:00</span>
                        </div>
                        <div className="flex justify-between py-3">
                            <span className="font-semibold text-red-500">일/공휴일</span>
                            <span className="text-red-500 font-bold">휴진</span>
                        </div>
                    </div>

                    <div className="mt-8 text-center">
                        <p className="text-slate-500 mb-6">
                            ※진료 시간은 사정에 따라 변경될 수 있습니다. 내원 전 문의 바랍니다.
                        </p>
                        <a
                            href="tel:031-571-5075"
                            className="inline-flex items-center px-8 py-4 bg-teal-700 text-white rounded-full font-bold hover:bg-teal-800 transition-all hover:scale-105 shadow-md"
                        >
                            📞 전화 문의하기
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
