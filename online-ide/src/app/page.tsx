"use client";

import { useRouter } from "next/navigation";
import Wave from "./components/Wave";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Image from "next/image";
import BackgroundImage from "./images/background.jpg";
import Section from "./components/Section";
import Hero from "./components/Hero";

export default function Home() {
  const router = useRouter();

  const letStart = () => {
    router.push("/Login");
  };

  return (
    <div className="relative max-h-full h-screen max-w-full flex-col items-center justify-center overflow-x-hidden">
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
}
