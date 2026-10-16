"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useOnboarding } from "@/context/OnboardingContext";

const SPY_SECTIONS = [
  { id: "hero", label: "Overview" },
  { id: "how-it-works", label: "3-Step Flow" },
  { id: "why-choose-us", label: "Why Us" },
  { id: "solutions", label: "AI Workforce" },
  { id: "special-offer", label: "Offer" },
];

export default function HomePage() {
  const { openOnboarding } = useOnboarding();
  const [overrideActive, setOverrideActive] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 250;
      let current = "";
      for (const { id } of SPY_SECTIONS) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            current = id;
          }
        }
      }
      if (!current && window.scrollY < 250) {
        current = "hero";
      }
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Stitch Desktop Vertical Scrollspy Indicator - Fixed to Viewport */}
      <nav
        aria-label="Page Navigation"
        className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-start gap-3 p-3 bg-white/70 backdrop-blur-md border border-slate-200/80 rounded-2xl shadow-sm"
      >
        <div className="px-1.5 pb-1 border-b border-slate-200/60 w-full mb-0.5">
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
            Jump To
          </span>
        </div>
        <div className="relative flex flex-col gap-1 w-full">
          {/* Connecting Vertical Track */}
          <div className="absolute left-[11px] top-2 bottom-2 w-0.5 bg-slate-200 -z-0"></div>
          {SPY_SECTIONS.map((sec) => {
            const isActive = activeSection === sec.id;
            return (
              <a
                key={sec.id}
                href={`#${sec.id}`}
                className={`scrollspy-link group relative z-10 flex items-center gap-2.5 py-1 px-1.5 rounded-lg transition-all ${
                  isActive
                    ? "text-teal-700 font-semibold"
                    : "text-slate-500 hover:text-teal-700"
                }`}
              >
                <span
                  className={`indicator-dot w-2.5 h-2.5 rounded-full ring-4 ring-white transition-all ${
                    isActive
                      ? "bg-teal-700 scale-125"
                      : "bg-slate-300 group-hover:bg-teal-600"
                  }`}
                ></span>
                <span
                  className={`indicator-text text-[11px] font-medium tracking-tight whitespace-nowrap ${
                    isActive ? "text-teal-900 font-semibold" : ""
                  }`}
                >
                  {sec.label}
                </span>
              </a>
            );
          })}
        </div>
      </nav>

      {/* Main Landing Page Content */}
      <div className="flex flex-col w-full bg-[#f8fafc] animate-page-fade">
        {/* Subtle decorative ambient backdrop */}
        <div className="relative w-full overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[550px] bg-gradient-to-b from-teal-200/30 via-teal-700/5 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

        {/* HERO SECTION */}
        <section
          id="hero"
          className="max-w-7xl mx-auto px-6 lg:px-12 pt-10 pb-20 lg:pt-14 lg:pb-28 animate-section-rise"
        >
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200/80 shadow-[0_2px_12px_rgba(0,0,0,0.03)] mb-6 transition-all hover:bg-slate-50">
              <span className="w-2 h-2 rounded-full bg-teal-700"></span>
              <span className="font-label-sm text-xs tracking-wide text-teal-800 font-semibold uppercase">
                AI WORKFORCE FOR MYANMAR SMES · POWERED BY UTS MYANMAR
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display-hero text-4xl sm:text-5xl lg:text-6xl text-slate-900 tracking-tight font-bold mb-5 leading-tight">
              The Boss Runs the Business.
              <br className="hidden sm:inline" />{" "}
              <span className="text-teal-700">Bots Handle the Work.</span>
            </h1>

            {/* Subtitle in Burmese */}
            <p className="font-headline-md text-lg sm:text-2xl text-slate-800 font-medium max-w-3xl mb-4 leading-relaxed">
              ဆိုင်ရှင်က စီးပွားရေးကို ဦးဆောင်၊ Bot များက အလုပ်များကို ၂၄ နာရီ မမောမပန်း တာဝန်ယူပေးပါသည်။
            </p>

            {/* Detailed Value Pitch in Burmese */}
            <p className="font-body-lg text-base sm:text-lg text-slate-600 max-w-2xl mb-8 leading-relaxed">
              Facebook Messenger နှင့် Telegram စာပို့ချက်များကို အချိန်နှင့်တပြေးညီ အတိအကျဖြေကြားပေးပြီး၊ အော်ဒါကောက်ယူခြင်း၊ စတော့စာရင်းစစ်ဆေးခြင်းနှင့် ပိုင်ရှင်ထံ တိုက်ရိုက်သတိပေးခြင်းများကို AI စနစ်ဖြင့် အလိုအလျောက် ဆောင်ရွက်ပေးသည်။
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-14">
              <button
                type="button"
                onClick={openOnboarding}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-teal-700 hover:bg-teal-800 text-white font-label-md font-semibold text-sm transition-all shadow-md hover:-translate-y-0.5 active:scale-95 cursor-pointer"
              >
                <span>Build Your AI Bot (စတင်တည်ဆောက်မည်)</span>
                <span className="material-symbols-outlined text-[18px]">
                  arrow_forward
                </span>
              </button>
              <a
                href="#interactive-demo"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white hover:bg-slate-50 text-slate-800 font-label-md text-sm font-semibold border border-slate-200/80 shadow-xs transition-all hover:-translate-y-0.5 cursor-pointer"
              >
                <span className="material-symbols-outlined text-teal-700 text-[18px]">
                  play_circle
                </span>
                <span>စနစ်အလုပ်လုပ်ပုံ ကြည့်မည် (Interactive Demo)</span>
              </a>
            </div>

            {/* Floating Product Preview Card */}
            <div className="w-full relative mt-4" id="interactive-demo">
              <div className="w-full rounded-3xl bg-white card-soft-shadow p-4 sm:p-6 lg:p-8 text-left">
                {/* Mockup Header Bar */}
                <div className="flex flex-wrap items-center justify-between pb-5 mb-6 gap-3 bg-slate-50/80 border-b border-slate-100 -mx-4 -mt-4 sm:-mx-6 sm:-mt-6 lg:-mx-8 lg:-mt-8 p-4 sm:p-6 rounded-t-3xl">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-300"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
                    <span className="ml-2 font-code-mono text-xs sm:text-sm text-slate-600 font-medium">
                      BnB Bot Studio · Live Workspace
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 border border-teal-100 text-teal-800 text-xs font-semibold">
                      <span className="w-2 h-2 rounded-full bg-teal-600 animate-pulse"></span>
                      Active Channels: Messenger &amp; Telegram
                    </span>
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-600 text-xs">
                      <span className="material-symbols-outlined text-[14px]">
                        sync
                      </span>
                      Live Sync
                    </span>
                  </div>
                </div>

                {/* Two Column Simulation: Live Chat Bot vs Boss Dashboard */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                  {/* Left: Live Customer Conversation */}
                  <div className="lg:col-span-7 rounded-2xl bg-slate-50/70 border border-slate-100 p-5 flex flex-col justify-between">
                    <div className="flex items-center justify-between pb-4 mb-4 bg-white px-4 py-2.5 rounded-xl border border-slate-100 shadow-[0_0_12px_rgba(0,0,0,0.02)]">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-teal-100 flex items-center justify-center font-bold text-teal-900 text-sm">
                          သ
                        </div>
                        <div>
                          <p className="font-label-md text-sm font-semibold text-slate-900">
                            မသဉ္ဇာဦး (Facebook Messenger)
                          </p>
                          <p className="font-body-sm text-xs text-slate-500">
                            Active now · Yangon
                          </p>
                        </div>
                      </div>
                      <span className="px-2.5 py-0.5 rounded-full bg-teal-50 border border-teal-200/60 text-teal-800 text-xs font-semibold">
                        Automated Sale
                      </span>
                    </div>

                    {/* Chat Stream */}
                    <div className="space-y-4 py-2">
                      {/* Customer Message */}
                      <div className="flex items-start gap-2.5 max-w-[85%]">
                        <div className="w-7 h-7 rounded-full bg-slate-200 flex-shrink-0 flex items-center justify-center text-slate-700 text-xs font-bold">
                          C
                        </div>
                        <div className="p-3.5 rounded-2xl rounded-tl-sm bg-white border border-slate-100 shadow-[0_0_12px_rgba(0,0,0,0.02)] text-left">
                          <p className="font-body-md text-sm text-slate-800 leading-relaxed">
                            မင်္ဂလာပါရှင်၊ ဒီ Floral Summer Dress ရဲ့ Size L အနက်ရောင် ကျန်သေးလားရှင့်? ဈေးဘယ်လောက်လဲ?
                          </p>
                          <span className="font-code-mono text-[11px] text-slate-400 mt-1 inline-block">
                            14:22:04
                          </span>
                        </div>
                      </div>

                      {/* Bot Response */}
                      <div className="flex items-start justify-end gap-2.5 ml-auto max-w-[88%]">
                        <div className="p-4 rounded-2xl rounded-tr-sm bg-teal-700 text-white shadow-sm text-left">
                          <div className="flex items-center gap-1.5 mb-1.5">
                            <span className="material-symbols-outlined text-[15px] text-teal-200">
                              smart_toy
                            </span>
                            <span className="font-label-sm text-[12px] font-semibold text-teal-200">
                              BnB Retail Bot (0.4s response)
                            </span>
                          </div>
                          <p className="font-body-md text-sm leading-relaxed text-white">
                            ဟုတ်ကဲ့ မင်္ဂလာပါ မသဉ္ဇာဦးရှင်! Floral Summer Dress (Black - Size L) လက်ရှိဆိုင်တွင်{" "}
                            <strong>Stock ၃ ထည်</strong> ကျန်ရှိပါသေးတယ်ရှင်။
                          </p>
                          <div className="mt-2.5 p-2 rounded-xl bg-teal-900/40 border border-teal-500/20 text-white text-xs flex justify-between items-center">
                            <span>🏷️ စျေးနှုန်း: <strong>၃၈,၀၀၀ ကျပ်</strong></span>
                            <span className="text-teal-200 font-semibold">Free Delivery (Yangon)</span>
                          </div>
                          <p className="text-xs mt-2 text-teal-100">
                            အမည်၊ ဖုန်းနံပါတ် နှင့် ပို့ရမည့် လိပ်စာ ပေးပို့ပြီး အခုချက်ချင်း အော်ဒါအတည်ပြုနိုင်ပါတယ်ရှင်။
                          </p>
                          <span className="font-code-mono text-[11px] text-teal-200/80 mt-1 inline-block">
                            14:22:05 · Auto-verified with ERP
                          </span>
                        </div>
                      </div>

                      {/* Customer Confirmation */}
                      <div className="flex items-start gap-2.5 max-w-[85%]">
                        <div className="w-7 h-7 rounded-full bg-slate-200 flex-shrink-0 flex items-center justify-center text-slate-700 text-xs font-bold">
                          C
                        </div>
                        <div className="p-3.5 rounded-2xl rounded-tl-sm bg-white border border-slate-100 shadow-[0_0_12px_rgba(0,0,0,0.02)] text-left">
                          <p className="font-body-md text-sm text-slate-800">
                            ဟုတ်ကဲ့ ၁ ထည် ယူပါမယ်ရှင်။ မသဉ္ဇာဦး - ၀၉၄၅၀၀၁၂၃၄၅၊ ကမာရွတ်မြို့နယ်ပါ။ KPay နဲ့ ပေးချေပါမယ်။
                          </p>
                          <span className="font-code-mono text-[11px] text-slate-400 mt-1 inline-block">
                            14:23:10
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Input Preview */}
                    <div className="mt-4 pt-3 flex items-center gap-2">
                      <div className="flex-1 py-2 px-4 rounded-xl bg-white border border-slate-100 text-slate-500 text-xs shadow-[0_0_12px_rgba(0,0,0,0.02)] flex items-center justify-between">
                        <span>
                          Bot is processing order confirmation &amp; KPay QR auto-dispatch...
                        </span>
                        <span className="material-symbols-outlined text-teal-700 text-[18px]">
                          bolt
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Right: Real-time Boss Oversight & Inventory Control */}
                  <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
                    {/* Boss Notification Box */}
                    <div className="p-4 rounded-2xl bg-slate-50/70 border border-slate-100">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <div className="w-7 h-7 rounded-full bg-amber-100 flex items-center justify-center text-amber-800">
                            <span className="material-symbols-outlined text-[16px]">
                              notifications_active
                            </span>
                          </div>
                          <span className="font-headline-sm text-sm font-semibold text-slate-900">
                            Boss Alert
                          </span>
                        </div>
                        <span className="text-[11px] text-amber-800 bg-amber-100/70 border border-amber-200/50 px-2 py-0.5 rounded-full font-medium">
                          Just Now
                        </span>
                      </div>
                      <div className="p-3 rounded-xl bg-white border border-slate-100 shadow-[0_0_12px_rgba(0,0,0,0.02)]">
                        <p className="font-label-md text-sm font-semibold text-slate-900">
                          New Verified Order #ORD-8942
                        </p>
                        <p className="font-body-sm text-xs text-slate-600 mt-0.5">
                          Floral Summer Dress (L, Black) · 38,000 MMK
                        </p>
                        <div className="mt-2 flex items-center gap-2">
                          <span className="px-2 py-0.5 rounded-md bg-teal-50 border border-teal-200 text-teal-800 text-[11px] font-semibold">
                            Stock Updated: 2 left
                          </span>
                          <span className="px-2 py-0.5 rounded-md bg-slate-100 border border-slate-200 text-slate-700 text-[11px]">
                            KPay Invoice Sent
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Live Performance Stats Widget */}
                    <div className="p-4 rounded-2xl bg-slate-50/70 border border-slate-100">
                      <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold mb-3">
                        Today&apos;s Real-time Activity
                      </p>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="p-3 rounded-xl bg-white border border-slate-100 shadow-[0_0_12px_rgba(0,0,0,0.02)]">
                          <span className="text-xs text-slate-500 block">Total Inquiries</span>
                          <span className="text-xl font-bold text-slate-900">184</span>
                          <span className="font-code-mono text-[11px] text-teal-700 font-medium block mt-1">
                            ↑ 100% Resolved by Bot
                          </span>
                        </div>
                        <div className="p-3 rounded-xl bg-white border border-slate-100 shadow-[0_0_12px_rgba(0,0,0,0.02)]">
                          <span className="text-xs text-slate-500 block">Avg Response</span>
                          <span className="text-xl font-bold text-slate-900">0.8s</span>
                          <span className="font-code-mono text-[11px] text-teal-700 font-medium block mt-1">
                            ⚡ Instant AI Sync
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Owner Takeover Switch Demo */}
                    <div className="p-4 rounded-2xl bg-slate-100/60 border border-slate-200/60 flex items-center justify-between">
                      <div>
                        <span className="text-sm font-semibold text-slate-900 block">
                          Boss Supervision Override
                        </span>
                        <span className="text-xs text-slate-600">
                          လိုချင်သည့်အချိန်တွင် ဆိုင်ရှင်ကိုယ်တိုင် ဝင်ရောက်ပြောဆိုနိုင်သည်
                        </span>
                      </div>
                      <button
                        onClick={() => setOverrideActive(!overrideActive)}
                        className={`w-12 h-6 rounded-full p-0.5 flex items-center transition-colors ${
                          overrideActive ? "bg-teal-700 justify-end" : "bg-slate-900 justify-end"
                        }`}
                        title="Toggle Owner Override"
                      >
                        <div className="w-5 h-5 rounded-full bg-white shadow-sm"></div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Trust Proof Banner */}
            <div className="w-full mt-16 pt-10">
              <p className="text-sm text-slate-500 font-medium mb-6">
                မြန်မာနိုင်ငံ၏ ထိပ်တန်းဘဏ်များနှင့် လုပ်ငန်းပေါင်း ၅၀၀+ ကျော် အသုံးပြုနေသော UTS Myanmar ၏ နည်းပညာအခြေခံ
              </p>
              <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 opacity-70 hover:opacity-100 transition-opacity">
                <span className="text-lg sm:text-xl font-bold tracking-tight text-slate-800">
                  KBZ Bank
                </span>
                <span className="text-lg sm:text-xl font-bold tracking-tight text-slate-800">
                  CB Bank
                </span>
                <span className="text-lg sm:text-xl font-bold tracking-tight text-slate-800">
                  Yoma Bank
                </span>
                <span className="text-lg sm:text-xl font-bold tracking-tight text-slate-800">
                  A Bank
                </span>
                <span className="text-lg sm:text-xl font-bold tracking-tight text-slate-800">
                  uab bank
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* CORE METRICS STRIP */}
      <section className="w-full py-12 bg-slate-50/60 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Metric Card 1 */}
            <div className="p-6 rounded-3xl bg-white card-soft-shadow transition-all hover:-translate-y-0.5">
              <div className="w-10 h-10 rounded-2xl bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-800 mb-4">
                <span className="material-symbols-outlined">schedule</span>
              </div>
              <p className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">24 Hours</p>
              <p className="text-sm font-semibold text-teal-700 mt-1">အချိန်ပြည့် တုံ့ပြန်မှု</p>
              <p className="text-xs text-slate-600 mt-2">
                ညသန်းခေါင်ယံအချိန်အထိ စာမကျန်စေဘဲ Customer တစ်ဦးချင်းစီကို ချက်ချင်းဖြေကြားပေးပါသည်။
              </p>
            </div>
            {/* Metric Card 2 */}
            <div className="p-6 rounded-3xl bg-white card-soft-shadow transition-all hover:-translate-y-0.5">
              <div className="w-10 h-10 rounded-2xl bg-slate-100 border border-slate-200/80 flex items-center justify-center text-slate-700 mb-4">
                <span className="material-symbols-outlined">verified</span>
              </div>
              <p className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">98.5%</p>
              <p className="text-sm font-semibold text-teal-700 mt-1">တိကျမှန်ကန်သော အချက်အလက်</p>
              <p className="text-xs text-slate-600 mt-2">
                ဆိုင်၏ SOP နှင့် Stock စာရင်းအတိုင်းသာ တိကျစွာဖြေကြားပေးပြီး အချက်အလက်လွဲချော်မှုမရှိစေရ။
              </p>
            </div>
            {/* Metric Card 3 */}
            <div className="p-6 rounded-3xl bg-white card-soft-shadow transition-all hover:-translate-y-0.5">
              <div className="w-10 h-10 rounded-2xl bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-800 mb-4">
                <span className="material-symbols-outlined">bolt</span>
              </div>
              <p className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">10x Faster</p>
              <p className="text-sm font-semibold text-teal-700 mt-1">Customer Enquiry ဖြေကြားမှုနှုန်း</p>
              <p className="text-xs text-slate-600 mt-2">
                ဝယ်ယူသူ မစောင့်ဆိုင်းရတော့ဘဲ စက္ကန့်ပိုင်းအတွင်း ဖြေကြားနိုင်သောကြောင့် အရောင်းပိတ်နှုန်း သိသိသာသာတက်လာသည်။
              </p>
            </div>
            {/* Metric Card 4 */}
            <div className="p-6 rounded-3xl bg-white card-soft-shadow transition-all hover:-translate-y-0.5">
              <div className="w-10 h-10 rounded-2xl bg-amber-50 border border-amber-200/80 flex items-center justify-center text-amber-800 mb-4">
                <span className="material-symbols-outlined">handshake</span>
              </div>
              <p className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">5 / Week</p>
              <p className="text-sm font-semibold text-teal-700 mt-1">အခမဲ့ Business Consulting</p>
              <p className="text-xs text-slate-600 mt-2">
                တစ်ပတ်လျှင် လုပ်ငန်းရှင် ၅ ဦးအတွက်သာ အထူးအခမဲ့ စနစ်စမ်းသပ်အကဲဖြတ်မှု ခွင့်ပြုပေးပါသည်။
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3-STEP SIMPLE WORKFLOW */}
      <section id="how-it-works" className="max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-28">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-wider font-semibold text-teal-700 px-3 py-1 rounded-full bg-teal-50 border border-teal-100 inline-block mb-3">
            HOW BOSS &amp; BOTS WORKS
          </span>
          <h2 className="text-3xl sm:text-4xl text-slate-900 font-bold tracking-tight">
            Boss &amp; Bots အလုပ်လုပ်ပုံ အဆင့် ၃ ဆင့်
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-3">
            ရှုပ်ထွေးသော နည်းပညာအသိပညာ မလိုဘဲ မိနစ်ပိုင်းအတွင်း စတင်အသုံးပြုနိုင်သော စနစ်
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* STEP 1 */}
          <div className="p-8 rounded-3xl bg-white card-soft-shadow transition-all hover:-translate-y-0.5 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="font-code-mono text-lg font-bold text-teal-700">STEP 01</span>
                <div className="w-10 h-10 rounded-2xl bg-slate-100 flex items-center justify-center text-teal-700 group-hover:scale-105 transition-transform">
                  <span className="material-symbols-outlined">upload_file</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Data Import &amp; Training</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                သင့်ဆိုင်၏ Product Catalog, ပုံများ၊ ဈေးနှုန်းများ၊ specifications များကို Excel/CSV ဖိုင်ဖြင့် လွယ်ကူစွာ တင်သွင်းပြီး ဆိုင်၏ ဝန်ဆောင်မှု စည်းမျဉ်း (SOP) ကို သင်ကြားပေးပါ။
              </p>
            </div>
            <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100 flex items-center gap-3">
              <span className="material-symbols-outlined text-teal-700 text-[20px]">check_circle</span>
              <span className="text-xs text-slate-600 font-medium">Auto-reads CSV, PDF &amp; Images</span>
            </div>
          </div>
          {/* STEP 2 */}
          <div className="p-8 rounded-3xl bg-white card-soft-shadow transition-all hover:-translate-y-0.5 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="font-code-mono text-lg font-bold text-teal-700">STEP 02</span>
                <div className="w-10 h-10 rounded-2xl bg-slate-100 flex items-center justify-center text-teal-700 group-hover:scale-105 transition-transform">
                  <span className="material-symbols-outlined">hub</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Channel Integration</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                သင့်ရဲ့ Facebook Messenger Page နှင့် Telegram Channel ကို ကလစ်တစ်ချက်နှိပ်ရုံဖြင့် ချိတ်ဆက်ပြီး ၂၄ နာရီ inquiry များကို လူမလိုဘဲ အလိုအလျောက် ဖြေကြားစေပါ။
              </p>
            </div>
            <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100 flex items-center gap-3">
              <span className="material-symbols-outlined text-teal-700 text-[20px]">check_circle</span>
              <span className="text-xs text-slate-600 font-medium">1-Click Direct API Connect</span>
            </div>
          </div>
          {/* STEP 3 */}
          <div className="p-8 rounded-3xl bg-white card-soft-shadow transition-all hover:-translate-y-0.5 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="font-code-mono text-lg font-bold text-teal-700">STEP 03</span>
                <div className="w-10 h-10 rounded-2xl bg-slate-100 flex items-center justify-center text-teal-700 group-hover:scale-105 transition-transform">
                  <span className="material-symbols-outlined">dashboard_customize</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Manage &amp; Monitor</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Owner Dashboard မှတစ်ဆင့် စကားပြော log များ၊ အရောင်းစာရင်း၊ stock လက်ကျန်များကို အချိန်နှင့်တပြေးညီ စောင့်ကြည့်ပြီး လိုအပ်ပါက ကိုယ်တိုင်ဝင်ရောက်ထိန်းချုပ်နိုင်ပါသည်။
              </p>
            </div>
            <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100 flex items-center gap-3">
              <span className="material-symbols-outlined text-teal-700 text-[20px]">check_circle</span>
              <span className="text-xs text-slate-600 font-medium">Real-time Boss Mobile &amp; Desktop View</span>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM VS SOLUTION MATRIX */}
      <section className="w-full py-20 bg-slate-50/60 border-y border-slate-100" id="why-choose-us">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-wider font-semibold text-teal-700 px-3 py-1 rounded-full bg-teal-50 border border-teal-100 inline-block mb-3">
              WHY CHOOSE BOSS &amp; BOTS
            </span>
            <h2 className="text-3xl sm:text-4xl text-slate-900 font-bold tracking-tight">
              ဘာကြောင့် Boss &amp; Bots ကို ရွေးချယ်သင့်တာလဲ?
            </h2>
            <p className="text-base text-slate-600 mt-3">
              ရိုးရိုးဝန်ထမ်းခန့်ထားခြင်းနှင့် ခေတ်မီ AI ဝန်ထမ်းခန့်ထားခြင်းတို့၏ လက်တွေ့ကွာခြားချက်များ
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {/* Row 1 */}
            <div className="p-6 rounded-3xl bg-white card-soft-shadow flex flex-col justify-between">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-2xl bg-rose-50 border border-rose-100 flex items-center justify-center text-rose-700 flex-shrink-0">
                  <span className="material-symbols-outlined text-[20px]">person_off</span>
                </div>
                <div>
                  <span className="text-xs text-rose-700 font-semibold uppercase">ယခင်ရင်ဆိုင်ရသောအခက်အခဲ</span>
                  <h4 className="text-base font-semibold text-slate-900 mt-1">ဝန်ထမ်းအပြောင်းအလဲများခြင်း</h4>
                  <p className="text-sm text-slate-600 mt-2">ဝန်ထမ်းထွက်သွားတိုင်း လုပ်ငန်းအတွေ့အကြုံနှင့် စကားပြောကျွမ်းကျင်မှု ပျောက်ဆုံးသွားခြင်း။</p>
                </div>
              </div>
            </div>
            <div className="p-6 rounded-3xl bg-white card-soft-shadow flex flex-col justify-between">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-2xl bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-700 flex-shrink-0">
                  <span className="material-symbols-outlined text-[20px]">smart_toy</span>
                </div>
                <div>
                  <span className="text-xs text-teal-700 font-semibold uppercase">Boss &amp; Bots ဖြေရှင်းချက်</span>
                  <h4 className="text-base font-semibold text-slate-900 mt-1">SOP နှင့် Product Data အမြဲတည်တံ့နေခြင်း</h4>
                  <p className="text-sm text-slate-600 mt-2">AI သည် ထွက်ပြေးခြင်းမရှိဘဲ ဆိုင်၏စည်းမျဉ်းအတိုင်း တစ်သက်လုံး စံချိန်မီ ဝန်ဆောင်မှုပေးသည်။</p>
                </div>
              </div>
            </div>
            {/* Row 2 */}
            <div className="p-6 rounded-3xl bg-white card-soft-shadow flex flex-col justify-between">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-2xl bg-rose-50 border border-rose-100 flex items-center justify-center text-rose-700 flex-shrink-0">
                  <span className="material-symbols-outlined text-[20px]">history_edu</span>
                </div>
                <div>
                  <span className="text-xs text-rose-700 font-semibold uppercase">ယခင်ရင်ဆိုင်ရသောအခက်အခဲ</span>
                  <h4 className="text-base font-semibold text-slate-900 mt-1">အသစ်ရောက်တိုင်း ထပ်ခါတလဲလဲ သင်ကြားပေးရခြင်း</h4>
                  <p className="text-sm text-slate-600 mt-2">ကုန်ပစ္စည်းအသစ်ဝင်တိုင်း ဝန်ထမ်းအားလုံးကို ရှင်းပြသင်ကြားပေးရန် အချိန်ကုန်ဆုံးခြင်း။</p>
                </div>
              </div>
            </div>
            <div className="p-6 rounded-3xl bg-white card-soft-shadow flex flex-col justify-between">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-2xl bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-700 flex-shrink-0">
                  <span className="material-symbols-outlined text-[20px]">dataset</span>
                </div>
                <div>
                  <span className="text-xs text-teal-700 font-semibold uppercase">Boss &amp; Bots ဖြေရှင်းချက်</span>
                  <h4 className="text-base font-semibold text-slate-900 mt-1">တစ်ခါသာ Setup ပြုလုပ်ပြီး ချက်ချင်းသိရှိခြင်း</h4>
                  <p className="text-sm text-slate-600 mt-2">Excel သို့မဟုတ် File အသစ် upload လုပ်လိုက်ရုံဖြင့် Bot များအားလုံး ချက်ချင်းမှတ်မိပြီး ဖြေကြားနိုင်ပြီ။</p>
                </div>
              </div>
            </div>
            {/* Row 3 */}
            <div className="p-6 rounded-3xl bg-white card-soft-shadow flex flex-col justify-between">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-2xl bg-rose-50 border border-rose-100 flex items-center justify-center text-rose-700 flex-shrink-0">
                  <span className="material-symbols-outlined text-[20px]">timer_off</span>
                </div>
                <div>
                  <span className="text-xs text-rose-700 font-semibold uppercase">ယခင်ရင်ဆိုင်ရသောအခက်အခဲ</span>
                  <h4 className="text-base font-semibold text-slate-900 mt-1">စာချက်ချင်းမပြန်နိုင်၍ ရောင်းအားဆုံးရှုံးခြင်း</h4>
                  <p className="text-sm text-slate-600 mt-2">ညဘက်နှင့် ရုံးပိတ်ရက်များတွင် စာမပြန်နိုင်၍ စိတ်မရှည်သော Customer များ အခြားဆိုင်သို့ ပြောင်းသွားခြင်း။</p>
                </div>
              </div>
            </div>
            <div className="p-6 rounded-3xl bg-white card-soft-shadow flex flex-col justify-between">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-2xl bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-700 flex-shrink-0">
                  <span className="material-symbols-outlined text-[20px]">flash_on</span>
                </div>
                <div>
                  <span className="text-xs text-teal-700 font-semibold uppercase">Boss &amp; Bots ဖြေရှင်းချက်</span>
                  <h4 className="text-base font-semibold text-slate-900 mt-1">၂၄ နာရီ စက္ကန့်ပိုင်းအတွင်း ပြန်လည်ဖြေကြားခြင်း</h4>
                  <p className="text-sm text-slate-600 mt-2">မနက် ၂ နာရီပင်ဖြစ်ပါစေ စာဝင်လာသည်နှင့် ၁ စက္ကန့်အတွင်း အတိအကျပြန်လည်ဖြေကြားပေးသည်။</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI EMPLOYEE PERSONAS PREVIEW */}
      <section id="solutions" className="max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-28 animate-section-rise">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-wider font-semibold text-teal-700 px-3 py-1 rounded-full bg-teal-50 border border-teal-100 inline-block mb-3">
            CUSTOMIZED FOR YOUR BUSINESS
          </span>
          <h2 className="text-3xl sm:text-4xl text-slate-900 font-bold tracking-tight">
            သင့်လုပ်ငန်းအမျိုးအစားနှင့် အကိုက်ညီဆုံး AI ဝန်ထမ်းများ
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-3">
            လက်လီလက်ကားအရောင်းမှသည် ဝန်ဆောင်မှုလုပ်ငန်းနှင့် ကြော်ငြာဖန်တီးမှုအထိ အထူးပြုစနစ်များ
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Persona 1: AI for Retail */}
          <div className="p-8 rounded-3xl bg-white card-soft-shadow transition-all hover:-translate-y-0.5 flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-700 mb-6">
                <span className="material-symbols-outlined text-[28px]">shopping_bag</span>
              </div>
              <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold">
                Retail · Clothing · Minimarts · Cosmetics
              </span>
              <h3 className="text-xl font-bold text-slate-900 mt-4 mb-3">AI for Sell Products</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                အဝတ်အထည်၊ အလှကုန်နှင့် လူသုံးကုန်အရောင်းဆိုင်များအတွက် အထူးသင့်လျော်သည်။ Size, Color, Stock စစ်ဆေးပေးပြီး KPay/WavePay ငွေချေလွှာ အလိုအလျောက်လက်ခံအတည်ပြုပေးသည်။
              </p>
              <ul className="space-y-2.5 text-xs text-slate-600 mb-6">
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-teal-700 text-[18px]">check</span>
                  <span>Direct Inventory Integration</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-teal-700 text-[18px]">check</span>
                  <span>Automated Delivery Address Parsing</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-teal-700 text-[18px]">check</span>
                  <span>Burmese Slip OCR Verification</span>
                </li>
              </ul>
            </div>
            <Link
              href="/book-a-demo"
              className="w-full py-3 rounded-full bg-slate-100 hover:bg-slate-200/80 text-slate-800 text-sm font-semibold text-center transition-colors block"
            >
              အသေးစိတ်ကြည့်ရန် (Demo ရယူမည်)
            </Link>
          </div>

          {/* Persona 2: AI for Services */}
          <div className="p-8 rounded-3xl bg-white card-soft-shadow transition-all hover:-translate-y-0.5 flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-slate-100 border border-slate-200/80 flex items-center justify-center text-slate-700 mb-6">
                <span className="material-symbols-outlined text-[28px]">event_available</span>
              </div>
              <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold">
                Clinics · Salons · Spas · Showrooms
              </span>
              <h3 className="text-xl font-bold text-slate-900 mt-4 mb-3">AI for Promote Services</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                ဆေးခန်း၊ အလှပြင်ဆိုင်၊ Spa နှင့် အေဂျင်စီများအတွက် ရက်ချိန်း (Booking/Appointment) အလိုအလျောက်ယူပေးပြီး လုပ်ငန်းဝန်ဆောင်မှု Package များကို ရှင်းလင်းတင်ပြပေးသည်။
              </p>
              <ul className="space-y-2.5 text-xs text-slate-600 mb-6">
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-teal-700 text-[18px]">check</span>
                  <span>Smart Booking Slot Management</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-teal-700 text-[18px]">check</span>
                  <span>Package &amp; Price Guidance</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-teal-700 text-[18px]">check</span>
                  <span>Automated Reminder Messages</span>
                </li>
              </ul>
            </div>
            <Link
              href="/book-a-demo"
              className="w-full py-3 rounded-full bg-slate-100 hover:bg-slate-200/80 text-slate-800 text-sm font-semibold text-center transition-colors block"
            >
              အသေးစိတ်ကြည့်ရန် (Demo ရယူမည်)
            </Link>
          </div>

          {/* Persona 3: Ad Studio */}
          <div className="p-8 rounded-3xl bg-white card-soft-shadow transition-all hover:-translate-y-0.5 flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-amber-50 border border-amber-200/80 flex items-center justify-center text-amber-800 mb-6">
                <span className="material-symbols-outlined text-[28px]">auto_fix_high</span>
              </div>
              <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold">
                Marketing · Copywriting · Studio Visuals
              </span>
              <h3 className="text-xl font-bold text-slate-900 mt-4 mb-3">Ad Studio</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Prompt ရေးရခက်ခဲမှုမရှိစေဘဲ မြန်မာဘာသာဖြင့် ဖမ်းစားနိုင်သော အရောင်းကြော်ငြာစာ (Copywriting) များနှင့် နိုင်ငံတကာအဆင့်မီ Studio Product ဓာတ်ပုံများကို ကလစ်တစ်ချက်ဖြင့် ထုတ်ပေးသည်။
              </p>
              <ul className="space-y-2.5 text-xs text-slate-600 mb-6">
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-teal-700 text-[18px]">check</span>
                  <span>High-converting Burmese Ad Copy</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-teal-700 text-[18px]">check</span>
                  <span>Studio Lighting Background Generator</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-teal-700 text-[18px]">check</span>
                  <span>Ready for Meta &amp; TikTok Formats</span>
                </li>
              </ul>
            </div>
            <Link
              href="/pricing"
              className="w-full py-3 rounded-full bg-slate-100 hover:bg-slate-200/80 text-slate-800 text-sm font-semibold text-center transition-colors block"
            >
              အသေးစိတ်ကြည့်ရန် (Points စနစ်)
            </Link>
          </div>
        </div>
      </section>

      {/* SPECIAL OFFER CTA BANNER */}
      <section id="special-offer" className="max-w-7xl mx-auto px-6 lg:px-12 pb-24">
        <div className="w-full rounded-3xl bg-[#0d2d2a] text-white p-8 sm:p-12 lg:p-16 card-soft-shadow relative overflow-hidden">
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-teal-200 text-xs font-semibold mb-6">
              <span className="material-symbols-outlined text-[16px]">celebration</span>
              <span>LIMITED TIME EXECUTIVE AUDIT</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4 leading-tight">
              လုပ်ငန်းရှင်များအတွက် အထူးကမ်းလှမ်းချက် -
              <br className="hidden sm:inline" /> ငွေစိုက်မထုတ်ခင် အရင်ကြည့်ပါ
            </h2>
            <p className="text-base text-slate-200 mb-8 leading-relaxed">
              သင့်လုပ်ငန်း၏ လက်ရှိ customer flow, chat volume နှင့် inventory စနစ်များကို ကျွန်ုပ်တို့၏ ကျွမ်းကျင် AI အင်ဂျင်နီယာများနှင့် အခမဲ့ ၁ ပတ် စမ်းသပ်လေ့လာနိုင်ပါသည်။ (အရည်အသွေးထိန်းသိမ်းရန် တစ်ပတ်လျှင် ၅ ဦးသာ ကန့်သတ်လက်ခံပါသည်)
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <button
                type="button"
                onClick={openOnboarding}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white hover:bg-slate-100 text-slate-900 text-sm font-bold transition-transform hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Start Interactive Setup (အခမဲ့ စတင်မည်)</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </button>
              <a
                href="tel:09442508508"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm font-semibold transition-colors"
              >
                <span className="material-symbols-outlined text-[18px]">call</span>
                <span>ဖုန်းဖြင့် တိုက်ရိုက်ဆွေးနွေးမည် (09442508508)</span>
              </a>
            </div>
            <p className="font-code-mono text-[12px] text-teal-200/80 mt-6">
              ✓ No credit card required &nbsp;·&nbsp; ✓ Free onboarding setup &nbsp;·&nbsp; ✓ Guaranteed response rate
            </p>
          </div>
        </div>
      </section>
    </div>
  </>
  );
}
