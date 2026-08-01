"use client";

import { useState } from "react";
import { X, CheckCircle2, Phone, Calendar, MapPin, User, FileText } from "lucide-react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialVehicle?: string;
}

export default function BookingModal({ isOpen, onClose, initialVehicle }: BookingModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [vehicle, setVehicle] = useState(initialVehicle || "Honda Activa");
  const [branch, setBranch] = useState("Katraj Branch");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-in fade-in duration-300">
      <div className="relative w-full max-w-lg bg-[#081a1c] border border-[#16383d] rounded-2xl p-6 sm:p-8 text-slate-100 shadow-2xl">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/5 text-slate-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="border-b border-white/10 pb-3">
              <span className="text-[10px] font-heading tracking-widest text-cyan-400 uppercase font-bold">
                STREETRIDER PUNE RESERVATION
              </span>
              <h3 className="font-heading text-2xl font-extrabold text-white uppercase">
                BOOK YOUR RIDE
              </h3>
              <p className="text-xs text-slate-400">Fast document verification & instant branch pickup.</p>
            </div>

            {/* Select Vehicle */}
            <div className="space-y-1">
              <label className="text-xs font-heading uppercase text-slate-300">Select Vehicle</label>
              <select
                value={vehicle}
                onChange={(e) => setVehicle(e.target.value)}
                className="w-full bg-[#040e10] border border-white/15 rounded-xl px-3 py-2.5 text-xs text-white focus:border-cyan-400 focus:outline-none"
              >
                <option value="Honda Activa">Honda Activa (Scooter)</option>
                <option value="Honda Dio">Honda Dio (Scooter)</option>
                <option value="Suzuki Access">Suzuki Access (Scooter)</option>
                <option value="Honda Navi">Honda Navi (Scooter)</option>
                <option value="Hero Splendor">Hero Splendor (Commuter Bike)</option>
                <option value="KTM">KTM (Sports & Performance)</option>
                <option value="Honda Hornet">Honda Hornet (Sports & Performance)</option>
                <option value="Royal Enfield">Royal Enfield (Cruiser)</option>
                <option value="Bajaj Avenger">Bajaj Avenger (Cruiser)</option>
              </select>
            </div>

            {/* Select Branch */}
            <div className="space-y-1">
              <label className="text-xs font-heading uppercase text-slate-300">Pickup Branch Location</label>
              <select
                value={branch}
                onChange={(e) => setBranch(e.target.value)}
                className="w-full bg-[#040e10] border border-white/15 rounded-xl px-3 py-2.5 text-xs text-white focus:border-cyan-400 focus:outline-none"
              >
                <option value="Katraj Branch">Branch 1 — Katraj Kondhwa Road (Next to ISKCON Parking)</option>
                <option value="Mundhwa Branch">Branch 2 — Mundhwa (Near Bharat Marble)</option>
              </select>
            </div>

            {/* Full Name & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="text-xs font-heading uppercase text-slate-300">Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="Your Full Name"
                  className="w-full bg-[#040e10] border border-white/15 rounded-xl px-3 py-2 text-xs text-white focus:border-cyan-400 focus:outline-none"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-heading uppercase text-slate-300">Phone Number</label>
                <input
                  type="tel"
                  required
                  placeholder="10-digit Phone"
                  className="w-full bg-[#040e10] border border-white/15 rounded-xl px-3 py-2 text-xs text-white focus:border-cyan-400 focus:outline-none"
                />
              </div>
            </div>

            {/* Start Date & Duration */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="text-xs font-heading uppercase text-slate-300">Pickup Date</label>
                <input
                  type="date"
                  required
                  className="w-full bg-[#040e10] border border-white/15 rounded-xl px-3 py-2 text-xs text-white focus:border-cyan-400 focus:outline-none"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-heading uppercase text-slate-300">Rental Duration</label>
                <select className="w-full bg-[#040e10] border border-white/15 rounded-xl px-3 py-2 text-xs text-white focus:border-cyan-400 focus:outline-none">
                  <option value="1 month">1 Month Plan</option>
                  <option value="3 months">3 Months Plan</option>
                  <option value="6 months">6 Months Plan</option>
                </select>
              </div>
            </div>

            {/* Document Check Notice */}
            <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-[11px] text-cyan-300 space-y-1">
              <div className="font-bold flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5" />
                <span>Required Documents at Pickup:</span>
              </div>
              <p className="text-slate-300">Original Driving Licence & Government ID Proof (Aadhaar / Passport).</p>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-heading font-extrabold text-xs uppercase tracking-wider transition-all shadow-lg shadow-cyan-500/20"
            >
              CONFIRM BOOKING REQUEST
            </button>
          </form>
        ) : (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div>
              <h4 className="font-heading text-2xl font-black text-white uppercase">BOOKING RECEIVED!</h4>
              <p className="text-xs text-slate-300 mt-1">
                Thank you! Our StreetRider team will call you shortly to confirm your {vehicle} reservation at {branch}.
              </p>
            </div>

            <div className="p-3 rounded-xl bg-black/40 border border-white/10 text-xs text-slate-300 space-y-1">
              <span>Immediate Helpline:</span>
              <div className="text-cyan-400 font-bold">9730414703 | 7024317024</div>
            </div>

            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="w-full py-2.5 rounded-xl bg-white/10 hover:bg-white hover:text-black font-heading text-xs font-bold uppercase transition-all"
            >
              CLOSE WINDOW
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
