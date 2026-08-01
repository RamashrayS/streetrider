"use client";

import { ArrowRight, Phone } from "lucide-react";

interface CtaSectionProps {
  onOpenBooking: () => void;
}

export default function CtaSection({ onOpenBooking }: CtaSectionProps) {
  return (
    <section className="py-14 sm:py-20 bg-[#061517] text-slate-100 px-4 sm:px-6 md:pl-20 md:pr-8 border-t border-[#122e32] relative overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-cyan-900/20 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-8 relative z-10 text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-semibold text-cyan-300">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span>Katraj & Mundhwa Hubs Open</span>
        </div>

        {/* Requested Heading */}
        <h2 className="font-heading text-4xl sm:text-6xl font-black text-white uppercase tracking-tight">
          READY TO <span className="text-cyan-400">RIDE?</span>
        </h2>

        {/* Requested Subheading */}
        <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto font-normal opacity-95 leading-relaxed">
          Book your perfect two-wheeler today and explore Pune with complete freedom.
        </p>

        {/* Action Buttons */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={onOpenBooking}
            className="px-9 py-4 rounded-full bg-cyan-500 hover:bg-cyan-400 text-black font-heading text-sm font-extrabold uppercase tracking-widest transition-all duration-300 shadow-xl shadow-cyan-500/20 flex items-center gap-2"
          >
            <span>Book Your Ride</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href="tel:9730414703"
            className="px-8 py-4 rounded-full border border-white/40 bg-black/40 hover:bg-white hover:text-[#061517] text-white font-heading text-sm font-bold uppercase tracking-widest transition-all duration-300 flex items-center gap-2"
          >
            <Phone className="w-4 h-4" />
            <span>Call 9730414703</span>
          </a>
        </div>
      </div>
    </section>
  );
}
