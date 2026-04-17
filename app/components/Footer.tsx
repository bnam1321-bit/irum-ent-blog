'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-24 md:pb-12 mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {/* Brand & Info */}
                    <div className="col-span-1 lg:col-span-2">
                        <Link href="/" className="inline-block mb-6">
                            <Image
                                src="/logo.png"
                                alt="이룸이비인후과"
                                width={220}
                                height={55}
                                style={{ objectFit: 'contain', height: 'auto' }}
                            />
                        </Link>
                        <p className="text-slate-600 mb-2 leading-relaxed">
                            이비인후과 전문의 · 소아청소년과 전문의 협진
                        </p>
                        <p className="text-slate-500 mb-6 text-sm leading-relaxed">
                            남양주 진접읍 주민 여러분의 귀·코·목 건강 주치의.<br />
                            정확한 진단과 세심한 진료로 함께하겠습니다.
                        </p>
                        <div className="space-y-3 text-sm text-slate-600">
                            <div className="flex items-start">
                                <span className="font-bold w-16 shrink-0 text-slate-700">주소</span>
                                <span>경기 남양주시 진접읍 해밀예당1로 30 센타플라자 6층</span>
                            </div>
                            <div className="flex items-start">
                                <span className="font-bold w-16 shrink-0 text-slate-700">전화</span>
                                <a href="tel:031-571-5075" className="hover:text-teal-700 transition-colors">031-571-5075</a>
                            </div>
                        </div>
                    </div>

                    {/* Clinic Hours */}
                    <div id="clinic-hours" className="col-span-1 lg:col-span-2 bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                        <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center">
                            <span className="w-8 h-8 rounded-full bg-teal-50 flex items-center justify-center mr-2 text-teal-700 shadow-inner">🕒</span>
                            진료시간 안내
                        </h3>
                        <ul className="space-y-3 text-sm">
                            <li className="flex justify-between items-start border-b border-slate-100 pb-2">
                                <span className="font-bold text-slate-800 w-20">평일</span>
                                <div className="text-right text-slate-600">
                                    <span className="block font-medium text-slate-900">09:00 - 18:30</span>
                                    <span className="text-xs text-slate-500">휴게시간 13:00 - 14:00</span>
                                </div>
                            </li>
                            <li className="flex justify-between items-start border-b border-slate-100 pb-2">
                                <span className="font-bold text-teal-700 w-20">토요일</span>
                                <div className="text-right text-slate-600">
                                    <span className="block font-medium text-slate-900">09:00 - 13:00</span>
                                    <span className="text-xs text-slate-500">휴게시간 없음</span>
                                </div>
                            </li>
                            <li className="flex justify-between items-center pt-1">
                                <span className="font-bold text-red-500 w-20">일/공휴일</span>
                                <div className="text-right">
                                    <span className="inline-block px-2 py-1 bg-red-50 text-red-600 rounded text-xs font-bold">휴진</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-200 pt-8 text-center text-xs text-slate-400">
                    <p>&copy; {new Date().getFullYear()} 이룸이비인후과. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
