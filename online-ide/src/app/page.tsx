"use client";

import { useRouter } from "next/navigation";
import Wave from "./components/Wave";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Image from "next/image";
import BackgroundImage from "./images/background.jpg";

export default function Home() {
  const router = useRouter();

  const letStart = () => {
    router.push("/Login");
  };

  return (
    <div className="relative max-h-full h-screen max-w-full flex-col items-center justify-center overflow-x-hidden">
      <Navbar />
      <section className="h-screen">
        <button
          className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          onClick={letStart}
        >
          Let{"'"}s start!
        </button>
      </section>
      <section className="absolute">
        <Wave />
        <Image
          className="w-screen"
          src={BackgroundImage}
          width={1000}
          alt="background"
        />
      </section>
      <Footer />
    </div>
  );
}
