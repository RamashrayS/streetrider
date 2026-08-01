"use client";

import { X, MapPin, Phone, Shield, CheckCircle2 } from "lucide-react";

interface DrawersProps {
  activeDrawer: string | null;
  onClose: () => void;
  onOpenBooking: (bikeModel?: string) => void;
}

export default function Drawers({ activeDrawer, onClose, onOpenBooking }: DrawersProps) {
  if (!activeDrawer) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/80 backdrop-blur-md animate-in fade-in duration-300">
      
      {/* Drawer Card */}
      <div className="relative w-full max-w-lg bg-[#071618] border-l border-[#16393e] h-full overflow-y-auto p-6 sm:p-8 flex flex-col justify-between text-slate-100 shadow-2xl animate-in slide-in-from-right duration-300">
        
        {/* Header */}
        <div>
          <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
              <h3 className="font-heading text-2xl font-extrabold uppercase text-white tracking-wider">
                {activeDrawer === "dealer" && "STREETRIDER BRANCH LOCATIONS"}
                {activeDrawer === "conditions" && "RENTAL TERMS & CONDITIONS"}
              </h3>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/15 transition-all"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* CONTENT: LOCATIONS */}
          {activeDrawer === "dealer" && (
            <div className="space-y-6">
              <p className="text-xs text-slate-300">
                Choose a pickup branch location in Pune or contact us directly for quick booking.
              </p>

              {/* Branch 1: Katraj */}
              <div className="bg-[#091f22] border border-[#1b444b] rounded-2xl p-5 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-heading text-lg font-bold text-white">BRANCH 1 — KATRAJ</span>
                  <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded font-heading">OPEN NOW</span>
                </div>
                <div className="text-xs text-slate-300 space-y-2">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>S.No. 56/9/2, Dugad Chawl, Next to ISKCON Temple Parking, Katraj Kondhwa Road, Pune – 411048</span>
                  </div>
                  <div className="flex flex-wrap items-center gap-2 pt-1">
                    <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span className="font-bold text-white">9730414703 | 7024317024 | 9422008339</span>
                  </div>
                </div>
                <button
                  onClick={() => {
                    onClose();
                    onOpenBooking();
                  }}
                  className="w-full py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-heading font-bold text-xs uppercase tracking-wider transition-all"
                >
                  BOOK AT KATRAJ BRANCH
                </button>
              </div>

              {/* Branch 2: Mundhwa */}
              <div className="bg-[#091f22] border border-[#1b444b] rounded-2xl p-5 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-heading text-lg font-bold text-white">BRANCH 2 — MUNDHWA</span>
                  <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded font-heading">OPEN NOW</span>
                </div>
                <div className="text-xs text-slate-300 space-y-2">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>Near Bharat Marble, Near Hadapsar Railway Bridge, Mundhwa, Pune</span>
                  </div>
                  <div className="flex flex-wrap items-center gap-2 pt-1">
                    <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span className="font-bold text-white">9730414703 | 9372626667 | 7024317024</span>
                  </div>
                </div>
                <button
                  onClick={() => {
                    onClose();
                    onOpenBooking();
                  }}
                  className="w-full py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-heading font-bold text-xs uppercase tracking-wider transition-all"
                >
                  BOOK AT MUNDHWA BRANCH
                </button>
              </div>
            </div>
          )}

          {/* CONTENT: TERMS & CONDITIONS */}
          {activeDrawer === "conditions" && (
            <div className="space-y-4 text-xs text-slate-300 leading-relaxed">
              <div className="bg-[#091f22] border border-white/10 rounded-2xl p-5 space-y-3">
                <h4 className="font-heading text-lg font-bold text-white flex items-center gap-2">
                  <Shield className="w-5 h-5 text-cyan-400" />
                  <span>STREETRIDER RENTAL TERMS</span>
                </h4>
                
                <div className="space-y-2.5 pt-2 border-t border-white/10">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>Monthly rental charges are payable in advance.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>Valid driving licence is mandatory.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>Government ID proof is mandatory.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>Security deposit may apply.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>Fuel expenses are the customer's responsibility.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>Traffic fines are the customer's responsibility.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>Any damages during the rental period are the renter's responsibility.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>Vehicle availability is subject to confirmation. Contact us before booking.</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="pt-6 border-t border-white/10">
          <button
            onClick={onClose}
            className="w-full py-3 rounded-xl bg-white/10 hover:bg-white hover:text-black font-heading font-bold text-xs uppercase tracking-wider transition-all"
          >
            CLOSE WINDOW
          </button>
        </div>

      </div>
    </div>
  );
}
