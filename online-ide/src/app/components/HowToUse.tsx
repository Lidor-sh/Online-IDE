import Heading from "./Heading";
import Section from "./Section";
import Wave from "./Wave";

const HowToUse = () => {
  return (
    <Section>
      <Wave className="blacktheme" />
      <div className="container-section mt-[6rem] relative z-2">
        <Heading
          className="text-blacktheme font-mono md:max-w-md lg:max-w-2xl justify-center text-center"
          title="How To Use"
        />
      </div>
    </Section>
  );
};

export default HowToUse;
