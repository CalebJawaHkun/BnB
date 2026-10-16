"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { Home, ArrowLeft, Bot } from "lucide-react";
import { useOnboarding } from "@/context/OnboardingContext";

export default function NotFound() {
  const router = useRouter();
  const pathname = usePathname();
  const { setIsNotFound } = useOnboarding();

  useEffect(() => {
    setIsNotFound(true);
    return () => {
      setIsNotFound(false);
    };
  }, [setIsNotFound]);

  const handleGoBack = () => {
    if (typeof window !== "undefined" && window.history.length > 1) {
      router.back();
    } else {
      router.push("/");
    }
  };

  return (
    <div
      data-not-found-page="true"
      className="w-full flex-1 min-h-[85vh] flex flex-col items-center justify-center px-6 py-12 text-center relative selection:bg-teal-100 selection:text-teal-900 animate-page-fade"
    >
      {/* Centered Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none -z-10 flex items-center justify-center overflow-hidden">
        <div className="w-[500px] h-[350px] bg-gradient-to-b from-teal-200/30 via-teal-700/5 to-transparent blur-3xl rounded-full opacity-70" />
      </div>

      {/* Main Minimalist Content Box */}
      <div className="w-full max-w-md mx-auto flex flex-col items-center text-center">
        {/* Brand Anchor */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 mb-6 group transition-opacity hover:opacity-85"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-teal-700 text-white font-bold text-xs shadow-xs">
            B
          </div>
          <span className="text-sm font-bold tracking-tight text-slate-900">
            Boss &amp; Bots
          </span>
          <span className="text-[10px] font-bold font-code-mono px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200">
            404
          </span>
        </Link>

        {/* Minimal 404 Graphic */}
        <div className="relative mb-4 flex items-center justify-center">
          <div className="text-6xl sm:text-7xl font-extrabold tracking-tight text-slate-900 flex items-center gap-2 select-none">
            <span>4</span>
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-teal-50 border border-teal-200/80 flex items-center justify-center shadow-xs">
              <Bot className="w-7 h-7 sm:w-8 sm:h-8 text-teal-700 animate-pulse" />
            </div>
            <span>4</span>
          </div>
        </div>

        {/* Status Pill */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100/90 text-slate-600 text-xs font-medium border border-slate-200/70 mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
          <span>Page Not Found · စာမျက်နှာ ရှာမတွေ့ပါ</span>
        </div>

        {/* Clear Headline */}
        <h1 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-2">
          ပင်မစာမျက်နှာသို့ ပြန်သွားနိုင်ပါသည်
        </h1>

        {/* Subtitle */}
        <p className="text-xs sm:text-sm text-slate-500 max-w-sm leading-relaxed mb-6">
          {pathname && (
            <span className="inline-block font-code-mono text-slate-700 px-2 py-0.5 rounded bg-slate-100 border border-slate-200 text-xs mb-2">
              {pathname}
            </span>
          )}
          <span className="block">
            The page you requested does not exist or has been relocated. Let&apos;s get you back to the home page.
          </span>
        </p>

        {/* Main CTA to Home */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 active:scale-[0.99] text-white text-sm font-medium shadow-sm hover:shadow transition-all group"
          >
            <Home className="w-4 h-4 text-teal-400 group-hover:scale-110 transition-transform" />
            <span>ပင်မစာမျက်နှာသို့ ပြန်သွားရန် · Return Home</span>
          </Link>

          <button
            type="button"
            onClick={handleGoBack}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-600 hover:text-slate-900 text-sm font-medium transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-slate-400" />
            <span>Go Back</span>
          </button>
        </div>
      </div>
    </div>
  );
}
