"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import Footer from "../components/Footer";
import ProjectCard from "../components/ProjectCard";
import projectImage from "../images/notification-main.png";
import Image from "next/image";
import defImage from "../images/robot.jpg";
import SpotifyCard from "../components/SpotifyCard";
import songImage from "../images/bealright.jpeg";
import emailImage from "../images/email.png";

export default function Page() {
  const { data: session } = useSession();
  const router = useRouter();
  const parallaxRef = useRef(null);

  useEffect(() => {
    if (!session) {
      router.push("../Login");
    }
  }, [session, router]);

  if (!session) {
    return null; // You can also show a loading spinner or a message here
  }

  return (
    <>
      <div className="relative min-h-screen max-h-full h-full max-w-full flex-col items-center justify-center overflow-x-hidden bg-whitetheme">
        <div className="flex max-w-full bg-blacktheme h-20 items-center">
          <Image
            className="ml-5 size-13 rounded-full border-whitetheme border-2"
            src={defImage}
            width={30}
            height={30}
            alt="profile image"
          />
          <p className="ml-4 text-whitetheme font-mono text-lg">
            Hello, {session.user?.name}
          </p>
        </div>
        <div className="grid justify-stretch">
          <SpotifyCard
            className="justify-self-end mr-16 -mt-16"
            songArtist="Dean Lewis"
            songName="Be Alright"
            image={songImage}
          />
        </div>
        <h5 className="text-black font-mono ml-24 text-[3rem] font-bold">
          My Projects
        </h5>
        <div className="flex flex-wrap gap-20 mt-6 ml-20">
          <ProjectCard
            image={projectImage}
            projectName="Project Name"
            desc="Description of the project and its suppose to show only up to three lines and if its more than 3 lines so its suppose to show dots"
            lang="javascript"
            numOfContributors={15}
          />
          <ProjectCard
            image={projectImage}
            projectName="Snake"
            desc="The Python Snake Game project involves creating a classic Snake game using the Pygame library. Players control a snake to eat food, growing longer with each item consumed, while avoiding collisions with the walls and the snake's own body. This project helps in learning basic game development, including handling graphics, user inputs, and game logic."
            lang="python"
            numOfContributors={9}
          />
          <ProjectCard />
        </div>
        <div className="flex items-center mt-6 ml-24">
          <h5 className="text-black font-mono  text-[3rem] font-bold">
            Friends{"'"} Projects
          </h5>
          <Image
            src={emailImage}
            className="size-6 ml-5 mt-2"
            width={20}
            height={20}
            alt="notifications"
          />
          <div className="bg-red-400 size-4 justify-center items-center -ml-[0.6rem] -mt-2 rounded-full">
            <p className="text-black font-mono text-[0.7rem] text-center mr-[0.1rem] -mt-[0.02rem]">
              3
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-20 mt-6 ml-20">
          <ProjectCard
            image={projectImage}
            projectName="Project Name"
            desc="Description of the project and its suppose to show only up to three lines and if its more than 3 lines so its suppose to show dots"
            lang="javascript"
            numOfContributors={15}
          />
          <ProjectCard
            image={projectImage}
            projectName="Snake"
            desc="The Python Snake Game project involves creating a classic Snake game using the Pygame library. Players control a snake to eat food, growing longer with each item consumed, while avoiding collisions with the walls and the snake's own body. This project helps in learning basic game development, including handling graphics, user inputs, and game logic."
            lang="python"
            numOfContributors={9}
          />
        </div>
        <div className="fixed left-0 bottom-0 w-full bg-whitetheme">
          <Footer />
        </div>
      </div>
    </>
  );
}
