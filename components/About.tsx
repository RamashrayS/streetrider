"use client";

import Image from "next/image";
import { CheckCircle2, ShieldCheck, MapPin, Phone } from "lucide-react";

export default function About() {
  return (
    <section
      id="about-us"
      className="relative py-12 sm:py-16 bg-[radial-gradient(ellipse_at_center,_#0f282b_0%,_#071719_60%,_#051214_100%)] text-slate-100 px-4 sm:px-6 md:pl-20 md:pr-8 border-t border-[#102d31] overflow-hidden select-none"
    >
      {/* Rider Banner Image with Fading Overlay */}
      <div className="relative w-full h-[240px] sm:h-[320px] overflow-hidden">
        <Image
          src="/images/rider_about.png"
          alt="StreetRider Rider Pune"
          fill
          priority
          className="object-cover object-right opacity-80"
        />
        {/* Soft Teal Left Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1e20] via-[#0a1e20]/75 to-transparent" />
        
        {/* Giant StreetRider Brand Title */}
        <div className="absolute bottom-6 left-6 sm:left-12">
          <h2 className="font-heading text-5xl sm:text-8xl font-black tracking-tight text-white uppercase leading-none opacity-95">
            StreetRider
          </h2>
        </div>
      </div>

      {/* Content Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: ABOUT STREETRIDER exact requested copy */}
          <div className="lg:col-span-7 space-y-5">
            <h3 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-wider text-white uppercase">
              ABOUT STREETRIDER
            </h3>

            {/* Requested exact about text */}
            <p className="text-slate-200 text-sm sm:text-base font-normal leading-relaxed text-justify opacity-95">
              StreetRider is a trusted two-wheeler rental service based in Pune, offering affordable monthly rental plans for scooters and motorcycles. Whether you're a college student, working professional or daily commuter, StreetRider provides well-maintained vehicles, flexible rental options and reliable customer support to make commuting simple and hassle-free.
            </p>

            {/* Key highlights */}
            <div className="grid grid-cols-2 gap-3 pt-4 border-t border-white/10 text-xs font-medium text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Well Maintained Vehicles</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Affordable Monthly Rentals</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Safe & Reliable Rides</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Flexible Rental Plans</span>
              </div>
            </div>
          </div>

          {/* Right Column: Pune Katraj & Mundhwa Branch Summary (No dealership photo) */}
          <div className="lg:col-span-5">
            <div className="bg-[#081a1c]/90 border border-[#163c41] rounded-2xl overflow-hidden shadow-2xl p-6 space-y-5">
              
              <div className="font-heading font-bold text-white tracking-widest text-base uppercase flex items-center gap-2 border-b border-white/10 pb-3">
                <ShieldCheck className="w-5 h-5 text-cyan-400" />
                <span>STREETRIDER PUNE BRANCHES</span>
              </div>

              <div className="space-y-4 text-slate-200 text-xs sm:text-sm">
                <div className="flex items-start gap-3 bg-[#051416] p-3.5 rounded-xl border border-white/5">
                  <MapPin className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-heading text-xs uppercase text-cyan-300 mb-1">Katraj Branch</strong>
                    Next to ISKCON Temple Parking, Katraj Kondhwa Road, Pune – 411048
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-[#051416] p-3.5 rounded-xl border border-white/5">
                  <MapPin className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-heading text-xs uppercase text-cyan-300 mb-1">Mundhwa Branch</strong>
                    Near Bharat Marble, Near Hadapsar Railway Bridge, Mundhwa, Pune
                  </div>
                </div>

                <div className="flex items-center gap-2.5 text-cyan-400 font-bold pt-2 border-t border-white/10 text-xs">
                  <Phone className="w-4 h-4 shrink-0" />
                  <span>9730414703 | 7024317024 | 9422008339 | 9372626667</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
