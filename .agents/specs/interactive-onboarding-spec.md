# Interactive Onboarding Session & Progressive Auth Architecture Specification
**Location:** `.agents/interactive-onboarding-spec.md`  
**Domain:** Boss & Bots (BnB)  
**Parent Org:** UTS Myanmar (U-Tech Solutions)  
**Design Standard:** Autonomous Kinetic Precision (Daylight White + Oceanic Teal `#0f766e` + Charcoal Slate `#0f172a`)  
**Container Mode:** Fullscreen Interactive Overlay on Landing Page

---

## 1. Architectural Foundation & Timing Strategy

### Blended Progressive Authentication (Phase 5 Gate)
- **Why Progressive:** Traditional upfront authentication causes 60–75% drop-offs in Myanmar social commerce SME cohorts due to OTP friction, carrier blocks (e.g. Mytel), and lack of established trust.
- **Mechanism:** Merchants customize their business identity, operational pain points, and customer messaging channels first (Phases 1–3), experience a **live 2-chip interactive bot simulation** (Phase 4), and then claim their configured bot via **Google or Facebook 1-Click SSO** (or Phone/Email + Password) in Phase 5.
- **Display Mode:** Fullscreen overlay modal (`fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-md flex items-center justify-center`) launched from landing page primary CTAs (`"Get Started"`, `"Build Your Bot"`), complete with progress indicators, smooth slide transitions, and easy dismiss/resume handling.

---

## 2. Phase-by-Phase Interactive Specification

### Phase 1: Business Identity & Archetype (The Setup)
- **Headline (EN):** *"Let's build your AI Employee"*
- **Subtitle (MM):** *"သင့်လုပ်ငန်းနဲ့ အကိုက်ညီဆုံး Digital ဝန်ထမ်းကို စတင်တည်ဆောက်ပါ"*
- **Interactive Controls:**
  1. **Business Archetype Cards (Single-Select Bento):**
     - 🛍️ **Retail & Online Shop (ပစ္စည်းအရောင်းဆိုင်များ):** Sets bot mode to `Sell Products`.
       - *Sub-Category Chips:* Fashion & Apparel, Cosmetics & Skincare, Gadgets & Electronics, Food & Minimart, Other Retail.
     - 💇 **Service & Booking (ဝန်ဆောင်မှုလုပ်ငန်းများ):** Sets bot mode to `Promote Services`.
       - *Sub-Category Chips:* Beauty Salon & Spa, Medical Clinic & Health, Education & Academy, Real Estate & Auto, Consulting & Other Services.
  2. **Business Name Input:**
     - Clean input with validation: *"What is your store/business name?"* (e.g. `Boss Fashion House`).
  3. **Discovery Source Chip Selector:**
     - Single-select pills: `Facebook` · `TikTok` · `Telegram` · `Friend / Referral` · `UTS Event`.
- **Primary CTA:** `Next: Select Your Challenges →` (Brand Teal `#0f766e`)

---

### Phase 2: Operational Headaches & Team Scale (The Interview)
- **Headline (EN):** *"What takes up most of your time each day?"*
- **Subtitle (MM):** *"သင့်လုပ်ငန်းမှာ နေ့စဉ် ကြုံတွေ့နေရတဲ့ အဓိကအခက်အခဲများကို ရွေးချယ်ပေးပါ"*
- **Interactive Controls:**
  1. **Team Size Segmented Control:**
     - Options: `Solo Boss (1)` · `Small Team (2–5)` · `Growing Team (6–15)` · `Enterprise (16+)`.
  2. **Pain Point Bento Cards (Multi-Select with Dynamic Reassurances):**
     - 🌙 **"Late-Night Inquiries"** ➔ *"BnB works 24/7 without fatigue so you never lose overnight sales."*
     - 🔄 **"High Staff Turnover"** ➔ *"Train the bot once with your SOP—consistent sales scripts forever."*
     - 📉 **"Price & Stock Misquotes"** ➔ *"Syncs directly with your live inventory and price lists."*
     - 🎨 **"Struggling with Ad Copy/Photos"** ➔ *"Ad Studio generates captions and studio shots in seconds."*
- **Primary CTA:** `Next: Connect Channels →` (Charcoal Slate `#0f172a`)

---

### Phase 3: Channels & Message Velocity (The Ecosystem)
- **Headline (EN):** *"Where do your customers reach you?"*
- **Subtitle (MM):** *"Customer များ စုံစမ်းမေးမြန်းမှု အများဆုံး ချန်နယ်များကို ရွေးပါ"*
- **Interactive Controls:**
  1. **Channels Multi-Select Chips (with Brand Badges):**
     - 📘 **Facebook Messenger** (Primary Myanmar social commerce channel).
     - ✈️ **Telegram** (VIP sales & private catalog groups).
     - 🌐 **Website Floating Widget** (Direct web customer inquiry).
  2. **Daily Inquiry Velocity Selector:**
     - Tiers: `< 30 chats/day` (Starter Plan fit) · `30–100 chats/day` (Growth Plan fit) · `100–500+ chats/day` (Premium Plan fit).
     - Dynamic impact calculation badge: *"At 50 chats/day, BnB saves ~3.5 human work hours daily."*
