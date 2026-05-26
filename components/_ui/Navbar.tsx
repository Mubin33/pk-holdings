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

const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "#", active: true },
  { label: "About", href: "#about" },
  { label: "Companies", href: "#companies" },
  { label: "CSR", href: "#csr" },
  { label: "Careers", href: "#careers" },
  { label: "News", href: "#news" },
  { label: "Contact", href: "#contact" },
];

const AVATAR_PLACEHOLDERS = [
  "/avatar1.jpg",
  "/avatar2.jpg",
  "/avatar3.jpg",
  "/avatar4.jpg",
  "/avatar5.jpg",
];

/* ─────────────────────────────────────────────
   Top Bar
───────────────────────────────────────────── */
function TopBar() {
  return (
    <div className="bg-[#0A2419] text-white/80 text-xs py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        {/* Left: Location */}
        <div className="flex items-center gap-1.5 shrink-0">
          <MapPin size={12} className="text-[#2ec98e] shrink-0" />
          <span className="hidden sm:inline tracking-wide">
            Makati City, Metro Manila, Philippines
          </span>
          <span className="sm:hidden tracking-wide">Makati City, PH</span>
        </div>

        {/* Right: Email + Phone */}
        <div className="flex items-center gap-4 sm:gap-6">
          <a
            href="mailto:info@pkholdings.ph"
            className="flex items-center gap-1.5 hover:text-white transition-colors duration-200"
          >
            <Mail size={12} className="text-[#2ec98e] shrink-0" />
            <span className="hidden md:inline tracking-wide">
              info@pkholdings.ph
            </span>
          </a>
          <a
            href="tel:+6328826 5400"
            className="flex items-center gap-1.5 hover:text-white transition-colors duration-200"
          >
            <Phone size={12} className="text-[#2ec98e] shrink-0" />
            <span className="tracking-wide">(02) 8826 5400</span>
          </a>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Main Navbar
───────────────────────────────────────────── */
export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <TopBar />
      <nav
        className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <Link href="/">
            <img
              src="/logo.png"
              alt="PK Holdings Logo"
              className="h-11 w-auto"
            />
          </Link>

          {/* Desktop Nav Links */}
          <ul className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className={[
                    "relative px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-md",
                    item.active
                      ? "text-[#0A2419]"
                      : "text-gray-500 hover:text-[#0A2419]",
                  ].join(" ")}
                >
                  {item.label}
                  {item.active && (
                    <span className="absolute bottom-0 left-3 right-3 h-[2.5px] bg-[#1a7a52] rounded-full" />
                  )}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop Right */}
          <div className="hidden lg:flex items-center gap-4 shrink-0">
            <a
              href="tel:+63288083400"
              className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#0A2419] transition-colors duration-200"
            >
              <Phone size={14} className="text-[#1a7a52]" />
              <span className="font-medium">(02) 8808 3400</span>
            </a>
            <a
              href="#contact"
              className="bg-[#0A2419] hover:bg-[#0a4a30] text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors duration-200 whitespace-nowrap"
            >
              Get in Touch
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="lg:hidden p-2 rounded-md text-gray-600 hover:text-[#0A2419] hover:bg-gray-100 transition-colors"
            aria-label="Toggle mobile menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-gray-100 py-3 pb-4 space-y-1">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={[
                  "block px-3 py-2 text-sm font-medium rounded-md transition-colors",
                  item.active
                    ? "text-[#0A2419] bg-emerald-50"
                    : "text-gray-600 hover:text-[#0A2419] hover:bg-gray-50",
                ].join(" ")}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-3 px-3 flex flex-col gap-3">
              <a
                href="tel:+63288083400"
                className="flex items-center gap-2 text-sm text-gray-600"
              >
                <Phone size={14} className="text-[#1a7a52]" />
                <span>(02) 8808 3400</span>
              </a>
              <Link
                href="#contact"
                className="bg-[#0A2419] text-white text-sm font-semibold px-5 py-2.5 rounded-lg text-center"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

/* ─────────────────────────────────────────────
   Hero Section
───────────────────────────────────────────── */
