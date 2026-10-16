import fs from 'fs';
import path from 'path';
import { NextResponse } from 'next/server.js';
import { GoogleGenAI } from '@google/genai';

// In-memory rate limiting map (IP -> { count, resetTime })
const rateLimitMap = new Map();
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute
const RATE_LIMIT_MAX_REQUESTS = 15; // 15 requests per minute

export function checkRateLimit(ip) {
  const now = Date.now();
  const record = rateLimitMap.get(ip) || { count: 0, resetTime: now + RATE_LIMIT_WINDOW_MS };

  if (now > record.resetTime) {
    record.count = 1;
    record.resetTime = now + RATE_LIMIT_WINDOW_MS;
    rateLimitMap.set(ip, record);
    return true;
  }

  if (record.count >= RATE_LIMIT_MAX_REQUESTS) {
    return false;
  }

  record.count += 1;
  rateLimitMap.set(ip, record);
  return true;
}

// Module-level knowledge base cache
let cachedKnowledge = null;
function getKnowledgeBase() {
  if (cachedKnowledge) return cachedKnowledge;

  const candidatePaths = [
    path.join(process.cwd(), 'data', 'knowledge.md'),
    path.join(process.cwd(), 'BnB', 'data', 'knowledge.md'),
    path.join(process.cwd(), '..', 'data', 'knowledge.md'),
  ];

  for (const candidate of candidatePaths) {
    try {
      if (fs.existsSync(/*turbopackIgnore: true*/ candidate)) {
        cachedKnowledge = fs.readFileSync(/*turbopackIgnore: true*/ candidate, 'utf-8');
        return cachedKnowledge;
      }
    } catch {
      // Continue searching next candidate path
    }
  }

  return '';
}

// Detect if input contains Myanmar Unicode script (U+1000 - U+109F)
function isMyanmarScript(text) {
  return /[\u1000-\u109F]/.test(text || '');
}

