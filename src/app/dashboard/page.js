"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useOnboarding } from "@/context/OnboardingContext";
import {
  ShoppingBag,
  Briefcase,
  HelpCircle,
  Search,
  Bell,
  Calendar,
  Download,
  Mail,
  Check,
  CheckCircle2,
  Phone,
  LogOut,
  ChevronDown,
  Sparkles,
  Bot,
  Menu,
  X,
  ExternalLink,
  MessageSquare,
  Send,
  Zap,
  ShieldCheck,
  Clock,
  RefreshCw,
  TrendingDown,
  Layers,
  SlidersHorizontal
} from "lucide-react";

const PAIN_POINT_CONFIG = {
  late_inquiries: {
    title: "Late-Night Inquiries Lost",
    mmTitle: "ညဘက် Customer မေးခွန်းများ",
    tagline: "24/7 Night Watcher Active (10:00 PM – 08:00 AM)",
    metric: "418 captured after-hours",
    benefit: "Zero dropped leads while you sleep",
    icon: Clock,
    color: "teal"
  },
  turnover: {
    title: "High Staff Turnover",
    mmTitle: "အရောင်းဝန်ထမ်း ခဏခဏ အသစ်လဲခြင်း",
    tagline: "Permanent SOP & Catalog Memory",
    metric: "100% SOP Preserved",
    benefit: "Never retrain sales knowledge again",
    icon: RefreshCw,
    color: "slate"
  },
  pricing_mistakes: {
    title: "Price & Stock Misquotes",
    mmTitle: "ဈေးနှုန်းနှင့် Stock အချက်အလက်များ",
    tagline: "Live Catalog Sync Engine",
    metric: "0 misquotes recorded",
    benefit: "Real-time automated price synchronization",
    icon: TrendingDown,
    color: "amber"
  },
  ad_content: {
    title: "Ad Copy & Photos Overhead",
    mmTitle: "ကြော်ညာစာသားနှင့် ပုံဖန်တီးခြင်း",
    tagline: "Ad Studio Creative Generator",
    metric: "25 Ad Credits ready",
    benefit: "Instant Burmese marketing copy & studio visuals",
    icon: Sparkles,
    color: "teal"
  }
};

const CHANNEL_CONFIG = {
  messenger: {
    name: "Facebook Messenger",
    icon: MessageSquare,
    badge: "Connected",
    statusColor: "emerald",
    responseTime: "0.9s",
    activeCount: "1,420 msgs"
  },
  telegram: {
    name: "Telegram Bot",
    icon: Send,
    badge: "Connected",
    statusColor: "emerald",
    responseTime: "1.1s",
    activeCount: "860 msgs"
  },
  tiktok: {
    name: "TikTok Direct",
    icon: Zap,
    badge: "Connected",
    statusColor: "emerald",
    responseTime: "1.3s",
    activeCount: "410 msgs"
  },
  viber: {
    name: "Viber Community",
    icon: MessageSquare,
    badge: "Connected",
    statusColor: "emerald",
    responseTime: "1.4s",
    activeCount: "290 msgs"
  },
  instagram: {
    name: "Instagram Direct",
    icon: Sparkles,
    badge: "Connected",
    statusColor: "emerald",
    responseTime: "1.0s",
    activeCount: "630 msgs"
  }
};

const TEAM_SIZE_LABELS = {
  solo: { label: "Solo Boss", staff: "1 person operation" },
  small: { label: "Small Team", staff: "2–5 team staff" },
  growing: { label: "Growing Team", staff: "6–15 team staff" },
  enterprise: { label: "Enterprise", staff: "16+ team staff" }
};

