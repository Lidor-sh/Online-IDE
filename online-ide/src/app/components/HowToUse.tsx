import Image from "next/image";
import Heading from "./Heading";
import Section from "./Section";
import Wave from "./Wave";
import arrow from "../images/curly-arrow.svg";
import DescCard from "./DescCard";
import { steps } from "../constants/HowToUse";
import arrow2 from "../images/curly-arrow-2.svg";

const HowToUse = () => {
  return (
    <Section id="how-to-use">
      <Wave className="blacktheme" />
      <div className="container-section mt-[6.5rem] relative z-2">
        <Heading
          className="text-blacktheme font-bold font-mono md:max-w-md lg:max-w-2xl justify-center text-center border-8 border-blacktheme"
          title="How To Use"
          big
        />
        <div className="flex relative flex-col items-center lg:items-start">
          <DescCard
            src={steps[0].image}
            alt="step1"
            text={steps[0].description}
            title={steps[0].title}
            className="w-[90%] lg:w-[56.5%] lg:max-h-[25rem]"
          />
          <Image
            src={arrow}
            alt=""
            width={800}
            height={500}
            className="hidden size-2/3 lg:block rotate-[20deg] ml-[20rem] -mt-[6%] -mb-[6%]"
          />
          <Image
            src={arrow2}
            alt=""
            width={200}
            height={500}
            className="rotate-[90deg] lg:hidden"
          />
          <DescCard
            src={steps[1].image}
            alt="step2"
            text={steps[1].description}
            title={steps[1].title}
            className="w-[90%] lg:mr-0 lg:ml-auto lg:w-[56.5%] lg:max-h-[25rem]"
          />
          <Image
            src={arrow}
            alt=""
            width={800}
            height={500}
            className="hidden size-2/3 lg:block -rotate-[20deg] ml-[10rem] -mt-[6%] -mb-[6%] scale-x-[-1]"
          />
          <Image
            src={arrow2}
            alt=""
            width={200}
            height={500}
            className="-rotate-[90deg] scale-x-[-1] lg:hidden"
          />
          <DescCard
            src={steps[2].image}
            alt="step3"
            text={steps[2].description}
            title={steps[2].title}
            className="w-[90%] lg:w-[56.5%] lg:max-h-[25rem]"
          />
        </div>
      </div>
    </Section>
  );
};

export default HowToUse;
