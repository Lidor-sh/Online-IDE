import Heading from "./Heading";
import Section from "./Section";
import Wave from "./Wave";

const Benefits = () => {
  return (
    <Section className="bg-blacktheme" id="features">
      <Wave className="z-3" />
      <div className="container-benefits mt-[6rem] relative z-2 bg-blacktheme">
        <Heading
          className="text-whitetheme md:max-w-md lg:max-w-2xl"
          title="Experience the Future of Coding Together"
        />
        <div className="flex flex-warp gap-10 mb-10">{}</div>
      </div>
    </Section>
  );
};

export default Benefits;
