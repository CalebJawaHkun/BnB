"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function AIEmployeesPage() {
  const [activeTab, setActiveTab] = useState("content");
  const [openFaqs, setOpenFaqs] = useState([1]);
  const [copied, setCopied] = useState(false);

  const toggleFaq = (num) => {
    setOpenFaqs((prev) =>
      prev.includes(num) ? prev.filter((n) => n !== num) : [...prev, num]
    );
  };

  const copyAdCopy = () => {
    const textEl = document.getElementById("sample-ad-copy");
    if (textEl) {
      navigator.clipboard.writeText(textEl.innerText).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
    }
  };

  return (
    <div className="relative min-h-screen bg-surface text-on-surface antialiased flex flex-col overflow-hidden selection:bg-mint-100 selection:text-primary">
      {/* Ambient Organic Pastel Blurs */}
      <div className="pointer-events-none absolute -top-32 -left-20 w-[520px] h-[520px] rounded-full bg-mint-100/50 blur-[80px] -z-0" />
      <div className="pointer-events-none absolute top-40 right-0 w-[460px] h-[460px] rounded-full bg-peach-100/40 blur-[80px] -z-0" />
      <div className="pointer-events-none absolute top-[750px] left-1/3 w-[600px] h-[400px] rounded-full bg-sky-100/35 blur-[80px] -z-0" />

      {/* MAIN CANVAS */}
      <div className="w-full pt-10 sm:pt-16 pb-20 flex-grow z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* ================= HERO SECTION ================= */}
          <section className="relative pt-4 pb-12 text-center">
            {/* Floating Interactive Badge Cluster Around Hero */}
            <div className="hidden lg:block absolute top-6 -left-6 bg-white/90 backdrop-blur-md rounded-3xl p-3 px-4 shadow-[0_12px_32px_-6px_rgba(0,0,0,0.06)] border border-mint-100 transform -rotate-3 hover:rotate-0 transition-transform">
              <div className="flex items-center gap-2.5">
                <span className="text-xl">🇲🇲</span>
                <div className="text-left">
                  <p className="text-xs font-semibold text-on-surface">100% Native Burmese</p>
                  <p className="text-[11px] text-secondary">မြန်မာဘာသာအထူးပြု</p>
                </div>
              </div>
            </div>
            <div className="hidden lg:block absolute top-12 -right-4 bg-white/90 backdrop-blur-md rounded-3xl p-3 px-4 shadow-[0_12px_32px_-6px_rgba(0,0,0,0.06)] border border-peach-100 transform rotate-2 hover:rotate-0 transition-transform">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-full bg-peach-100 text-peach-500 flex items-center justify-center">
                  <span className="material-symbols-outlined text-[16px]">bolt</span>
                </div>
                <div className="text-left">
                  <p className="text-xs font-semibold text-on-surface">Auto Slip Check</p>
                  <p className="text-[11px] text-primary">KBZPay • Wave</p>
                </div>
              </div>
            </div>

            {/* Upper Tag Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-mint-50/80 border border-mint-200/60 text-primary text-xs font-semibold tracking-wide uppercase mb-6 shadow-sm">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-mint-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span>AUTONOMOUS ENTERPRISE WORKFORCE • POWERED BY UTS MYANMAR</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-[66px] font-bold text-on-surface tracking-tight leading-[1.12] mb-5">
              AI Employees for <br className="hidden sm:inline" />
              <span className="relative inline-block">
                <span className="relative z-10 text-primary-container">Your Business</span>
                <span className="absolute bottom-1 left-0 right-0 h-3.5 bg-mint-200/50 -rotate-1 rounded-full -z-0"></span>
              </span>
            </h1>

            {/* Bilingual Subhead */}
            <p className="text-base sm:text-xl text-primary font-medium tracking-normal mb-8 leading-relaxed max-w-3xl mx-auto">
              SME လုပ်ငန်းတွေအတွက် ဖန်တီးထားတဲ့ AI Business Solutions — Customer ဖြေပေးတာ၊ Order ယူပေးတာ၊ Content ဖန်တီးပေးတာတွေကို AI က ကူညီပေးပါတယ်။
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
              <Link
                href="/book-a-demo"
                className="inline-flex items-center gap-2 bg-primary text-white hover:bg-primary-container px-7 py-3 rounded-full text-sm font-semibold shadow-md hover:shadow-lg transition-all"
              >
                <span>Request a Demo</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white/90 hover:bg-white text-on-surface px-6 py-3 rounded-full text-sm font-semibold border border-outline-variant shadow-xs transition-all"
              >
                <span className="material-symbols-outlined text-[18px] text-secondary">mail</span>
                <span>Contact Us</span>
              </Link>
            </div>

            {/* Clean Floating Metrics */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 max-w-3xl mx-auto mb-14">
              <div className="flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/90 backdrop-blur-md border border-outline-variant/70 shadow-xs hover:border-mint-200 transition-all">
                <div className="w-7 h-7 rounded-full bg-mint-100 text-primary flex items-center justify-center">
                  <span className="material-symbols-outlined text-[16px]">bolt</span>
                </div>
                <div className="text-left">
                  <span className="text-[10px] font-medium text-secondary uppercase tracking-wider block">Response Speed</span>
                  <span className="text-xs sm:text-sm font-bold text-on-surface">Instant (&lt; 1.2s)</span>
                </div>
              </div>
              <div className="flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/90 backdrop-blur-md border border-outline-variant/70 shadow-xs hover:border-lavender-200 transition-all">
                <div className="w-7 h-7 rounded-full bg-lavender-100 text-purple-700 flex items-center justify-center">
                  <span className="material-symbols-outlined text-[16px]">translate</span>
                </div>
                <div className="text-left">
                  <span className="text-[10px] font-medium text-secondary uppercase tracking-wider block">Dialects</span>
                  <span className="text-xs sm:text-sm font-bold text-on-surface">Burmese (Unicode) + Eng Fluent</span>
                </div>
              </div>
              <div className="flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/90 backdrop-blur-md border border-outline-variant/70 shadow-xs hover:border-sky-200 transition-all">
                <div className="w-7 h-7 rounded-full bg-sky-100 text-blue-600 flex items-center justify-center">
                  <span className="material-symbols-outlined text-[16px]">hub</span>
                </div>
                <div className="text-left">
                  <span className="text-[10px] font-medium text-secondary uppercase tracking-wider block">Channels</span>
                  <span className="text-xs sm:text-sm font-bold text-on-surface">Messenger, Telegram &amp; Web</span>
                </div>
              </div>
            </div>

            {/* ================= SLIM & SLEEK SERVICE TOGGLE ================= */}
            <div className="flex flex-col items-center">
              <div className="inline-flex p-1 rounded-full bg-slate-200/60 backdrop-blur-md border border-slate-200/80 shadow-inner">
                <button
                  type="button"
                  id="tab-btn-content"
                  onClick={() => setActiveTab("content")}
                  className={`tab-trigger flex items-center gap-2 px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                    activeTab === "content"
                      ? "bg-white text-on-surface shadow-sm font-semibold"
                      : "text-secondary hover:text-on-surface"
                  }`}
                >
                  <span className="material-symbols-outlined text-[16px] text-primary">auto_awesome</span>
                  <span>Ad Studio</span>
                </button>
                <button
                  type="button"
                  id="tab-btn-retail"
                  onClick={() => setActiveTab("retail")}
                  className={`tab-trigger flex items-center gap-2 px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                    activeTab === "retail"
                      ? "bg-white text-on-surface shadow-sm font-semibold"
                      : "text-secondary hover:text-on-surface"
                  }`}
                >
                  <span className="material-symbols-outlined text-[16px]">shopping_bag</span>
                  <span>Sell Products</span>
                </button>
                <button
                  type="button"
                  id="tab-btn-service"
                  onClick={() => setActiveTab("service")}
                  className={`tab-trigger flex items-center gap-2 px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                    activeTab === "service"
                      ? "bg-white text-on-surface shadow-sm font-semibold"
                      : "text-secondary hover:text-on-surface"
                  }`}
                >
                  <span className="material-symbols-outlined text-[16px]">calendar_month</span>
                  <span>Promote Services</span>
                </button>
              </div>
            </div>
          </section>

          {/* ================= TAB VIEWPORT 1: AD STUDIO ================= */}
          <section
            className={`tab-pane flex flex-col gap-12 transition-all duration-300 ${
              activeTab === "content" ? "" : "hidden"
            }`}
            id="pane-content"
          >
            {/* Editorial Header */}
            <div className="border-b border-outline-variant/60 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-primary mb-2">
                  <span className="material-symbols-outlined text-[15px]">palette</span>
                  <span>AI Content Creation Tool</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-on-surface tracking-tight mb-3">
                  Ad Studio: AI Content Creation Tool
                </h2>
                <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed">
                  SME လုပ်ငန်းတွေအတွက် Content ရေးသားရာမှာ ကူညီပေးတဲ့ AI Content Creation Tool ဖြစ်ပါတယ်။ Product Information ထည့်ပြီး Caption, Promotion Content, Ad Copy, Ad Headline, Studio Style Image တွေကို ဖန်တီးနိုင်ပါတယ်။
                </p>
                <div className="mt-4 pl-3 border-l-2 border-mint-500 text-xs sm:text-sm text-secondary">
                  ChatGPT ရှိနေပြီးသားဆိုရင်တောင် Ad Studio က ပိုလွယ်ပါတယ်။ အကြိမ်တိုင်း Prompt အရှည်ကြီးရေးစရာမလိုဘဲ Brand Information, Product Information, Customer Type, Brand Tone တွေကို ထည့်ပြီး Content ထုတ်နိုင်ပါတယ်။
                </div>
              </div>
              <div className="shrink-0">
                <Link
                  href="/dashboard"
                  className="inline-flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold hover:bg-primary-container shadow-sm transition-all"
                >
                  <span>Try Ad Studio (စမ်းသပ်ရန်)</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </Link>
              </div>
            </div>

            {/* Continuous Editorial Flow: 6 Features (No Isolated Boxed Cards) */}
            <div>
              <div className="flex items-baseline justify-between mb-6 pb-2 border-b border-outline-variant/40">
                <h3 className="text-xs font-bold uppercase tracking-wider text-secondary flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-mint-500"></span>
                  <span>ဖန်တီးနိုင်သော အရာများ (What You Can Create)</span>
                </h3>
                <span className="text-xs font-mono text-secondary">06 Capabilities</span>
              </div>
              <div className="rounded-2xl border border-slate-200/80 overflow-hidden divide-y divide-slate-200/80 bg-white/60 backdrop-blur-sm">
                {/* Row 1: Items 01 - 03 */}
                <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-200/80">
                  <div className="p-6 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-mono font-bold text-xs tracking-wider text-primary">01</span>
                        <span className="material-symbols-outlined text-slate-400 text-[18px]">title</span>
                      </div>
                      <h4 className="text-sm font-semibold text-on-surface mb-1.5">Ad Headlines</h4>
                      <p className="text-xs text-on-surface-variant leading-relaxed">
                        AI က သင့် Product အတွက် ဆွဲဆောင်မှုရှိတဲ့ Headline တွေ ဖန်တီးပေးပါတယ်။
                      </p>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-mono font-bold text-xs tracking-wider text-primary">02</span>
                        <span className="material-symbols-outlined text-slate-400 text-[18px]">chat_bubble</span>
                      </div>
                      <h4 className="text-sm font-semibold text-on-surface mb-1.5">Social Media Captions</h4>
                      <p className="text-xs text-on-surface-variant leading-relaxed">
                        Facebook, Instagram အတွက် Caption တွေကို Brand Tone နဲ့ ရေးပေးပါတယ်။
                      </p>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-mono font-bold text-xs tracking-wider text-primary">03</span>
                        <span className="material-symbols-outlined text-slate-400 text-[18px]">campaign</span>
                      </div>
                      <h4 className="text-sm font-semibold text-on-surface mb-1.5">Promotion Content</h4>
                      <p className="text-xs text-on-surface-variant leading-relaxed">
                        Promotion Campaign အတွက် Content တွေ အမြန်ဖန်တီးနိုင်ပါတယ်။
                      </p>
                    </div>
                  </div>
                </div>
                {/* Row 2: Items 04 - 06 */}
                <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-200/80">
                  <div className="p-6 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-mono font-bold text-xs tracking-wider text-primary">04</span>
                        <span className="material-symbols-outlined text-slate-400 text-[18px]">article</span>
                      </div>
                      <h4 className="text-sm font-semibold text-on-surface mb-1.5">Ad Copy</h4>
                      <p className="text-xs text-on-surface-variant leading-relaxed">
                        Product Information ထည့်ပြီး Complete Ad Copy တွေကို AI က ဖန်တီးပေးပါတယ်။
                      </p>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-mono font-bold text-xs tracking-wider text-primary">05</span>
                        <span className="material-symbols-outlined text-slate-400 text-[18px]">photo_camera</span>
                      </div>
                      <h4 className="text-sm font-semibold text-on-surface mb-1.5">Studio Style Images</h4>
                      <p className="text-xs text-on-surface-variant leading-relaxed">
                        Product Photo ကို upload လုပ်ပြီး AI က Studio Quality Image ဖန်တီးပေးပါတယ်။
                      </p>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-mono font-bold text-xs tracking-wider text-primary">06</span>
                        <span className="material-symbols-outlined text-slate-400 text-[18px]">interests</span>
                      </div>
                      <h4 className="text-sm font-semibold text-on-surface mb-1.5">Product Lifestyle Shots</h4>
                      <p className="text-xs text-on-surface-variant leading-relaxed">
                        Studio Background Style တွေနဲ့ Product Lifestyle Image တွေ ဖန်တီးနိုင်ပါတယ်။
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Integrated Visual Proof & Generation Comparison (Clean Seamless Layout) */}
            <div className="pt-6 border-t border-outline-variant/60">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left: Seamless Image Transformation */}
                <div className="lg:col-span-7 space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="relative rounded-2xl overflow-hidden bg-slate-100 border border-outline-variant/50 aspect-[4/5]">
                      <Image
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2b9YTbrm4_PPWqPT23lpCxiEGzIMI69UrypROe3AmBwyw5_MG1yJbqiiRoVBCB1zYjaDy6jo21sQj7NlwjRic7GcTMFNTfMAtC0khlkAF-7NN45erBBvTjSyRcjsYHjV6PQFEkI0xA02h7RfZY1h-2iCF9cRMCue23EqZPAkwSCFTE5TT_y3gPDRyiqOiwu-5BvgBn7KUZ9EHt6Plv950mEFAdeSRViZo0Ua3Mui0ncPlqoppBgw"
                        alt="Raw mobile shot of organic cosmetic serum"
                        fill
                        unoptimized
                        sizes="(max-width: 640px) 100vw, 350px"
                        className="object-cover"
                      />
                      <div className="absolute top-3 left-3 bg-slate-900/70 backdrop-blur-sm text-white px-2.5 py-0.5 rounded-full text-[11px] font-mono z-10">
                        Raw Photo
                      </div>
                    </div>
                    <div className="relative rounded-2xl overflow-hidden bg-mint-50 border border-mint-200 aspect-[4/5]">
                      <Image
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBI5pGTMyWFhzeCC-DKNeL5KliqNoUHSLx86siNFlk0jKg8D3HnMy08SHnqzh1E1lvCL3J99ocguQvrITxmcpoDIoKz2iVH1_evxgrctuanMDku5paX1MZtxvBlZyrmHKSKxXitmoMReFhvVzUX6bUq7grPuVAXeQL7nmV0r5OKFzkaQOShqEDGLyGSroASzk5ABWatlTwXciBl8cc_0XQ_M5IaDYVS42bcBW4d9jQwRv7TO9c6i6k"
                        alt="Studio quality rendered cosmetics"
                        fill
                        unoptimized
                        sizes="(max-width: 640px) 100vw, 350px"
                        className="object-cover"
                      />
                      <div className="absolute top-3 left-3 bg-primary/90 backdrop-blur-sm text-white px-2.5 py-0.5 rounded-full text-[11px] font-mono flex items-center gap-1 z-10">
                        <span className="material-symbols-outlined text-[13px]">auto_awesome</span>
                        <span>Studio Enhanced</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-secondary font-mono pt-1">
                    <span>Ready for Facebook &amp; Instagram Advertising</span>
                    <span className="text-primary font-medium flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px]">bolt</span> Studio Quality Output
                    </span>
                  </div>
                </div>

                {/* Right: Seamless Generated Copy Block */}
                <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center justify-between pb-2 mb-3 border-b border-outline-variant/50">
                      <span className="text-xs font-mono font-semibold uppercase tracking-wider text-secondary">
                        Sample Output
                      </span>
                      <button
                        type="button"
                        className="inline-flex items-center gap-1 text-xs text-primary hover:text-primary-container font-medium cursor-pointer"
                        onClick={copyAdCopy}
                      >
                        <span className="material-symbols-outlined text-[14px]">
                          {copied ? "check" : "content_copy"}
                        </span>
                        <span id="copy-text">{copied ? "Copied!" : "Copy Text"}</span>
                      </button>
                    </div>
                    <div className="space-y-3 text-xs sm:text-sm text-on-surface leading-relaxed" id="sample-ad-copy">
                      <p className="font-semibold text-primary">🌿 မျက်နှာအသားအရေ ခြောက်သွေ့ညှိုးနွမ်းခြင်းကို သဘာဝအတိုင်း ကုစားလိုက်ပါ!</p>
                      <p className="text-on-surface-variant text-xs leading-relaxed">
                        အလုပ်ပင်ပန်းမှုနဲ့ နေလောင်ဒဏ်ကြောင့် ပျက်စီးနေတဲ့ အသားအရေအတွက် Pure Glow Serum ရောက်ရှိပါပြီ။
                      </p>
                      <div className="space-y-1.5 text-xs text-secondary pt-1 border-t border-dashed border-outline-variant/60">
                        <p className="flex items-center gap-1.5">
                          <span className="material-symbols-outlined text-mint-500 text-[14px]">check</span> ဓာတုဆိုးဆေး လုံးဝမပါဝင် (100% Organic)
                        </p>
                        <p className="flex items-center gap-1.5">
                          <span className="material-symbols-outlined text-mint-500 text-[14px]">check</span> KPay / Wave Money ဖြင့် လွယ်ကူစွာ ငွေချေနိုင်ပါသည်
                        </p>
                      </div>
                      <p className="text-xs font-semibold text-primary pt-1">
                        🎁 ယခုအပတ် အထူးပရိုမိုးရှင်း: ၂ ဘူးဝယ်ပါက Delivery Free!
                      </p>
                    </div>
                  </div>

                  {/* Integrated Guidelines Note */}
                  <div className="pt-4 border-t border-outline-variant/60 text-xs text-secondary space-y-1.5">
                    <p className="font-semibold text-on-surface text-xs uppercase tracking-wider">
                      အသုံးပြုပုံ စည်းမျဉ်းများ (Usage Guidelines)
                    </p>
                    <p>• AI မသုံးတတ်သေးရင်လည်း လိုအပ်တဲ့ Information အနည်းငယ်ထည့်ပြီး အသုံးပြုနိုင်ပါတယ်။</p>
                    <p>• <strong>Point-Based System</strong> ဖြစ်ပြီး လိုသလောက် Point ဖြည့်ပြီး သုံးနိုင်ပါတယ်။</p>
                    <p>• ထုတ်ပေးတဲ့ Content ကို Post မတင်ခင် ဈေးနှုန်း, ရက်စွဲ, ဆက်သွယ်ရန် အချက်အလက်တွေ ပြန်စစ်သင့်ပါတယ်။</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ================= TAB VIEWPORT 2: SELL PRODUCTS ================= */}
          <section
            className={`tab-pane flex flex-col gap-12 transition-all duration-300 ${
              activeTab === "retail" ? "" : "hidden"
            }`}
            id="pane-retail"
          >
            {/* Editorial Header */}
            <div className="border-b border-outline-variant/60 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-peach-500 mb-2">
                  <span className="material-symbols-outlined text-[15px]">storefront</span>
                  <span>Online Shop &amp; Retail Business အတွက်</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-on-surface tracking-tight mb-3">
                  AI Employee for Sell Products
                </h2>
                <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed">
                  Product ရောင်းချတဲ့ SME လုပ်ငန်းတွေအတွက် AI Employee ဖြစ်ပါတယ်။ Customer မေးခွန်းတွေပြန်ဖြေပေးတာ၊ ပစ္စည်းအကြောင်းရှင်းပြတာ၊ အော်ဒါယူပေးတာ၊ Customer ဝန်ဆောင်မှုပေးတာတွေကို ၂၄ နာရီ အလိုအလျောက် လုပ်ဆောင်ပေးနိုင်ပါတယ်။
                </p>
              </div>
              <div className="shrink-0">
                <Link
                  href="/book-a-demo"
                  className="inline-flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold hover:bg-primary-container shadow-sm transition-all"
                >
                  <span>Request a Demo</span>
                  <span className="material-symbols-outlined text-[16px]">calendar_today</span>
                </Link>
              </div>
            </div>

            {/* Continuous Editorial Flow: 6 Core Capabilities */}
            <div>
              <div className="flex items-baseline justify-between mb-6 pb-2 border-b border-outline-variant/40">
                <h3 className="text-xs font-bold uppercase tracking-wider text-secondary flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-peach-500"></span>
                  <span>လုပ်ဆောင်နိုင်တာတွေ (Core Capabilities)</span>
                </h3>
                <span className="text-xs font-mono text-secondary">06 Capabilities</span>
              </div>
              <div className="rounded-2xl border border-slate-200/80 overflow-hidden divide-y divide-slate-200/80 bg-white/60 backdrop-blur-sm">
                {/* Row 1: Items 01 - 03 */}
                <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-200/80">
                  <div className="p-6 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-mono font-bold text-xs tracking-wider text-primary">01</span>
                        <span className="material-symbols-outlined text-slate-400 text-[18px]">forum</span>
                      </div>
                      <h4 className="text-sm font-semibold text-on-surface mb-1.5">Customer Enquiry ဖြေပေးခြင်း</h4>
                      <p className="text-xs text-on-surface-variant leading-relaxed">
                        Product Name, Price, Size, Colour, Stock, Delivery, Payment အကြောင်း အလိုအလျောက် ပြန်ဖြေပေးပါတယ်။
                      </p>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-mono font-bold text-xs tracking-wider text-primary">02</span>
                        <span className="material-symbols-outlined text-slate-400 text-[18px]">recommend</span>
                      </div>
                      <h4 className="text-sm font-semibold text-on-surface mb-1.5">Product Recommend</h4>
                      <p className="text-xs text-on-surface-variant leading-relaxed">
                        Customer လိုအပ်ချက်အလိုက် သင့်တော်တဲ့ Product တွေကို စနစ်တကျ အကြံပြုပေးပါတယ်။
                      </p>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-mono font-bold text-xs tracking-wider text-primary">03</span>
                        <span className="material-symbols-outlined text-slate-400 text-[18px]">shopping_cart_checkout</span>
                      </div>
                      <h4 className="text-sm font-semibold text-on-surface mb-1.5">Order စုဆောင်းပေးခြင်း</h4>
                      <p className="text-xs text-on-surface-variant leading-relaxed">
                        Name, Phone, Address, Product, အရေအတွက်, Payment Method တွေကို စုဆောင်းပြီး Owner ကို အကြောင်းကြားပေးပါတယ်။
                      </p>
                    </div>
                  </div>
                </div>
                {/* Row 2: Items 04 - 06 */}
                <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-200/80">
                  <div className="p-6 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-mono font-bold text-xs tracking-wider text-primary">04</span>
                        <span className="material-symbols-outlined text-slate-400 text-[18px]">sync_alt</span>
                      </div>
                      <h4 className="text-sm font-semibold text-on-surface mb-1.5">Sales Conversation Flow</h4>
                      <p className="text-xs text-on-surface-variant leading-relaxed">
                        Product မေးတာ၊ ရွေးပေးတာ၊ Order မေးတာ၊ Info စုတာတွေကို အဆင့်ဆင့် လုပ်ပေးပါတယ်။
                      </p>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-mono font-bold text-xs tracking-wider text-primary">05</span>
                        <span className="material-symbols-outlined text-slate-400 text-[18px]">support_agent</span>
                      </div>
                      <h4 className="text-sm font-semibold text-on-surface mb-1.5">Human Takeover</h4>
                      <p className="text-xs text-on-surface-variant leading-relaxed">
                        Conversation ကို Staff သို့မဟုတ် Owner က ဝင်ကြည့်ပြီး လိုအပ်တဲ့အချိန်မှာ ကိုယ်တိုင် ဝင်ပြောနိုင်ပါတယ်။
                      </p>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-mono font-bold text-xs tracking-wider text-primary">06</span>
                        <span className="material-symbols-outlined text-slate-400 text-[18px]">schedule</span>
                      </div>
                      <h4 className="text-sm font-semibold text-on-surface mb-1.5">24/7 ဝန်ဆောင်မှု</h4>
                      <p className="text-xs text-on-surface-variant leading-relaxed">
                        နေ့ညမရွေး Enquiry တွေကို ချက်ချင်း ပြန်ဖြေပေးပြီး မဖြေမိသော Message မရှိစေရန် ကာကွယ်ပေးပါတယ်။
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Continuous Editorial: Suitable Verticals & Onboarding Steps */}
            <div className="pt-6 border-t border-outline-variant/60 grid grid-cols-1 lg:grid-cols-12 gap-10">
              {/* Left: Suitable Business Verticals */}
              <div className="lg:col-span-5 space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-secondary flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[15px] text-primary">domain</span>
                  <span>သင့်တော်တဲ့ လုပ်ငန်းများ (8 Verticals)</span>
                </h4>
                <div className="flex flex-wrap gap-2 text-xs">
                  <span className="px-3 py-1.5 rounded-full bg-slate-100/90 text-on-surface border border-slate-200/60">1. Online Shop</span>
                  <span className="px-3 py-1.5 rounded-full bg-slate-100/90 text-on-surface border border-slate-200/60">2. Retail Shop</span>
                  <span className="px-3 py-1.5 rounded-full bg-slate-100/90 text-on-surface border border-slate-200/60">3. အဝတ်အထည်ဆိုင်</span>
                  <span className="px-3 py-1.5 rounded-full bg-slate-100/90 text-on-surface border border-slate-200/60">4. ဖိနပ်ဆိုင်</span>
                  <span className="px-3 py-1.5 rounded-full bg-slate-100/90 text-on-surface border border-slate-200/60">5. Fancy Shop</span>
                  <span className="px-3 py-1.5 rounded-full bg-slate-100/90 text-on-surface border border-slate-200/60">6. Cosmetics Shop</span>
                  <span className="px-3 py-1.5 rounded-full bg-slate-100/90 text-on-surface border border-slate-200/60">7. Mini Mart</span>
                  <span className="px-3 py-1.5 rounded-full bg-slate-100/90 text-on-surface border border-slate-200/60">8. စာအုပ်ဆိုင်</span>
                </div>
              </div>

              {/* Right: 4 Onboarding Steps */}
              <div className="lg:col-span-7 space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-secondary flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[15px] text-primary">how_to_reg</span>
                  <span>ဘယ်လို စတင်အသုံးပြုမလဲ (4 Steps)</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="pl-3 border-l-2 border-slate-200">
                    <p className="text-xs font-semibold text-on-surface">1. အချက်အလက်ထည့်သွင်းပါ</p>
                    <p className="text-xs text-secondary mt-0.5">Product Data, Stock, Delivery &amp; Payment Policy တွေ ထည့်သွင်းပါ။</p>
                  </div>
                  <div className="pl-3 border-l-2 border-slate-200">
                    <p className="text-xs font-semibold text-on-surface">2. SOP သတ်မှတ်ပါ</p>
                    <p className="text-xs text-secondary mt-0.5">FAQ, Customer Reply Style, Order Process — လုပ်ငန်း SOP သတ်မှတ်ပါ။</p>
                  </div>
                  <div className="pl-3 border-l-2 border-slate-200">
                    <p className="text-xs font-semibold text-on-surface">3. Setup &amp; Training</p>
                    <p className="text-xs text-secondary mt-0.5">Boss &amp; Bots Team က Bot Setup, Staff Training ပေးပါတယ်။</p>
                  </div>
                  <div className="pl-3 border-l-2 border-slate-200">
                    <p className="text-xs font-semibold text-on-surface">4. အဆင့်လိုက် ကူညီပေးခြင်း</p>
                    <p className="text-xs text-secondary mt-0.5">AI မသုံးတတ်သေးရင်လည်း Team က အဆင့်လိုက် ကူညီပေးပါတယ်။</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ================= TAB VIEWPORT 3: PROMOTE SERVICES ================= */}
          <section
            className={`tab-pane flex flex-col gap-12 transition-all duration-300 ${
              activeTab === "service" ? "" : "hidden"
            }`}
            id="pane-service"
          >
            {/* Editorial Header */}
            <div className="border-b border-outline-variant/60 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-blue-600 mb-2">
                  <span className="material-symbols-outlined text-[15px]">event_available</span>
                  <span>Service Business အတွက်</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-on-surface tracking-tight mb-3">
                  AI Employee for Promote Services
                </h2>
                <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed">
                  Service Business ဖြစ်ရင် Customer Enquiry များများဝင်တာ, FAQ တူတူတွေ ထပ်ခါထပ်ခါဖြေနေရတာမျိုးရှိရင် AI Employee က ကူညီပေးနိုင်ပါတယ်။ ဝန်ဆောင်မှုအကြောင်း ရှင်းပြတာ, Service Booking စုဆောင်းတာ, Customer Question တွေဖြေပေးတာတွေကို အလိုအလျောက် လုပ်ဆောင်ပေးပါတယ်။
                </p>
              </div>
              <div className="shrink-0">
                <Link
                  href="/book-a-demo"
                  className="inline-flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold hover:bg-primary-container shadow-sm transition-all"
                >
                  <span>Request a Demo</span>
                  <span className="material-symbols-outlined text-[16px]">calendar_month</span>
                </Link>
              </div>
            </div>

            {/* Continuous Editorial Flow: 6 Core Capabilities */}
            <div>
              <div className="flex items-baseline justify-between mb-6 pb-2 border-b border-outline-variant/40">
                <h3 className="text-xs font-bold uppercase tracking-wider text-secondary flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                  <span>လုပ်ဆောင်နိုင်တာတွေ (Core Capabilities)</span>
                </h3>
                <span className="text-xs font-mono text-secondary">06 Capabilities</span>
              </div>
              <div className="rounded-2xl border border-slate-200/80 overflow-hidden divide-y divide-slate-200/80 bg-white/60 backdrop-blur-sm">
                {/* Row 1: Items 01 - 03 */}
                <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-200/80">
                  <div className="p-6 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-mono font-bold text-xs tracking-wider text-primary">01</span>
                        <span className="material-symbols-outlined text-slate-400 text-[18px]">contact_support</span>
                      </div>
                      <h4 className="text-sm font-semibold text-on-surface mb-1.5">Service Enquiry ဖြေပေးခြင်း</h4>
                      <p className="text-xs text-on-surface-variant leading-relaxed">
                        ဝန်ဆောင်မှုအမျိုးအစား၊ ဈေးနှုန်း၊ လုပ်ငန်းစဉ်၊ အချိန်ကြာမြင့်ချိန်တွေကို အလိုအလျောက် ပြန်ဖြေပေးပါတယ်။
                      </p>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-mono font-bold text-xs tracking-wider text-primary">02</span>
                        <span className="material-symbols-outlined text-slate-400 text-[18px]">event_available</span>
                      </div>
                      <h4 className="text-sm font-semibold text-on-surface mb-1.5">Booking စုဆောင်းပေးခြင်း</h4>
                      <p className="text-xs text-on-surface-variant leading-relaxed">
                        Customer Name, Phone, Service Type, လိုချင်တဲ့ရက်စွဲနဲ့ အချိန်တွေကို စုဆောင်းပေးပါတယ်။
                      </p>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-mono font-bold text-xs tracking-wider text-primary">03</span>
                        <span className="material-symbols-outlined text-slate-400 text-[18px]">fact_check</span>
                      </div>
                      <h4 className="text-sm font-semibold text-on-surface mb-1.5">Customer Qualification</h4>
                      <p className="text-xs text-on-surface-variant leading-relaxed">
                        Customer ရဲ့ လိုအပ်ချက်ကို မေးမြန်းစိစစ်ပြီး သင့်တော်တဲ့ Service ကို အကြံပြုပေးပါတယ်။
                      </p>
                    </div>
                  </div>
                </div>
                {/* Row 2: Items 04 - 06 */}
                <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-200/80">
                  <div className="p-6 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-mono font-bold text-xs tracking-wider text-primary">04</span>
                        <span className="material-symbols-outlined text-slate-400 text-[18px]">question_answer</span>
                      </div>
                      <h4 className="text-sm font-semibold text-on-surface mb-1.5">FAQ Auto-Reply</h4>
                      <p className="text-xs text-on-surface-variant leading-relaxed">
                        ထပ်ခါထပ်ခါမေးတတ်တဲ့ မေးခွန်းတွေကို AI က ဖြေပေးပြီး Staff Workload လျှော့ချပေးပါတယ်။
                      </p>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-mono font-bold text-xs tracking-wider text-primary">05</span>
                        <span className="material-symbols-outlined text-slate-400 text-[18px]">supervisor_account</span>
                      </div>
                      <h4 className="text-sm font-semibold text-on-surface mb-1.5">Human Handover</h4>
                      <p className="text-xs text-on-surface-variant leading-relaxed">
                        Bot မဖြေနိုင်တဲ့ ရှုပ်ထွေးတဲ့ Issue တွေကို သက်ဆိုင်ရာ Staff ဆီ အလိုအလျောက် လွှဲပေးပါတယ်။
                      </p>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-mono font-bold text-xs tracking-wider text-primary">06</span>
                        <span className="material-symbols-outlined text-slate-400 text-[18px]">dashboard</span>
                      </div>
                      <h4 className="text-sm font-semibold text-on-surface mb-1.5">Dashboard စီမံခန့်ခွဲမှု</h4>
                      <p className="text-xs text-on-surface-variant leading-relaxed">
                        Conversation, Enquiry, Booking Record တွေကို Dashboard မှာ အချိန်နဲ့တပြေးညီ ကြည့်ရှုနိုင်ပါတယ်။
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Continuous Editorial: Suitable Verticals & Onboarding Steps */}
            <div className="pt-6 border-t border-outline-variant/60 grid grid-cols-1 lg:grid-cols-12 gap-10">
              {/* Left: Suitable Business Verticals */}
              <div className="lg:col-span-5 space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-secondary flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[15px] text-primary">apartment</span>
                  <span>သင့်တော်တဲ့ လုပ်ငန်းများ (8 Verticals)</span>
                </h4>
                <div className="flex flex-wrap gap-2 text-xs">
                  <span className="px-3 py-1.5 rounded-full bg-slate-100/90 text-on-surface border border-slate-200/60">1. Beauty Salon</span>
                  <span className="px-3 py-1.5 rounded-full bg-slate-100/90 text-on-surface border border-slate-200/60">2. Spa &amp; Wellness</span>
                  <span className="px-3 py-1.5 rounded-full bg-slate-100/90 text-on-surface border border-slate-200/60">3. Education Center</span>
                  <span className="px-3 py-1.5 rounded-full bg-slate-100/90 text-on-surface border border-slate-200/60">4. Real Estate</span>
                  <span className="px-3 py-1.5 rounded-full bg-slate-100/90 text-on-surface border border-slate-200/60">5. Car Showroom</span>
                  <span className="px-3 py-1.5 rounded-full bg-slate-100/90 text-on-surface border border-slate-200/60">6. Repair Service</span>
                  <span className="px-3 py-1.5 rounded-full bg-slate-100/90 text-on-surface border border-slate-200/60">7. Consulting</span>
                  <span className="px-3 py-1.5 rounded-full bg-slate-100/90 text-on-surface border border-slate-200/60">8. Healthcare Clinic</span>
                </div>
              </div>

              {/* Right: 4 Onboarding Steps */}
              <div className="lg:col-span-7 space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-secondary flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[15px] text-primary">checklist</span>
                  <span>ဘယ်လို စတင်အသုံးပြုမလဲ (4 Steps)</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="pl-3 border-l-2 border-slate-200">
                    <p className="text-xs font-semibold text-on-surface">1. အချက်အလက်ထည့်သွင်းပါ</p>
                    <p className="text-xs text-secondary mt-0.5">ဝန်ဆောင်မှုအမျိုးအစား, ဈေးနှုန်း, လုပ်ငန်းစဉ် အချက်အလက်တွေ ထည့်သွင်းပါ။</p>
                  </div>
                  <div className="pl-3 border-l-2 border-slate-200">
                    <p className="text-xs font-semibold text-on-surface">2. SOP သတ်မှတ်ပါ</p>
                    <p className="text-xs text-secondary mt-0.5">FAQ, Customer Reply Style, Booking Process — လုပ်ငန်း SOP သတ်မှတ်ပါ။</p>
                  </div>
                  <div className="pl-3 border-l-2 border-slate-200">
                    <p className="text-xs font-semibold text-on-surface">3. Setup &amp; Training</p>
                    <p className="text-xs text-secondary mt-0.5">Boss &amp; Bots Team က Bot Setup, Staff Training ပေးပါတယ်။</p>
                  </div>
                  <div className="pl-3 border-l-2 border-slate-200">
                    <p className="text-xs font-semibold text-on-surface">4. Basic SOP ရေးဆွဲပေးခြင်း</p>
                    <p className="text-xs text-secondary mt-0.5">လုပ်ငန်းမှာ SOP မရှိသေးရင်လည်း Team က Basic SOP ရေးဆွဲပေးပါတယ်။</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ================= VERBATIM FAQS (SEAMLESS BORDER ACCORDION) ================= */}
          <section className="mt-24 pt-8 border-t border-outline-variant/60">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-10">
                <span className="text-xs font-bold uppercase tracking-widest text-primary block mb-2">
                  မေးလေ့ရှိသော မေးခွန်းများ (FREQUENTLY ASKED QUESTIONS)
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-on-surface">
                  သိလိုသမျှ မေးခွန်းများနှင့် အဖြေများ
                </h2>
                <p className="text-sm text-secondary mt-1">
                  Boss &amp; Bots AI Employees ဆိုင်ရာ အဓိက သိကောင်းစရာများ
                </p>
              </div>

              <div className="divide-y divide-outline-variant/60">
                {/* FAQ 1 */}
                <div className="py-4">
                  <button
                    type="button"
                    className="w-full text-left flex items-center justify-between gap-4 focus:outline-none group cursor-pointer"
                    onClick={() => toggleFaq(1)}
                  >
                    <span className="font-medium text-sm sm:text-base text-on-surface group-hover:text-primary transition-colors">
                      Q1: AI က Customer ကို Product Recommend လုပ်ပေးနိုင်လား?
                    </span>
                    <span
                      className={`material-symbols-outlined text-secondary text-[20px] transition-transform duration-200 shrink-0 ${
                        openFaqs.includes(1) ? "rotate-180" : ""
                      }`}
                    >
                      expand_more
                    </span>
                  </button>
                  {openFaqs.includes(1) && (
                    <div className="pt-3 pr-8 text-xs sm:text-sm text-secondary leading-relaxed">
                      Product Information, Category, Price Range, Size, Colour နဲ့ Customer လိုအပ်ချက်တွေကို စနစ်တကျထည့်ထားရင် သင့်တော်တဲ့ Product တွေကို ရွေးချယ်အကြံပြုပေးနိုင်ပါတယ်။
                    </div>
                  )}
                </div>

                {/* FAQ 2 */}
                <div className="py-4">
                  <button
                    type="button"
                    className="w-full text-left flex items-center justify-between gap-4 focus:outline-none group cursor-pointer"
                    onClick={() => toggleFaq(2)}
                  >
                    <span className="font-medium text-sm sm:text-base text-on-surface group-hover:text-primary transition-colors">
                      Q2: AI က Order လက်ခံပေးနိုင်လား?
                    </span>
                    <span
                      className={`material-symbols-outlined text-secondary text-[20px] transition-transform duration-200 shrink-0 ${
                        openFaqs.includes(2) ? "rotate-180" : ""
                      }`}
                    >
                      expand_more
                    </span>
                  </button>
                  {openFaqs.includes(2) && (
                    <div className="pt-3 pr-8 text-xs sm:text-sm text-secondary leading-relaxed">
                      Order Workflow ထည့်သွင်းထားရင် Customer Name, Phone Number, Delivery Address, Product, အရေအတွက်, Payment Method တွေကို စုဆောင်းပြီး ပိုင်ရှင်က confirm လုပ်ပေးဖို့ အကြောင်းကြားပေးနိုင်ပါတယ်။ AI က သူ့သဘောနဲ့ Order Confirm မလုပ်ပါဘူး။
                    </div>
                  )}
                </div>

                {/* FAQ 3 */}
                <div className="py-4">
                  <button
                    type="button"
                    className="w-full text-left flex items-center justify-between gap-4 focus:outline-none group cursor-pointer"
                    onClick={() => toggleFaq(3)}
                  >
                    <span className="font-medium text-sm sm:text-base text-on-surface group-hover:text-primary transition-colors">
                      Q3: ဘယ် Channel တွေနဲ့ ချိတ်ဆက်နိုင်လဲ?
                    </span>
                    <span
                      className={`material-symbols-outlined text-secondary text-[20px] transition-transform duration-200 shrink-0 ${
                        openFaqs.includes(3) ? "rotate-180" : ""
                      }`}
                    >
                      expand_more
                    </span>
                  </button>
                  {openFaqs.includes(3) && (
                    <div className="pt-3 pr-8 text-xs sm:text-sm text-secondary leading-relaxed">
                      လက်ရှိမှာ Facebook Messenger, Telegram, Website တို့နဲ့ ချိတ်ဆက်ပြီး Customer Enquiry တွေကို စီမံနိုင်ပါတယ်။ အခြား Channel တွေနဲ့ ချိတ်ဆက်ချင်ရင် Demo Session မှာ တင်ပြနိုင်ပါတယ်။
                    </div>
                  )}
                </div>

                {/* FAQ 4 */}
                <div className="py-4">
                  <button
                    type="button"
                    className="w-full text-left flex items-center justify-between gap-4 focus:outline-none group cursor-pointer"
                    onClick={() => toggleFaq(4)}
                  >
                    <span className="font-medium text-sm sm:text-base text-on-surface group-hover:text-primary transition-colors">
                      Q4: AI က 100% မှန်အောင် ဖြေနိုင်လား?
                    </span>
                    <span
                      className={`material-symbols-outlined text-secondary text-[20px] transition-transform duration-200 shrink-0 ${
                        openFaqs.includes(4) ? "rotate-180" : ""
                      }`}
                    >
                      expand_more
                    </span>
                  </button>
                  {openFaqs.includes(4) && (
                    <div className="pt-3 pr-8 text-xs sm:text-sm text-secondary leading-relaxed">
                      AI System ဖြစ်တဲ့အတွက် 100% အမှားကင်းမယ်လို့ မပြောနိုင်ပါဘူး။ Data မှန်ဖို့, Product Information Update ဖြစ်ဖို့, SOP ရှင်းဖို့, Reply Rule သတ်မှတ်ထားဖို့ ပုံမှန်စစ်ဆေးဖို့ လိုပါတယ်။ AI မသိတဲ့ မေးခွန်းဆိုရင် Staff ဆီ လွှဲပေးပါတယ်။
                    </div>
                  )}
                </div>

                {/* FAQ 5 */}
                <div className="py-4">
                  <button
                    type="button"
                    className="w-full text-left flex items-center justify-between gap-4 focus:outline-none group cursor-pointer"
                    onClick={() => toggleFaq(5)}
                  >
                    <span className="font-medium text-sm sm:text-base text-on-surface group-hover:text-primary transition-colors">
                      Q5: မြန်မာလို ဖြေနိုင်လား?
                    </span>
                    <span
                      className={`material-symbols-outlined text-secondary text-[20px] transition-transform duration-200 shrink-0 ${
                        openFaqs.includes(5) ? "rotate-180" : ""
                      }`}
                    >
                      expand_more
                    </span>
                  </button>
                  {openFaqs.includes(5) && (
                    <div className="pt-3 pr-8 text-xs sm:text-sm text-secondary leading-relaxed">
                      မြန်မာဘာသာနဲ့ English ကို အသုံးပြုနိုင်ပါတယ်။ Customer တွေအသုံးများတဲ့ စကားလုံး, Unicode, Mixed Language နဲ့ Product Terms တွေကို Demo မှာ စမ်းသပ်ကြည့်နိုင်ပါတယ်။
                    </div>
                  )}
                </div>

                {/* FAQ 6 */}
                <div className="py-4">
                  <button
                    type="button"
                    className="w-full text-left flex items-center justify-between gap-4 focus:outline-none group cursor-pointer"
                    onClick={() => toggleFaq(6)}
                  >
                    <span className="font-medium text-sm sm:text-base text-on-surface group-hover:text-primary transition-colors">
                      Q6: Service Business အတွက် တကယ်သင့်တော်မလား? / ကိုယ့်ဆိုင်ရဲ့ ပြောဆိုပုံနဲ့ AI ကို ပြောခိုင်းလို့ရလား?
                    </span>
                    <span
                      className={`material-symbols-outlined text-secondary text-[20px] transition-transform duration-200 shrink-0 ${
                        openFaqs.includes(6) ? "rotate-180" : ""
                      }`}
                    >
                      expand_more
                    </span>
                  </button>
                  {openFaqs.includes(6) && (
                    <div className="pt-3 pr-8 text-xs sm:text-sm text-secondary leading-relaxed">
                      ရပါတယ်။ ဖော်ရွေတဲ့ပုံစံ, Professional ပုံစံ, အရောင်းအာရုံစိုက်တဲ့ပုံစံ, လေးစားယဉ်ကျေးတဲ့ပုံစံ စတဲ့ Brand Tone ကို သတ်မှတ်နိုင်ပါတယ်။ ဝန်ထမ်းတွေကို အစားထိုးတာ မဟုတ်ဘဲ ထပ်ခါထပ်ခါလုပ်နေရတဲ့ Enquiry ဖြေတာတွေကို AI က ကူညီပေးပြီး ဝန်ထမ်းတွေက ပိုအရေးကြီးတဲ့ Customer Case တွေကို အာရုံစိုက်နိုင်စေပါတယ်။
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>

          {/* ================= CONVERSION BANNER ================= */}
          <section className="mt-20 mb-16" id="demo-section">
            <div className="rounded-5xl bg-on-surface text-white p-8 sm:p-14 relative overflow-hidden shadow-2xl">
              <div className="absolute -right-20 -top-20 w-80 h-80 bg-primary/30 rounded-full blur-3xl pointer-events-none"></div>
              <div className="absolute -left-10 -bottom-10 w-64 h-64 bg-mint-500/20 rounded-full blur-3xl pointer-events-none"></div>

              <div className="relative z-10 max-w-3xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-mint-200 text-xs font-semibold uppercase tracking-wider mb-5">
                  <span className="material-symbols-outlined text-[16px]">verified_user</span>
                  <span>Enterprise SLA by UTS Myanmar</span>
                </div>

                <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight mb-3">
                  Ready to Deploy Your First AI Employee?
                </h2>
                <p className="text-base sm:text-lg text-mint-200 font-medium mb-4">
                  ငွေစိုက်မထုတ်ခင် သင့်လုပ်ငန်း Product ဒေတာဖြင့် အရင်စမ်းသပ်ပါ
                </p>
                <p className="text-sm sm:text-base text-white/70 max-w-2xl mb-8 leading-relaxed">
                  Schedule a free private architecture audit with our engineering team in Yangon. We will construct a prototype bot loaded with your actual product line or clinic services in under 30 minutes.
                </p>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                  <Link
                    href="/book-a-demo"
                    className="inline-flex items-center justify-center gap-2 bg-primary text-white hover:bg-mint-500 hover:text-on-surface px-8 py-3.5 rounded-full text-sm font-semibold shadow-lg transition-all"
                  >
                    <span>Book a Free Demo (ရက်ချိန်းရယူမည်)</span>
                    <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </Link>
                  <a
                    href="tel:09442508508"
                    className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3.5 rounded-full text-sm font-medium transition-all"
                  >
                    <span className="material-symbols-outlined text-[18px]">call</span>
                    <span>Direct Call: 09442508508</span>
                  </a>
                </div>

                <div className="mt-10 pt-6 border-t border-white/10 flex flex-wrap items-center gap-6 text-xs text-white/60">
                  <div className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-mint-200 text-[16px]">credit_card_off</span>
                    <span>No credit card required</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-mint-200 text-[16px]">build</span>
                    <span>Free onboarding setup</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-mint-200 text-[16px]">support</span>
                    <span>Dedicated Yangon Engineering Support</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
