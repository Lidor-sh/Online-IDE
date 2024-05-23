"use client";

import { useRouter } from "next/navigation";
import Wave from "./components/Wave";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Image from "next/image";
import BackgroundImage from "./images/background.jpg";
import Section from "./components/Section";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";

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
      <Footer />
    </div>
  );
}
