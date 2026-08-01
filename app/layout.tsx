import type { Metadata } from "next";
import { Outfit, Barlow_Condensed } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "StreetRider | Premium Two-Wheeler Rentals Pune",
  description:
    "Ride Pune Without Buying. Premium monthly bike and scooter rentals for students, professionals & daily commuters. Flexible plans, well-maintained vehicles in Katraj, Kondhwa & Mundhwa.",
  keywords: [
    "bike rental pune",
    "two wheeler monthly rental pune",
    "scooter rental katraj",
    "bike rental mundhwa",
    "streetrider pune",
    "monthly bike subscription pune",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${barlowCondensed.variable} dark scroll-smooth h-full antialiased`}
    >
      <body className="min-h-full bg-[#0B0F16] text-slate-100 font-sans selection:bg-[#2563EB]/40 selection:text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}

