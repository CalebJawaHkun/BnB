"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import {
  ShoppingBag,
  Briefcase,
  Moon,
  RefreshCw,
  TrendingDown,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  ArrowLeft,
  Lock,
  Check
} from "lucide-react";

const RETAIL_SUB_CATEGORIES = [
  "Fashion & Apparel",
  "Cosmetics & Skincare",
  "Gadgets & Electronics",
  "Food & Minimart",
  "Fancy & Accessories",
  "Other Retail"
];

const SERVICE_SUB_CATEGORIES = [
  "Beauty Salon & Spa",
  "Medical Clinic & Health",
  "Education & Academy",
  "Real Estate & Auto",
  "Consulting & Agency",
  "Other Services"
];

const SOURCES = [
  "Facebook",
  "TikTok",
  "Telegram",
  "Friend / Referral",
  "UTS Event / Seminar",
  "Other"
];

const TEAM_SIZES = [
  { id: "solo", label: "Solo Boss", sub: "1 person" },
  { id: "small", label: "Small Team", sub: "2–5 staff" },
  { id: "growing", label: "Growing", sub: "6–15 staff" },
  { id: "enterprise", label: "Enterprise", sub: "16+ staff" }
];

const PAIN_POINTS = [
  {
    id: "late_inquiries",
    icon: Moon,
    title: "Late-Night Inquiries Lost",
    mmTitle: "ညဘက် Customer မေးခွန်းများကို ချက်ချင်း မဖြေနိုင်ခြင်း",
    reassurance: "BnB operates 24/7 day and night, eliminating lost overnight sales leads."
  },
  {
    id: "turnover",
    icon: RefreshCw,
    title: "High Staff Turnover",
    mmTitle: "အရောင်းဝန်ထမ်း ခဏခဏ အသစ်လဲနေရခြင်း",
    reassurance: "Train your AI worker once with SOP—sales consistency is permanently preserved."
  },
  {
    id: "pricing_mistakes",
    icon: TrendingDown,
    title: "Price & Stock Misquotes",
    mmTitle: "ဈေးနှုန်းနှင့် Stock အချက်အလက်များ မှားယွင်းပြောမိခြင်း",
    reassurance: "AI connects directly to live product catalogs, eliminating quoting errors."
  },
  {
    id: "ad_content",
    icon: Sparkles,
    title: "Ad Copy & Photos Overhead",
    mmTitle: "ကြော်ညာစာသားနှင့် ပုံဖန်တီးရန် အချိန်ကုန်ခြင်း",
    reassurance: "Ad Studio generates high-converting Burmese copy and studio product visuals in seconds."
  }
];

// Confetti Canvas Particle Explosion Component for Phase 6 Celebration
function ConfettiCanvas({ active }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!active) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = canvas.offsetWidth || 560);
    let height = (canvas.height = canvas.offsetHeight || 600);

    const colors = [
      "#0f766e", // teal-700
      "#14b8a6", // teal-500
      "#f59e0b", // amber-500
      "#fbbf24", // gold
      "#10b981", // emerald-500
      "#6366f1", // indigo
      "#ec4899", // pink
      "#38bdf8", // sky
      "#8b5cf6", // purple
    ];

    const particles = [];

    const spawnBurst = (originX, originY, count = 45) => {
      for (let i = 0; i < count; i++) {
        const angle = -Math.PI / 2 + (Math.random() - 0.5) * Math.PI * 1.5;
        const speed = 4 + Math.random() * 8.5;
        particles.push({
          x: originX,
          y: originY,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - 1.5,
          color: colors[Math.floor(Math.random() * colors.length)],
          size: 5 + Math.random() * 6,
          rotation: Math.random() * 360,
          rotationSpeed: (Math.random() - 0.5) * 14,
          wobble: Math.random() * 10,
          wobbleSpeed: 0.12 + Math.random() * 0.12,
          shape: Math.random() > 0.35 ? "rect" : "circle",
          opacity: 1,
          life: 0,
          maxLife: 85 + Math.random() * 45,
        });
      }
    };

    // Burst 1: Primary poppy explosion right around the celebration icon
    spawnBurst(width * 0.5, height * 0.22, 60);

    // Burst 2: Follow-up flanking confetti for extra poppy festive depth
    const timer = setTimeout(() => {
      spawnBurst(width * 0.38, height * 0.26, 30);
      spawnBurst(width * 0.62, height * 0.26, 30);
    }, 220);

    let animationId;
    let isRunning = true;

    const render = () => {
      if (!isRunning) return;
      ctx.clearRect(0, 0, width, height);

      let activeCount = 0;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.life++;

        if (p.life < p.maxLife) {
          activeCount++;
          p.x += p.vx;
          p.y += p.vy;
          p.vy += 0.22; // gravity
          p.vx *= 0.98; // air drag
          p.rotation += p.rotationSpeed;
          p.wobble += p.wobbleSpeed;

          if (p.life > p.maxLife - 25) {
            p.opacity = Math.max(0, (p.maxLife - p.life) / 25);
          }

          ctx.save();
          ctx.globalAlpha = p.opacity;
          ctx.translate(p.x, p.y);
          ctx.rotate((p.rotation * Math.PI) / 180);
          ctx.fillStyle = p.color;

          if (p.shape === "rect") {
            const w = p.size * (1 + Math.sin(p.wobble) * 0.4);
            const h = p.size * 1.5;
            ctx.fillRect(-w / 2, -h / 2, w, h);
          } else {
            ctx.beginPath();
            ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2);
            ctx.fill();
          }

          ctx.restore();
        }
      }

      if (activeCount > 0) {
        animationId = requestAnimationFrame(render);
      } else {
        ctx.clearRect(0, 0, width, height);
      }
    };

    render();

    return () => {
      isRunning = false;
      clearTimeout(timer);
      cancelAnimationFrame(animationId);
    };
  }, [active]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 z-30 w-full h-full"
    />
  );
}

