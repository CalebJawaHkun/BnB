"use client";

import { useState } from "react";
import {
  Clock,
  Sparkles,
  ShieldCheck,
  Check,
  CheckCircle2,
  ArrowRight,
  MessageSquare,
  Send,
  Zap,
  Globe,
  ChevronDown
} from "lucide-react";

export default function BookADemoPage() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [requestId, setRequestId] = useState("");
  const [formData, setFormData] = useState({
    businessName: "",
    contactName: "",
    phoneNumber: "",
    email: "",
    businessCategory: "retail",
    channels: {
      messenger: true,
      telegram: true,
      viber: false,
      website: false
    },
    sampleProducts: "",
    notes: ""
  });

  const handleChannelToggle = (channel) => {
    setFormData((prev) => ({
      ...prev,
      channels: {
        ...prev.channels,
        [channel]: !prev.channels[channel]
      }
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
    <div className="w-full min-h-[calc(100vh-80px)] bg-[#f8f9ff] flex flex-col justify-center py-4 sm:py-6 lg:py-8 animate-page-fade">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* TWO-COLUMN GRID: ONLY LEFT & RIGHT COLUMNS (NO STANDALONE TOP SECTION) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* ============================================================== */}
          {/* LEFT COLUMN: HERO HEADLINE + HOW CONSULTATION WORKS            */}
          {/* ============================================================== */}
          <div className="lg:col-span-5 flex flex-col justify-between py-1 space-y-6">
            <div className="space-y-5">
              {/* HIGHLIGHTED HERO INTRO COMBINED HERE */}
              <div className="space-y-2.5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200/80 text-xs font-semibold text-teal-800 shadow-none">
                  <span className="w-2 h-2 rounded-full bg-teal-600 animate-pulse"></span>
                  <span>Try Before You Invest • 5 Free Slots This Week</span>
                </div>
                <h1 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold tracking-tight text-slate-900 leading-snug">
                  သင့်လုပ်ငန်းအတွက် အသင့်တော်ဆုံး AI ဝန်ထမ်းကို အခမဲ့ စမ်းသပ်ပါ
                </h1>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  ကျွမ်းကျင်သော Senior AI Consultant များက ၂၄ နာရီအတွင်း သင့်လုပ်ငန်းနှင့် ကိုက်ညီမည့် Bot Prototype ကို အခမဲ့ ဖန်တီးပြသပေးပါမည်။
                </p>
              </div>

              {/* HOW CONSULTATION WORKS TIMELINE */}
              <div className="border-t border-slate-200/80 pt-4 space-y-4">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-teal-700 block">
                    HOW CONSULTATION WORKS
                  </span>
                  <p className="text-xs sm:text-sm font-bold text-slate-900 mt-0.5">
                    ရက်ချိန်းရယူပြီး ၃ ဆင့်ဖြင့် စတင်နိုင်ပါသည်
                  </p>
                </div>

                {/* Stage 1 */}
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-xl bg-teal-50 text-teal-700 border border-teal-200/80 flex items-center justify-center shrink-0 font-bold font-mono text-xs">
                    01
                  </div>
                  <div className="space-y-0.5 min-w-0">
                    <h3 className="text-xs sm:text-sm font-bold text-slate-900">
                      24-Hour Consultant Call
                    </h3>
                    <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed">
                      သင့်လုပ်ငန်း၏ daily customer inquiries၊ အရောင်း bottleneck များနှင့် SOP များကို အသေးစိတ် မေးမြန်းလေ့လာပေးပါမည်။
                    </p>
                  </div>
                </div>

                {/* Stage 2 */}
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-xl bg-teal-50 text-teal-700 border border-teal-200/80 flex items-center justify-center shrink-0 font-bold font-mono text-xs">
                    02
                  </div>
                  <div className="space-y-0.5 min-w-0">
                    <h3 className="text-xs sm:text-sm font-bold text-slate-900">
                      Free Prototype Demo with Your Data
                    </h3>
                    <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed">
                      သင့်ဆိုင်ရှိ ပစ္စည်းစာရင်း (SKU၊ ဈေးနှုန်း) အချို့ကို အခမဲ့ ထည့်သွင်းပြီး Burmese + English ပြန်ဖြေသော Bot ကို မျက်မြင် စမ်းသပ်နိုင်ပါသည်။
                    </p>
                  </div>
                </div>

                {/* Stage 3 */}
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-xl bg-teal-50 text-teal-700 border border-teal-200/80 flex items-center justify-center shrink-0 font-bold font-mono text-xs">
                    03
                  </div>
                  <div className="space-y-0.5 min-w-0">
                    <h3 className="text-xs sm:text-sm font-bold text-slate-900">
                      Zero Upfront Commitment
                    </h3>
                    <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed">
                      ကြိုတင်ငွေစိုက်ထုတ်ရန် လုံးဝ မလိုပါ။ Prototype Demo တွင် သင့်လုပ်ငန်းနှင့် အမှန်တကယ် ကိုက်ညီပြီး ROI သေချာမှသာ ရွေးချယ်နိုင်ပါသည်။
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* FLOATING TRUST & SLA FOOTNOTE */}
            <div className="pt-4 border-t border-slate-200/80 space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                <Clock className="w-3.5 h-3.5 text-teal-700 shrink-0" />
                <span>
                  Consultation SLA: <strong className="text-teal-800">Within 24 business hours</strong>
                </span>
              </div>
              <div className="flex items-start gap-2 text-[11px] text-slate-500 leading-normal">
                <ShieldCheck className="w-3.5 h-3.5 text-teal-700 shrink-0 mt-0.5" />
                <span>
                  Powered by UTS Myanmar • Banking Standard Security infrastructure (Fintech partner to CB Bank, KBZ Bank, A Bank since 2017).
                </span>
              </div>
            </div>
          </div>

          {/* ============================================================== */}
          {/* RIGHT COLUMN: REVAMPED SLEEK CONSULTATION INTAKE FORM         */}
          {/* ============================================================== */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-end">
            <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm relative overflow-hidden flex flex-col justify-between w-full max-w-xl">
              {/* TOP VIBRANT TEAL-AMBER ACCENT STRIP */}
              <div className="h-1.5 w-full bg-gradient-to-r from-teal-700 via-teal-500 to-amber-500"></div>

              {/* FORM HEADER BANNER */}
              <div className="px-6 sm:px-8 pt-5 pb-4 border-b border-slate-100 bg-gradient-to-b from-teal-50/40 to-transparent">
                <div className="flex items-center justify-between gap-3 mb-1.5">
                  <span className="inline-flex items-center gap-1.5 text-xs px-2.5 py-0.5 rounded-full bg-teal-100/80 text-teal-900 font-bold tracking-wide">
                    <Sparkles className="w-3 h-3 text-teal-700" />
                    RESERVE 1-ON-1 DEMO
                  </span>
                  <span className="text-[11px] font-semibold text-amber-700 bg-amber-50 border border-amber-200/70 px-2.5 py-0.5 rounded-full">
                    ⚡ 2 Slots Left Today
                  </span>
                </div>
                <h2 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
                  Consultation Intake Form
                </h2>
                <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5">
                  Fill in your business details below to customize your prototype bot demo (~1 minute)
                </p>
              </div>

              {/* FORM BODY */}
              <div className="p-6 sm:p-8 flex-1">
                {!submitted ? (
                  <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                    {/* SECTION 1: BUSINESS & CONTACT DETAILS */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 pb-1.5 border-b border-slate-100">
                        <span className="flex items-center justify-center w-5 h-5 rounded-md bg-teal-50 text-teal-700 text-[10px] font-bold font-mono">
                          1
                        </span>
                        <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                          Business &amp; Contact Details
                        </h3>
                      </div>

                      {/* ROW 1: BUSINESS NAME & CONTACT NAME */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                        <div>
                          <label
                            htmlFor="businessName"
                            className="block text-xs font-bold text-slate-800 tracking-tight mb-2"
                          >
                            Business Name{" "}
                            <span className="text-[11px] font-normal text-slate-500">
                              (လုပ်ငန်းအမည်)
                            </span>{" "}
                            <span className="text-rose-500">*</span>
                          </label>
                          <input
                            id="businessName"
                            type="text"
                            required
                            placeholder="e.g. Boss Fashion House"
                            value={formData.businessName}
                            onChange={(e) =>
                              setFormData({ ...formData, businessName: e.target.value })
                            }
                            className="w-full h-11 px-4 text-xs sm:text-sm font-medium text-slate-900 placeholder:text-slate-400 bg-white border border-slate-200/90 rounded-xl focus:border-teal-700 focus:ring-2 focus:ring-teal-700/15 outline-none transition-all shadow-xs hover:border-slate-300"
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="contactName"
                            className="block text-xs font-bold text-slate-800 tracking-tight mb-2"
                          >
                            Contact Person{" "}
                            <span className="text-[11px] font-normal text-slate-500">
                              (ဆက်သွယ်ရန် အမည်)
                            </span>{" "}
                            <span className="text-rose-500">*</span>
                          </label>
                          <input
                            id="contactName"
                            type="text"
                            required
                            placeholder="e.g. U Mg Mg / Daw Hla"
                            value={formData.contactName}
                            onChange={(e) =>
                              setFormData({ ...formData, contactName: e.target.value })
                            }
                            className="w-full h-11 px-4 text-xs sm:text-sm font-medium text-slate-900 placeholder:text-slate-400 bg-white border border-slate-200/90 rounded-xl focus:border-teal-700 focus:ring-2 focus:ring-teal-700/15 outline-none transition-all shadow-xs hover:border-slate-300"
                          />
                        </div>
                      </div>

                      {/* ROW 2: PHONE & EMAIL */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                        <div>
                          <label
                            htmlFor="phoneNumber"
                            className="block text-xs font-bold text-slate-800 tracking-tight mb-2"
                          >
                            Phone Number{" "}
                            <span className="text-[11px] font-normal text-slate-500">
                              (ဖုန်းနံပါတ်)
                            </span>{" "}
                            <span className="text-rose-500">*</span>
                          </label>
                          <div className="relative flex items-center">
                            <span className="absolute left-4 font-mono text-xs font-bold text-slate-500 select-none">
                              +95
                            </span>
                            <input
                              id="phoneNumber"
                              type="tel"
                              required
                              placeholder="9xxxxxxxxx"
                              value={formData.phoneNumber}
                              onChange={(e) =>
                                setFormData({ ...formData, phoneNumber: e.target.value })
                              }
                              className="w-full h-11 pl-12 pr-4 text-xs sm:text-sm font-mono font-semibold text-slate-900 placeholder:text-slate-400 bg-white border border-slate-200/90 rounded-xl focus:border-teal-700 focus:ring-2 focus:ring-teal-700/15 outline-none transition-all shadow-xs hover:border-slate-300"
                            />
                          </div>
                        </div>

                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <label
                              htmlFor="email"
                              className="block text-xs font-bold text-slate-800 tracking-tight"
                            >
                              Email Address{" "}
                              <span className="text-[11px] font-normal text-slate-500">
                                (အီးမေးလ်)
                              </span>
                            </label>
                            <span className="text-[10px] font-medium text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full">
                              Optional
                            </span>
                          </div>
                          <input
                            id="email"
                            type="email"
                            placeholder="name@business.com"
                            value={formData.email}
                            onChange={(e) =>
                              setFormData({ ...formData, email: e.target.value })
                            }
                            className="w-full h-11 px-4 text-xs sm:text-sm font-medium text-slate-900 placeholder:text-slate-400 bg-white border border-slate-200/90 rounded-xl focus:border-teal-700 focus:ring-2 focus:ring-teal-700/15 outline-none transition-all shadow-xs hover:border-slate-300"
                          />
                        </div>
                      </div>
                    </div>

                    {/* SECTION 2: OPERATIONS & BOT CUSTOMIZATION */}
                    <div className="space-y-4 pt-1">
                      <div className="flex items-center gap-2 pb-1.5 border-b border-slate-100">
                        <span className="flex items-center justify-center w-5 h-5 rounded-md bg-teal-50 text-teal-700 text-[10px] font-bold font-mono">
                          2
                        </span>
                        <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                          Operations &amp; Bot Customization
                        </h3>
                      </div>

                      {/* BUSINESS VERTICAL SELECT */}
                      <div>
                        <label
                          htmlFor="businessCategory"
                          className="block text-xs font-bold text-slate-800 tracking-tight mb-2"
                        >
                          Business Vertical{" "}
                          <span className="text-[11px] font-normal text-slate-500">
                            (လုပ်ငန်းကဏ္ဍ)
                          </span>{" "}
                          <span className="text-rose-500">*</span>
                        </label>
                        <div className="relative">
                          <select
                            id="businessCategory"
                            required
                            value={formData.businessCategory}
                            onChange={(e) =>
                              setFormData({ ...formData, businessCategory: e.target.value })
                            }
                            className="w-full h-11 px-4 appearance-none text-xs sm:text-sm font-medium text-slate-900 bg-white border border-slate-200/90 rounded-xl focus:border-teal-700 focus:ring-2 focus:ring-teal-700/15 outline-none transition-all pr-10 cursor-pointer shadow-xs hover:border-slate-300"
                          >
                            <option value="retail">Online Shop (Retail / Clothing / Fashion / Cosmetics)</option>
                            <option value="beauty">Beauty Salon, Aesthetics, Clinic &amp; Spa</option>
                            <option value="healthcare">Medical Clinic, Dental &amp; Healthcare</option>
                            <option value="education">Education, Training &amp; Academy</option>
                            <option value="fnb">Restaurant, Café &amp; Food Delivery</option>
                            <option value="services">Agency, Real Estate &amp; Professional Services</option>
                          </select>
                          <ChevronDown className="w-4 h-4 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500" />
                        </div>
                      </div>

                      {/* ACTIVE MESSAGING CHANNELS */}
                      <div>
                        <label className="block text-xs font-bold text-slate-800 tracking-tight mb-2">
                          Current Messaging Channels{" "}
                          <span className="text-[11px] font-normal text-slate-500">
                            (လက်ရှိ အသုံးပြုနေသော ချန်နယ်များ)
                          </span>
                        </label>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                          {[
                            { key: "messenger", label: "FB Messenger", icon: MessageSquare },
                            { key: "telegram", label: "Telegram", icon: Send },
                            { key: "viber", label: "Viber", icon: Zap },
                            { key: "website", label: "Website / App", icon: Globe }
                          ].map((ch) => {
                            const Icon = ch.icon;
                            const isChecked = formData.channels[ch.key];
                            return (
                              <button
                                type="button"
                                key={ch.key}
                                onClick={() => handleChannelToggle(ch.key)}
                                className={`py-2.5 px-3 rounded-xl border text-xs font-semibold flex items-center justify-between transition-all cursor-pointer shadow-2xs ${
                                  isChecked
                                    ? "bg-teal-50/80 border-teal-600 text-teal-900 ring-1 ring-teal-600/30"
                                    : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50 hover:border-slate-300"
                                }`}
                              >
                                <div className="flex items-center gap-1.5 truncate">
                                  <Icon className={`w-3.5 h-3.5 shrink-0 ${isChecked ? "text-teal-700" : "text-slate-400"}`} />
                                  <span className="truncate text-[11px] font-medium">{ch.label}</span>
                                </div>
                                {isChecked && (
                                  <span className="w-4 h-4 rounded-full bg-teal-700 text-white flex items-center justify-center shrink-0 ml-1">
                                    <Check className="w-2.5 h-2.5 stroke-[3]" />
                                  </span>
                                )}
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* SAMPLE PRODUCTS & BOTTLENECK */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                        <div>
                          <label
                            htmlFor="sampleProducts"
                            className="block text-xs font-bold text-slate-800 tracking-tight mb-2"
                          >
                            Sample Products{" "}
                            <span className="text-[11px] font-normal text-slate-500">
                              (ပစ္စည်းဥပမာ)
                            </span>
                          </label>
                          <input
                            id="sampleProducts"
                            type="text"
                            placeholder="e.g. Korean Dress, Skincare"
                            value={formData.sampleProducts}
                            onChange={(e) =>
                              setFormData({ ...formData, sampleProducts: e.target.value })
                            }
                            className="w-full h-11 px-4 text-xs sm:text-sm font-medium text-slate-900 placeholder:text-slate-400 bg-white border border-slate-200/90 rounded-xl focus:border-teal-700 focus:ring-2 focus:ring-teal-700/15 outline-none transition-all shadow-xs hover:border-slate-300"
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="notes"
                            className="block text-xs font-bold text-slate-800 tracking-tight mb-2"
                          >
                            Current Bottleneck{" "}
                            <span className="text-[11px] font-normal text-slate-500">
                              (အဓိက အခက်အခဲ)
                            </span>
                          </label>
                          <input
                            id="notes"
                            type="text"
                            placeholder="e.g. Late inquiries, turnover"
                            value={formData.notes}
                            onChange={(e) =>
                              setFormData({ ...formData, notes: e.target.value })
                            }
                            className="w-full h-11 px-4 text-xs sm:text-sm font-medium text-slate-900 placeholder:text-slate-400 bg-white border border-slate-200/90 rounded-xl focus:border-teal-700 focus:ring-2 focus:ring-teal-700/15 outline-none transition-all shadow-xs hover:border-slate-300"
                          />
                        </div>
                      </div>
                    </div>

                    {/* SUBMIT BUTTON */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={submitting}
                        className="w-full py-3.5 px-6 rounded-xl bg-teal-700 hover:bg-teal-800 active:scale-[0.99] text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2.5 transition-all cursor-pointer shadow-[0_4px_16px_rgba(15,118,110,0.25)] hover:shadow-[0_8px_24px_rgba(15,118,110,0.35)] disabled:opacity-75"
                      >
                        {submitting ? (
                          <>
                            <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                            <span>Scheduling Consultation...</span>
                          </>
                        ) : (
                          <>
                            <span>Book Free Consultation Demo (အခမဲ့ ရက်ချိန်းရယူမည်)</span>
                            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                          </>
                        )}
                      </button>
                    </div>

                    {/* REASSURANCE BAR */}
                    <div className="flex flex-wrap items-center justify-center gap-3 text-[11px] text-slate-500 pt-0.5">
                      <span className="flex items-center gap-1">
                        <Check className="w-3 h-3 text-emerald-600 stroke-[2.5]" />
                        100% Free
                      </span>
                      <span className="text-slate-300">•</span>
                      <span className="flex items-center gap-1">
                        <Check className="w-3 h-3 text-emerald-600 stroke-[2.5]" />
                        No Credit Card Required
                      </span>
                      <span className="text-slate-300">•</span>
                      <span className="flex items-center gap-1">
                        <Check className="w-3 h-3 text-emerald-600 stroke-[2.5]" />
                        Reply in 24h
                      </span>
                    </div>
                  </form>
                ) : (
                  /* SUCCESS STATE */
                  <div className="py-8 px-4 text-center space-y-3.5 animate-page-fade">
                    <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-700 flex items-center justify-center mx-auto border border-teal-200 shadow-sm">
                      <CheckCircle2 className="w-7 h-7 text-teal-700" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-base font-bold text-slate-900">
                        Demo Request အောင်မြင်စွာ လက်ခံရရှိပါပြီ။
                      </h3>
                      <p className="text-xs text-slate-600 max-w-sm mx-auto">
                        သင့် Request Tracking ID:{" "}
                        <span className="font-mono font-bold text-teal-800 bg-teal-50 px-2 py-0.5 rounded border border-teal-200">
                          {requestId}
                        </span>
                      </p>
                    </div>
                    <p className="text-xs text-slate-500 max-w-md mx-auto leading-relaxed">
                      ကျွန်ုပ်တို့၏ Senior AI Consultant က ၂၄ နာရီအတွင်း သင့်ဖုန်းသို့ တိုက်ရိုက် ဆက်သွယ်ပြီး သင့်ဆိုင်အတွက် Prototype Bot Demo ကို စတင်ချိန်ညှိပေးပါမည်။
                    </p>
                    <div className="pt-2">
                      <button
                        type="button"
                        onClick={() => {
                          setSubmitted(false);
                          setFormData({
                            businessName: "",
                            contactName: "",
                            phoneNumber: "",
                            email: "",
                            businessCategory: "retail",
                            channels: { messenger: true, telegram: true, viber: false, website: false },
                            sampleProducts: "",
                            notes: ""
                          });
                        }}
                        className="text-xs font-bold text-teal-700 hover:text-teal-800 underline cursor-pointer"
                      >
                        Submit another request (နောက်ထပ် ရက်ချိန်းတစ်ခု ရယူမည်)
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