export default function DashboardPage() {
  const router = useRouter();
  const { signOut, openOnboarding, profile: contextProfile } = useOnboarding();

  // Profile state from context or localStorage
  const [localProfile, setLocalProfile] = useState(() => {
    if (typeof window !== "undefined") {
      try {
        const stored = localStorage.getItem("bnb_business_profile");
        if (stored) return JSON.parse(stored);
      } catch (err) {
        console.error("Error reading initial profile", err);
      }
    }
    return {
      ownerName: "Ko Myo",
      businessName: "Boss Fashion & Boutique",
      businessType: "retail",
      subCategory: "Fashion & Apparel",
      teamSize: "small",
      painPoints: ["late_inquiries", "turnover", "pricing_mistakes"],
      channels: ["messenger", "telegram"],
      dailyVolume: "30-100",
      authMethod: "google",
      email: "boss@fashionhouse.com",
      phone: "+95 9442508508",
      isPhoneVerified: true,
      isEmailVerified: true,
      createdAt: "2026-10-15T00:00:00.000Z"
    };
  });

  const profile = contextProfile || localProfile;

  const [activeNav, setActiveNav] = useState("dashboard");
  const [selectedDay, setSelectedDay] = useState("Tue");
  const [dateRange, setDateRange] = useState("Last 30 days");
  const [dateDropdownOpen, setDateDropdownOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  // AI Assistant Diagnostics State
  const [aiResponse, setAiResponse] = useState(null);
  const [isAiThinking, setIsAiThinking] = useState(false);
  const [exportNotice, setExportNotice] = useState(false);

  // Phone OTP Verification Modal
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [otpCode, setOtpCode] = useState("");
  const [isVerifyingOtp, setIsVerifyingOtp] = useState(false);
  const [otpSuccess, setOtpSuccess] = useState(false);

  // Sync profile when storage updates
  useEffect(() => {
    const handleSync = () => {
      if (typeof window !== "undefined") {
        try {
          const stored = localStorage.getItem("bnb_business_profile");
          if (stored) {
            setLocalProfile(JSON.parse(stored));
          }
        } catch (err) {
          console.error("Failed to read updated profile", err);
        }
      }
    };

    window.addEventListener("storage", handleSync);
    window.addEventListener("bnb-auth-change", handleSync);

    return () => {
      window.removeEventListener("storage", handleSync);
      window.removeEventListener("bnb-auth-change", handleSync);
    };
  }, []);

  const handleSignOut = () => {
    signOut();
    router.push("/");
  };

  const handleVerifyOtp = (e) => {
    e.preventDefault();
    if (otpCode.length !== 6) return;
    setIsVerifyingOtp(true);
    setTimeout(() => {
      setIsVerifyingOtp(false);
      setOtpSuccess(true);
      const updated = { ...profile, isPhoneVerified: true };
      setLocalProfile(updated);
      if (typeof window !== "undefined") {
        localStorage.setItem("bnb_business_profile", JSON.stringify(updated));
        window.dispatchEvent(new Event("bnb-auth-change"));
      }
      setTimeout(() => {
        setShowOtpModal(false);
        setOtpSuccess(false);
        setOtpCode("");
      }, 1200);
    }, 600);
  };

  const handleTriggerAi = (promptTopic) => {
    setIsAiThinking(true);
    setAiResponse(null);

    setTimeout(() => {
      setIsAiThinking(false);
      const isRetail = profile.businessType === "retail";

      if (promptTopic.includes("night") || promptTopic.includes("late")) {
        setAiResponse(
          `Between 10:00 PM and 8:00 AM, your BnB Bot handled 34 customer chats across ${profile.channels?.join(" & ") || "Messenger"}. 12 orders were pre-confirmed with 0 dropped inquiries.`
        );
      } else if (promptTopic.includes("stock") || promptTopic.includes("pricing") || promptTopic.includes("catalog")) {
        setAiResponse(
          isRetail
            ? `Active catalog for ${profile.subCategory} has 54 synchronized SKUs. Zero misquoted prices recorded across all live conversations.`
            : `All booking schedules and service packages for ${profile.subCategory} are synchronized with live inquiry slots.`
        );
      } else if (promptTopic.includes("speed") || promptTopic.includes("response")) {
        setAiResponse(
          `Current bot response latency is averaging 1.12 seconds. Human handover escalation queue is completely empty (0 pending manual flags).`
        );
      } else {
        setAiResponse(
          `BnB Bot is operating at 96.4% autonomous resolution for ${profile.businessName}. Today: 48 automated conversations resolved without requiring your team's manual intervention.`
        );
      }
    }, 550);
  };

  const handleExport = () => {
    setExportNotice(true);
    setTimeout(() => setExportNotice(false), 2400);
  };

  const isRetail = profile.businessType === "retail";
  const teamInfo = TEAM_SIZE_LABELS[profile.teamSize] || TEAM_SIZE_LABELS.small;

  // Day-of-week activity distribution
  const daysData = [
    { day: "Sun", height: 45, count: "1,420" },
    { day: "Mon", height: 60, count: "2,180" },
    { day: "Tue", height: 88, count: "3,840", active: true },
    { day: "Wed", height: 50, count: "1,950" },
    { day: "Thu", height: 65, count: "2,410" },
    { day: "Fri", height: 75, count: "2,980" },
    { day: "Sat", height: 92, count: "4,120" }
  ];

  // Dynamic products / services based on onboarding archetype
  const retailDeliverables = [
    {
      id: "#ORD-9421",
      item: "Traditional Silk Longyi (Midnight Blue)",
      category: "Fashion & Apparel",
      platform: "Messenger",
      customer: "Daw Hla Hla",
      status: "Automated Checkout",
      amount: "68,000 MMK",
      time: "4 mins ago"
    },
    {
      id: "#ORD-9418",
      item: "Korean Floral Linen Shirt (Size M)",
      category: "Fashion & Apparel",
      platform: "Telegram",
      customer: "Ko Aung Thu",
      status: "Stock Confirmed & Packed",
      amount: "42,000 MMK",
      time: "18 mins ago"
    },
    {
      id: "#ORD-9415",
      item: "Premium Leather Crossbody Bag",
      category: "Fancy & Accessories",
      platform: "Messenger",
      customer: "Ma Zin Mar",
      status: "Payment Slip Verified",
      amount: "85,000 MMK",
      time: "36 mins ago"
    },
    {
      id: "#ORD-9409",
      item: "Summer Cotton Blouse Set",
      category: "Fashion & Apparel",
      platform: "TikTok",
      customer: "Ma Thiri",
      status: "Auto Inquiry Answered",
      amount: "35,000 MMK",
      time: "1 hr ago"
    }
  ];

  const serviceDeliverables = [
    {
      id: "#BKG-3104",
      item: "Royal Aromatherapy Herbal Spa (90 min)",
      category: "Beauty Salon & Spa",
      platform: "Messenger",
      customer: "Ma Khin Myint",
      status: "Appointment Confirmed",
      amount: "55,000 MMK",
      time: "6 mins ago"
    },
    {
      id: "#BKG-3098",
      item: "Comprehensive Health & Skin Consultation",
      category: "Medical Clinic & Health",
      platform: "Telegram",
      customer: "U Thein Lwin",
      status: "Intake Questionnaire Done",
      amount: "40,000 MMK",
      time: "24 mins ago"
    },
    {
      id: "#BKG-3091",
      item: "Full Hair Rebonding & Treatment Package",
      category: "Beauty Salon & Spa",
      platform: "Messenger",
      customer: "Daw Nilar",
      status: "Deposit Verified",
      amount: "90,000 MMK",
      time: "48 mins ago"
    },
    {
      id: "#BKG-3085",
      item: "Weekend Consultation Slot",
      category: "Consulting & Agency",
      platform: "Viber",
      customer: "Ko Kyaw San",
      status: "Calendar Slot Synced",
      amount: "30,000 MMK",
      time: "1 hr ago"
    }
  ];

  const activeDeliverables = isRetail ? retailDeliverables : serviceDeliverables;

  // Compute calculated metrics based on daily volume collected in onboarding
  const volumeMultiplier =
    profile.dailyVolume === "300+"
      ? 4.5
      : profile.dailyVolume === "100-300"
      ? 2.8
      : profile.dailyVolume === "30-100"
      ? 1.4
      : 0.8;

  const totalInquiries = Math.round(2480 * volumeMultiplier).toLocaleString();
  const automatedResolutionCount = Math.round(2390 * volumeMultiplier).toLocaleString();
  const estimatedHoursSaved = Math.round(184 * volumeMultiplier);
  const calculatedRevenue = (18.6 * volumeMultiplier).toFixed(1);

  return (
    <div className="min-h-screen bg-[#f8f9ff] text-slate-900 flex font-sans antialiased selection:bg-teal-100 selection:text-teal-900">
      {/* ============================================================== */}
      {/* 1. LEFT SIDEBAR (BNB BRAND DESIGN — NO SHADOWS, CRISP BORDERS) */}
      {/* ============================================================== */}
      <aside
        className={`fixed inset-y-0 left-0 z-40 w-64 bg-white border-r border-slate-100 flex flex-col justify-between transition-transform duration-200 lg:translate-x-0 ${
          mobileSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col flex-1 overflow-y-auto p-4 space-y-6">
          {/* BnB Logo & Brand Header */}
          <div className="flex items-center justify-between px-2 pt-1">
            <Link href="/" className="flex items-center gap-2.5 group">
              <span className="w-8 h-8 rounded-xl bg-teal-700 text-white flex items-center justify-center font-bold text-sm shadow-none group-hover:bg-teal-800 transition-colors">
                B
              </span>
              <div className="flex flex-col">
                <span className="text-base font-extrabold tracking-tight text-slate-900 leading-tight">
                  Boss &amp; Bots
                </span>
                <span className="text-[10px] font-semibold text-teal-700 tracking-wide uppercase">
                  Autonomous SaaS
                </span>
              </div>
            </Link>
            <button
              type="button"
              onClick={() => setMobileSidebarOpen(false)}
              className="lg:hidden p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-50"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Business Workspace Badge (Onboarding Data) */}
          <div className="mx-1 px-3 py-2.5 rounded-xl bg-slate-50/80 border border-slate-100 flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-700 font-bold text-xs shrink-0">
              {profile.businessName ? profile.businessName.charAt(0) : "B"}
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-xs font-bold text-slate-900 truncate">
                {profile.businessName || "My Business"}
              </p>
              <p className="text-[10px] text-teal-700 font-medium truncate flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-600 inline-block animate-pulse"></span>
                <span>{isRetail ? "AI Sales Rep" : "AI Service Concierge"}</span>
              </p>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-1 text-xs font-medium text-slate-600">
            {/* Dashboard / Overview */}
            <button
              type="button"
              onClick={() => {
                setActiveNav("dashboard");
                setActiveTab("overview");
              }}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl transition-all ${
                activeNav === "dashboard"
                  ? "bg-teal-50 text-teal-800 font-semibold border border-teal-100/60"
                  : "hover:bg-slate-50 text-slate-600 border border-transparent"
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="w-4 h-4 flex items-center justify-center text-teal-700">
                  <Layers className="w-4 h-4 stroke-[2.2]" />
                </span>
                <span>Dashboard Overview</span>
              </div>
            </button>

            {/* AI Employees (Bots) */}
            <button
              type="button"
              onClick={() => {
                setActiveNav("ai_employees");
                setActiveTab("safeguards");
              }}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl transition-all ${
                activeNav === "ai_employees"
                  ? "bg-teal-50 text-teal-800 font-semibold border border-teal-100/60"
                  : "hover:bg-slate-50 text-slate-600 border border-transparent"
              }`}
            >
              <div className="flex items-center gap-3">
                <Bot className="w-4 h-4 text-slate-500" />
                <span>AI Employees</span>
              </div>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-teal-100/80 text-teal-900">
                1 Active
              </span>
            </button>

            {/* Connected Channels */}
            <button
              type="button"
              onClick={() => {
                setActiveNav("channels");
                setActiveTab("channels");
              }}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl transition-all ${
                activeNav === "channels"
                  ? "bg-teal-50 text-teal-800 font-semibold border border-teal-100/60"
                  : "hover:bg-slate-50 text-slate-600 border border-transparent"
              }`}
            >
              <div className="flex items-center gap-3">
                <MessageSquare className="w-4 h-4 text-slate-500" />
                <span>Connected Channels</span>
              </div>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700">
                {profile.channels?.length || 2}
              </span>
            </button>

            {/* Live Inquiries / Leads */}
            <button
              type="button"
              onClick={() => {
                setActiveNav("inquiries");
                setActiveTab("overview");
              }}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl transition-all ${
                activeNav === "inquiries"
                  ? "bg-teal-50 text-teal-800 font-semibold border border-teal-100/60"
                  : "hover:bg-slate-50 text-slate-600 border border-transparent"
              }`}
            >
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-slate-500" />
                <span>Inquiries &amp; Leads</span>
              </div>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                Live
              </span>
            </button>

            {/* Product Catalog / Services Database */}
            <button
              type="button"
              onClick={() => {
                setActiveNav("catalog");
                handleTriggerAi("catalog");
              }}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all ${
                activeNav === "catalog"
                  ? "bg-teal-50 text-teal-800 font-semibold border border-teal-100/60"
                  : "hover:bg-slate-50 text-slate-600 border border-transparent"
              }`}
            >
              {isRetail ? (
                <ShoppingBag className="w-4 h-4 text-slate-500" />
              ) : (
                <Briefcase className="w-4 h-4 text-slate-500" />
              )}
              <span>{isRetail ? "Product Catalog" : "Service Packages"}</span>
            </button>

            {/* Ad Studio Burmese Generator */}
            <button
              type="button"
              onClick={() => {
                setActiveNav("ad_studio");
                handleTriggerAi("Ad Studio copy generation");
              }}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl transition-all ${
                activeNav === "ad_studio"
                  ? "bg-teal-50 text-teal-800 font-semibold border border-teal-100/60"
                  : "hover:bg-slate-50 text-slate-600 border border-transparent"
              }`}
            >
              <div className="flex items-center gap-3">
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span>Ad Studio (AI Copy)</span>
              </div>
              <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-amber-50 text-amber-700 border border-amber-200/60">
                25 pts
              </span>
            </button>
          </nav>

          {/* Lower utility links */}
          <div className="pt-4 border-t border-slate-100 space-y-1 text-xs font-medium text-slate-600">
            <button
              type="button"
              onClick={() => setShowOtpModal(true)}
              className="w-full flex items-center justify-between px-3 py-2 rounded-xl hover:bg-slate-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-slate-500" />
                <span>Phone Verification</span>
              </div>
              {profile.isPhoneVerified ? (
                <Check className="w-3.5 h-3.5 text-emerald-600 stroke-[2.5]" />
              ) : (
                <span className="text-[10px] text-amber-600 font-bold">Pending</span>
              )}
            </button>

            <button
              type="button"
              onClick={() => openOnboarding()}
              className="w-full flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-slate-50 text-slate-600 transition-colors"
            >
              <SlidersHorizontal className="w-4 h-4 text-slate-500" />
              <span>Redo Onboarding Setup</span>
            </button>

            <Link
              href="/contact"
              className="w-full flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-slate-50 text-slate-600 transition-colors"
            >
              <HelpCircle className="w-4 h-4 text-slate-500" />
              <span>BnB Support (UTS)</span>
            </Link>
          </div>
        </div>

        {/* Bottom Plan Card (From Design.md: Growth Plan 400,000 MMK) */}
        <div className="p-3">
          <div className="rounded-2xl p-4 bg-slate-900 text-white relative overflow-hidden shadow-none border border-slate-800">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-teal-400">
                Growth Plan
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-teal-900/60 text-teal-300 font-mono">
                Active Trial
              </span>
            </div>
            <h4 className="text-xs font-bold leading-tight">
              Unlimited Social Channels
            </h4>
            <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">
              400,000 MMK/mo. Full catalog sync &amp; multi-user access.
            </p>
            <Link
              href="/pricing"
              className="mt-3 block text-center py-2 px-3 rounded-xl bg-teal-700 hover:bg-teal-600 text-white text-xs font-semibold transition-colors shadow-none"
            >
              View Plan Options
            </Link>
          </div>
        </div>
      </aside>

      {/* Backdrop for mobile sidebar */}
      {mobileSidebarOpen && (
        <div
          onClick={() => setMobileSidebarOpen(false)}
          className="fixed inset-0 z-30 bg-slate-900/30 lg:hidden backdrop-blur-xs"
        />
      )}

      {/* ============================================================== */}
      {/* 2. MAIN WORKSPACE AREA                                         */}
      {/* ============================================================== */}
      <div className="flex-1 lg:pl-64 flex flex-col min-w-0">
        {/* Top Header Bar */}
        <header className="sticky top-0 z-20 bg-white/95 backdrop-blur-md border-b border-slate-100 px-4 sm:px-6 py-2.5 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 flex-1 max-w-md">
            <button
              type="button"
              onClick={() => setMobileSidebarOpen(true)}
              className="lg:hidden p-1.5 text-slate-500 hover:text-slate-800 rounded-lg hover:bg-slate-100"
            >
              <Menu className="w-5 h-5" />
            </button>

            {/* Global Search with ⌘K */}
            <div className="relative w-full">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder={`Search ${profile.businessName || "store"} catalog, orders, chats...`}
                className="w-full pl-8 pr-10 py-1.5 rounded-xl bg-slate-50 border-0 focus:bg-white focus:ring-1 focus:ring-teal-700 text-xs text-slate-700 outline-none transition-all placeholder:text-slate-400 font-medium"
              />
              <span className="absolute right-2.5 top-1/2 -translate-y-1/2 px-1.5 py-0.5 rounded text-[10px] font-mono text-slate-400 bg-white border border-slate-200/80">
                ⌘K
              </span>
            </div>
          </div>

          {/* Right cluster: Active Bot Indicator, Notifications, Profile Avatar */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Live Bot Pulse Badge */}
            <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 border border-teal-100/80 text-teal-800 text-[11px] font-semibold">
              <span className="w-2 h-2 rounded-full bg-teal-600 animate-pulse"></span>
              <span>Bot 24/7 Active</span>
            </div>

            {/* Notifications Button */}
            <button
              type="button"
              onClick={() => handleTriggerAi("quick alert diagnostic")}
              className="relative w-8 h-8 rounded-full flex items-center justify-center text-slate-500 hover:text-slate-800 hover:bg-slate-50 transition-colors"
              title="Notifications"
            >
              <Bell className="w-4 h-4" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-teal-600"></span>
            </button>

            {/* User Business Profile Dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                className="flex items-center gap-2 p-1 rounded-full hover:bg-slate-50 transition-colors cursor-pointer"
              >
                <div className="w-8 h-8 rounded-full bg-teal-700 text-white flex items-center justify-center font-bold text-xs shadow-none">
                  {profile.ownerName ? profile.ownerName.charAt(0) : "B"}
                </div>
              </button>

              {userDropdownOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-white rounded-2xl border border-slate-100 p-2 z-50 animate-page-fade text-xs shadow-xl shadow-slate-200/40">
                  <div className="px-3 py-2.5 border-b border-slate-100">
                    <p className="font-bold text-slate-900 text-sm truncate">
                      {profile.businessName || "My Business"}
                    </p>
                    <p className="text-[11px] text-slate-500 truncate mt-0.5">
                      {profile.ownerName || "Store Boss"} · {profile.subCategory}
                    </p>
                    <span className="inline-block mt-1 text-[10px] font-semibold px-2 py-0.5 rounded bg-teal-50 text-teal-800 border border-teal-100">
                      {teamInfo.label} ({teamInfo.staff})
                    </span>
                  </div>

                  <div className="py-1">
                    <button
                      type="button"
                      onClick={() => {
                        setUserDropdownOpen(false);
                        openOnboarding();
                      }}
                      className="w-full text-left flex items-center gap-2 px-3 py-1.5 rounded-lg hover:bg-slate-50 text-slate-700"
                    >
                      <SlidersHorizontal className="w-3.5 h-3.5 text-slate-400" />
                      <span>Rerun Setup Wizard</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        setUserDropdownOpen(false);
                        setShowOtpModal(true);
                      }}
                      className="w-full text-left flex items-center justify-between px-3 py-1.5 rounded-lg hover:bg-slate-50 text-slate-700"
                    >
                      <span className="flex items-center gap-2">
                        <Phone className="w-3.5 h-3.5 text-slate-400" />
                        <span>Phone Verification</span>
                      </span>
                      {profile.isPhoneVerified ? (
                        <span className="text-[10px] text-emerald-600 font-semibold">
                          Verified
                        </span>
                      ) : (
                        <span className="text-[10px] text-amber-600 font-semibold">
                          Verify Now
                        </span>
                      )}
                    </button>

                    <Link
                      href="/"
                      onClick={() => setUserDropdownOpen(false)}
                      className="flex items-center gap-2 px-3 py-1.5 rounded-lg hover:bg-slate-50 text-slate-700"
                    >
                      <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                      <span>View Public Website</span>
                    </Link>
                  </div>

                  <div className="pt-1 border-t border-slate-100">
                    <button
                      type="button"
                      onClick={() => {
                        setUserDropdownOpen(false);
                        handleSignOut();
                      }}
                      className="w-full flex items-center gap-2 px-3 py-1.5 text-xs font-semibold text-rose-600 hover:bg-rose-50 rounded-lg transition-colors cursor-pointer"
                    >
                      <LogOut className="w-3.5 h-3.5" />
                      <span>Sign Out (Clear Session)</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* ============================================================== */}
        {/* 3. DASHBOARD MAIN VIEWPORT                                     */}
        {/* ============================================================== */}
        <div className="p-4 sm:p-6 lg:p-8 space-y-6 max-w-7xl">
          {/* ============================================================== */}
          {/* HERO GREETING BANNER WITH BIG CLEAR FONTS                      */}
          {/* ============================================================== */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-100 shadow-none flex flex-col md:flex-row md:items-end justify-between gap-6 relative overflow-hidden">
            {/* Subtle background ambient teal wash */}
            <div className="absolute right-0 top-0 w-80 h-80 bg-teal-50/50 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>

            <div className="space-y-2 relative z-10">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-teal-50 border border-teal-100 text-teal-800 text-xs font-bold tracking-wide">
                  {isRetail ? "RETAIL SALES AUTONOMY" : "SERVICE BOOKING AUTONOMY"}
                </span>
                <span className="text-xs text-slate-400">·</span>
                <span className="text-xs font-semibold text-slate-500">
                  {profile.subCategory}
                </span>
              </div>

              {/* CLEAR BIG FONT FOR BUSINESS NAME */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 leading-tight">
                {profile.businessName || "My Business"}
              </h1>

              <p className="text-sm sm:text-base text-slate-600 max-w-2xl font-normal leading-relaxed">
                Welcome back,{" "}
                <span className="font-semibold text-slate-900">
                  {profile.ownerName || "Store Boss"}
                </span>
                . Your BnB AI Employee is actively handling customer conversations across{" "}
                <span className="font-semibold text-teal-800">
                  {profile.channels?.map((c) => CHANNEL_CONFIG[c]?.name || c).join(" & ") ||
                    "Facebook Messenger & Telegram"}
                </span>
                .
              </p>
            </div>

            {/* Action Cluster: Date Selector & Export */}
            <div className="flex items-center flex-wrap gap-2.5 relative z-10">
              {/* Date Filter Pill */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setDateDropdownOpen(!dateDropdownOpen)}
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-100 text-xs font-semibold text-slate-700 hover:bg-slate-100 transition-colors shadow-none cursor-pointer"
                >
                  <Calendar className="w-3.5 h-3.5 text-teal-700" />
                  <span>{dateRange}</span>
                  <ChevronDown className="w-3 h-3 text-slate-400 ml-1" />
                </button>
                {dateDropdownOpen && (
                  <div className="absolute right-0 mt-1 w-44 bg-white border border-slate-100 rounded-xl p-1 z-30 text-xs shadow-lg shadow-slate-200/50 animate-page-fade">
                    {["Last 7 days", "Last 30 days", "This Quarter", "Year to Date"].map((r) => (
                      <button
                        key={r}
                        type="button"
                        onClick={() => {
                          setDateRange(r);
                          setDateDropdownOpen(false);
                        }}
                        className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                          dateRange === r
                            ? "bg-teal-50 text-teal-800 font-bold"
                            : "hover:bg-slate-50 text-slate-700"
                        }`}
                      >
                        {r}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Redo / Setup Trigger */}
              <button
                type="button"
                onClick={() => openOnboarding()}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-100 hover:bg-slate-100 text-xs font-semibold text-slate-700 transition-colors shadow-none cursor-pointer"
              >
                <SlidersHorizontal className="w-3.5 h-3.5 text-slate-500" />
                <span>Edit Setup</span>
              </button>

              {/* Export Button */}
              <button
                type="button"
                onClick={handleExport}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-all shadow-none cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Export Report</span>
              </button>
            </div>
          </div>

          {/* Export Toast Notification */}
          {exportNotice && (
            <div className="p-3.5 rounded-2xl bg-teal-50 text-teal-900 text-xs font-semibold flex items-center justify-between border border-teal-100 animate-page-fade">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-700" />
                <span>
                  Metrics for <strong>{profile.businessName}</strong> exported successfully (CSV).
                </span>
              </span>
              <button
                type="button"
                onClick={() => setExportNotice(false)}
                className="text-teal-700 p-1 hover:bg-teal-100 rounded-lg"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          )}

          {/* ============================================================== */}
          {/* 4. TOP 4 KPI METRIC CARDS WITH VERY CLEAR BIG NUMERICAL FONTS */}
          {/* ============================================================== */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Metric 1: Total Inquiries Handled */}
            <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-100 shadow-none flex flex-col justify-between">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Inquiries Handled
                </span>
                <span className="w-8 h-8 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center">
                  <MessageSquare className="w-4 h-4" />
                </span>
              </div>
              <div>
                {/* CLEAR BIG FONT: 4XL / 5XL */}
                <p className="text-4xl sm:text-5xl font-black tracking-tight text-slate-900">
                  {totalInquiries}
                </p>
                <div className="flex items-center gap-1.5 mt-2">
                  <span className="inline-flex items-center text-xs font-bold text-teal-700 bg-teal-50 px-2 py-0.5 rounded-md">
                    100% Automated
                  </span>
                  <span className="text-xs text-slate-400">0 dropped chats</span>
                </div>
              </div>
              <p className="text-[11px] text-slate-400 mt-3 pt-3 border-t border-slate-50">
                Daily volume: <strong>{profile.dailyVolume || "30-100"}</strong> per day
              </p>
            </div>

            {/* Metric 2: Autonomous Resolution Rate */}
            <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-100 shadow-none flex flex-col justify-between">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Resolution Rate
                </span>
                <span className="w-8 h-8 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center">
                  <ShieldCheck className="w-4 h-4" />
                </span>
              </div>
              <div>
                {/* CLEAR BIG FONT */}
                <p className="text-4xl sm:text-5xl font-black tracking-tight text-slate-900">
                  96.4%
                </p>
                <div className="flex items-center gap-1.5 mt-2">
                  <span className="inline-flex items-center text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md">
                    ▲ +4.2% vs human
                  </span>
                  <span className="text-xs text-slate-400">without escalation</span>
                </div>
              </div>
              <p className="text-[11px] text-slate-400 mt-3 pt-3 border-t border-slate-50">
                Target SOP benchmark: 90%
              </p>
            </div>

            {/* Metric 3: Bot Response Speed */}
            <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-100 shadow-none flex flex-col justify-between">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Avg Response Time
                </span>
                <span className="w-8 h-8 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center">
                  <Clock className="w-4 h-4" />
                </span>
              </div>
              <div>
                {/* CLEAR BIG FONT */}
                <p className="text-4xl sm:text-5xl font-black tracking-tight text-slate-900">
                  1.18s
                </p>
                <div className="flex items-center gap-1.5 mt-2">
                  <span className="inline-flex items-center text-xs font-bold text-teal-700 bg-teal-50 px-2 py-0.5 rounded-md">
                    Instant 24/7
                  </span>
                  <span className="text-xs text-slate-400">vs 45m human avg</span>
                </div>
              </div>
              <p className="text-[11px] text-slate-400 mt-3 pt-3 border-t border-slate-50">
                Night shift response speed: 1.1s
              </p>
            </div>

            {/* Metric 4: Estimated Hours Saved */}
            <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-100 shadow-none flex flex-col justify-between">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Work Hours Saved
                </span>
                <span className="w-8 h-8 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center">
                  <Sparkles className="w-4 h-4" />
                </span>
              </div>
              <div>
                {/* CLEAR BIG FONT */}
                <p className="text-4xl sm:text-5xl font-black tracking-tight text-slate-900">
                  {estimatedHoursSaved} hrs
                </p>
                <div className="flex items-center gap-1.5 mt-2">
                  <span className="inline-flex items-center text-xs font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-md">
                    ≈ 1.8 Full-time Staff
                  </span>
                </div>
              </div>
              <p className="text-[11px] text-slate-400 mt-3 pt-3 border-t border-slate-50">
                Team configuration: <strong>{teamInfo.label}</strong>
              </p>
            </div>
          </div>

          {/* ============================================================== */}
          {/* 5. ONBOARDING DATA SPOTLIGHT: ACTIVE PAIN POINT PROTECTIONS   */}
          {/* ============================================================== */}
          <div className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-100 shadow-none space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-teal-700">
                  Automated Safeguards
                </span>
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 mt-0.5">
                  Pain Points Resolved via Onboarding
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Active automations deployed specifically for {profile.businessName} based on
                  your onboarding selections.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-slate-500">
                  {profile.painPoints?.length || 0} of 4 automations active
                </span>
                <button
                  type="button"
                  onClick={() => openOnboarding()}
                  className="px-3 py-1.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors shadow-none cursor-pointer"
                >
                  Configure
                </button>
              </div>
            </div>

            {/* Grid of active pain point resolvers */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {Object.keys(PAIN_POINT_CONFIG).map((key) => {
                const conf = PAIN_POINT_CONFIG[key];
                const isSelected = profile.painPoints?.includes(key);
                const IconComponent = conf.icon;

                return (
                  <div
                    key={key}
                    className={`p-4 sm:p-5 rounded-2xl border transition-all ${
                      isSelected
                        ? "bg-white border-teal-200/80 shadow-none ring-1 ring-teal-500/10"
                        : "bg-slate-50/50 border-slate-100 opacity-60"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span
                        className={`w-8 h-8 rounded-xl flex items-center justify-center ${
                          isSelected
                            ? "bg-teal-50 text-teal-700"
                            : "bg-slate-100 text-slate-400"
                        }`}
                      >
                        <IconComponent className="w-4 h-4" />
                      </span>
                      {isSelected ? (
                        <span className="inline-flex items-center gap-1 text-[10px] font-bold text-teal-800 bg-teal-50 px-2 py-0.5 rounded-full border border-teal-200/60">
                          <Check className="w-3 h-3 stroke-[3]" />
                          Active
                        </span>
                      ) : (
                        <span className="text-[10px] font-medium text-slate-400">
                          Inactive
                        </span>
                      )}
                    </div>

                    <h3 className="text-sm font-bold text-slate-900 leading-tight">
                      {conf.title}
                    </h3>
                    <p className="text-[11px] text-slate-500 font-myanmar mt-0.5">
                      {conf.mmTitle}
                    </p>

                    <div className="mt-3 pt-3 border-t border-slate-100/80">
                      <p className="text-xs font-bold text-teal-900">
                        {isSelected ? conf.metric : "Available to enable"}
                      </p>
                      <p className="text-[11px] text-slate-500 mt-1 leading-snug">
                        {conf.benefit}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ============================================================== */}
          {/* 6. MAIN TWO-COLUMN SECTION (ANALYTICS & DELIVERABLES)          */}
          {/* ============================================================== */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* LEFT 8 COLUMNS: REVENUE / INQUIRIES SPLINE & DELIVERABLES */}
            <div className="lg:col-span-8 space-y-6">
              {/* CARD: Total Value Generated with Spline Area Chart */}
              <div className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-100 shadow-none">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Estimated Business Value Protected
                    </span>
                    <div className="flex items-baseline gap-3 mt-1">
                      {/* CLEAR BIG FONT FOR REVENUE */}
                      <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-slate-900">
                        {calculatedRevenue}M MMK
                      </h2>
                      <span className="inline-flex items-center gap-0.5 text-xs font-bold text-teal-700 bg-teal-50 px-2 py-0.5 rounded-md">
                        ▲ 28.4%
                      </span>
                    </div>
                  </div>

                  <span className="text-xs text-slate-400 font-medium">
                    Automated lead conversion &amp; sales intake
                  </span>
                </div>

                {/* SVG Spline Area Chart with Teal Gradient */}
                <div className="mt-6 relative h-48 w-full">
                  <svg className="w-full h-full overflow-visible" viewBox="0 0 500 160">
                    <defs>
                      <linearGradient id="bnbTealGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#0f766e" stopOpacity="0.25" />
                        <stop offset="100%" stopColor="#0f766e" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>

                    {/* Horizontal Guideline lines */}
                    <line
                      x1="0"
                      y1="20"
                      x2="500"
                      y2="20"
                      stroke="#f1f5f9"
                      strokeWidth="1"
                      strokeDasharray="3 3"
                    />
                    <line
                      x1="0"
                      y1="60"
                      x2="500"
                      y2="60"
                      stroke="#f1f5f9"
                      strokeWidth="1"
                      strokeDasharray="3 3"
                    />
                    <line
                      x1="0"
                      y1="100"
                      x2="500"
                      y2="100"
                      stroke="#f1f5f9"
                      strokeWidth="1"
                      strokeDasharray="3 3"
                    />
                    <line x1="0" y1="140" x2="500" y2="140" stroke="#e2e8f0" strokeWidth="1" />

                    {/* Area fill */}
                    <path
                      d="M 0 140 L 0 115 Q 50 110 80 108 T 150 72 T 220 94 T 290 52 T 360 76 T 430 60 T 500 28 L 500 140 Z"
                      fill="url(#bnbTealGradient)"
                    />

                    {/* Spline Line */}
                    <path
                      d="M 0 115 Q 50 110 80 108 T 150 72 T 220 94 T 290 52 T 360 76 T 430 60 T 500 28"
                      fill="none"
                      stroke="#0f766e"
                      strokeWidth="2.8"
                      strokeLinecap="round"
                    />

                    {/* Peak Dot */}
                    <circle cx="500" cy="28" r="5" fill="#0f766e" />
                    <circle cx="500" cy="28" r="9" fill="#0f766e" fillOpacity="0.2" />
                  </svg>

                  {/* Y-Axis Value Labels */}
                  <div className="absolute right-0 top-1 text-[10px] font-mono text-slate-400 space-y-7 pointer-events-none text-right">
                    <p>20M</p>
                    <p>15M</p>
                    <p>10M</p>
                    <p>0</p>
                  </div>

                  {/* X-Axis Date Labels */}
                  <div className="flex justify-between text-[11px] text-slate-400 pt-2 font-mono">
                    <span>1 Oct</span>
                    <span>8 Oct</span>
                    <span>15 Oct</span>
                    <span>22 Oct</span>
                    <span>Today</span>
                  </div>
                </div>

                {/* Sub-Card: Connected Channels Breakdown */}
                <div className="mt-6 pt-5 border-t border-slate-100">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-slate-900">
                      Channel Distribution for {profile.businessName}
                    </span>
                    <span className="text-[11px] text-slate-400">
                      Live webhook response
                    </span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {profile.channels?.map((channelKey) => {
                      const ch = CHANNEL_CONFIG[channelKey] || {
                        name: channelKey,
                        activeCount: "500 msgs",
                        responseTime: "1.2s"
                      };
                      return (
                        <div
                          key={channelKey}
                          className="p-3.5 rounded-xl bg-slate-50/80 border border-slate-100"
                        >
                          <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
                            <span className="font-semibold text-slate-800 truncate">
                              {ch.name}
                            </span>
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                          </div>
                          <p className="text-lg font-extrabold text-slate-900">
                            {ch.activeCount}
                          </p>
                          <p className="text-[10px] text-teal-700 font-semibold mt-0.5">
                            ⚡ {ch.responseTime} latency
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* CARD: Live Automated Deliverables (Tailored to Onboarding Archetype) */}
              <div className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-100 shadow-none space-y-4">
                <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-teal-700">
                      Live Deliverables Feed
                    </span>
                    <h3 className="text-base font-bold text-slate-900 mt-0.5">
                      {isRetail ? "Recent Automated Orders & Inquiries" : "Recent Bookings & Client Intake"}
                    </h3>
                  </div>

                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">
                    Category: {profile.subCategory}
                  </span>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse text-xs">
                    <thead>
                      <tr className="border-b border-slate-100 text-[10px] uppercase font-semibold text-slate-400 tracking-wider">
                        <th className="py-2.5 pr-4">Reference</th>
                        <th className="py-2.5 px-4">
                          {isRetail ? "Product / Order" : "Service Package"}
                        </th>
                        <th className="py-2.5 px-4">Customer</th>
                        <th className="py-2.5 px-4">Channel</th>
                        <th className="py-2.5 px-4">Status</th>
                        <th className="py-2.5 pl-4 text-right">Value</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-50 font-medium">
                      {activeDeliverables.map((item) => (
                        <tr key={item.id} className="hover:bg-slate-50/60 transition-colors">
                          <td className="py-3.5 pr-4 font-mono text-slate-400 font-semibold">
                            {item.id}
                          </td>
                          <td className="py-3.5 px-4">
                            <span className="font-bold text-slate-900 block truncate max-w-[220px]">
                              {item.item}
                            </span>
                            <span className="text-[10px] text-slate-400">{item.time}</span>
                          </td>
                          <td className="py-3.5 px-4 text-slate-700 font-semibold">
                            {item.customer}
                          </td>
                          <td className="py-3.5 px-4">
                            <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-600">
                              {item.platform}
                            </span>
                          </td>
                          <td className="py-3.5 px-4">
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-teal-50 text-teal-800 border border-teal-200/60">
                              <Check className="w-3 h-3 stroke-[2.5]" />
                              {item.status}
                            </span>
                          </td>
                          <td className="py-3.5 pl-4 text-right font-bold text-slate-900 font-mono">
                            {item.amount}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* RIGHT 4 COLUMNS: DAY-OF-WEEK BARS, GAUGE & AI ASSISTANT ORB */}
            <div className="lg:col-span-4 space-y-6">
              {/* CARD: Most Active Days Bar Chart */}
              <div className="p-6 rounded-3xl bg-white border border-slate-100 shadow-none">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Peak Engagement
                    </span>
                    <h3 className="text-sm font-bold text-slate-900 mt-0.5">
                      Weekly Inquiry Traffic
                    </h3>
                  </div>
                  <span className="text-xs font-mono text-teal-700 font-bold">
                    {selectedDay}: {daysData.find((d) => d.day === selectedDay)?.count}
                  </span>
                </div>

                {/* Day Bars in BnB Teal */}
                <div className="flex items-end justify-between h-36 pt-6 px-1">
                  {daysData.map((d) => {
                    const isSelected = selectedDay === d.day;
                    return (
                      <div
                        key={d.day}
                        onClick={() => setSelectedDay(d.day)}
                        className="flex flex-col items-center gap-2 flex-1 cursor-pointer group"
                      >
                        {/* Number Pill on Active Day */}
                        <div className="h-5 flex items-center justify-center">
                          {isSelected && (
                            <span className="text-[10px] font-bold text-teal-800 bg-teal-50 px-1.5 py-0.5 rounded border border-teal-200/60 animate-page-fade">
                              {d.count}
                            </span>
                          )}
                        </div>

                        {/* Bar */}
                        <div className="w-6 sm:w-7 bg-slate-100 rounded-lg flex items-end h-24 overflow-hidden">
                          <div
                            className={`w-full rounded-lg transition-all duration-300 ${
                              isSelected
                                ? "bg-teal-700 shadow-none"
                                : "bg-slate-200 group-hover:bg-teal-200"
                            }`}
                            style={{ height: `${d.height}%` }}
                          />
                        </div>

                        {/* Day Label */}
                        <span
                          className={`text-[10px] font-bold transition-colors ${
                            isSelected ? "text-teal-800" : "text-slate-400"
                          }`}
                        >
                          {d.day}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* CARD: Repeat Customer / Autonomous Resolution Rate Radial Gauge */}
              <div className="p-6 rounded-3xl bg-white border border-slate-100 shadow-none text-center">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-left">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Automation Index
                    </span>
                    <h3 className="text-sm font-bold text-slate-900 mt-0.5">
                      Direct Bot Conversions
                    </h3>
                  </div>
                  <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                    Excellent
                  </span>
                </div>

                {/* Semi-circular Gauge (SVG) */}
                <div className="relative w-48 h-28 mx-auto mt-3 flex items-end justify-center">
                  <svg className="w-48 h-28 overflow-visible" viewBox="0 0 200 110">
                    {/* Background Arc Ticks */}
                    <path
                      d="M 20 100 A 80 80 0 0 1 180 100"
                      fill="none"
                      stroke="#f1f5f9"
                      strokeWidth="12"
                      strokeLinecap="round"
                    />

                    {/* Active Teal Arc */}
                    <path
                      d="M 20 100 A 80 80 0 0 1 155 45"
                      fill="none"
                      stroke="#0f766e"
                      strokeWidth="12"
                      strokeDasharray="4 6"
                      strokeLinecap="round"
                    />
                  </svg>

                  {/* Centered Clear Big Font */}
                  <div className="absolute inset-0 flex flex-col items-center justify-end pb-1">
                    <span className="text-5xl font-black text-slate-900 tracking-tight">
                      96%
                    </span>
                  </div>
                </div>

                <p className="text-xs font-medium text-slate-600 mt-3">
                  Autonomous completion without human intervention
                </p>

                <button
                  type="button"
                  onClick={() => handleTriggerAi("conversion speed analysis")}
                  className="mt-3 px-4 py-1.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors shadow-none cursor-pointer"
                >
                  Run Bot Diagnostic
                </button>
              </div>

              {/* CARD: Autonomous BnB Assistant Diagnostic with Glowing Orb */}
              <div className="p-6 rounded-3xl bg-white border border-slate-100 shadow-none relative overflow-hidden">
                <div className="flex items-center justify-between pb-2">
                  <div className="flex items-center gap-2">
                    <Bot className="w-4 h-4 text-teal-700" />
                    <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wide">
                      BnB AI Employee Diagnostic
                    </h3>
                  </div>
                  <span className="text-[10px] font-bold text-teal-700 bg-teal-50 px-2 py-0.5 rounded-full border border-teal-100">
                    Live
                  </span>
                </div>

                {/* 3D Glowing Teal/Cyan Orb */}
                <div className="py-4 flex flex-col items-center justify-center">
                  <div
                    onClick={() => handleTriggerAi("night shift diagnostic")}
                    className="relative w-20 h-20 rounded-full cursor-pointer hover:scale-105 transition-transform duration-300"
                    title="Click to query live storefront diagnostic"
                  >
                    {/* Glowing outer aura */}
                    <div className="absolute inset-0 rounded-full bg-teal-500/20 blur-xl animate-pulse"></div>
                    {/* 3D sphere gradient */}
                    <div className="w-full h-full rounded-full bg-gradient-to-tr from-teal-800 via-teal-600 to-cyan-300 shadow-[inset_-8px_-8px_16px_rgba(0,0,0,0.35),inset_6px_6px_12px_rgba(255,255,255,0.7)]"></div>
                  </div>

                  <p className="text-xs font-bold text-slate-800 mt-3">
                    {profile.businessName} Bot Engine
                  </p>
                  <p className="text-[10px] text-slate-400">
                    Click sphere to test response &amp; safeguards
                  </p>
                </div>

                {/* Diagnostic Feedback */}
                {isAiThinking && (
                  <div className="p-3 rounded-xl bg-teal-50 text-xs text-teal-900 animate-pulse text-center font-medium">
                    Analyzing live channel signals for {profile.businessName}...
                  </div>
                )}

                {aiResponse && (
                  <div className="p-3.5 rounded-xl bg-teal-50/90 border border-teal-100 text-xs text-teal-950 space-y-1.5 animate-page-fade">
                    <p className="font-bold flex items-center gap-1.5 text-teal-900">
                      <Sparkles className="w-3.5 h-3.5 text-teal-700" />
                      <span>BnB Worker Diagnostic:</span>
                    </p>
                    <p className="text-[11px] leading-relaxed text-teal-950">{aiResponse}</p>
                  </div>
                )}

                {/* Quick Query Chips Tailored to Onboarding Setup */}
                <div className="flex flex-wrap gap-1.5 pt-3">
                  <button
                    type="button"
                    onClick={() => handleTriggerAi("night inquiry test")}
                    className="text-[10px] px-2.5 py-1 rounded-full bg-slate-50 hover:bg-slate-100 text-slate-600 border border-slate-200/60 font-semibold transition-colors cursor-pointer"
                  >
                    🌙 Night Shift Status
                  </button>
                  <button
                    type="button"
                    onClick={() => handleTriggerAi("catalog pricing sync")}
                    className="text-[10px] px-2.5 py-1 rounded-full bg-slate-50 hover:bg-slate-100 text-slate-600 border border-slate-200/60 font-semibold transition-colors cursor-pointer"
                  >
                    📦 Catalog &amp; SOP
                  </button>
                  <button
                    type="button"
                    onClick={() => handleTriggerAi("response speed")}
                    className="text-[10px] px-2.5 py-1 rounded-full bg-slate-50 hover:bg-slate-100 text-slate-600 border border-slate-200/60 font-semibold transition-colors cursor-pointer"
                  >
                    ⚡ Response Speed
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ============================================================== */}
      {/* 7. PHONE OTP VERIFICATION MODAL                                */}
      {/* ============================================================== */}
      {showOtpModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4 animate-page-fade">
          <div className="w-full max-w-sm bg-white rounded-3xl p-6 shadow-xl shadow-slate-900/10 border border-slate-100">
            <div className="flex items-center justify-between mb-2">
              <span className="w-8 h-8 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center">
                <Phone className="w-4 h-4" />
              </span>
              <button
                type="button"
                onClick={() => setShowOtpModal(false)}
                className="text-slate-400 hover:text-slate-600"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <h3 className="text-base font-bold text-slate-900 mb-1">
              Verify Phone Number
            </h3>
            <p className="text-xs text-slate-500 mb-4 leading-relaxed">
              Enter 6-digit SMS verification code sent to{" "}
              <strong className="text-slate-800">{profile.phone || "+95 9..."}</strong>
            </p>

            {otpSuccess ? (
              <div className="p-4 rounded-xl bg-teal-50 text-teal-900 text-center text-xs font-bold flex items-center justify-center gap-2 border border-teal-100">
                <CheckCircle2 className="w-4 h-4 text-teal-700" />
                <span>Phone Verified Successfully!</span>
              </div>
            ) : (
              <form onSubmit={handleVerifyOtp} className="space-y-4">
                <div>
                  <input
                    type="text"
                    maxLength={6}
                    required
                    placeholder="123456"
                    value={otpCode}
                    onChange={(e) => setOtpCode(e.target.value)}
                    className="w-full text-center tracking-widest text-xl font-mono px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-700 text-slate-900 font-bold"
                  />
                  <p className="text-[10px] text-slate-400 text-center mt-1.5">
                    Demo: Enter any 6 digits (e.g. 123456)
                  </p>
                </div>

                <div className="flex items-center gap-2.5">
                  <button
                    type="button"
                    onClick={() => setShowOtpModal(false)}
                    className="w-1/2 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-600 hover:bg-slate-50"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isVerifyingOtp || otpCode.length !== 6}
                    className="w-1/2 py-2.5 rounded-xl bg-teal-700 hover:bg-teal-800 text-white text-xs font-bold disabled:opacity-50 transition-colors"
                  >
                    {isVerifyingOtp ? "Checking..." : "Confirm Code"}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