export async function POST(request) {
  // Determine client IP for rate limiting
  const forwardedFor = request.headers.get('x-forwarded-for');
  const realIp = request.headers.get('x-real-ip') || request.headers.get('cf-connecting-ip');
  const clientIp = (forwardedFor ? forwardedFor.split(',')[0].trim() : null) || realIp || '127.0.0.1';

  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON request body' }, { status: 400 });
  }

  const { message, history = [] } = body;
  const userMessage = (message || '').trim();

  if (!userMessage) {
    return NextResponse.json({ error: 'Message cannot be empty' }, { status: 400 });
  }

  const isBurmese = isMyanmarScript(userMessage);

  // Enforce rate limit
  if (!checkRateLimit(clientIp)) {
    const rateLimitWarning = isBurmese
      ? 'မက်ဆေ့ခ်ျ ပို့သည့် အကြိမ်ရေ များလွန်းနေပါသည်။ ကျေးဇူးပြု၍ ခေတ္တစောင့်ဆိုင်းပြီးမှ ပြန်လည်မေးမြန်းပေးပါခင်ဗျာ။'
      : 'Too many messages sent. Please wait a minute before sending another message.';
    return NextResponse.json({ reply: rateLimitWarning, error: 'Rate limit exceeded' }, { status: 429 });
  }

  const apiKey = process.env.GEMINI_LLM_API_KEY || process.env.GEMINI_API_KEY;
  if (!apiKey) {
    console.error('Missing GEMINI_LLM_API_KEY or GEMINI_API_KEY in environment.');
    const missingKeyReply = isBurmese
      ? 'စနစ်ချိတ်ဆက်မှု အခက်အခဲရှိနေပါသည်။ ကျေးဇူးပြု၍ ကျွန်ုပ်တို့၏ ဖုန်း 09442508508 သို့ တိုက်ရိုက် ဆက်သွယ်ပေးပါခင်ဗျာ။'
      : 'System connection error. Please contact our team at 09442508508 or admin@utsmyanmar.com.';
    return NextResponse.json({ reply: missingKeyReply }, { status: 200 });
  }

  const knowledgeBase = getKnowledgeBase();

  const languageDirective = isBurmese
    ? 'STRICT LANGUAGE DIRECTIVE: The user asked in Burmese (Myanmar Unicode) or Burglish. You MUST reply ENTIRELY in polite Burmese Unicode (ခင်ဗျာ/ရှင့်). Retain standard English business loanwords (e.g. Starter Plan, Demo, Dashboard) as naturally used by Myanmar SME merchants. DO NOT switch or reply in English.'
    : 'STRICT LANGUAGE DIRECTIVE: The user asked in English. You MUST reply ENTIRELY in professional, clear English. DO NOT reply in Burmese.';

  const SYSTEM_INSTRUCTION = `You are the official digital concierge and AI Employee for Boss & Bots (BnB), operated by UTS Myanmar (U-Tech Solutions).
Your primary role is to assist Myanmar online retailers, SME business owners, and service providers.

CRITICAL OPERATIONAL RULES:
1. TRUTHFUL GROUNDING: Base every answer strictly and solely on the provided BUSINESS KNOWLEDGE below. Never invent features, unannounced discounts, fake partner names, or ungrounded claims.
2. STRICT BILINGUAL MATCHING:
   - When addressed in Burmese or Burglish, reply in polite, natural Burmese (Unicode) using polite honorifics (ခင်ဗျာ/ရှင့်).
   - When addressed in English, reply in professional English.
   - NEVER answer an English inquiry in Burmese, and NEVER answer a Burmese inquiry in English.
3. MISSING INFORMATION & HUMAN HANDOVER: If a visitor's question cannot be directly and accurately answered from the provided knowledge, respond with:
   - Myanmar: "စိတ်မရှိပါနဲ့ခင်ဗျာ။ ကျွန်တော့်မှာ ထိုအချက်အလက် အတိအကျ မရှိသေးပါသဖြင့် ကျွန်ုပ်တို့၏ Customer Success အဖွဲ့ ဖုန်း 09442508508 သို့မဟုတ် 09442509509 သို့ ဆက်သွယ်မေးမြန်းနိုင်ပါသည်ခင်ဗျာ။ Chat window ရှိ 'လူနှင့်စကားပြောမည်' ကိုလည်း နှိပ်နိုင်ပါသည်။"
   - English: "I don't have that specific information on hand. Please reach out to our team at 09442508508 / 09442509509 or click 'Chat with Human', and we will be happy to help."
4. WORKING LINKS: When recommending actions, always provide the exact markdown link from the knowledge base (e.g., [/book-a-demo](/book-a-demo), [/pricing](/pricing), [/contact](/contact), [/ai-employees](/ai-employees)). Never invent fake URLs.
5. STRICT COMMERCIAL RULES: Prices (Starter: 200,000 MMK, Growth: 400,000 MMK, Premium: 700,000 MMK, Mobile App add-on: 200,000 MMK) are fixed and non-negotiable. Decline custom discounts and promote the free 1-on-1 business consulting session at [/book-a-demo](/book-a-demo).
6. CARRIER POLICY: If asked about Mytel, clarify politely that Mytel SIMs are currently unsupported for SMS OTP, and advise using Atom, Ooredoo, or MPT.
7. TONE & LENGTH: Warm, professional, and succinct (2 to 4 sentences unless structured lists or step-by-step guidance are requested).

${languageDirective}

BUSINESS KNOWLEDGE:
${knowledgeBase}
`;

  // Slice history to last 8 turns and format for Google GenAI SDK
  const formattedHistory = (Array.isArray(history) ? history : [])
    .slice(-8)
    .map((item) => {
      const role = item.role === 'assistant' ? 'model' : item.role;
      const text = item.text || item.content || '';
      return {
        role: role === 'user' || role === 'model' ? role : 'user',
        parts: [{ text: String(text) }],
      };
    })
    .filter((item) => item.parts[0].text.trim().length > 0);

  // Ensure the history starts with a 'user' turn for the Gemini API
  while (formattedHistory.length > 0 && formattedHistory[0].role !== 'user') {
    formattedHistory.shift();
  }

  // Combine into contents array: history + current user message
  const contents = [
    ...formattedHistory,
    {
      role: 'user',
      parts: [{ text: userMessage }],
    },
  ];

  const config = {
    systemInstruction: SYSTEM_INSTRUCTION,
    temperature: 0.2,
  };

  const ai = new GoogleGenAI({ apiKey });

  const MODEL_TIERS = [
    process.env.GEMINI_MODEL || 'gemini-3.5-flash-lite',
    'gemini-flash-lite-latest',
    'gemini-3.5-flash',
    'gemini-3-flash-preview',
  ];

  let replyText = '';
  let modelUsed = null;
  let lastError = null;

  for (const modelName of MODEL_TIERS) {
    try {
      const response = await ai.models.generateContent({
        model: modelName,
        contents,
        config,
      });
      if (response?.text?.trim()) {
        replyText = response.text.trim();
        modelUsed = modelName;
        break;
      }
    } catch (err) {
      lastError = err;
      console.warn(`[Model Tier Failover] ${modelName} returned ${err.status || err.code || 'error'}: ${err.message}. Trying next tier...`);
    }
  }

  if (!replyText) {
    console.error('All model tiers failed:', lastError);
    replyText = isBurmese
      ? 'စိတ်မရှိပါနဲ့ခင်ဗျာ။ လက်ရှိတွင် စနစ်ပိုင်း အနည်းငယ် အဆင်မပြေဖြစ်နေပါသဖြင့် ကျွန်ုပ်တို့၏ Customer Success အဖွဲ့ ဖုန်း 09442508508 သို့မဟုတ် 09442509509 သို့ တိုက်ရိုက် ဆက်သွယ်ပေးပါရန် မေတ္တာရပ်ခံအပ်ပါသည်။'
      : 'I apologize, but our service is currently experiencing a temporary connection issue. Please contact our team directly at 09442508508 / 09442509509 or admin@utsmyanmar.com.';
  }

  return NextResponse.json({ reply: replyText.trim(), modelUsed });
}
