"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useOnboarding } from "@/context/OnboardingContext";

export default function AiChatbotWidget() {
  const { isNotFound, isOpen: isOnboardingOpen } = useOnboarding();
  const [isOpen, setIsOpen] = useState(false);
  const [isEscalated, setIsEscalated] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: "welcome-1",
      sender: "bot",
      type: "welcome",
      text: "မင်္ဂလာပါ။ Boss & Bots မှ ကြိုဆိုပါတယ်။ စုံစမ်းလိုသည်များကို မြန်မာလိုဖြစ်စေ English လိုဖြစ်စေ လွတ်လပ်စွာ မေးမြန်းနိုင်ပါတယ်။",
      meta: "Just now • BnB Assistant",
      chips: [
        { label: "🇲🇲 မြန်မာလို မေးမြန်းရန်", msg: "🇲🇲 မြန်မာလို မေးမြန်းရန်" },
        { label: "💰 Pricing Plans & ဝန်ဆောင်ခ", msg: "💰 Pricing Plans အသေးစိတ်" },
        { label: "🚀 Free Demo စမ်းသပ်ရယူပုံ", msg: "🚀 Free Demo ဘယ်လိုရယူမလဲ?" },
        {
          label: "📦 Online Shop Order & KPay Slip စစ်ဆေးပုံ",
          msg: "Online Shop တွေအတွက် Order ဘယ်လိုကောက်ယူလဲ?",
        },
        {
          label: "👨‍💼 လူကိုယ်တိုင် ဆွေးနွေးလိုပါက (Consultant)",
          msg: "လူကိုယ်တိုင် အတိုင်ပင်ခံနှင့် ဆွေးနွေးလိုပါသည်",
        },
      ],
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  const messageIdRef = useRef(100);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setTimeout(() => {
        inputRef.current?.focus();
      }, 150);
    }
  }, [isOpen, messages, isTyping]);

  if (isNotFound || isOnboardingOpen) {
    return null;
  }

  // Format markdown into clean HTML
  const formatMarkdown = (content) => {
    if (!content) return "";
    let html = content
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");

    // Bold **text**
    html = html.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");

    // Inline code `code` (e.g. phone numbers, pricing, tags)
    html = html.replace(
      /`([^`]+)`/g,
      '<code class="px-1.5 py-0.5 bg-slate-100 rounded text-teal-800 font-mono text-xs font-semibold">$1</code>'
    );

    // Links [text](url)
    html = html.replace(
      /\[(.*?)\]\((.*?)\)/g,
      '<a href="$2" class="text-teal-700 underline font-semibold hover:text-teal-900 transition-colors">$1</a>'
    );

    // Bullet lists
    html = html.replace(/^[•\-*]\s+(.*)$/gm, '<li class="ml-4 list-disc">$1</li>');

    // Newlines to <br/>
    html = html.replace(/\n/g, "<br/>");
    return html;
  };

  const handleSendMessage = async (textToSend) => {
    const query = (textToSend || inputValue).trim();
    if (!query) return;

    messageIdRef.current += 1;
    const userMsgId = `user-${messageIdRef.current}`;
    const userMsg = {
      id: userMsgId,
      sender: "user",
      text: query,
      meta: "Delivered",
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");
    setIsTyping(true);

    const q = query.toLowerCase();

    // Human escalation check
    if (
      !isEscalated &&
      (q.includes("လူကိုယ်တိုင်") ||
        q.includes("human") ||
        q.includes("consultant") ||
        q.includes("အတိုင်ပင်ခံ"))
    ) {
      setIsEscalated(true);
      setTimeout(() => {
        setIsTyping(false);
        messageIdRef.current += 1;
        setMessages((prev) => [
          ...prev,
          {
            id: `bot-${messageIdRef.current}`,
            sender: "consultant",
            html: `<strong>Human Escalation Activated:</strong> မင်္ဂလာပါခင်ဗျာ၊ UTS Myanmar / Boss &amp; Bots မှ အကြီးတန်း နည်းပညာအတိုင်ပင်ခံ ကိုမင်းသန့် ဖြစ်ပါတယ်။ AI Assistant မှ စကားဝိုင်းကို လွှဲပြောင်းရယူထားပြီး ဖြစ်ပါတယ်။ လူကြီးမင်း၏ လုပ်ငန်းအတွက် မည်သို့ ကူညီဆောင်ရွက်ပေးရမလဲခင်ဗျာ?`,
            meta: "Senior Consultant Ko Min Thant (Live)",
          },
        ]);
      }, 600);
      return;
    }

    if (isEscalated) {
      setTimeout(() => {
        setIsTyping(false);
        messageIdRef.current += 1;
        setMessages((prev) => [
          ...prev,
          {
            id: `bot-${messageIdRef.current}`,
            sender: "consultant",
            html: `<strong>Ko Min Thant:</strong> &quot;ကျွန်တော် သင့် မေးခွန်းကို မှတ်သားထားပါတယ်။ အသေးစိတ် ဆွေးနွေးနိုင်ရန်အတွက် သင့်ဖုန်းနံပါတ် သို့မဟုတ် Telegram username လေး မျှဝေပေးနိုင်မလားခင်ဗျာ?&quot;`,
            meta: "Senior Consultant Ko Min Thant",
          },
        ]);
      }, 700);
      return;
    }

    // Live API call to /api/chat with resilient error handling
    try {
      const historyPayload = messages
        .filter((m) => m.type !== "welcome")
        .slice(-8)
        .map((m) => ({
          role: m.sender === "user" ? "user" : "assistant",
          text: m.text || m.html?.replace(/<[^>]+>/g, "").trim() || "",
        }))
        .filter((m) => m.text.length > 0);

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: query, history: historyPayload }),
      });

      const data = await res.json().catch(() => ({}));

      if (res.ok && data.reply) {
        setIsTyping(false);
        messageIdRef.current += 1;
        setMessages((prev) => [
          ...prev,
          {
            id: `bot-${messageIdRef.current}`,
            sender: "bot",
            html: formatMarkdown(data.reply),
            meta: data.modelUsed
              ? `BnB Intelligence Engine · ${data.modelUsed}`
              : "BnB Intelligence Engine",
          },
        ]);
        return;
      }

      if (res.status === 429) {
        setIsTyping(false);
        messageIdRef.current += 1;
        setMessages((prev) => [
          ...prev,
          {
            id: `bot-${messageIdRef.current}`,
            sender: "bot",
            html: formatMarkdown(
              data.reply ||
                "မက်ဆေ့ခ်ျ ပို့သည့် အကြိမ်ရေ များလွန်းနေပါသည်။ ခေတ္တစောင့်ဆိုင်းပြီးမှ ပြန်လည်မေးမြန်းပေးပါခင်ဗျာ။"
            ),
            meta: "Rate Limit Exceeded",
          },
        ]);
        return;
      }

      if (data.reply) {
        setIsTyping(false);
        messageIdRef.current += 1;
        setMessages((prev) => [
          ...prev,
          {
            id: `bot-${messageIdRef.current}`,
            sender: "bot",
            html: formatMarkdown(data.reply),
            meta: "BnB Assistant",
          },
        ]);
        return;
      }
    } catch {
      // Network connection error
    }

    // Graceful localized fallback if network fails
    setIsTyping(false);
    const isBurmese = /[\u1000-\u109F]/.test(query);
    const fallbackText = isBurmese
      ? "စိတ်မရှိပါနဲ့ခင်ဗျာ။ ဆာဗာနှင့် ချိတ်ဆက်ရာတွင် အနည်းငယ် အဆင်မပြေဖြစ်နေပါသဖြင့် Customer Success ဖုန်း 09442508508 သို့မဟုတ် 09442509509 သို့ တိုက်ရိုက် ဆက်သွယ်ပေးပါရန် မေတ္တာရပ်ခံအပ်ပါသည်။"
      : "I apologize, but our service is currently experiencing a temporary connection issue. Please contact our team directly at 09442508508 / 09442509509 or admin@utsmyanmar.com.";

    messageIdRef.current += 1;
    setMessages((prev) => [
      ...prev,
      {
        id: `bot-${messageIdRef.current}`,
        sender: "bot",
        html: formatMarkdown(fallbackText),
        meta: "Offline Notice",
      },
    ]);
  };

  const handleResetChat = () => {
    setIsEscalated(false);
    messageIdRef.current += 1;
    setMessages([
      {
        id: `welcome-${messageIdRef.current}`,
        sender: "bot",
        type: "welcome",
        text: "မင်္ဂလာပါ။ ကျွန်တော်က Boss & Bots ရဲ့ Business AI Assistant ဖြစ်ပါတယ်။ စကားဝိုင်းကို အသစ် ပြန်လည် စတင်ထားပါတယ်။ သိရှိလိုသည်များကို လွတ်လပ်စွာ မေးမြန်းနိုင်ပါတယ်!",
        meta: "Session Cleared • BnB Assistant",
        chips: [
          { label: "🇲🇲 မြန်မာလို မေးမြန်းရန်", msg: "🇲🇲 မြန်မာလို မေးမြန်းရန်" },
          { label: "💰 Pricing Plans & ဝန်ဆောင်ခ", msg: "💰 Pricing Plans အသေးစိတ်" },
          { label: "🚀 Free Demo စမ်းသပ်ရယူပုံ", msg: "🚀 Free Demo ဘယ်လိုရယူမလဲ?" },
          {
            label: "📦 Online Shop Order & KPay Slip စစ်ဆေးပုံ",
            msg: "Online Shop တွေအတွက် Order ဘယ်လိုကောက်ယူလဲ?",
          },
        ],
      },
    ]);
  };

  const handleSwitchToBot = () => {
    setIsEscalated(false);
    messageIdRef.current += 1;
    setMessages((prev) => [
      ...prev,
      {
        id: `bot-${messageIdRef.current}`,
        sender: "bot",
        html: `Switched back to autonomous AI Employee mode. Chatbot is ready for inquiries!`,
        meta: "Assistant Active",
      },
    ]);
  };

  const handleTriggerHuman = () => {
    if (isEscalated) return;
    setIsEscalated(true);
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      messageIdRef.current += 1;
      setMessages((prev) => [
        ...prev,
        {
          id: `bot-${messageIdRef.current}`,
          sender: "consultant",
          html: `<strong>Human Escalation Activated:</strong> မင်္ဂလာပါခင်ဗျာ၊ UTS Myanmar / Boss &amp; Bots မှ အကြီးတန်း နည်းပညာအတိုင်ပင်ခံ ကိုမင်းသန့် ဖြစ်ပါတယ်။ AI Assistant မှ စကားဝိုင်းကို လွှဲပြောင်းရယူထားပြီး ဖြစ်ပါတယ်။ လူကြီးမင်း၏ လုပ်ငန်းအတွက် မည်သို့ ကူညီဆောင်ရွက်ပေးရမလဲခင်ဗျာ?`,
          meta: "Senior Consultant Ko Min Thant (Live)",
        },
      ]);
    }, 600);
  };

  return (
    <div
      data-chat-widget="true"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end pointer-events-auto"
    >
      {/* FLOATING CHAT WINDOW (Rendered when toggled open) */}
      {isOpen && (
        <div
          id="bnbChatWindow"
          role="dialog"
          aria-label="BnB AI Chatbot"
          className="w-[440px] sm:w-[460px] max-w-[calc(100vw-24px)] h-[620px] max-h-[calc(100vh-32px)] bg-white rounded-3xl shadow-[0_20px_50px_-12px_rgba(15,23,42,0.28)] flex flex-col overflow-hidden transition-all duration-300 transform origin-bottom-right border border-slate-100 animate-section-rise"
        >
          {/* Chat Window Header */}
          <div className="px-4 py-2.5 bg-white flex items-center justify-between border-b border-slate-100 shadow-sm shrink-0 gap-3">
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="relative flex items-center shrink-0">
                <div
                  className={`w-7 h-7 rounded-lg flex items-center justify-center text-white ${
                    isEscalated ? "bg-amber-600" : "bg-teal-700"
                  }`}
                >
                  <span className="material-symbols-outlined text-[16px]">
                    {isEscalated ? "support_agent" : "smart_toy"}
                  </span>
                </div>
                <span className="absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full bg-teal-400 ring-1 ring-white" />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-1.5 leading-tight">
                  <h4 className="font-headline-sm text-xs sm:text-sm text-slate-900 font-bold tracking-tight">
                    BnB AI
                  </h4>
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-600 inline-block" />
                </div>
                <p className="text-[11px] text-slate-500 font-medium whitespace-nowrap truncate">
                  {isEscalated ? "Senior Consultant Connected" : "Chatbot မှဖြေကြားပေးနေပါတယ်"}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1 shrink-0">
              {!isEscalated && (
                <button
                  type="button"
                  onClick={handleTriggerHuman}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-slate-600 hover:text-teal-800 hover:bg-teal-50 transition-colors text-[11px] font-medium whitespace-nowrap shrink-0"
                  title="လူနှင့်ပြောမည်"
                >
                  <span className="material-symbols-outlined text-[14px]">
                    support_agent
                  </span>
                  <span className="whitespace-nowrap">လူနှင့်ပြောမည်</span>
                </button>
              )}
              <button
                type="button"
                onClick={handleResetChat}
                className="w-7 h-7 rounded-full text-slate-500 hover:text-slate-900 hover:bg-slate-100 flex items-center justify-center transition-colors shrink-0"
                title="Reset chat"
              >
                <span className="material-symbols-outlined text-[16px]">restart_alt</span>
              </button>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="w-7 h-7 rounded-full text-slate-500 hover:text-slate-900 hover:bg-slate-100 flex items-center justify-center transition-colors shrink-0"
                title="Minimize chat"
              >
                <span className="material-symbols-outlined text-[20px]">
                  keyboard_arrow_down
                </span>
              </button>
            </div>
          </div>

          {/* Escalation Banner */}
          {isEscalated && (
            <div className="px-4 py-2 bg-amber-50 border-b border-amber-100 text-slate-800 text-[12px] flex items-center justify-between transition-all shrink-0">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-600 animate-pulse" />
                <span>
                  Senior Consultant <strong>Ko Min Thant</strong> is connected.
                </span>
              </div>
              <button
                type="button"
                onClick={handleSwitchToBot}
                className="text-teal-700 text-[11px] font-bold hover:underline"
              >
                Switch to Bot
              </button>
            </div>
          )}

          {/* Message Stream */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-slate-50/40">
            {messages.map((msg) => {
              if (msg.sender === "user") {
                return (
                  <div
                    key={msg.id}
                    className="flex items-end justify-end gap-2 max-w-[90%] ml-auto"
                  >
                    <div className="space-y-1 text-right">
                      <div className="p-3 bg-teal-700 text-white rounded-2xl rounded-tr-sm shadow-sm text-xs sm:text-sm text-left leading-relaxed">
                        {msg.text}
                      </div>
                      <span className="text-[10px] text-slate-400 px-1">
                        {msg.meta || "Delivered"}
                      </span>
                    </div>
                  </div>
                );
              }

              const isConsultant = msg.sender === "consultant";
              return (
                <div key={msg.id} className="space-y-3">
                  <div className="flex items-start gap-2.5 max-w-[94%]">
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center text-white flex-shrink-0 text-[13px] mt-0.5 ${
                        isConsultant ? "bg-amber-600" : "bg-teal-700"
                      }`}
                    >
                      <span className="material-symbols-outlined text-[15px]">
                        {isConsultant ? "support_agent" : "smart_toy"}
                      </span>
                    </div>
                    <div className="space-y-1 flex-1">
                      <div className="p-3.5 bg-white border border-slate-100 text-slate-900 rounded-2xl rounded-tl-sm shadow-sm text-xs sm:text-sm leading-relaxed">
                        {msg.html ? (
                          <div
                            dangerouslySetInnerHTML={{ __html: msg.html }}
                            className="space-y-1.5"
                          />
                        ) : (
                          msg.text
                        )}
                      </div>
                      <span className="text-[10px] text-slate-400 px-1 block">
                        {msg.meta}
                      </span>
                    </div>
                  </div>

                  {/* FAQs Aligned to Right (Chat Message Sent Typa Style) */}
                  {msg.chips && (
                    <div className="flex flex-col items-end gap-1.5 ml-auto max-w-[90%] pt-1">
                      <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider pr-1">
                        အမေးများသော မေးခွန်းများ (FAQs)
                      </span>
                      <div className="flex flex-col items-end gap-1.5 w-full">
                        {msg.chips.map((chip, idx) => (
                          <button
                            key={idx}
                            type="button"
                            onClick={() => handleSendMessage(chip.msg)}
                            className="group inline-flex items-center gap-2 px-3.5 py-2 rounded-2xl rounded-tr-xs bg-teal-50/90 hover:bg-teal-700 text-teal-900 hover:text-white border border-teal-200/80 hover:border-teal-700 text-xs shadow-2xs hover:shadow-xs transition-all duration-150 text-right cursor-pointer"
                          >
                            <span className="leading-snug">{chip.label}</span>
                            <span className="material-symbols-outlined text-[13px] text-teal-600 group-hover:text-white transition-transform group-hover:translate-x-0.5 shrink-0">
                              arrow_outward
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex items-start gap-2.5 max-w-[70%]">
                <div className="w-7 h-7 rounded-full bg-slate-200 flex items-center justify-center text-teal-700 flex-shrink-0 text-[13px]">
                  <span className="material-symbols-outlined text-[15px]">
                    psychology
                  </span>
                </div>
                <div className="p-3 bg-white text-slate-800 rounded-2xl rounded-tl-sm border border-slate-100 shadow-sm flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-teal-600/40 animate-bounce" />
                  <span className="w-2 h-2 rounded-full bg-teal-600/70 animate-bounce [animation-delay:0.15s]" />
                  <span className="w-2 h-2 rounded-full bg-teal-600 animate-bounce [animation-delay:0.3s]" />
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Form */}
          <div className="p-3 bg-white border-t border-slate-100 shrink-0">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="flex items-center gap-2 bg-slate-50 rounded-2xl px-3 py-1.5 border border-slate-200/80 focus-within:border-teal-600 focus-within:ring-2 focus-within:ring-teal-100 transition-all"
            >
              <input
                ref={inputRef}
                type="text"
                autoComplete="off"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="သိလိုသည်များ မေးမြန်းနိုင်ပါသည် (Burmese / English)..."
                className="flex-1 bg-transparent border-none text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none py-1.5"
              />
              <button
                type="submit"
                disabled={!inputValue.trim()}
                title="Send"
                className="w-8 h-8 rounded-xl bg-teal-700 hover:bg-teal-800 disabled:opacity-40 disabled:hover:bg-teal-700 text-white flex items-center justify-center transition-all flex-shrink-0 shadow-sm cursor-pointer disabled:cursor-not-allowed"
              >
                <span className="material-symbols-outlined text-[17px]">
                  arrow_upward
                </span>
              </button>
            </form>
          </div>
        </div>
      )}

      {/* FLOATING LAUNCHER (Circular logo on mobile/tablet, pill on desktop) */}
      {!isOpen && (
        <button
          type="button"
          id="btnLauncherToggle"
          onClick={() => setIsOpen(true)}
          aria-label="Open AI Live Chatbot"
          className="group flex items-center justify-center gap-2.5 w-12 h-12 lg:w-auto lg:h-auto lg:px-4 lg:py-2 rounded-full bg-teal-700 hover:bg-teal-800 text-white shadow-[0_4px_16px_rgba(15,118,110,0.28)] hover:shadow-[0_6px_24px_rgba(15,118,110,0.36)] transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer border border-teal-600/40"
        >
          <div className="relative flex items-center justify-center">
            <span className="material-symbols-outlined text-[22px] lg:text-[18px]">
              smart_toy
            </span>
            <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-teal-300 ring-2 ring-teal-700 animate-pulse" />
          </div>

          <div className="hidden lg:flex items-center gap-2">
            <span className="text-xs font-bold tracking-wide font-headline-sm">
              AI LIVE CHATBOT
            </span>
            <span className="w-1 h-1 rounded-full bg-teal-300/60" />
            <span className="text-[11px] text-teal-100 font-medium font-['Noto_Sans_Myanmar']">
              မေးမြန်းပါ
            </span>
          </div>
        </button>
      )}
    </div>
  );
}