- **Primary CTA:** `Preview Your Bot in Action →` (Brand Teal `#0f766e` with Sparkle)

---

### Phase 4: Live Bot Simulation & "Aha!" Proof (2 Clickable Chips)
- **Headline (EN):** *"Meet your new AI Employee for [Business Name]"*
- **Subtitle (MM):** *"သင့်လုပ်ငန်းအတွက် ဖန်တီးထားသော Bot ၏ ဖြေကြားပုံကို တိုက်ရိုက် စမ်းသပ်ကြည့်ပါ"*
- **Interactive Phone/Widget Simulator:**
  - Mock chat frame with header: `[Business Name] AI Worker` · `🟢 Active 24/7`
  - Bot initial greeting rendered via typewriter animation in natural Myanmar colloquial tone:
    - *Retail:* *"မင်္ဂလာပါရှင်! [Business Name] မှ ကြိုဆိုပါတယ်။ ဘယ် product လေးကို စိတ်ဝင်စားပါသလဲရှင်?"*
    - *Service:* *"မင်္ဂလာပါရှင်! [Business Name] မှ ဝန်ဆောင်မှုအချက်အလက်များနှင့် Booking ရက်ချိန်းများအတွက် ကူညီပေးပါရစေရှင်။"*
  - **Two Clickable Prompt Chips:**
    1. 💰 `"ဈေးနှုန်းနှင့် ပစ္စည်းရှိမရှိ စစ်ဆေးမည်"` (Checks Price & Stock Availability):
       - Renders a visual, interactive product/service card bubble with item photo/badge, localized MMK price, stock/slot status, and purchase/booking CTA.
    2. 🙋 `"လူနှင့် တိုက်ရိုက် စကားပြောမည်"` (Triggers Human Escalation / Handover alert):
       - Simulates live escalation with an alert banner: *"Owner alerted via Telegram: Customer requested human takeover."*
- **Primary CTA:** `Save & Deploy My Bot 🚀` (High-contrast Pulsing Button)

---

### Phase 5: Blended Progressive Auth (Claim & Save)
- **Headline (EN):** *"Claim & Deploy Your AI Employee"*
- **Subtitle (MM):** *"သင့် Bot ကို သိမ်းဆည်းပြီး Dashboard ကို စတင်အသုံးပြုရန် အကောင့်ဖွင့်ပါ"*
- **Identity Claim Elements:**
  - Summary badge: `🛍️ [Business Name] · [Sub-Category] · Facebook & Telegram ready`
  - **Dual Fast SSO Cluster:**
    - `Continue with Google` (One-click Google OAuth2)
    - `Continue with Facebook` (One-click Facebook OAuth2)
  - **Minimal Credentials Alternative:**
    - Phone Number / Email (+95 9...)
    - Password (minimum 8 characters)
    - Optional Referral Code field
  - **Hybrid Session Engine:** Issues client session token stored in localStorage/cookie for immediate hydration into `/dashboard`.
- **Primary CTA:** `Create Account & Enter Dashboard →`
- **Secondary Action:** `Already have an account? Sign In` (Instant modal switch)

---

### Phase 6: Celebration & Instant Dashboard Handoff
- **Headline (EN):** *"You're all set, Boss!"*
- **Subtitle (MM):** *"သင့် AI ဝန်ထမ်း အသင့်ဖြစ်ပါပြီ။ လုပ်ငန်း Dashboard သို့ ဝင်ရောက်နိုင်ပါပြီ။"*
- **Deployment Summary Checklist:**
  -  *Business Profile Created*
  -  *AI Persona Initialized for [Business Name]*
  -  *Channels Ready for Token Binding*
- **Destination:**
  - Primary CTA: `Enter Business Dashboard →` (Transitions seamlessly into `/dashboard`, pre-hydrated with business profile and verification cards).
  - Secondary CTA: `Book Free 1-on-1 Setup Call` (Launches consultation booking drawer)

---

## 3. Data Schema & Ephemeral State

```typescript
export interface OnboardingSessionState {
  step: 1 | 2 | 3 | 4 | 5 | 6;
  businessType: 'retail' | 'service';
  businessName: string;
  source: string;
  teamSize: 'solo' | 'small' | 'growing' | 'enterprise';
  painPoints: string[];
  channels: ('messenger' | 'telegram' | 'website')[];
  dailyVolume: '<30' | '30-100' | '100-500' | '500+';
  authMethod?: 'google' | 'facebook' | 'credentials';
  emailOrPhone?: string;
  password?: string;
  referralCode?: string;
}
```
State is held in React state with optimistic `sessionStorage` fallback, ensuring no inputs are lost if a user accidentally navigates back.
