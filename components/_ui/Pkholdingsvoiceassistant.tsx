/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { Mic, MessageSquare, Phone } from "lucide-react";

/* ─────────────────────────────────────────────
   Types
───────────────────────────────────────────── */
type Language = "EN" | "FIL" | "Taglish";

interface SpeechRecognitionInstance {
  start: () => void;
  stop: () => void;
  abort: () => void;
  onresult: ((event: SpeechRecognitionResult) => void) | null;
  onend: (() => void) | null;
  onerror: ((event: any) => void) | null;
}

interface StatItem {
  value: string;
  label: string;
}

interface SuggestionPill {
  id: number;
  text: string;
}

/* ─────────────────────────────────────────────
   Constants
───────────────────────────────────────────── */
const STATS: StatItem[] = [
  { value: "22+", label: "Years in Business" },
  { value: "7", label: "Companies" },
  { value: "500+", label: "Team Members" },
  { value: "20K+", label: "Lives Touched" },
];

const LANGUAGES: Language[] = ["EN", "FIL", "Taglish"];

const SUGGESTIONS: SuggestionPill[] = [
  { id: 1, text: "Tell me about your companies" },
  { id: 2, text: "I want to apply for a job" },
  { id: 3, text: "Book El Nido apartments" },
  { id: 4, text: "Speak to a human" },
];

const BOT_RESPONSE =
  "PK Holdings is a diversified conglomerate with 22+ years of excellence, managing 7 companies across logistics, hospitality, and travel. We're headquartered in Makati City and trusted by over 20,000 lives across Southeast Asia.";

/* ─────────────────────────────────────────────
   Web Speech API shim (TypeScript-safe)
───────────────────────────────────────────── */
declare global {
  interface Window {
    // Some environments expose webkitSpeechRecognition / SpeechRecognition but TS may not have
    // the global type defined. Use any to avoid build errors.
    SpeechRecognition: unknown;
    webkitSpeechRecognition: unknown;
  }
}

