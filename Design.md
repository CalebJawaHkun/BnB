# Boss & Bots (BnB) — Frontend Design System Specification
**Extracted from Stitch Project:** `BnB` (`projects/113021173982554113`)  
**Design Theme:** Autonomous Kinetic Precision  
**Version:** 1.0.0 (October 2026)  
**Primary Tech Stack:** Next.js (Vanilla JS + App Router), Tailwind CSS, Lucide Icons

---

## 1. Brand & Aesthetic Vision

The Boss & Bots design system embodies an ultra-refined, high-precision B2B SaaS aesthetic rooted in contemporary product engineering. It merges the surgical discipline of developer tools with executive polish, evoking uncompromising reliability, velocity, and quiet technological power.

### Aesthetic Foundation
- **Modern Minimalist & Engineered Glass:** Crisp daylight-filled backgrounds (`#FFFFFF`, `#F8F9FF`) overlaid with hairline boundaries, micro-grids, and subtle depth transitions.
- **Atmosphere:** Clean, calm, and deliberate. Interfaces feel lightweight yet structural, avoiding unnecessary skeuomorphism while leveraging optical softness through curated ambient shadows and generous card geometry.
- **Tone:** Technical, authoritative, forward-looking, frictionless.
- **Tagline:** *"The boss runs the business. Bots handle the work."*

---

## 2. Design Tokens & Palette Architecture

### 2.1 Core Color Palette
| Token Name | Hex Code | Tailwind / Role | Usage |
|---|---|---|---|
| **Primary Brand** | `#005c55` / `#0f766e` | `teal-700` / `brand-teal` | Main brand color, active highlights, key CTAs, indicators |
| **Primary Container** | `#0f766e` | `brand-teal-container` | Featured card header fills, high-contrast brand banners |
| **Primary Fixed / Dim** | `#80d5cb` / `#9cf2e8` | `teal-200` | Subtle teal accents, soft pill badges, border highlights |
| **Teal Surface Tint** | `#f0fdfa` | `teal-50` | Badge backgrounds, highlight container fills, card tint |
| **Secondary Lead** | `#0f172a` | `slate-900` | High-contrast primary CTA buttons, dominant titles |
| **Secondary Muted** | `#565e74` / `#475569`| `slate-600` | Secondary copy, metadata, descriptive text |
| **Tertiary / Amber Accent** | `#f59e0b` / `#734700`| `amber-500` | Bot status alerts, urgency badges, special offer highlights |
| **Surface Canvas** | `#f8f9ff` | `brand-canvas` | Main page canvas background tone |
| **Surface Card** | `#ffffff` | `white` | Standard card surfaces, input wells, dialogs |
| **Surface Container Low** | `#eff4ff` | `slate-100` | Secondary panels, pill Wells, table header fills |
| **Border Soft** | `#e2e8f0` | `slate-200` | Standard structural borders, card outlines |
| **Border Ultra-Light** | `#f1f5f9` | `slate-100` | Subtle component hairlines, ambient dividers |

### 2.2 Typography Scale
- **Display Hero:** `Geist`, 64px / 72px line-height, SemiBold (600), -0.035em letter-spacing (Mobile: 36px / 44px)
- **Headline XL:** `Geist`, 44px / 52px line-height, SemiBold (600), -0.03em letter-spacing (Mobile: 30px / 38px)
- **Headline LG:** `Geist`, 32px / 40px line-height, SemiBold (600), -0.025em letter-spacing (Mobile: 24px / 32px)
- **Headline MD:** `Geist`, 22px / 30px line-height, Medium (500), -0.015em letter-spacing
- **Headline SM:** `Geist`, 18px / 26px line-height, Medium (500), -0.01em letter-spacing
- **Body LG:** `Inter`, 17px / 28px line-height, Regular (400), -0.005em letter-spacing
- **Body MD:** `Inter`, 15px / 24px line-height, Regular (400), 0em letter-spacing
- **Body SM:** `Inter`, 13px / 20px line-height, Regular (400), 0.005em letter-spacing
- **Label MD / Badge:** `Geist`, 14px / 20px line-height, Medium (500), -0.01em letter-spacing
- **Label SM:** `Geist`, 12px / 16px line-height, Medium (500), 0.01em letter-spacing
- **Code / Monospace:** `JetBrains Mono`, 13px / 18px line-height, Regular (400)
- **Burmese Typography:** `Noto Sans Myanmar` for localized bilingual copy, rendered at matching line-heights (1.5–1.65).

