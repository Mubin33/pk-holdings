'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Sprout, Heart, PartyPopper, ArrowRight } from 'lucide-react';

// ─── Types ────────────────────────────────────────────────────────────────────

interface FeatureItem {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const features: FeatureItem[] = [
  {
    id: 'going-green',
    icon: <Sprout className="w-5 h-5 text-emerald-300" />,
    title: 'Going Green',
    description: 'Sustainability partnerships with Sunpower',
  },
  {
    id: 'community-outreach',
    icon: <Heart className="w-5 h-5 text-emerald-300" />,
    title: 'Community Outreach',
    description: 'Blood drives, donations, local events',
  },
  {
    id: 'pk-salu-salo',
    icon: <PartyPopper className="w-5 h-5 text-emerald-300" />,
    title: 'PK Salu-Salo',
    description: 'Annual company-wide celebration of culture',
  },
];

// ─── Dashed SVG Connector Lines ───────────────────────────────────────────────

function DashedConnectors() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox="0 0 560 560"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      {/* Line from top-right small image to main center image */}
      <path
        d="M 430 110 Q 390 130 340 155"
        stroke="#4ade80"
        strokeWidth="1.5"
        strokeDasharray="5 6"
        strokeLinecap="round"
        opacity="0.35"
      />
      {/* Line from bottom-left accent image to bottom-right large image */}
      <path
        d="M 220 420 Q 290 430 360 415"
        stroke="#4ade80"
        strokeWidth="1.5"
        strokeDasharray="5 6"
        strokeLinecap="round"
        opacity="0.35"
      />
      {/* Subtle arc from top area to bottom */}
      <path
        d="M 390 85 C 480 200 500 340 450 460"
        stroke="#4ade80"
        strokeWidth="1"
        strokeDasharray="4 8"
        strokeLinecap="round"
        opacity="0.2"
      />
    </svg>
  );
}

// ─── Image Grid ───────────────────────────────────────────────────────────────

function StaggeredImageGrid() {
  return (
    <div className="relative w-full h-full min-h-[520px] lg:min-h-[580px]">
      {/* SVG dashed connectors behind all images */}
      <DashedConnectors />
 

      {/* Image 1 — Center-top main (tall, hands with soil) */}
      <div
        className="
          absolute rounded-2xl overflow-hidden shadow-2xl
          w-[42%] aspect-[3/4]
          top-0 left-[12%]
          ring-1 ring-white/10
        "
        style={{ zIndex: 2 }}
      >
        <Image
          src="/csrsection1.png"
          alt="Hands nurturing a plant in soil"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 40vw, 22vw"
        />
        {/* Fallback gradient placeholder */}
        {/* <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-900 flex items-center justify-center">
          <Sprout className="w-12 h-12 text-emerald-400 opacity-60" />
        </div> */}
      </div>

      {/* Image 2 — Top-right accent (small celebration) */}
      <div
        className="
          absolute rounded-2xl overflow-hidden shadow-xl
          w-[24%] aspect-square
          top-[2%] right-[2%]
          ring-1 ring-white/10
        "
        style={{ zIndex: 3 }}
      >
        <Image
          src="/csrsection2.jpg"
          alt="Team celebration"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 22vw, 12vw"
        />
        {/* <div className="absolute inset-0 bg-gradient-to-br from-amber-800 via-orange-700 to-rose-900 flex items-center justify-center">
          <PartyPopper className="w-8 h-8 text-amber-300 opacity-60" />
        </div> */}
      </div>

      {/* Image 3 — Bottom-left accent (planting activity) */}
      <div
        className="
          absolute rounded-2xl overflow-hidden shadow-xl
          w-[33%] aspect-[4/3]
          bottom-[2%] left-[0%]
          ring-1 ring-white/10
        "
        style={{ zIndex: 3 }}
      >
        <Image
          src="/csrsection3.jpg"
          alt="Outdoor green initiative planting activity"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 30vw, 18vw"
        />
        {/* <div className="absolute inset-0 bg-gradient-to-br from-green-900 via-emerald-700 to-lime-900 flex items-center justify-center">
          <Heart className="w-8 h-8 text-green-300 opacity-60" />
        </div> */}
      </div>

      {/* Image 4 — Bottom-right main (office/team strategy) */}
      <div
        className="
          absolute rounded-2xl overflow-hidden shadow-2xl
          w-[50%] aspect-[4/3]
          bottom-0 right-[0%]
          ring-1 ring-white/10
        "
        style={{ zIndex: 2 }}
      >
        <Image
          src="/csrsection4.jpg"
          alt="Team strategy discussion in office environment"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 46vw, 26vw"
        />
        {/* <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-zinc-800 to-stone-900 flex items-center justify-center">
          <ArrowRight className="w-10 h-10 text-slate-400 opacity-60" />
        </div> */}
      </div>

      {/* Subtle glow bloom behind images */}
      <div
        className="absolute w-64 h-64 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none"
        style={{ top: '20%', left: '30%', zIndex: 0 }}
      />
      <div
        className="absolute w-48 h-48 rounded-full bg-teal-400/8 blur-2xl pointer-events-none"
        style={{ bottom: '15%', right: '20%', zIndex: 0 }}
      />
    </div>
  );
}

