const fs = require('fs');
const path = require('path');
const { GoogleGenerativeAI } = require('@google/generative-ai');
const { format } = require('date-fns');
const { SYSTEM_PROMPT, buildUserPrompt, KEYWORDS, CLINIC_INFO, validateOutput } = require('./prompts');
require('dotenv').config({ path: path.join(__dirname, '../.env') });

// Google Gemini 설정
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);

async function generatePost() {
    console.log('🤖 이룸이비인후과 GEO v2.0 엔진 가동 중 (Gemini 2.5)...');

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
    let cluster = "";
    let targetKeyword = "";

    // 2. 주제 선정 (GEO 최적화)
    try {
        const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" }); // 주제 선정용
        const topicPrompt = `
        당신은 이비인후과 병원 GEO(Generative Engine Optimization) 전문가입니다.
        기존 주제: ${JSON.stringify(existingTitles)}

        환자들이 검색할 만한 새로운 건강 정보 주제 1개를 선정하세요.
        다음 클러스터 중 하나를 선택하고 보유 장비와 연계하세요:
        - 수면 클리닉 (Sonata Wireless, Prisma Smart Max)
        - 어지럼증·이명 클리닉 (SBT-390, VNG)
        - 자율신경 클리닉 (AFT-800)
        - 코·부비동 수술 클리닉 (OSSEOUNO Shaver)

        출력 형식 (JSON):
        {"topic": "...", "cluster": "...", "targetKeyword": "..."}
        `;

        const result = await model.generateContent(topicPrompt);
        const responseText = result.response.text().trim().replace(/```json|```/g, '');
        const parsed = JSON.parse(responseText);
        topic = parsed.topic;
        cluster = parsed.cluster;
        targetKeyword = parsed.targetKeyword;
        console.log(`💡 선정된 주제: [${topic}] (${cluster})`);
    } catch (e) {
        console.log("⚠️ 주제 생성 실패, 기본 리스트 사용");
        const fallback = [
            { topic: "남양주 진접 수면다원검사(Sonata Wireless) 과정과 보험 적용 안내", cluster: "수면 클리닉", targetKeyword: "남양주 수면다원검사" },
            { topic: "원인 모를 만성 피로, AFT-800 자율신경 기능 정밀 검사가 필요한 이유", cluster: "자율신경 클리닉", targetKeyword: "AFT-800 자율신경검사" }
        ];
        const item = fallback[Math.floor(Math.random() * fallback.length)];
        topic = item.topic; cluster = item.cluster; targetKeyword = item.targetKeyword;
    }

    const today = format(new Date(), 'yyyy-MM-dd');

    // 3. 본문 작성
    let content = "";
    const MODELS = ["gemini-2.5-pro", "gemini-2.5-flash", "gemini-2.0-flash"];

    for (const modelName of MODELS) {
        try {
            console.log(`🚀 ${modelName} 모델로 작성 시도...`);
            const model = genAI.getGenerativeModel({ model: modelName });
            
            const userPrompt = buildUserPrompt({
                topic,
                targetKeyword,
                cluster,
                extraContext: "반드시 2,000자 이상의 충분한 분량으로 작성하세요."
            });

            const result = await model.generateContent([
                { text: SYSTEM_PROMPT },
                { text: CLINIC_INFO },
                { text: userPrompt }
            ]);
            
            content = result.response.text();
            
            // 검증
            const validation = validateOutput(content);
            if (validation.passed) {
                console.log(`✅ 검증 통과! (${validation.charCount}자)`);
                break;
            } else {
                console.warn(`⚠️ 검증 미달: ${validation.issues.join(', ')}`);
                // 실패해도 일단 진행
                break; 
            }
        } catch (err) {
            console.error(`❌ ${modelName} 실패:`, err.message);
        }
    }

    if (!content) return;

    // 4. 프론트매터 결합 및 저장
    const finalContent = `---
title: "${topic}"
date: "${today}"
description: "${topic.substring(0, 150)}"
tags: ["남양주이비인후과", "진접이비인후과", "이룸이비인후과", "${cluster.replace('·', '').replace(' ', '')}"]
author: "이룸이비인후과"
coverImage: "/images/stock/medical.jpg"
---

${content}
`;

    // Slug 생성
    let slug = topic.toLowerCase().replace(/[^a-z0-9가-힣]/g, '-').replace(/-+/g, '-');
    if (!slug || slug === '-') slug = Math.random().toString(36).substring(7);
    
    const filename = `${today}-${slug}.md`;
    fs.writeFileSync(path.join(postsDir, filename), finalContent);
    console.log(`✅ 저장 완료: content/posts/${filename}`);
}

generatePost();
