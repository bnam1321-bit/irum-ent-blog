'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
    return (
        <header className="site-header">
            <div className="header-container">
                {/* Logo */}
                <Link href="/" className="logo flex items-center gap-2 no-underline">
                    <Image
                        src="/logo.png"
                        alt="이룸이비인후과"
                        width={200}
                        height={50}
                        className="logo-image"
                        priority
                        style={{ objectFit: 'contain', height: 'auto' }}
                    />
                </Link>

                {/* Navigation */}
                <nav className="main-nav">
                    <Link href="/services" className="nav-link">진료정보</Link>
                    <Link href="/blog" className="nav-link">건강정보</Link>
                    <a href="https://map.naver.com/p/search/이룸이비인후과" target="_blank" rel="noopener noreferrer" className="nav-link">오시는 길</a>
                </nav>
            </div>
        </header>
    );
}
