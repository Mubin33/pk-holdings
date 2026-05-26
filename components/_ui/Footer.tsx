'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { 
  MapPin, 
  Mail, 
  Phone, 
  ArrowRight, 
  Mic, 
  Send 
} from 'lucide-react';
 

export default function Footer() { 
 

  return (
    <div className="w-full bg-[#FAF8F5] font-sans antialiased">
       
      <footer className="bg-[#0A2419] text-white pt-16 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1440px] mx-auto">
          
          {/* Top Links Layout Layer Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-8 pb-12">
            
            {/* Column 1: Core Company Meta Brand profile */}
            <div className="md:col-span-4 space-y-4">
              <h3 className="text-lg font-bold tracking-wider">PK HOLDINGS</h3>
              <p className="text-xs text-emerald-100/60 leading-relaxed max-w-sm">
                Building lasting partnerships through trust, innovation, and a people-first approach.
              </p>
              {/* Row of Icon circles */}
              {/* <div className="flex items-center gap-3 pt-2">
                <a href="#" aria-label="Facebook" className="bg-white/5 hover:bg-white/10 text-white/80 p-2 rounded-full transition-colors">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="#" aria-label="Twitter" className="bg-white/5 hover:bg-white/10 text-white/80 p-2 rounded-full transition-colors">
                  <Twitter className="w-4 h-4" />
                </a>
                <a href="#" aria-label="LinkedIn" className="bg-white/5 hover:bg-white/10 text-white/80 p-2 rounded-full transition-colors">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href="#" aria-label="Instagram" className="bg-white/5 hover:bg-white/10 text-white/80 p-2 rounded-full transition-colors">
                  <Instagram className="w-4 h-4" />
                </a>
              </div> */}
            </div>

            {/* Column 2: Internal Structure links block */}
            <div className="md:col-span-2 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-widest text-emerald-400">Company</h4>
              <ul className="space-y-2 text-xs text-emerald-100/70">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Our Companies</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">CSR Initiatives</a></li>
                <li><a href="#" className="hover:text-white transition-colors">News & Media</a></li>
              </ul>
            </div>

            {/* Column 3: Documentation Resources links block */}
            <div className="md:col-span-2 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-widest text-emerald-400">Resources</h4>
              <ul className="space-y-2 text-xs text-emerald-100/70">
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQs</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>

            {/* Column 4: Newsletter Field */}
            <div className="md:col-span-4 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-widest text-emerald-400">Newsletter</h4>
              <p className="text-xs text-emerald-100/60 leading-relaxed">
                Stay updated with our latest news and updates.
              </p>
              {/* Custom Input Inline bar row */}
              <form onSubmit={(e) => e.preventDefault()} className="flex items-center gap-2 pt-2">
                <input
                  type="email"
                  placeholder="Your email"
                  required
                  className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-xs text-white placeholder-zinc-500 w-full focus:outline-none focus:border-emerald-500 transition-colors"
                />
                <button 
                  type="submit" 
                  aria-label="Subscribe"
                  className="bg-emerald-600 hover:bg-emerald-500 text-white p-2 rounded-lg transition-colors flex-shrink-0"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>

          </div>

          {/* Bottom Footer Layer (Copyright & Localization bar) */}
          <div className="border-t border-white/10 pt-8 mt-4 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] text-emerald-100/40">
            <div>
              &copy; 2026 PK Holdings. All rights reserved.
            </div>
            
            <div className="flex flex-wrap items-center gap-4 sm:gap-6">
              <div className="flex items-center gap-2 text-emerald-100/60 font-medium">
                <span className="hover:text-white cursor-pointer transition-colors text-white">EN</span>
                <span className="text-white/20">|</span>
                <span className="hover:text-white cursor-pointer transition-colors">FIL</span>
              </div>
              <span className="hidden sm:inline text-white/10">•</span>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}