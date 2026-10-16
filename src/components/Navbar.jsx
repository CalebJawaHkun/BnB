"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useOnboarding } from "@/context/OnboardingContext";

export default function Navbar() {
  const pathname = usePathname();
  const { openOnboarding, openSignIn, user, profile, isOnboarded, signOut, isNotFound } = useOnboarding();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const profileDropdownRef = useRef(null);

  // Close profile dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileDropdownRef.current && !profileDropdownRef.current.contains(event.target)) {
        setProfileDropdownOpen(false);
      }
    };

    if (profileDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [profileDropdownOpen]);

  // Close dropdown on route change
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setProfileDropdownOpen(false);
    setMobileMenuOpen(false);
  }

  // If on dashboard or 404 not-found page, do not render floating website navbar
  if (pathname?.startsWith("/dashboard") || isNotFound) {
    return null;
  }

  const navLinks = [
    { href: "/ai-employees", label: "AI Employee", id: "ai-employees" },
    { href: "/pricing", label: "Pricing", id: "pricing" },
    { href: "/contact", label: "Contact", id: "contact" },
  ];

  return (
    <header className="sticky top-4 z-50 px-4 w-full pointer-events-none">
      <div className="max-w-6xl mx-auto px-6 py-3 rounded-full bg-white/90 backdrop-blur-md border border-slate-100 shadow-[0_4px_24px_rgba(0,0,0,0.04)] pointer-events-auto flex items-center justify-between gap-6 transition-all">
        {/* Brand */}
        <div className="flex items-center gap-6">
          <Link
            href="/"
            className="flex items-center gap-2 transition-opacity hover:opacity-90"
          >
            <span className="text-xl font-bold tracking-tight text-slate-900">
              BnB
            </span>
            <span className="w-2 h-2 rounded-full bg-teal-700 mt-1"></span>
          </Link>
        </div>

        {/* Right Navigation Cluster: Nav links + Dynamic Auth CTA */}
        <div className="flex items-center gap-6 sm:gap-7">
          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => {
              const isActive =
                link.id === "ai-employees"
                  ? pathname?.startsWith("/ai-employee")
                  : link.id === "pricing"
                  ? pathname === "/pricing"
                  : link.id === "contact"
                  ? pathname === "/contact"
                  : false;

              return (
                <Link
                  key={link.id}
                  href={link.href}
                  className={`transition-colors px-3.5 py-1.5 rounded-full text-sm font-medium ${
                    isActive
                      ? "bg-teal-700 text-white font-semibold shadow-xs"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            {/* When internal state is OFF: show Sign in */}
            {!isOnboarded && (
              <button
                type="button"
                onClick={openSignIn}
                className={`text-sm hover:text-slate-900 px-3 py-1.5 rounded-full transition-colors flex items-center gap-1.5 cursor-pointer ${
                  pathname === "/sign-in"
                    ? "text-teal-800 bg-teal-50 font-semibold"
                    : "text-slate-600 hover:bg-slate-50"
                }`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-teal-600"></span>
                <span>Sign in</span>
              </button>
            )}
          </nav>

          {/* Action Area:
              - OFF: Book a Demo
              - ON: ONLY the mini circle profile button (with dropdown to Dashboard / Logout)
          */}
          <div className="hidden sm:flex items-center gap-3">
            {!isOnboarded ? (
              <Link
                href="/book-a-demo"
                className="inline-flex items-center justify-center rounded-full bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium px-5 py-2 transition-all hover:opacity-95 shadow-sm active:scale-95 cursor-pointer"
              >
                Book a Demo
              </Link>
            ) : (
              <div className="relative" ref={profileDropdownRef}>
                <button
                  type="button"
                  onClick={() => setProfileDropdownOpen((prev) => !prev)}
                  className="w-8 h-8 rounded-full bg-teal-700 hover:bg-teal-800 text-white flex items-center justify-center transition-all shadow-xs cursor-pointer focus:outline-none focus:ring-2 focus:ring-teal-600 focus:ring-offset-2 relative"
                  title="Profile & Dashboard"
                  aria-label="Account menu"
                  aria-expanded={profileDropdownOpen}
                >
                  <span className="material-symbols-outlined text-[18px]">person</span>
                  <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-white"></span>
                </button>

                {/* Profile Dropdown Menu */}
                {profileDropdownOpen && (
                  <div className="absolute right-0 mt-3 w-64 rounded-2xl bg-white border border-slate-100 shadow-xl shadow-slate-200/70 py-2 z-50 animate-page-fade">
                    <div className="px-4 py-3 border-b border-slate-100 bg-slate-50/50 rounded-t-2xl">
                      <p className="text-xs font-bold text-slate-900 truncate">
                        {profile?.businessName || "My Business"}
                      </p>
                      <p className="text-[11px] text-slate-500 truncate mt-0.5">
                        {profile?.ownerName || user?.name || "Business Boss"} · {profile?.subCategory || "Retail"}
                      </p>
                      <p className="text-[10px] text-slate-400 truncate mt-0.5 font-mono">
                        {profile?.email || user?.email || "boss@workspace.bnb"}
                      </p>
                    </div>

                    <div className="py-1">
                      <Link
                        href="/dashboard"
                        onClick={() => setProfileDropdownOpen(false)}
                        className="flex items-center justify-between px-4 py-2.5 text-xs font-semibold text-slate-700 hover:bg-teal-50 hover:text-teal-800 transition-colors"
                      >
                        <span className="flex items-center gap-2.5">
                          <span className="material-symbols-outlined text-[18px] text-teal-700">dashboard</span>
                          <span>Business Dashboard</span>
                        </span>
                        <span className="material-symbols-outlined text-[16px] text-slate-400">arrow_forward</span>
                      </Link>
                    </div>

                    <div className="pt-1 border-t border-slate-100">
                      <button
                        type="button"
                        onClick={() => {
                          setProfileDropdownOpen(false);
                          signOut();
                        }}
                        className="w-full flex items-center gap-2.5 px-4 py-2 text-xs font-medium text-rose-600 hover:bg-rose-50 transition-colors text-left cursor-pointer"
                      >
                        <span className="material-symbols-outlined text-[18px] text-rose-600">logout</span>
                        <span>Log Out</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Mobile Action Cluster */}
          <div className="flex sm:hidden items-center gap-2">
            {isOnboarded ? (
              <Link
                href="/dashboard"
                className="w-8 h-8 rounded-full bg-teal-700 hover:bg-teal-800 text-white flex items-center justify-center transition-all shadow-xs cursor-pointer relative"
                title="Dashboard"
                aria-label="Dashboard"
              >
                <span className="material-symbols-outlined text-[18px]">person</span>
                <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-500 ring-2 ring-white"></span>
              </Link>
            ) : (
              <button
                type="button"
                onClick={openSignIn}
                className="text-xs font-medium px-2.5 py-1 rounded-full text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
              >
                Sign In
              </button>
            )}

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
              aria-label="Toggle menu"
            >
              <span className="material-symbols-outlined text-[22px]">
                {mobileMenuOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Drawer */}
      {mobileMenuOpen && (
        <div className="max-w-6xl mx-auto mt-2 px-6 py-4 rounded-3xl bg-white/95 backdrop-blur-md border border-slate-200/80 shadow-lg pointer-events-auto flex flex-col gap-3 animate-page-fade sm:hidden">
          <Link
            href="/ai-employees"
            onClick={() => setMobileMenuOpen(false)}
            className={`text-sm font-medium py-1.5 px-3 rounded-xl ${
              pathname?.startsWith("/ai-employee")
                ? "text-teal-800 bg-teal-50 font-semibold"
                : "text-slate-700 hover:text-teal-700 hover:bg-slate-50"
            }`}
          >
            AI Employee
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
            {isOnboarded ? (
              <>
                <div className="px-2 py-1">
                  <p className="text-xs font-bold text-slate-900 truncate">
                    {profile?.businessName || "My Business"}
                  </p>
                  <p className="text-[11px] text-slate-500 truncate">
                    {profile?.ownerName || user?.name || "Business Boss"} · {profile?.subCategory || "Retail"}
                  </p>
                </div>
                <Link
                  href="/dashboard"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center py-2.5 rounded-full bg-teal-700 hover:bg-teal-800 text-white text-sm font-semibold flex items-center justify-center gap-2 transition-colors shadow-xs"
                >
                  <span className="material-symbols-outlined text-[18px]">dashboard</span>
                  <span>Go to Dashboard</span>
                </Link>
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    signOut();
                  }}
                  className="w-full text-center py-2 rounded-full border border-slate-200 text-sm font-medium text-rose-600 hover:bg-rose-50 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[18px]">logout</span>
                  <span>Log Out</span>
                </button>
              </>
            ) : (
              <>
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    openSignIn();
                  }}
                  className="w-full text-center py-2 rounded-full border border-slate-200 text-sm font-medium text-slate-800 hover:bg-slate-50 transition-colors cursor-pointer"
                >
                  Sign In
                </button>
                <Link
                  href="/book-a-demo"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center py-2 rounded-full bg-slate-900 text-white text-sm font-medium hover:bg-slate-800 shadow-sm cursor-pointer"
                >
                  Book a Demo
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
