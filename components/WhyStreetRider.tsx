"use client";

import { ShieldCheck, Wallet, Lock, Calendar, Bike, FileText, Zap, Headset } from "lucide-react";

export default function WhyStreetRider() {
  const features = [
    {
      icon: ShieldCheck,
      title: "Well Maintained Vehicles",
      desc: "Regular servicing, strict safety checks and smooth performance guaranteed for every ride.",
    },
    {
      icon: Wallet,
      title: "Affordable Monthly Rentals",
      desc: "Budget-friendly subscription rates designed specifically for students, IT pros and daily commuters.",
    },
    {
      icon: Lock,
      title: "Safe & Reliable Rides",
      desc: "100% reliable engines, complimentary ISI helmets and 24/7 Pune city support.",
    },
    {
      icon: Calendar,
      title: "Flexible Rental Plans",
      desc: "Custom monthly options with easy extensions and hassle-free vehicle returns.",
    },
    {
      icon: Bike,
      title: "Wide Selection of Bikes",
      desc: "Choose from scooters, commuter bikes, sports motorcycles and cruisers.",
    },
    {
      icon: FileText,
      title: "Easy Documentation",
      desc: "Minimal paperwork required. Just submit valid driving licence and government ID proof.",
    },
    {
      icon: Zap,
      title: "Quick Booking Process",
      desc: "Fast verification and instant vehicle pickup from Katraj or Mundhwa branches.",
    },
    {
      icon: Headset,
      title: "Friendly Customer Support",
      desc: "Dedicated team available over call and WhatsApp for seamless rental assistance.",
    },
  ];

  return (
    <section id="why-us" className="py-20 bg-[#051113] text-slate-100 pl-12 sm:pl-16 border-t border-[#122e32] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-heading tracking-widest text-cyan-400 uppercase mb-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            StreetRider Advantage
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl font-black text-white uppercase tracking-tight">
            WHY <span className="text-cyan-400">STREETRIDER</span>
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm mt-2 opacity-90">
            We provide Pune's simplest, most reliable two-wheeler subscription experience.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div
                key={idx}
                className="bg-[#081a1c] border border-[#15383d] hover:border-cyan-400/50 rounded-2xl p-6 transition-all duration-300 group hover:-translate-y-1 shadow-xl"
              >
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center mb-4 group-hover:bg-cyan-500 group-hover:text-black text-cyan-400 transition-colors">
                  <IconComp className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-xl font-bold text-white uppercase tracking-wide mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-300 text-xs leading-relaxed opacity-90">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