// ─── Feature Card ─────────────────────────────────────────────────────────────

interface FeatureCardProps {
  item: FeatureItem;
  isActive: boolean;
  onClick: () => void;
}

function FeatureCard({ item, isActive, onClick }: FeatureCardProps) {
  return (
    <button
      onClick={onClick}
      className={`
        relative w-full text-left flex items-center gap-4
        rounded-xl px-5 py-4 transition-all duration-300 group
        border cursor-pointer
        ${
          isActive
            ? 'bg-white/8 border-white/15 shadow-lg shadow-black/20'
            : 'bg-white/4 border-white/8 hover:bg-white/6 hover:border-white/12'
        }
      `}
    >
      {/* Active left accent bar */}
      <span
        className={`
          absolute left-0 top-1/2 -translate-y-1/2 rounded-full
          w-[3px] transition-all duration-300
          ${isActive ? 'h-8 bg-emerald-400' : 'h-0 bg-emerald-400/0 group-hover:h-5 group-hover:bg-emerald-400/50'}
        `}
      />

      {/* Icon box */}
      <span
        className={`
          flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center
          transition-colors duration-300
          ${isActive ? 'bg-emerald-700/60' : 'bg-emerald-900/50 group-hover:bg-emerald-800/50'}
        `}
      >
        {item.icon}
      </span>

      {/* Text */}
      <span className="flex flex-col gap-0.5">
        <span
          className={`
            font-semibold text-sm tracking-wide transition-colors duration-200
            ${isActive ? 'text-white' : 'text-emerald-100/80 group-hover:text-white'}
          `}
        >
          {item.title}
        </span>
        <span className="text-xs text-emerald-200/45 font-light leading-snug">
          {item.description}
        </span>
      </span>
    </button>
  );
}

// ─── Main Section Component ───────────────────────────────────────────────────

export default function CSRSection() {
  const [activeId, setActiveId] = useState<string>('going-green');

  return (
    <section
      className="relative w-full bg-[#052e1e] overflow-hidden"
      aria-label="Corporate Social Responsibility"
    >
      {/* Subtle noise texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundSize: '128px',
        }}
      />

      {/* Background radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[50%] h-[70%] rounded-full bg-emerald-900/30 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[5%] w-[40%] h-[60%] rounded-full bg-teal-900/20 blur-[100px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* ── LEFT COLUMN ── */}
          <div className="flex flex-col gap-8">

            {/* Badge */}
            <div className="inline-flex w-fit">
              <span className="
                px-4 py-1.5 rounded-full
                bg-white text-[#052e1e]
                text-[10px] font-bold tracking-[0.22em] uppercase
                shadow-sm
              ">
                Corporate Social Responsibility
              </span>
            </div>

            {/* Heading */}
            <h2
              className="
                text-4xl md:text-5xl lg:text-[3.25rem] xl:text-[3.5rem]
                font-bold leading-[1.08] tracking-tight text-white
              " 
            >
              Giving Back to the{' '}
              <span className="text-white">Communities We Serve</span>
            </h2>

            {/* Description */}
            <p className="text-emerald-100/60 text-base md:text-[1.05rem] leading-relaxed max-w-[520px]">
              From PK Salu-Salo gatherings to our Going Green environmental
              initiative, we believe every business decision should uplift the
              people and communities around us.
            </p>

            {/* Feature Cards */}
            <div className="flex flex-col gap-3" role="tablist" aria-label="CSR Initiatives">
              {features.map((item) => (
                <FeatureCard
                  key={item.id}
                  item={item}
                  isActive={activeId === item.id}
                  onClick={() => setActiveId(item.id)}
                />
              ))}
            </div>

            {/* CTA Button */}
            <div className="mt-2">
              <button
                className="
                  inline-flex items-center gap-2.5
                  bg-white text-[#052e1e]
                  px-6 py-3.5 rounded-xl
                  font-semibold text-sm tracking-wide
                  shadow-lg shadow-black/20
                  hover:bg-emerald-50
                  transition-all duration-200
                  group
                "
              >
                View Our CSR Initiatives
                <span className="
                  w-7 h-7 rounded-lg bg-[#0A2419] flex items-center justify-center
                  group-hover:translate-x-0.5 transition-transform duration-200
                ">
                  <ArrowRight className="w-4 h-4 text-emerald-300" />
                </span>
              </button>
            </div>
          </div>

          {/* ── RIGHT COLUMN ── */}
          <div className="relative w-full">
            <StaggeredImageGrid />
          </div>

        </div>
      </div>
    </section>
  );
}