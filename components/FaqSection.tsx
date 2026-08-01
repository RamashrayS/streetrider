"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "Do I need a driving licence?",
      a: "Yes, a valid original Driving Licence (DL) is mandatory to rent any two-wheeler from StreetRider.",
    },
    {
      q: "How does monthly rental work?",
      a: "Our monthly rental allows you to subscribe to a scooter or bike for 30 days at a fixed, affordable rate paid in advance. It includes free maintenance and vehicle servicing.",
    },
    {
      q: "Is security deposit required?",
      a: "Security deposit may apply depending on the vehicle model. It is 100% refundable upon safe return of the vehicle.",
    },
    {
      q: "What documents are needed?",
      a: "You need to submit a valid Driving Licence and a Government ID proof (Aadhaar Card, Passport, or Voter ID).",
    },
    {
      q: "Who pays for fuel?",
      a: "Fuel expenses are the customer's responsibility. Vehicles are handed over with sufficient fuel to reach the nearest petrol pump.",
    },
    {
      q: "Who is responsible for traffic fines?",
      a: "Any traffic fines, e-challans, or parking penalties incurred during your rental period are solely the renter's responsibility.",
    },
    {
      q: "Can I extend my rental period?",
      a: "Yes! Simply contact us at 9730414703 before your current rental term expires to extend your monthly subscription.",
    },
    {
      q: "How do I book a vehicle?",
      a: "You can book directly by clicking 'Book Your Ride' on our website, or call/WhatsApp our Pune hub at 9730414703 / 7024317024.",
    },
  ];

  return (
    <section id="faq" className="py-14 sm:py-20 bg-[#051113] text-slate-100 px-4 sm:px-6 md:pl-20 md:pr-8 border-t border-[#122e32] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-8 relative z-10">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-heading tracking-widest text-cyan-400 uppercase mb-2">
            <HelpCircle className="w-4 h-4" />
            Frequently Asked Questions
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl font-black text-white uppercase tracking-tight">
            GOT <span className="text-cyan-400">QUESTIONS?</span>
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm mt-2 opacity-90">
            Everything you need to know about StreetRider monthly rentals in Pune.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-[#081a1c] border border-[#16383d] rounded-xl overflow-hidden transition-all duration-300 shadow-md"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="font-heading text-base sm:text-lg font-bold text-white uppercase tracking-wide">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-cyan-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/5 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
