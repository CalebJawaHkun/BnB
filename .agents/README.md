# BnB Agent Intelligence Index (`.agents/`)

This directory houses specialized agent instructions, persona definitions, and domain constraints derived from `bnb_business_context.md` and the Stitch Design System (`Autonomous Kinetic Precision`).

---

## Agent Roster & Domain Specifications

| Spec / Document | Focus / Persona | Core Documents & References |
|---|---|---|
| [`sell-products-agent.md`](./sell-products-agent.md) | Retail & E-Commerce catalog inquiry, order intake, human escalation | `bnb_business_context.md` (Sec 4A) |
| [`promote-services-agent.md`](./promote-services-agent.md) | Service package inquiry, booking & appointment intake, qualification | `bnb_business_context.md` (Sec 4B) |
| [`onboarding-auth-agent.md`](./onboarding-auth-agent.md) | Frictionless onboarding, deferred OTP verification, Google SSO | `Project Requirement Document_.md` |
| [`interactive-onboarding-spec.md`](./interactive-onboarding-spec.md) | 5-Phase interactive onboarding overlay, live bot simulation, blended auth | `interactive_onboarding_plan.md` |
| [`frontend-stitch-agent.md`](./frontend-stitch-agent.md) | Next.js App Router UI engineering, Stitch design adherence | `Design.md`, Stitch Project `BnB` |
| [`terms_privacy.md`](./terms_privacy.md) | Verbatim live legal policies, Terms of Service (10 sections), Privacy Policy (9 sections), bilingual | `bossnbots.com/terms-of-service`, `bossnbots.com/privacy-policy` |

---

## Usage Guidelines
When delegating sub-tasks or implementing new features:
1. Refer to `frontend-stitch-agent.md` for styling, typography, colors, and layout consistency.
2. Refer to `sell-products-agent.md` or `promote-services-agent.md` when designing chatbot conversation flows or customer interaction logic.
3. Refer to `onboarding-auth-agent.md` when extending authentication, account creation, or user profile management.
4. Refer to `terms_privacy.md` and `bnb_business_context.md` (Sec 9) for compliance, disclaimers, liability terms, and data collection disclosures.
