"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  if (pathname?.startsWith("/dashboard")) return null;

  return (
    <footer className="w-full bg-slate-950 text-slate-300 mt-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-slate-800">
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-teal-600 text-white font-bold text-xs">
                B
              </span>
              <span className="text-2xl font-bold tracking-tight text-white">BnB</span>
            </div>
            <p className="font-body-sm text-body-sm text-slate-400 leading-relaxed">
              Powered by UTS Myanmar since 2017. Enterprise-grade autonomous AI infrastructure built to serve top tier institutions including CB Bank, KBZ Bank, and A Bank.
            </p>
            <div className="pt-2">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-300 font-label-sm text-label-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-400"></span>
                Enterprise Certified
              </span>
            </div>
          </div>

          {/* Products & Solutions */}
          <div className="space-y-4">
            <h4 className="font-headline-sm text-headline-sm text-white font-medium">
              Products &amp; Solutions
            </h4>
            <ul className="space-y-3 font-body-sm text-body-sm">
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-teal-400 text-[16px]">
                  chevron_right
                </span>
                <Link
                  href="/book-a-demo"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  AI for Retail
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-teal-400 text-[16px]">
                  chevron_right
                </span>
                <Link
                  href="/book-a-demo"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  AI for Services
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-teal-400 text-[16px]">
                  chevron_right
                </span>
                <Link
                  href="/pricing"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Ad Studio &amp; Image AI
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-teal-400 text-[16px]">
                  chevron_right
                </span>
                <Link
                  href="/book-a-demo"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  AI Workforce Core
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="font-headline-sm text-headline-sm text-white font-medium">
              Company
            </h4>
            <ul className="space-y-3 font-body-sm text-body-sm">
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-teal-400 text-[16px]">
                  chevron_right
                </span>
                <Link
                  href="/contact"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  About UTS Myanmar
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-teal-400 text-[16px]">
                  chevron_right
                </span>
                <Link
                  href="/#why-choose-us"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Why Choose Us
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-teal-400 text-[16px]">
                  chevron_right
                </span>
                <Link
                  href="/pricing"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Subscription Plans
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-teal-400 text-[16px]">
                  chevron_right
                </span>
                <Link
                  href="/contact"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Contact &amp; Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            <h4 className="font-headline-sm text-headline-sm text-white font-medium">
              Contact Information
            </h4>
            <ul className="space-y-3 font-body-sm text-body-sm text-slate-400">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-teal-400 text-[18px] mt-0.5">
                  call
                </span>
                <a href="tel:09442508508" className="hover:text-white transition-colors">
                  09442508508 / 09442509509
                </a>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-teal-400 text-[18px] mt-0.5">
                  mail
                </span>
                <a href="mailto:admin@utsmyanmar.com" className="hover:text-white transition-colors">
                  admin@utsmyanmar.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-teal-400 text-[18px] mt-0.5">
                  location_on
                </span>
                <span>
                  Floor 8, No. 28, Corner of Bogyoke Rd &amp; Botahtaung Pagoda Rd, Yangon
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-teal-400 text-[18px] mt-0.5">
                  schedule
                </span>
                <span>Mon - Fri: 9:00 AM - 6:00 PM (MMT)</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Contained Copyright & Status */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-2 w-2 rounded-full bg-teal-400"></span>
            <span className="font-label-sm text-label-sm text-slate-400">
              All systems operational · Enterprise SLA
            </span>
          </div>
          <p className="font-body-sm text-body-sm text-slate-400 text-center sm:text-right">
            © 2026 Boss &amp; Bots (BnB). All rights reserved · Powered by UTS Myanmar
          </p>
        </div>
      </div>
    </footer>
  );
}
