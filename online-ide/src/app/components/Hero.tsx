import Image from "next/image";
import { Gradient, Rings } from "./design/Hero";
import Section from "./Section";
import heroImage from "../images/robot.jpg";

const Hero = () => {
  return (
    <Section className="pt-[12rem] -mt-[5.25rem]" id="hero">
      <div className="container-hero relative">
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6rem]">
          <h1 className="h1 mb-6 text-blacktheme">
            Collaborate in Real-Time, Code Seamlessly Together!
          </h1>
          <p className="body-1 z-50 max-w-3xl mx-auto mb-6 text-slate-800 lg:mb-8">
            Join our online IDE and experience effortless teamwork and instant
            updates.
          </p>
          <button className="bg-blacktheme p-4 rounded-xl text-whitetheme font-mono font-bold">
            Let{"'"}s Start
          </button>
        </div>
      </div>
      <div className="relative -mt-[18rem] max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
        <div className="relative z-1 p-0.5 rounded-xl bg-conic-gradient">
          <div className="relative bg-slate-950 rounded-[1rem]">
            <div className="h-[1.4rem] bg-blacktheme rounded-t-[0.9rem]" />
            <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
              <Image
                src={heroImage}
                alt="hero image"
                className="w-full scale-[1.7] translate-y-[8%] md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[23%]"
                width={1440}
                height={1800}
              />
            </div>
          </div>
          <Gradient />
        </div>
      </div>
      <Rings />
    </Section>
  );
};

export default Hero;
