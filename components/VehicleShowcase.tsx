"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, Shield } from "lucide-react";

export interface StreetRiderVehicle {
  id: string;
  name: string;
  category: "scooters" | "commuters" | "sports" | "cruisers";
  categoryLabel: string;
  monthlyRental?: number;
  image: string;
  popular?: boolean;
}

export const streetRiderVehicles: StreetRiderVehicle[] = [
  // Scooters
  {
    id: "activa",
    name: "Honda Activa",
    category: "scooters",
    categoryLabel: "Scooter",
    monthlyRental: 4000,
    image: "/images/activa_real.png",
    popular: true,
  },
  {
    id: "dio",
    name: "Honda Dio",
    category: "scooters",
    categoryLabel: "Scooter",
    monthlyRental: 3800,
    image: "/images/dio_real.png",
    popular: false,
  },
  {
    id: "access",
    name: "Suzuki Access 125",
    category: "scooters",
    categoryLabel: "Scooter",
    monthlyRental: 4200,
    image: "/images/access_real.png",
    popular: true,
  },
  {
    id: "navi",
    name: "Honda Navi",
    category: "scooters",
    categoryLabel: "Scooter",
    monthlyRental: 3200,
    image: "/images/navi_real.png",
    popular: false,
  },

  // Commuter Bikes
  {
    id: "splendor",
    name: "Hero Splendor Plus",
    category: "commuters",
    categoryLabel: "Commuter Bike",
    monthlyRental: 3500,
    image: "/images/splendor_real.png",
    popular: true,
  },

  // Sports & Performance
  {
    id: "ktm",
    name: "KTM Duke",
    category: "sports",
    categoryLabel: "Sports & Performance",
    image: "/images/ktm_real.png",
    popular: true,
  },
  {
    id: "hornet",
    name: "Honda Hornet",
    category: "sports",
    categoryLabel: "Sports & Performance",
    monthlyRental: 5500,
    image: "/images/hornet_real.png",
    popular: false,
  },

  // Cruisers
  {
    id: "royalenfield",
    name: "Royal Enfield Classic",
    category: "cruisers",
    categoryLabel: "Cruiser",
    monthlyRental: 7500,
    image: "/images/royalenfield_real.png",
    popular: true,
  },
  {
    id: "avenger",
    name: "Bajaj Avenger Cruise",
    category: "cruisers",
    categoryLabel: "Cruiser",
    monthlyRental: 6000,
    image: "/images/avenger_real.png",
    popular: false,
  },
];

interface VehicleShowcaseProps {
  onOpenBooking: (bikeModel?: string) => void;
}

export default function VehicleShowcase({ onOpenBooking }: VehicleShowcaseProps) {
  const [filter, setFilter] = useState<string>("all");

  const filteredVehicles = streetRiderVehicles.filter((v) => {
    if (filter === "all") return true;
    return v.category === filter;
  });

  return (
    <section id="vehicles" className="py-14 sm:py-20 bg-[#061517] text-slate-100 px-4 sm:px-6 md:pl-20 md:pr-8 relative overflow-hidden border-t border-[#122e32]">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-900/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Header Bar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-heading tracking-widest text-cyan-400 uppercase mb-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              StreetRider Fleet Catalog
            </div>
            <h2 className="font-heading text-4xl sm:text-6xl font-black text-white uppercase tracking-tight">
              EXPLORE OUR <span className="text-cyan-400">VEHICLES</span>
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm max-w-lg mt-1 font-normal opacity-90">
              Select your ideal ride from our wide range of scooters, commuters, sports motorcycles and cruisers in Pune.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 bg-[#091f22] p-1.5 rounded-2xl border border-[#1b444b]">
            {[
              { id: "all", label: "All Vehicles" },
              { id: "scooters", label: "Scooters" },
              { id: "commuters", label: "Commuter Bikes" },
              { id: "sports", label: "Sports & Performance" },
              { id: "cruisers", label: "Cruisers" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs font-heading uppercase tracking-wider transition-all duration-300 ${
                  filter === tab.id
                    ? "bg-cyan-500 text-black font-extrabold shadow-lg shadow-cyan-500/20"
                    : "text-slate-300 hover:text-white hover:bg-white/5"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Vehicles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
          {filteredVehicles.map((vehicle) => (
            <div
              key={vehicle.id}
              className="bg-[#091a1d] border border-[#16383d] rounded-2xl p-6 flex flex-col justify-between relative group hover:border-cyan-400/50 hover:bg-[#0b2024] transition-all duration-300 shadow-xl"
            >
              <div>
                {/* Category & Title */}
                <div className="mb-2">
                  <span className="text-[10px] uppercase font-heading tracking-widest text-cyan-400 font-bold">
                    {vehicle.categoryLabel}
                  </span>
                  <h3 className="font-heading text-2xl font-extrabold text-white tracking-wide uppercase leading-tight mt-0.5">
                    {vehicle.name}
                  </h3>
                </div>

                {/* Bike Image */}
                <div className="relative h-48 w-full my-4 flex items-center justify-center">
                  <Image
                    src={vehicle.image}
                    alt={vehicle.name}
                    width={420}
                    height={280}
                    className="max-h-44 w-auto object-contain group-hover:scale-105 transition-transform duration-500 drop-shadow-[0_15px_25px_rgba(0,0,0,0.85)]"
                  />
                </div>
              </div>

              {/* Price & Book Action */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-2">
                <div>
                  <div className="text-[9px] uppercase text-slate-400 font-medium tracking-wider">Monthly Rental</div>
                  <div className="font-heading text-2xl font-extrabold text-white">
                    {vehicle.monthlyRental ? (
                      <>
                        ₹{vehicle.monthlyRental.toLocaleString("en-IN")}
                        <span className="text-xs text-slate-400 font-sans font-normal"> /mo</span>
                      </>
                    ) : (
                      <span className="text-cyan-400 text-sm font-bold tracking-wide">Contact for Rate</span>
                    )}
                  </div>
                </div>

                <button
                  onClick={() => onOpenBooking(vehicle.name)}
                  className="px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-heading font-extrabold uppercase text-xs tracking-wider transition-all flex items-center gap-1.5 shadow-md"
                >
                  <span>Rent Now</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Note */}
        <div className="mt-10 text-center flex items-center justify-center gap-2 text-xs text-slate-400">
          <Shield className="w-4 h-4 text-cyan-400" />
          <span>Flexible monthly rentals with minimal security deposit & instant document verification.</span>
        </div>

      </div>
    </section>
  );
}