/* ─────────────────────────────────────────────
   Stats Counter
───────────────────────────────────────────── */
function StatsCounter() {
  return (
    <section className="bg-white border-b border-gray-100">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-0 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {STATS.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center text-center gap-1.5">
              <span
                className="text-5xl sm:text-6xl font-black text-[#0A2419] leading-none" 
              >
                {stat.value}
              </span>
              <span className="text-sm text-gray-500 font-medium tracking-wide">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   Geometric SVG Background Pattern
───────────────────────────────────────────── */
function GeometricBg() {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none">
        <img src="/chat-bg.png" alt="chat-bg" className="min-w-full min-h-full" />
    </div>
    // <svg
    //   className="absolute inset-0 w-full h-full opacity-[0.18] pointer-events-none"
    //   xmlns="http://www.w3.org/2000/svg"
    // >
    //   <defs>
    //     <pattern id="diamond" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
    //       <path
    //         d="M30 0 L60 30 L30 60 L0 30 Z"
    //         fill="none"
    //         stroke="#1a7a52"
    //         strokeWidth="0.8"
    //       />
    //     </pattern>
    //   </defs>
    //   <rect width="100%" height="100%" fill="url(#diamond)" />
    // </svg>
  );
}

/* ─────────────────────────────────────────────
   Chat Widget
───────────────────────────────────────────── */
interface ChatWidgetProps {
  userText: string;
  botText: string;
  isTyping: boolean;
}

function ChatWidget({ userText, botText, isTyping }: ChatWidgetProps) {
  const showUser = userText.length > 0;
  const showBot = botText.length > 0 || isTyping;

  return (
    <div className="bg-white shadow-xl rounded-2xl p-5 w-full max-w-lg mx-auto">
      {/* User bubble */}
      {showUser && (
        <div className="flex items-start gap-3 mb-4">
          <div className="shrink-0 w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center">
            <MessageSquare size={16} className="text-gray-500" />
          </div>
          <div className="bg-gray-100 text-gray-800 text-sm rounded-xl rounded-tl-none px-4 py-2.5 max-w-[85%]">
            {userText}
          </div>
        </div>
      )}

      {/* Default prompt when nothing is active */}
      {!showUser && !showBot && (
        <div className="flex items-start gap-3 mb-4">
          <div className="shrink-0 w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center">
            <MessageSquare size={16} className="text-gray-500" />
          </div>
          <div className="bg-gray-100 text-gray-800 text-sm rounded-xl rounded-tl-none px-4 py-2.5">
            Hi! Tell me about PK Holdings.
          </div>
        </div>
      )}

      {/* Bot bubble */}
      {(showBot || (!showUser && !showBot)) && (
        <div className="flex items-end gap-3">
          <div
            className="bg-[#0A2419] text-white text-sm rounded-xl rounded-bl-none px-4 py-3 flex-1 leading-relaxed min-h-[48px]"
          >
            {botText.length > 0
              ? botText
              : !showUser
              ? "PK Holdings is a diversified conglomerate with 22+ years of excellence, managing 7 companies across logistics, hospitality, and travel..."
              : isTyping
              ? "..."
              : ""}
            {isTyping && botText.length > 0 && (
              <span className="inline-block w-1.5 h-4 bg-white/70 ml-0.5 align-middle animate-pulse rounded-sm" />
            )}
          </div>
          <div className="shrink-0 w-9 h-9 rounded-full bg-[#0A2419] flex items-center justify-center shadow-md">
            <Mic size={16} className="text-white" />
          </div>
        </div>
      )}
    </div>
  );
}

/* ─────────────────────────────────────────────
   Main Voice Assistant Section
───────────────────────────────────────────── */
export default function PKHoldingsVoiceAssistant() {
  const [activeLanguage, setActiveLanguage] = useState<Language>("EN");
  const [isRecording, setIsRecording] = useState(false);
  const [userText, setUserText] = useState("");
  const [botText, setBotText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [speechSupported, setSpeechSupported] = useState(true);

  const recognitionRef = useRef<SpeechRecognitionInstance | null>(null);
  const typingIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const botIndexRef = useRef(0);

  /* ── Typing simulation ── */
  const startTypingEffect = useCallback(() => {
    setBotText("");
    setIsTyping(true);
    botIndexRef.current = 0;

    typingIntervalRef.current = setInterval(() => {
      botIndexRef.current += 3;
      const slice = BOT_RESPONSE.slice(0, botIndexRef.current);
      setBotText(slice);

      if (botIndexRef.current >= BOT_RESPONSE.length) {
        clearInterval(typingIntervalRef.current!);
        setIsTyping(false);
      }
    }, 30);
  }, []);

  /* ── Speech Recognition setup ── */
  useEffect(() => {
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SR) {
      setSpeechSupported(false);
      console.warn("SpeechRecognition API not supported in this browser.");
      return;
    }

    const SpeechRecognitionCtor = SR as new () => any;
    const recognition = new SpeechRecognitionCtor();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang =
      activeLanguage === "EN" ? "en-PH" : activeLanguage === "FIL" ? "fil-PH" : "en-PH";

    recognition.onresult = (event: any) => {
      let transcript = "";
      for (let i = event.resultIndex; i < event.results.length; i++) {
        transcript += event.results[i][0].transcript;
      }
      setUserText(transcript);
    };

    recognition.onerror = () => {
      setIsRecording(false);
    };

    recognitionRef.current = recognition;

    return () => {
      recognition.abort();
    };
  }, [activeLanguage]);

  /* ── Toggle recording ── */
  const toggleRecording = useCallback(() => {
    if (!isRecording) {
      // Start
      setIsRecording(true);
      setUserText("");
      setBotText("");
      setIsTyping(false);
      if (typingIntervalRef.current) clearInterval(typingIntervalRef.current);

      if (speechSupported && recognitionRef.current) {
        try {
          recognitionRef.current.start();
        } catch {
          // already started
        }
      } else {
        // Fallback: simulate user speaking
        setTimeout(() => setUserText("Hi! Tell me about PK Holdings."), 800);
      }

      // After 3s simulate bot response
      setTimeout(() => {
        setIsRecording(false);
        if (recognitionRef.current) {
          try { recognitionRef.current.stop(); } catch { /* ignore */ }
        }
        if (!userText) setUserText("Hi! Tell me about PK Holdings.");
        startTypingEffect();
      }, 3000);
    } else {
      // Stop
      setIsRecording(false);
      if (recognitionRef.current) {
        try { recognitionRef.current.stop(); } catch { /* ignore */ }
      }
      startTypingEffect();
    }
  }, [isRecording, speechSupported, startTypingEffect, userText]);

  /* ── Suggestion pill click ── */
  const handleSuggestion = useCallback(
    (text: string) => {
      if (isRecording) return;
      setUserText(text);
      setBotText("");
      setIsTyping(false);
      if (typingIntervalRef.current) clearInterval(typingIntervalRef.current);
      setTimeout(() => startTypingEffect(), 400);
    },
    [isRecording, startTypingEffect]
  );

  /* ── Cleanup ── */
  useEffect(() => {
    return () => {
      if (typingIntervalRef.current) clearInterval(typingIntervalRef.current);
    };
  }, []);

  return (
    <div className="font-sans antialiased">
      {/* Stats */}
      <StatsCounter />

      {/* Voice Assistant */}
      <section id="chatbot"  className="relative bg-gradient-to-br from-[#f0faf6] to-[#e3f4ec] overflow-hidden min-h-screen">
        <GeometricBg />

        <div className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6 lg:px-8 py-16 max-w-3xl mx-auto">

          {/* Badge */}
          <span className="text-[#1a7a52] text-[10px] font-bold tracking-[0.25em] uppercase mb-4">
            Powered by AI
          </span>

          {/* Heading */}
          <h1
            className="text-[#0A2419] text-3xl sm:text-4xl md:text-5xl font-black mb-4 leading-tight"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            Ask Us Anything — Just Speak
          </h1>

          {/* Subheading */}
          <p className="text-gray-500 text-base max-w-xl mb-8 leading-relaxed">
            Our AI assistant can tell you about our companies, careers, CSR work,
            or connect you with the right person.{" "}
            <span className="text-[#1a7a52] font-medium">
              In English, Filipino, or Taglish.
            </span>
          </p>

          {/* Language Switcher */}
          <div className="flex items-center bg-white/70 backdrop-blur-sm border border-gray-200 rounded-full p-1 gap-1 mb-10 shadow-sm">
            {LANGUAGES.map((lang) => (
              <button
                key={lang}
                onClick={() => setActiveLanguage(lang)}
                className={[
                  "px-5 py-1.5 rounded-full text-sm font-semibold transition-all duration-200",
                  activeLanguage === lang
                    ? "bg-[#0A2419] text-white shadow"
                    : "text-gray-500 hover:text-[#0A2419]",
                ].join(" ")}
              >
                {lang}
              </button>
            ))}
          </div>

          {/* Mic Button */}
          <div className="relative flex items-center justify-center mb-10">
            {/* Outer pulse ring */}
            <span
              className={[
                "absolute w-36 h-36 rounded-full border-2 transition-all duration-300",
                isRecording
                  ? "border-[#1a7a52]/40 animate-ping"
                  : "border-[#1a7a52]/20",
              ].join(" ")}
            />
            {/* Middle ring */}
            <span
              className={[
                "absolute w-28 h-28 rounded-full border transition-all duration-300",
                isRecording ? "border-[#1a7a52]/30" : "border-transparent",
              ].join(" ")}
            />
            {/* Button */}
            <button
              onClick={toggleRecording}
              aria-label={isRecording ? "Stop recording" : "Start recording"}
              className={[
                "relative w-24 h-24 rounded-full flex items-center justify-center shadow-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#1a7a52]/30",
                isRecording
                  ? "bg-[#0a4a30] scale-105 shadow-[0_0_32px_rgba(26,122,82,0.45)]"
                  : "bg-[#0A2419] hover:bg-[#0a4a30] hover:scale-105",
              ].join(" ")}
            >
              <Mic
                size={36}
                className={["text-white transition-all duration-200", isRecording ? "animate-pulse" : ""].join(" ")}
              />
            </button>
          </div>

          {/* Status hint */}
          <p className="text-xs text-gray-400 mb-5 h-4">
            {isRecording
              ? "Listening… speak now"
              : isTyping
              ? "PIA is responding…"
              : "Tap the mic to speak"}
          </p>

          {/* Suggestion Pills */}
          <div className="flex flex-wrap justify-center gap-2.5 mb-10 max-w-2xl">
            {SUGGESTIONS.map((s) => (
              <button
                key={s.id}
                onClick={() => handleSuggestion(s.text)}
                className="bg-white/90 border border-gray-200 text-gray-600 text-xs sm:text-sm font-medium px-4 py-2 rounded-full hover:border-[#1a7a52] hover:text-[#0A2419] transition-all duration-200 shadow-sm"
              >
                {s.text}
              </button>
            ))}
          </div>

          {/* Chat Widget */}
          <ChatWidget
            userText={userText}
            botText={botText}
            isTyping={isTyping}
          />

          {/* Footer notes */}
          <div className="mt-8 flex flex-col items-center gap-2 text-xs text-gray-400">
            <p>Conversations are processed by AI. We don&apos;t store recordings.</p>
            <div className="flex items-center gap-3 flex-wrap justify-center">
              <a
                href="#chat"
                className="underline underline-offset-2 hover:text-[#0A2419] transition-colors"
              >
                Prefer to type? Open chat ▸
              </a>
              <span className="w-1 h-1 rounded-full bg-gray-300" />
              <a
                href="tel:+63288265400"
                className="flex items-center gap-1.5 hover:text-[#0A2419] transition-colors"
              >
                <Phone size={12} />
                Call (02) 8826 5400
              </a>
            </div>
          </div>

          {/* No speech support notice */}
          {!speechSupported && (
            <p className="mt-4 text-xs text-amber-600 bg-amber-50 border border-amber-200 rounded-lg px-4 py-2">
              Your browser doesn&apos;t support voice input. Use the suggestion pills or type instead.
            </p>
          )}
        </div>
      </section>
    </div>
  );
}