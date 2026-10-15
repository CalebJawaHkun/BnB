"use client";

import { useState } from "react";
import Link from "next/link";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

  const handleOAuthLogin = (provider) => {
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <div className="w-full min-h-[calc(100vh-140px)] flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-[#f8fafc] animate-page-fade relative overflow-hidden">
      {/* Ambient Teal Radial Glow Background matching Stitch */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden -z-10">
        <div className="absolute -top-[20%] left-1/2 -translate-x-1/2 w-[900px] h-[550px] bg-teal-200/25 rounded-full blur-[140px] opacity-70" />
        <div className="absolute top-[40%] right-[10%] w-[450px] h-[450px] bg-slate-200/60 rounded-full blur-[120px] opacity-50" />
      </div>

      <div className="w-full max-w-md mx-auto animate-section-rise">
        {/* Central Sign In Card */}
        <div className="w-full rounded-3xl border border-slate-200/80 bg-white p-8 sm:p-10 shadow-[0_20px_50px_-20px_rgba(15,118,110,0.12),0_10px_20px_-10px_rgba(15,23,42,0.06)] relative transition-all duration-200">
          {/* Card Header */}
          <div className="text-center mb-7">
            <div className="w-14 h-14 rounded-2xl bg-teal-700/10 border border-teal-700/20 flex items-center justify-center text-teal-700 mx-auto mb-4 shadow-sm relative">
              <span className="material-symbols-outlined text-[28px]">
                smart_toy
              </span>
              <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-teal-700 rounded-full border-2 border-white"></span>
            </div>
            <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
              BnB Workspace Sign In
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Access your AI Employee Studio, Telemetry &amp; Store Analytics
            </p>
            <p className="text-xs text-teal-800 font-medium mt-1.5 leading-relaxed font-myanmar bg-teal-50/80 py-1 px-3 rounded-full inline-block border border-teal-100">
              လုပ်ငန်းသုံး AI စနစ်နှင့် Dashboard သို့ ဝင်ရောက်ရန် လော့ဂ်အင်ဝင်ပါ
            </p>
          </div>

          {submitted ? (
            <div className="py-8 text-center space-y-4 animate-page-fade">
              <div className="w-14 h-14 rounded-full bg-teal-50 text-teal-700 mx-auto flex items-center justify-center border border-teal-200 shadow-sm">
                <span className="material-symbols-outlined text-[32px]">
                  check_circle
                </span>
              </div>
              <div className="space-y-1">
                <h3 className="text-lg font-bold text-slate-900">
                  Authentication Successful
                </h3>
                <p className="text-xs text-slate-600 max-w-xs mx-auto">
                  Redirecting to BnB Bot Studio Live Workspace...
                </p>
              </div>
              <div className="pt-2">
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-teal-700 hover:text-teal-800"
                >
                  <span>Return to Home</span>
                  <span className="material-symbols-outlined text-[16px]">
                    arrow_forward
                  </span>
                </Link>
              </div>
            </div>
          ) : (
            <>
              {/* Quick SSO Options */}
              <div className="flex flex-col gap-3 mb-6">
                {/* Telegram Bot Auth */}
                <button
                  type="button"
                  disabled={submitting}
                  onClick={() => handleOAuthLogin("Telegram")}
                  className="w-full border border-slate-200/80 hover:border-sky-400 bg-white hover:bg-sky-50/40 text-slate-800 text-sm font-semibold rounded-xl py-2.5 px-4 flex items-center justify-center gap-3 transition shadow-xs active:scale-[0.99] disabled:opacity-75 cursor-pointer"
                >
                  <svg
                    className="w-5 h-5 flex-shrink-0"
                    fill="#229ED9"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.37.74-.56 2.92-1.27 4.86-2.11 5.83-2.52 2.77-1.16 3.35-1.36 3.73-1.37.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06-.01.19-.03.28z"></path>
                  </svg>
                  <span>Continue with Telegram Bot Auth</span>
                </button>

                {/* Google Workspace Auth */}
                <button
                  type="button"
                  disabled={submitting}
                  onClick={() => handleOAuthLogin("Google")}
                  className="w-full border border-slate-200/80 hover:border-slate-300 bg-white hover:bg-slate-50 text-slate-800 text-sm font-semibold rounded-xl py-2.5 px-4 flex items-center justify-center gap-3 transition shadow-xs active:scale-[0.99] disabled:opacity-75 cursor-pointer"
                >
                  <svg
                    className="w-4 h-4 flex-shrink-0"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      fill="#4285F4"
                    ></path>
                    <path
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      fill="#34A853"
                    ></path>
                    <path
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                      fill="#FBBC05"
                    ></path>
                    <path
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                      fill="#EA4335"
                    ></path>
                  </svg>
                  <span>Continue with Google Workspace</span>
                </button>
              </div>

              {/* Divider */}
              <div className="relative flex items-center justify-center my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-slate-200"></div>
                </div>
                <span className="relative bg-white px-3 text-xs uppercase tracking-wider text-slate-400 font-medium">
                  Or with email
                </span>
              </div>

              {/* Sign In Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Field 1: Email / Phone */}
                <div>
                  <label className="block text-xs font-semibold text-slate-900 mb-1.5">
                    Business Email / Phone
                    <span className="text-xs text-slate-500 font-normal ml-1">
                      (ဥပမာ - boss@yourshop.com)
                    </span>
                  </label>
                  <div className="relative">
                    <input
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-teal-700 focus:ring-4 focus:ring-teal-700/10 outline-none transition"
                      placeholder="name@company.com or 09..."
                      required
                      type="text"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <span className="material-symbols-outlined absolute right-3 top-2.5 text-slate-400 text-[20px] pointer-events-none">
                      mail
                    </span>
                  </div>
                </div>

                {/* Field 2: Password */}
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="text-xs font-semibold text-slate-900">
                      Password
                    </label>
                    <a
                      className="text-xs text-teal-700 hover:text-teal-800 hover:underline font-medium"
                      href="#forgot"
                    >
                      Forgot password?
                    </a>
                  </div>
                  <div className="relative">
                    <input
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-teal-700 focus:ring-4 focus:ring-teal-700/10 outline-none transition"
                      placeholder="••••••••"
                      required
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <button
                      className="absolute right-3 top-2.5 text-slate-400 hover:text-slate-600 transition cursor-pointer"
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      <span className="material-symbols-outlined text-[20px]">
                        {showPassword ? "visibility_off" : "visibility"}
                      </span>
                    </button>
                  </div>
                </div>

                {/* Remember Me Checkbox */}
                <div className="flex items-center pt-1">
                  <input
                    className="w-4 h-4 rounded border-slate-300 text-teal-700 focus:ring-teal-700/20 accent-teal-700 cursor-pointer"
                    id="remember_device"
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                  />
                  <label
                    className="ml-2 text-xs text-slate-600 cursor-pointer select-none"
                    htmlFor="remember_device"
                  >
                    Remember this device for 30 days
                  </label>
                </div>

                {/* Primary CTA */}
                <div className="pt-2">
                  <button
                    className="w-full rounded-full bg-slate-950 hover:bg-teal-700 text-white text-sm font-semibold py-3 transition duration-200 shadow-md flex items-center justify-center gap-2 active:scale-[0.98] disabled:opacity-75 cursor-pointer"
                    type="submit"
                    disabled={submitting}
                  >
                    {submitting ? (
                      <>
                        <span className="material-symbols-outlined animate-spin text-[18px]">
                          progress_activity
                        </span>
                        <span>Signing in...</span>
                      </>
                    ) : (
                      <>
                        <span>Sign In to BnB</span>
                        <span className="material-symbols-outlined text-[18px]">
                          arrow_forward
                        </span>
                      </>
                    )}
                  </button>
                </div>
              </form>

              {/* Bottom Free Demo Callout */}
              <div className="text-center text-xs text-slate-500 mt-6 pt-5 border-t border-slate-100">
                New to BnB?{" "}
                <Link
                  className="text-teal-700 font-semibold hover:underline"
                  href="/book-a-demo"
                >
                  Book a Free Demo &amp; Setup →
                </Link>
              </div>
            </>
          )}
        </div>

        {/* Direct Security Callout under card matching Stitch design */}
        <div className="flex items-center justify-center gap-2 mt-6 px-4 py-2 rounded-full bg-white/70 border border-slate-200/80 text-slate-500 text-xs shadow-xs backdrop-blur-sm text-center">
          <span className="material-symbols-outlined text-teal-700 text-[18px]">
            verified_user
          </span>
          <span>
            Enterprise Protected by UTS Myanmar · 256-bit SSL · Trusted by CB &amp; KBZ Bank
          </span>
          <span className="material-symbols-outlined text-slate-400 text-[16px]">
            lock
          </span>
        </div>
      </div>
    </div>
  );
}
