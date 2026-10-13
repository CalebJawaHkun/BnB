"use client";

import { useState } from "react";
import Link from "next/link";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="w-full bg-[#f8fafc] animate-page-fade">
      <section className="relative w-full py-10 md:py-16 lg:py-20 overflow-hidden animate-section-rise">
        {/* Ambient Top Glow */}
        <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[340px] bg-gradient-to-b from-teal-200/20 via-teal-700/5 to-transparent blur-3xl -z-10" />

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          {/* Header & Eyebrow */}
          <div className="mb-10 lg:mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-50 text-teal-800 font-label-sm text-xs border border-teal-200/60 mb-4 font-semibold">
              <span className="material-symbols-outlined text-[16px]">corporate_fare</span>
              <span>BnB Enterprise Inquiries • UTS Myanmar Headquarters</span>
            </div>
            <p className="text-xs text-slate-500 font-semibold tracking-widest uppercase">
              CONTACT US • တိုက်ရိုက် ဆက်သွယ်ရန်
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
            {/* Left Column: Direct Lines & Heritage */}
            <div className="lg:col-span-5 flex flex-col gap-8">
              <div className="space-y-4">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
                  Boss &amp; Bots နှင့် တိုက်ရိုက် ဆက်သွယ် မေးမြန်းပါ
                </h1>
                <p className="text-base text-slate-600 leading-relaxed">
                  လုပ်ငန်းသုံး AI အလိုအလျောက်စနစ်များနှင့် ပတ်သက်၍ အသေးစိတ်သိရှိလိုပါက UTS Myanmar ရှိ ကျွမ်းကျင်သော Enterprise Consultant များနှင့် တိုက်ရိုက်ဆွေးနွေးနိုင်ပါသည်။ ရုံးခန်းသို့ လူကိုယ်တိုင် လာရောက်ဆွေးနွေးနိုင်သလို ဖုန်းနှင့် အီးမေးလ်တို့မှတစ်ဆင့်လည်း ဆက်သွယ်နိုင်ပါသည်။
                </p>
              </div>

              {/* Direct Lines Box */}
              <div className="p-6 rounded-3xl bg-white card-soft-glow space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <div>
                    <span className="text-xs text-teal-700 uppercase tracking-wider font-semibold">
                      Direct Lines
                    </span>
                    <h3 className="text-lg font-bold text-slate-900">ရုံးခန်းဖုန်းနှင့် အီးမေးလ်</h3>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 font-code-mono text-xs font-semibold">
                    MM-HQ
                  </span>
                </div>

                <div className="space-y-5">
                  {/* Phone */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 border border-teal-100 flex items-center justify-center flex-shrink-0">
                      <span className="material-symbols-outlined text-[20px]">call</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs text-slate-500 font-medium">Phone Support (Hotline)</span>
                      <a
                        className="text-base font-bold text-slate-900 hover:text-teal-700 transition-colors"
                        href="tel:09442508508"
                      >
                        09442508508
                      </a>
                      <a
                        className="text-base font-bold text-slate-900 hover:text-teal-700 transition-colors"
                        href="tel:09442509509"
                      >
                        09442509509
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 border border-teal-100 flex items-center justify-center flex-shrink-0">
                      <span className="material-symbols-outlined text-[20px]">mail</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs text-slate-500 font-medium">Email Inquiries</span>
                      <a
                        className="text-sm font-semibold text-slate-900 hover:text-teal-700 transition-colors"
                        href="mailto:admin@utsmyanmar.com"
                      >
                        admin@utsmyanmar.com
                      </a>
                      <a
                        className="text-sm font-semibold text-slate-900 hover:text-teal-700 transition-colors"
                        href="mailto:bnb@utsmyanmar.com"
                      >
                        bnb@utsmyanmar.com
                      </a>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 border border-teal-100 flex items-center justify-center flex-shrink-0">
                      <span className="material-symbols-outlined text-[20px]">schedule</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs text-slate-500 font-medium">Business Hours</span>
                      <p className="text-sm font-semibold text-slate-900">
                        Mon - Fri: 9:00 AM - 6:00 PM (MMT)
                      </p>
                      <span className="text-xs text-slate-500">
                        စနေ၊ တနင်္ဂနွေနှင့် ရုံးပိတ်ရက်များ ပိတ်ပါသည်
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* UTS Heritage Card */}
              <div className="p-6 rounded-3xl bg-slate-100/70 border border-slate-200/80 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-teal-700 text-[24px]">
                    verified_user
                  </span>
                  <div>
                    <h4 className="text-base font-bold text-slate-900">
                      UTS Myanmar Enterprise Heritage
                    </h4>
                    <p className="text-xs text-slate-600">
                      Trusted by top banking leaders since 2017
                    </p>
                  </div>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  CB Bank, KBZ Bank, A Bank, Yoma Bank နှင့် UAB Bank စသည့် မြန်မာနိုင်ငံ ထိပ်တန်းဘဏ်ကြီးများ၏ Enterprise Software &amp; Autonomous AI စနစ်များကို အောင်မြင်စွာ တည်ဆောက်ပေးထားပါသည်။
                </p>
              </div>
            </div>

            {/* Right Column: Cards & Quick Form */}
            <div className="lg:col-span-7">
              <div className="flex flex-col gap-6">
                {/* Dedicated Demo Banner Card */}
                <div className="relative rounded-3xl bg-gradient-to-b from-teal-50 to-white p-6 sm:p-8 card-soft-glow border border-teal-100">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div className="space-y-1.5">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-700 text-white text-xs font-semibold">
                        <span className="material-symbols-outlined text-[14px]">
                          rocket_launch
                        </span>
                        <span>Dedicated Demo Experience</span>
                      </div>
                      <h3 className="text-xl font-bold text-slate-900">
                        ရက်ချိန်းသီးသန့် ရယူလိုပါသလား?
                      </h3>
                      <p className="text-sm text-slate-600">
                        AI ဝန်ထမ်း သရုပ်ပြသမှုနှင့် လုပ်ငန်းအတွက် သီးသန့် Demo ကို Demo Page တွင် အချိန်ရွေးချယ်ရယူနိုင်ပါသည်။
                      </p>
                    </div>
                    <Link
                      href="/book-a-demo"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold shadow-sm hover:shadow transition-all self-start sm:self-center flex-shrink-0"
                    >
                      <span>ရက်ချိန်းစာမျက်နှာသို့ (Book a Demo)</span>
                      <span className="material-symbols-outlined text-[18px]">
                        arrow_forward
                      </span>
                    </Link>
                  </div>
                </div>

                {/* Location & Live Messaging Channels */}
                <div className="rounded-3xl bg-white p-6 sm:p-8 card-soft-glow space-y-6">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                    <div>
                      <span className="text-xs text-teal-700 uppercase tracking-widest font-semibold">
                        Location &amp; Visiting
                      </span>
                      <h3 className="text-lg font-bold text-slate-900">
                        ရုံးချုပ် တည်နေရာနှင့် လူကိုယ်တိုင် လာရောက်ဆွေးနွေးရန်
                      </h3>
                    </div>
                    <span className="material-symbols-outlined text-teal-700 text-[24px]">
                      location_city
                    </span>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-start gap-3.5">
                      <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 border border-teal-100 flex items-center justify-center flex-shrink-0">
                        <span className="material-symbols-outlined text-[20px]">apartment</span>
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-base font-semibold text-slate-900">
                          Yangon Central Headquarters
                        </h4>
                        <p className="text-sm text-slate-700 leading-relaxed">
                          Floor 8, No.(28), Corner of Bogyoke Road &amp; Botahtaung Pagoda Road, Botahtaung Township, Yangon, Myanmar.
                        </p>
                        <p className="text-xs text-slate-500">
                          (ဗိုလ်ချုပ်လမ်းနှင့် ဗိုလ်တထောင်ဘုရားလမ်းထောင့်၊ ဗိုလ်တထောင်မြို့နယ်၊ ရန်ကုန်မြို့)
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-100">
                    <span className="text-xs text-slate-500 block mb-3 font-semibold uppercase tracking-wider">
                      Live Messaging Channels
                    </span>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      <a
                        className="flex items-center gap-2.5 p-3 rounded-2xl bg-slate-50 hover:bg-slate-100 border border-slate-100 transition-colors"
                        href="https://m.me/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <span className="material-symbols-outlined text-teal-700 text-[20px]">
                          chat
                        </span>
                        <div>
                          <p className="text-sm font-semibold text-slate-900">Messenger</p>
                          <span className="text-xs text-slate-500">BnB Official</span>
                        </div>
                      </a>
                      <a
                        className="flex items-center gap-2.5 p-3 rounded-2xl bg-slate-50 hover:bg-slate-100 border border-slate-100 transition-colors"
                        href="https://t.me/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <span className="material-symbols-outlined text-teal-700 text-[20px]">
                          send
                        </span>
                        <div>
                          <p className="text-sm font-semibold text-slate-900">Telegram</p>
                          <span className="text-xs text-slate-500">@bnb_support</span>
                        </div>
                      </a>
                      <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-slate-50 border border-slate-100">
                        <span className="material-symbols-outlined text-teal-700 text-[20px]">
                          ring_volume
                        </span>
                        <div>
                          <p className="text-sm font-semibold text-slate-900">Viber</p>
                          <span className="text-xs text-slate-500">09442508508</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Direct Message Quick Form */}
                <div className="rounded-3xl bg-white p-6 sm:p-8 card-soft-glow space-y-5">
                  <div className="border-b border-slate-100 pb-4">
                    <span className="text-xs text-teal-700 uppercase tracking-widest font-semibold">
                      Direct Message
                    </span>
                    <h3 className="text-lg font-bold text-slate-900">
                      အမြန်မေးမြန်းရန် မက်ဆေ့ခ်ျ ပေးပို့ပါ
                    </h3>
                  </div>

                  <form className="space-y-4" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-slate-900 flex items-center gap-1">
                          သင့်အမည် <span className="text-red-500">*</span>
                        </label>
                        <input
                          className="w-full h-11 px-3.5 rounded-xl bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-teal-700 border border-slate-200"
                          placeholder="e.g. ဦးမောင်မောင်"
                          required
                          type="text"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-slate-900 flex items-center gap-1">
                          ဖုန်းနံပါတ် / အီးမေးလ် <span className="text-red-500">*</span>
                        </label>
                        <input
                          className="w-full h-11 px-3.5 rounded-xl bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-teal-700 border border-slate-200"
                          placeholder="09xxxxxxxxx or email@domain.com"
                          required
                          type="text"
                          value={formData.contact}
                          onChange={(e) =>
                            setFormData({ ...formData, contact: e.target.value })
                          }
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-900 flex items-center gap-1">
                        မေးမြန်းလိုသည့် အကြောင်းအရာ <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        className="w-full p-3.5 rounded-xl bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-teal-700 border border-slate-200 resize-none"
                        placeholder="သင့်လုပ်ငန်းနှင့်ပတ်သက်ပြီး သိရှိလိုသည်များကို ရေးသားပေးပို့နိုင်ပါသည်..."
                        required
                        rows={3}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                      ></textarea>
                    </div>

                    {submitted && (
                      <div className="p-4 rounded-2xl bg-teal-50 border border-teal-200 text-teal-900 flex items-center gap-3">
                        <span className="material-symbols-outlined text-teal-700 text-[22px]">
                          check_circle
                        </span>
                        <p className="text-xs font-medium">
                          မေးမြန်းမှု ပေးပို့ပြီးပါပြီ။ BnB တာဝန်ရှိသူမှ မကြာမီ ပြန်လည်ဆက်သွယ်ပါမည်။
                        </p>
                      </div>
                    )}

                    <button
                      className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-slate-950 hover:bg-slate-800 active:scale-[0.99] text-white font-semibold text-sm shadow-sm transition-all duration-200 cursor-pointer"
                      type="submit"
                    >
                      <span>မက်ဆေ့ခ်ျ ပေးပို့မည် (Send Inquiry)</span>
                      <span className="material-symbols-outlined text-[18px]">
                        send
                      </span>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Metric Bar */}
          <div className="mt-16 lg:mt-24 pt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-slate-200">
            <div className="flex flex-col items-center text-center space-y-2 py-4">
              <span className="font-code-mono text-slate-500 uppercase tracking-widest text-xs font-semibold">
                Uptime Record
              </span>
              <span className="text-3xl sm:text-4xl text-teal-700 font-bold tracking-tight">
                99.98%
              </span>
              <span className="text-xs text-slate-600 max-w-[200px]">
                High-availability SLA
              </span>
            </div>
            <div className="flex flex-col items-center text-center space-y-2 py-4">
              <span className="font-code-mono text-slate-500 uppercase tracking-widest text-xs font-semibold">
                Response Velocity
              </span>
              <span className="text-3xl sm:text-4xl text-teal-700 font-bold tracking-tight">
                &lt; 1.2s
              </span>
              <span className="text-xs text-slate-600 max-w-[200px]">
                Real-time LLM inference
              </span>
            </div>
            <div className="flex flex-col items-center text-center space-y-2 py-4">
              <span className="font-code-mono text-slate-500 uppercase tracking-widest text-xs font-semibold">
                Active Bots
              </span>
              <span className="text-3xl sm:text-4xl text-teal-700 font-bold tracking-tight">
                450+
              </span>
              <span className="text-xs text-slate-600 max-w-[200px]">
                Live across MM businesses
              </span>
            </div>
            <div className="flex flex-col items-center text-center space-y-2 py-4">
              <span className="font-code-mono text-slate-500 uppercase tracking-widest text-xs font-semibold">
                Proven Track
              </span>
              <span className="text-3xl sm:text-4xl text-teal-700 font-bold tracking-tight">
                Since 2017
              </span>
              <span className="text-xs text-slate-600 max-w-[200px]">
                UTS enterprise pedigree
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
