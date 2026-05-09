const fs = require('fs');
const path = require('path');
const { GoogleGenerativeAI } = require('@google/generative-ai');
const { format } = require('date-fns');
const { SYSTEM_PROMPT, KEYWORDS, CLINIC_INFO } = require('./prompts');
require('dotenv').config({ path: path.join(__dirname, '../.env') });

// Google Gemini 설정
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);

async function generatePost() {
    console.log('🤖 AI(Gemini) 의사선생님이 글을 쓸 준비를 하고 있습니다...');

    if (!process.env.GOOGLE_API_KEY) {
        console.error('❌ GOOGLE_API_KEY가 없습니다. .env 파일을 확인해주세요.');
        process.exit(1);
    }

    // 1. 기존 글 확인 및 주제 선정
    const postsDir = path.join(__dirname, '../content/posts');
    const existingTitles = [];

    if (fs.existsSync(postsDir)) {
        const files = fs.readdirSync(postsDir);
        files.forEach(file => {
            if (file.endsWith('.md')) {
                const content = fs.readFileSync(path.join(postsDir, file), 'utf-8');
                const match = content.match(/title: "(.*)"/);
                if (match) {
                    existingTitles.push(match[1]);
                }
            }
        });
    }

    console.log(`📚 기존 작성된 글: ${existingTitles.length}개`);

    let topic = "";

    // 명령줄 인수로 주제가 전달되면 해당 주제 사용
    if (process.argv[2]) {
        topic = process.argv[2];
        console.log(`🎯 지정된 주제: [${topic}]`);
    } else {
        try {
            const model = genAI.getGenerativeModel({ model: "gemini-2.5-pro" });
            const topicPrompt = `
            당신은 이비인후과 병원 블로그 마케터입니다.
            기존에 작성된 블로그 글 제목들은 다음과 같습니다:
            ${JSON.stringify(existingTitles)}
    
            위 주제들과 겹치지 않는, 이비인후과 환자들에게 유용한 새로운 건강 정보 주제 1가지만 추천해주세요.
            반드시 이비인후과 관련 질환(귀, 코, 목)에 대한 주제만 추천하세요.
            예시: 비염, 축농증, 편도염, 중이염, 이명, 난청, 어지럼증, 코골이, 수면무호흡, 알레르기 비염, 인후염, 후두염, 성대결절, 외이도염, 비중격만곡증, 후비루, 코피 등
            출력 형식: 주제만 텍스트로 출력 (예: "환절기 알레르기 비염의 증상과 관리법")
            명확하고 구체적인 주제를 선정하세요.
            `;

            const result = await model.generateContent(topicPrompt);
            topic = result.response.text().trim().replace(/"/g, '');
            console.log(`💡 AI 추천 주제: [${topic}]`);
        } catch (e) {
            console.error("❌ 주제 생성 실패, 기본 리스트 사용", e);
            const entTopics = [
                '환절기 알레르기 비염의 증상과 관리법',
                '축농증(부비동염)의 원인과 치료 방법',
                '반복되는 편도염, 수술이 필요한 경우는?',
                '귀에서 소리가 나요 - 이명의 원인과 대처',
                '아이 중이염, 부모가 알아야 할 것들',
                '코골이와 수면무호흡증의 위험성',
                '갑자기 찾아온 어지럼증, 이석증일 수 있습니다',
                '목이 쉬었어요 - 성대결절의 증상과 관리',
                '비중격만곡증, 코막힘의 숨겨진 원인',
                '후비루 증후군, 목에 가래가 계속 걸리는 이유'
            ];
            topic = entTopics[Math.floor(Math.random() * entTopics.length)];
            console.log(`📝 랜덤 선택 주제: [${topic}]`);
        }
    }

    // KST 기준으로 날짜 설정 (UTC+9)
    const kstDate = new Date(new Date().getTime() + 9 * 60 * 60 * 1000);
    const today = format(kstDate, 'yyyy-MM-dd');

    // 2. 글 작성
    let content = "";

    const MODELS = ["gemini-2.5-pro", "gemini-2.5-flash", "gemini-2.0-flash"];
    let lastError = null;

    for (const modelName of MODELS) {
        for (let attempt = 1; attempt <= 2; attempt++) {
            try {
                console.log(`🚀 ${modelName} 모델로 글 작성 시도 (${attempt}/2)...`);
                const model = genAI.getGenerativeModel({
                    model: modelName,
                    generationConfig: {
                        temperature: 0.7,
                        topP: 0.8,
                        topK: 40,
                        maxOutputTokens: 8192,
                    }
                });

                const fullPrompt = `${SYSTEM_PROMPT}

## 병원 기본 정보 (글 작성 시 참고용 - 포스팅에 직접 기재하지 말 것)
- 병원명: 이룸이비인후과의원
- 소재지: 경기 남양주시 진접읍 해밀예당1로 30 센타플라자 6층
- 기관 유형: 이비인후과 전문의 진료 의원
- 주요 진료: 비염, 축농증, 중이염, 편도염, 코골이/수면무호흡, 어지럼증, 이명/난청
- 대표 번호: 031-571-5075

## 입력된 주제
- **주제**: "${topic}"
- **타겟**: 해당 증상으로 고민하는 환자, 가족, 건강에 관심있는 일반인
- **핵심 키워드**: ${KEYWORDS.join(', ')}


## 출력 요구사항

**반드시 다음 Frontmatter로 시작:**
---
title: "(매력적이고 검색 최적화된 제목)"
date: "${today}"
description: "(160자 이내 SEO 최적화 설명)"
tags: ["남양주이비인후과", "진접이비인후과", "이룸이비인후과", "주제관련태그1", "주제관련태그2"]
author: "이룸이비인후과"
coverImage: ""
---

**그 다음 본문을 대화형 구조로 작성:**

## (H2: 공감되는 질문형/서술형 제목)

(도입부: 환자의 일상적인 상황으로 시작하여 공감대 형성, 200-300자)

## (원인/증상을 질문형으로)

(의학적으로 정확한 원인/증상 설명)

## (치료/관리를 서술형으로)

(치료 방법, 생활 습관 개선 방법)

## 진료실에서 자주 받는 질문들

**Q1: (환자들이 실제로 궁금해하는 질문)**
A: (구체적이고 도움되는 답변)

**Q2: (치료나 검사 관련 질문)**
A: (전문적이지만 이해하기 쉬운 답변)

**Q3: (예방이나 관리 관련 질문)**
A: (실천 가능한 조언)

## 마무리

(요점 요약, 자연스러운 진료 권유)

---

> 💡 **진료 안내 및 주의사항**  
> 본 게시물은 의료법 제56조 1항을 준수하여 의료 정보 제공 목적으로 작성되었습니다.  
> 제공된 의학 정보는 환자의 상태 및 체질에 따라 진료 결과가 다를 수 있으며, 부작용이 발생할 수 있으므로 시술 전 반드시 이비인후과 전문의와 충분한 상담을 진행하시기 바랍니다.

## 주의사항
- 의료광고법을 철저히 준수할 것
- 치료 효과 보장 표현 금지
- '최고', '최상' 등 최상급 표현 금지
- 단정적 표현 대신 "~ 도움이 됩니다", "~ 권장됩니다" 사용
- 부작용과 주의사항을 반드시 포함
`;

                const result = await model.generateContent(fullPrompt);
                const response = await result.response;
                content = response.text();
                console.log(`✨ ${modelName} 작성 성공!`);
                console.log(`📄 생성된 글 길이: ${content.length}자`);
                break;

            } catch (apiError) {
                lastError = apiError;
                console.error(`❌ ${modelName} 오류 (시도 ${attempt}/2):`, apiError.message);

                if (attempt < 2) {
                    console.log(`⏳ ${attempt * 3}초 후 재시도...`);
                    await new Promise(resolve => setTimeout(resolve, attempt * 3000));
                }
            }
        }
        if (content) break;
        console.log(`⚠️ ${modelName} 모델 실패, 다음 모델로 전환...`);
    }

    // 모든 재시도 실패 시 Fallback
    if (!content) {
        console.error('📋 모든 재시도 실패. Fallback 콘텐츠 생성...');
        console.error('📋 마지막 에러:', JSON.stringify(lastError, null, 2));

        const topicContent = generateTopicContent(topic);
        content = `---
title: "${topic}"
date: "${today}"
description: "${topicContent.description}"
tags: ${JSON.stringify(topicContent.tags)}
author: "이룸이비인후과"
coverImage: ""
---

${topicContent.content}

---

> 💡 **중요 안내**  
> 본 정보는 일반적인 건강 가이드이며, 개인의 상태에 따라 다를 수 있습니다.  
> 정확한 진단과 치료를 위해서는 반드시 전문의와 상담하시기 바랍니다.
`;
    }

    // 3. 이미지 설정
    const stockImages = ['consultation.jpg', 'equipment.jpg', 'wellness.jpg', 'lab.jpg'];
    const randomStock = stockImages[Math.floor(Math.random() * stockImages.length)];
    const imagePath = `/images/stock/${randomStock}`;

    console.log(`🖼️ SEO/OG용 커버 이미지 메타데이터 설정: ${imagePath}`);

    if (content.includes('coverImage:')) {
        content = content.replace(/coverImage: ""/, `coverImage: "${imagePath}"`);
    }

    // 4. 파일 저장
    let slug = "";
    const slugPrompt = `
        블로그 글 제목: "${topic}"
        
        위 제목을 바탕으로 검색 엔진 최적화(SEO)에 유리한 영문 URL Slug를 만들어주세요.
        - 규칙: 소문자, 하이픈(-) 연결, 특수문자 제거
        - 예시: "환절기 비염 관리" -> "seasonal-rhinitis-management"
        - 출력: 슬러그만 출력 (다른 텍스트 없이)
    `;
    for (const m of MODELS) {
        try {
            const slugModel = genAI.getGenerativeModel({ model: m });
            const slugResult = await slugModel.generateContent(slugPrompt);
            slug = slugResult.response.text().trim().toLowerCase().replace(/[^a-z0-9-]/g, '');
            if (slug) {
                console.log(`🔗 생성된 Slug (${m}): ${slug}`);
                break;
            }
        } catch (e) {
            console.error(`Slug 생성 실패 (${m}), 다음 모델 시도...`);
        }
    }
    if (!slug) {
        slug = Math.random().toString(36).substring(7);
        console.log(`🔗 Slug 랜덤 생성: ${slug}`);
    }

    const filename = `${today}-${slug}.md`;
    const postsDirLink = path.join(__dirname, '../content/posts');

    if (!fs.existsSync(postsDirLink)) {
        fs.mkdirSync(postsDirLink, { recursive: true });
    }

    fs.writeFileSync(path.join(postsDirLink, filename), content || "");
    console.log(`✅ 글 작성 완료: content/posts/${filename}`);
}

function generateTopicContent(topic) {
    const defaultContent = {
        description: `전문의가 알려주는 ${topic.split(' ')[0]} 건강 가이드입니다.`,
        tags: ['건강정보', '이비인후과', '진료안내'],
        content: `## ${topic}\n\n**이룸이비인후과**입니다.\n\n(본문 생성 실패로 인한 기본 템플릿입니다.)`
    };
    return defaultContent;
}

generatePost();