export default function OnboardingOverlay({ isOpen, onClose, initialMode = "onboarding", onComplete }) {
  const router = useRouter();

  // Mode: "onboarding" or "signin"
  const [mode, setMode] = useState(initialMode);

  // Current Step: 1 to 6
  const [step, setStep] = useState(1);

  // Form State - No preselection by default
  const [businessType, setBusinessType] = useState(""); // "" | "retail" | "service"
  const [subCategory, setSubCategory] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [source, setSource] = useState("");

  const [teamSize, setTeamSize] = useState("");
  const [selectedPainPoints, setSelectedPainPoints] = useState([]);

  const [selectedChannels, setSelectedChannels] = useState([]);
  const [dailyVolume, setDailyVolume] = useState("");

  // Phase 4 Simulation State
  const [simStep, setSimStep] = useState("initial"); // "initial" | "price_checked" | "human_escalated"
  const [simTyping, setSimTyping] = useState(false);

  // Phase 5 Auth State
  const [authMethod, setAuthMethod] = useState("credentials"); // "credentials" | "google" | "facebook"
  const [authIdentifier, setAuthIdentifier] = useState("");
  const [authPassword, setAuthPassword] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [referralCode, setReferralCode] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [authError, setAuthError] = useState("");

  // Sign In Form State
  const [signInIdentifier, setSignInIdentifier] = useState("");
  const [signInPassword, setSignInPassword] = useState("");
  const [signInSubmitting, setSignInSubmitting] = useState(false);
  const [signInError, setSignInError] = useState("");

  // Pre-fill remembered email for quick re-login
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedEmail = localStorage.getItem("bnb_remembered_email");
      if (savedEmail && !signInIdentifier) {
        setSignInIdentifier(savedEmail);
      }
    }
  }, [mode, isOpen]);

  // Update sub-category when archetype toggles - do not preselect
  const handleTypeChange = (type) => {
    setBusinessType(type);
    setSubCategory("");
  };

  const togglePainPoint = (id) => {
    setSelectedPainPoints((prev) =>
      prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]
    );
  };

  const toggleChannel = (channel) => {
    setSelectedChannels((prev) =>
      prev.includes(channel) ? prev.filter((c) => c !== channel) : [...prev, channel]
    );
  };

  // Phase 4 Simulation Handlers
  const handleSimPriceCheck = () => {
    setSimTyping(true);
    setTimeout(() => {
      setSimStep("price_checked");
      setSimTyping(false);
    }, 600);
  };

  const handleSimHumanEscalation = () => {
    setSimTyping(true);
    setTimeout(() => {
      setSimStep("human_escalated");
      setSimTyping(false);
    }, 600);
  };

  // Fast SSO Handler (Google or Facebook)
  const handleFastSSO = (provider) => {
    setIsSubmitting(true);
    setAuthError("");
    setTimeout(() => {
      const generatedName = ownerName.trim() || (provider === "google" ? "Google Merchant" : "Facebook Merchant");
      const generatedEmail = `${provider.toLowerCase()}_user@bossnbots.com`;
      const profile = {
        ownerName: generatedName,
        businessName: businessName.trim() || "My Business",
        businessType: businessType || "retail",
        subCategory: subCategory || "Fashion & Apparel",
        teamSize: teamSize || "small",
        painPoints: selectedPainPoints.length > 0 ? selectedPainPoints : ["late_inquiries"],
        channels: selectedChannels.length > 0 ? selectedChannels : ["messenger"],
        dailyVolume: dailyVolume || "30-100",
        authMethod: provider,
        email: generatedEmail,
        phone: "+95 9442508508",
        isPhoneVerified: false,
        isEmailVerified: true,
        createdAt: new Date().toISOString()
      };

      if (typeof window !== "undefined") {
        localStorage.setItem("bnb_user", JSON.stringify({ name: generatedName, email: generatedEmail, provider }));
        localStorage.setItem("bnb_business_profile", JSON.stringify(profile));
        localStorage.setItem("bnb_onboarding_completed", "true");
        localStorage.setItem("bnb_onboarding_suppressed", "true");
        localStorage.setItem("bnb_has_logged_out", "false");
        localStorage.setItem("bnb_remembered_email", generatedEmail);
        window.dispatchEvent(new Event("bnb-auth-change"));
      }
      if (onComplete) {
        onComplete(profile, { name: generatedName, email: generatedEmail, provider });
      }
      setIsSubmitting(false);
      setStep(6);
    }, 800);
  };

  // Credentials Auth Handler (Phase 5)
  const handleCredentialsSubmit = (e) => {
    e.preventDefault();
    if (!authIdentifier.trim()) {
      setAuthError("Please enter your Phone Number or Email address.");
      return;
    }
    if (authPassword.length < 6) {
      setAuthError("Password must be at least 6 characters.");
      return;
    }

    setIsSubmitting(true);
    setAuthError("");

    setTimeout(() => {
      const profile = {
        ownerName: ownerName.trim() || "Store Boss",
        businessName: businessName.trim() || "My Business",
        businessType: businessType || "retail",
        subCategory: subCategory || "Fashion & Apparel",
        teamSize: teamSize || "small",
        painPoints: selectedPainPoints.length > 0 ? selectedPainPoints : ["late_inquiries"],
        channels: selectedChannels.length > 0 ? selectedChannels : ["messenger"],
        dailyVolume: dailyVolume || "30-100",
        authMethod: "credentials",
        email: authIdentifier.includes("@") ? authIdentifier : `${authIdentifier.replace(/[^0-9]/g, "")}@merchant.bnb`,
        phone: authIdentifier.includes("@") ? "+95 9xxxxxxxxx" : authIdentifier,
        isPhoneVerified: false,
        isEmailVerified: authIdentifier.includes("@"),
        createdAt: new Date().toISOString()
      };

      if (typeof window !== "undefined") {
        localStorage.setItem("bnb_user", JSON.stringify({ name: profile.ownerName, email: profile.email, phone: profile.phone }));
        localStorage.setItem("bnb_business_profile", JSON.stringify(profile));
        localStorage.setItem("bnb_onboarding_completed", "true");
        localStorage.setItem("bnb_onboarding_suppressed", "true");
        localStorage.setItem("bnb_has_logged_out", "false");
        localStorage.setItem("bnb_remembered_email", profile.email);
        window.dispatchEvent(new Event("bnb-auth-change"));
      }
      if (onComplete) {
        onComplete(profile, { name: profile.ownerName, email: profile.email, phone: profile.phone });
      }
      setIsSubmitting(false);
      setStep(6);
    }, 700);
  };

  // Direct Sign In Handler
  const handleDirectSignIn = (e) => {
    e.preventDefault();
    if (!signInIdentifier.trim() || !signInPassword.trim()) {
      setSignInError("Please enter your credentials.");
      return;
    }
    setSignInSubmitting(true);
    setSignInError("");

    setTimeout(() => {
      const existingProfile = {
        ownerName: "Returning Boss",
        businessName: "Boss Fashion & Boutique",
        businessType: "retail",
        subCategory: "Fashion & Apparel",
        teamSize: "small",
        painPoints: ["late_inquiries", "turnover"],
        channels: ["messenger", "telegram"],
        dailyVolume: "30-100",
        authMethod: "credentials",
        email: signInIdentifier.includes("@") ? signInIdentifier : "boss@fashion.com",
        phone: signInIdentifier.includes("@") ? "09442508508" : signInIdentifier,
        isPhoneVerified: true,
        isEmailVerified: true,
        createdAt: new Date().toISOString()
      };

      if (typeof window !== "undefined") {
        localStorage.setItem("bnb_user", JSON.stringify({ name: "Returning Boss", email: existingProfile.email }));
        localStorage.setItem("bnb_business_profile", JSON.stringify(existingProfile));
        localStorage.setItem("bnb_onboarding_completed", "true");
        localStorage.setItem("bnb_onboarding_suppressed", "true");
        localStorage.setItem("bnb_has_logged_out", "false");
        localStorage.setItem("bnb_remembered_email", existingProfile.email);
        window.dispatchEvent(new Event("bnb-auth-change"));
      }
      if (onComplete) {
        onComplete(existingProfile, { name: "Returning Boss", email: existingProfile.email });
      }
      setSignInSubmitting(false);
      onClose();
      router.push("/dashboard");
    }, 700);
  };

  const handleLaunchDashboard = () => {
    onClose();
    router.push("/dashboard");
  };

  const handleSkip = () => {
    if (typeof window !== "undefined") {
      localStorage.setItem("bnb_onboarding_suppressed", "true");
      localStorage.setItem("bnb_onboarding_skipped", "true");
      window.dispatchEvent(new Event("bnb-auth-change"));
    }
    onClose();
  };

  // Lock body scroll when overlay is active
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-white flex items-center justify-center p-3 sm:p-6 animate-page-fade">
      <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden flex flex-col max-h-[92vh]">
        {/* POPPY CONGRATULATION CONFETTI UPON COMPLETION */}
        {mode === "onboarding" && step === 6 && <ConfettiCanvas active={step === 6} />}
        {/* TOP STATUS BAR & CONTROLS */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-white">
          {/* Only Numbering 1/6 with bigger font size */}
          <div className="flex items-baseline">
            {mode === "onboarding" ? (
              <span className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 font-mono">
                {step}/6
              </span>
            ) : (
              <span className="text-lg font-bold text-slate-900">Sign In</span>
            )}
          </div>

          <div className="flex items-center gap-3">
            {mode === "onboarding" ? (
              <button
                type="button"
                onClick={() => setMode("signin")}
                className="text-xs font-medium text-slate-400 hover:text-teal-700 transition-colors hidden xs:inline-block"
              >
                Have an account? <span className="font-semibold underline">Sign In</span>
              </button>
            ) : (
              <button
                type="button"
                onClick={() => setMode("onboarding")}
                className="text-xs font-medium text-slate-400 hover:text-teal-700 transition-colors hidden xs:inline-block"
              >
                New business? <span className="font-semibold underline">Start Setup</span>
              </button>
            )}

            {/* Skip Button instead of 'X' */}
            <button
              type="button"
              onClick={handleSkip}
              className="text-xs font-semibold text-slate-400 hover:text-slate-900 px-3 py-1.5 rounded-full hover:bg-slate-100 transition-colors cursor-pointer"
              aria-label="Skip onboarding"
            >
              Skip
            </button>
          </div>
        </div>

        {/* PROGRESS STEPPER (ONBOARDING MODE ONLY) */}
        {mode === "onboarding" && (
          <div className="w-full bg-slate-100 h-1 overflow-hidden">
            <div
              className="h-full bg-teal-700 transition-all duration-300 ease-out"
              style={{ width: `${(step / 6) * 100}%` }}
            />
          </div>
        )}

        {/* SCROLLABLE MODAL BODY */}
        <div className="p-6 sm:p-7 overflow-y-auto flex-1">
          {/* ============================================================== */}
          {/* DIRECT SIGN IN VIEW                                            */}
          {/* ============================================================== */}
          {mode === "signin" && (
            <div className="max-w-md mx-auto py-2">
              <div className="text-center mb-6">
                <div className="w-11 h-11 rounded-2xl bg-teal-50 text-teal-700 flex items-center justify-center mx-auto mb-3">
                  <Lock className="w-5 h-5" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Welcome Back, Boss</h2>
                <p className="text-xs text-slate-500 mt-1">
                  အကောင့်ဝင်ရောက်၍ လုပ်ငန်း Dashboard ကို စီမံခန့်ခွဲပါ
                </p>
              </div>

              {/* Fast Social Sign In */}
              <div className="grid grid-cols-2 gap-3 mb-5">
                <button
                  type="button"
                  onClick={() => handleFastSSO("google")}
                  className="flex items-center justify-center gap-2 py-2.5 px-3.5 rounded-xl bg-slate-50 hover:bg-slate-100 font-medium text-xs text-slate-700 transition-colors cursor-pointer"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24">
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                    />
                  </svg>
                  <span>Google</span>
                </button>
                <button
                  type="button"
                  onClick={() => handleFastSSO("facebook")}
                  className="flex items-center justify-center gap-2 py-2.5 px-3.5 rounded-xl bg-slate-50 hover:bg-slate-100 font-medium text-xs text-slate-700 transition-colors cursor-pointer"
                >
                  <svg className="w-4 h-4 fill-[#1877F2]" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  <span>Facebook</span>
                </button>
              </div>

              <div className="relative flex items-center justify-center mb-5">
                <div className="border-t border-slate-100 w-full"></div>
                <span className="bg-white px-3 text-[11px] font-medium text-slate-400 uppercase tracking-wider absolute">
                  or credentials
                </span>
              </div>

              <form onSubmit={handleDirectSignIn} className="space-y-3.5">
                {signInError && (
                  <div className="p-3 rounded-xl bg-red-50 text-red-700 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    <span>{signInError}</span>
                  </div>
                )}
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Phone Number or Email
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="09xxxxxxxxx or email@domain.com"
                    value={signInIdentifier}
                    onChange={(e) => setSignInIdentifier(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200/80 focus:bg-white focus:border-teal-700 focus:ring-2 focus:ring-teal-700/10 text-xs sm:text-sm font-medium transition-all outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Password
                  </label>
                  <input
                    type="password"
                    required
                    placeholder="Enter password"
                    value={signInPassword}
                    onChange={(e) => setSignInPassword(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200/80 focus:bg-white focus:border-teal-700 focus:ring-2 focus:ring-teal-700/10 text-xs sm:text-sm font-medium transition-all outline-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={signInSubmitting}
                  className="w-full py-2.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs sm:text-sm transition-all shadow-xs flex items-center justify-center gap-1.5 disabled:opacity-70 mt-2 cursor-pointer"
                >
                  {signInSubmitting ? (
                    <span>Signing in...</span>
                  ) : (
                    <>
                      <span>Sign In to Dashboard</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </form>
            </div>
          )}

          {/* ============================================================== */}
          {/* PHASE 1: IDENTITY & ARCHETYPE                                  */}
          {/* ============================================================== */}
          {mode === "onboarding" && step === 1 && (
            <div className="space-y-6 sm:space-y-7">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                  Let&apos;s build your AI Employee
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  သင့်လုပ်ငန်းနဲ့ အကိုက်ညီဆုံး Digital ဝန်ထမ်းကို စတင်တည်ဆောက်ပါ
                </p>
              </div>

              {/* Archetype Choice */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2.5">
                  Business Archetype (လုပ်ငန်းအမျိုးအစား)
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {/* Retail Card */}
                  <div
                    onClick={() => handleTypeChange("retail")}
                    className={`cursor-pointer p-4 rounded-2xl transition-all flex flex-col justify-between ${
                      businessType === "retail"
                        ? "bg-teal-50/80 ring-2 ring-teal-700 shadow-xs"
                        : "bg-slate-50 hover:bg-slate-100/80"
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2.5">
                        <div className="w-9 h-9 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center">
                          <ShoppingBag className="w-4 h-4" />
                        </div>
                        {businessType === "retail" && (
                          <span className="w-5 h-5 rounded-full bg-teal-700 text-white flex items-center justify-center text-xs">
                            <Check className="w-3 h-3" />
                          </span>
                        )}
                      </div>
                      <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                        Retail &amp; Online Shop
                      </h3>
                      <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                        ကုန်ပစ္စည်းအရောင်းဆိုင်များ (Auto orders, stock, sizes)
                      </p>
                    </div>
                    <span className="mt-3 inline-block text-[10px] font-semibold text-teal-800 bg-teal-100/70 px-2 py-0.5 rounded-md self-start">
                      Sell Products Bot
                    </span>
                  </div>

                  {/* Service Card */}
                  <div
                    onClick={() => handleTypeChange("service")}
                    className={`cursor-pointer p-4 rounded-2xl transition-all flex flex-col justify-between ${
                      businessType === "service"
                        ? "bg-teal-50/80 ring-2 ring-teal-700 shadow-xs"
                        : "bg-slate-50 hover:bg-slate-100/80"
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2.5">
                        <div className="w-9 h-9 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center">
                          <Briefcase className="w-4 h-4" />
                        </div>
                        {businessType === "service" && (
                          <span className="w-5 h-5 rounded-full bg-teal-700 text-white flex items-center justify-center text-xs">
                            <Check className="w-3 h-3" />
                          </span>
                        )}
                      </div>
                      <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                        Service &amp; Booking
                      </h3>
                      <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                        ဝန်ဆောင်မှုလုပ်ငန်းများ (Salon, Clinic, Real Estate, Appointments)
                      </p>
                    </div>
                    <span className="mt-3 inline-block text-[10px] font-semibold text-teal-800 bg-teal-100/70 px-2 py-0.5 rounded-md self-start">
                      Promote Services Bot
                    </span>
                  </div>
                </div>
              </div>

              {/* Sub-Category Chips (Poppy, minimalistic pills) */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                  Sub-Category (အသေးစိတ် ကဏ္ဍ)
                </label>
                <div className="flex flex-wrap gap-2">
                  {((businessType === "service" ? SERVICE_SUB_CATEGORIES : RETAIL_SUB_CATEGORIES)).map(
                    (cat) => (
                      <button
                        type="button"
                        key={cat}
                        onClick={() => setSubCategory(cat)}
                        className={`text-xs px-3.5 py-1.5 rounded-full transition-all cursor-pointer font-medium ${
                          subCategory === cat
                            ? "bg-teal-700 text-white shadow-xs scale-[1.02]"
                            : "bg-slate-100 text-slate-600 hover:bg-slate-200/80 hover:text-slate-900"
                        }`}
                      >
                        {cat}
                      </button>
                    )
                  )}
                </div>
              </div>

              {/* Business Name */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                  Business / Store Name (ဆိုင်အမည်) *
                </label>
                <input
                  type="text"
                  placeholder="e.g. Boss Fashion House, Yangon Spa"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200/80 focus:bg-white focus:border-teal-700 focus:ring-2 focus:ring-teal-700/10 text-xs sm:text-sm font-medium transition-all outline-none"
                />
              </div>

              {/* Source of Discovery */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                  Where did you hear about Boss &amp; Bots?
                </label>
                <div className="flex flex-wrap gap-2">
                  {SOURCES.map((s) => (
                    <button
                      type="button"
                      key={s}
                      onClick={() => setSource(s)}
                      className={`text-xs px-3 py-1.5 rounded-full transition-all cursor-pointer font-medium ${
                        source === s
                          ? "bg-slate-900 text-white shadow-xs"
                          : "bg-slate-100 text-slate-600 hover:bg-slate-200/80"
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              {/* Navigation CTAs - Cancel removed, compact 'Next' button */}
              <div className="pt-4 flex items-center justify-end">
                <button
                  type="button"
                  disabled={!businessName.trim()}
                  onClick={() => {
                    if (!businessType) setBusinessType("retail");
                    if (!subCategory) setSubCategory("Fashion & Apparel");
                    setStep(2);
                  }}
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-teal-700 hover:bg-teal-800 text-white text-xs sm:text-sm font-semibold transition-all shadow-xs disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                >
                  <span>Next</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}

          {/* ============================================================== */}
          {/* PHASE 2: PAIN POINTS & TEAM SCALE                              */}
          {/* ============================================================== */}
          {mode === "onboarding" && step === 2 && (
            <div className="space-y-6 sm:space-y-7">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                  What slows your business down right now?
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  သင့်လုပ်ငန်းမှာ နေ့စဉ် ကြုံတွေ့နေရသော အဓိကအခက်အခဲများကို ရွေးချယ်ပေးပါ
                </p>
              </div>

              {/* Team Size Segment */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                  Team Size (ဝန်ထမ်းအင်အား)
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {TEAM_SIZES.map((ts) => (
                    <div
                      key={ts.id}
                      onClick={() => setTeamSize(ts.id)}
                      className={`cursor-pointer p-3 rounded-xl text-center transition-all ${
                        teamSize === ts.id
                          ? "bg-teal-50/80 ring-2 ring-teal-700 text-teal-950 shadow-xs"
                          : "bg-slate-50 hover:bg-slate-100/80 text-slate-700"
                      }`}
                    >
                      <p className="text-xs font-bold text-slate-900">{ts.label}</p>
                      <p className="text-[10px] text-slate-500 mt-0.5">{ts.sub}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pain Point Cards */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2.5">
                  Select Your Main Friction Points (အခက်အခဲများ)
                </label>
                <div className="space-y-2.5">
                  {PAIN_POINTS.map((pp) => {
                    const isSelected = selectedPainPoints.includes(pp.id);
                    const IconComponent = pp.icon;
                    return (
                      <div
                        key={pp.id}
                        onClick={() => togglePainPoint(pp.id)}
                        className={`cursor-pointer p-3.5 rounded-2xl transition-all ${
                          isSelected
                            ? "bg-teal-50/70 ring-2 ring-teal-700 shadow-xs"
                            : "bg-slate-50 hover:bg-slate-100/80"
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <div
                            className={`p-2 rounded-xl flex-shrink-0 ${
                              isSelected
                                ? "bg-teal-700 text-white"
                                : "bg-slate-200/70 text-slate-600"
                            }`}
                          >
                            <IconComponent className="w-4 h-4" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <h4 className="font-bold text-slate-900 text-xs sm:text-sm">
                                {pp.title}
                              </h4>
                              <span
                                className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] ${
                                  isSelected
                                    ? "bg-teal-700 text-white"
                                    : "border border-slate-300"
                                }`}
                              >
                                {isSelected && <Check className="w-2.5 h-2.5" />}
                              </span>
                            </div>
                            <p className="text-[11px] text-slate-500 mt-0.5">{pp.mmTitle}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Navigation CTAs - Compact CTA group */}
              <div className="pt-4 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-medium text-slate-500 hover:text-slate-800 cursor-pointer"
                >
                  <ArrowLeft className="w-3 h-3" />
                  <span>Back</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    if (!teamSize) setTeamSize("small");
                    if (selectedPainPoints.length === 0) setSelectedPainPoints(["late_inquiries"]);
                    setStep(3);
                  }}
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-semibold transition-all shadow-xs cursor-pointer"
                >
                  <span>Next</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}

          {/* ============================================================== */}
          {/* PHASE 3: CHANNELS & VOLUME                                     */}
          {/* ============================================================== */}
          {mode === "onboarding" && step === 3 && (
            <div className="space-y-6 sm:space-y-7">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                  Where do your customers reach you?
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Customer များ စုံစမ်းမေးမြန်းမှု အများဆုံး ချန်နယ်များကို ရွေးချယ်ပါ
                </p>
              </div>

              {/* Channel Selectors */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2.5">
                  Target Channels (အလိုအလျောက် ဖြေကြားမည့် ချန်နယ်များ)
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {/* Messenger */}
                  <div
                    onClick={() => toggleChannel("messenger")}
                    className={`cursor-pointer p-3.5 rounded-2xl transition-all ${
                      selectedChannels.includes("messenger")
                        ? "bg-teal-50/80 ring-2 ring-teal-700"
                        : "bg-slate-50 hover:bg-slate-100/80"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="w-7 h-7 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-[10px]">
                        FB
                      </span>
                      <span
                        className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] ${
                          selectedChannels.includes("messenger")
                            ? "bg-teal-700 text-white"
                            : "border border-slate-300"
                        }`}
                      >
                        {selectedChannels.includes("messenger") && <Check className="w-2.5 h-2.5" />}
                      </span>
                    </div>
                    <p className="text-xs font-bold text-slate-900">Facebook Messenger</p>
                    <p className="text-[10px] text-slate-500 mt-0.5">Primary Social Channel</p>
                  </div>

                  {/* Telegram */}
                  <div
                    onClick={() => toggleChannel("telegram")}
                    className={`cursor-pointer p-3.5 rounded-2xl transition-all ${
                      selectedChannels.includes("telegram")
                        ? "bg-teal-50/80 ring-2 ring-teal-700"
                        : "bg-slate-50 hover:bg-slate-100/80"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="w-7 h-7 rounded-lg bg-sky-100 text-sky-600 flex items-center justify-center font-bold text-[10px]">
                        TG
                      </span>
                      <span
                        className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] ${
                          selectedChannels.includes("telegram")
                            ? "bg-teal-700 text-white"
                            : "border border-slate-300"
                        }`}
                      >
                        {selectedChannels.includes("telegram") && <Check className="w-2.5 h-2.5" />}
                      </span>
                    </div>
                    <p className="text-xs font-bold text-slate-900">Telegram Bot</p>
                    <p className="text-[10px] text-slate-500 mt-0.5">Instant Notifications</p>
                  </div>

                  {/* Website Widget */}
                  <div
                    onClick={() => toggleChannel("website")}
                    className={`cursor-pointer p-3.5 rounded-2xl transition-all ${
                      selectedChannels.includes("website")
                        ? "bg-teal-50/80 ring-2 ring-teal-700"
                        : "bg-slate-50 hover:bg-slate-100/80"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-[10px]">
                        WEB
                      </span>
                      <span
                        className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] ${
                          selectedChannels.includes("website")
                            ? "bg-teal-700 text-white"
                            : "border border-slate-300"
                        }`}
                      >
                        {selectedChannels.includes("website") && <Check className="w-2.5 h-2.5" />}
                      </span>
                    </div>
                    <p className="text-xs font-bold text-slate-900">Website Chat Widget</p>
                    <p className="text-[10px] text-slate-500 mt-0.5">Embed on Any Site</p>
                  </div>
                </div>
              </div>

              {/* Inquiry Volume */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                  Estimated Daily Inquiries (နေ့စဉ် Enquiry ပမာဏ)
                </label>
                <div className="grid grid-cols-3 gap-2.5">
                  {[
                    { id: "<30", label: "Under 30 chats", planFit: "Starter Fit" },
                    { id: "30-100", label: "30 – 100 chats", planFit: "Growth (Popular)" },
                    { id: "100-500+", label: "100+ chats", planFit: "Premium Fit" }
                  ].map((vol) => (
                    <div
                      key={vol.id}
                      onClick={() => setDailyVolume(vol.id)}
                      className={`cursor-pointer p-3 rounded-xl text-center transition-all ${
                        dailyVolume === vol.id
                          ? "bg-teal-50/80 ring-2 ring-teal-700 text-teal-950 shadow-xs"
                          : "bg-slate-50 hover:bg-slate-100/80 text-slate-700"
                      }`}
                    >
                      <p className="text-xs font-bold text-slate-900">{vol.label}</p>
                      <p className="text-[10px] font-semibold text-teal-700 mt-0.5">{vol.planFit}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Value Calculation Callout */}
              <div className="p-3.5 rounded-2xl bg-teal-50/50 flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-900">
                    Estimated Time Saved: ~3.5 to 5 hours daily
                  </p>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    BnB filters repetitive price inquiries and captures orders automatically.
                  </p>
                </div>
              </div>

              {/* Navigation CTAs - Compact CTA group */}
              <div className="pt-4 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-medium text-slate-500 hover:text-slate-800 cursor-pointer"
                >
                  <ArrowLeft className="w-3 h-3" />
                  <span>Back</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    if (selectedChannels.length === 0) setSelectedChannels(["messenger", "telegram"]);
                    if (!dailyVolume) setDailyVolume("30-100");
                    setStep(4);
                  }}
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-teal-700 hover:bg-teal-800 text-white text-xs sm:text-sm font-semibold transition-all shadow-xs cursor-pointer"
                >
                  <span>Next</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}

          {/* ============================================================== */}
          {/* PHASE 4: INTERACTIVE BOT SIMULATION ("AHA!" MOMENT)            */}
          {/* ============================================================== */}
          {mode === "onboarding" && step === 4 && (
            <div className="space-y-6 sm:space-y-7">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                  Meet your AI Employee for {businessName || "Your Business"}
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  အောက်ပါခလုတ် (Chips) များကို နှိပ်၍ သင့် Bot ၏ ဖြေကြားပုံကို တိုက်ရိုက် စမ်းသပ်ကြည့်ပါ
                </p>
              </div>

              {/* MOCKUP CHAT CONTAINER */}
              <div className="rounded-2xl bg-slate-50 overflow-hidden shadow-xs border border-slate-100">
                {/* Chat Top Bar */}
                <div className="px-4 py-2.5 bg-white border-b border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-teal-700 text-white flex items-center justify-center font-bold text-xs">
                      {businessName ? businessName.charAt(0).toUpperCase() : "B"}
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-900">
                        {businessName || "Business"} AI Employee
                      </p>
                      <p className="text-[10px] text-emerald-600 flex items-center gap-1 font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                        Active 24/7 · {subCategory || (businessType === "service" ? "Service" : "Retail")}
                      </p>
                    </div>
                  </div>
                  <span className="text-[10px] bg-slate-100 text-slate-500 px-2 py-0.5 rounded-md font-mono">
                    Telegram &amp; FB Connected
                  </span>
                </div>

                {/* Chat Conversation Scroll */}
                <div className="p-4 space-y-3 min-h-[200px] max-h-[260px] overflow-y-auto bg-slate-50/70">
                  {/* Initial Greeting Bubble */}
                  <div className="flex items-start gap-2 max-w-[88%]">
                    <div className="w-6 h-6 rounded-full bg-teal-700 text-white flex-shrink-0 flex items-center justify-center text-[10px] font-bold">
                      AI
                    </div>
                    <div className="p-3 bg-white rounded-2xl rounded-tl-xs shadow-xs text-left">
                      <p className="text-xs text-slate-800 leading-relaxed">
                        မင်္ဂလာပါရှင် 🙏 <strong>{businessName || "ကျွန်ုပ်တို့ဆိုင်"}</strong> မှ ကြိုဆိုပါတယ်။{" "}
                        {businessType === "service"
                          ? `${subCategory || "ဝန်ဆောင်မှု"} package များနှင့် booking ရက်ချိန်းများအတွက် ကူညီပေးပါရစေရှင်။`
                          : `${subCategory || "ဆိုင်"} ပစ္စည်းများနှင့် ပတ်သက်၍ ဈေးနှုန်း၊ stock နှင့် order ကိစ္စများကို မေးမြန်းနိုင်ပါသည်ရှင်။`}
                      </p>
                      <span className="text-[10px] text-slate-400 mt-1 inline-block font-mono">Just now</span>
                    </div>
                  </div>

                  {/* Dynamic Simulation Messages */}
                  {simStep === "price_checked" && (
                    <>
                      {/* Customer Query */}
                      <div className="flex items-start justify-end gap-2 ml-auto max-w-[80%]">
                        <div className="p-2.5 bg-slate-900 text-white rounded-2xl rounded-tr-xs shadow-xs text-left">
                          <p className="text-xs">
                            {businessType === "retail"
                              ? "ဒီပစ္စည်းရဲ့ ဈေးနှုန်းနဲ့ Size L ရှိမရှိ သိချင်ပါတယ်ရှင်။"
                              : "Service package ဈေးနှုန်းနဲ့ မနက်ဖြန် နေ့လယ် booking ရမလားရှင်။"}
                          </p>
                        </div>
                      </div>

                      {/* AI Rich Response Card */}
                      <div className="flex items-start gap-2 max-w-[92%]">
                        <div className="w-6 h-6 rounded-full bg-teal-700 text-white flex-shrink-0 flex items-center justify-center text-[10px] font-bold">
                          AI
                        </div>
                        <div className="p-3 bg-white rounded-2xl rounded-tl-xs shadow-xs text-left w-full">
                          <div className="flex items-center justify-between pb-1.5 mb-1.5 border-b border-slate-100">
                            <span className="text-xs font-bold text-slate-900">
                              {businessType === "retail" ? "Featured Catalog Item" : "Standard Appointment"}
                            </span>
                            <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                              In Stock / Available
                            </span>
                          </div>
                          <p className="text-xs text-slate-700 leading-relaxed mb-2">
                            {businessType === "retail"
                              ? "ဟုတ်ကဲ့ပါရှင်၊ Size L ပစ္စည်း အသင့်ရှိပါတယ်ရှင်။ ဈေးနှုန်းကတော့ ၃၅,၀၀၀ ကျပ် ဖြစ်ပြီး ရန်ကုန်မြို့တွင်း Cash on Delivery ရရှိပါသည်ရှင်။"
                              : "ဟုတ်ကဲ့ပါရှင်၊ မနက်ဖြန် နေ့လယ် ၂:၀၀ နာရီ slot အားလပ်နေပါသည်ရှင်။ ပုံမှန် Package ဈေးနှုန်း ၄၅,၀၀၀ ကျပ် ဖြစ်ပါသည်ရှင်။"}
                          </p>
                          <div className="flex items-center gap-2 pt-1">
                            <span className="text-xs font-bold text-teal-800">
                              {businessType === "retail" ? "35,000 MMK" : "45,000 MMK"}
                            </span>
                            <span className="text-[10px] bg-teal-50 text-teal-700 px-2 py-0.5 rounded font-medium">
                              Instant Reply &lt; 2s
                            </span>
                          </div>
                        </div>
                      </div>
                    </>
                  )}

                  {simStep === "human_escalated" && (
                    <>
                      {/* Customer Handover Query */}
                      <div className="flex items-start justify-end gap-2 ml-auto max-w-[80%]">
                        <div className="p-2.5 bg-slate-900 text-white rounded-2xl rounded-tr-xs shadow-xs text-left">
                          <p className="text-xs">ဆိုင်ရှင် (သို့) လူနှင့် တိုက်ရိုက် စကားပြောလိုပါသည်ရှင်။</p>
                        </div>
                      </div>

                      {/* Bot Escalation Notice */}
                      <div className="flex items-start gap-2 max-w-[90%]">
                        <div className="w-6 h-6 rounded-full bg-teal-700 text-white flex-shrink-0 flex items-center justify-center text-[10px] font-bold">
                          AI
                        </div>
                        <div className="p-3 bg-white rounded-2xl rounded-tl-xs shadow-xs text-left">
                          <p className="text-xs text-slate-800 leading-relaxed">
                            ဟုတ်ကဲ့ပါရှင် 🙏 ဆိုင်ရှင်ထံသို့ Telegram မှတဆင့် ချက်ချင်း Notification ပို့ပေးလိုက်ပါပြီ။ ခေတ္တ စောင့်ဆိုင်းပေးပါရှင်။
                          </p>
                        </div>
                      </div>

                      {/* Simulated Owner Alert Banner */}
                      <div className="p-2.5 rounded-xl bg-amber-50 text-left">
                        <div className="flex items-center gap-1.5 text-amber-900 text-xs font-bold">
                          <AlertCircle className="w-3.5 h-3.5 text-amber-600" />
                          <span>Owner Alert System (Telegram &amp; Dashboard)</span>
                        </div>
                        <p className="text-[10px] text-amber-800 mt-0.5">
                          🚨 Customer requested human takeover. You can view transcript and take over directly.
                        </p>
                      </div>
                    </>
                  )}

                  {simTyping && (
                    <div className="flex items-center gap-1.5 p-2 bg-white rounded-xl w-14 text-slate-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-300 animate-bounce"></span>
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-300 animate-bounce [animation-delay:0.2s]"></span>
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-300 animate-bounce [animation-delay:0.4s]"></span>
                    </div>
                  )}
                </div>

                {/* Interactive Test Chips Bottom Bar */}
                <div className="p-3 bg-white border-t border-slate-100">
                  <p className="text-[10px] font-semibold text-slate-500 mb-1.5">
                    Click to test simulated inquiry:
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    <button
                      type="button"
                      onClick={handleSimPriceCheck}
                      className={`text-xs px-3 py-1.5 rounded-full transition-all flex items-center gap-1 cursor-pointer font-medium ${
                        simStep === "price_checked"
                          ? "bg-teal-700 text-white shadow-xs font-semibold"
                          : "bg-slate-100 text-slate-700 hover:bg-slate-200/80"
                      }`}
                    >
                      <span>💰</span>
                      <span>{businessType === "retail" ? "စစ်ဆေးမည် (Price & Stock)" : "စစ်ဆေးမည် (Package & Slot)"}</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleSimHumanEscalation}
                      className={`text-xs px-3 py-1.5 rounded-full transition-all flex items-center gap-1 cursor-pointer font-medium ${
                        simStep === "human_escalated"
                          ? "bg-amber-600 text-white shadow-xs font-semibold"
                          : "bg-slate-100 text-slate-700 hover:bg-slate-200/80"
                      }`}
                    >
                      <span>🙋</span>
                      <span>လူနှင့် စကားပြောမည် (Human Handover)</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Navigation CTAs - Compact Next button */}
              <div className="pt-4 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-medium text-slate-500 hover:text-slate-800 cursor-pointer"
                >
                  <ArrowLeft className="w-3 h-3" />
                  <span>Back</span>
                </button>
                <button
                  type="button"
                  onClick={() => setStep(5)}
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-teal-700 hover:bg-teal-800 text-white text-xs sm:text-sm font-semibold transition-all shadow-xs cursor-pointer"
                >
                  <span>Next</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}

          {/* ============================================================== */}
          {/* PHASE 5: BLENDED PROGRESSIVE AUTH                              */}
          {/* ============================================================== */}
          {mode === "onboarding" && step === 5 && (
            <div className="space-y-4 sm:space-y-5 max-w-md mx-auto py-1">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                  Claim &amp; Save Your Bot
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  သင့် Bot ကို သိမ်းဆည်းပြီး လုပ်ငန်း Dashboard ကို စတင်အသုံးပြုရန် အကောင့်ဖွင့်ပါ
                </p>
              </div>

              {/* Fast 1-Click SSO Buttons */}
              <div className="grid grid-cols-2 gap-2.5">
                <button
                  type="button"
                  disabled={isSubmitting}
                  onClick={() => handleFastSSO("google")}
                  className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-slate-50 hover:bg-slate-100 font-medium text-xs text-slate-700 transition-colors cursor-pointer"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24">
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                    />
                  </svg>
                  <span>Google 1-Click</span>
                </button>
                <button
                  type="button"
                  disabled={isSubmitting}
                  onClick={() => handleFastSSO("facebook")}
                  className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-slate-50 hover:bg-slate-100 font-medium text-xs text-slate-700 transition-colors cursor-pointer"
                >
                  <svg className="w-4 h-4 fill-[#1877F2]" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  <span>Facebook 1-Click</span>
                </button>
              </div>

              <div className="relative flex items-center justify-center">
                <div className="border-t border-slate-100 w-full"></div>
                <span className="bg-white px-3 text-[10px] font-medium text-slate-400 uppercase tracking-wider absolute">
                  or register with phone / email
                </span>
              </div>

              {/* Minimal Credentials Form */}
              <form onSubmit={handleCredentialsSubmit} className="space-y-3">
                {authError && (
                  <div className="p-3 rounded-xl bg-red-50 text-red-700 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    <span>{authError}</span>
                  </div>
                )}
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Your Name (ပိုင်ရှင်အမည်)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. U Mg Mg / Daw Hla"
                    value={ownerName}
                    onChange={(e) => setOwnerName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200/80 focus:bg-white focus:border-teal-700 focus:ring-2 focus:ring-teal-700/10 text-xs sm:text-sm font-medium transition-all outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Phone Number or Email *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="09xxxxxxxxx or email@domain.com"
                    value={authIdentifier}
                    onChange={(e) => setAuthIdentifier(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200/80 focus:bg-white focus:border-teal-700 focus:ring-2 focus:ring-teal-700/10 text-xs sm:text-sm font-medium transition-all outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Set Password *
                  </label>
                  <input
                    type="password"
                    required
                    placeholder="Enter password (min 6 chars)"
                    value={authPassword}
                    onChange={(e) => setAuthPassword(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200/80 focus:bg-white focus:border-teal-700 focus:ring-2 focus:ring-teal-700/10 text-xs sm:text-sm font-medium transition-all outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-medium text-slate-400 mb-1">
                    Referral Code (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="Partner or referral code"
                    value={referralCode}
                    onChange={(e) => setReferralCode(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200/80 focus:bg-white focus:border-teal-700 focus:ring-2 focus:ring-teal-700/10 text-xs font-medium transition-all outline-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-2.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs sm:text-sm transition-all shadow-xs flex items-center justify-center gap-1.5 disabled:opacity-70 mt-2 cursor-pointer"
                >
                  {isSubmitting ? (
                    <span>Deploying Bot...</span>
                  ) : (
                    <>
                      <span>Create Account &amp; Save Bot</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </form>

              <p className="text-[10px] text-center text-slate-400">
                By continuing, you agree to Boss &amp; Bots Terms of Service. No credit card required.
              </p>

              {/* Navigation CTAs */}
              <div className="pt-2 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setStep(4)}
                  className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-medium text-slate-500 hover:text-slate-800 cursor-pointer"
                >
                  <ArrowLeft className="w-3 h-3" />
                  <span>Back</span>
                </button>
              </div>
            </div>
          )}

          {/* ============================================================== */}
          {/* PHASE 6: CELEBRATION & DASHBOARD HANDOFF                       */}
          {/* ============================================================== */}
          {mode === "onboarding" && step === 6 && (
            <div className="max-w-md mx-auto py-4 text-center space-y-5 animate-page-fade relative z-10">
              <div className="w-16 h-16 rounded-3xl bg-teal-50 text-teal-700 flex items-center justify-center mx-auto shadow-sm ring-4 ring-teal-100/70">
                <CheckCircle2 className="w-8 h-8 text-teal-700 stroke-[2.5]" />
              </div>

              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200/80 text-[11px] font-bold text-amber-800 mb-2 shadow-2xs">
                  <span>🎉</span>
                  <span>Setup Complete</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  You&apos;re all set, Boss!
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  သင့် AI ဝန်ထမ်း အသင့်ဖြစ်ပါပြီ။ လုပ်ငန်း Dashboard သို့ ဝင်ရောက်နိုင်ပါပြီ။
                </p>
              </div>

              {/* Summary Checklist */}
              <div className="p-4 rounded-2xl bg-slate-50 text-left space-y-2 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-teal-700" />
                  <span>
                    Business Profile: <strong>{businessName || "My Business"}</strong> ({subCategory || (businessType === "service" ? "Service" : "Retail")})
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-teal-700" />
                  <span>
                    Bot Mode: <strong>{businessType === "service" ? "Promote Services AI" : "Sell Products AI"}</strong>
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-teal-700" />
                  <span>
                    Channels Prepared: <strong>{selectedChannels.length > 0 ? selectedChannels.join(", ") : "Messenger & Telegram"}</strong>
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-teal-700" />
                  <span>Free Trial Activated (7 Days Unlimited Access)</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2.5 pt-2">
                <button
                  type="button"
                  onClick={handleLaunchDashboard}
                  className="w-full py-2.5 rounded-full bg-teal-700 hover:bg-teal-800 text-white font-semibold text-xs sm:text-sm transition-all shadow-xs flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Enter Business Dashboard →</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    router.push("/book-a-demo");
                  }}
                  className="w-full py-2 rounded-full bg-white hover:bg-slate-50 text-slate-600 font-medium text-xs transition-colors cursor-pointer"
                >
                  Schedule Free 1-on-1 Setup Call
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
