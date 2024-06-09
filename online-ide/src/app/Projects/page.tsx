"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import Footer from "../components/Footer";
import ProjectCard from "../components/ProjectCard";
import projectImage from "../images/notification-main.png";

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
        <div className="flex flex-wrap gap-20 mt-32 ml-20">
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
        <div className="fixed left-0 bottom-0 w-full bg-whitetheme">
          <Footer />
        </div>
      </div>
    </>
  );
}
