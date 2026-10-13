"use client";

import { useState } from "react";

export default function BookADemoPage() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [requestId, setRequestId] = useState("");
  const [formData, setFormData] = useState({
    businessName: "",
    contactName: "",
    phoneNumber: "",
    email: "",
    businessCategory: "",
    channels: {
      messenger: true,
      telegram: false,
      viber: false,
      website: false,
    },
    sampleProducts: "",
    notes: "",
  });

  const handleChannelChange = (channel) => {
    setFormData((prev) => ({
      ...prev,
      channels: {
        ...prev.channels,
        [channel]: !prev.channels[channel],
      },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      const randomCode = Math.floor(1000 + Math.random() * 9000);
      setRequestId(`#BNB-REQ-${randomCode}`);
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <div className="w-full bg-[#f8fafc] animate-page-fade">
      {/* MAIN DEMO REQUEST HERO & WORKSPACE */}
      <section className="relative w-full overflow-hidden pt-8 pb-16 lg:pb-24 animate-section-rise">
        {/* Atmospheric Ambient Backdrop Glow */}
        <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[1000px] h-[550px] bg-gradient-to-b from-teal-700/10 via-teal-200/10 to-transparent blur-3xl opacity-70 -z-10" />
        <div className="pointer-events-none absolute top-1/3 -left-48 w-96 h-96 bg-teal-700/5 blur-3xl rounded-full -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* TOP HEADER / METADATA PILL */}
          <div className="max-w-3xl mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 mb-5 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-teal-700"></span>
              <span className="text-xs tracking-wide text-slate-600 font-medium">
                BnB Enterprise Intelligence • Powered by UTS Myanmar
              </span>
            </div>
            <div className="flex items-center gap-2 text-teal-700 text-xs sm:text-sm font-semibold tracking-wider uppercase mb-3">
              <span className="material-symbols-outlined text-[18px]">
                calendar_month
              </span>
              <span>BOOK A 1-ON-1 DEMO &amp; CONSULTING SESSION</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold text-slate-900 tracking-tight leading-tight mb-4">
              သင့်လုပ်ငန်းအတွက် အသင့်တော်ဆုံး AI ဝန်ထမ်းကို ဆွေးနွေးတိုင်ပင်ပါ
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              ကျွမ်းကျင်သော Business Consultant များက ၂၄ နာရီအတွင်း ဆက်သွယ်ပြီး သင့်လုပ်ငန်းနှင့် ကိုက်ညီမည့် စနစ်ကို အခမဲ့ Demo ပြသပေးပါမည်။
            </p>
          </div>

          {/* TWO-COLUMN ASYMMETRIC GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* LEFT COLUMN: VALUE PROPOSITIONS & ENTERPRISE TRUST (5 COLS) */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              {/* LIMITED CONSULTING ANNOUNCEMENT BANNER */}
              <div className="rounded-2xl p-4 sm:p-5 bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent border border-amber-500/20 flex items-start gap-3.5 shadow-xs">
                <div className="w-9 h-9 rounded-xl bg-amber-500/15 flex items-center justify-center text-amber-700 shrink-0">
                  <span className="material-symbols-outlined text-[20px]">timer</span>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-amber-800 font-semibold mb-0.5">
                    Limited Free Consulting
                  </p>
                  <p className="text-sm font-semibold text-slate-900 leading-snug">
                    တစ်ပတ်လျှင် လုပ်ငန်း ၅ ခုသာ အခမဲ့ စီးပွားရေးအကြံဉာဏ် ပေးပါသည်
                  </p>
                  <p className="text-xs text-slate-600 mt-1">
                    အပတ်စဉ် ရက်ချိန်းများ ကန့်သတ်ထားသဖြင့် ယခုပင် စာရင်းပေးသွင်းပါရန် အကြံပြုအပ်ပါသည်။
                  </p>
                </div>
              </div>

              {/* HIGHLIGHT CARDS CONTAINER */}
              <div className="flex flex-col gap-4">
                {/* CARD 1: 24-HOUR CONSULTANT CALL */}
                <div className="rounded-2xl bg-white p-6 border border-slate-100 shadow-[0_4px_20px_rgba(15,23,42,0.03)] hover:shadow-[0_8px_30px_rgba(15,23,42,0.06)] transition-all">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-11 h-11 rounded-xl bg-teal-50 text-teal-700 border border-teal-100 flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-[24px]">
                        support_agent
                      </span>
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-teal-700 tracking-wide uppercase">
                        STAGE 01
                      </span>
                      <h3 className="text-base font-bold text-slate-900">
                        24-Hour Consultant Call
                      </h3>
                    </div>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    ၂၄ နာရီအတွင်း သင့်လုပ်ငန်း၏ လုပ်ငန်းခွင်အခြေအနေ၊ daily chat inquiry ပမာဏနှင့် bottleneck များကို consultant များက တိုက်ရိုက် မေးမြန်းလေ့လာပေးပါမည်။
                  </p>
                </div>

                {/* CARD 2: FREE SAMPLE DATA TESTING */}
                <div className="rounded-2xl bg-white p-6 border border-slate-100 shadow-[0_4px_20px_rgba(15,23,42,0.03)] hover:shadow-[0_8px_30px_rgba(15,23,42,0.06)] transition-all">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-11 h-11 rounded-xl bg-teal-50 text-teal-700 border border-teal-100 flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-[24px]">dataset</span>
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-teal-700 tracking-wide uppercase">
                        STAGE 02
                      </span>
                      <h3 className="text-base font-bold text-slate-900">
                        Free Sample Data Testing
                      </h3>
                    </div>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    သင့်ဆိုင်ရှိ ပစ္စည်း data (SKU, အရွယ်အစား၊ စျေးနှုန်း) အချို့ကို အခမဲ့ စမ်းသပ်ထည့်သွင်းပြီး Burmese + English ဘာသာဖြင့် ဖြေကြားသော Prototype Bot ကို မျက်မြင် စမ်းသပ်နိုင်ပါသည်။
                  </p>
                </div>

                {/* CARD 3: NO UPFRONT PAYMENT REQUIRED */}
                <div className="rounded-2xl bg-white p-6 border border-slate-100 shadow-[0_4px_20px_rgba(15,23,42,0.03)] hover:shadow-[0_8px_30px_rgba(15,23,42,0.06)] transition-all">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-11 h-11 rounded-xl bg-teal-50 text-teal-700 border border-teal-100 flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-[24px]">
                        verified_user
                      </span>
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-teal-700 tracking-wide uppercase">
                        STAGE 03
                      </span>
                      <h3 className="text-base font-bold text-slate-900">
                        No Upfront Payment Required
                      </h3>
                    </div>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    ငွေကြေးကြိုတင်ပေးသွင်းရန် လုံးဝမလိုပါ။ Demo တွင် သင့်လုပ်ငန်းနှင့် အမှန်တကယ် ကိုက်ညီပြီး ရင်းနှီးမြှုပ်နှံမှု အကျိုးအမြတ် (ROI) သေချာမှသာ ရွေးချယ်နိုင်ပါသည်။
                  </p>
                </div>
              </div>

              {/* REQUEST TRACKING DRAWER / STATUS INFO CARD */}
              <div className="rounded-2xl bg-slate-100 p-6 border border-slate-200/60 shadow-xs relative overflow-hidden">
                <div className="flex items-start gap-3.5">
                  <span className="material-symbols-outlined text-teal-700 text-[24px] mt-0.5">
                    track_changes
                  </span>
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-slate-900">
                      Request ID &amp; Follow-up Assurance
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Demo တောင်းဆိုပြီးနောက် ခြေရာခံနိုင်မည့်{" "}
                      <span className="font-code-mono font-medium text-teal-800 bg-teal-50 border border-teal-200 px-1.5 py-0.5 rounded">
                        #BNB-REQ-XXXX
                      </span>{" "}
                      ရရှိမည်ဖြစ်ပြီး ၂၄ နာရီအတွင်း Consultant မှ Viber/Telegram/ဖုန်းဖြင့် တိုက်ရိုက် ဆက်သွယ်ပါမည်။
                    </p>
                  </div>
                </div>
              </div>

              {/* ENTERPRISE PEDIGREE & BANKING DATA SECURITY BADGE */}
              <div className="rounded-xl p-4 bg-white border border-slate-200/60 flex items-center gap-3">
                <span className="material-symbols-outlined text-teal-700 text-[22px]">
                  lock
                </span>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-slate-900">
                    256-bit Secure Business Data Protection
                  </span>
                  <span className="text-xs text-slate-500">
                    UTS Myanmar Banking Standard infrastructure (CB, KBZ, A Bank trusted)
                  </span>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: COMPREHENSIVE DEMO REQUEST FORM (7 COLS) */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-[0_12px_40px_rgba(15,23,42,0.04)] relative">
                {/* FORM HEADER */}
                <div className="border-b border-slate-100 pb-6 mb-8">
                  <div className="flex items-center justify-between mb-2">
                    <span className="inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-md bg-teal-50 border border-teal-200 text-teal-800 font-semibold tracking-wide">
                      <span className="material-symbols-outlined text-[14px]">
                        event_available
                      </span>
                      SCHEDULE SESSION
                    </span>
                    <span className="text-xs text-slate-500 font-medium">Step 1 of 1</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                    Book a Free Demo &amp; Consultation
                  </h2>
                  <p className="text-sm text-slate-500 mt-1">
                    ရက်ချိန်းရယူရန် အချက်အလက်များ ဖြည့်စွက်ပါ (~1 minute)
                  </p>
                </div>

                {/* INTERACTIVE FORM */}
                <form id="demo-request-form" className="space-y-6" onSubmit={handleSubmit}>
                  {/* GRID: BUSINESS NAME & CONTACT NAME */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* 1. BUSINESS NAME */}
                    <div className="space-y-2">
                      <label
                        className="block text-xs font-semibold text-slate-900"
                        htmlFor="businessName"
                      >
                        လုပ်ငန်းအမည် <span className="text-red-500">*</span>
                      </label>
                      <input
                        className="w-full h-11 px-4 text-slate-900 placeholder:text-slate-400 bg-white border border-slate-200 rounded-xl focus:border-teal-700 focus:ring-2 focus:ring-teal-700/10 transition-all text-sm"
                        id="businessName"
                        name="businessName"
                        placeholder="e.g. Boss Fashion House"
                        required
                        type="text"
                        value={formData.businessName}
                        onChange={(e) =>
                          setFormData({ ...formData, businessName: e.target.value })
                        }
                      />
                    </div>

                    {/* 2. CONTACT NAME */}
                    <div className="space-y-2">
                      <label
                        className="block text-xs font-semibold text-slate-900"
                        htmlFor="contactName"
                      >
                        ဆက်သွယ်ရန် အမည် <span className="text-red-500">*</span>
                      </label>
                      <input
                        className="w-full h-11 px-4 text-slate-900 placeholder:text-slate-400 bg-white border border-slate-200 rounded-xl focus:border-teal-700 focus:ring-2 focus:ring-teal-700/10 transition-all text-sm"
                        id="contactName"
                        name="contactName"
                        placeholder="e.g. U Mg Mg"
                        required
                        type="text"
                        value={formData.contactName}
                        onChange={(e) =>
                          setFormData({ ...formData, contactName: e.target.value })
                        }
                      />
                    </div>
                  </div>

                  {/* GRID: PHONE NUMBER & EMAIL */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* 3. PHONE NUMBER */}
                    <div className="space-y-2">
                      <label
                        className="block text-xs font-semibold text-slate-900"
                        htmlFor="phoneNumber"
                      >
                        ဆက်သွယ်ရန် ဖုန်းနံပါတ် <span className="text-red-500">*</span>
                      </label>
                      <div className="relative flex items-center">
                        <span className="absolute left-3.5 font-code-mono text-xs text-slate-500 font-semibold select-none">
                          +95
                        </span>
                        <input
                          className="w-full h-11 pl-12 pr-4 text-slate-900 placeholder:text-slate-400 bg-white border border-slate-200 rounded-xl focus:border-teal-700 focus:ring-2 focus:ring-teal-700/10 transition-all text-sm font-code-mono"
                          id="phoneNumber"
                          name="phoneNumber"
                          placeholder="9xxxxxxxxx"
                          required
                          type="tel"
                          value={formData.phoneNumber}
                          onChange={(e) =>
                            setFormData({ ...formData, phoneNumber: e.target.value })
                          }
                        />
                      </div>
                    </div>

                    {/* 4. EMAIL (OPTIONAL) */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <label
                          className="block text-xs font-semibold text-slate-900"
                          htmlFor="email"
                        >
                          အီးမေးလ်
                        </label>
                        <span className="text-[11px] text-slate-400">Optional</span>
                      </div>
                      <input
                        className="w-full h-11 px-4 text-slate-900 placeholder:text-slate-400 bg-white border border-slate-200 rounded-xl focus:border-teal-700 focus:ring-2 focus:ring-teal-700/10 transition-all text-sm"
                        id="email"
                        name="email"
                        placeholder="name@business.com"
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                      />
                    </div>
                  </div>

                  {/* 5. BUSINESS CATEGORY DROPDOWN */}
                  <div className="space-y-2">
                    <label
                      className="block text-xs font-semibold text-slate-900"
                      htmlFor="businessCategory"
                    >
                      လုပ်ငန်းအမျိုးအစား <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <select
                        className="w-full h-11 px-4 appearance-none text-slate-900 bg-white border border-slate-200 rounded-xl focus:border-teal-700 focus:ring-2 focus:ring-teal-700/10 transition-all text-sm pr-10 cursor-pointer"
                        id="businessCategory"
                        name="businessCategory"
                        required
                        value={formData.businessCategory}
                        onChange={(e) =>
                          setFormData({ ...formData, businessCategory: e.target.value })
                        }
                      >
                        <option value="" disabled>
                          ရွေးချယ်ပါ (Select your business vertical)
                        </option>
                        <option value="retail">Online Shop (Retail / Clothing / Fashion)</option>
                        <option value="beauty">Beauty Salon, Aesthetics &amp; Spa</option>
                        <option value="education">Education, Training &amp; Academy</option>
                        <option value="healthcare">Healthcare, Clinic &amp; Wellness</option>
                        <option value="fnb">Restaurant, Café &amp; F&amp;B</option>
                        <option value="automobile">Automobile, Garage &amp; Showroom</option>
                        <option value="services">Professional &amp; Other Services</option>
                      </select>
                      <span className="material-symbols-outlined absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 text-[20px]">
                        keyboard_arrow_down
                      </span>
                    </div>
                  </div>

                  {/* 6. MESSAGING CHANNELS MULTI-SELECT */}
                  <div className="space-y-3">
                    <label className="block text-xs font-semibold text-slate-900">
                      လက်ရှိ အသုံးပြုနေသော ချန်နယ်များ (Current Messaging Channels)
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      <label className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/80 cursor-pointer hover:border-teal-700/40 transition-all">
                        <input
                          type="checkbox"
                          checked={formData.channels.messenger}
                          onChange={() => handleChannelChange("messenger")}
                          className="w-4 h-4 rounded text-teal-700 focus:ring-teal-700 border-slate-300"
                        />
                        <span className="text-xs text-slate-800 font-medium">Messenger</span>
                      </label>
                      <label className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/80 cursor-pointer hover:border-teal-700/40 transition-all">
                        <input
                          type="checkbox"
                          checked={formData.channels.telegram}
                          onChange={() => handleChannelChange("telegram")}
                          className="w-4 h-4 rounded text-teal-700 focus:ring-teal-700 border-slate-300"
                        />
                        <span className="text-xs text-slate-800 font-medium">Telegram</span>
                      </label>
                      <label className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/80 cursor-pointer hover:border-teal-700/40 transition-all">
                        <input
                          type="checkbox"
                          checked={formData.channels.viber}
                          onChange={() => handleChannelChange("viber")}
                          className="w-4 h-4 rounded text-teal-700 focus:ring-teal-700 border-slate-300"
                        />
                        <span className="text-xs text-slate-800 font-medium">Viber</span>
                      </label>
                      <label className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/80 cursor-pointer hover:border-teal-700/40 transition-all">
                        <input
                          type="checkbox"
                          checked={formData.channels.website}
                          onChange={() => handleChannelChange("website")}
                          className="w-4 h-4 rounded text-teal-700 focus:ring-teal-700 border-slate-300"
                        />
                        <span className="text-xs text-slate-800 font-medium">Website / App</span>
                      </label>
                    </div>
                  </div>

                  {/* 7. PRODUCT OR SERVICE EXAMPLES */}
                  <div className="space-y-2">
                    <label
                      className="block text-xs font-semibold text-slate-900"
                      htmlFor="sampleProducts"
                    >
                      ပစ္စည်း / ဝန်ဆောင်မှု ဥပမာ (Product or Service Examples)
                    </label>
                    <input
                      className="w-full h-11 px-4 text-slate-900 placeholder:text-slate-400 bg-white border border-slate-200 rounded-xl focus:border-teal-700 focus:ring-2 focus:ring-teal-700/10 transition-all text-sm"
                      id="sampleProducts"
                      name="sampleProducts"
                      placeholder="ဥပမာ - Korean Dress, Skin Care, Spa packages"
                      type="text"
                      value={formData.sampleProducts}
                      onChange={(e) =>
                        setFormData({ ...formData, sampleProducts: e.target.value })
                      }
                    />
                  </div>

                  {/* 8. ADDITIONAL NOTES / INQUIRY DETAILS */}
                  <div className="space-y-2">
                    <label
                      className="block text-xs font-semibold text-slate-900"
                      htmlFor="notes"
                    >
                      ထပ်မံသိစေချင်သော အချက်အလက်များ / အခက်အခဲများ (Inquiry Details)
                    </label>
                    <textarea
                      className="w-full p-4 text-slate-900 placeholder:text-slate-400 bg-white border border-slate-200 rounded-xl focus:border-teal-700 focus:ring-2 focus:ring-teal-700/10 transition-all text-sm resize-y"
                      id="notes"
                      name="notes"
                      placeholder="ဥပမာ - မနက်ခင်း customer စုံစမ်းမေးမြန်းမှုများ အမြန်ဆုံး ဖြေကြားလိုခြင်း၊ စာရင်းချုပ် automate ပြုလုပ်လိုခြင်း..."
                      rows={3}
                      value={formData.notes}
                      onChange={(e) =>
                        setFormData({ ...formData, notes: e.target.value })
                      }
                    ></textarea>
                  </div>

                  {/* PRIVACY & COMPLIANCE DISCLAIMER */}
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/60 flex items-center gap-3">
                    <span className="material-symbols-outlined text-teal-700 text-[20px] shrink-0">
                      verified
                    </span>
                    <p className="text-xs text-slate-600">
                      🛡️ လျှို့ဝှက်ချက်လုံခြုံမှု အာမခံပါသည်။ သင့်အချက်အလက်များကို ပြင်ပသို့ လုံးဝ ပေါက်ကြားခွင့်မပြုပါ။
                    </p>
                  </div>

                  {/* PRIMARY SUBMIT BUTTON */}
                  {!submitted ? (
                    <div className="pt-2">
                      <button
                        id="submit-button"
                        disabled={submitting}
                        className="w-full py-4 px-6 rounded-2xl bg-slate-950 hover:bg-slate-900 active:scale-[0.99] text-white font-semibold text-sm sm:text-base flex items-center justify-center gap-3 shadow-[0_4px_16px_rgba(15,23,42,0.18)] hover:shadow-[0_8px_24px_rgba(15,23,42,0.25)] transition-all cursor-pointer group disabled:opacity-75"
                        type="submit"
                      >
                        {submitting ? (
                          <>
                            <span className="material-symbols-outlined animate-spin text-[20px]">
                              progress_activity
                            </span>
                            <span>ရက်ချိန်း ပေးပို့နေပါသည်...</span>
                          </>
                        ) : (
                          <>
                            <span>ရက်ချိန်း အခမဲ့ ရယူမည် (Book Free Demo)</span>
                            <span className="material-symbols-outlined text-[20px] group-hover:translate-x-1 transition-transform">
                              arrow_forward
                            </span>
                          </>
                        )}
                      </button>
                    </div>
                  ) : (
                    /* SUBMISSION SUCCESS BANNER */
                    <div id="submission-success-banner" className="p-5 rounded-2xl bg-teal-50 border border-teal-200 text-teal-900 animate-page-fade">
                      <div className="flex items-start gap-3">
                        <span className="material-symbols-outlined text-teal-700 text-[24px]">
                          task_alt
                        </span>
                        <div className="space-y-1">
                          <p className="text-base font-bold text-teal-950">
                            Demo Request အောင်မြင်စွာ လက်ခံရရှိပါပြီ။
                          </p>
                          <p className="text-sm text-teal-800">
                            သင့် Request Tracking ID:{" "}
                            <span className="font-code-mono font-bold bg-white px-2 py-0.5 rounded border border-teal-300">
                              {requestId}
                            </span>
                          </p>
                          <p className="text-xs text-teal-700 pt-1">
                            ကျွန်ုပ်တို့၏ Senior AI Consultant က ၂၄ နာရီအတွင်း သင့်ဖုန်းသို့ တိုက်ရိုက်ဆက်သွယ်ပြီး Demo ချိန်ညှိပေးပါမည်။
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
