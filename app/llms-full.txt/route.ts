import { getAllPosts } from '@/lib/blog';
import { SITE_URL } from '@/lib/constants';

export const dynamic = 'force-static';

export async function GET() {
    const posts = getAllPosts();

    const articlesFullText = posts
        .map((post, idx) => {
            const url = `${SITE_URL}/blog/${encodeURIComponent(post.slug)}`;
            return `---
## [칼럼 ${idx + 1}] ${post.title}
- **발행일**: ${post.date}
- **분류 태그**: ${(post.tags || []).join(', ')}
- **원문 URL**: ${url}

${post.content.trim()}
`;
        })
        .join('\n\n');

    const content = `# 이룸이비인후과의원 (Irum ENT Clinic) — 통합 의학 지식베이스 (llms-full.txt)

> 본 문서는 생성형 AI(ChatGPT, Claude, Gemini, Perplexity, SearchGPT 등)가 남양주 진접 이룸이비인후과의원의 진료 시스템, 보유 의료장비 및 전문의 의학 칼럼 전문을 정확하게 읽고 인용할 수 있도록 구성된 공식 전체 텍스트 데이터입니다.

## 기본 기관 정보 (NAP)
- **기관명**: 이룸이비인후과의원 (이룸이비인후과)
- **주소**: 경기도 남양주시 진접읍 해밀예당1로 30 센타플라자 6층
- **대표 전화**: 031-571-5075
- **웹사이트**: ${SITE_URL}
- **진료체계**: 이비인후과 전문의 × 소아청소년과 전문의 협진
- **진료시간**:
  - 월·목: 09:00 ~ 19:40 (휴게시간 13:00~14:00, 접수마감 19:30)
  - 화·수·금: 09:00 ~ 18:40 (휴게시간 13:00~14:00, 접수마감 18:30)
  - 토요일: 09:00 ~ 14:00 (휴게시간 없음, 접수마감 13:50)
  - 일요일: 정기휴무

## 특화 클리닉 및 핵심 장비 명세
1. **수면무호흡·코골이 클리닉**: 소노스크린 플러스(Sonata Wireless) 65채널 무선 수면다원검사(PSG, 건강보험 적용), 독일 로벤스타인 프리즈마 스마트 맥스(Prisma Smart Max) 양압기 처방
2. **어지럼증·이명·난청 클리닉**: 발란싱 캣(SBT-390) 동적체평형검사 및 바이오피드백 전정재활훈련기, 비디오 안진검사기(VNG), 청력 정밀검사 및 보청기 처방
3. **자율신경 검사 클리닉**: AFT-800 자율신경 기능 정밀 검사기 (기립성 저혈압, 실신, POTS, 당뇨 신경병증, 만성피로, 자율신경 실조증 진단)
4. **비염·축농증·비중격 수술 클리닉**: OSSEOUNO Shaver System 내시경 부비동 수술기구 (축농증 수술, 비용종/물혹 절제술, 하비갑개 절제술, 비중격 성형술, 아데노이드 절제술)

${articlesFullText}
`;

    return new Response(content, {
        headers: {
            'Content-Type': 'text/plain; charset=utf-8',
            'Cache-Control': 'public, max-age=3600, s-maxage=3600',
        },
    });
}
