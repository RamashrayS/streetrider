"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WhyStreetRider from "@/components/WhyStreetRider";
import VehicleShowcase from "@/components/VehicleShowcase";
import LocationsSection from "@/components/LocationsSection";
import HowItWorks from "@/components/HowItWorks";
import RentalTerms from "@/components/RentalTerms";
import FaqSection from "@/components/FaqSection";
import CtaSection from "@/components/CtaSection";
import Drawers from "@/components/Drawers";
import BookingModal from "@/components/BookingModal";
import Footer from "@/components/Footer";

export default function Home() {
  const [activeTab, setActiveTab] = useState<string>("home");
  const [activeDrawer, setActiveDrawer] = useState<string | null>(null);
  const [bookingModalOpen, setBookingModalOpen] = useState<boolean>(false);
  const [selectedVehicleForModal, setSelectedVehicleForModal] = useState<string | undefined>(undefined);

  const handleOpenBooking = (vehicleName?: string) => {
    setSelectedVehicleForModal(vehicleName);
    setBookingModalOpen(true);
  };

  return (
    <main className="min-h-screen bg-[#040E10] text-slate-100 relative selection:bg-cyan-500/40 selection:text-white">
      {/* 1. Left Vertical Fixed Sidebar */}
      <Sidebar />

      {/* 2. Top Header Navigation (StreetRider Branding & Link Navigation) */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenDealer={() => setActiveDrawer("dealer")}
        onOpenConditions={() => setActiveDrawer("conditions")}
      />

      {/* 3. StreetRider Vehicle Selection Hero (Always Top Hero Showcase) */}
      <Hero onOpenBooking={handleOpenBooking} />

      {/* 4. About StreetRider */}
      <About />

      {/* 5. Why StreetRider */}
      <WhyStreetRider />

      {/* 6. Vehicle Catalog (Scooters, Commuters, Sports & Cruisers) */}
      <VehicleShowcase onOpenBooking={handleOpenBooking} />

      {/* 7. Pune Hub Locations (Katraj & Mundhwa Branches) */}
      <LocationsSection />

      {/* 8. How It Works (6 Simple Steps) */}
      <HowItWorks />

      {/* 9. Terms & Conditions */}
      <RentalTerms />

      {/* 10. FAQ Section */}
      <FaqSection />

      {/* 11. CTA Section */}
      <CtaSection onOpenBooking={() => handleOpenBooking()} />

      {/* 12. Drawers for Locations & Terms */}
      <Drawers
        activeDrawer={activeDrawer}
        onClose={() => setActiveDrawer(null)}
        onOpenBooking={handleOpenBooking}
      />

      {/* 13. Booking Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        initialVehicle={selectedVehicleForModal}
      />

      {/* 14. Footer */}
      <Footer />
    </main>
  );
}
