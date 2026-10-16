# Boss & Bots (BNB) — Complete UI/UX Theme & Design System Specification

> **Document Version:** 1.0.0  
> **Source Website:** [https://bossnbots.com](https://bossnbots.com)  
> **Extraction Date:** October 2026  
> **Target Audience:** Designers, Frontend Engineers, Full-Stack Developers rebuilding or extending the Boss & Bots platform.

---

## Executive Architecture Summary

Boss & Bots utilizes a three-tier unified design system constructed with **Tailwind CSS**, **Lucide Icons**, and custom design tokens:
1. **Public Marketing Tier (Light / Modern Enterprise):** High clarity, white/slate backgrounds (`#f8fafc`, `#ffffff`), deep teal/emerald accents (`#0f766e`, `#0d9488`), warm amber highlights (`#b45309`, `#fff8ef`), and layered micro-shadows.
2. **Authentication Tier (Futuristic Deep Space Dark):** Pitch obsidian stage (`#040912`), floating animated teal/cyan ambient orbs (`auth-orb-drift`), subtle SVG fractal noise texture, translucent slate input containers, and glowing cyan focus states.
3. **Admin & Dashboard Tier (`.admin-theme-root` Dual Mode):** High-density productivity workbench with Geist/Noto Sans Myanmar typography, 72px/228px collapsible navigation rail, compact 13px controls, custom data tables, and dedicated status badges.

---

## 1. Color Palette & Token System

### 1.1 Brand Core Colors
| Color Token | Hex Code | RGB | Role / Usage |
|---|---|---|---|
| **Teal Deep (Primary Accent)** | `#0f766e` | `rgb(15, 118, 110)` | Brand hero color, primary CTAs, active indicators, section highlights |
| **Teal Vibrant (Hover & Secondary)**| `#0d9488` | `rgb(13, 148, 136)` | Button hover states, gradient stops, secondary links |
| **Teal Darkest (Active State)** | `#115e59` | `rgb(17, 94, 89)` | Active button states, deep borders |
| **Teal Soft (Surface Tint)** | `#f0fdfa` | `rgb(240, 253, 250)` | Chip backgrounds, badge fills, highlight container fills |
| **Teal Light Border** | `#ccfbf1` | `rgb(204, 251, 241)` | Badge borders, card hover borders, chat accents |
| **Teal Mint Accent** | `#2dd4bf` | `rgb(45, 212, 191)` | Dark mode primary accent, active sidebar nav indicator |
| **Cyan Glow (Auth Accent)** | `#22d3ee` | `rgb(34, 211, 238)` | Auth focus ring, orb glows, active step badges |
| **Amber Warning / Value Accent** | `#b45309` | `rgb(180, 83, 9)` | Metric headers, urgency badges, special offer highlights |
| **Amber Warm Surface** | `#fff8ef` | `rgb(255, 248, 239)` | Hero stat card gradient start, soft alert backgrounds |
| **Amber Dark (Headings)** | `#451a03` | `rgb(69, 26, 3)` | Stat card numeric labels, high-contrast warm headers |
| **Rose / Danger** | `#e11d48` | `rgb(225, 29, 72)` | Error badges, destructive actions, problem indicators |
| **Red Deep Dot** | `#7f1d1d` | `rgb(127, 29, 29)` | Problem card indicator dot |

### 1.2 Neutral & Background Scale
| Token | Hex / Value | RGB | Usage |
|---|---|---|---|
| **Canvas Background** | `#f8fafc` | `rgb(248, 250, 252)` | Public page background, dashboard canvas |
| **Surface White** | `#ffffff` | `rgb(255, 255, 255)` | Cards, dialog modals, forms, nav bar |
| **Surface Translucent** | `rgba(255, 255, 255, 0.8)` | — | Sticky navbar with `backdrop-blur-lg` |
| **Border Soft** | `#e2e8f0` | `rgb(226, 232, 240)` | Card dividers, input outlines, table borders |
| **Border Ultra-Light** | `#f1f5f9` | `rgb(241, 245, 249)` | Subtle card borders, internal divider lines |
| **Ink / Slate 900 (Headings)** | `#0f172a` | `rgb(15, 23, 42)` | Primary headings (H1, H2, H3), bold body text |
| **Slate 700 (Body Text)** | `#334155` | `rgb(51, 65, 85)` | Standard paragraph body, descriptions |
| **Slate 500 (Muted Text)** | `#475569` / `#64748b` | `rgb(71, 85, 105)` | Secondary subtitles, timestamps, placeholder text |
| **Slate 950 (Footer Canvas)** | `#020617` | `rgb(2, 6, 23)` | Main footer background, dark button surfaces |
| **Auth Stage Canvas** | `#040912` | `rgb(4, 9, 18)` | Fullscreen auth stage background |
| **Auth Panel Canvas** | `#060b16` | `rgb(6, 11, 22)` | Registration & login form card panel |

### 1.3 CSS Root Custom Properties
```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --card: 0 0% 100%;
  --card-foreground: 222.2 84% 4.9%;
  --popover: 0 0% 100%;
  --popover-foreground: 222.2 84% 4.9%;
  --primary: 222.2 47.4% 11.2%;
  --primary-foreground: 210 40% 98%;
  --secondary: 210 40% 96.1%;
  --secondary-foreground: 222.2 47.4% 11.2%;
  --muted: 210 40% 96.1%;
  --muted-foreground: 215.4 16.3% 46.9%;
  --accent: 210 40% 96.1%;
  --accent-foreground: 222.2 47.4% 11.2%;
  --destructive: 0 84.2% 60.2%;
  --destructive-foreground: 210 40% 98%;
  --border: 214.3 31.8% 91.4%;
  --input: 214.3 31.8% 91.4%;
  --ring: 222.2 84% 4.9%;
  --radius: 0.75rem;

  /* Custom Brand Tokens */
  --c-bg: #f8fafc;
  --c-surface: #ffffff;
  --c-line: #e2e8f0;
  --c-text: #0f172a;
  --c-accent: #0f766e;
  --page-width: min(92vw, 116rem);
  --page-gutter: clamp(1rem, 1.6vw, 2rem);
}

/* Admin Theme Light Tokens */
.admin-theme-root {
  --admin-canvas: #e9edf1;
  --admin-surface: #ffffff;
  --admin-ink: #12171c;
  --admin-muted: #5b6670;
  --admin-muted-bg: #eef1f4;
  --admin-border: #d8dee5;
  --admin-teal: #0f766e;
  --admin-teal-hover: #0d6660;
  --admin-teal-soft: rgba(15, 118, 110, .1);
  --admin-signal: #c2410c;
  --admin-signal-soft: rgba(194, 65, 12, .12);
  --admin-focus-ring: rgba(15, 118, 110, .22);
  --admin-rail: #191c22;
  --admin-rail-ink: #f2f4f6;
  --admin-rail-muted: #9aa1ab;
  --admin-rail-hover: rgba(255, 255, 255, .07);
  --admin-rail-active: #2dd4bf;
  --admin-rail-width: 72px;
  --admin-rail-width-open: 228px;
}

/* Admin Theme Dark Tokens */
.admin-theme-root.admin-theme-dark {
  --admin-canvas: #0d1117;
  --admin-surface: #161b22;
  --admin-ink: #e6edf3;
  --admin-muted: #8b949e;
  --admin-muted-bg: #21262d;
  --admin-border: #30363d;
  --admin-teal: #2dd4bf;
  --admin-teal-hover: #5eead4;
  --admin-teal-soft: rgba(45, 212, 191, .12);
  --admin-signal: #fb923c;
  --admin-signal-soft: rgba(251, 146, 60, .15);
  --admin-focus-ring: rgba(45, 212, 191, .28);
  --admin-rail: #101318;
}
```

---

## 2. Typography & Font Hierarchy

### 2.1 Font Families
- **Primary Body & Burmese Text:** `"Noto Sans Myanmar", Poppins, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif`
- **Primary English UI & Headings:** `Inter, ui-sans-serif, system-ui`
- **Dashboard / Admin Family:** `"Geist Variable", "Noto Sans Myanmar", ui-sans-serif, system-ui, sans-serif`
- **Display Accents & Serif Flair:** `Fraunces`, `Manrope`
- **Monospace / Code / Timestamps:** `IBM Plex Mono`

### 2.2 Heading & Text Hierarchy
| Hierarchy Level | Class Name / Styling | Size (rem / px) | Weight | Line Height | Usage |
|---|---|---|---|---|---|
| **H1 (Hero Page Title)** | `.page-title-tight` | `1.55rem - 1.85rem` (~26-30px) | 800 (Extrabold) | 1.38 (36px) | Hero main heading |
| **H2 (Section Header)** | `.section-title` | `1.38rem - 1.72rem` (~22-28px) | 800 (Extrabold) | 1.45 - 1.52 | Section headings ("Boss & Bots အလုပ်လုပ်ပုံ") |
| **H3 (Card Title)** | `.card-title` | `1.06rem - 1.14rem` (~17-18px) | 700 - 800 (Bold) | 1.5 (24px) | Feature title, Step title |
| **H4 (Sub-Card / Section)**| — | `1.00rem - 1.15rem` (~16-18px) | 800 (Extrabold) | 1.4 (26px) | Footer brand title, pricing subheadings |
| **H5 (Eyebrow / Category)**| `uppercase tracking-[0.2em]`| `0.68rem - 0.75rem` (11-12px) | 700 (Bold) | 1.2 | Column titles ("EXPLORE", "TAKE ACTION") |
| **Body (Standard)** | `text-slate-700` | `0.9375rem` (15px) | 400 - 500 | 1.68 (25px) | Main descriptions, body copy |
| **Body (Muted)** | `.body-copy-muted` | `0.95rem` (~14.5px) | 400 (Regular) | 1.75rem (28px) | Subtitles, section explanatory copy |
| **Support Copy / Small** | `text-[13px]` | `0.8125rem` (13px) | 400 - 500 | 1.4 | Form inputs, helper labels, table cells |
| **Eyebrow / Badge Chip** | `.label-chip` | `0.6875rem` (11px) | 600 - 700 | 1.0 (tracking 0.12em-0.18em) | Metric tags, step indicators, category chips |

---

## 3. Layout & Structure

### 3.1 Grid, Flex & Container Scales
- **Max Page Width:** `max-w-7xl` (`1280px` / `80rem`), centered with `mx-auto`.
- **Text Restraint Widths:**
  - `max-w-4xl` (`896px`): Hero title centered.
  - `max-w-3xl` (`768px`): Hero introduction paragraph.
  - `max-w-2xl` (`672px`): Section headers and subtitles.
  - `max-w-xl` (`576px`): Compact card descriptions.
  - `max-w-md` (`448px`): Form panels.
- **Section Vertical Padding:**
  - Mobile: `py-16 px-4`
  - Tablet: `sm:py-20 sm:px-8`
  - Desktop: `md:py-24 md:px-12`

### 3.2 Key Section Structures
1. **Header / Navbar:**
   - Sticky top bar: `sticky top-0 z-40 border-b border-slate-200/60 bg-white/80 backdrop-blur-lg`
   - Active link indicator: `text-teal-700 after:absolute after:bottom-0 after:left-3 after:right-3 after:h-[2px] after:rounded-full after:bg-teal-600`
   - Navigation links: `text-[13px] font-medium text-slate-600 hover:text-slate-900`
   - Mobile: Hamburger toggle (`lg:hidden`) opening mobile drawer.
2. **Hero Section (`#what-it-does`):**
   - Left column: H1 title, dual bilingual paragraphs, CTA button (`Request Demo`), 3x Stat Metric Cards.
   - Right column: Embedded branded video container (`relative hidden lg:block overflow-hidden rounded-[1.5rem]`).
3. **Three-Step Workflow (`#how-it-works`):**
   - 3-column horizontal grid (`grid md:grid-cols-3 gap-6`).
   - Cards feature step indicator badge (`STEP 01`), step graphic asset (`240px`), heading H3, and two bullet points with checkmarks.
4. **Advantages Section (`#advantages`):**
   - 4-column feature grid (`grid gap-4 sm:grid-cols-2 xl:grid-cols-4`).
   - Cards feature rounded teal icon container (`h-10 w-10 bg-teal-50 text-teal-700`) + title + description.
5. **Why Choose Us (`#why-choose-us`):**
   - Split layout: `grid max-w-7xl gap-4 xl:grid-cols-[minmax(0,1.05fr)_minmax(300px,0.88fr)]`.
   - Left: Problem-versus-Solution card stack (`bg-white/70 rounded-[1.2rem]`, red problem indicator dot + teal solution tag).
   - Right: Aside illustration card with `chatbot_illustration.png`.
6. **Special Offer Banner (`#special-offer`):**
   - Dual column container with background glow, benefit bullet checklist, and digital device demonstration image.
7. **Footer (`contentinfo`):**
   - Deep slate canvas: `bg-slate-950 text-slate-200 border-t border-slate-800`.
   - 4-column responsive grid: Brand summary & UTS Myanmar affiliation, Explore Links, Take Action CTAs, and Contact Information (Email, Phone, Physical Yangon Address).

---

## 4. Component Styles

### 4.1 Buttons
- **Primary Marketing Button:**
  - Class: `inline-flex items-center rounded-lg border border-teal-700 bg-teal-700 px-4 py-2 text-sm font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-teal-800`
  - Shadow (large variant): `shadow-[0_16px_36px_-18px_rgba(15,118,110,0.9)]`
  - Border-radius: `11.16px` (`rounded-xl` or `rounded-lg`)
- **Navbar Login Button:**
  - Class: `inline-flex items-center justify-center gap-2 rounded-lg bg-teal-600 px-4 py-2 text-[13px] font-semibold text-white shadow-sm shadow-teal-200 hover:bg-teal-700`
- **Auth Primary Gradient Button (`.auth-primary-button`):**
  - Gradient: `linear-gradient(135deg, rgb(15, 118, 110), rgb(13, 148, 136) 45%, rgb(8, 145, 178))`
  - Shimmer effect: `::after` overlay translating across the button on hover.
  - Hover: `transform: translateY(-1px); box-shadow: rgba(13, 148, 136, 0.6) 0px 10px 32px -6px, rgba(255, 255, 255, 0.14) 0px 1px inset;`
  - Disabled: `opacity: 0.5; cursor: not-allowed; transform: none; box-shadow: none;`
- **Admin Button System:**
  - `.admin-btn-primary`: `height: 2.25rem; border-radius: 0.5rem; bg: var(--admin-teal); color: #fff; font-size: 13px; font-weight: 600;`
  - `.admin-btn-secondary`: `border: 1px solid var(--admin-border); bg: var(--admin-surface); color: var(--admin-ink); hover:bg-slate-100;`
  - `.admin-btn-ghost`: `bg: transparent; color: var(--admin-muted); hover:text-slate-900;`
  - `.admin-btn-danger`: `bg: rgb(225, 29, 72); hover:bg-rose-700; color: #fff;`
- **Chatbot Floating Launcher Button:**
  - Class: `rounded-full bg-slate-900 px-4 py-3 text-sm font-semibold text-white shadow-lg hover:-translate-y-0.5 hover:bg-slate-700`
- **Chatbot Escalation ("လူနှင့်စကားပြောမည်") Button:**
  - Class: `rounded-full border border-amber-200/80 bg-amber-200 px-4 py-2 text-sm font-semibold text-amber-950 shadow-[0_12px_24px_-18px_rgba(15,23,42,0.6)] hover:bg-amber-100`

### 4.2 Cards
- **Hero Stat Card (`.hero-stat-card`):**
  - Background: `linear-gradient(155deg, #fff8ef, #ffffff 78%)`
  - Border: `1px solid rgba(254, 243, 199, 0.8)` (amber-100)
  - Shadow: `rgba(180, 83, 9, 0.2) 0px 12px 28px -20px`
  - Border-radius: `1.25rem` (20px)
- **Feature Card (Advantages):**
  - Background: `rgba(255, 255, 255, 0.8)`
  - Border: `1px solid #f1f5f9` (hover: `#99f6e4` teal-200)
  - Shadow: `hover:shadow-[0_8px_24px_-12px_rgba(15,118,110,0.18)]`
  - Border-radius: `0.75rem` (12px)
- **Comparison Problem Card:**
  - Background: `rgba(255, 255, 255, 0.7)`
  - Border-radius: `1.2rem`
  - Shadow: `shadow-[0_14px_28px_-30px_rgba(15,23,42,0.25)]`
- **Pricing Card (AI Employees):**
  - Background: `#ffffff`
  - Border: `1px solid rgba(226, 232, 240, 0.8)`
  - Border-radius: `1.5rem` - `2rem` (`rounded-3xl`)
  - Shadow: `shadow-sm`

### 4.3 Forms & Inputs
- **Public Demo Form Input:**
  - Class: `w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-[13px] text-slate-900 placeholder:text-slate-400 outline-none transition duration-200 focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10`
  - Textarea: same styling + `min-h-[6.5rem] resize-y`
  - Container panel: `rounded-[1.6rem] border border-slate-200/90 bg-white p-5 sm:p-7 shadow-[0_28px_70px_-48px_rgba(15,23,42,0.45)]`
- **Auth Form Input (`.auth-input`):**
  - Background: `rgba(15, 23, 42, 0.55)` (dark translucent)
  - Border: `1px solid rgba(148, 163, 184, 0.18)`
  - Color: `#f1f5f9`
  - Border-radius: `0.95rem` (15px)
  - Padding: `0.95rem 1rem` (with icon: `padding-left: 2.85rem`)
  - Focus: `border-color: rgba(34, 211, 238, 0.55); background: rgba(15, 23, 42, 0.8); box-shadow: 0 0 0 3px rgba(34, 211, 238, 0.1), 0 0 24px -8px rgba(34, 211, 238, 0.35);`
- **Admin Form Input (`.admin-input`):**
  - Height: `2.25rem` (36px)
  - Border: `1px solid var(--admin-border, #d8dee5)`
  - Radius: `0.5rem` (8px)
  - Focus: `border-color: var(--admin-teal); box-shadow: 0 0 0 3px var(--admin-focus-ring);`

### 4.4 Badges & Chips
- **Label Chip (`.label-chip`):**
  - `inline-flex rounded-full border border-teal-200 bg-teal-50 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-teal-700`
- **Auth Brand Chip (`.auth-brand-chip`):**
  - `inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-cyan-200 backdrop-blur-md`
  - Features pulsating cyan dot: `.auth-brand-chip-dot` (`animation: auth-pulse-dot 2.2s infinite`).
- **Chatbot Quick-Reply Prompt Chip:**
  - `rounded-full border border-teal-300 bg-teal-100 px-2.5 py-1.5 text-[11px] font-semibold text-teal-900 hover:border-teal-400 hover:bg-teal-200`

---

## 5. Visual Effects & Assets

### 5.1 Keyframe Animations
- **`@keyframes pageFade`:** Smooth page entry opacity fade (`0.42s ease`).
- **`@keyframes fadeUp` / `.stagger-in`:** Staggered vertical slide-up (`translateY(10px) -> translateY(0)` with 80ms, 160ms, 240ms delays).
- **`@keyframes auth-orb-drift`:** Organic floating motion of ambient background glows (`14s` and `18s` infinite ease-in-out).
- **`@keyframes auth-pulse-dot`:** Expanding radar pulse glow on status chips (`0 0 0 0 rgba(34,211,238,0.4)` -> `0 0 0 8px transparent`).
- **`@keyframes shimmer`:** Shimmering gradient sheen sweeping across primary CTA buttons.
- **`@keyframes widgetPop`:** Chatbot popover modal entrance scale & fade (`scale(0.95)` -> `scale(1)`).

### 5.2 Section Divider
```css
.section-divider {
  background-image: linear-gradient(90deg, rgba(148, 163, 184, 0), rgba(148, 163, 184, 0.55), rgba(148, 163, 184, 0));
  height: 1px;
}
```

### 5.3 Media Assets & Graphics
| Asset Name | URL / Path | Resolution / Format | Usage |
|---|---|---|---|
| **Official Logo** | `/bluish%20green%20no%20bg.svg` | Scalable Vector SVG | Navbar & Auth Header |
| **Hero Demo Video** | `/BNB%20-%2001.mp4` | MP4 Video (H.264) | Hero right-hand presentation |
| **Step 1 Illustration** | `/step1_data_import.png` | PNG (240x240 max) | Data Import & Training step card |
| **Step 2 Illustration** | `/step2_channel_integration.png`| PNG (240x240 max) | Channel Integration step card |
| **Step 3 Illustration** | `/step3_manage_monitor.png` | PNG (240x240 max) | Manage & Monitor step card |
| **Chatbot Illustration** | `/chatbot_illustration.png` | PNG (Cover) | Why Choose Us right column card |
| **Digital Device Demo** | `/demo-digital-device.jpg` | High-res JPG | Special Offer banner backdrop |

---

## 6. Tone of Voice & UX Flow

### 6.1 Brand Voice & Microcopy
- **Tone:** Authoritative yet approachable, reassuring, tailored to Burmese SMEs and online shop owners who want automation without technical friction.
- **Bilingual Strategy:** Dual Burmese primary narrative accompanied by familiar English tech terms (*"SOP"*, *"Bulk Data Import"*, *"Ticket Raising System"*, *"Ad Studio"*, *"Digital Worker"*).
- **Signature Tagline:**
  > *"The boss runs the business. Bots handle the work."*  
  > *"Customer enquiry များကို နားရက်မရှိ တုံ့ပြန်ပေးနိုင်သော AI ဝန်ထမ်းများနဲ့ သင့်လုပ်ငန်းကို စီမံပါ။"*

### 6.2 Primary Conversion Funnel & UX Flow
1. **Awareness (Landing Hero):** Instantly clarifies that Boss & Bots is not merely a chatbot, but a managed AI business workforce ("Digital ဝန်ထမ်းများ").
2. **Confidence (3-Step Onboarding):** Explains that setting up requires no coding skills: Data Import -> Channel Integration -> Owner Control.
3. **Objection Handling (Why Choose Us):** Side-by-side contrast of common pain points (staff turnover, repetitive onboarding, missed leads, pricing errors) versus the Boss & Bots AI solution.
4. **Action (Free Consulting & Demo):** Generous introductory offer (5 businesses per week receive free business consulting + demo booking).
5. **Self-Service Support (Interactive AI Chatbot):** Available 24/7 on the bottom right of all public pages, allowing visitors to ask questions in Burmese or English, test prompt chips, or escalate directly to human consultants.

### 6.3 Responsive Breakpoints
- **Mobile (`< 640px`):** Full-width stacked layout, hamburger navigation menu, fullscreen chatbot window (`fixed inset-0`).
- **Tablet (`sm: 640px` - `md: 768px`):** 2-column cards, floating chatbot dialog (`sm:bottom-4 sm:right-4 sm:w-[430px] sm:h-[640px]`).
- **Desktop (`lg: 1024px`):** Full horizontal navigation header with sticky blur, video display in hero section.
- **Wide Screens (`xl: 1280px`):** 4-column advantage cards grid, split comparison grid.
