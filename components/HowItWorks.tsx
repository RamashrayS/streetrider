"use client";

import { Bike, Phone, FileCheck, ShieldCheck, Key, Sparkles } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Choose Your Vehicle",
      desc: "Select from our wide range of scooters, commuter bikes, sports motorcycles and cruisers.",
      icon: Bike,
    },
    {
      num: "02",
      title: "Contact StreetRider",
      desc: "Call or WhatsApp us at 9730414703 to check vehicle availability & confirm details.",
      icon: Phone,
    },
    {
      num: "03",
      title: "Submit Driving Licence & ID Proof",
      desc: "Provide your valid driving licence and government ID proof (Aadhaar Card / Passport).",
      icon: FileCheck,
    },
    {
      num: "04",
      title: "Verification & Security Deposit",
      desc: "Fast verification and security deposit payment (if applicable for your chosen model).",
      icon: ShieldCheck,
    },
    {
      num: "05",
      title: "Pickup Your Ride",
      desc: "Collect your key & inspected vehicle from our Katraj or Mundhwa branch in Pune.",
      icon: Key,
    },
    {
      num: "06",
      title: "Enjoy Your Journey",
      desc: "Ride Pune with complete freedom, zero maintenance worries and reliable support.",
      icon: Sparkles,
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-[#061517] text-slate-100 pl-12 sm:pl-16 border-t border-[#122e32] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-heading tracking-widest text-cyan-400 uppercase mb-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            Simple 6-Step Process
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl font-black text-white uppercase tracking-tight">
            HOW IT <span className="text-cyan-400">WORKS</span>
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm mt-2 opacity-90">
            Get your two-wheeler in Pune in just a few quick steps.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, idx) => {
            const IconComponent = step.icon;
            return (
              <div
                key={idx}
                className="bg-[#091a1d] border border-[#16383d] rounded-2xl p-6 relative group hover:border-cyan-400/50 transition-all duration-300 shadow-xl"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="font-heading text-4xl font-extrabold text-cyan-400/30 group-hover:text-cyan-400 transition-colors">
                    {step.num}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                    <IconComponent className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="font-heading text-xl font-bold text-white uppercase tracking-wide mb-2">
                  {step.title}
                </h3>
                <p className="text-slate-300 text-xs leading-relaxed opacity-90">
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
