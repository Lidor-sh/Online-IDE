import Image from "next/image";
import { BackgroundCircles, Gradient, Rings } from "./design/Hero";
import Section from "./Section";
import heroImage from "../images/robot.jpg";
import { useRef } from "react";
import { ScrollParallax } from "react-just-parallax";
import { heroIcons } from "../constants/Hero";
import Notification from "./Notification";
import { useRouter } from "next/navigation";

const Hero = () => {
  const parallaxRef = useRef(null);
  const router = useRouter();

  return (
    <Section className="pt-[12rem] -mt-[5.25rem]" id="hero">
      <div className="container-hero relative" ref={parallaxRef}>
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6rem]">
          <h1 className="h1 mb-6 font-mono text-blacktheme">
            Collaborate in Real-Time, Code Seamlessly Together!
          </h1>
          <p className="body-1 font-mono z-50 max-w-3xl mx-auto mb-6 text-slate-800 lg:mb-8">
            Join our online IDE and experience effortless teamwork and instant
            updates.
          </p>
          <button
            onClick={() => router.push("Login?msg=login")}
            className="bg-blacktheme p-4 rounded-xl text-whitetheme font-mono font-bold"
          >
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
                width={1024}
                height={490}
              />

              <ScrollParallax isAbsolutelyPositioned>
                <ul className="hidden absolute -left-[5.5rem] bottom-[7.5rem] px-1 py-1 bg-slate-500/40 backdrop-blur border border-slate-700/10 rounded-2xl xl:flex">
                  {heroIcons.map((icon, index) => (
                    <li className="p-5" key={index}>
                      <Image src={icon} width={24} height={25} alt={icon} />
                    </li>
                  ))}
                </ul>
              </ScrollParallax>

              <ScrollParallax isAbsolutelyPositioned>
                <Notification
                  className="hidden absolute font-mono -right-[5.5rem] bottom-[11rem] w-[18rem] xl:flex"
                  title="Code submitted"
                />
              </ScrollParallax>
            </div>
          </div>
          <Gradient />
        </div>
        <BackgroundCircles />
      </div>
    </Section>
  );
};

export default Hero;
