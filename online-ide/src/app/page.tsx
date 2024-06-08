"use client";

import { useRouter } from "next/navigation";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import { useRef } from "react";
import HowToUse from "./components/HowToUse";
import Pricing from "./components/Pricing";
import ContactUs from "./components/ContactUs";

export default function Home() {
  const router = useRouter();
  const parallaxRef = useRef(null);

  return (
    <div
      ref={parallaxRef}
      className="relative max-h-full h-full max-w-full flex-col items-center justify-center overflow-x-hidden"
    >
      <Navbar />
      <Hero />
      <Benefits />
      <HowToUse />
      <Pricing />
      <ContactUs />
      <Footer wave blackTheme />
    </div>
  );
}
