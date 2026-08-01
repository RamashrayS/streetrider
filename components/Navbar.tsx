"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenDealer: () => void;
  onOpenConditions: () => void;
}

export default function Navbar({
  activeTab,
  setActiveTab,
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState<string>("home");

  useEffect(() => {
    const handleScroll = () => {
      const sectionIds = [
        "home",
        "about-us",
        "why-us",
        "vehicles",
        "locations",
        "how-it-works",
        "terms",
        "faq",
      ];

      const scrollPosition = window.scrollY + 250;

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;

          if (scrollPosition >= top && scrollPosition < top + height) {
            setCurrentSection(id);
            setActiveTab(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setActiveTab]);

  const active = activeTab || currentSection;

  const navLinks = [
    { id: "about-us", label: "ABOUT US", href: "#about-us" },
    { id: "why-us", label: "WHY US", href: "#why-us" },
    { id: "vehicles", label: "VEHICLES", href: "#vehicles" },
    { id: "locations", label: "LOCATIONS", href: "#locations" },
    { id: "how-it-works", label: "HOW IT WORKS", href: "#how-it-works" },
    { id: "terms", label: "TERMS", href: "#terms" },
    { id: "faq", label: "FAQ", href: "#faq" },
  ];

  return (
    <header className="fixed top-0 left-0 md:left-16 right-0 z-40 bg-gradient-to-b from-[#051416] via-[#051416]/95 to-transparent py-3 sm:py-5 px-4 sm:px-10 select-none transition-all backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Brand Logo */}
        <a
          href="#home"
          onClick={() => {
            setCurrentSection("home");
            setActiveTab("home");
          }}
          className="font-heading text-2xl sm:text-3xl font-black tracking-widest text-white uppercase leading-none hover:opacity-90 transition-opacity flex items-center gap-2"
        >
          <span>STREET<span className="text-cyan-400">RIDER</span></span>
        </a>

        {/* Desktop Navigation Links with Real Scroll Spy Highlighting */}
        <nav className="hidden md:flex items-center gap-5 lg:gap-7 text-[11px] font-heading tracking-widest uppercase">
          {navLinks.map((link) => {
            const isActive = active === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={() => {
                  setCurrentSection(link.id);
                  setActiveTab(link.id);
                }}
                className={`transition-all py-1 relative ${
                  isActive
                    ? "text-cyan-300 font-black text-xs tracking-widest drop-shadow-[0_0_12px_rgba(34,211,238,0.95)]"
                    : "text-slate-300 hover:text-white opacity-80 hover:opacity-100 font-medium"
                }`}
              >
                {link.label}
              </a>
            );
          })}

          {/* Quick Call Button */}
          <a
            href="tel:9730414703"
            className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 hover:bg-cyan-500 hover:text-black transition-all text-[11px] font-extrabold shadow-sm"
          >
            <Phone className="w-3 h-3" />
            <span>9730414703</span>
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-slate-200 hover:text-white"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#07191b]/98 border-t border-white/10 mt-3 p-4 rounded-xl text-xs font-heading tracking-widest uppercase space-y-2 shadow-2xl">
          {navLinks.map((link) => {
            const isActive = active === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={() => {
                  setCurrentSection(link.id);
                  setActiveTab(link.id);
                  setMobileMenuOpen(false);
                }}
                className={`block w-full text-left py-2.5 px-3 rounded font-bold transition-all ${
                  isActive
                    ? "bg-cyan-500/20 text-cyan-400 border border-cyan-500/40"
                    : "hover:bg-white/10 text-slate-200"
                }`}
              >
                {link.label}
              </a>
            );
          })}
          <a
            href="tel:9730414703"
            className="block w-full text-center py-2.5 px-3 bg-cyan-500 text-black font-bold rounded-lg mt-2"
          >
            CALL 9730414703
          </a>
        </div>
      )}
    </header>
  );
}
