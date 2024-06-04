import Image from "next/image";
import Section from "./Section";
import smallSphere from "../images/small-sphere.png";
import stars from "../images/stars.svg";
import Wave from "./Wave";
import Heading from "./Heading";
import PricingList from "./PricingList";

const Pricing = () => {
  return (
    <Section className="overflow-hidden bg-blacktheme" id="pricing">
      <Wave className="whitetheme" />
      <div className="container-section mt-[6rem] relative z-2">
        <div className="hidden relative justify-center mb-[6.5rem] lg:flex">
          <Image
            src={smallSphere}
            className="relative z-1"
            width={255}
            height={255}
            alt="Sphere"
          />
          <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <Image
              src={stars}
              className="w-full"
              width={950}
              height={400}
              alt="Stars"
            />
          </div>
        </div>

        <Heading
          tag="Get started with Bazinga"
          title="Pay Once, Use Forever"
          className="text-whitetheme font-mono md:max-w-md lg:max-w-2xl justify-center text-center"
        />

        <div className="relative">
          <PricingList />
        </div>

        <div className="flex justify-center mt-10">
          <a
            href="" // TODO: pricing page and connect this href
            className="text-xs font-mono font-bold tracking-wider uppercase border-b text-whitetheme"
          >
            See the full details
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Pricing;