### 2.3 Layout, Spacing & Elevation
- **Container Max-Width:** 1280px max desktop viewport, centered with responsive horizontal padding.
- **Grid System:** 12-column desktop grid (`gutter: 1.5rem`), transitioning to 6-column on tablet, and single-column on mobile (`gutter: 1rem`).
- **Corner Radii:**
  - Content Cards: `rounded-2xl` (16px) to `rounded-3xl` (24px)
  - Inputs & Controls: `rounded-xl` (12px)
  - Buttons & Badges: `rounded-full` (9999px) or `rounded-xl` (12px)
- **Atmospheric Shadows:**
  - **Layer 1 (Card Default):** `0 1px 3px 0 rgba(0, 0, 0, 0.02), 0 4px 12px -2px rgba(15, 23, 42, 0.03)` with `border: 1px solid rgba(15, 23, 42, 0.06)`
  - **Layer 2 (Elevated Card):** `0 12px 32px -4px rgba(15, 23, 42, 0.06), 0 4px 12px -2px rgba(15, 23, 42, 0.03)` with `border: 1px solid rgba(15, 23, 42, 0.08)`
  - **Layer 3 (Modals & Flyouts):** `0 24px 48px -12px rgba(15, 23, 42, 0.12), 0 8px 16px -4px rgba(15, 23, 42, 0.04)`

---

## 3. UI Component Specifications

### 3.1 Buttons
- **Primary Action (Vercel-inspired Solid):**
  - Background: `#0F172A` (Charcoal Slate), Text: `#FFFFFF`
  - Border: `1px solid #0F172A`, Radius: `rounded-full` or `rounded-xl`
  - Hover: Background `#1E293B`, subtle translateY (`-1px`), shadow expansion
- **Brand Teal Action:**
  - Background: `#0F766E` (Deep Teal), Text: `#FFFFFF`
  - Hover: Background `#0D9488`, shadow: `0 4px 14px rgba(15, 118, 110, 0.25)`
- **Secondary Action (Ghost / Border):**
  - Background: `#FFFFFF`, Text: `#0F172A`
  - Border: `1px solid #E2E8F0`, Radius matches Primary
  - Hover: Background `#F8FAFC`, Border: `#CBD5E1`

### 3.2 Cards & Bento Modules
- **Standard Feature Card:** Pure white background, `rounded-2xl`, `border: 1px solid #F1F5F9`, padded with `1.5rem` to `2rem`.
- **Hero Showcase Card:** White background with subtle teal ambient gradient wash (`from-teal-50/40 to-transparent`), `rounded-3xl`, `border: 1px solid #E2E8F0`.
- **Metric Pill / Status Chip:** `rounded-full`, height 24–28px, font Geist 12px font-medium.
  - *Active Bot Status:* Background `rgba(15, 118, 110, 0.08)`, text `#0F766E`, border `1px solid rgba(15, 118, 110, 0.15)`.
  - *Urgency / Amber Notice:* Background `rgba(245, 158, 11, 0.08)`, text `#D97706`, border `1px solid rgba(245, 158, 11, 0.2)`.

### 3.3 Kinetic Animations (Stitch Specs)
- **Page Entrance Fade (`.animate-page-fade`):**
  - Keyframes: `opacity: 0, translateY(8px)` -> `opacity: 1, translateY(0)`
  - Timing: `0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards`
- **Section Entrance Rise (`.animate-section-rise`):**
  - Keyframes: `opacity: 0, translateY(16px)` -> `opacity: 1, translateY(0)`
  - Timing: `0.7s cubic-bezier(0.16, 1, 0.3, 1) both`
- **Accessibility:** Respects `@media (prefers-reduced-motion: reduce)`

---

## 4. Target Screen Blueprints (Stitch Screens)

