"use client";

import { createContext, useContext, useState, useEffect } from "react";
import OnboardingOverlay from "@/components/OnboardingOverlay";

export const checkIsOnboardingSuppressed = () => {
  if (typeof window === "undefined") return false;
  try {
    const isSuppressed = localStorage.getItem("bnb_onboarding_suppressed") === "true";
    const hasLoggedOut = localStorage.getItem("bnb_has_logged_out") === "true";
    const isCompleted = localStorage.getItem("bnb_onboarding_completed") === "true";
    const isSkipped = localStorage.getItem("bnb_onboarding_skipped") === "true";
    const hasUser = !!localStorage.getItem("bnb_user");
    return isSuppressed || hasLoggedOut || isCompleted || isSkipped || hasUser;
  } catch (e) {
    return false;
  }
};

const OnboardingContext = createContext({
  isOpen: false,
  mode: "onboarding",
  user: null,
  profile: null,
  isOnboarded: false,
  isLoggedOut: false,
  rememberedEmail: "",
  isOnboardingSuppressed: false,
  isNotFound: false,
  setIsNotFound: () => {},
  setIsOnboarded: () => {},
  completeOnboarding: () => {},
  openOnboarding: () => {},
  openSignIn: () => {},
  closeOnboarding: () => {},
  signOut: () => {},
  refreshAuth: () => {}
});

export function OnboardingProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState("onboarding");
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [isOnboarded, setIsOnboarded] = useState(false);
  const [isLoggedOut, setIsLoggedOut] = useState(false);
  const [rememberedEmail, setRememberedEmail] = useState("");
  const [onboardingSuppressed, setOnboardingSuppressed] = useState(false);
  const [isNotFound, setIsNotFound] = useState(false);

  const refreshAuth = () => {
    if (typeof window !== "undefined") {
      try {
        const storedUser = localStorage.getItem("bnb_user");
        const storedProfile = localStorage.getItem("bnb_business_profile");
        const loggedOut = localStorage.getItem("bnb_has_logged_out") === "true";
        const email = localStorage.getItem("bnb_remembered_email") || "";
        const parsedUser = storedUser ? JSON.parse(storedUser) : null;
        const parsedProfile = storedProfile ? JSON.parse(storedProfile) : null;

        setUser(parsedUser);
        setProfile(parsedProfile);
        setIsLoggedOut(loggedOut);
        setRememberedEmail(email);
        setOnboardingSuppressed(checkIsOnboardingSuppressed());

        if (parsedUser || parsedProfile) {
          setIsOnboarded(true);
        } else {
          setIsOnboarded(false);
        }
      } catch (err) {
        console.error("Failed to parse auth state", err);
      }
    }
  };

  const completeOnboarding = (profileData, userData) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("bnb_onboarding_suppressed", "true");
      localStorage.setItem("bnb_onboarding_completed", "true");
      localStorage.setItem("bnb_has_logged_out", "false");
      const email = userData?.email || profileData?.email;
      if (email) {
        localStorage.setItem("bnb_remembered_email", email);
        setRememberedEmail(email);
      }
      window.dispatchEvent(new Event("bnb-auth-change"));
    }
    if (profileData) setProfile(profileData);
    if (userData) setUser(userData);
    setIsOnboarded(true);
    setIsLoggedOut(false);
    setOnboardingSuppressed(true);
  };

  const openOnboarding = (options = {}) => {
    const force = options?.force === true;
    const suppressed = checkIsOnboardingSuppressed();

    // If suppressed and not forced, never open the onboarding flow again
    if (!force && suppressed) {
      if (typeof window !== "undefined") {
        const storedUser = localStorage.getItem("bnb_user");
        if (storedUser) {
          if (window.location.pathname !== "/dashboard") {
            window.location.href = "/dashboard";
          }
        } else {
          // Returning or logged-out user: open sign in instead
          openSignIn();
        }
      } else {
        openSignIn();
      }
      return;
    }

    setMode("onboarding");
    setIsOpen(true);
  };

  const openSignIn = () => {
    setMode("signin");
    setIsOpen(true);
  };

  const closeOnboarding = () => {
    setIsOpen(false);
    refreshAuth();
  };

  useEffect(() => {
    refreshAuth();

    // Auto-open for brand-new visitors who have never signed in, completed, skipped, or logged out
    const autoOpenTimer = setTimeout(() => {
      if (typeof window !== "undefined") {
        const path = window.location.pathname;
        const isExcluded = path.startsWith("/dashboard") || path === "/sign-in" || path === "/book-a-demo";
        if (!isExcluded && !checkIsOnboardingSuppressed()) {
          setMode("onboarding");
          setIsOpen(true);
        }
      }
    }, 800);

    const handleStorageChange = () => {
      refreshAuth();
    };

    window.addEventListener("storage", handleStorageChange);
    window.addEventListener("bnb-auth-change", handleStorageChange);

    const handleEvent = (e) => {
      if (e.detail?.mode === "signin") {
        openSignIn();
      } else {
        openOnboarding(e.detail);
      }
    };

    window.addEventListener("bnb-open-onboarding", handleEvent);
    return () => {
      clearTimeout(autoOpenTimer);
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("bnb-auth-change", handleStorageChange);
      window.removeEventListener("bnb-open-onboarding", handleEvent);
    };
  }, []);

  const signOut = () => {
    if (typeof window !== "undefined") {
      const email = user?.email || profile?.email || localStorage.getItem("bnb_remembered_email") || "";
      if (email) {
        localStorage.setItem("bnb_remembered_email", email);
        setRememberedEmail(email);
      }
      localStorage.setItem("bnb_has_logged_out", "true");
      localStorage.setItem("bnb_onboarding_suppressed", "true");
      localStorage.removeItem("bnb_user");
      localStorage.removeItem("bnb_business_profile");
      localStorage.removeItem("bnb_onboarding_session");
      window.dispatchEvent(new Event("bnb-auth-change"));
    }
    setUser(null);
    setProfile(null);
    setIsOnboarded(false);
    setIsLoggedOut(true);
    setOnboardingSuppressed(true);
  };

  return (
    <OnboardingContext.Provider
      value={{
        isOpen,
        mode,
        user,
        profile,
        isOnboarded,
        isLoggedOut,
        rememberedEmail,
        isOnboardingSuppressed: onboardingSuppressed,
        isNotFound,
        setIsNotFound,
        setIsOnboarded,
        completeOnboarding,
        openOnboarding,
        openSignIn,
        closeOnboarding,
        signOut,
        refreshAuth
      }}
    >
      {children}
      <OnboardingOverlay
        isOpen={isOpen}
        onClose={closeOnboarding}
        initialMode={mode}
        onComplete={completeOnboarding}
      />
    </OnboardingContext.Provider>
  );
}

export function useOnboarding() {
  const context = useContext(OnboardingContext);
  if (!context) {
    throw new Error("useOnboarding must be used within an OnboardingProvider");
  }
  return context;
}

