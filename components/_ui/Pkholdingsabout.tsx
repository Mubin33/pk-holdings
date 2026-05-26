import Image from "next/image";
import { TrendingUp, ArrowRight } from "lucide-react";

/* ─────────────────────────────────────────────
   Floating Stats Badge
───────────────────────────────────────────── */
function StatsBadge() {
  return (
    <div className="absolute -bottom-6 right-4 lg:-right-6 bg-white shadow-xl rounded-2xl px-5 py-4 flex items-center gap-4 min-w-[200px]">
      {/* Icon bubble */}
      <div className="w-11 h-11 rounded-full bg-emerald-50 flex items-center justify-center shrink-0">
        <TrendingUp size={20} className="text-emerald-500" />
      </div>

      {/* Text stack */}
      <div className="flex flex-col">
        <span className="text-xs text-gray-400 font-medium leading-none mb-1">
          Total Reach
        </span>
        <span
          className="text-2xl font-black text-[#0A2419] leading-tight" 
        >
          20,000+
        </span>
        <span className="text-xs text-emerald-500 font-semibold mt-0.5 flex items-center gap-0.5">
          ↑ 40% growth
        </span>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   About Section
───────────────────────────────────────────── */
export default function PKHoldingsAbout() {
  return (
    <section className="bg-[#FAF8F5] py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">

          {/* ── Left Column: Image + Badge ── */}
          <div className="relative pb-8 lg:pb-6">
            {/* Soft decorative blob behind image */}
            <div
              className="absolute -top-8 -left-8 w-64 h-64 rounded-full opacity-30 blur-3xl pointer-events-none"
              style={{ background: "radial-gradient(circle, #f9c0c0 0%, #fde8d8 100%)" }}
              aria-hidden="true"
            />

            {/* Main image */}
            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/about.jpg"
                alt="Aerial view of Manila cityscape representing PK Holdings' reach across the Philippines"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>

            {/* Floating stats badge */}
            <StatsBadge />
          </div>

          {/* ── Right Column: Copy + CTA ── */}
          <div className="flex flex-col gap-5 pt-4 lg:pt-0">
            {/* Section label */}
            <span className="text-emerald-500 text-xs font-bold tracking-[0.22em] uppercase">
              About Company
            </span>

            {/* Heading */}
            <h2
              className="text-[#0A2419] text-3xl sm:text-4xl xl:text-[2.6rem] font-bold leading-tight" 
            >
              We&apos;re Committed to Helping Filipinos Achieve Their Dreams
            </h2>

            {/* Body paragraphs */}
            <div className="flex flex-col gap-4 text-zinc-600 text-base leading-relaxed">
              <p>
                For over two decades, PK Holdings has been a trusted partner for
                businesses and families across the Philippines. We believe that
                family and relationships are the heart of every meaningful journey.
              </p>
              <p>
                From logistics to hospitality, from travel to sustainability — we
                provide comprehensive solutions that empower communities and drive
                growth. Our people-first approach ensures that every partnership is
                built on trust, innovation, and shared success.
              </p>
              <p>
                Step into our family, where your goals become our mission, and
                together, we build a better Philippines.
              </p>
            </div>

            {/* CTA Button */}
            <div className="mt-2">
              <a
                href="#contact"
                className="inline-flex items-center gap-2.5 bg-[#0A2419] hover:bg-[#0a4a30] text-white text-sm font-semibold px-7 py-3.5 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg group"
              >
                Get In Touch
                <ArrowRight
                  size={16}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}