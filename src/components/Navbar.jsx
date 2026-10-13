"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showSignInModal, setShowSignInModal] = useState(false);
  const [loginEmail, setLoginEmail] = useState("");
  const [loginSubmitted, setLoginSubmitted] = useState(false);

  const navLinks = [
    { href: "/#ai-employees", label: "AI Employees", id: "ai-employees" },
    { href: "/pricing", label: "Pricing", id: "pricing" },
    { href: "/contact", label: "Contact", id: "contact" },
  ];

  const handleSignInSubmit = (e) => {
    e.preventDefault();
    setLoginSubmitted(true);
    setTimeout(() => {
      setLoginSubmitted(false);
      setShowSignInModal(false);
      setLoginEmail("");
    }, 1800);
  };

  return (
    <>
      <header className="sticky top-4 z-50 px-4 w-full pointer-events-none">
        <div className="max-w-6xl mx-auto px-6 py-3 rounded-full bg-white/90 backdrop-blur-md border border-slate-100 shadow-[0_4px_24px_rgba(0,0,0,0.04)] pointer-events-auto flex items-center justify-between gap-6 transition-all">
          {/* Brand */}
          <div className="flex items-center gap-6">
            <Link
              href="/"
              className="flex items-center gap-2.5 transition-opacity hover:opacity-90"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-teal-700 text-white font-bold text-sm shadow-sm">
                B
              </span>
              <span className="text-xl font-bold tracking-tight text-slate-900">
                BnB
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => {
              const isActive =
                link.id === "pricing"
                  ? pathname === "/pricing"
                  : link.id === "contact"
                  ? pathname === "/contact"
                  : false;

              return (
                <Link
                  key={link.id}
                  href={link.href}
                  className={`text-sm font-medium transition-colors px-2 py-1 rounded-md ${
                    isActive
                      ? "text-teal-800 bg-teal-50 font-semibold"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Action Buttons: Sign In beside Book a Demo */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              type="button"
              onClick={() => setShowSignInModal(true)}
              className="inline-flex text-sm font-medium text-slate-700 hover:text-slate-900 px-3.5 py-1.5 rounded-full hover:bg-slate-100/60 transition-colors cursor-pointer"
            >
              Sign In
            </button>
            <Link
              href="/book-a-demo"
              className="inline-flex items-center justify-center rounded-full bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium px-5 py-2 transition-all hover:opacity-95 shadow-sm active:scale-95"
            >
              Book a Demo
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => setShowSignInModal(true)}
              className="text-xs font-medium text-slate-700 px-2.5 py-1 rounded-full hover:bg-slate-100 transition-colors"
            >
              Sign In
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Toggle menu"
            >
              <span className="material-symbols-outlined text-[22px]">
                {mobileMenuOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="max-w-6xl mx-auto mt-2 px-6 py-4 rounded-3xl bg-white/95 backdrop-blur-md border border-slate-200/80 shadow-lg pointer-events-auto flex flex-col gap-3 animate-page-fade sm:hidden">
            <Link
              href="/#ai-employees"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium text-slate-700 hover:text-teal-700 py-1.5 px-3 rounded-xl hover:bg-slate-50"
            >
              AI Employees
            </Link>
            <Link
              href="/pricing"
              onClick={() => setMobileMenuOpen(false)}
              className={`text-sm font-medium py-1.5 px-3 rounded-xl ${
                pathname === "/pricing"
                  ? "text-teal-800 bg-teal-50 font-semibold"
                  : "text-slate-700 hover:text-teal-700 hover:bg-slate-50"
              }`}
            >
              Pricing
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className={`text-sm font-medium py-1.5 px-3 rounded-xl ${
                pathname === "/contact"
                  ? "text-teal-800 bg-teal-50 font-semibold"
                  : "text-slate-700 hover:text-teal-700 hover:bg-slate-50"
              }`}
            >
              Contact
            </Link>
            <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  setShowSignInModal(true);
                }}
                className="w-full text-center py-2 rounded-full border border-slate-200 text-sm font-medium text-slate-800 hover:bg-slate-50"
              >
                Sign In
              </button>
              <Link
                href="/book-a-demo"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-2 rounded-full bg-slate-900 text-white text-sm font-medium hover:bg-slate-800 shadow-sm"
              >
                Book a Demo
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Interactive Sign In Modal */}
      {showSignInModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/40 backdrop-blur-xs animate-page-fade">
          <div className="relative w-full max-w-md bg-white rounded-3xl p-6 sm:p-8 card-soft-shadow border border-slate-100 shadow-2xl">
            {/* Close Button */}
            <button
              onClick={() => {
                setShowSignInModal(false);
                setLoginSubmitted(false);
              }}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px]">close</span>
            </button>

            {/* Modal Header */}
            <div className="flex items-center gap-3 mb-5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-teal-700 text-white font-bold text-sm shadow-sm">
                B
              </span>
              <div>
                <h3 className="text-xl font-bold text-slate-900">
                  BnB Workspace Sign In
                </h3>
                <p className="text-xs text-slate-500">
                  Access your AI Employee Studio &amp; Dashboard
                </p>
              </div>
            </div>

            {loginSubmitted ? (
              <div className="py-8 text-center space-y-3 animate-page-fade">
                <div className="w-12 h-12 rounded-full bg-teal-50 text-teal-700 mx-auto flex items-center justify-center">
                  <span className="material-symbols-outlined text-[28px]">
                    check_circle
                  </span>
                </div>
                <h4 className="text-lg font-bold text-slate-900">
                  Signing in to Workspace...
                </h4>
                <p className="text-xs text-slate-600 max-w-xs mx-auto">
                  Connecting to UTS Myanmar Enterprise OAuth &amp; verifying credentials.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {/* Fast OAuth Options */}
                <div className="space-y-2.5">
                  <button
                    type="button"
                    onClick={() => {
                      setLoginSubmitted(true);
                      setTimeout(() => setShowSignInModal(false), 1600);
                    }}
                    className="w-full flex items-center justify-center gap-2.5 py-2.5 px-4 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-800 text-sm font-medium transition-all shadow-xs cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-teal-700 text-[18px]">
                      send
                    </span>
                    <span>Continue with Telegram Bot Auth</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setLoginSubmitted(true);
                      setTimeout(() => setShowSignInModal(false), 1600);
                    }}
                    className="w-full flex items-center justify-center gap-2.5 py-2.5 px-4 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-800 text-sm font-medium transition-all shadow-xs cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-red-500 text-[18px]">
                      verified_user
                    </span>
                    <span>Continue with Google Workspace</span>
                  </button>
                </div>

                <div className="flex items-center gap-3 my-3">
                  <div className="h-px bg-slate-200 flex-1"></div>
                  <span className="text-xs text-slate-400 uppercase tracking-wider font-medium">
                    Or with email
                  </span>
                  <div className="h-px bg-slate-200 flex-1"></div>
                </div>

                {/* Email Form */}
                <form onSubmit={handleSignInSubmit} className="space-y-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Business Email / Phone
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. boss@yourshop.com"
                      value={loginEmail}
                      onChange={(e) => setLoginEmail(e.target.value)}
                      className="w-full h-10 px-3.5 rounded-xl border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-700 focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Password
                    </label>
                    <input
                      type="password"
                      required
                      placeholder="••••••••"
                      className="w-full h-10 px-3.5 rounded-xl border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-700 focus:border-transparent transition-all"
                    />
                  </div>
                  <div className="flex items-center justify-between text-xs text-slate-500 pt-1">
                    <label className="flex items-center gap-1.5 cursor-pointer">
                      <input
                        type="checkbox"
                        defaultChecked
                        className="rounded text-teal-700"
                      />
                      <span>Remember me</span>
                    </label>
                    <a href="#forgot" className="hover:text-teal-700 underline">
                      Forgot password?
                    </a>
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-slate-950 hover:bg-slate-800 text-white font-semibold text-sm transition-all shadow-sm active:scale-[0.99] cursor-pointer mt-2"
                  >
                    Sign In to BnB
                  </button>
                </form>

                <p className="text-[11px] text-slate-400 text-center pt-2">
                  Enterprise Protected by UTS Myanmar · 256-bit SSL Encryption
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
