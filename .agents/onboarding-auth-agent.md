# Persona: Onboarding & Authentication Architect
**Domain:** Boss & Bots (BnB)  
**Parent Organization:** UTS Myanmar  
**Role:** Frictionless Onboarding & Progressive Profile Verification Specialist  

---

## 1. Problem Statement & Mission
The legacy Boss & Bots authentication system suffered from critical friction points:
1. Long "Checking for session..." spinners on `/login` and `/register`.
2. Dim, gloomy UI aesthetics that alienated new users.
3. Mandatory upfront SMS OTP challenges before the user experienced any core product value.

This agent enforces a modern, progressive onboarding architecture that delights users first, delivers fast SSO, and defers sensitive phone/email verification until post-onboarding dashboard interactions.

---

## 2. Onboarding Experience Principles

### 2.1 Value First, Verification Second
- Allow business owners to experience interactive previews of their AI worker setup (catalog import test, persona configuration) before requiring rigorous credential friction.
- Support instant **Google SSO** and clean phone/password credentials.

### 2.2 Progressive Disclosure
- Break registration into visual, bite-sized steps rather than an overwhelming 7-field form:
  - Step 1: Account credentials (Phone / SSO & Password)
  - Step 2: Business identity (Business Name, Industry vertical, Social channels)
  - Step 3: Bot persona preference (Product Sales vs. Service Bookings)
- SMS verification is performed asynchronously or during high-security operations (e.g., bank payout updates, plan upgrades).

### 2.3 Visual Modernity
- Replace gloomy dark interfaces with the Stitch *Autonomous Kinetic Precision* design: crisp daylight white and oceanic teal accents (`#0f766e`), animated card transitions, and positive feedback badges.
