import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'content/posts');

export type FaqItem = {
    question: string;
    answer: string;
};

export type Post = {
    slug: string;
    title: string;
    date: string;
    description: string;
    tags: string[];
    content: string;
    coverImage?: string;
    tldr: string[];
    faqs: FaqItem[];
};

/**
 * 마크다운 본문에서 핵심 요약(TL;DR) 글머리표 추출
 */
export function extractTldr(markdown: string): string[] {
    const lines = markdown.split(/\r?\n/);
    const bullets: string[] = [];
    let started = false;

    for (const line of lines) {
        const trimmed = line.trim();
        if (trimmed.startsWith('## ')) {
            if (started) break;
            continue;
        }
        const bulletMatch = trimmed.match(/^[*-]\s+(.+)$/);
        if (bulletMatch) {
            started = true;
            const cleanBullet = bulletMatch[1]
                .replace(/\*\*(.*?)\*\*/g, '$1')
                .replace(/`(.*?)`/g, '$1')
                .trim();
            if (cleanBullet) bullets.push(cleanBullet);
        } else if (started && trimmed !== '') {
            break;
        }
    }
    return bullets;
}

/**
 * 마크다운 본문에서 요약 설명(description) 자동 추출
 * (프론트매터의 description이 title과 동일하거나 비어있을 때 사용)
 */
export function extractSummary(markdown: string, fallbackTitle: string): string {
    const tldr = extractTldr(markdown);
    if (tldr.length > 0) {
        const joined = tldr.slice(0, 2).join(' ');
        return joined.length > 160 ? `${joined.substring(0, 157)}...` : joined;
    }

    const lines = markdown.split(/\r?\n/);
    for (const line of lines) {
        const trimmed = line.trim();
        if (
            !trimmed ||
            trimmed.startsWith('#') ||
            trimmed.startsWith('*') ||
            trimmed.startsWith('-') ||
            trimmed.startsWith('>') ||
            trimmed.startsWith('🏥')
        ) {
            continue;
        }
        const clean = trimmed.replace(/\*\*(.*?)\*\*/g, '$1').trim();
        if (clean.length >= 40) {
            return clean.length > 160 ? `${clean.substring(0, 157)}...` : clean;
        }
    }

    return fallbackTitle;
}

/**
 * 마크다운 본문에서 FAQ(Q&A) 항목을 추출하여 Schema.org FAQPage 생성에 활용
 */
export function extractFaqs(markdown: string): FaqItem[] {
    const faqs: FaqItem[] = [];
    const lines = markdown.split(/\r?\n/);

    let currentQ = '';
    let currentA: string[] = [];

    const flush = () => {
        if (currentQ && currentA.length > 0) {
            const answerText = currentA
                .join(' ')
                .replace(/^(?:A\d*[\s.:：-]+|답변[\s.:：-]+)/i, '')
                .replace(/\*\*(.*?)\*\*/g, '$1')
                .trim();
            if (answerText) {
                faqs.push({
                    question: currentQ,
                    answer: answerText,
                });
            }
        }
        currentQ = '';
        currentA = [];
    };

    for (const line of lines) {
        const trimmed = line.trim();

        // 진료 안내나 인용구 시작 시 FAQ 종료
        if (trimmed.startsWith('🏥') || trimmed.startsWith('> 💡')) {
            flush();
            break;
        }

        // 질문 패턴 감지: **Q1. 질문...** 또는 ### Q1. 질문...
        const qMatch =
            trimmed.match(/^\*\*Q\d*[\s.:：-]+(.+?)\*\*(.*)$/i) ||
            trimmed.match(/^#{2,4}\s*Q\d*[\s.:：-]+(.+)$/i) ||
            trimmed.match(/^Q\d+[\s.:：-]+(.+\?)$/i);

        if (qMatch) {
            flush();
            currentQ = qMatch[1].replace(/\*\*/g, '').trim();
            const trailing = (qMatch[2] || '').trim();
            if (trailing) {
                currentA.push(trailing);
            }
            continue;
        }

        if (currentQ) {
            if (trimmed.startsWith('## ')) {
                flush();
                continue;
            }
            if (trimmed !== '') {
                currentA.push(trimmed);
            }
        }
    }

    flush();
    return faqs;
}

function parsePostFile(slug: string, fileContents: string): Post {
    const { data, content } = matter(fileContents);
    const title = data.title || '제목 없음';
    const rawDesc = data.description || '';
    const description =
        !rawDesc || rawDesc.trim() === title.trim()
            ? extractSummary(content, title)
            : rawDesc;

    const tldr = extractTldr(content);
    const faqs = extractFaqs(content);

    return {
        ...data,
        slug,
        content,
        title,
        date: data.date || new Date().toISOString().split('T')[0],
        description,
        tags: data.tags || [],
        tldr,
        faqs,
    } as Post;
}

export function getAllPosts(): Post[] {
    if (!fs.existsSync(postsDirectory)) {
        return [];
    }

    const fileNames = fs.readdirSync(postsDirectory).filter((f) => f.endsWith('.md'));
    const allPostsData = fileNames.map((fileName) => {
        const slug = fileName.replace(/\.md$/, '');
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        return parsePostFile(slug, fileContents);
    });

    // 날짜순 정렬 (최신순)
    return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): Post | null {
    try {
        const decodedSlug = decodeURIComponent(slug);
        const fullPath = path.join(postsDirectory, `${decodedSlug}.md`);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        return parsePostFile(decodedSlug, fileContents);
    } catch (_err) {
        return null;
    }
}
