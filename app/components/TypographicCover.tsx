import React from 'react';

interface TypographicCoverProps {
    title: string;
    tags?: string[];
    slug: string;
    className?: string;
    showTags?: boolean;
}

export default function TypographicCover({
    title,
    tags,
    slug,
    className = '',
    showTags = true,
}: TypographicCoverProps) {
    // 로고 색상 기반 그라데이션 팔레트
    const getGradient = (id: string) => {
        const gradients = [
            // 오렌지 → 브라운
            { from: '#D4882B', via: '#C07A25', to: '#4A3728' },
            // 틸 → 올리브
            { from: '#2BAAAD', via: '#4DA880', to: '#8BA53E' },
            // 브라운 → 틸
            { from: '#4A3728', via: '#3D6060', to: '#2BAAAD' },
            // 올리브 → 오렌지
            { from: '#8BA53E', via: '#B09432', to: '#D4882B' },
            // 틸 → 브라운
            { from: '#2BAAAD', via: '#3D7070', to: '#4A3728' },
            // 오렌지 → 틸
            { from: '#D4882B', via: '#7C9050', to: '#2BAAAD' },
            // 올리브 → 브라운
            { from: '#8BA53E', via: '#6D7838', to: '#4A3728' },
            // 브라운 → 오렌지
            { from: '#4A3728', via: '#8C6030', to: '#D4882B' },
        ];

        if (!id || typeof id !== 'string') {
            return gradients[0];
        }

        let hash = 0;
        for (let i = 0; i < id.length; i++) {
            hash = id.charCodeAt(i) + ((hash << 5) - hash);
        }
        const index = Math.abs(hash) % gradients.length;
        return gradients[index];
    };

    const gradient = getGradient(slug);

    return (
        <div
            className={`relative w-full h-full overflow-hidden ${className}`}
            style={{ background: `linear-gradient(135deg, ${gradient.from} 0%, ${gradient.via} 50%, ${gradient.to} 100%)` }}
        >
            {/* Background Pattern */}
            <div
                className="absolute inset-0 opacity-10"
                style={{
                    backgroundImage: `radial-gradient(circle, #ffffff 2px, transparent 2px)`,
                    backgroundSize: '24px 24px'
                }}
            ></div>

            {/* Glassmorphism Overlay */}
            <div className="absolute inset-0 bg-white/10 backdrop-blur-[1px]"></div>

            {/* Content Container */}
            <div className="relative h-full flex flex-col justify-between p-6 sm:p-8">

                {/* Top: Category Tag */}
                <div className="flex items-start justify-between">
                    {showTags && tags && tags.length > 0 && (
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-white/20 text-white backdrop-blur-md border border-white/30 shadow-sm">
                            {tags[0]}
                        </span>
                    )}
                    {/* Decorative - Logo 3색 dots */}
                    <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-sm rotate-45" style={{ background: '#D4882B', opacity: 0.7 }}></div>
                        <div className="w-3 h-3 rounded-sm rotate-45" style={{ background: '#2BAAAD', opacity: 0.7 }}></div>
                        <div className="w-3 h-3 rounded-sm rotate-45" style={{ background: '#8BA53E', opacity: 0.7 }}></div>
                    </div>
                </div>

                {/* Center: Main Title */}
                <div className="mt-auto mb-auto">
                    <h2 className="text-2xl sm:text-3xl font-black text-white leading-tight drop-shadow-md break-keep line-clamp-3">
                        {title}
                    </h2>
                </div>

                {/* Bottom: 3-color accent line matching logo */}
                <div className="mt-4 flex gap-1">
                    <div className="w-8 h-1 rounded-full" style={{ background: '#D4882B', opacity: 0.7 }}></div>
                    <div className="w-8 h-1 rounded-full" style={{ background: '#2BAAAD', opacity: 0.7 }}></div>
                    <div className="w-8 h-1 rounded-full" style={{ background: '#8BA53E', opacity: 0.7 }}></div>
                </div>
            </div>
        </div>
    );
}
