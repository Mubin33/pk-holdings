"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MapPin, Mail, Phone, ArrowRight, Mic, Send } from "lucide-react";

// Form Data TypeScript Interface
interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export default function Contact() {
  // Form State Handling
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Submitted Contact Data:", formData);
  };

  return (
    <div id="contact" className="w-full bg-[#FAF8F5] font-sans antialiased">
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto">
        {/* Header Strings */}
        <div className="mb-12 max-w-2xl">
          <span className="text-[#e06141] text-xs font-bold tracking-widest uppercase block mb-2">
            Contact
          </span>
          <h1 className="text-4xl md:text-5xl font-serif text-[#052e1e] tracking-tight mb-4">
            Let&apos;s start a conversation.
          </h1>
          <p className="text-zinc-600 text-sm md:text-base leading-relaxed">
            Whether you&apos;re a future partner, applicant, or kababayan with a
            question — we&apos;d love to hear from you.
          </p>
        </div>

        {/* Layout Grid Split Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Form Card */}
          <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl shadow-zinc-200/50 border border-zinc-100 lg:col-span-7">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="name"
                    className="text-xs font-bold text-[#052e1e]/80 px-1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Juan dela Cruz"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-[#f4faf7] border border-transparent rounded-xl px-4 py-3 text-sm text-[#052e1e] placeholder-zinc-400 focus:outline-none focus:border-[#052e1e]/20 transition-colors"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="email"
                    className="text-xs font-bold text-[#052e1e]/80 px-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="juan@email.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-[#f4faf7] border border-transparent rounded-xl px-4 py-3 text-sm text-[#052e1e] placeholder-zinc-400 focus:outline-none focus:border-[#052e1e]/20 transition-colors"
                  />
                </div>

                {/* Phone */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="phone"
                    className="text-xs font-bold text-[#052e1e]/80 px-1"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="+63 917 000 0000"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full bg-[#f4faf7] border border-transparent rounded-xl px-4 py-3 text-sm text-[#052e1e] placeholder-zinc-400 focus:outline-none focus:border-[#052e1e]/20 transition-colors"
                  />
                </div>

                {/* Subject */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="subject"
                    className="text-xs font-bold text-[#052e1e]/80 px-1"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Partnership inquiry"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full bg-[#f4faf7] border border-transparent rounded-xl px-4 py-3 text-sm text-[#052e1e] placeholder-zinc-400 focus:outline-none focus:border-[#052e1e]/20 transition-colors"
                  />
                </div>
              </div>

              {/* Message Block */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="message"
                  className="text-xs font-bold text-[#052e1e]/80 px-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="How can we help?"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-[#f4faf7] border border-transparent rounded-xl px-4 py-3 text-sm text-[#052e1e] placeholder-zinc-400 focus:outline-none focus:border-[#052e1e]/20 resize-none transition-colors"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#052e1e] hover:bg-[#0A2419] text-white font-medium rounded-xl py-3.5 px-4 flex items-center justify-center gap-2 transition-colors duration-200 group"
              >
                <span>Send message</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            </form>
          </div>

          {/* Right Column: Static components + AI callout */}
          <div className="flex flex-col gap-6 lg:col-span-5 w-full">
            {/* Map Element */}
            <div className="relative w-full aspect-[16/9] lg:aspect-[16/10] bg-zinc-200 rounded-2xl overflow-hidden shadow-sm">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4580.696937954007!2d121.01630497574087!3d14.561238078037894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c909aa4d923f%3A0x9aa66835cfc98656!2sOne%20Pacific%20Place%20Serviced%20Residences!5e1!3m2!1sen!2sbd!4v1779767481197!5m2!1sen!2sbd"
                width="600"
                height="450"
                style={{ border: "0" }}
                // allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            {/* Direct Coordinates Card */}
            <div className="bg-white shadow-md shadow-zinc-100 rounded-2xl p-6 space-y-4 border border-zinc-100/60">
              <div className="flex items-start gap-4">
                <div className="bg-[#fdf3f0] text-[#e06141] p-2.5 rounded-xl flex-shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <p className="text-xs sm:text-sm text-zinc-600 pt-1 leading-relaxed">
                  12F One Pacific Place, Makati City, Philippines 1226
                </p>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-[#fdf3f0] text-[#e06141] p-2.5 rounded-xl flex-shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <a
                  href="mailto:hello@pamilyaholdings.ph"
                  className="text-xs sm:text-sm text-zinc-600 hover:underline"
                >
                  hello@pamilyaholdings.ph
                </a>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-[#fdf3f0] text-[#e06141] p-2.5 rounded-xl flex-shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <a
                  href="tel:0288265400"
                  className="text-xs sm:text-sm text-zinc-600 hover:underline"
                >
                  (02) 8826 5400
                </a>
              </div>
            </div>

            {/* Bottom AI Promo Banner */}
            <div className="bg-[#052e1e] rounded-2xl p-4 flex items-center justify-between text-white shadow-md cursor-pointer group hover:bg-[#0A2419] transition-colors duration-200">
              <div className="flex items-center gap-4">
                <div className="bg-white/10 p-3 rounded-xl flex-shrink-0 text-emerald-400">
                  <Mic className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold tracking-wide">
                    Wanna leave a message! Talk to PK AI.
                  </span>
                  <span className="text-[11px] text-emerald-100/50 mt-0.5">
                    Available 24/7 • EN • FIL • Taglish
                  </span>
                </div>
              </div>
              <ArrowRight className="w-5 h-5 text-white/70 transition-transform duration-200 group-hover:translate-x-1 pr-1" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
