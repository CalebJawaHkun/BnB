# Boss & Bots (BnB) — Enterprise AI Digital Workforce

[![Next.js](https://img.shields.io/badge/Next.js-16.4.0-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.3.0-blue?style=flat-square&logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38bdf8?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/Status-Active_Development-teal?style=flat-square)](#)

> **"The boss runs the business. Bots handle the work."**  
> *(ဆိုင်ရှင်က စီးပွားရေးကို ဦးဆောင်၊ Bot များက အလုပ်များကို လုပ်ဆောင်)*

---

## 📖 About the Application

**Boss & Bots (BnB)** is a modern, high-performance replica and upgraded web platform for **[bossnbots.com](https://bossnbots.com/)**, designed and engineered under **UTS Myanmar (U-Tech Solutions)**. 

Since 2017, UTS Myanmar has been a trusted technology provider delivering enterprise-grade fintech and mission-critical digital infrastructure for top financial institutions (including **KBZ Bank**, **CB Bank**, **A Bank**, **Yoma Bank**, and **UAB Bank**) and international tech leaders (such as **DZ Card**, **Finexus**, **Sunmi**, and **Castles Technology**).

### Mission & Core Value Proposition
BnB provides dedicated **AI "Digital Employees"** tailored for Myanmar online shops and SME service businesses. Operating 24/7 across **Facebook Messenger**, **Telegram**, and **Website Live Chat**, these AI employees handle repetitive customer inquiries, showcase products, capture qualified leads, aggregate customer orders, and seamlessly escalate nuanced conversations to human owners—ensuring zero lost sales opportunities day or night.

---

## 🚀 Why This Is an Upgraded Replica

While faithfully preserving the brand identity, bilingual messaging (Burmese Unicode & English), and business offerings of [bossnbots.com](https://bossnbots.com/), this platform introduces critical UX and architectural upgrades:

| Feature / Area | Legacy bossnbots.com | BnB Upgraded Platform |
|---|---|---|
| **Onboarding Flow** | Mandatory upfront SMS OTP registration causing drop-offs; carrier blocks on Mytel | **Progressive 5-Phase Interactive Onboarding**: Merchants customize their store and test a live bot simulation *before* signing up |
| **Authentication** | High-friction login with sluggish session check spinners | **Blended Frictionless Auth**: 1-Click Google/Facebook SSO + Phone/Password fallback with instant state sync |
| **User Experience & UI** | Dark/moody aesthetic with static pages | **Autonomous Kinetic Precision**: Daylight-crisp design system with responsive glassmorphism and ambient glows |
| **Merchant Control Center** | Limited web visibility into bot actions | **Full Interactive Dashboard (`/dashboard`)**: Live chat monitoring, instant team takeover, order aggregation, and analytics |
| **Tech Stack** | Legacy web architecture | **Next.js 16 (App Router) + React 19 + Tailwind CSS v4** with server/client component splitting |

---

## 🌟 Core Features & Modules

### 1. Specialized AI Employee Personas
- **AI Employee for Product Sales (`Sell Products`):**
  - Tailored for fashion, beauty, electronics, retail, and minimarts.
  - Automatically answers questions on pricing, variants, sizing, stock availability, and delivery policies.
  - Collects customer orders (name, phone, delivery address, items, payment preference) and notifies the store owner for confirmation.
  - Supports 1-click human intervention/takeover anytime.
- **AI Employee for Service & Booking (`Promote Services`):**
  - Tailored for beauty salons, spas, clinics, education centers, automotive, real estate, and consulting.
  - Answers complex service package inquiries, explains procedures, and captures appointment bookings.
  - Performs intelligent customer qualification and triage before passing high-intent clients to staff.

### 2. 5-Phase Interactive Onboarding Overlay (`OnboardingOverlay.jsx`)
Launched directly from landing page CTAs without requiring an immediate account:
1. **Phase 1: Business Setup** — Choose archetype (Retail vs. Services), category chip, and business name.
2. **Phase 2: Pain Point Analysis** — Select real-world headaches (late-night lost leads, staff turnover, price misquotes, ad creative fatigue) with dynamic reassurance cards.
3. **Phase 3: Channel Integration** — Select target messaging platforms (Facebook Messenger, Telegram, Web Chatbot).
4. **Phase 4: Live Interactive Bot Simulation** — Hands-on 2-chip interactive chat sandbox where merchants experience real-time AI replies and human takeover controls.
5. **Phase 5: Progressive Claim & Auth** — Fast 1-click Google/Facebook account creation or phone/password registration to save the configured bot.

### 3. Real-Time Merchant Dashboard (`/dashboard`)
- Multi-channel inbox preview with live chat status (AI Active vs. Human Taken Over).
- Automated customer order collection queue and ticket escalation alerts.
- Operational telemetry: After-hours inquiries captured, response time savings, and inventory misquote prevention.
- Quick toggle controls for switching between AI auto-pilot and manual staff replies.

### 4. Bilingual Support & Localized Capabilities
- Native **Burmese Unicode** and **English** across all customer-facing interfaces, form helpers, and chatbot conversation scripts.
- Pre-integrated business context for Myanmar mobile payments (**KBZPay**, **WavePay**, **CB Pay**) and local logistics delivery patterns.

---

## 📦 Commit History & Roadmap

### ⏪ The Commit Before: Initial Foundation (`8cf1cc7`)
**Commit Message:** `feat: initialize BossNBots Next.js project with UI pages, components, and agent configurations`

This commit established the initial repository bootstrap and foundational architecture:
- **Project Scaffolding:** Configured Next.js 16 App Router, React 19, Tailwind CSS, ESLint, and Next.js configuration files (`next.config.mjs`, `jsconfig.json`).
- **Core Public Routes:**
  - `src/app/page.js` — Initial landing page layout with hero, feature breakdown, and pricing previews.
  - `src/app/book-a-demo/page.js` — Initial consultation and demo booking form.
  - `src/app/pricing/page.js` — Comprehensive 3-tier pricing matrix (Starter, Growth, Premium) and add-ons.
  - `src/app/contact/page.js` — Contact information, Yangon office location, and inquiry form.
- **Foundational Components:**
  - `src/components/Navbar.jsx` — Initial navigation header.
  - `src/components/Footer.jsx` — Enterprise footer with UTS Myanmar corporate background.
- **Design & Agent Specifications:**
  - `Design.md` — Autonomous Kinetic Precision design token specification (Teal `#0f766e`, Slate `#0f172a`, daylight surfaces).
  - `.agents/` — Initial agent personas (`sell-products-agent.md`, `promote-services-agent.md`, `onboarding-auth-agent.md`, `frontend-stitch-agent.md`).

---

### ⏩ The Immediate Upcoming Commit: Interactive Onboarding, Dashboard & Context Spec
**Commit Message:** `feat: implement interactive 5-phase onboarding, merchant dashboard, header redesign & business context specifications`

This commit introduces the full interactive application layer, persistent state management, and enterprise domain specifications:
- **Interactive Onboarding & Progressive Auth Engine:**
  - `src/components/OnboardingOverlay.jsx` — Complete 5-phase interactive modal overlay with dynamic archetype selector, pain point interview, channel selector, live 2-chip bot conversation simulation, and claim auth gate.
  - `src/context/OnboardingContext.jsx` — Application-wide React Context managing modal state, user session (`bnb_user`), business profile (`bnb_business_profile`), and cross-tab storage synchronization.
- **Header Redesign & Navigation Polish:**
  - `src/components/Navbar.jsx` — Dynamic authentication awareness (detects logged-in status, renders user avatar and profile dropdown), route suppression on dashboard (`/dashboard`), responsive mobile sheet, and direct onboarding triggers.
- **Merchant Management Dashboard:**
  - `src/app/dashboard/page.js` — Comprehensive management interface featuring live chat simulation, customer order handling, pain point resolution telemetry, bot takeover controls, and quick-action toolbars.
- **Dedicated AI Employees Showcase:**
  - `src/app/ai-employees/page.js` — Interactive showcase comparing Retail vs. Service bots, feature tabs, live copy generator, and sample bot scripts.
  - `src/app/ai-employee/page.js` — Redirect route resolving to `/ai-employees`.
- **Standalone Sign-In Experience:**
  - `src/app/sign-in/page.js` — Dedicated login portal with ambient teal glow, credential authentication, and 1-click social login options.
- **Landing Page & Demo Booking Refinements:**
  - `src/app/page.js` — Connected primary CTAs to `openOnboarding()`, added section scroll spy anchors (`#hero`, `#how-it-works`, `#solutions`, `#special-offer`).
  - `src/app/book-a-demo/page.js` — Form fields upgraded with bilingual support, channel checklists, and UTS Myanmar consultation booking flow.
- **Global Layout & Styling:**
  - `src/app/layout.js` — Wrapped root layout in `OnboardingProvider`, loaded local `IBMPlexSans` fonts, Google Fonts (`Noto Sans Myanmar`, `JetBrains Mono`), and Material Symbols.
  - `src/app/globals.css` — Added custom keyframe animations (`float-slow`, `glow-pulse`, `section-rise`), scrollbar styling, and color utilities.
- **Comprehensive Domain Documentation:**
  - `.agents/bnb_business_context.md` — 300+ line bilingual domain specification of Boss & Bots (business context, problem-solution matrix, 3-step workflow, personas, pricing, auth constraints, legal terms).
  - `.agents/interactive-onboarding-spec.md` — Detailed engineering specification for the 5-phase onboarding overlay and progressive authentication architecture.
  - `.agents/README.md` — Updated agent roster and reference links.

---

## 📂 Project Directory Structure

```text
BnB/
├── .agents/                               # Agent intelligence & domain specifications
│   ├── bnb_business_context.md            # Full bilingual business context & specs
│   ├── interactive-onboarding-spec.md     # 5-Phase onboarding engineering architecture
│   ├── sell-products-agent.md             # Retail bot persona & flow rules
│   ├── promote-services-agent.md          # Service & booking bot persona rules
│   ├── onboarding-auth-agent.md           # Progressive auth strategy guidelines
│   ├── frontend-stitch-agent.md           # Stitch UI design & styling rules
│   └── README.md                          # Agent index & roster
├── public/                                # Static SVG assets and icons
├── src/
│   ├── app/
│   │   ├── ai-employee/page.js            # Redirect route to /ai-employees
│   │   ├── ai-employees/page.js           # Dedicated AI Employee personas showcase
│   │   ├── book-a-demo/page.js            # Demo & free consultation booking
│   │   ├── contact/page.js                # Contact info & Yangon HQ details
│   │   ├── dashboard/page.js              # Merchant management dashboard
│   │   ├── fonts/                         # Local IBM Plex Sans font assets
│   │   ├── pricing/page.js                # Subscription plans & add-on pricing
│   │   ├── sign-in/page.js                # Standalone sign-in portal
│   │   ├── globals.css                    # Tailwind CSS v4, custom utility layers
│   │   ├── layout.js                      # Root layout with OnboardingProvider
│   │   └── page.js                        # Homepage / Landing page
│   ├── components/
│   │   ├── Footer.jsx                     # Enterprise footer with UTS Myanmar credentials
│   │   ├── Navbar.jsx                     # Dynamic auth-aware navigation header
│   │   └── OnboardingOverlay.jsx          # 5-Phase interactive onboarding modal
│   └── context/
│       └── OnboardingContext.jsx          # Global onboarding & session context
├── AGENTS.md                              # Next.js workspace agent instructions
├── Design.md                              # Stitch Autonomous Kinetic Precision tokens
├── package.json                           # Dependencies & scripts
└── README.md                              # Project documentation
```

---

## 🛠️ Tech Stack & Architecture

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router, Server & Client Components)
- **Library:** [React 19](https://react.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) with custom design tokens from Stitch
- **Icons:** [Lucide React](https://lucide.dev/) & [Google Material Symbols Outlined](https://fonts.google.com/icons)
- **Typography:**
  - Display / Headings: `Geist` & `IBM Plex Sans`
  - Body: `Inter`
  - Burmese Script: `Noto Sans Myanmar`
  - Code / Metrics: `JetBrains Mono`
- **State Management:** React Context (`OnboardingContext`) with `localStorage` session persistence and cross-window event synchronization.

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (version 18.18.0 or higher recommended)
- `npm`, `pnpm`, or `yarn`

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/CalebJawaHkun/BnB.git
   cd BnB
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Launch the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts
- `npm run dev` — Starts the Next.js development server with Turbopack.
- `npm run build` — Builds the optimized production application.
- `npm run start` — Starts the production Next.js server.
- `npm run lint` — Runs ESLint code quality checks.

---

## 💳 Pricing Structure (Overview)

| Plan | Price (MMK) | Billing | Target Audience | Highlights |
|---|---|---|---|---|
| **Starter** | 200,000 MMK | Monthly | Solo merchants & new shops | 1 Admin User, 1 Shop, 1 Inventory DB, Unlimited Social Channels |
| **Growth** | 400,000 MMK | Monthly | Growing SME retailers *(Most Popular)* | Unlimited Users, Unlimited Shops, 1 Inventory DB, Unlimited Social Channels |
| **Premium** | 700,000 MMK | Monthly | Multi-branch enterprises *(Best Value)* | Unlimited Users, Unlimited Shops, Unlimited Inventory DBs, Priority Support |

- **Mobile App Add-on:** Native iOS & Android E-Commerce Mobile App (`+200,000 MMK / month`).
- **Ad Studio Points:** Prepaid credits for AI ad copy and studio product image generation.

---

## 🏢 Corporate Background & Legal

- **Developer & Operator:** **UTS Myanmar (U-Tech Solutions)**
- **Headquarters:** Floor 8, No.(28), Corner of Bogyoke Road and Botahtaung Pagoda Road, Yangon, Myanmar
- **Contact:** `admin@utsmyanmar.com` · `bnb@utsmyanmar.com` | `09442508508` · `09442509509`
- **Original Source Reference:** [https://bossnbots.com/](https://bossnbots.com/)
