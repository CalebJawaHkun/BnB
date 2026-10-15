import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { OnboardingProvider } from "@/context/OnboardingContext";

const ibmPlexSans = localFont({
  src: [
    {
      path: "./fonts/IBMPlexSans-VariableFont_wdth,wght.ttf",
      style: "normal",
    },
    {
      path: "./fonts/IBMPlexSans-Italic-VariableFont_wdth,wght.ttf",
      style: "italic",
    },
  ],
  variable: "--font-ibm-plex-sans",
  display: "swap",
});

export const metadata = {
  title: "Boss & Bots (BnB) · Enterprise AI Digital Workforce",
  description:
    "AI Employees for Myanmar Online Shops and Service SMEs. 24/7 automated inquiry replies, order intake, and customer support across Facebook and Telegram.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${ibmPlexSans.variable} ${ibmPlexSans.className} h-full scroll-smooth`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+Myanmar:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#f8fafc] text-slate-900 antialiased selection:bg-teal-100 selection:text-teal-900">
        <OnboardingProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </OnboardingProvider>
      </body>
    </html>
  );
}
