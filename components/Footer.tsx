"use client";

import { MapPin, Phone, ShieldCheck } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#040e10] border-t border-[#122e32] text-slate-300 pl-12 sm:pl-16 pt-16 pb-8 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#home" className="inline-block">
              <span className="font-heading text-3xl font-black text-white uppercase tracking-widest block">
                StreetRider
              </span>
              <span className="text-[9px] uppercase tracking-[0.2em] text-cyan-400 font-medium block mt-0.5">
                Ride Your Way. Live Your Journey.
              </span>
            </a>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Trusted two-wheeler rental service based in Pune, offering affordable monthly rental plans for scooters, commuters, sports bikes and cruisers.
            </p>

            <div className="flex items-center gap-2 text-xs text-cyan-300 font-semibold pt-1">
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
              <span>Well Maintained • Safe & Reliable</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-heading text-sm font-bold text-white uppercase tracking-wider">
              QUICK LINKS
            </h4>
            <ul className="space-y-2 text-xs font-heading tracking-wider uppercase text-slate-400">
              <li>
                <a href="#home" className="hover:text-cyan-400 transition-colors">Home</a>
              </li>
              <li>
                <a href="#vehicles" className="hover:text-cyan-400 transition-colors">Vehicles</a>
              </li>
              <li>
                <a href="#vehicles" className="hover:text-cyan-400 transition-colors">Pricing</a>
              </li>
              <li>
                <a href="#locations" className="hover:text-cyan-400 transition-colors">Locations</a>
              </li>
              <li>
                <a href="#terms" className="hover:text-cyan-400 transition-colors">Terms</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Branch 1 Address */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading text-sm font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-cyan-400" />
              <span>KATRAJ BRANCH</span>
            </h4>
            <div className="text-xs text-slate-400 leading-relaxed space-y-1">
              <strong className="text-white block font-heading">StreetRider</strong>
              <p>S.No. 56/9/2, Dugad Chawl</p>
              <p>Next to ISKCON Temple Parking</p>
              <p>Katraj Kondhwa Road</p>
              <p className="text-slate-300">Pune – 411048</p>
            </div>
          </div>

          {/* Branch 2 Address & Phones */}
          <div className="lg:col-span-3 space-y-3" id="contact">
            <h4 className="font-heading text-sm font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-cyan-400" />
              <span>MUNDHWA BRANCH</span>
            </h4>
            <div className="text-xs text-slate-400 leading-relaxed space-y-1 mb-3">
              <strong className="text-white block font-heading">StreetRider</strong>
              <p>Near Bharat Marble</p>
              <p>Near Hadapsar Railway Bridge</p>
              <p className="text-slate-300">Mundhwa, Pune</p>
            </div>

            <div className="pt-2 border-t border-white/10 space-y-1 text-xs">
              <span className="text-[10px] font-heading uppercase text-cyan-400 font-bold block">ALL CONTACT NUMBERS:</span>
              <div className="text-slate-200 font-bold flex flex-wrap gap-x-3 gap-y-1">
                <a href="tel:9730414703" className="hover:text-cyan-400">9730414703</a>
                <a href="tel:7024317024" className="hover:text-cyan-400">7024317024</a>
                <a href="tel:9422008339" className="hover:text-cyan-400">9422008339</a>
                <a href="tel:9372626667" className="hover:text-cyan-400">9372626667</a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© 2026 StreetRider. All Rights Reserved.</p>
          <p className="text-[11px] font-heading tracking-widest text-slate-600 uppercase">
            PUNE TWO-WHEELER MONTHLY SUBSCRIPTION PLATFORM
          </p>
        </div>
      </div>
    </footer>
  );
}
