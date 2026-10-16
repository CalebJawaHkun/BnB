"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function PrivacyPolicyPage() {
  const [languageMode, setLanguageMode] = useState("dual"); // "dual" | "en" | "my"
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("sec-01");

  useEffect(() => {
    const handleScroll = () => {
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0) {
        const scrolled = (window.scrollY / docHeight) * 100;
        setProgress(Math.min(100, Math.max(0, Math.round(scrolled))));
      }

      // Scrollspy active section
      const sections = [
        "sec-01",
        "sec-02",
        "sec-03",
        "sec-04",
        "sec-05",
        "sec-06",
        "sec-07",
        "sec-08",
        "sec-09",
      ];

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 220 && rect.bottom >= 150) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const navItems = [
    { id: "sec-01", num: "01.", label: "Who We Are" },
    { id: "sec-02", num: "02.", label: "Information We Collect" },
    { id: "sec-03", num: "03.", label: "How We Use Information" },
    { id: "sec-04", num: "04.", label: "Who We Share With" },
    { id: "sec-05", num: "05.", label: "Retention Period" },
    { id: "sec-06", num: "06.", label: "Security & Encryption" },
    { id: "sec-07", num: "07.", label: "Your Rights & Choices" },
    { id: "sec-08", num: "08.", label: "Children Privacy" },
    { id: "sec-09", num: "09.", label: "Policy Updates" },
  ];

  const showEn = languageMode === "dual" || languageMode === "en";
  const showMy = languageMode === "dual" || languageMode === "my";

  return (
    <div className="w-full bg-[#f8fafc] animate-page-fade">
      {/* Hero Banner */}
      <div className="relative w-full bg-gradient-to-b from-slate-100/70 via-[#f8fafc] to-[#f8fafc] pb-16 pt-8 px-6 lg:px-12 overflow-hidden">
        {/* Ambient Backdrop Light Glow */}
        <div className="absolute -top-32 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-12 -left-20 w-80 h-80 bg-slate-300/20 rounded-full blur-2xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-start gap-6">
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-white shadow-sm border border-slate-100">
            <span className="w-2 h-2 rounded-full bg-teal-600 animate-pulse" />
            <span className="text-xs tracking-wider uppercase text-slate-700 font-semibold">
              PRIVACY &amp; DATA PROTECTION • OPERATED BY UTS MYANMAR
            </span>
          </div>

          {/* Main Headline */}
          <div className="space-y-3 max-w-4xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
              Privacy Policy
              <span className="block text-2xl sm:text-3xl font-medium text-teal-700 mt-2 font-['Noto_Sans_Myanmar']">
                (ကိုယ်ရေးကိုယ်တာနှင့် အချက်အလက် လုံခြုံမှု မူဝါဒ)
              </span>
            </h1>
            <p className="text-base sm:text-lg text-slate-600 max-w-3xl leading-relaxed">
              This policy explains what Boss &amp; Bots (BnB) collects, why we collect it, and how UTS Myanmar handles it when you use our website, Android app, user portal, or referral portal.
            </p>
          </div>

          {/* Metadata & Language Switcher Pill Bar */}
          <div className="w-full flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-200/60">
            {/* Effective Date Marker */}
            <div className="flex items-center gap-2 text-slate-600 text-xs sm:text-sm">
              <span className="material-symbols-outlined text-teal-700 text-[18px]">
                calendar_today
              </span>
              <span>
                Effective Date:{" "}
                <strong className="text-slate-900 font-semibold font-code-mono">
                  29 August 2026
                </strong>
              </span>
              <span className="mx-2 text-slate-300">•</span>
              <span className="font-code-mono text-xs text-slate-500">
                SEC-GOV-MYA-v2.6
              </span>
            </div>

            {/* Bilingual View Selector */}
            <div className="inline-flex items-center p-1 rounded-full bg-slate-100 shadow-inner">
              <button
                type="button"
                onClick={() => setLanguageMode("dual")}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                  languageMode === "dual"
                    ? "bg-slate-900 text-white shadow-sm"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                Dual View (နှစ်ဘာသာ)
              </button>
              <button
                type="button"
                onClick={() => setLanguageMode("en")}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                  languageMode === "en"
                    ? "bg-slate-900 text-white shadow-sm"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                English (Official)
              </button>
              <button
                type="button"
                onClick={() => setLanguageMode("my")}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 font-['Noto_Sans_Myanmar'] ${
                  languageMode === "my"
                    ? "bg-slate-900 text-white shadow-sm"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                မြန်မာဘာသာ
              </button>
            </div>
          </div>

          {/* 3 Key Data Architecture Highlights */}
          <div className="w-full border-t border-b border-slate-200/80 py-5 my-2 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-6 bg-transparent">
            <div className="flex items-center gap-3.5 flex-1">
              <div className="w-2 h-2 rounded-full bg-teal-700 shrink-0" />
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-slate-900">
                    We Never Sell Personal Data
                  </span>
                  <span className="text-[10px] font-code-mono font-bold px-1.5 py-0.5 rounded bg-teal-50 text-teal-700">
                    SEC 04
                  </span>
                </div>
                <p className="text-xs text-slate-600 leading-snug">
                  Zero data brokerage or third-party ad monetization
                </p>
              </div>
            </div>

            <div className="hidden md:block w-px h-10 bg-slate-200" />

            <div className="flex items-center gap-3.5 flex-1">
              <div className="w-2 h-2 rounded-full bg-teal-700 shrink-0" />
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-slate-900">
                    Encrypted Storage &amp; HTTPS
                  </span>
                  <span className="text-[10px] font-code-mono font-bold px-1.5 py-0.5 rounded bg-teal-50 text-teal-700">
                    SEC 06
                  </span>
                </div>
                <p className="text-xs text-slate-600 leading-snug">
                  Argon2id/bcrypt salted hashing and TLS 1.3 transit
                </p>
              </div>
            </div>

            <div className="hidden md:block w-px h-10 bg-slate-200" />

            <div className="flex items-center gap-3.5 flex-1">
              <div className="w-2 h-2 rounded-full bg-teal-700 shrink-0" />
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-slate-900">
                    SMSPoh &amp; AI Cloud Isolation
                  </span>
                  <span className="text-[10px] font-code-mono font-bold px-1.5 py-0.5 rounded bg-teal-50 text-teal-700">
                    SEC 04
                  </span>
                </div>
                <p className="text-xs text-slate-600 leading-snug">
                  Certified Myanmar SMS gateway with zero-training AI APIs
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Layout (Sticky Sidebar + Documentation Column) */}
      <div className="max-w-7xl mx-auto w-full px-6 lg:px-12 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Sticky Navigation Column (4 Cols on LG) */}
          <aside className="lg:col-span-3 lg:sticky lg:top-24 space-y-8 pl-1">
            <div className="py-1">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-teal-700 text-base">
                    toc
                  </span>
                  Contents
                </span>
                <span className="font-code-mono text-slate-400 text-xs">
                  {progress}%
                </span>
              </div>
              <div className="w-full h-1 rounded-full bg-slate-200 mb-4 overflow-hidden">
                <div
                  className="h-full bg-teal-700 rounded-full transition-all duration-150"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <nav className="space-y-0.5 border-l-2 border-slate-200 pl-2">
                {navItems.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => scrollTo(item.id)}
                      className={`block w-full text-left px-2.5 py-1.5 rounded text-xs transition-colors font-medium ${
                        isActive
                          ? "bg-teal-50 text-teal-800 font-semibold"
                          : "text-slate-600 hover:text-slate-900"
                      }`}
                    >
                      <span className="font-code-mono text-slate-400 mr-1">
                        {item.num}
                      </span>{" "}
                      {item.label}
                    </button>
                  );
                })}
              </nav>
            </div>

            <div className="pt-2 border-t border-slate-200/60 flex flex-col gap-1.5 text-xs text-slate-600">
              <div className="flex items-center gap-1.5 text-slate-800 font-semibold">
                <span className="material-symbols-outlined text-teal-700 text-[16px]">
                  shield_person
                </span>
                <span>Data Protection Officer</span>
              </div>
              <p className="text-[11px] leading-tight text-slate-500">
                Audit &amp; deletion inquiries:
              </p>
              <a
                className="inline-flex items-center gap-1.5 text-teal-700 hover:underline font-code-mono text-xs pt-0.5"
                href="mailto:bnb@utsmyanmar.com"
              >
                <span className="material-symbols-outlined text-[14px]">mail</span>
                <span>bnb@utsmyanmar.com</span>
              </a>
            </div>

            <div className="pt-1">
              <Link
                href="/terms-of-service"
                className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-teal-700 transition-colors"
              >
                <span className="material-symbols-outlined text-sm">gavel</span>
                <span>View Terms of Service</span>
              </Link>
            </div>
          </aside>

          {/* Right Documentation Reading Column (8 Cols on LG) */}
          <div className="lg:col-span-9 flex flex-col gap-10" id="documentation-content">
            {/* Article 01 */}
            <article
              className="scroll-mt-28 p-8 rounded-3xl bg-white border border-slate-100 shadow-sm flex flex-col gap-6"
              id="sec-01"
            >
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-teal-50 text-teal-700 font-code-mono text-xs font-semibold">
                    01
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                    Who We Are
                  </h2>
                </div>
                <span className="font-['Noto_Sans_Myanmar'] text-xs sm:text-sm text-slate-500 font-medium">
                  ကျွန်ုပ်တို့ မည်သူနည်း
                </span>
              </div>

              <div className="space-y-6">
                {showEn && (
                  <div className="space-y-3 text-sm sm:text-base text-slate-700 leading-relaxed">
                    <p>
                      Boss &amp; Bots (<strong>BnB</strong>) is a digital product and autonomous workforce platform operated exclusively by <strong>UTS Myanmar</strong>. All corporate infrastructure, database architectures, and software runtime environments described in this document are governed under UTS Myanmar&apos;s institutional frameworks.
                    </p>
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-between">
                      <span className="text-slate-500 text-xs sm:text-sm">
                        Official corporate website:
                      </span>
                      <a
                        className="inline-flex items-center gap-1.5 text-teal-700 hover:underline font-code-mono text-xs sm:text-sm font-medium"
                        href="https://utsmyanmar.com/"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <span>https://utsmyanmar.com</span>
                        <span className="material-symbols-outlined text-[16px]">
                          open_in_new
                        </span>
                      </a>
                    </div>
                  </div>
                )}

                {showMy && (
                  <div className="font-['Noto_Sans_Myanmar'] text-xs sm:text-sm leading-relaxed text-slate-700 bg-slate-50 border border-slate-100 p-5 rounded-2xl space-y-3">
                    <p>
                      Boss &amp; Bots (BnB) သည် <strong>UTS Myanmar</strong> ၏ တရားဝင် ဒစ်ဂျစ်တယ်ထုတ်ကုန်တစ်ခု ဖြစ်ပါသည်။ ဤမူဝါဒတွင် ဖော်ပြထားသော ဆော့ဖ်ဝဲလ်၊ အချက်အလက်သိုလှောင်မှုနှင့် ဝန်ဆောင်မှုစနစ်များ အားလုံးကို UTS Myanmar မှ စီမံခန့်ခွဲထိန်းချုပ်ပါသည်။
                    </p>
                    <p>
                      ကုမ္ပဏီတရားဝင် ဝဘ်ဆိုက်ဖြစ်သော{" "}
                      <a
                        className="text-teal-700 hover:underline font-medium"
                        href="https://utsmyanmar.com/"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        https://utsmyanmar.com
                      </a>{" "}
                      မှတစ်ဆင့်လည်း အသေးစိတ် အချက်အလက်များကို လေ့လာနိုင်ပါသည်။
                    </p>
                  </div>
                )}
              </div>
            </article>

            {/* Article 02 */}
            <article
              className="scroll-mt-28 p-8 rounded-3xl bg-white border border-slate-100 shadow-sm flex flex-col gap-6"
              id="sec-02"
            >
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-teal-50 text-teal-700 font-code-mono text-xs font-semibold">
                    02
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                    Information We Collect
                  </h2>
                </div>
                <span className="font-['Noto_Sans_Myanmar'] text-xs sm:text-sm text-slate-500 font-medium">
                  စုဆောင်းသော အချက်အလက်များ
                </span>
              </div>

              {showEn && (
                <p className="text-sm text-slate-600 leading-relaxed">
                  We collect personal and corporate telemetry only as strictly required to deliver, secure, and monitor autonomous bot performance:
                </p>
              )}

              {showMy && (
                <p className="font-['Noto_Sans_Myanmar'] text-xs sm:text-sm leading-relaxed text-slate-600 -mt-2">
                  ကျွန်ုပ်တို့သည် ဝန်ဆောင်မှုများ ချောမွေ့စွာ လည်ပတ်နိုင်ရန်နှင့် လုံခြုံရေးအတွက် လိုအပ်သော အောက်ပါ အချက်အလက်များကိုသာ စုဆောင်းပါသည် -
                </p>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-teal-700">
                    <span className="material-symbols-outlined text-[20px]">badge</span>
                    <span className="text-sm font-bold text-slate-900">
                      Account Details
                    </span>
                  </div>
                  {showEn && (
                    <p className="text-xs text-slate-700 leading-relaxed">
                      Full name, registered business name, phone number, corporate email address, encrypted password hash, and designated referral affiliate code.
                    </p>
                  )}
                  {showMy && (
                    <p className="font-['Noto_Sans_Myanmar'] text-xs text-slate-600 leading-relaxed">
                      အမည်၊ လုပ်ငန်းအမည်၊ ဖုန်းနံပါတ်၊ အီးမေးလ်၊ ကုဒ်ဝှက်ထားသော စကားဝှက် နှင့် ရည်ညွှန်းကုဒ် (Referral Code)။
                    </p>
                  )}
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-teal-700">
                    <span className="material-symbols-outlined text-[20px]">sms</span>
                    <span className="text-sm font-bold text-slate-900">
                      Verification Telecom
                    </span>
                  </div>
                  {showEn && (
                    <p className="text-xs text-slate-700 leading-relaxed">
                      SMS One-Time Passcodes (OTP) dispatched for multi-factor authentication, authentication logs, and device session timestamps.
                    </p>
                  )}
                  {showMy && (
                    <p className="font-['Noto_Sans_Myanmar'] text-xs text-slate-600 leading-relaxed">
                      ဖုန်းနံပါတ် အတည်ပြုရန်အတွက် ပေးပို့သော SMS OTP ကုဒ်များနှင့် အကောင့်ဝင်ရောက်မှု မှတ်တမ်းများ။
                    </p>
                  )}
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-teal-700">
                    <span className="material-symbols-outlined text-[20px]">smart_toy</span>
                    <span className="text-sm font-bold text-slate-900">
                      Studio &amp; Autonomous Bots
                    </span>
                  </div>
                  {showEn && (
                    <p className="text-xs text-slate-700 leading-relaxed">
                      Brand guidelines, uploaded product catalogs, advertisement copy inputs, contextual prompts, user-to-bot chat logs, and enterprise demo queries.
                    </p>
                  )}
                  {showMy && (
                    <p className="font-['Noto_Sans_Myanmar'] text-xs text-slate-600 leading-relaxed">
                      လုပ်ငန်းအမှတ်တံဆိပ် အချက်အလက်များ၊ ကုန်ပစ္စည်းဓာတ်ပုံများ၊ ကြော်ငြာစာသားများ၊ AI စကားပြော မှတ်တမ်းများနှင့် Demo လျှောက်ထားချက်များ။
                    </p>
                  )}
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-teal-700">
                    <span className="material-symbols-outlined text-[20px]">receipt_long</span>
                    <span className="text-sm font-bold text-slate-900">
                      Payments &amp; Billings
                    </span>
                  </div>
                  {showEn && (
                    <p className="text-xs text-slate-700 leading-relaxed">
                      Purchased credit tier choices, bank transfer verification screenshots, transaction references, balance updates, and commission payout ledgers.
                    </p>
                  )}
                  {showMy && (
                    <p className="font-['Noto_Sans_Myanmar'] text-xs text-slate-600 leading-relaxed">
                      ဝယ်ယူသည့် ပက်ကေ့ချ်၊ ငွေလွှဲပြေစာ ဓာတ်ပုံများ၊ ပွိုင့်လက်ကျန်စာရင်း နှင့် ကော်မရှင် ငွေထုတ်ယူမှု မှတ်တမ်းများ။
                    </p>
                  )}
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 md:col-span-2 flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-teal-700">
                    <span className="material-symbols-outlined text-[20px]">terminal</span>
                    <span className="text-sm font-bold text-slate-900">
                      Technical Telemetry &amp; Logs
                    </span>
                  </div>
                  {showEn && (
                    <p className="text-xs text-slate-700 leading-relaxed">
                      Device hardware specifications, operating system versions, browser agent signatures, IP addresses, localized cookies for persistent session management, and anonymous crash telemetry.
                    </p>
                  )}
                  {showMy && (
                    <p className="font-['Noto_Sans_Myanmar'] text-xs text-slate-600 leading-relaxed">
                      စက်ပစ္စည်းအမျိုးအစား၊ ဘရောက်ဇာ/အက်ပ်ဗားရှင်း၊ အင်တာနက် လိပ်စာ (IP Address)၊ Session ထိန်းသိမ်းရန် ကွတ်ကီး (Cookies) နှင့် စနစ် ချို့ယွင်းမှု မှတ်တမ်းများ။
                    </p>
                  )}
                </div>
              </div>
            </article>

            {/* Article 03 */}
            <article
              className="scroll-mt-28 p-8 rounded-3xl bg-white border border-slate-100 shadow-sm flex flex-col gap-6"
              id="sec-03"
            >
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-teal-50 text-teal-700 font-code-mono text-xs font-semibold">
                    03
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                    How We Use Information
                  </h2>
                </div>
                <span className="font-['Noto_Sans_Myanmar'] text-xs sm:text-sm text-slate-500 font-medium">
                  အချက်အလက် အသုံးပြုပုံ
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {showEn && (
                  <div className="space-y-4">
                    <p className="text-sm text-slate-600">
                      We process user and enterprise data strictly according to legitimate operational mandates:
                    </p>
                    <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                      <li className="flex items-start gap-2.5">
                        <span className="material-symbols-outlined text-teal-700 text-[18px] shrink-0 mt-0.5">
                          check_circle
                        </span>
                        <span>Provisioning and authenticating enterprise BnB workspace accounts.</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="material-symbols-outlined text-teal-700 text-[18px] shrink-0 mt-0.5">
                          check_circle
                        </span>
                        <span>Dispatching instant verification codes and security alerts via domestic SMS providers.</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="material-symbols-outlined text-teal-700 text-[18px] shrink-0 mt-0.5">
                          check_circle
                        </span>
                        <span>Powering the autonomous Ad Studio, AI agent orchestration, and automated marketing flows.</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="material-symbols-outlined text-teal-700 text-[18px] shrink-0 mt-0.5">
                          check_circle
                        </span>
                        <span>Verifying manual point top-ups, affiliate payouts, and banking reconciliations.</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="material-symbols-outlined text-teal-700 text-[18px] shrink-0 mt-0.5">
                          check_circle
                        </span>
                        <span>Auditing unauthorized access attempts, bot abuse, and mitigating cyber hazards.</span>
                      </li>
                    </ul>
                  </div>
                )}

                {showMy && (
                  <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 font-['Noto_Sans_Myanmar'] text-xs sm:text-sm leading-relaxed text-slate-700 flex flex-col gap-3">
                    <span className="font-bold text-slate-900 text-sm">
                      အချက်အလက်များ အသုံးပြုသည့် ရည်ရွယ်ချက်များ -
                    </span>
                    <ul className="space-y-2.5 list-disc pl-5">
                      <li>အကောင့်ဖွင့်လှစ်ခြင်းနှင့် လုံခြုံစွာ အတည်ပြုခြင်း</li>
                      <li>ဖုန်းနံပါတ်သို့ OTP ကုဒ်များနှင့် အရေးကြီး အသိပေးချက်များ ပေးပို့ခြင်း</li>
                      <li>AI ကြော်ငြာဖန်တီးမှု (Ad Studio) နှင့် အလိုအလျောက် စကားပြောစနစ်များ လည်ပတ်ပေးခြင်း</li>
                      <li>ငွေပေးချေမှုနှင့် ပွိုင့်များကို စိစစ်အတည်ပြုခြင်း</li>
                      <li>စနစ်တလွဲအသုံးပြုမှုနှင့် လိမ်လည်မှုများမှ ကာကွယ်ခြင်း</li>
                      <li>သုံးစွဲသူဝန်ဆောင်မှုနှင့် နည်းပညာအကူအညီများ ပံ့ပိုးပေးခြင်း</li>
                    </ul>
                  </div>
                )}
              </div>
            </article>

            {/* Article 04 */}
            <article
              className="scroll-mt-28 p-8 rounded-3xl bg-white border border-slate-100 shadow-sm flex flex-col gap-6"
              id="sec-04"
            >
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-teal-50 text-teal-700 font-code-mono text-xs font-semibold">
                    04
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                    Who We Share With
                  </h2>
                </div>
                <span className="font-['Noto_Sans_Myanmar'] text-xs sm:text-sm text-slate-500 font-medium">
                  အချက်အလက် မျှဝေခြင်း
                </span>
              </div>

              <div className="p-4 rounded-xl bg-teal-50 border border-teal-200/60 flex items-center gap-3">
                <span className="material-symbols-outlined text-teal-700 text-[24px]">
                  verified
                </span>
                <span className="text-sm font-bold text-teal-900">
                  Strict Non-Disclosure Guarantee: We Never Sell Your Data.
                </span>
              </div>

              {showEn && (
                <div className="space-y-4">
                  <p className="text-sm text-slate-600">
                    Data is strictly shared on a scoped, need-to-know basis with trusted partners essential to providing the software:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-3">
                      <span className="material-symbols-outlined text-teal-700 text-[20px] mt-0.5">
                        groups
                      </span>
                      <div>
                        <p className="text-xs font-bold text-slate-900">
                          UTS Myanmar Operations
                        </p>
                        <p className="text-xs text-slate-600">
                          Authorized engineering and tier-3 support personnel bound by legal NDAs.
                        </p>
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-3">
                      <span className="material-symbols-outlined text-teal-700 text-[20px] mt-0.5">
                        cell_tower
                      </span>
                      <div>
                        <p className="text-xs font-bold text-slate-900">
                          SMSPoh Telecom Gateway
                        </p>
                        <p className="text-xs text-slate-600">
                          Domestic SMS transmission gateway for Myanmar mobile numbers (+95).
                        </p>
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-3">
                      <span className="material-symbols-outlined text-teal-700 text-[20px] mt-0.5">
                        cloud_done
                      </span>
                      <div>
                        <p className="text-xs font-bold text-slate-900">
                          Enterprise AI Cloud Providers
                        </p>
                        <p className="text-xs text-slate-600">
                          Scoped API tokens with zero data-retention and zero model re-training clauses.
                        </p>
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-3">
                      <span className="material-symbols-outlined text-teal-700 text-[20px] mt-0.5">
                        hub
                      </span>
                      <div>
                        <p className="text-xs font-bold text-slate-900">
                          Telegram &amp; Social APIs
                        </p>
                        <p className="text-xs text-slate-600">
                          Opt-in integrations configured by business owners for autonomous message dispatch.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {showMy && (
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 font-['Noto_Sans_Myanmar'] text-xs sm:text-sm leading-relaxed text-slate-700 space-y-2">
                  <p className="font-bold text-slate-900">
                    ကျွန်ုပ်တို့သည် သင်၏ ကိုယ်ရေးကိုယ်တာ အချက်အလက်များကို မည်သည့်အခါမျှ ပြင်ပသို့ ရောင်းချခြင်း မပြုပါ။
                  </p>
                  <p>
                    လုပ်ငန်းလည်ပတ်မှုအတွက် လိုအပ်သော UTS Myanmar ၏ တာဝန်ရှိ ဝန်ထမ်းများ၊ SMS OTP ပေးပို့သည့် SMSPoh ဝန်ဆောင်မှု၊ လုံခြုံစိတ်ချရသော Cloud Database နှင့် AI နည်းပညာ မိတ်ဖက်များထံသို့သာ စနစ်အရ လိုအပ်သလောက် မျှဝေအသုံးပြုပါသည်။ ဥပဒေအရ တရားဝင် တောင်းဆိုလာသည့် အခြေအနေမျိုးမှအပ အခြားမည်သူ့ကိုမျှ ထုတ်ဖော်မည် မဟုတ်ပါ။
                  </p>
                </div>
              )}
            </article>

            {/* Article 05 */}
            <article
              className="scroll-mt-28 p-8 rounded-3xl bg-white border border-slate-100 shadow-sm flex flex-col gap-6"
              id="sec-05"
            >
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-teal-50 text-teal-700 font-code-mono text-xs font-semibold">
                    05
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                    Retention Period
                  </h2>
                </div>
                <span className="font-['Noto_Sans_Myanmar'] text-xs sm:text-sm text-slate-500 font-medium">
                  ဒေတာ ထိန်းသိမ်းသည့် ကာလ
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {showEn && (
                  <div className="space-y-3 text-sm text-slate-700 leading-relaxed">
                    <p>
                      We retain your business records and bot parameters for the active lifetime of your BnB account. Upon official account termination or written deletion request:
                    </p>
                    <ul className="space-y-2.5 text-xs text-slate-600">
                      <li className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-teal-700 text-[16px]">
                          schedule
                        </span>
                        <span>Active bot configs and studio copies: Purged within 30 days.</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-teal-700 text-[16px]">
                          schedule
                        </span>
                        <span>Financial invoices &amp; transaction vouchers: 5 years for tax compliance.</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-teal-700 text-[16px]">
                          schedule
                        </span>
                        <span>Telemetry logs: Anonymized or destroyed per automated rolling retention.</span>
                      </li>
                    </ul>
                  </div>
                )}

                {showMy && (
                  <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 font-['Noto_Sans_Myanmar'] text-xs sm:text-sm leading-relaxed text-slate-700 flex flex-col justify-center">
                    <p>
                      သင့်အကောင့် ဆက်လက်တည်ရှိနေသရွေ့ အချက်အလက်များကို ထိန်းသိမ်းထားမည်ဖြစ်ပါသည်။ အကောင့်ဖျက်သိမ်းရန် တောင်းဆိုလာပါက လုပ်ငန်းနှင့် ပတ်သက်သော စာရင်းအင်း၊ အခွန်ဆိုင်ရာ ဥပဒေအရ လိုအပ်ချက်များမှအပ ကျန်ရှိသော ကိုယ်ရေးအချက်အလက်များနှင့် AI Chat မှတ်တမ်းများကို သတ်မှတ်ကာလအတွင်း အပြီးတိုင် ဖျက်ဆီး (သို့မဟုတ်) အမည်ဖျောက် (Anonymize) ပြုလုပ်သွားမည် ဖြစ်ပါသည်။
                    </p>
                  </div>
                )}
              </div>
            </article>

            {/* Article 06 */}
            <article
              className="scroll-mt-28 p-8 rounded-3xl bg-white border border-slate-100 shadow-sm flex flex-col gap-6"
              id="sec-06"
            >
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-teal-50 text-teal-700 font-code-mono text-xs font-semibold">
                    06
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                    Security &amp; Encryption
                  </h2>
                </div>
                <span className="font-['Noto_Sans_Myanmar'] text-xs sm:text-sm text-slate-500 font-medium">
                  လုံခြုံရေး
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col gap-2">
                  <span className="material-symbols-outlined text-teal-700 text-[24px]">
                    key
                  </span>
                  <span className="text-xs font-bold text-slate-900">
                    Salted Password Hash
                  </span>
                  <p className="text-xs text-slate-600">
                    Argon2id and bcrypt cryptographic salting. Plaintext passwords are never saved.
                  </p>
                </div>
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col gap-2">
                  <span className="material-symbols-outlined text-teal-700 text-[24px]">
                    enhanced_encryption
                  </span>
                  <span className="text-xs font-bold text-slate-900">
                    HTTPS / TLS 1.3
                  </span>
                  <p className="text-xs text-slate-600">
                    Strict transport security for all desktop, mobile, and agent websocket sessions.
                  </p>
                </div>
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col gap-2">
                  <span className="material-symbols-outlined text-teal-700 text-[24px]">
                    admin_panel_settings
                  </span>
                  <span className="text-xs font-bold text-slate-900">
                    Session Control
                  </span>
                  <p className="text-xs text-slate-600">
                    Automatic invalidation, concurrent connection throttling, and anomaly detection.
                  </p>
                </div>
              </div>

              {showMy && (
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 font-['Noto_Sans_Myanmar'] text-xs sm:text-sm leading-relaxed text-slate-700">
                  <p>
                    သင့်အချက်အလက်များ လုံခြုံစေရန် စကားဝှက်များကို အဆင့်မြင့် ကုဒ်စနစ် (Hashed Passwords) ဖြင့်သာ သိမ်းဆည်းပြီး၊ ဝဘ်ဆိုက်နှင့် အက်ပ်အကြား ဆက်သွယ်မှုအားလုံးကို HTTPS အဆင့်မြင့် လုံခြုံရေးဖြင့် ကာကွယ်ထားပါသည်။ တာဝန်ရှိသူများသာ စနစ်တွင်း ဝင်ရောက်ခွင့်ရရှိအောင် တင်းကျပ်စွာ ထိန်းချုပ်ထားပါသည်။
                  </p>
                </div>
              )}
            </article>

            {/* Article 07 */}
            <article
              className="scroll-mt-28 p-8 rounded-3xl bg-white border border-slate-100 shadow-sm flex flex-col gap-6"
              id="sec-07"
            >
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-teal-50 text-teal-700 font-code-mono text-xs font-semibold">
                    07
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                    Your Rights &amp; Choices
                  </h2>
                </div>
                <span className="font-['Noto_Sans_Myanmar'] text-xs sm:text-sm text-slate-500 font-medium">
                  သင့်ရွေးချယ်ခွင့်များ
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                {showEn && (
                  <div className="space-y-3 text-sm text-slate-700 leading-relaxed">
                    <p>
                      As an autonomous platform operator, UTS Myanmar honors transparency and provides you full sovereignty over your enterprise data:
                    </p>
                    <ul className="space-y-2 text-xs text-slate-600">
                      <li className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-teal-700 text-[16px]">
                          check
                        </span>
                        <span>Right to access full account ledgers and metadata.</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-teal-700 text-[16px]">
                          check
                        </span>
                        <span>Right to modify erroneous company profile fields.</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-teal-700 text-[16px]">
                          check
                        </span>
                        <span>Immediate password self-reset via verified SMS OTP.</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-teal-700 text-[16px]">
                          check
                        </span>
                        <span>Complete deletion and data removal requests.</span>
                      </li>
                    </ul>
                  </div>
                )}

                {showMy && (
                  <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 font-['Noto_Sans_Myanmar'] text-xs sm:text-sm leading-relaxed text-slate-700 space-y-2">
                    <span className="font-bold text-slate-900">
                      သင့်တွင် အောက်ပါ အခွင့်အရေးများ ရှိပါသည် -
                    </span>
                    <p>
                      မိမိ အချက်အလက်များကို ကြည့်ရှုစစ်ဆေးခွင့်၊ ပြင်ဆင်ခွင့်နှင့် အကောင့်ဖျက်သိမ်းပေးရန် တောင်းဆိုခွင့်များ အပြည့်အဝ ရှိပါသည်။ စကားဝှက် မေ့လျော့ပါကလည်း ဖုန်း SMS OTP ဖြင့် မိမိဘာသာ အချိန်မရွေး အသစ်ပြန်လည် သတ်မှတ်နိုင်ပါသည်။ အချက်အလက် ဖျက်သိမ်းလိုပါက{" "}
                      <a
                        className="text-teal-700 underline font-medium"
                        href="mailto:bnb@utsmyanmar.com"
                      >
                        bnb@utsmyanmar.com
                      </a>{" "}
                      သို့ ဆက်သွယ်နိုင်ပါသည်။
                    </p>
                  </div>
                )}
              </div>
            </article>

            {/* Article 08 */}
            <article
              className="scroll-mt-28 p-8 rounded-3xl bg-white border border-slate-100 shadow-sm flex flex-col gap-6"
              id="sec-08"
            >
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-teal-50 text-teal-700 font-code-mono text-xs font-semibold">
                    08
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                    Children&apos;s Privacy
                  </h2>
                </div>
                <span className="font-['Noto_Sans_Myanmar'] text-xs sm:text-sm text-slate-500 font-medium">
                  ကလေးသူငယ်များ
                </span>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200/60 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-amber-600 text-[22px]">
                    child_care
                  </span>
                </div>
                <div className="space-y-2">
                  {showEn && (
                    <>
                      <p className="text-sm font-bold text-slate-900">
                        Exclusively For Business Enterprises
                      </p>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Boss &amp; Bots is strictly designed for corporate businesses, registered entrepreneurs, and authorized enterprise workforce teams. We do not knowingly solicit or collect data from children under the age of 13 (or under 18 where required by applicable law). Any unauthorized account identified will be promptly purged.
                      </p>
                    </>
                  )}
                  {showMy && (
                    <p className="font-['Noto_Sans_Myanmar'] text-xs sm:text-sm leading-relaxed text-slate-600 pt-1">
                      Boss &amp; Bots သည် စီးပွားရေးလုပ်ငန်းများနှင့် အရွယ်ရောက်ပြီးသူများအတွက်သာ ရည်ရွယ်ပါသည်။ အသက် (၁၃) နှစ်အောက် ကလေးသူငယ်များ၏ အချက်အလက်များကို သိလျက်နှင့် စုဆောင်းခြင်း မပြုလုပ်ပါ။ အကယ်၍ တွေ့ရှိပါက စနစ်အတွင်းမှ ချက်ချင်း ဖျက်ထုတ်သွားမည် ဖြစ်ပါသည်။
                    </p>
                  )}
                </div>
              </div>
            </article>

            {/* Article 09 */}
            <article
              className="scroll-mt-28 p-8 rounded-3xl bg-white border border-slate-100 shadow-sm flex flex-col gap-6"
              id="sec-09"
            >
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-teal-50 text-teal-700 font-code-mono text-xs font-semibold">
                    09
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                    Policy Updates
                  </h2>
                </div>
                <span className="font-['Noto_Sans_Myanmar'] text-xs sm:text-sm text-slate-500 font-medium">
                  မူဝါဒ ပြင်ဆင်ခြင်း
                </span>
              </div>

              <div className="space-y-4">
                {showEn && (
                  <p className="text-sm text-slate-600 leading-relaxed">
                    UTS Myanmar reserves the prerogative to revise this Privacy Policy to reflect system upgrades, automated features, or legal updates. When modifications occur, the &apos;Last Updated&apos; timestamp at the apex of this document will be amended accordingly. Substantive updates will be alerted inside the administrative portal.
                  </p>
                )}

                {showMy && (
                  <p className="font-['Noto_Sans_Myanmar'] text-xs sm:text-sm leading-relaxed text-slate-600 bg-slate-50 border border-slate-100 p-5 rounded-2xl">
                    နည်းပညာနှင့် ဥပဒေ အပြောင်းအလဲများအရ ဤမူဝါဒကို အခါအားလျော်စွာ ပြင်ဆင်မွမ်းမံနိုင်ပါသည်။ ပြင်ဆင်မှုများ ရှိပါက ဤစာမျက်နှာ၏ အပေါ်ဆုံးတွင် ရက်စွဲ အသစ်ဖြင့် ဖော်ပြပေးသွားမည် ဖြစ်ပါသည်။
                  </p>
                )}
              </div>
            </article>

            {/* Bottom Contact / Legal Desk Banner */}
            <div className="p-8 rounded-3xl bg-slate-900 text-white shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="space-y-2 max-w-lg">
                <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-teal-500/20 text-teal-300 font-code-mono text-[11px] font-semibold">
                  <span>UTS MYANMAR LEGAL DESK</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white">
                  Have Privacy Questions?
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Reach our compliance officers for regulatory documentation, data deletion certificates, or audit queries.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full md:w-auto">
                <a
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-teal-600 text-white hover:bg-teal-500 transition-all text-xs font-semibold shadow-md"
                  href="mailto:bnb@utsmyanmar.com"
                >
                  <span className="material-symbols-outlined text-[18px]">
                    contact_mail
                  </span>
                  <span>Contact DPO</span>
                </a>
                <a
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-slate-800 text-slate-200 hover:bg-slate-700 transition-all text-xs font-semibold border border-slate-700"
                  href="https://utsmyanmar.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span>UTS Portal</span>
                  <span className="material-symbols-outlined text-[16px]">
                    north_east
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