### 4.1 Landing Page (`/`)
- **Stitch Screen ID:** `b7be7ad08e914736b8b5bfa7bca26b73`
- **Sections:**
  1. **Sticky Top Navbar:** BnB Logo, Navigation links (`AI Employees`, `Pricing`, `Contact`), and action button cluster: `[Sign In]` beside `[Book a Demo]` (Hotline removed from header per Stitch specification; Hotline phone numbers remain housed within the Contact section and Footer).
  2. **Hero Section:**
     - High-impact headline: *"The boss runs the business. Bots handle the work."* (Burmese subhead: *ဆိုင်ရှင်က စီးပွားရေးကို ဦးဆောင်၊ Bot များက အလုပ်များကို လုပ်ဆောင်*)
     - Dual CTA: "Book Free Consultation" (Teal) & "View Pricing Plans" (Secondary Slate).
     - Live KPI metric badges: "24/7 Response Time", "Zero Missed Leads", "1-Click Setup".
  3. **Problem vs. Solution Bento Grid:**
     - 4 core business pain points & AI solutions:
       - Problem 1: Sales staff turnover -> AI preserves SOP & product catalog.
       - Problem 2: Repetitive training -> Setup once, consistent workflow.
       - Problem 3: Missed inquiries -> 24/7 instant auto-replies across FB & Telegram.
       - Problem 4: Pricing/stock misquotes -> Live synchronized inventory & specifications.
  4. **3-Step Workflow:**
     - Step 1: Data Import & Training (Smart bulk catalog upload via Excel/CSV).
     - Step 2: Channel Integration (One-click Telegram & Facebook Messenger connect).
     - Step 3: Manage & Monitor (Live dashboard, real-time analytics, human handover).
  5. **Specialized AI Employee Personas:**
     - *AI Employee for Sell Products:* E-commerce & retail order intake, product recommendations, catalog inquiry handler.
     - *AI Employee for Promote Services:* Service package explanation, appointment/booking intake, qualification.
  6. **Auxiliary Features:** Ad Studio & Studio-Style Image Generator, Live Bilingual Chatbot Widget with human escalation button.
  7. **Corporate Credibility:** Powered by UTS Myanmar (Fintech partner to CB Bank, KBZ Bank, A Bank, Yoma Bank, Sunmi since 2017).

### 4.2 Pricing Page (`/pricing`)
- **Stitch Screen ID:** `e877ba31d28a439da075524058a078cc`
- **Sections:**
  1. **Hero Header:** Simple, transparent pricing for Myanmar businesses.
  2. **3 Subscription Cards:**
     - **Starter Plan (200,000 MMK / month):**
       - 1 User Admin, 1 Inventory Database, 1 Shop, Unlimited Social Channels (Telegram & FB).
     - **Growth Plan (400,000 MMK / month) [Most Popular / Featured]:**
       - Unlimited User Admins & Multi-Users, 1 Inventory Database, Unlimited Shops, Unlimited Social Channels.
       - Highlighting badge: "Most Popular", Teal accent border.
     - **Premium Plan (700,000 MMK / month) [Best Value]:**
       - Unlimited User Admins & Multi-Users, Unlimited Inventory Databases, Unlimited Shops, Unlimited Social Channels.
  3. **Add-On Options:**
     - *Native E-Commerce Mobile App (iOS & Android):* +200,000 MMK / month.
     - *Ad Studio Point System:* Prepaid credit pack for generating studio product shots and localized marketing copy.
  4. **Enterprise Trust Guarantee:** Local mobile banking support (KBZPay, CB Pay, WavePay), bank transfer verification, zero lock-in contract.
  5. **Pricing FAQ Section:** Clear breakdown of billing cycles, channel limits, and upgrade flows.

### 4.3 Contact Page (`/contact`)
- **Stitch Screen ID:** `bff22a5635e245b59fb214d48955db15`
- **Sections:**
  1. **Header & Context:** Direct human access to the Boss & Bots deployment team.
  2. **Contact Detail Cards:**
     - **Headquarters Address:** Floor 8, No.(28), Corner of Bogyoke Road & Botahtaung Pagoda Road, Yangon, Myanmar.
     - **Email Communications:** `admin@utsmyanmar.com` / `bnb@utsmyanmar.com`.
     - **Hotline Phone Numbers:** `09442508508` / `09442509509`.
     - **Direct Messaging:** Telegram channel & Facebook Messenger links.
  3. **Interactive General Inquiry Form:** Name, Business Name, Phone Number, Inquired Subject, and Detailed Message.
  4. **Operating Hours & SLA Notice:** Consultations scheduled within 24 business hours.

### 4.4 Book A Demo Page (`/book-a-demo`)
- **Stitch Screen ID:** `53c88caee9d941549e4c1c5a98d9735d`
- **Sections:**
  1. **Hero Pitch:** *"Try Before You Invest"* (ငွေစိုက်မထုတ်ခင် အရင်ကြည့်ပါ) — Limited to 5 Free Business Consultation Slots per week.
  2. **Consultation Intake Form:**
     - Business Name (e.g., Boss Fashion House)
     - Contact Person Name (e.g., U Mg Mg)
     - Contact Phone Number (+95 9...)
     - Email Address (Optional)
     - Business Type (Online Shop, Beauty Salon, Clinic, Retail, Service, etc.)
     - Sample Products / Services (e.g., Korean Dress, Spa packages)
     - Additional Notes (Daily inquiry volume, current platforms, team size)
  3. **Consultation Timeline Guarantee:**
     - Step 1: Submit intake form.
     - Step 2: Dedicated consultant outreach within 24 hours with sample catalog demo.
     - Step 3: Customized bot setup & staff onboarding by BnB engineers.
