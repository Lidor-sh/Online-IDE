import Image from "next/image";
import Heading from "./Heading";
import Section from "./Section";
import Wave from "./Wave";
import arrow from "../images/curly-arrow.svg";
import bgImage from "../images/background1.jpg";

const steps = [
  {
    id: "0",
    title: "Sign Up",
    description:
      "Create an account to start coding together in real-time and enjoy integrated Spotify music.",
    image: bgImage, // Adjust the path as needed
  },
  {
    id: "1",
    title: "Start a Project",
    description:
      "Create or join a project and invite your team. Start coding collaboratively with real-time updates.",
    image: bgImage, // Adjust the path as needed
  },
  {
    id: "2",
    title: "Code and Listen",
    description:
      "Collaborate with your team, write code together, and enjoy your favorite music with integrated Spotify.",
    image: bgImage, // Adjust the path as needed
  },
];

const HowToUse = () => {
  return (
    <Section id="how-to-use">
      <Wave className="blacktheme" />
      <div className="container-section mt-[6rem] relative z-2">
        <Heading
          className="text-blacktheme font-bold font-mono md:max-w-md lg:max-w-2xl justify-center text-center"
          title="How To Use"
        />
      </div>
    </Section>
  );
};

export default HowToUse;
