"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function TermsOfServicePage() {
  const [languageMode, setLanguageMode] = useState("dual"); // "dual" | "en" | "my"
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("section-01");

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
        "section-01",
        "section-02",
        "section-03",
        "section-04",
        "section-05",
        "section-06",
        "section-07",
        "section-08",
        "section-09",
        "section-10",
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
    { id: "section-01", num: "01.", label: "The Agreement" },
    { id: "section-02", num: "02.", label: "OTP Verification" },
    { id: "section-03", num: "03.", label: "What BnB Provides" },
    { id: "section-04", num: "04.", label: "Points & Payments" },
    { id: "section-05", num: "05.", label: "AI Content Review" },
    { id: "section-06", num: "06.", label: "Acceptable Use" },
    { id: "section-07", num: "07.", label: "Referrals & Payouts" },
    { id: "section-08", num: "08.", label: "Intellectual Property" },
    { id: "section-09", num: "09.", label: "Liability Limitations" },
    { id: "section-10", num: "10.", label: "Law & Jurisdiction" },
  ];

  const showEn = languageMode === "dual" || languageMode === "en";
  const showMy = languageMode === "dual" || languageMode === "my";

  return (
    <div className="w-full bg-[#f8fafc] animate-page-fade">
      {/* Subtle decorative ambient glow behind hero */}
      <div className="relative w-full overflow-hidden bg-surface-container-low pb-12 pt-6">
        <div className="absolute -top-24 right-1/4 h-96 w-96 rounded-full bg-teal-600/5 blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 left-10 h-72 w-72 rounded-full bg-slate-200/40 blur-2xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb & Tag */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white text-teal-700 shadow-sm text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-teal-600 animate-pulse" />
              <span className="tracking-wide">
                LEGAL &amp; GOVERNANCE • OPERATED BY UTS MYANMAR
              </span>
            </div>
            <div className="text-xs text-slate-500 flex items-center gap-1.5 font-medium">
              <span className="material-symbols-outlined text-sm">event_repeat</span>
              <span>
                Last updated: <strong className="text-slate-900">29 August 2026</strong>
              </span>
            </div>
          </div>

          {/* Main Title Section */}
          <div className="max-w-4xl space-y-4">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
              Terms of Service
              <span className="block text-2xl sm:text-3xl font-medium text-teal-700 mt-2 font-['Noto_Sans_Myanmar']">
                စည်းမျဉ်းများနှင့် ဝန်ဆောင်မှုဆိုင်ရာ သဘောတူညီချက်
              </span>
            </h1>
            <p className="text-base sm:text-lg text-slate-600 max-w-3xl leading-relaxed">
              These terms govern how you may use Boss &amp; Bots (BnB) — including the public website, Android enterprise suite, client automation portal, and referral system operated under UTS Myanmar legal stewardship.
            </p>
          </div>

          {/* View Selector / Language Pills Switcher */}
          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-200/60">
            <div className="inline-flex p-1 rounded-full bg-slate-100 shadow-inner">
              <button
                type="button"
                onClick={() => setLanguageMode("dual")}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all flex items-center gap-2 ${
                  languageMode === "dual"
                    ? "bg-slate-900 text-white shadow-sm"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <span className="material-symbols-outlined text-base">view_column</span>
                <span>Dual View (English + မြန်မာ)</span>
              </button>
              <button
                type="button"
                onClick={() => setLanguageMode("en")}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all flex items-center gap-2 ${
                  languageMode === "en"
                    ? "bg-slate-900 text-white shadow-sm"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <span>English (Official)</span>
              </button>
              <button
                type="button"
                onClick={() => setLanguageMode("my")}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all flex items-center gap-2 font-['Noto_Sans_Myanmar'] ${
                  languageMode === "my"
                    ? "bg-slate-900 text-white shadow-sm"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <span>မြန်မာဘာသာ</span>
              </button>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => window.print()}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white text-slate-700 hover:bg-slate-50 border border-slate-200 shadow-sm text-xs font-semibold transition-all"
              >
                <span className="material-symbols-outlined text-base">print</span>
                <span>Print Archive</span>
              </button>
              <a
                href="mailto:bnb@utsmyanmar.com?subject=Legal%20Inquiry%3A%20Terms%20of%20Service"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-teal-700 text-white hover:bg-teal-800 shadow-sm text-xs font-semibold transition-all"
              >
                <span className="material-symbols-outlined text-base">mail</span>
                <span>Legal Counsel Inquiry</span>
              </a>
            </div>
          </div>

          {/* Key Executive Governance Cards */}
          <div className="mt-8 pt-5 pb-5 border-t border-b border-slate-200/80 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-6">
            <div className="flex items-start md:items-center gap-3.5 flex-1">
              <span className="w-2 h-2 rounded-full bg-teal-700 mt-1.5 md:mt-0 shrink-0" />
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    Section 09
                  </span>
                  <span className="text-xs font-bold text-slate-900">
                    Liability Cap
                  </span>
                </div>
                <p className="text-sm text-slate-600 font-medium">
                  MMK 50,000 maximum statutory limit
                </p>
              </div>
            </div>

            <div className="hidden md:block w-px h-8 bg-slate-200/80 shrink-0" />

            <div className="flex items-start md:items-center gap-3.5 flex-1">
              <span className="w-2 h-2 rounded-full bg-teal-600 mt-1.5 md:mt-0 shrink-0" />
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    Section 04
                  </span>
                  <span className="text-xs font-bold text-slate-900">
                    Utility Tokens
                  </span>
                </div>
                <p className="text-sm text-slate-600 font-medium">
                  Prepaid non-cash algorithmic compute units
                </p>
              </div>
            </div>

            <div className="hidden md:block w-px h-8 bg-slate-200/80 shrink-0" />

            <div className="flex items-start md:items-center gap-3.5 flex-1">
              <span className="w-2 h-2 rounded-full bg-amber-600 mt-1.5 md:mt-0 shrink-0" />
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    Section 05
                  </span>
                  <span className="text-xs font-bold text-slate-900">
                    AI Governance
                  </span>
                </div>
                <p className="text-sm text-slate-600 font-medium">
                  Merchant review duty under Consumer Law
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Document Container with Sticky Spy Sidebar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        <div className="flex flex-col lg:flex-row gap-10 items-start">
          {/* Sticky Navigation Sidebar */}
          <aside className="w-full lg:w-56 shrink-0 lg:sticky lg:top-24 space-y-6">
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

            <div className="pt-4 border-t border-slate-200/60">
              <p className="text-xs text-slate-500 mb-2 leading-relaxed">
                Need enterprise compliance or legal assistance?
              </p>
              <a
                className="inline-flex items-center gap-1.5 text-xs text-teal-700 font-semibold hover:underline"
                href="mailto:bnb@utsmyanmar.com"
              >
                <span>Contact Legal Dept</span>
                <span className="material-symbols-outlined text-sm">
                  arrow_forward
                </span>
              </a>
            </div>

            <div className="pt-2">
              <Link
                href="/privacy-policy"
                className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-teal-700 transition-colors"
              >
                <span className="material-symbols-outlined text-sm">shield</span>
                <span>View Privacy Policy</span>
              </Link>
            </div>
          </aside>

          {/* Main Documentation Text Section */}
          <div className="flex-1 w-full space-y-10" id="tos-content-root">
            {/* Section 01 */}
            <section
              className="p-8 rounded-3xl bg-white border border-slate-100 shadow-sm scroll-mt-28"
              id="section-01"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="px-2.5 py-1 rounded-lg bg-teal-50 text-teal-700 font-code-mono text-xs font-semibold">
                  01
                </span>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                    The Agreement
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 font-['Noto_Sans_Myanmar']">
                    သဘောတူညီချက် စည်းကမ်းချက်များ
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                {showEn && (
                  <div className="space-y-4">
                    <p className="text-base text-slate-900 leading-relaxed">
                      By creating an account, accessing, or using any part of Boss &amp; Bots (including the website, Android application, user dashboard, agent execution modules, and referral portal), you enter into a legally binding contract with <strong>UTS Myanmar</strong> (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;).
                    </p>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      If you are using Boss &amp; Bots on behalf of a company, partnership, sole proprietorship, or legal entity, you represent and warrant that you possess the full legal authority to bind that entity to these Terms. If you do not agree unconditionally to these terms, you must immediately cease all access and permanently delete the software.
                    </p>
                  </div>
                )}

                {showMy && (
                  <div className="p-6 rounded-2xl bg-slate-50 text-slate-900 font-['Noto_Sans_Myanmar'] space-y-3 border border-slate-100">
                    <div className="text-xs text-teal-700 uppercase font-bold tracking-wider mb-1">
                      မြန်မာဘာသာ ပြန်ဆိုချက်
                    </div>
                    <p className="text-sm leading-relaxed">
                      Boss &amp; Bots ၏ ဝက်ဘ်ဆိုက်၊ Android အက်ပ်လီကေးရှင်း၊ သုံးစွဲသူ ပေါ်တယ် သို့မဟုတ် ညွှန်းဆိုမှု (Referral) ပေါ်တယ် အပါအဝင် မည်သည့် အစိတ်အပိုင်းကိုမဆို ဝင်ရောက်အသုံးပြုခြင်း၊ အကောင့်ဖွင့်လှစ်ခြင်း ပြုလုပ်ပါက သင်သည် <strong>UTS Myanmar</strong> နှင့် တရားဝင် စည်းနှောင်မှုရှိသော သဘောတူညီချက်ကို ချုပ်ဆိုရာရောက်ပါသည်။
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      အကယ်၍ သင်သည် ကုမ္ပဏီ သို့မဟုတ် အဖွဲ့အစည်းတစ်ခု၏ ကိုယ်စား အသုံးပြုနေခြင်းဖြစ်ပါက ထိုအဖွဲ့အစည်းကို ဤစည်းကမ်းချက်များအတိုင်း တရားဝင် ကိုယ်စားပြု လိုက်နာဆောင်ရွက်စေနိုင်သည့် အာဏာရှိကြောင်း အာမခံပါသည်။ ဤစည်းကမ်းချက်များကို သဘောမတူပါက ဝန်ဆောင်မှုများကို အသုံးမပြုရပါ။
                    </p>
                  </div>
                )}
              </div>
            </section>

            {/* Section 02 */}
            <section
              className="p-8 rounded-3xl bg-white border border-slate-100 shadow-sm scroll-mt-28"
              id="section-02"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="px-2.5 py-1 rounded-lg bg-teal-50 text-teal-700 font-code-mono text-xs font-semibold">
                  02
                </span>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                    Accounts &amp; Phone OTP Verification
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 font-['Noto_Sans_Myanmar']">
                    အကောင့်များနှင့် ဖုန်းနံပါတ် OTP အတည်ပြုခြင်း
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                {showEn && (
                  <div className="space-y-4">
                    <p className="text-base text-slate-900 leading-relaxed">
                      Authentication and access to Boss &amp; Bots requires a verified Myanmar telephone number (+95) validated via SMS One-Time Password (OTP). You must ensure that the mobile telephone number registered is strictly under your legitimate control.
                    </p>
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
                      <span className="material-symbols-outlined text-teal-700 shrink-0 mt-0.5">
                        verified_user
                      </span>
                      <p className="text-xs text-slate-800 leading-relaxed">
                        <strong>Account Security Responsibility:</strong> You are solely responsible for all activities, actions, automated agent triggers, and transactions conducted under your authentication sessions. You agree never to disclose your OTP, transfer your SIM authentication state, or permit unauthorized third parties access to your BnB terminal.
                      </p>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      UTS Myanmar reserves the absolute right to suspend, terminate, or lock any account suspected of SIM spoofing, virtual number abuse, multi-accounting for fraudulent credit claims, or unauthorized credential delegation.
                    </p>
                  </div>
                )}

                {showMy && (
                  <div className="p-6 rounded-2xl bg-slate-50 text-slate-900 font-['Noto_Sans_Myanmar'] space-y-3 border border-slate-100">
                    <div className="text-xs text-teal-700 uppercase font-bold tracking-wider mb-1">
                      မြန်မာဘာသာ ပြန်ဆိုချက်
                    </div>
                    <p className="text-sm leading-relaxed">
                      Boss &amp; Bots သို့ ဝင်ရောက်အသုံးပြုရန်အတွက် စိစစ်ပြီးသော မြန်မာဖုန်းနံပါတ် (+95) နှင့် SMS တစ်ကြိမ်သုံး လျှို့ဝှက်ကုဒ် (OTP) လိုအပ်ပါသည်။ သင်၏ အကောင့်လုံခြုံရေး၊ စကားဝှက်နှင့် OTP တို့ကို လျှို့ဝှက်စွာ ထိန်းသိမ်းရန် သင်ကိုယ်တိုင်၌သာ အပြည့်အဝ တာဝန်ရှိပါသည်။
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      အကောင့်အတွင်း ပြုလုပ်သမျှသော လုပ်ဆောင်ချက်များအားလုံးအတွက် အကောင့်ပိုင်ရှင်တွင် တာဝန်ရှိပြီး အခြားသူတစ်ဦးအား အကောင့်မျှဝေသုံးစွဲခွင့် မပြုရပါ။ မသင်္ကာဖွယ်ရာ လှုပ်ရှားမှုများ တွေ့ရှိပါက UTS Myanmar သည် အကောင့်အား ဆိုင်းငံ့ခြင်း သို့မဟုတ် ပိတ်သိမ်းခြင်း ပြုလုပ်နိုင်ပါသည်။
                    </p>
                  </div>
                )}
              </div>
            </section>

            {/* Section 03 */}
            <section
              className="p-8 rounded-3xl bg-white border border-slate-100 shadow-sm scroll-mt-28"
              id="section-03"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="px-2.5 py-1 rounded-lg bg-teal-50 text-teal-700 font-code-mono text-xs font-semibold">
                  03
                </span>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                    What Boss &amp; Bots Provides
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 font-['Noto_Sans_Myanmar']">
                    Boss &amp; Bots မှ ပံ့ပိုးပေးသော ဝန်ဆောင်မှုများ
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                {showEn && (
                  <div className="space-y-4">
                    <p className="text-base text-slate-900 leading-relaxed">
                      Boss &amp; Bots is an autonomous enterprise AI platform that delivers generative advertising copy, high-fidelity studio image creation, persona-driven AI Employees, automated enterprise lead management, and programmatic workflow endpoints.
                    </p>
                    <ul className="space-y-2 text-sm text-slate-600 pl-5 list-disc">
                      <li>
                        <strong className="text-slate-900">Generative Content Studio:</strong> Automated copywriting tailored for Myanmar local commerce, social commerce pipelines, and visual branding rendering.
                      </li>
                      <li>
                        <strong className="text-slate-900">AI Employee Workflows:</strong> Synthetic autonomous agents capable of fielding customer inquiries, processing orders, and orchestrating enterprise workflows.
                      </li>
                      <li>
                        <strong className="text-slate-900">Demo &amp; Trial Reservations:</strong> Provision of customized proofs-of-concept subject to compute availability and UTS Myanmar operational capacity.
                      </li>
                    </ul>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      We reserve the unilateral discretion to modify, augment, throttle, or deprecate any software feature or agent model without prior direct notification to maintain system resilience.
                    </p>
                  </div>
                )}

                {showMy && (
                  <div className="p-6 rounded-2xl bg-slate-50 text-slate-900 font-['Noto_Sans_Myanmar'] space-y-3 border border-slate-100">
                    <div className="text-xs text-teal-700 uppercase font-bold tracking-wider mb-1">
                      မြန်မာဘာသာ ပြန်ဆိုချက်
                    </div>
                    <p className="text-sm leading-relaxed">
                      Boss &amp; Bots သည် စီးပွားရေးလုပ်ငန်းများအတွက် အဆင့်မြင့် AI ကြော်ငြာစာသားများ ရေးသားခြင်း၊ စတူဒီယို အရည်အသွေးရှိ ဓာတ်ပုံများ ဖန်တီးပေးခြင်း၊ အလိုအလျောက် တာဝန်ထမ်းဆောင်ပေးသည့် AI Employees များ ပံ့ပိုးပေးခြင်းနှင့် သရုပ်ပြ (Demo) စနစ်များကို ဆောင်ရွက်ပေးသော ပလက်ဖောင်းဖြစ်ပါသည်။
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      စနစ်တည်ငြိမ်မှုနှင့် နည်းပညာအဆင့်မြှင့်တင်မှုများအရ UTS Myanmar သည် မည်သည့် ဝန်ဆောင်မှု အင်္ဂါရပ်ကိုမဆို အချိန်နှင့်တပြေးညီ ပြင်ဆင်ပြောင်းလဲခွင့် ရှိပါသည်။
                    </p>
                  </div>
                )}
              </div>
            </section>

            {/* Section 04 */}
            <section
              className="p-8 rounded-3xl bg-white border border-slate-100 shadow-sm scroll-mt-28"
              id="section-04"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="px-2.5 py-1 rounded-lg bg-teal-50 text-teal-700 font-code-mono text-xs font-semibold">
                  04
                </span>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                    Points &amp; Payments Architecture
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 font-['Noto_Sans_Myanmar']">
                    Points စနစ်နှင့် ငွေပေးချေမှုဆိုင်ရာ စည်းမျဉ်းများ
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                {showEn && (
                  <div className="space-y-4">
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
                      <span className="material-symbols-outlined text-slate-700 shrink-0 mt-0.5">
                        account_balance_wallet
                      </span>
                      <p className="text-xs text-slate-800 leading-relaxed">
                        <strong>Non-Stored-Value Disclaimer:</strong> BnB &quot;Points&quot; represent pre-purchased, non-refundable digital utility units consumed solely to trigger machine-learning inference. Points do not represent fiat currency, bank deposits, e-money balances, or securities.
                      </p>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      <strong>Manual Bank Transfer Verification:</strong> Points reloads purchased via domestic banking infrastructure (including KBZPay, CB Pay, AYA Pay, or AYA/KBZ corporate bank transfer) are credited following manual review of payment transaction slips uploaded by the user. UTS Myanmar fraud prevention teams verify payment authenticity prior to point issuance.
                    </p>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      <strong>No Refunds:</strong> All payments for points and enterprise subscriptions are non-refundable and non-redeemable for cash, except where strictly required by applicable statutes of Myanmar.
                    </p>
                  </div>
                )}

                {showMy && (
                  <div className="p-6 rounded-2xl bg-slate-50 text-slate-900 font-['Noto_Sans_Myanmar'] space-y-3 border border-slate-100">
                    <div className="text-xs text-teal-700 uppercase font-bold tracking-wider mb-1">
                      မြန်မာဘာသာ ပြန်ဆိုချက်
                    </div>
                    <p className="text-sm leading-relaxed">
                      Boss &amp; Bots တွင် အသုံးပြုသော &quot;Points&quot; များသည် AI ဝန်ဆောင်မှုများကို အသုံးပြုရန် ကြိုတင်ဝယ်ယူထားသော နည်းပညာသုံး ကုန်ကျစရိတ်ယူနစ်များသာ ဖြစ်ပြီး ငွေကြေး သို့မဟုတ် အီလက်ထရောနစ် ပိုက်ဆံအိတ် (e-wallet) လက်ကျန်ငွေ မဟုတ်ပါ။
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      ဘဏ်လွှဲငွေ ပြေစာအထောက်အထား (Screenshot) တင်သွင်းပြီး ဝယ်ယူမှုများကို လူကိုယ်တိုင် စစ်ဆေးအတည်ပြုပြီးမှသာ Points များကို ဖြည့်သွင်းပေးမည်ဖြစ်ပါသည်။ ဥပဒေအရ သတ်မှတ်ထားသည့် အခြေအနေမှအပ ဝယ်ယူပြီးသော Points များကို ငွေသားအဖြစ် ပြန်လည်ထုတ်ယူခွင့် သို့မဟုတ် ပြန်အမ်းငွေ (Refund) ရယူခွင့် လုံးဝမရှိပါ။
                    </p>
                  </div>
                )}
              </div>
            </section>

            {/* Section 05 */}
            <section
              className="p-8 rounded-3xl bg-white border border-slate-100 shadow-sm scroll-mt-28"
              id="section-05"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="px-2.5 py-1 rounded-lg bg-teal-50 text-teal-700 font-code-mono text-xs font-semibold">
                  05
                </span>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                    AI Content Governance &amp; Merchant Liability
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 font-['Noto_Sans_Myanmar']">
                    AI ထုတ်လုပ်မှု အကြောင်းအရာနှင့် ကုန်သည်တာဝန်ယူမှု
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                {showEn && (
                  <div className="space-y-4">
                    <p className="text-base text-slate-900 leading-relaxed">
                      You understand that all text, translations, market assessments, and synthetic visual assets generated by Boss &amp; Bots are produced algorithmically using probabilistic deep neural networks. AI outputs may occasionally contain factual inaccuracies, hallucinations, unintended biases, or inappropriate recommendations.
                    </p>
                    <div className="p-5 rounded-2xl bg-teal-50/60 border border-teal-200/60 space-y-2">
                      <span className="text-xs text-teal-800 flex items-center gap-1.5 font-bold uppercase tracking-wider">
                        <span className="material-symbols-outlined text-base">rule</span>
                        Mandatory Human-in-the-Loop Review
                      </span>
                      <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">
                        You, as the merchant or business subscriber, hold full and unreserved legal duty to independently review, edit, fact-check, and approve all AI-generated copy, claims, pricing, product specifications, and imagery before publishing, running advertising campaigns, or distributing them to consumers.
                      </p>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      You assume full civil and statutory liability under Myanmar Consumer Protection Law, Advertising By-laws, and E-Commerce regulatory frameworks for all published materials produced with the platform.
                    </p>
                  </div>
                )}

                {showMy && (
                  <div className="p-6 rounded-2xl bg-slate-50 text-slate-900 font-['Noto_Sans_Myanmar'] space-y-3 border border-slate-100">
                    <div className="text-xs text-teal-700 uppercase font-bold tracking-wider mb-1">
                      မြန်မာဘာသာ ပြန်ဆိုချက်
                    </div>
                    <p className="text-sm leading-relaxed">
                      Boss &amp; Bots မှ ထုတ်လုပ်ပေးသော အကြောင်းအရာများသည် ဉာဏ်ရည်တု (AI) နည်းပညာဖြင့် အလိုအလျောက် ရေးသားထုတ်လုပ်ထားခြင်း ဖြစ်သောကြောင့် မမှန်ကန်သော အချက်အလက်များ ပါဝင်နိုင်ခြေ ရှိပါသည်။
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      အဆိုပါ AI ဖြင့် ထုတ်လုပ်ထားသော ကြော်ငြာများ၊ ဓာတ်ပုံများနှင့် အချက်အလက်များကို အများပြည်သူသို့ မဖြန့်ချိမီနှင့် ကြော်ငြာအဖြစ် မလွှင့်တင်မီ လုပ်ငန်းရှင် (သို့မဟုတ် ကုန်သည်) အနေဖြင့် ကိုယ်တိုင် စစ်ဆေးအတည်ပြုရန် တာဝန်ရှိပါသည်။ မြန်မာနိုင်ငံ စားသုံးသူကာကွယ်ရေး ဥပဒေနှင့် သက်ဆိုင်ရာ စည်းမျဉ်းများအရ ဖြစ်ပေါ်လာသည့် မည်သည့် တရားရေးဆိုင်ရာ ပြဿနာမဆို လုပ်ငန်းရှင်၏ တာဝန်သာ ဖြစ်ပါသည်။
                    </p>
                  </div>
                )}
              </div>
            </section>

            {/* Section 06 */}
            <section
              className="p-8 rounded-3xl bg-white border border-slate-100 shadow-sm scroll-mt-28"
              id="section-06"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="px-2.5 py-1 rounded-lg bg-teal-50 text-teal-700 font-code-mono text-xs font-semibold">
                  06
                </span>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                    Acceptable Use Policy
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 font-['Noto_Sans_Myanmar']">
                    သင့်လျော်စွာ အသုံးပြုမှုဆိုင်ရာ စည်းကမ်းချက်များ
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                {showEn && (
                  <div className="space-y-4">
                    <p className="text-sm text-slate-600 leading-relaxed">
                      You agree not to misuse or facilitate any third party in misusing Boss &amp; Bots. Specifically, you agree NOT to:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-2.5">
                        <span className="material-symbols-outlined text-rose-600 text-lg mt-0.5">
                          block
                        </span>
                        <span className="text-xs sm:text-sm text-slate-800">
                          Distribute malicious code, trojans, worms, or exploit platform telemetry endpoints.
                        </span>
                      </div>
                      <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-2.5">
                        <span className="material-symbols-outlined text-rose-600 text-lg mt-0.5">
                          block
                        </span>
                        <span className="text-xs sm:text-sm text-slate-800">
                          Generate deceptive scams, pyramid schemes, or unsolicited bulk messaging (SPAM).
                        </span>
                      </div>
                      <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-2.5">
                        <span className="material-symbols-outlined text-rose-600 text-lg mt-0.5">
                          block
                        </span>
                        <span className="text-xs sm:text-sm text-slate-800">
                          Engage in programmatic web scraping, reverse engineering, or neural weight extraction.
                        </span>
                      </div>
                      <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-2.5">
                        <span className="material-symbols-outlined text-rose-600 text-lg mt-0.5">
                          block
                        </span>
                        <span className="text-xs sm:text-sm text-slate-800">
                          Generate defamatory, sexually explicit, hateful, or politically subversive content in Myanmar.
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                {showMy && (
                  <div className="p-6 rounded-2xl bg-slate-50 text-slate-900 font-['Noto_Sans_Myanmar'] space-y-3 border border-slate-100">
                    <div className="text-xs text-teal-700 uppercase font-bold tracking-wider mb-1">
                      မြန်မာဘာသာ ပြန်ဆိုချက်
                    </div>
                    <p className="text-sm leading-relaxed">
                      ပလက်ဖောင်းကို အလွဲသုံးစားပြုလုပ်ခြင်း၊ စနစ်အား ဖောက်ထွင်းရန် ကြိုးပမ်းခြင်း (Hacking)၊ ကွန်ပျူတာ ဗိုင်းရပ်စ်များ ထည့်သွင်းခြင်း၊ အများပြည်သူ အထင်အမြင်လွဲမှားစေမည့် လိမ်လည်လှည့်ဖြားမှုများ ပြုလုပ်ခြင်း၊ အမုန်းစကား (Hate speech) သို့မဟုတ် ဥပဒေနှင့် မကင်းသော အကြောင်းအရာများ ရေးသားထုတ်လုပ်ခြင်းတို့ကို လုံးဝ တားမြစ်ထားပါသည်။
                    </p>
                  </div>
                )}
              </div>
            </section>

            {/* Section 07 */}
            <section
              className="p-8 rounded-3xl bg-white border border-slate-100 shadow-sm scroll-mt-28"
              id="section-07"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="px-2.5 py-1 rounded-lg bg-teal-50 text-teal-700 font-code-mono text-xs font-semibold">
                  07
                </span>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                    Referral Program &amp; Affiliate Payouts
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 font-['Noto_Sans_Myanmar']">
                    မိတ်ဆက်ညွှန်းဆိုမှု စနစ်နှင့် ကော်မရှင်ထုတ်ပေးခြင်း
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                {showEn && (
                  <div className="space-y-4">
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Referral bonuses, commissions, and payout schedules are governed by the specific rules posted within the BnB Partner Portal. Commissions accrue exclusively upon verified, non-fraudulent point purchases made by newly introduced clients who register via your valid referral link.
                    </p>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      UTS Myanmar explicitly reserves the unilateral right to withhold, cancel, or permanently forfeit referral balances, and terminate affiliate accounts where self-referrals, click-fraud, bogus account cycling, or unauthorized brand representation is identified.
                    </p>
                  </div>
                )}

                {showMy && (
                  <div className="p-6 rounded-2xl bg-slate-50 text-slate-900 font-['Noto_Sans_Myanmar'] space-y-3 border border-slate-100">
                    <div className="text-xs text-teal-700 uppercase font-bold tracking-wider mb-1">
                      မြန်မာဘာသာ ပြန်ဆိုချက်
                    </div>
                    <p className="text-sm leading-relaxed">
                      မိတ်ဆက်ညွှန်းဆိုမှု (Referral) ဆိုင်ရာ ကော်မရှင်များနှင့် အကျိုးခံစားခွင့်များကို Referral Portal တွင် သတ်မှတ်ထားသည့် စည်းကမ်းချက်များနှင့်အညီ ထုတ်ပေးမည်ဖြစ်ပါသည်။
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      လိမ်လည်မှု၊ မိမိကိုယ်ကို ပြန်လည်ညွှန်းဆိုမှု သို့မဟုတ် မသမာသော နည်းလမ်းများဖြင့် ရယူထားကြောင်း စစ်ဆေးတွေ့ရှိပါက UTS Myanmar သည် ကော်မရှင်ထုတ်ပေးမှုကို ဆိုင်းငံ့ခြင်း သို့မဟုတ် ပယ်ဖျက်ခွင့် ရှိပါသည်။
                    </p>
                  </div>
                )}
              </div>
            </section>

            {/* Section 08 */}
            <section
              className="p-8 rounded-3xl bg-white border border-slate-100 shadow-sm scroll-mt-28"
              id="section-08"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="px-2.5 py-1 rounded-lg bg-teal-50 text-teal-700 font-code-mono text-xs font-semibold">
                  08
                </span>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                    Intellectual Property &amp; Commercial Usage
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 font-['Noto_Sans_Myanmar']">
                    မူပိုင်ခွင့်နှင့် စီးပွားရေးဆိုင်ရာ အသုံးပြုခွင့်
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                {showEn && (
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                        <h4 className="text-xs font-bold text-slate-900 mb-1">
                          Platform Ownership
                        </h4>
                        <p className="text-xs text-slate-600">
                          UTS Myanmar retains all rights, title, trademarks, system source code, design architectures, and neural fine-tunes comprising Boss &amp; Bots.
                        </p>
                      </div>
                      <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                        <h4 className="text-xs font-bold text-slate-900 mb-1">
                          Your Commercial Output
                        </h4>
                        <p className="text-xs text-slate-600">
                          You retain commercial rights to the final ad copy, generated slogans, and customized image outputs produced through points expended on your account.
                        </p>
                      </div>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      By uploading brand assets, prompt context, or image templates to the platform, you grant UTS Myanmar a non-exclusive, worldwide, royalty-free license solely to host, run, and display such data as strictly needed to provide the services.
                    </p>
                  </div>
                )}

                {showMy && (
                  <div className="p-6 rounded-2xl bg-slate-50 text-slate-900 font-['Noto_Sans_Myanmar'] space-y-3 border border-slate-100">
                    <div className="text-xs text-teal-700 uppercase font-bold tracking-wider mb-1">
                      မြန်မာဘာသာ ပြန်ဆိုချက်
                    </div>
                    <p className="text-sm leading-relaxed">
                      Boss &amp; Bots စနစ်တစ်ခုလုံး၏ ဆော့ဖ်ဝဲလ်၊ အမှတ်တံဆိပ်နှင့် နည်းပညာ မူပိုင်ခွင့်အားလုံးကို UTS Myanmar မှ ပိုင်ဆိုင်ပါသည်။
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      သုံးစွဲသူသည် မိမိ၏ Points များကို အသုံးပြု၍ ထုတ်လုပ်ထားသော ကြော်ငြာစာသားနှင့် ဒီဇိုင်းများကို မိမိ၏ စီးပွားရေးလုပ်ငန်းအတွက် တရားဝင် အသုံးပြုခွင့် ရရှိမည် ဖြစ်ပါသည်။
                    </p>
                  </div>
                )}
              </div>
            </section>

            {/* Section 09 */}
            <section
              className="p-8 rounded-3xl bg-white border border-slate-100 shadow-sm scroll-mt-28"
              id="section-09"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="px-2.5 py-1 rounded-lg bg-teal-50 text-teal-700 font-code-mono text-xs font-semibold">
                  09
                </span>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                    Service Availability &amp; Liability Limitations
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 font-['Noto_Sans_Myanmar']">
                    ဝန်ဆောင်မှု ရရှိနိုင်မှုနှင့် တာဝန်ခံမှု ကန့်သတ်ချက်များ
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                {showEn && (
                  <div className="space-y-4">
                    <p className="text-base text-slate-900 leading-relaxed">
                      The service is provided on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis. UTS Myanmar disclaims all express or statutory warranties, including merchantability, fitness for a particular purpose, or uninterrupted, bug-free availability in Myanmar.
                    </p>
                    {/* Emphasized Liability Cap Callout */}
                    <div className="p-5 rounded-2xl bg-rose-50 border border-rose-200 text-rose-900 space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-base text-rose-700">
                          warning
                        </span>
                        <span className="text-xs font-bold uppercase tracking-wider text-rose-800">
                          Absolute Statutory Liability Cap
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm leading-relaxed text-rose-950">
                        In no event shall UTS Myanmar, its affiliates, directors, or employees be liable for any lost profits, data loss, business interruption, or indirect, consequential damages. In all scenarios, UTS Myanmar&apos;s cumulative aggregate legal liability shall not exceed the total sum paid by you to UTS Myanmar in the three (3) months immediately preceding the claim, or <strong>MMK 50,000 (Fifty Thousand Myanmar Kyats)</strong>, whichever amount is lesser.
                      </p>
                    </div>
                  </div>
                )}

                {showMy && (
                  <div className="p-6 rounded-2xl bg-slate-50 text-slate-900 font-['Noto_Sans_Myanmar'] space-y-3 border border-slate-100">
                    <div className="text-xs text-teal-700 uppercase font-bold tracking-wider mb-1">
                      မြန်မာဘာသာ ပြန်ဆိုချက်
                    </div>
                    <p className="text-sm leading-relaxed">
                      စနစ်ချို့ယွင်းမှု၊ အင်တာနက်လိုင်းပြတ်တောက်မှု သို့မဟုတ် အခြားသော အကြောင်းအမျိုးမျိုးကြောင့် ဝန်ဆောင်မှု ရပ်တန့်ခြင်းများအတွက် UTS Myanmar မှ ကြိုတင်အာမခံချက် မပေးနိုင်ပါ။
                    </p>
                    <p className="text-xs text-rose-800 leading-relaxed font-semibold">
                      မည်သည့် ဆုံးရှုံးမှု သို့မဟုတ် ထိခိုက်မှုအတွက်မဆို UTS Myanmar ၏ အများဆုံး လျော်ကြေးပေးအပ်နိုင်သည့် တာဝန်ယူမှု ပမာဏသည် သုံးစွဲသူမှ လွန်ခဲ့သော ၃ လအတွင်း အမှန်တကယ် ပေးချေခဲ့သော ပမာဏ သို့မဟုတ် ကျပ် ၅၀,၀၀၀ (ငါးသောင်းကျပ်တိတိ) ထက် မကျော်လွန်စေရပါ။
                    </p>
                  </div>
                )}
              </div>
            </section>

            {/* Section 10 */}
            <section
              className="p-8 rounded-3xl bg-white border border-slate-100 shadow-sm scroll-mt-28"
              id="section-10"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="px-2.5 py-1 rounded-lg bg-teal-50 text-teal-700 font-code-mono text-xs font-semibold">
                  10
                </span>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                    Applicable Law, Jurisdiction &amp; Amendments
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 font-['Noto_Sans_Myanmar']">
                    သက်ဆိုင်ရာ ဥပဒေ၊ တရားစီရင်ပိုင်ခွင့်နှင့် ပြင်ဆင်ချက်များ
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                {showEn && (
                  <div className="space-y-4">
                    <p className="text-base text-slate-900 leading-relaxed">
                      These Terms and any dispute or claim arising out of or related to their interpretation shall be governed exclusively by the laws of the <strong>Republic of the Union of Myanmar</strong>. The courts located in <strong>Yangon, Myanmar</strong> shall maintain exclusive territorial and subject matter jurisdiction over any legal proceedings.
                    </p>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      We reserve the right to revise these Terms periodically. We will signal changes by updating the &quot;Last updated&quot; dateline atop this document. Continued use of Boss &amp; Bots following the effective publication of revisions constitutes acceptance of those amendments.
                    </p>
                  </div>
                )}

                {showMy && (
                  <div className="p-6 rounded-2xl bg-slate-50 text-slate-900 font-['Noto_Sans_Myanmar'] space-y-3 border border-slate-100">
                    <div className="text-xs text-teal-700 uppercase font-bold tracking-wider mb-1">
                      မြန်မာဘာသာ ပြန်ဆိုချက်
                    </div>
                    <p className="text-sm leading-relaxed">
                      ဤစည်းမျဉ်းစည်းကမ်းများသည် ပြည်ထောင်စုသမ္မတမြန်မာနိုင်ငံတော်၏ တည်ဆဲဥပဒေများနှင့်အညီ အကျုံးဝင်ပြီး အငြင်းပွားမှုများ ပေါ်ပေါက်လာပါက ရန်ကုန်မြို့ရှိ သက်ဆိုင်ရာ တရားရုံးများတွင်သာ ဖြေရှင်းဆောင်ရွက်ရပါမည်။
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      စည်းကမ်းချက်များကို လိုအပ်သလို အချိန်နှင့်တပြေးညီ ပြင်ဆင်နိုင်ပြီး ဝက်ဘ်ဆိုက်ပေါ်တွင် ဖော်ပြထားသည့် နေ့ရက်မှစတင်၍ အကျိုးသက်ရောက်မှု ရှိစေမည် ဖြစ်ပါသည်။
                    </p>
                  </div>
                )}
              </div>
            </section>

            {/* Official Contact Details Block */}
            <div className="p-8 rounded-3xl bg-slate-100 border border-slate-200/80 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="space-y-2">
                <span className="text-xs text-teal-700 font-bold uppercase tracking-wider">
                  Formal Governance Contact
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                  UTS Myanmar Legal Administration
                </h3>
                <p className="text-xs sm:text-sm text-slate-600">
                  Direct inquiries regarding compliance, enterprise data processing agreements, or regulatory notifications:
                </p>
                <div className="flex flex-wrap items-center gap-6 pt-2 text-xs sm:text-sm text-slate-900">
                  <a
                    className="flex items-center gap-1.5 text-teal-700 hover:underline font-medium"
                    href="mailto:bnb@utsmyanmar.com"
                  >
                    <span className="material-symbols-outlined text-sm">mail</span>
                    bnb@utsmyanmar.com
                  </a>
                  <a
                    className="flex items-center gap-1.5 text-teal-700 hover:underline font-medium"
                    href="https://utsmyanmar.com"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <span className="material-symbols-outlined text-sm">language</span>
                    utsmyanmar.com
                  </a>
                  <span className="flex items-center gap-1.5 text-slate-500">
                    <span className="material-symbols-outlined text-sm">location_city</span>
                    Yangon Innovation Center, Myanmar
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => scrollTo("section-01")}
                className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800 transition-colors shadow-sm"
              >
                <span className="material-symbols-outlined text-base">arrow_upward</span>
                Back to Top
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
