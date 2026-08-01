"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

export interface HeroVehicle {
  id: string;
  name: string;
  category: string;
  watermark: string;
  priceDisplay: string;
  image: string;
  prevLabel: string;
  nextLabel: string;
}

export const HERO_VEHICLES: HeroVehicle[] = [
  {
    id: "activa",
    name: "HONDA ACTIVA 6G",
    category: "Scooter",
    watermark: "ACTIVA",
    priceDisplay: "₹4,000 / month",
    image: "/images/activa_real.png",
    prevLabel: "Royal Enfield",
    nextLabel: "Hero Splendor",
  },
  {
    id: "splendor",
    name: "HERO SPLENDOR PLUS",
    category: "Commuter Bike",
    watermark: "SPLENDOR",
    priceDisplay: "₹3,500 / month",
    image: "/images/splendor_real.png",
    prevLabel: "Honda Activa 6G",
    nextLabel: "KTM Performance",
  },
  {
    id: "ktm",
    name: "KTM DUKE PERFORMANCE",
    category: "Sports & Performance",
    watermark: "KTM",
    priceDisplay: "Contact for Rate",
    image: "/images/ktm_real.png",
    prevLabel: "Hero Splendor Plus",
    nextLabel: "Royal Enfield",
  },
  {
    id: "royalenfield",
    name: "ROYAL ENFIELD CLASSIC",
    category: "Cruiser",
    watermark: "ENFIELD",
    priceDisplay: "₹7,500 / month",
    image: "/images/royalenfield_real.png",
    prevLabel: "KTM Performance",
    nextLabel: "Honda Activa 6G",
  },
];

interface HeroProps {
  onOpenBooking: (bikeModel?: string) => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  const vehicle = HERO_VEHICLES[currentIndex];

