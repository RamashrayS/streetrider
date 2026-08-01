"use client";

import { FileText, CheckCircle2 } from "lucide-react";

export default function RentalTerms() {
  const terms = [
    "Monthly rental charges are payable in advance.",
    "Valid driving licence is mandatory.",
    "Government ID proof is mandatory.",
    "Security deposit may apply.",
    "Fuel expenses are the customer's responsibility.",
    "Traffic fines are the customer's responsibility.",
    "Any damages during the rental period are the renter's responsibility.",
    "Vehicle availability is subject to confirmation.",
    "Contact us before booking.",
  ];

  return (
    <section id="terms" className="py-14 sm:py-20 bg-[#051113] text-slate-100 px-4 sm:px-6 md:pl-20 md:pr-8 border-t border-[#122e32] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="max-w-3xl mx-auto bg-[#081a1c] border border-[#16383d] rounded-2xl p-6 sm:p-10 shadow-2xl space-y-6">
          
          <div className="flex items-center gap-3 border-b border-white/10 pb-4">
            <FileText className="w-7 h-7 text-cyan-400" />
            <div>
              <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-white uppercase tracking-wider">
                TERMS & CONDITIONS
              </h2>
              <p className="text-xs text-slate-400">Important rental guidelines for StreetRider Pune customers.</p>
            </div>
          </div>

          <div className="space-y-3.5 pt-2">
            {terms.map((term, idx) => (
              <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed opacity-95">{term}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
