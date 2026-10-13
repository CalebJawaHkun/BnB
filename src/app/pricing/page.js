"use client";

import { useState } from "react";
import Link from "next/link";

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      q: "မည်သည့် Plan ကို ရွေးချယ်သင့်သနည်း?",
      a: "အကယ်၍ သင်သည် အွန်လိုင်းအရောင်းဆိုင်ငယ်တစ်ခုကို တစ်ဦးတည်း စတင်လုပ်ကိုင်နေပါက Starter Plan သည် အသင့်တော်ဆုံးဖြစ်ပါသည်။ အကယ်၍ သင့်တွင် အရောင်းဝန်ထမ်းအဖွဲ့ရှိပြီး ဆိုင်ခွဲများစွာ သို့မဟုတ် Page များစွာကို တစ်ပြိုင်နက် ထိန်းချုပ်လိုပါက Growth Plan သည် အကိုက်ညီဆုံး ဖြစ်ပါသည်။",
    },
    {
      q: "Mytel အပါအဝင် ဖုန်းလိုင်းအားလုံး သုံးလို့ရပါသလား?",
      a: "ဟုတ်ကဲ့၊ အသုံးပြုနိုင်ပါသည်။ Boss & Bots (BnB) သည် မြန်မာနိုင်ငံရှိ မည်သည့် Telecom အော်ပရေတာ (MPT, ATOM, Ooredoo, Mytel) နှင့်မဆို သီးသန့် Cloud Infrastructure ဖြင့် တိုက်ရိုက် ချိတ်ဆက်ထားသောကြောင့် အနှောင့်အယှက်မရှိ ချောမွေ့စွာ အလုပ်လုပ်ပါသည်။",
    },
    {
      q: "စာချုပ်ချုပ်ရန် လိုအပ်ပါသလား? (Contract Lock-in)",
      a: "လုံးဝ မလိုအပ်ပါ။ BnB သည် မည်သည့် နှစ်ရှည်စာချုပ်ချုပ်ဆိုမှုမှ မလိုဘဲ လစဉ်ကြေးပေးသွင်း၍ စိတ်ကြိုက် အချိန်မရွေး စတင်နိုင်သလို အချိန်မရွေးလည်း ရပ်နားနိုင်ပါသည်။ Annual Plan ကို ရွေးချယ်ပါက ၁၅% သက်သာခွင့်ကို အပြည့်အဝ ခံစားရရှိမည် ဖြစ်ပါသည်။",
    },
    {
      q: "စတင်အသုံးပြုရန် မည်သို့ ပြင်ဆင်ရမည်နည်း?",
      a: "Demo တောင်းဆိုပြီး မိနစ်ပိုင်းအတွင်း ကျွန်ုပ်တို့၏ နည်းပညာအဖွဲ့မှ သင့် Page သို့မဟုတ် Telegram Bot နှင့် ချိတ်ဆက်ပေးကာ ကနဦး Product DB များကို တင်သွင်းရန် အခမဲ့ လမ်းညွှန် ကူညီပေးပါမည်။",
    },
  ];

  return (
    <div className="w-full bg-[#f8fafc] animate-page-fade">
      {/* Top Ambient Glow Field */}
      <div className="relative w-full overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[340px] bg-gradient-to-b from-teal-200/20 via-teal-700/5 to-transparent blur-3xl pointer-events-none -z-10" />

        {/* Header & Billing Control Section */}
        <section className="max-w-7xl mx-auto px-6 lg:px-12 pt-10 pb-16 text-center animate-section-rise">
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 text-teal-800 font-code-mono text-xs tracking-wider shadow-none mb-6 border border-slate-200/60 font-semibold">
            <span className="w-2 h-2 rounded-full bg-teal-700"></span>
            TRANSPARENT PRICING · NO HIDDEN FEES
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl font-bold text-slate-900 tracking-tight max-w-3xl mx-auto leading-tight mb-4">
            သင့်လုပ်ငန်း အရွယ်အစားနှင့် ကိုက်ညီသော စျေးနှုန်းအစီအစဉ်များ
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed mb-10">
            လစဉ် အသုံးပြုခွင့် သက်သာသော နှုန်းထားများဖြင့် စတင်နိုင်ပြီး လုပ်ငန်းတိုးတက်လာသည်နှင့်အမျှ လိုအပ်သလို အဆင့်မြှင့်တင်နိုင်ပါသည်။
          </p>

          {/* Billing Period Switcher */}
          <div id="billing-toggle-container" className="inline-flex items-center p-1.5 bg-slate-200/70 rounded-full shadow-inner select-none">
            <button
              id="toggle-monthly"
              onClick={() => setIsAnnual(false)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer ${
                !isAnnual
                  ? "bg-white text-slate-900 shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Monthly Billing (လစဉ်)
            </button>
            <button
              id="toggle-annual"
              onClick={() => setIsAnnual(true)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                isAnnual
                  ? "bg-white text-slate-900 shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <span>Annual Billing (နှစ်စဉ်)</span>
              <span className="px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 text-xs font-bold">
                15% သက်သာ
              </span>
            </button>
          </div>
        </section>

        {/* Pricing Cards Grid */}
        <section className="max-w-7xl mx-auto px-6 lg:px-12 pb-24 animate-section-rise">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {/* CARD 1: Starter Plan */}
            <div className="flex flex-col bg-white rounded-3xl p-8 lg:p-10 card-soft-shadow hover:translate-y-[-2px] transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold tracking-wider text-slate-500 uppercase">
                  Entry Tier
                </span>
                <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-medium">
                  စတင်သူများ
                </span>
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-2">Starter</h2>
              <p className="text-sm text-slate-500 min-h-[40px] mb-6">
                အွန်လိုင်းဆိုင်ငယ်များနှင့် တစ်ဦးတည်းလုပ်ကိုင်သော လုပ်ငန်းရှင်များအတွက်
              </p>
              {/* Price Display */}
              <div className="pt-2 pb-6 flex items-baseline gap-2">
                <span className="text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight">
                  {isAnnual ? "170,000" : "200,000"}
                </span>
                <span className="text-sm text-slate-500">MMK / mo</span>
              </div>
              {/* CTA */}
              <Link
                href="/book-a-demo"
                className="w-full py-3.5 px-6 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-900 font-semibold text-sm text-center transition-all duration-200 mb-8 border border-slate-200/50"
              >
                Starter ဖြင့် စတင်မည်
              </Link>
              {/* Feature Divider */}
              <div className="h-px bg-slate-100 w-full mb-8"></div>
              {/* Feature List */}
              <div className="space-y-4 flex-1">
                <div className="text-xs uppercase tracking-wider text-slate-500 font-semibold">
                  အဓိက ပါဝင်သော ဝန်ဆောင်မှုများ
                </div>
                <ul className="space-y-3.5 text-sm text-slate-700">
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-teal-700 text-[20px] flex-shrink-0">
                      check_circle
                    </span>
                    <span><strong>User Admin:</strong> ၁ ယောက်</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-400">
                    <span className="material-symbols-outlined text-slate-400 text-[20px] flex-shrink-0">
                      remove_circle_outline
                    </span>
                    <span>Multi-users: မပါဝင်ပါ</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-teal-700 text-[20px] flex-shrink-0">
                      check_circle
                    </span>
                    <span><strong>Inventory DB:</strong> ၁ ခု (ပစ္စည်း ၅၀၀ အထိ)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-teal-700 text-[20px] flex-shrink-0">
                      check_circle
                    </span>
                    <span><strong>Shop:</strong> ၁ ဆိုင်</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-teal-700 text-[20px] flex-shrink-0">
                      check_circle
                    </span>
                    <span>Telegram &amp; Facebook Messenger အကန့်အသတ်မရှိ</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-teal-700 text-[20px] flex-shrink-0">
                      check_circle
                    </span>
                    <span>24/7 AI Customer Enquiry Auto-reply</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* CARD 2: Growth Plan (Highlighted / Hero) */}
            <div className="relative flex flex-col bg-white rounded-3xl p-8 lg:p-10 card-soft-shadow scale-100 lg:-translate-y-3 transition-all duration-300 ring-2 ring-teal-700/30 shadow-lg">
              {/* Top Badge Ribbon */}
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-teal-700 text-white text-xs font-semibold tracking-wider uppercase flex items-center gap-1.5 shadow-sm">
                <span className="material-symbols-outlined text-[16px]">bolt</span>
                MOST POPULAR
              </div>
              <div className="flex items-center justify-between mb-4 mt-2">
                <span className="text-xs font-semibold tracking-wider text-teal-700 uppercase">
                  Scaling Teams
                </span>
                <span className="px-3 py-1 rounded-full bg-teal-50 text-teal-800 text-xs font-medium">
                  လူကြိုက်အများဆုံး
                </span>
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-2">Growth</h2>
              <p className="text-sm text-slate-500 min-h-[40px] mb-6">
                အရောင်းဝန်ထမ်းအဖွဲ့ရှိပြီး စနစ်တကျ ချဲ့ထွင်လိုသော Online Shop ကြီးများအတွက်
              </p>
              {/* Price Display */}
              <div className="pt-2 pb-6 flex items-baseline gap-2">
                <span className="text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight">
                  {isAnnual ? "340,000" : "400,000"}
                </span>
                <span className="text-sm text-slate-500">MMK / mo</span>
              </div>
              {/* CTA */}
              <Link
                href="/book-a-demo"
                className="w-full py-3.5 px-6 rounded-full bg-teal-700 hover:bg-teal-800 text-white font-semibold text-sm text-center transition-all duration-200 mb-8 shadow-sm hover:shadow"
              >
                Growth Plan ရွေးချယ်မည်
              </Link>
              {/* Feature Divider */}
              <div className="h-px bg-slate-100 w-full mb-8"></div>
              {/* Feature List */}
              <div className="space-y-4 flex-1">
                <div className="text-xs uppercase tracking-wider text-teal-700 font-semibold">
                  Starter ပါ အချက်များအပြင် ထပ်မံရရှိမည့် အခွင့်အရေးများ
                </div>
                <ul className="space-y-3.5 text-sm text-slate-700">
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-teal-700 text-[20px] flex-shrink-0">
                      check_circle
                    </span>
                    <span><strong>User Admin:</strong> အကန့်အသတ်မရှိ (Unlimited Admins)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-teal-700 text-[20px] flex-shrink-0">
                      check_circle
                    </span>
                    <span><strong>Multi-users:</strong> အကန့်အသတ်မရှိ (Staff များ အတူတကွ သုံးနိုင်သည်)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-teal-700 text-[20px] flex-shrink-0">
                      check_circle
                    </span>
                    <span><strong>Inventory DB:</strong> ၁ ခု (ပစ္စည်း အကန့်အသတ်မရှိ)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-teal-700 text-[20px] flex-shrink-0">
                      check_circle
                    </span>
                    <span><strong>Shops:</strong> အကန့်အသတ်မရှိ (Unlimited Shops)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-teal-700 text-[20px] flex-shrink-0">
                      check_circle
                    </span>
                    <span>Social Channels အားလုံး အကန့်အသတ်မရှိ ချိတ်ဆက်နိုင်ခြင်း</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-teal-700 text-[20px] flex-shrink-0">
                      check_circle
                    </span>
                    <span><strong>Ticket Raising System:</strong> အရေးကြီးကိစ္စ အချက်ပေးစနစ်</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-teal-700 text-[20px] flex-shrink-0">
                      check_circle
                    </span>
                    <span>Order Handling &amp; Automated Intake စနစ်</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-teal-700 text-[20px] flex-shrink-0">
                      check_circle
                    </span>
                    <span>SOP Customization &amp; Dedicated Training ပါဝင်မှု</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* CARD 3: Premium Plan */}
            <div className="flex flex-col bg-white rounded-3xl p-8 lg:p-10 card-soft-shadow hover:translate-y-[-2px] transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold tracking-wider text-slate-500 uppercase">
                  Enterprise Grade
                </span>
                <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-semibold">
                  BEST VALUE
                </span>
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-2">Premium</h2>
              <p className="text-sm text-slate-500 min-h-[40px] mb-6">
                ဆိုင်ခွဲများစွာ၊ Brand ပေါင်းစုံနှင့် လုပ်ငန်းခွဲများစွာ ပိုင်ဆိုင်သော Enterprise များအတွက်
              </p>
              {/* Price Display */}
              <div className="pt-2 pb-6 flex items-baseline gap-2">
                <span className="text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight">
                  {isAnnual ? "595,000" : "700,000"}
                </span>
                <span className="text-sm text-slate-500">MMK / mo</span>
              </div>
              {/* CTA */}
              <Link
                href="/book-a-demo"
                className="w-full py-3.5 px-6 rounded-full bg-slate-950 hover:bg-slate-800 text-white font-semibold text-sm text-center transition-all duration-200 mb-8"
              >
                Premium Plan စတင်မည်
              </Link>
              {/* Feature Divider */}
              <div className="h-px bg-slate-100 w-full mb-8"></div>
              {/* Feature List */}
              <div className="space-y-4 flex-1">
                <div className="text-xs uppercase tracking-wider text-slate-500 font-semibold">
                  အဆင့်မြင့် Enterprise ဝန်ဆောင်မှုအားလုံး
                </div>
                <ul className="space-y-3.5 text-sm text-slate-700">
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-teal-700 text-[20px] flex-shrink-0">
                      check_circle
                    </span>
                    <span><strong>User Admin:</strong> အကန့်အသတ်မရှိ</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-teal-700 text-[20px] flex-shrink-0">
                      check_circle
                    </span>
                    <span><strong>Multi-users:</strong> အကန့်အသတ်မရှိ အသုံးပြုနိုင်ခြင်း</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-teal-700 text-[20px] flex-shrink-0">
                      check_circle
                    </span>
                    <span><strong>Inventory DB:</strong> အကန့်အသတ်မရှိ (Multiple Warehouses)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-teal-700 text-[20px] flex-shrink-0">
                      check_circle
                    </span>
                    <span><strong>Shops &amp; Social Channels:</strong> အကန့်အသတ်မရှိ</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-teal-700 text-[20px] flex-shrink-0">
                      check_circle
                    </span>
                    <span><strong>VIP 24/7 Dedicated Account Manager:</strong> တိုက်ရိုက်ကူညီဆောင်ရွက်မှု</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-teal-700 text-[20px] flex-shrink-0">
                      check_circle
                    </span>
                    <span><strong>Custom AI Model Training:</strong> လုပ်ငန်းသီးသန့် ဉာဏ်ရည်တု လေ့ကျင့်ပေးခြင်း</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-teal-700 text-[20px] flex-shrink-0">
                      check_circle
                    </span>
                    <span>Executive Analytics &amp; Monthly Performance Audit Report</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Native App Add-On Feature Banner */}
        <section className="max-w-7xl mx-auto px-6 lg:px-12 pb-20">
          <div className="bg-white rounded-3xl p-8 lg:p-12 card-soft-shadow relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-start gap-6 max-w-2xl">
              <div className="w-16 h-16 rounded-2xl bg-teal-50 flex items-center justify-center flex-shrink-0 text-teal-700 border border-teal-100">
                <span className="material-symbols-outlined text-[32px]">phone_iphone</span>
              </div>
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-teal-800 text-xs font-semibold mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-700"></span>
                  OPTIONAL ADD-ON MODULE
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
                  E-commerce Mobile App (iOS &amp; Android Native App)
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  သင့်ဆိုင်ကိုယ်ပိုင် App ဖြင့် App Store နှင့် Play Store တို့တွင် တိုက်ရိုက်ရောင်းချနိုင်မည့် အခွင့်အလမ်း။ Customer များအတွက် လွယ်ကူသော Checkout နှင့် Auto-Push Notifications များ ပါဝင်ပါသည်။
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-6 flex-shrink-0 text-center sm:text-right">
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-slate-900">
                  +200,000 <span className="text-sm font-normal text-slate-500">MMK / mo</span>
                </div>
                <div className="text-xs text-slate-500 mt-0.5">Setup &amp; Maintenance အပါအဝင်</div>
              </div>
              <Link
                href="/contact"
                className="px-6 py-3.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-900 text-sm font-semibold transition-colors border border-slate-200/50"
              >
                App အကြောင်း မေးမြန်းရန်
              </Link>
            </div>
          </div>
        </section>

        {/* Ad Studio Points System Module */}
        <section className="max-w-7xl mx-auto px-6 lg:px-12 pb-24">
          <div className="bg-slate-100/70 rounded-3xl p-8 lg:p-12 card-soft-shadow">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200 text-slate-800 text-xs font-semibold">
                  <span className="material-symbols-outlined text-[16px] text-amber-600">stars</span>
                  AD STUDIO POINTS SYSTEM
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
                  Ad Studio အတွက် လိုအပ်သလို အသုံးပြုနိုင်သော Points စနစ်
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  ဆွဲဆောင်မှုရှိသော မြန်မာဘာသာ Copywriting ရေးသားခြင်း၊ စတူဒီယိုအဆင့် Lifestyle ကုန်ပစ္စည်းဓာတ်ပုံများ ဖန်တီးခြင်းနှင့် Facebook Ad Creatives များကို Points စနစ်ဖြင့် စိတ်ကြိုက်ထုတ်ယူနိုင်ပါသည်။
                </p>
                <div className="pt-4 flex flex-wrap gap-4 items-center">
                  <span className="text-xs text-slate-500 font-semibold">
                    ချက်ချင်း ငွေဖြည့်သွင်းနိုင်သော စနစ်များ:
                  </span>
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1.5 rounded-xl bg-white text-xs font-semibold border border-slate-200/80 text-slate-800 shadow-xs">
                      KBZPay
                    </span>
                    <span className="px-3 py-1.5 rounded-xl bg-white text-xs font-semibold border border-slate-200/80 text-slate-800 shadow-xs">
                      CB Pay
                    </span>
                    <span className="px-3 py-1.5 rounded-xl bg-white text-xs font-semibold border border-slate-200/80 text-slate-800 shadow-xs">
                      WavePay
                    </span>
                  </div>
                </div>
              </div>

              {/* Feature Cards Mosaic */}
              <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white p-6 rounded-2xl card-soft-shadow">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center text-teal-700 mb-3">
                    <span className="material-symbols-outlined">auto_fix_high</span>
                  </div>
                  <h4 className="text-base font-bold text-slate-900 mb-1">AI Copywriting</h4>
                  <p className="text-xs text-slate-600">
                    ရောင်းအားတက်စေမည့် High-converting Facebook &amp; Telegram caption များကို စက္ကန့်ပိုင်းအတွင်း ရယူနိုင်ခြင်း။
                  </p>
                </div>
                <div className="bg-white p-6 rounded-2xl card-soft-shadow">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center text-teal-700 mb-3">
                    <span className="material-symbols-outlined">photo_camera</span>
                  </div>
                  <h4 className="text-base font-bold text-slate-900 mb-1">Studio Image AI</h4>
                  <p className="text-xs text-slate-600">
                    မော်ဒယ်မလို၊ စတူဒီယိုမလိုဘဲ ပစ္စည်းဓာတ်ပုံမှ Professional Studio Look သို့ အလိုအလျောက် ပြောင်းလဲခြင်း။
                  </p>
                </div>
                <div className="bg-white p-6 rounded-2xl card-soft-shadow sm:col-span-2 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <span className="material-symbols-outlined text-teal-700 text-[28px]">
                      verified
                    </span>
                    <div>
                      <div className="text-sm font-semibold text-slate-900">
                        Instant Receipt Verification
                      </div>
                      <div className="text-xs text-slate-500">
                        ဘဏ်ဖြတ်ပိုင်း (Slip) အလိုအလျောက် စစ်ဆေးပြီး Points ချက်ချင်းဝင်ရောက်သည်
                      </div>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-teal-50 text-teal-800 font-code-mono text-xs font-semibold border border-teal-200">
                    99.9% Uptime
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Plan Detailed Matrix Comparison Table */}
        <section className="max-w-7xl mx-auto px-6 lg:px-12 pb-24">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
              အသေးစိတ် နှိုင်းယှဉ်ချက် ဇယား
            </h3>
            <p className="text-sm sm:text-base text-slate-600">
              သင့်လုပ်ငန်းနှင့် အသင့်တော်ဆုံး Package ကို ရွေးချယ်နိုင်ရန် အင်္ဂါရပ်အားလုံးကို ရှင်းလင်းစွာ စစ်ဆေးပါ
            </p>
          </div>
          <div className="bg-white rounded-3xl p-6 lg:p-8 card-soft-shadow overflow-x-auto">
            <table className="w-full text-left min-w-[640px]">
              <thead>
                <tr className="border-b border-slate-200 pb-4">
                  <th className="py-4 px-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    Features &amp; Limits
                  </th>
                  <th className="py-4 px-4 text-base font-bold text-slate-900 text-center">
                    Starter
                  </th>
                  <th className="py-4 px-4 text-base font-bold text-teal-700 text-center bg-teal-50/50 rounded-t-xl">
                    Growth
                  </th>
                  <th className="py-4 px-4 text-base font-bold text-slate-900 text-center">
                    Premium
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="py-4 px-4 text-sm font-semibold text-slate-900">
                    User Admin Account
                  </td>
                  <td className="py-4 px-4 text-sm text-slate-600 text-center">၁ ယောက်</td>
                  <td className="py-4 px-4 text-sm text-teal-700 font-semibold text-center bg-teal-50/50">
                    အကန့်အသတ်မရှိ
                  </td>
                  <td className="py-4 px-4 text-sm text-slate-900 text-center">အကန့်အသတ်မရှိ</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 text-sm font-semibold text-slate-900">
                    Multi-user Staff Access
                  </td>
                  <td className="py-4 px-4 text-sm text-slate-400 text-center">-</td>
                  <td className="py-4 px-4 text-sm text-teal-700 font-semibold text-center bg-teal-50/50">
                    အကန့်အသတ်မရှိ
                  </td>
                  <td className="py-4 px-4 text-sm text-slate-900 text-center">အကန့်အသတ်မရှိ</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 text-sm font-semibold text-slate-900">
                    Inventory DB &amp; Products
                  </td>
                  <td className="py-4 px-4 text-sm text-slate-600 text-center">၁ ခု (ပစ္စည်း ၅၀၀ အထိ)</td>
                  <td className="py-4 px-4 text-sm text-teal-700 font-semibold text-center bg-teal-50/50">
                    ၁ ခု (ပစ္စည်း အကန့်အသတ်မရှိ)
                  </td>
                  <td className="py-4 px-4 text-sm text-slate-900 text-center">
                    Multi-Warehouse (အကန့်အသတ်မရှိ)
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-4 text-sm font-semibold text-slate-900">
                    Shops Capacity
                  </td>
                  <td className="py-4 px-4 text-sm text-slate-600 text-center">၁ ဆိုင်</td>
                  <td className="py-4 px-4 text-sm text-teal-700 font-semibold text-center bg-teal-50/50">
                    အကန့်အသတ်မရှိ
                  </td>
                  <td className="py-4 px-4 text-sm text-slate-900 text-center">အကန့်အသတ်မရှိ</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 text-sm font-semibold text-slate-900">
                    Supported Channels
                  </td>
                  <td className="py-4 px-4 text-sm text-slate-600 text-center">FB &amp; Telegram</td>
                  <td className="py-4 px-4 text-sm text-teal-700 font-semibold text-center bg-teal-50/50">
                    Channels အားလုံး
                  </td>
                  <td className="py-4 px-4 text-sm text-slate-900 text-center">
                    Channels အားလုံး + Custom API
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-4 text-sm font-semibold text-slate-900">
                    Ticket Raising &amp; Alerts
                  </td>
                  <td className="py-4 px-4 text-sm text-slate-400 text-center">-</td>
                  <td className="py-4 px-4 text-sm text-center bg-teal-50/50">
                    <span className="material-symbols-outlined text-teal-700 text-[20px]">
                      check
                    </span>
                  </td>
                  <td className="py-4 px-4 text-sm text-center">
                    <span className="material-symbols-outlined text-teal-700 text-[20px]">
                      check
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-4 text-sm font-semibold text-slate-900">
                    Dedicated Account Manager
                  </td>
                  <td className="py-4 px-4 text-sm text-slate-400 text-center">-</td>
                  <td className="py-4 px-4 text-sm text-slate-400 text-center bg-teal-50/50">-</td>
                  <td className="py-4 px-4 text-sm text-center">
                    <span className="material-symbols-outlined text-teal-700 text-[20px]">
                      check
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-4 text-sm font-semibold text-slate-900">
                    Action Button
                  </td>
                  <td className="py-4 px-4 text-center">
                    <Link
                      href="/book-a-demo"
                      className="px-4 py-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold inline-block transition-colors"
                    >
                      စတင်မည်
                    </Link>
                  </td>
                  <td className="py-4 px-4 text-center bg-teal-50/50 rounded-b-xl">
                    <Link
                      href="/book-a-demo"
                      className="px-5 py-2 rounded-full bg-teal-700 hover:bg-teal-800 text-white text-xs font-semibold inline-block transition-colors shadow-xs"
                    >
                      ရွေးချယ်မည်
                    </Link>
                  </td>
                  <td className="py-4 px-4 text-center">
                    <Link
                      href="/book-a-demo"
                      className="px-4 py-2 rounded-full bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold inline-block transition-colors"
                    >
                      စတင်မည်
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* FAQ Accordion Section */}
        <section className="max-w-4xl mx-auto px-6 lg:px-12 pb-24">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
              မကြာခဏ မေးလေ့ရှိသော မေးခွန်းများ
            </h3>
            <p className="text-sm sm:text-base text-slate-600">
              စျေးနှုန်းနှင့် အစီအစဉ်များနှင့်ပတ်သက်၍ ရှင်းလင်းစွာ သိရှိနိုင်ရန်
            </p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 card-soft-shadow cursor-pointer transition-all hover:border-teal-700/30"
                  onClick={() => toggleFaq(idx)}
                >
                  <div className="flex items-center justify-between gap-4">
                    <h4 className="text-base font-bold text-slate-900">{faq.q}</h4>
                    <span
                      className={`material-symbols-outlined text-slate-500 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-teal-700" : ""
                      }`}
                    >
                      expand_more
                    </span>
                  </div>
                  {isOpen && (
                    <div className="mt-3 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Bottom Tailored Demo Consultation Banner */}
        <section className="max-w-7xl mx-auto px-6 lg:px-12 pb-24">
          <div className="bg-slate-900 rounded-3xl p-10 lg:p-14 text-white relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 card-soft-shadow">
            <div className="max-w-2xl space-y-3 text-center md:text-left">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-teal-200 font-code-mono text-xs font-semibold">
                FREE 1-ON-1 ARCHITECTURE SESSION
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                သင့်လုပ်ငန်းအတွက် သီးသန့် အကြံပေးဆွေးနွေးမှု ရယူပါ
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                မည်သည့် Plan ကို ရွေးချယ်ရမည်ကို မသေချာသေးပါက ကျွန်ုပ်တို့၏ AI Solution Specialist များနှင့် အခမဲ့ ၃၀ မိနစ် ဆွေးနွေးနိုင်ပါသည်။
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4 flex-shrink-0">
              <Link
                href="/book-a-demo"
                className="px-8 py-4 rounded-full bg-teal-500 hover:bg-teal-400 text-slate-950 text-sm font-bold transition-all shadow-sm"
              >
                အခမဲ့ Demo ရယူမည်
              </Link>
              <Link
                href="/contact"
                className="px-6 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm font-semibold transition-colors"
              >
                အရောင်းအဖွဲ့သို့ ဆက်သွယ်ရန်
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