  const handlePrev = () => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev === 0 ? HERO_VEHICLES.length - 1 : prev - 1));
      setIsFading(false);
    }, 180);
  };

  const handleNext = () => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev === HERO_VEHICLES.length - 1 ? 0 : prev + 1));
      setIsFading(false);
    }, 180);
  };

  const handleSelectIndex = (idx: number) => {
    if (idx === currentIndex) return;
    setIsFading(true);
    setTimeout(() => {
      setCurrentIndex(idx);
      setIsFading(false);
    }, 180);
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] pt-24 pb-4 flex flex-col justify-between overflow-hidden bg-[radial-gradient(ellipse_at_center,_#0f282b_0%,_#091d20_50%,_#040e10_100%)] text-slate-100 pl-12 sm:pl-16 pr-4 sm:pr-8 select-none"
    >
      {/* Oversized Watermark Text in Background */}
      <div className="absolute top-28 left-1/2 -translate-x-1/2 select-none pointer-events-none z-0 text-center w-full">
        <span className="font-heading text-[10rem] sm:text-[16rem] lg:text-[22rem] font-black leading-none text-stroke-faded uppercase tracking-tight opacity-15 block transition-all duration-500">
          {vehicle.watermark}
        </span>
      </div>

      {/* Main Hero Showcase: Vehicle Center Cutout & Right Price Box */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 w-full my-auto z-10 relative">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-[460px] sm:min-h-[500px] gap-8">
          
          {/* Left Arrow Navigation */}
          <button
            onClick={handlePrev}
            className="absolute left-0 sm:left-2 top-1/2 -translate-y-1/2 z-30 p-2 text-slate-400 hover:text-cyan-400 transition-all opacity-70 hover:opacity-100 hover:scale-110"
            aria-label="Previous vehicle"
          >
            <ChevronLeft className="w-9 h-9 sm:w-12 sm:h-12" />
          </button>

          {/* Center Stage: Zoomed Vehicle Image with Fade Effect */}
          <div className="w-full lg:w-3/5 flex flex-col items-center justify-center relative px-2 sm:px-8">
            <div className="relative w-full max-w-[680px] h-[320px] sm:h-[420px] lg:h-[460px] flex items-center justify-center">
              
              {/* Vibrant Radial Backlight */}
              <div className="absolute w-[340px] h-[340px] sm:w-[480px] sm:h-[480px] rounded-full bg-cyan-500/10 blur-3xl -z-10" />

              <div
                className={`w-full h-full flex items-center justify-center transition-all duration-300 transform ${
                  isFading ? "opacity-0 scale-95" : "opacity-100 scale-100"
                }`}
              >
                <Image
                  key={vehicle.id}
                  src={vehicle.image}
                  alt={vehicle.name}
                  width={850}
                  height={580}
                  priority
                  className="w-full max-h-[380px] sm:max-h-[460px] lg:max-h-[520px] object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.9)] transform scale-110 sm:scale-125 lg:scale-130 transition-transform duration-500 hover:scale-[1.32]"
                />
              </div>
            </div>
          </div>

          {/* Right Info Box: Model Name, Price & RENT NOW Button */}
          <div className="w-full lg:w-2/5 flex flex-col items-start justify-center max-w-md space-y-6 text-left z-20 pl-2 sm:pl-6">
            <div className="space-y-1">
              <span className="text-xs font-heading tracking-widest text-cyan-400 uppercase font-extrabold block">
                {vehicle.category}
              </span>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white uppercase leading-[0.98]">
                {vehicle.name}
              </h1>
            </div>

            {/* Price Display */}
            <div className="space-y-1 bg-black/30 border border-white/10 rounded-2xl p-4 sm:p-5 backdrop-blur-md w-full max-w-xs">
              <div className="text-[11px] font-heading tracking-widest text-slate-400 uppercase">
                BASE RENTAL PRICE
              </div>
              <div className="font-heading text-3xl sm:text-4xl font-black text-cyan-300 tracking-tight">
                {vehicle.priceDisplay}
              </div>
            </div>

            {/* Glowing Pill RENT NOW Button */}
            <div>
              <button
                onClick={() => onOpenBooking(vehicle.name)}
                className="px-10 py-4 rounded-full border-2 border-cyan-400/90 bg-cyan-500/20 hover:bg-cyan-400 hover:text-black text-white font-heading text-sm font-black uppercase tracking-widest transition-all duration-300 shadow-[0_0_20px_rgba(34,211,238,0.25)] hover:shadow-[0_0_30px_rgba(34,211,238,0.6)] flex items-center gap-3 active:scale-95"
              >
                <span>RENT NOW</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Arrow Navigation */}
          <button
            onClick={handleNext}
            className="absolute right-0 sm:right-2 top-1/2 -translate-y-1/2 z-30 p-2 text-slate-400 hover:text-cyan-400 transition-all opacity-70 hover:opacity-100 hover:scale-110"
            aria-label="Next vehicle"
          >
            <ChevronRight className="w-9 h-9 sm:w-12 sm:h-12" />
          </button>
        </div>
      </div>

      {/* Bottom Vehicle Selection Navigation Strip (Exact matching reference layout) */}
      <div className="py-3 px-4 sm:px-12 relative z-20">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 text-[11px] font-heading tracking-widest uppercase text-slate-300">
          
          {/* Left Fading Badge */}
          <button
            onClick={handlePrev}
            className="flex items-center gap-2 px-5 py-2 rounded-r-full bg-gradient-to-r from-[#113135]/90 to-[#113135]/20 border-l-2 border-cyan-400 hover:text-white transition-all text-slate-200 hover:bg-cyan-500/10"
          >
            <ChevronLeft className="w-4 h-4 text-cyan-400" />
            <span>{vehicle.prevLabel}</span>
          </button>

          {/* Center Pagination Dots */}
          <div className="flex items-center gap-2.5">
            {HERO_VEHICLES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => handleSelectIndex(idx)}
                className={`transition-all duration-300 rounded-full ${
                  currentIndex === idx
                    ? "w-3 h-3 bg-cyan-400 shadow-[0_0_10px_#22d3ee]"
                    : "w-2 h-2 bg-slate-600 hover:bg-slate-400"
                }`}
                aria-label={`Go to vehicle ${idx + 1}`}
              />
            ))}
          </div>

          {/* Right Fading Badge */}
          <button
            onClick={handleNext}
            className="flex items-center gap-2 px-5 py-2 rounded-l-full bg-gradient-to-l from-[#113135]/90 to-[#113135]/20 border-r-2 border-cyan-400 hover:text-white transition-all text-slate-200 hover:bg-cyan-500/10"
          >
            <span>{vehicle.nextLabel}</span>
            <ChevronRight className="w-4 h-4 text-cyan-400" />
          </button>

        </div>
      </div>
    </section>
  );
}
