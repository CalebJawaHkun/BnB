"use client";

import { useState } from "react";
import Link from "next/link";

export default function AIEmployeesPage() {
  const [activeTab, setActiveTab] = useState("service");
  const [openFaqs, setOpenFaqs] = useState([1]);
  const [copied, setCopied] = useState(false);

  const toggleFaq = (id) => {
    setOpenFaqs((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
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

  const scrollToDemo = () => {
    document.getElementById("demo-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-full min-h-screen bg-[#fbfcfe] text-slate-900 animate-page-fade">
      <div className="w-full pt-28 sm:pt-36 flex-grow z-10">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
{/* ================= HERO SECTION (Free-floating & Playful) ================= */}
<section className="relative pt-4 pb-14 text-center">
{/* Floating Interactive Badge Cluster Around Hero */}
<div className="hidden lg:block absolute top-6 -left-6 bg-white/90 backdrop-blur-md rounded-3xl p-3 px-4 shadow-[0_12px_32px_-6px_rgba(0,0,0,0.06)] border border-mint-100 transform -rotate-3 animate-pulse duration-1000">
<div className="flex items-center gap-2.5">
<span className="text-xl">🇲🇲</span>
<div className="text-left">
<p className="text-xs font-semibold text-on-surface">100% Native Burmese</p>
<p className="text-[11px] text-secondary">မြန်မာဘာသာစကားအပြည့်</p>
</div>
</div>
</div>
<div className="hidden lg:block absolute top-12 -right-4 bg-white/90 backdrop-blur-md rounded-3xl p-3 px-4 shadow-[0_12px_32px_-6px_rgba(0,0,0,0.06)] border border-peach-100 transform rotate-2">
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
<span className="">AUTONOMOUS ENTERPRISE WORKFORCE • POWERED BY UTS MYANMAR</span>
</div>
{/* Main Fluid Headline */}
<h1 className="text-4xl sm:text-6xl lg:text-[68px] font-bold text-on-surface tracking-tight leading-[1.12] mb-5">
          AI Employees Built for <br className="hidden sm:inline" />
<span className="relative inline-block">
<span className="relative z-10 text-primary-container">Myanmar Businesses</span>
<span className="absolute bottom-1 left-0 right-0 h-3.5 bg-mint-200/50 -rotate-1 rounded-full -z-0"></span>
</span>
</h1>
{/* Bilingual Burmese Subtitle */}
<p className="text-lg sm:text-xl text-primary font-medium tracking-normal mb-5 leading-relaxed max-w-3xl mx-auto">
          လုပ်ငန်းစဉ်အရောင်းအဖွဲ့များအတွက် ၂၄ နာရီ မနားတမ်း အရောင်းတင်မက ပြုစုစောင့်ရှောက်ပေးမည့် ဒစ်ဂျစ်တယ် ဝန်ထမ်းများ
        </p>
{/* Crisp Supportive Description */}
<p className="text-base text-on-surface-variant max-w-2xl mx-auto leading-relaxed mb-10">
          Enterprise-grade conversational agents calibrated for Burmese commerce. BnB AI Employees take over routine inquiries, instant order intake, product recommendations, and studio creative workflows on Telegram and Facebook Messenger without human fatigue.
        </p>
{/* PLAYFUL FLOATING METRICS CLUSTERS */}
<div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 max-w-3xl mx-auto mb-14">
{/* Metric Pill 1 */}
<div className="flex items-center gap-3 px-5 py-3 rounded-full bg-white/90 backdrop-blur-md border border-outline-variant/70 shadow-sm hover:border-mint-200 hover:shadow-md transition-all group">
<div className="w-8 h-8 rounded-full bg-mint-100 text-primary flex items-center justify-center group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-[18px]">bolt</span>
</div>
<div className="text-left">
<span className="text-[11px] font-medium text-secondary uppercase tracking-wider block">Response Speed</span>
<span className="text-sm font-bold text-on-surface">&lt; 1.2s Instant</span>
</div>
</div>
{/* Metric Pill 2 */}
<div className="flex items-center gap-3 px-5 py-3 rounded-full bg-white/90 backdrop-blur-md border border-outline-variant/70 shadow-sm hover:border-lavender-200 hover:shadow-md transition-all group">
<div className="w-8 h-8 rounded-full bg-lavender-100 text-purple-700 flex items-center justify-center group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-[18px]">translate</span>
</div>
<div className="text-left">
<span className="text-[11px] font-medium text-secondary uppercase tracking-wider block">Dialects</span>
<span className="text-sm font-bold text-on-surface">Burmese + Eng Fluent</span>
</div>
</div>
{/* Metric Pill 3 */}
<div className="flex items-center gap-3 px-5 py-3 rounded-full bg-white/90 backdrop-blur-md border border-outline-variant/70 shadow-sm hover:border-peach-200 hover:shadow-md transition-all group">
<div className="w-8 h-8 rounded-full bg-peach-100 text-peach-500 flex items-center justify-center group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-[18px]">verified</span>
</div>
<div className="text-left">
<span className="text-[11px] font-medium text-secondary uppercase tracking-wider block">Order Accuracy</span>
<span className="text-sm font-bold text-primary">99.4% Accurate</span>
</div>
</div>
{/* Metric Pill 4 */}
<div className="flex items-center gap-3 px-5 py-3 rounded-full bg-white/90 backdrop-blur-md border border-outline-variant/70 shadow-sm hover:border-sky-200 hover:shadow-md transition-all group">
<div className="w-8 h-8 rounded-full bg-sky-100 text-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-[18px]">hub</span>
</div>
<div className="text-left">
<span className="text-[11px] font-medium text-secondary uppercase tracking-wider block">Channels</span>
<span className="text-sm font-bold text-on-surface">FB • TG • Web</span>
</div>
</div>
</div>
{/* ================= DYNAMIC INTERACTIVE "AI FOR" SWITCHER ================= */}
<div className="flex flex-col items-center">
<div className="flex items-center gap-2 mb-3">
<span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
<span className="text-xs uppercase font-semibold text-secondary tracking-widest">
              Choose Solution Workspace
            </span>
</div>
{/* Organic Floating Segment Pill Switcher */}
<div className="inline-flex p-1.5 rounded-full bg-white/80 backdrop-blur-xl border border-outline-variant shadow-[0_4px_20px_-2px_rgba(11,28,48,0.06)] max-w-full overflow-x-auto">
<button
  type="button"
  onClick={() => setActiveTab("content")}
  className={`tab-trigger flex items-center gap-2.5 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer ${
    activeTab === "content"
      ? "bg-slate-900 text-white shadow-sm"
      : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/60"
  }`}
  id="tab-btn-content"
>
  <span className="material-symbols-outlined text-[18px]">auto_awesome</span>
  <span>Content Creation</span>
  <span className="text-xs py-0.5 px-2 rounded-full bg-white/20 font-normal">Ad Studio</span>
</button>
<button
  type="button"
  onClick={() => setActiveTab("retail")}
  className={`tab-trigger flex items-center gap-2.5 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer ${
    activeTab === "retail"
      ? "bg-slate-900 text-white shadow-sm"
      : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/60"
  }`}
  id="tab-btn-retail"
>
  <span className="material-symbols-outlined text-[18px]">shopping_bag</span>
  <span>Retail &amp; Online Shops</span>
  <span className="text-xs py-0.5 px-2 rounded-full bg-slate-100 font-normal text-slate-600">Sell Products</span>
</button>
<button
  type="button"
  onClick={() => setActiveTab("service")}
  className={`tab-trigger flex items-center gap-2.5 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer ${
    activeTab === "service"
      ? "bg-slate-900 text-white shadow-sm"
      : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/60"
  }`}
  id="tab-btn-service"
>
  <span className="material-symbols-outlined text-[18px]">calendar_month</span>
  <span>Service Promotion</span>
  <span className="text-xs py-0.5 px-2 rounded-full bg-slate-100 font-normal text-slate-600">Clinics &amp; Salons</span>
</button>
</div>
</div>
</section>
{/* ================= TAB VIEWPORT 1: CONTENT CREATION (AD STUDIO) ================= */}
<section className={`tab-pane flex flex-col gap-10 transition-all duration-300 ${activeTab === "content" ? "" : "hidden"}`} id="pane-content">
{/* Header Info without rigid card border */}
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2">
<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-mint-100 text-primary-container text-xs font-semibold mb-3">
<span className="material-symbols-outlined text-[16px]">palette</span>
<span className="">Ad Studio • Zero-Prompt Creative Suite</span>
</div>
<h2 className="text-2xl sm:text-4xl font-bold text-on-surface tracking-tight mb-2">
              Create Ads &amp; Studio Visuals Without the Prompt Grind
            </h2>
<p className="text-lg text-primary font-medium mb-2">
              Prompt ရေးစရာမလိုဘဲ Brand နှင့် ကိုက်ညီသော စာသားနှင့် ပုံများကို အမြန်ထုတ်ယူပါ
            </p>
<p className="text-sm sm:text-base text-on-surface-variant leading-relaxed">
              Built for Myanmar eCommerce founders and marketing directors. Generate high-conversion copy, localized colloquial hooks, and studio lifestyle shots in seconds.
            </p>
</div>
<div className="flex items-center gap-3 shrink-0">
<a className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-primary-container shadow-md transition-all" onClick={scrollToDemo} style={{ cursor: "pointer" }}>
<span className="">Try Studio (50 Free Credits)</span>
<span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</a>
</div>
</div>
{/* FREE-FLOWING INTERACTIVE WORKSPACE */}
<div className="rounded-4xl bg-gradient-to-br from-white/90 via-surface-container-low/60 to-white/90 p-6 sm:p-10 border border-white/80 shadow-[0_10px_40px_-10px_rgba(11,28,48,0.05)] backdrop-blur-xl relative overflow-hidden">
{/* Tactile Capability Floating Pills Header */}
<div className="mb-8">
<div className="flex items-center justify-between mb-3">
<span className="text-xs font-semibold text-secondary uppercase tracking-wider flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-mint-500 animate-pulse"></span>
                Select Creative Capability
              </span>
<span className="text-xs text-secondary font-mono">BnB Creative Engine v2.4</span>
</div>
<div className="flex flex-wrap gap-2.5">
<button className="flex items-center gap-2 px-4 py-2 rounded-full bg-mint-100 text-primary-container text-xs font-semibold border border-mint-200/80 shadow-xs hover:scale-105 transition-all">
<span className="material-symbols-outlined text-[16px]">title</span>
<span className="">Ad Headlines &amp; Hooks</span>
<span className="text-[10px] opacity-75 font-normal">ဆွဲဆောင်မှုရှိသောခေါင်းစဉ်</span>
</button>
<button className="flex items-center gap-2 px-4 py-2 rounded-full bg-white text-on-surface text-xs font-medium border border-outline-variant hover:border-primary/40 hover:bg-mint-50/50 transition-all">
<span className="material-symbols-outlined text-[16px]">forum</span>
<span className="">Social Media Captions</span>
<span className="text-[10px] text-secondary">FB &amp; IG</span>
</button>
<button className="flex items-center gap-2 px-4 py-2 rounded-full bg-white text-on-surface text-xs font-medium border border-outline-variant hover:border-primary/40 hover:bg-peach-50/50 transition-all">
<span className="material-symbols-outlined text-[16px]">campaign</span>
<span className="">Campaign &amp; Flash Sales</span>
<span className="text-[10px] text-secondary">အထူးလျှော့ဈေး</span>
</button>
<button className="flex items-center gap-2 px-4 py-2 rounded-full bg-white text-on-surface text-xs font-medium border border-outline-variant hover:border-primary/40 hover:bg-sky-50/50 transition-all">
<span className="material-symbols-outlined text-[16px]">article</span>
<span className="">Full Copywriting</span>
<span className="text-[10px] text-secondary">AIDA Framework</span>
</button>
<button className="flex items-center gap-2 px-4 py-2 rounded-full bg-white text-on-surface text-xs font-medium border border-outline-variant hover:border-primary/40 hover:bg-butter-100/50 transition-all">
<span className="material-symbols-outlined text-[16px]">photo_filter</span>
<span className="">Studio Enhancer</span>
<span className="text-[10px] text-secondary">Studio Quality</span>
</button>
<button className="flex items-center gap-2 px-4 py-2 rounded-full bg-white text-on-surface text-xs font-medium border border-outline-variant hover:border-primary/40 hover:bg-lavender-50 transition-all">
<span className="material-symbols-outlined text-[16px]">deck</span>
<span className="">Lifestyle Context</span>
<span className="text-[10px] text-secondary">Realistic Aesthetics</span>
</button>
</div>
</div>
{/* Studio Live Transformation Canvas */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
{/* Left 7 cols: Morphing Before & After Visuals */}
<div className="lg:col-span-7 flex flex-col gap-4">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative">
{/* Raw Photo */}
<div className="relative group rounded-3xl overflow-hidden bg-surface-container shadow-sm">
<img alt="Raw mobile shot of organic cosmetic serum" className="w-full h-72 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2b9YTbrm4_PPWqPT23lpCxiEGzIMI69UrypROe3AmBwyw5_MG1yJbqiiRoVBCB1zYjaDy6jo21sQj7NlwjRic7GcTMFNTfMAtC0khlkAF-7NN45erBBvTjSyRcjsYHjV6PQFEkI0xA02h7RfZY1h-2iCF9cRMCue23EqZPAkwSCFTE5TT_y3gPDRyiqOiwu-5BvgBn7KUZ9EHt6Plv950mEFAdeSRViZo0Ua3Mui0ncPlqoppBgw" />
<div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-mono flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-amber-400"></span>
                    Raw Mobile Shot
                  </div>
<div className="absolute bottom-3 left-3 right-3 text-white text-xs bg-gradient-to-t from-black/80 to-transparent p-3 rounded-2xl">
                    Messy background, uneven fluorescent lighting
                  </div>
</div>
{/* Studio Enhanced Photo */}
<div className="relative group rounded-3xl overflow-hidden bg-mint-100 shadow-md ring-2 ring-primary/20">
<img alt="Studio quality rendered cosmetics" className="w-full h-72 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBI5pGTMyWFhzeCC-DKNeL5KliqNoUHSLx86siNFlk0jKg8D3HnMy08SHnqzh1E1lvCL3J99ocguQvrITxmcpoDIoKz2iVH1_evxgrctuanMDku5paX1MZtxvBlZyrmHKSKxXitmoMReFhvVzUX6bUq7grPuVAXeQL7nmV0r5OKFzkaQOShqEDGLyGSroASzk5ABWatlTwXciBl8cc_0XQ_M5IaDYVS42bcBW4d9jQwRv7TO9c6i6k" />
<div className="absolute top-3 left-3 bg-primary/90 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-mono flex items-center gap-1.5 shadow-sm">
<span className="material-symbols-outlined text-[14px]">auto_awesome</span>
                    AI Studio Enhanced
                  </div>
<div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-md text-primary font-bold text-xs px-2.5 py-1 rounded-lg">
                    4K Travertine Ray-trace
                  </div>
</div>
{/* Floating Center Transformation Badge */}
<div className="hidden sm:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-xl items-center justify-center text-primary z-20 border border-mint-200">
<span className="material-symbols-outlined text-[20px]">sync_alt</span>
</div>
</div>
{/* Telemetry mini bar */}
<div className="flex items-center justify-between text-xs text-secondary font-mono px-2">
<span className="">Output: 3840 x 3840px (Instagram/Facebook ready)</span>
<span className="flex items-center gap-1 text-primary font-medium">
<span className="material-symbols-outlined text-[14px]">timer</span> 4.8 seconds
                </span>
</div>
</div>
{/* Right 5 cols: Fluid Burmese Ad Copy Bubble */}
<div className="lg:col-span-5 flex flex-col justify-between h-full bg-white/90 rounded-3xl p-6 sm:p-7 border border-outline-variant/80 shadow-sm relative">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-2">
<span className="w-2.5 h-2.5 rounded-full bg-mint-500"></span>
<span className="text-xs font-bold uppercase tracking-wider text-on-surface">Generated Burmese Ad Copy</span>
</div>
<button
    type="button"
    onClick={copyAdCopy}
    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 hover:bg-teal-50 hover:text-teal-700 text-xs font-medium transition-all cursor-pointer"
  >
    <span className="material-symbols-outlined text-[15px]">
      {copied ? "check" : "content_copy"}
    </span>
    <span id="copy-text">{copied ? "Copied!" : "Copy Text"}</span>
  </button>
</div>
{/* Organic Dialogue Body */}
<div className="space-y-3 text-sm text-on-surface leading-relaxed p-4 rounded-2xl bg-surface-container-low/60 border border-outline-variant/40" id="sample-ad-copy">
<p className="font-semibold text-primary text-base">
                  🌿 မျက်နှာအသားအရေ ခြောက်သွေ့ညှိုးနွမ်းခြင်းကို သဘာဝအတိုင်း ၇ ရက်အတွင်း ကုစားလိုက်ပါ!
                </p>
<p className="text-on-surface-variant text-xs sm:text-sm">
                  နေ့��ဉ် အလုပ်ပင်ပန်းမှု၊ ဖုန်မှုန့်နဲ့ နေလောင်ဒဏ်ကြောင့် ပျက်စီးနေတဲ့ အသားအရေအတွက် Pure Glow Herbal Serum ရှိတယ်နော်။
                </p>
<div className="space-y-1 text-xs sm:text-sm text-secondary pt-1">
<p className="flex items-center gap-1.5">
<span className="material-symbols-outlined text-mint-500 text-[16px]">check</span>
                    ဓာတုဆိုးဆေး လုံးဝမပါဝင် (100% Organic)
                  </p>
<p className="flex items-center gap-1.5">
<span className="material-symbols-outlined text-mint-500 text-[16px]">check</span>
                    အဆီပြန်ခြင်း ကင်းဝေးပြီး နုပျိုကြည်လင်စေတယ်
                  </p>
<p className="flex items-center gap-1.5">
<span className="material-symbols-outlined text-mint-500 text-[16px]">check</span>
                    KPay / Wave Money ဖြင့် လွယ်ကူစွာ ငွေချေနိုင်ပါသည်
                  </p>
</div>
<div className="mt-2 pt-2 border-t border-outline-variant/50 text-xs font-semibold text-primary">
                  🎁 ယခုအပတ် အထူးပရိုမိုးရှင်း: ၂ ဘူး��ယ်ယူပါက ရန်ကုန်နှင့် မန္တလေး အိမ်အရောက် Delivery Free!
                </div>
</div>
{/* Footer Micro Info */}
<div className="flex items-center justify-between pt-4 mt-2 text-xs text-secondary border-t border-outline-variant/40">
<span className="">Tokens: 142 • Model: BnB-Content-V2</span>
<span className="text-primary font-medium flex items-center gap-1">
<span className="material-symbols-outlined text-[15px]">thumb_up</span> 100% Conversational Tone
                </span>
</div>
</div>
</div>
</div>
</section>
{/* ================= TAB VIEWPORT 2: RETAIL (SELL PRODUCTS) ================= */}
<section className={`tab-pane flex flex-col gap-10 transition-all duration-300 ${activeTab === "retail" ? "" : "hidden"}`} id="pane-retail">
{/* Header Info */}
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2">
<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-peach-100 text-peach-500 text-xs font-semibold mb-3">
<span className="material-symbols-outlined text-[16px]">storefront</span>
<span className="">Retail &amp; Online Shops • Autonomous Commerce</span>
</div>
<h2 className="text-2xl sm:text-4xl font-bold text-on-surface tracking-tight mb-2">
              ကုန်ပစ္စည်းအရောင်းဆိုင်များအတွက် ၂၄ နာရီ AI ��ရောင်းဝန်ထမ်း
            </h2>
<p className="text-base sm:text-lg text-primary font-medium mb-2 leading-relaxed">
              Online Shop, Retail, အဝတ်အထည်၊ ဖိနပ်၊ အလှကုန်၊ စာအုပ်နှင့် လူသုံးကုန်ဆိုင်များအတွက် Customer Enquiry မေးခွန်းများကို ချက်ချင်းတုံ့ပြန်ပေးပြီး အော်ဒါအချက်အလက် စုဆောင်းပေးခြင်း။
            </p>
<p className="text-sm sm:text-base text-on-surface-variant leading-relaxed">
              Designed for retail boutiques and fast-growing online brands across Myanmar. Eliminates missed late-night messages, syncs inventory, and streamlines payments seamlessly.
            </p>
</div>
<div className="flex items-center gap-3 shrink-0">
<a className="inline-flex items-center gap-2 bg-on-surface text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-primary shadow-md transition-all" onClick={scrollToDemo} style={{ cursor: "pointer" }}>
<span className="">ရက်ချိန်းရယူမည် (Book Demo)</span>
<span className="material-symbols-outlined text-[18px]">calendar_today</span>
</a>
</div>
</div>
{/* Open Floating Workspace with Live Interactive Chat */}
<div className="rounded-4xl bg-gradient-to-br from-peach-50/40 via-white to-mint-50/30 p-6 sm:p-10 border border-white shadow-[0_10px_40px_-10px_rgba(11,28,48,0.05)] backdrop-blur-xl">
{/* Floating Feature Pills */}
<div className="flex flex-wrap items-center gap-2.5 mb-8">
<span className="px-4 py-2 rounded-full bg-white text-xs font-semibold text-on-surface border border-peach-200/80 shadow-xs flex items-center gap-1.5">
<span className="material-symbols-outlined text-peach-500 text-[16px]">quickreply</span>
              Customer Enquiry အလိုအလျောက် ဖြေကြားခြင်း (ဈေးနှုန်း၊ stock၊ အရွယ်အစား၊ delivery)
            </span>
<span className="px-4 py-2 rounded-full bg-white text-xs font-semibold text-on-surface border border-outline-variant shadow-xs flex items-center gap-1.5">
<span className="material-symbols-outlined text-mint-500 text-[16px]">recommend</span>
              Product Recommendation (ဝယ်သူလိုအပ်ချက်အလိုက် သင့်တော်သောပစ္စည်း ညွှန်းပေးခြင်း)
            </span>
<span className="px-4 py-2 rounded-full bg-white text-xs font-semibold text-on-surface border border-outline-variant shadow-xs flex items-center gap-1.5">
<span className="material-symbols-outlined text-blue-500 text-[16px]">receipt_long</span>
              Order Intake &amp; Slip Verification (အမည်၊ ဖုန်း၊ လိပ်စာ၊ KPay/Wave ငွေလွှဲစလစ် အတည်ပြုစုစည်းခြင်း)
            </span>
<span className="px-4 py-2 rounded-full bg-white text-xs font-semibold text-on-surface border border-outline-variant shadow-xs flex items-center gap-1.5">
<span className="material-symbols-outlined text-teal-600 text-[16px]">sync_alt</span>
              Multi-channel Instant Sync (Facebook Messenger, Telegram)
            </span>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
{/* Left 5 cols: 3-Step Free Setup Path */}
<div className="lg:col-span-5 space-y-6">
<div className="space-y-1">
<span className="text-xs font-bold text-primary uppercase tracking-wider">Fast Turnaround • လွယ်ကူမြန်ဆန်သော အဆင့် ၃ ဆင့်</span>
<h3 className="text-xl font-bold text-on-surface">သင့်ဆိုင်အတွက် Bot အား အမြန်ဆုံး စတင်အသုံးပြုပုံ</h3>
<p className="text-xs sm:text-sm text-secondary">Coding ရေးစရာမလိုဘဲ UTS Myanmar အင်ဂျင်နီယာအဖွဲ့မှ အစအဆုံး ကူညီတပ်ဆင်ပေးပါသည်။</p>
</div>
<div className="space-y-4">
<div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-white/80 border border-outline-variant/60">
<div className="w-8 h-8 rounded-full bg-mint-100 text-primary font-bold text-xs flex items-center justify-center shrink-0">1</div>
<div>
<h4 className="text-xs sm:text-sm font-semibold text-on-surface">ကုန်ပစ္စည်းစာရင်းနှင့် ဈေးနှုန်းများ ပေးပို့ခြင်း</h4>
<p className="text-xs text-secondary mt-0.5">Excel၊ Google Sheet သို့မဟုတ် ပုံနှင့်တကွ ပေးပို့ရုံဖြင့် စနစ်ထဲ ထည့်သွင်းပေးပါမည်။</p>
</div>
</div>
<div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-white/80 border border-outline-variant/60">
<div className="w-8 h-8 rounded-full bg-peach-100 text-peach-500 font-bold text-xs flex items-center justify-center shrink-0">2</div>
<div>
<h4 className="text-xs sm:text-sm font-semibold text-on-surface">စကားပြောပုံစံနှင့် ငွေပေးချေမှု အချက်အလက် သတ်မှတ်ခြင်း</h4>
<p className="text-xs text-secondary mt-0.5">ဆိုင်၏ brand voice အလိုက် ယဉ်ကျေးပျူငှာစွာ ဖြေကြားနိုင်ရန်နှင့် KPay/Wave QR ထည့်သွင်းခြင်း။</p>
</div>
</div>
<div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-white/80 border border-outline-variant/60">
<div className="w-8 h-8 rounded-full bg-sky-100 text-blue-600 font-bold text-xs flex items-center justify-center shrink-0">3</div>
<div>
<h4 className="text-xs sm:text-sm font-semibold text-on-surface">Facebook Page သို့မဟုတ် Telegram သို့ ချိတ်ဆက်ခြင်း</h4>
<p className="text-xs text-secondary mt-0.5">၁ ချက်နှိပ်ရုံဖြင့် ချိတ်ဆက်ပြီးသည်နှင့် AI ဝန်ထမ်းမှ ချက်ချင်း အရောင်းစတင်လက်ခံပေးပါမည်။</p>
</div>
</div>
</div>
{/* Highlight pill */}
<div className="p-4 rounded-2xl bg-mint-50/90 border border-mint-200/60 flex items-center justify-between">
<div>
<span className="text-xs text-secondary block font-mono">Setup to Go-Live</span>
<span className="text-base font-bold text-primary">အများဆုံး ၂၄ - ၄၈ နာရီအတွင်း အသင့်အသုံးပြုနိုင်ခြင်း</span>
</div>
<span className="material-symbols-outlined text-primary text-[28px]">rocket_launch</span>
</div>
</div>
{/* Right 7 cols: Interactive Simulated Messenger Feed */}
<div className="lg:col-span-7 bg-white/95 rounded-3xl p-5 sm:p-7 shadow-lg border border-outline-variant/80">
{/* Chat header */}
<div className="flex items-center justify-between pb-4 border-b border-outline-variant/50 mb-4">
<div className="flex items-center gap-3">
<div className="relative">
<div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center shadow-sm">
<span className="material-symbols-outlined text-[20px]">smart_toy</span>
</div>
<span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-mint-500 border-2 border-white rounded-full"></span>
</div>
<div>
<h4 className="text-sm font-bold text-on-surface">BnB Retail Assistant • Live Demo</h4>
<p className="text-xs text-secondary flex items-center gap-1 font-mono">
<span className="">Messenger &amp; Telegram Active</span>
</p>
</div>
</div>
<span className="px-3 py-1 rounded-full bg-mint-100 text-primary-container text-xs font-semibold">
                  Auto Autonomous Mode
                </span>
</div>
{/* Stream Messages */}
<div className="space-y-3.5 max-h-[380px] overflow-y-auto p-2">
{/* Customer 1 */}
<div className="flex justify-end items-end gap-2">
<div className="bg-primary text-white text-xs sm:text-sm px-4 py-2.5 rounded-2xl rounded-br-xs max-w-sm">
                    မင်္ဂလာပါရှင့် ဒီပန်းရောင်ဂါဝန်လေး အဆိုက် L ရသေးလားရှင့်? ဈေးဘယ်လောက်လဲ?
                  </div>
</div>
{/* Bot 1 */}
<div className="flex justify-start items-start gap-2.5">
<div className="w-7 h-7 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs shrink-0 mt-1">
<span className="material-symbols-outlined text-[15px]">smart_toy</span>
</div>
<div className="bg-surface-container-low text-on-surface text-xs sm:text-sm px-4 py-3 rounded-2xl rounded-tl-xs max-w-md space-y-1.5 shadow-xs">
<p className="">မင်္ဂလာပါရှင်! ရွှေဝတ်စုံ ဖက်ရှင်မှ ကြိုဆိုပါတယ်ရှင့် 🌸</p>
<p className="">Floral Summer Dress (Pink) Size-L က လက်ကျန် <strong>၃ ထည်</strong> ရှိပါသေးတယ်ရှင့်။</p>
<p className="text-primary font-semibold">💰 ဈေးနှုန်း: ၂၈,၅၀၀ ကျပ် ဖြစ်ပါတယ်ရှင်။</p>
</div>
</div>
{/* Customer 2 */}
<div className="flex justify-end items-end gap-2">
<div className="bg-primary text-white text-xs sm:text-sm px-4 py-2.5 rounded-2xl rounded-br-xs max-w-sm">
                    ဟုတ်ကဲ့ ၁ ထည် ယူပါမယ်ရှင်။ KPay နဲ့ ရှင်းလို့ရမလား?
                  </div>
</div>
{/* Bot 2: Structured Payment Intake */}
<div className="flex justify-start items-start gap-2.5">
<div className="w-7 h-7 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs shrink-0 mt-1">
<span className="material-symbols-outlined text-[15px]">smart_toy</span>
</div>
<div className="bg-surface-container-low text-on-surface text-xs sm:text-sm px-4 py-3 rounded-2xl rounded-tl-xs max-w-md space-y-2 shadow-xs">
<p className="">ရပါတယ်ရှင့်! KPay / Wave Money ဖြင့် ပေးချေနိုင်ပါတယ်ရှင်။</p>
{/* Tactile Payment Slip Tag */}
<div className="p-2.5 rounded-xl bg-white border border-outline-variant font-mono text-xs space-y-1">
<div className="text-on-surface font-semibold">KBZPay: 09-442-508-508</div>
<div className="text-secondary text-[11px]">Account: Daw Hla Hla (BnB Shop)</div>
<div className="text-primary font-bold">Total Payable: 28,500 MMK</div>
</div>
<p className="text-xs text-secondary">ငွေလွှဲပြေစာ (Slip) လေးနဲ့အတူ <strong>အမည်၊ ဖုန်း၊ လိပ်စာ</strong> လေး ပေးပို့ပေးပါရှင့် 📦</p>
</div>
</div>
{/* Bot Confirmed */}
<div className="flex justify-start items-start gap-2.5">
<div className="w-7 h-7 rounded-full bg-mint-500 text-white flex items-center justify-center text-xs shrink-0 mt-1">
<span className="material-symbols-outlined text-[15px]">check</span>
</div>
<div className="bg-mint-50 border border-mint-200/80 text-on-surface text-xs sm:text-sm px-4 py-2.5 rounded-2xl rounded-tl-xs max-w-md shadow-xs">
<p className="text-primary font-bold flex items-center gap-1.5">
<span className="material-symbols-outlined text-[16px]">verified</span>
                      အော်ဒါ အတည်ပြုပြီးပါပြီရှင့်! Order #BNB-8832
                    </p>
<p className="text-xs text-secondary mt-1">ပစ္စည်းပို့ဆောင်မည့် နေ့ရက်ကို SMS ဖြင့် အကြောင်းကြားပေးပါမည်။ ကျေးဇူးတင်ပါတယ်ရှင်။</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
{/* ================= TAB VIEWPORT 3: SERVICE PROMOTION (CLINICS & SALONS) ================= */}
<section className={`tab-pane flex flex-col gap-10 transition-all duration-300 ${activeTab === "service" ? "" : "hidden"}`} id="pane-service">
{/* Header Info */}
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2">
<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-blue-700 text-xs font-semibold mb-3">
<span className="material-symbols-outlined text-[16px]">event_available</span>
<span className="">Service Promotion • Appointment &amp; Lead Qualification</span>
</div>
<h2 className="text-2xl sm:text-4xl font-bold text-on-surface tracking-tight mb-2">
              ဝန်ဆောင်မှုလုပ်ငန်းများအတွက် ရက်ချိန်းနှင့် စုံစမ်းမှု စီမံပေးမည့် AI ဝန်ထမ်း
            </h2>
<p className="text-base sm:text-lg text-primary font-medium mb-2 leading-relaxed">
              Beauty Salon, Spa, အထူးကုဆေးခန်း၊ သင်တန်းကျောင်း၊ Car Showroom နှင့် အကျိုးဆောင်လုပ်ငန်းများအတွက် အချိန်ကုန်သက်သာစေမည့် Booking စနစ်။
            </p>
<p className="text-sm sm:text-base text-on-surface-variant leading-relaxed">
              Empower your service front-desk to pre-screen client concerns, schedule appointments into shared calendars, and deliver personalized package details 24/7.
            </p>
</div>
<div className="flex items-center gap-3 shrink-0">
<a className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-primary-container shadow-md transition-all" onClick={scrollToDemo} style={{ cursor: "pointer" }}>
<span className="">ရက်ချိန်းစနစ် စမ်းသပ်ကြည့်မည်</span>
<span className="material-symbols-outlined text-[18px]">calendar_month</span>
</a>
</div>
</div>
{/* Floating Feature Highlights Pill Stack */}
<div className="flex flex-wrap items-center gap-2.5">
<span className="px-4 py-2 rounded-full bg-white text-xs font-semibold text-on-surface border border-sky-200/80 shadow-xs flex items-center gap-1.5">
<span className="material-symbols-outlined text-blue-600 text-[16px]">info</span>
            Service Enquiry &amp; Package အသေးစိတ် အလိုအလျောက် ရှင်းပြပေးခြင်း
          </span>
<span className="px-4 py-2 rounded-full bg-white text-xs font-semibold text-on-surface border border-outline-variant shadow-xs flex items-center gap-1.5">
<span className="material-symbols-outlined text-mint-500 text-[16px]">event</span>
            Smart Booking &amp; Appointment စုဆောင်းပေးခြင်း (ဧည့်သည်ရွေးချယ်သော ရက်စွဲ/အချိန်)
          </span>
<span className="px-4 py-2 rounded-full bg-white text-xs font-semibold text-on-surface border border-outline-variant shadow-xs flex items-center gap-1.5">
<span className="material-symbols-outlined text-purple-600 text-[16px]">psychology</span>
            Customer Qualification (လိုအပ်ချက်ကို မေးမြန်းစိစစ်ပြီး အသင့်တော်ဆုံး ဝန်ဆောင်မှု ညွှန်းပေးခြင်း)
          </span>
<span className="px-4 py-2 rounded-full bg-white text-xs font-semibold text-on-surface border border-outline-variant shadow-xs flex items-center gap-1.5">
<span className="material-symbols-outlined text-teal-600 text-[16px]">forum</span>
            Repetitive FAQ Auto-Reply (ဧည့်ကြို staff များ၏ ဝန်ထုပ်ဝန်ပိုးကို လျှော့ချပေးခြင်း)
          </span>
</div>
{/* Organic Floating Workflow Comparison */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
{/* Old Manual Way */}
<div className="rounded-4xl p-7 sm:p-9 bg-white/70 border border-outline-variant/60 shadow-sm flex flex-col justify-between">
<div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-red-600 text-xs font-semibold mb-4">
<span className="w-2 h-2 rounded-full bg-red-500"></span>
                လူကိုယ်တိုင် 手動 လက်ခံရသည့် အခက်အခဲများ (Traditional Manual)
              </div>
<h3 className="text-xl font-bold text-on-surface mb-4">သင်ရင်ဆိုင်နေ��သော အချိန်ကြန့်ကြာမှုများ</h3>
<ul className="space-y-3.5 text-xs sm:text-sm text-secondary">
<li className="flex items-start gap-2.5">
<span className="material-symbols-outlined text-red-500 text-[18px] shrink-0 mt-0.5">cancel</span>
<span className="">ည ၈ နာရီနောက်ပိုင်း ဝင်လာသော စုံစမ်းမှုများကို မနက်မှ ပြန်ဖြေနိုင်သဖြင့် ၄၀% ကျော်သော ဖောက်သည်များ အခြားနေရာသို့ ရောက်ရှိသွားခြင်း။</span>
</li>
<li className="flex items-start gap-2.5">
<span className="material-symbols-outlined text-red-500 text-[18px] shrink-0 mt-0.5">cancel</span>
<span className="">ဧည့်ကြို ဝန်ထမ်းများသည် ဖုန်းဖြေခြင်းနှင့် ဆိုင်ရောက်ဧည့်သည်ကို တစ်ပြိုင်နက် ဧည့်ခံရသဖြင့် ရက်ချိန်းထပ်ခြင်းများ ဖြစ်ပေါ်ခြင်း။</span>
</li>
<li className="flex items-start gap-2.5">
<span className="material-symbols-outlined text-red-500 text-[18px] shrink-0 mt-0.5">cancel</span>
<span className="">ကြိုတင်မေး���ြန်းစိစစ်မှု (Pre-screening) မရှိသောကြောင့် ဆရာဝန် သို့မဟုတ် Consultant များ၏ အချိန်များ အလဟဿဖြစ်ရခြင်း။</span>
</li>
<li className="flex items-start gap-2.5">
<span className="material-symbols-outlined text-red-500 text-[18px] shrink-0 mt-0.5">cancel</span>
<span className="">ဝန်ထမ်းအပြောင်းအလဲများတိုင်း ဝန်ဆောင်မှုဈေးနှုန်းနှင့် အချက်အလက်များကို အသစ်ပြန်လည် သင်ကြားပေးနေရခြင်း။</span>
</li>
</ul>
</div>
<div className="mt-8 pt-4 border-t border-outline-variant/60 flex items-center justify-between text-xs text-red-600 font-semibold">
<span className="">Conversion Rate: ~18%</span>
<span className="">အလားအလာရှိသော ဧည့်သည်များ ဆုံးရှုံးရမှုများပြား</span>
</div>
</div>
{/* BnB Autonomous Way */}
<div className="rounded-4xl p-7 sm:p-9 bg-gradient-to-br from-primary via-primary-container to-teal-800 text-white shadow-xl flex flex-col justify-between relative overflow-hidden">
<div className="absolute -right-12 -bottom-12 w-48 h-48 bg-mint-500/20 rounded-full blur-2xl"></div>
<div className="relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-semibold mb-4">
<span className="w-2 h-2 rounded-full bg-mint-200 animate-pulse"></span>
                BnB AI ဝန်ဆောင်မှု စီမံခန့်ခွဲမှုစနစ်
              </div>
<h3 className="text-xl font-bold text-white mb-4">အလိုအလျောက် ရက်ချိန်းနှင့် အရည်အသွေးစိစစ်မှု</h3>
<ul className="space-y-3.5 text-xs sm:text-sm text-white/90">
<li className="flex items-start gap-2.5">
<span className="material-symbols-outlined text-mint-200 text-[18px] shrink-0 mt-0.5">check_circle</span>
<span className="">သန်းခေါင်ယံအချိန်တွင်ပင် ၁ စက္ကန့်အတွင်း အမြန်ပြန်လည်ဖြေကြားပြီး Calendar ရက်ချိန်းကို ချက်ချင်း အတည်ပြုပေးခြင်း။</span>
</li>
<li className="flex items-start gap-2.5">
<span className="material-symbols-outlined text-mint-200 text-[18px] shrink-0 mt-0.5">check_circle</span>
<span className="">Google Calendar သို့မဟုတ် ဆေးခန်းစနစ်များနှင့် ၂ ဖက်ချိတ်ဆက်ထာ��သဖြင့် ရက်ချိန်း အချိန်ထပ်ခြင်း လုံးဝမရှိစေခြင်း။</span>
</li>
<li className="flex items-start gap-2.5">
<span className="material-symbols-outlined text-mint-200 text-[18px] shrink-0 mt-0.5">check_circle</span>
<span className="">ဖောက်သည်၏ လိုအပ်ချက်၊ ဘတ်ဂျက်နှင့် ရွေးချယ်လိုသော Package များကို ကြိုတင်မေးမြန်း စိစစ်ပေးခြင်း။</span>
</li>
<li className="flex items-start gap-2.5">
<span className="material-symbols-outlined text-mint-200 text-[18px] shrink-0 mt-0.5">check_circle</span>
<span className="">လုပ်ငန်း၏ SOP အချက်အလက်များကို တစ်ကြိမ်ထည့်သွင်းရုံဖြင့် အမြဲမပြတ် တိကျမှန်ကန်စွာ ရှင်းပြပေးနိုင်ခြင်း။</span>
</li>
</ul>
</div>
<div className="relative z-10 mt-8 pt-4 border-t border-white/20 flex items-center justify-between text-xs text-mint-200 font-bold">
<span className="">Conversion Rate: 46%+</span>
<span className="">စုံစမ်းမှုတိုင်း လက်လွတ်မခံဘဲ အောင်မြင်စွာ ချိတ်ဆက်နိုင်ခြင်း</span>
</div>
</div>
</div>
</section>
{/* ================= FAQ ACCORDION (Clean, Borderless & Rounded) ================= */}
<section className="mt-24 pt-8">
<div className="max-w-3xl mx-auto">
<div className="text-center mb-10">
<span className="text-xs font-bold uppercase tracking-widest text-primary block mb-2">နည်းပညာနှင့် လုပ်ငန်းဆိုင်ရာ မေးခွန်းများ (TECHNICAL &amp; OPERATIONAL FAQ)</span>
<h2 className="text-2xl sm:text-3xl font-bold text-on-surface">မကြာခဏ မေးလေ့ရှိသော မေးခွန်းများ (Frequently Asked Questions)</h2>
<p className="text-sm text-secondary mt-1">မြန်မာစီးပွားရေးလုပ်ငန်းများအတွက် BnB AI ဝန်ထမ်းအသုံးချမှုဆိုင်ရာ သိကောင်းစရာများ</p>
</div>
{/* Seamless Accordion Stack with Hairlines */}
<div className="space-y-2">
  {[
    {
      id: 1,
      q: "AI က မြန်မာစကားကို ကျွမ်းကျင်စွာ ပြောဆိုနိုင်ပြီး အသုံးများတဲ့ အသုံးအနှုန်းတွေကို နားလည်ပါသလား?",
      a: "ဟုတ်ကဲ့၊ အပြည့်အဝ နားလည်ပါတယ်။ မြန်မာယူနီကုဒ် (Unicode) သာမက အွန်လိုင်းအရောင်းဆိုင်များတွင် အသုံးများသော စကားအသုံးအနှုန်းများ (ဥပမာ- size, color, deli, kpay, စရံ) နှင့် အင်္ဂလိပ်-မြန်မာရောနှောသုံးစွဲမှုများကို အထူး calibrate ပြုလုပ်ထားပါသည်။ ဆိုင်ရှင်၏ မူရင်းစကားပြောဟန် (SOP Tone) အတိုင်း ယဉ်ကျေးပျူငှာစွာ တုံ့ပြန်ပေးနိုင်ပါသည်။"
    },
    {
      id: 2,
      q: "AI က ဆိုင်ရှင်ရဲ့ အတည်ပြုချက်မပါဘဲ အော်ဒါတွေကို အလိုအလျောက် Confirm လုပ်လိုက်မှာလား?",
      a: "အော်ဒါကို အလိုအလျောက် တိုက်ရိုက် confirm မလုပ်ပါဘူး။ AI သည် Customer ထံမှ အမည်၊ ဖုန်းနံပါတ်၊ ပို့ဆောင်ရမည့်လိပ်စာ၊ ပစ္စည်းအမျိုးအစား၊ အရေအတွက်နှင့် ငွေလွှဲပြေစာ (KPay / Wave Slip) တို့ကို စနစ်တကျ ကောက်ယူစုစည်းပေးပြီး ဆိုင်ရှင်ထံ ချက်ချင်း Notification ပို့ပေးပါသည်။ ဆိုင်ရှင် သို့မဟုတ် အရောင်းဝန်ထမ်းမှ စစ်ဆေးအတည်ပြုပြီးမှသာ အော်ဒါအောင်မြင်မည်ဖြစ်သဖြင့် အမှားအယွင်းမဖြစ်စေပါ။"
    },
    {
      id: 3,
      q: "စတင်အသုံးပြုဖို့ Setup ပြုလုပ်ခြင်းနဲ့ SOP သင်ကြားပေးခြင်းက ဘယ်လောက်ကြာမလဲ?",
      a: "အများဆုံး ၂၄ နာရီမှ ၄၈ နာရီအတွင်း အပြီးသတ် စတင်အသုံးပြုနိုင်ပါသည်။ သင့်လုပ်ငန်း၏ Product List (Excel/CSV သို့မဟုတ် ဓာတ်ပုံများ) ကို UTS Myanmar အင်ဂျင်နီယာအဖွဲ့က ကူညီထည့်သွင်းပေးပြီး ဆိုင်ရှင်နှင့် ဝန်ထမ်းများအတွက် အခမဲ့ Onboarding Training ကိုပါ လက်တွေ့သင်ကြားပေးပါသည်။"
    },
    {
      id: 4,
      q: "လိုအပ်တဲ့အချိန်မှာ လူသားဝန်ထမ်းက စကားပြောခန်းကို ကြားဖြတ်ဝင်ရောက်ပြောဆိုနိုင်ပါသလား?",
      a: "အလွယ်တကူ ကြားဖြတ်ပြောဆိုနိုင်ပါတယ်။ Human Takeover စနစ်ပါဝင်သဖြင့် Bot ဖြေကြားနေသည့် စကားပြောခန်းကို Dashboard သို့မဟုတ် Telegram မှတစ်ဆင့် အချိန်မရွေး ၁ ချက်နှိပ်ရုံဖြင့် ချက်ချင်း Takeover ပြုလုပ်ကာ Customer နှင့် တိုက်ရိုက် စကားပြောနိုင်ပါသည်။"
    },
    {
      id: 5,
      q: "ဘယ်လို Messaging Channel တွေကို ချိတ်ဆက်အသုံးပြုနိုင်ပါသလဲ?",
      a: "မြန်မာနိုင်ငံတွင် လူသုံးအများဆုံးဖြစ်သော Facebook Messenger, Telegram နှင့် Website Live Chatbot တို့ကို ခလုတ်တစ်ချက်နှိပ်ရုံဖြင့် တိုက်ရိုက် ချိတ်ဆက် (1-Click API Integration) အသုံးပြုနိုင်ပါသည်။"
    }
  ].map((faq) => {
    const isOpen = openFaqs.includes(faq.id);
    return (
      <div key={faq.id} className="rounded-2xl transition-all duration-200 hover:bg-white/60 border border-slate-100 bg-white/40">
        <button
          type="button"
          className="w-full py-4 px-5 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
          onClick={() => toggleFaq(faq.id)}
        >
          <span className="font-semibold text-sm sm:text-base text-on-surface">{faq.q}</span>
          <div className="w-7 h-7 rounded-full bg-surface-container flex items-center justify-center shrink-0">
            <span className={`material-symbols-outlined text-secondary text-[18px] transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}>
              expand_more
            </span>
          </div>
        </button>
        {isOpen && (
          <div className="px-5 pb-5 text-xs sm:text-sm text-secondary leading-relaxed">
            {faq.a}
          </div>
        )}
      </div>
    );
  })}
</div>
</div>
</section>
{/* ================= BOTTOM EXECUTIVE AUDIT / CONSULTATION BANNER ================= */}
<section className="mt-20 mb-16" id="demo-section">
<div className="rounded-5xl bg-on-surface text-white p-8 sm:p-14 relative overflow-hidden shadow-2xl">
{/* Background organic ambient glows */}
<div className="absolute -right-20 -top-20 w-80 h-80 bg-primary/30 rounded-full blur-3xl pointer-events-none"></div>
<div className="absolute -left-10 -bottom-10 w-64 h-64 bg-mint-500/20 rounded-full blur-3xl pointer-events-none"></div>
<div className="relative z-10 max-w-3xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-mint-200 text-xs font-semibold uppercase tracking-wider mb-5">
<span className="material-symbols-outlined text-[16px]">verified_user</span>
<span className="">Enterprise SLA by UTS Myanmar</span>
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
{/* Playful CTA Pills */}
<div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
<a className="inline-flex items-center justify-center gap-2 bg-primary text-white hover:bg-mint-500 hover:text-on-surface px-8 py-3.5 rounded-full text-sm font-semibold shadow-lg transition-all" href="#">
<span className="">Book a Free Demo (ရက်ချိန်းရယူမည်)</span>
<span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</a>
<a className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3.5 rounded-full text-sm font-medium transition-all" href="tel:09442508508">
<span className="material-symbols-outlined text-[18px]">call</span>
<span className="">Direct Call: 09442508508</span>
</a>
</div>
{/* Trust badges row */}
<div className="mt-10 pt-6 border-t border-white/10 flex flex-wrap items-center gap-6 text-xs text-white/60">
<div className="flex items-center gap-1.5">
<span className="material-symbols-outlined text-mint-200 text-[16px]">credit_card_off</span>
<span className="">No credit card required</span>
</div>
<div className="flex items-center gap-1.5">
<span className="material-symbols-outlined text-mint-200 text-[16px]">build</span>
<span className="">Free onboarding setup</span>
</div>
<div className="flex items-center gap-1.5">
<span className="material-symbols-outlined text-mint-200 text-[16px]">support</span>
<span className="">Dedicated Yangon Engineering Support</span>
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
