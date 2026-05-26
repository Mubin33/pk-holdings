"use client";

import React, { useState } from "react";
import {
  MapPin,
  Mail,
  Phone,
  ArrowRight,
  Mic,
  Star,
  Menu,
  X,
} from "lucide-react";
import Link from "next/link";

/* ─────────────────────────────────────────────
   Types
───────────────────────────────────────────── */
interface NavItem {
  label: string;
  href: string;
  active?: boolean;
} 

const AVATAR_PLACEHOLDERS = [
  "/avater1.jpg",
  "/avater2.jpg",
  "/avater3.jpg",
  "/avater4.jpg",
];


export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-[calc(100vh-50px)] flex flex-col items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hero-bg.png')" }}
        aria-hidden="true"
      />

      {/* Dark Teal/Green Gradient Overlay */}
      {/* <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(6,51,34,0.82) 0%, rgba(10,74,48,0.70) 50%, rgba(6,51,34,0.75) 100%)",
        }}
        aria-hidden="true"
      /> */}

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6 lg:px-8 py-20 max-w-[1440px] mx-auto w-full">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/95 text-[#0A2419] text-xs font-bold uppercase tracking-widest px-5 py-2 rounded-full mb-10 shadow-md">
           Est. 2003 · 20+ Years of Trust
        </div>

        {/* Heading */}
        <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight mb-6" style={{ fontFamily: "'Georgia', 'Times New Roman', serif", fontStyle: "italic" }}>
          <span className="block">
            Putting{" "}
            <em
              className="not-italic text-[#2ec98e]"
              style={{ fontFamily: "'Georgia', 'Times New Roman', serif", fontStyle: "italic" }}
            >
              People
            </em>{" "}
            First.
          </span>
          <span className="block text-[#2ec98e]">
            For Over Two{" "}
            <em
              className="not-italic text-white/90"
              style={{ fontFamily: "'Georgia', 'Times New Roman', serif", fontStyle: "italic" }}
            >
              Decades.
            </em>
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-white/75 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          A Filipino family of companies in logistics, hospitality, and
          travel — built on culture, values, and the belief that people come
          before profit.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14 w-full">
          {/* Primary */}
          <a
            href="#companies"
            className="group flex items-center gap-2.5 bg-white text-[#0A2419] text-sm font-semibold px-7 py-3.5 rounded-xl shadow-lg hover:bg-gray-50 transition-all duration-200 w-full sm:w-auto justify-center"
          >
            Explore Our Companies
            <ArrowRight
              size={16}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </a>

          {/* Secondary */}
          <Link
            href="#chatbot"
            className="flex items-center gap-2.5 bg-transparent border border-white/60 text-white text-sm font-semibold px-7 py-3.5 rounded-xl hover:bg-white/10 hover:border-white transition-all duration-200 w-full sm:w-auto justify-center"
          >
            <Mic size={16} className="opacity-80" />
            Talk to PIA
          </Link>
        </div>

        {/* Social Proof */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5">
          {/* Overlapping Avatars */}
          <div className="flex -space-x-3">
            {AVATAR_PLACEHOLDERS.map((src, i) => (
              <div
                key={i}
                className="w-10 h-10 rounded-full border-2 border-white/80 bg-gradient-to-br from-emerald-400 to-teal-600 overflow-hidden flex items-center justify-center text-white text-xs font-bold shadow-sm"
                style={{ zIndex: AVATAR_PLACEHOLDERS.length - i }}
              >
                {/* Swap <img src={src} … /> for real images */}
                <img
                  src={src}
                  alt={`Partner ${i + 1}`}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback to initials if image is missing
                    (e.currentTarget as HTMLImageElement).style.display = "none";
                  }}
                />
                {/* <span className="absolute text-xs font-bold">{i + 1}</span> */}
              </div>
            ))}
          </div>

          {/* Stars + Text */}
          <div className="flex flex-col items-center sm:items-start gap-1">
            <div className="flex items-center gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={14}
                  className="fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>
            <p className="text-white/60 text-xs tracking-wide">
              Trusted by{" "}
              <span className="text-white/90 font-semibold">1,000+</span>{" "}
              partners across SE Asia
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}