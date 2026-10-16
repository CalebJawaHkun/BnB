"use client";

import { createContext, useContext, useState, useEffect } from "react";
import OnboardingOverlay from "@/components/OnboardingOverlay";

const OnboardingContext = createContext({
  isOpen: false,
  mode: "onboarding",
  user: null,
  profile: null,
  isOnboarded: false,
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
  // Pure in-memory session state: resets to false on hard refresh or logout
  const [isOnboarded, setIsOnboarded] = useState(false);
  const [isNotFound, setIsNotFound] = useState(false);

  const refreshAuth = () => {
    if (typeof window !== "undefined") {
      try {
        const storedUser = localStorage.getItem("bnb_user");
        const storedProfile = localStorage.getItem("bnb_business_profile");
        setUser(storedUser ? JSON.parse(storedUser) : null);
        setProfile(storedProfile ? JSON.parse(storedProfile) : null);
      } catch (err) {
        console.error("Failed to parse auth state", err);
      }
    }
  };

  const completeOnboarding = (profileData, userData) => {
    if (profileData) setProfile(profileData);
    if (userData) setUser(userData);
    setIsOnboarded(true);
  };

  const openOnboarding = () => {
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
    const timer = setTimeout(() => {
      refreshAuth();
    }, 0);

    const handleStorageChange = () => {
      refreshAuth();
    };

    window.addEventListener("storage", handleStorageChange);
    window.addEventListener("bnb-auth-change", handleStorageChange);

    const handleEvent = (e) => {
      if (e.detail?.mode === "signin") {
        openSignIn();
      } else {
        openOnboarding();
      }
    };

    window.addEventListener("bnb-open-onboarding", handleEvent);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("bnb-auth-change", handleStorageChange);
      window.removeEventListener("bnb-open-onboarding", handleEvent);
    };
  }, []);

  const signOut = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("bnb_user");
      localStorage.removeItem("bnb_business_profile");
      localStorage.removeItem("bnb_onboarding_completed");
      localStorage.removeItem("bnb_onboarding_session");
      window.dispatchEvent(new Event("bnb-auth-change"));
    }
    setUser(null);
    setProfile(null);
    setIsOnboarded(false);
  };

  return (
    <OnboardingContext.Provider
      value={{
        isOpen,
        mode,
        user,
        profile,
        isOnboarded,
        setIsOnboarded,
        isNotFound,
        setIsNotFound,
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
