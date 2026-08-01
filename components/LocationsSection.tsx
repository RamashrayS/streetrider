"use client";

import { MapPin, Phone, Building2 } from "lucide-react";

export default function LocationsSection() {
  return (
    <section id="locations" className="py-20 bg-[#061517] text-slate-100 pl-12 sm:pl-16 border-t border-[#122e32] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-heading tracking-widest text-cyan-400 uppercase mb-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            Pickup & Drop Hubs
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl font-black text-white uppercase tracking-tight">
            OUR <span className="text-cyan-400">LOCATIONS</span>
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm mt-2 opacity-90">
            Visit our branch hubs in Pune for easy vehicle inspection, documentation & pickup.
          </p>
        </div>

        {/* Both Branches inside Premium Glass Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Branch 1 Card */}
          <div className="bg-[#091a1d] border border-[#16383d] hover:border-cyan-400/50 rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl transition-all duration-300 group">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading text-2xl font-extrabold text-white uppercase">BRANCH 1 — KATRAJ</h3>
                  <span className="text-xs text-cyan-400 font-semibold">StreetRider Pune Hub</span>
                </div>
              </div>
              <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[10px] font-heading font-bold rounded-full">
                OPEN NOW
              </span>
            </div>

            {/* Address */}
            <div className="space-y-2 text-xs sm:text-sm text-slate-200">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <div className="leading-relaxed opacity-95">
                  <strong className="text-white block font-heading text-base mb-1">StreetRider</strong>
                  S.No. 56/9/2, Dugad Chawl<br />
                  Next to ISKCON Temple Parking<br />
                  Katraj Kondhwa Road<br />
                  Pune – 411048
                </div>
              </div>
            </div>

            {/* Phone Numbers */}
            <div className="pt-4 border-t border-white/10 space-y-2">
              <span className="text-[10px] font-heading uppercase text-slate-400 tracking-wider block">Direct Phone Contact</span>
              <div className="flex flex-wrap gap-2 text-xs font-bold">
                <a href="tel:9730414703" className="px-3 py-1.5 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 hover:bg-cyan-500 hover:text-black transition-all flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5" /> 9730414703
                </a>
                <a href="tel:7024317024" className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-slate-200 hover:bg-white hover:text-black transition-all flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5" /> 7024317024
                </a>
                <a href="tel:9422008339" className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-slate-200 hover:bg-white hover:text-black transition-all flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5" /> 9422008339
                </a>
              </div>
            </div>
          </div>

          {/* Branch 2 Card */}
          <div className="bg-[#091a1d] border border-[#16383d] hover:border-cyan-400/50 rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl transition-all duration-300 group">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading text-2xl font-extrabold text-white uppercase">BRANCH 2 — MUNDHWA</h3>
                  <span className="text-xs text-cyan-400 font-semibold">StreetRider Pune Hub</span>
                </div>
              </div>
              <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[10px] font-heading font-bold rounded-full">
                OPEN NOW
              </span>
            </div>

            {/* Address */}
            <div className="space-y-2 text-xs sm:text-sm text-slate-200">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <div className="leading-relaxed opacity-95">
                  <strong className="text-white block font-heading text-base mb-1">StreetRider</strong>
                  Near Bharat Marble<br />
                  Near Hadapsar Railway Bridge<br />
                  Mundhwa<br />
                  Pune
                </div>
              </div>
            </div>

            {/* Phone Numbers */}
            <div className="pt-4 border-t border-white/10 space-y-2">
              <span className="text-[10px] font-heading uppercase text-slate-400 tracking-wider block">Direct Phone Contact</span>
              <div className="flex flex-wrap gap-2 text-xs font-bold">
                <a href="tel:9730414703" className="px-3 py-1.5 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 hover:bg-cyan-500 hover:text-black transition-all flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5" /> 9730414703
                </a>
                <a href="tel:9372626667" className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-slate-200 hover:bg-white hover:text-black transition-all flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5" /> 9372626667
                </a>
                <a href="tel:7024317024" className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-slate-200 hover:bg-white hover:text-black transition-all flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5" /> 7024317024
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
