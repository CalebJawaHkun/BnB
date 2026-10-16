import fs from 'node:fs';
import path from 'node:path';
import { GoogleGenAI } from '@google/genai';

// Load .env.local manually
const envPath = path.resolve('.env.local');
let apiKey = process.env.GEMINI_LLM_API_KEY || process.env.GEMINI_API_KEY;

if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, 'utf8');
  for (const line of envContent.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (trimmed && !trimmed.startsWith('#')) {
      const [key, ...vals] = trimmed.split('=');
      const val = vals.join('=').trim().replace(/^["']|["']$/g, '');
      if (key && val) {
        process.env[key.trim()] = val;
      }
    }
  }
  apiKey = apiKey || process.env.GEMINI_LLM_API_KEY || process.env.GEMINI_API_KEY;
}

if (!apiKey) {
  console.error('ERROR: No Gemini API Key found in .env.local');
  process.exit(1);
}

const MODEL_TIERS = [
  process.env.GEMINI_MODEL || 'gemini-3.5-flash-lite',
  'gemini-flash-lite-latest',
  'gemini-3.5-flash',
  'gemini-3-flash-preview',
];

const testQueries = [
  { lang: 'Burmese', query: 'Boss & Bots ရဲ့ ဈေးနှုန်းတွေက ဘယ်လောက်လဲခင်ဗျာ?' },
  { lang: 'English', query: 'What are the technical limitations for telecom carriers?' },
];

const ai = new GoogleGenAI({ apiKey });

async function runTests() {
  console.log('--- Testing Resilient Model Tier Failover Chain ---');
  console.log(`Configured Tiers: ${JSON.stringify(MODEL_TIERS)}\n`);

  for (const { lang, query } of testQueries) {
    console.log(`Query (${lang}): "${query}"`);
    const start = Date.now();

    let replyText = '';
    let modelUsed = null;

    for (const modelName of MODEL_TIERS) {
      try {
        const response = await ai.models.generateContent({
          model: modelName,
          contents: [{ role: 'user', parts: [{ text: query }] }],
          config: {
            temperature: 0.2,
          },
        });
        if (response?.text?.trim()) {
          replyText = response.text.trim();
          modelUsed = modelName;
          break;
        }
      } catch (err) {
        console.warn(`  [Tier Failover] ${modelName} failed (${err.status || err.code || 'err'}): ${err.message}. Trying next tier...`);
      }
    }

    const elapsed = Date.now() - start;
    if (replyText) {
      console.log(`  [SUCCESS] Answered by: ${modelUsed} in ${elapsed}ms`);
      console.log(`  Preview: "${replyText.slice(0, 120).replace(/\n/g, ' ')}..."\n`);
    } else {
      console.error(`  [FAILED] All tiers failed in ${elapsed}ms\n`);
      process.exitCode = 1;
    }
  }
}

runTests();
