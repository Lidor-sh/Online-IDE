"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Footer from "../components/Footer";
import ProjectCard from "../components/ProjectCard";
import projectImage from "../images/notification-main.png";
import Image, { StaticImageData } from "next/image";
import defImage from "../images/robot.jpg";
import SpotifyCard from "../components/SpotifyCard";
import songImage from "../images/bealright.jpeg";
import emailImage from "../images/email.png";
import CreateProjectPanel from "../components/CreateProjectPanel";
import { ProjectProps } from "../api/projects/route";
interface Project {
  image: string | StaticImageData;
  lang: string;
  projectName: string;
  desc: string;
  owner: string;
  users: string[];
}

export default function Page() {
  const { data: session } = useSession();
  const router = useRouter();
  const [isBlur, setisBlur] = useState(false);
  const [isCreatingProject, setIsCreatingProject] = useState(false);
  const [ownerProjects, setOwnerProjects] = useState<Project[]>();
  const [userProjects, setUserProjects] = useState<Project[]>();
  const isLoaded = useRef(false);

  useEffect(() => {
    if (!session) {
      router.push("../Login");
    }
  }, [session, router]);

  useEffect(() => {
    if (!isLoaded.current && session?.user?.email) {
      loadProjects(session.user.email);
      isLoaded.current = true;
    }
  }, []);

  const loadProjects = async (email: string) => {
    try {
      const ownerResponse = await fetch(`/api/projects?owner=${email}`);
      const userResponse = await fetch(`/api/projects?user=${email}`);
      if (ownerResponse.ok && userResponse.ok) {
        const ownerData = await ownerResponse.json();
        const userData = await userResponse.json();
        setOwnerProjects(ownerData);
        setUserProjects(userData);
        console.log("Owner Projects:", ownerData);
        console.log("User Projects:", userData);
        return true;
      } else {
        console.error(
          "Failed to load projects:",
          ownerResponse.statusText,
          userResponse.statusText
        );
        return false;
      }
    } catch (error) {
      console.error("Error loading projects:", error);
      return false;
    }
  };

  if (!session) {
    return null; // You can also show a loading spinner or a message here
  }

  const moveToEditor = (id: string) => {
    router.push(`/Editor?id=${encodeURIComponent(id)}`);
  };

  const createProject = () => {
    setisBlur(true);
    setIsCreatingProject(true);
  };
  //black blur
  return (
    <>
      <div
        className={`relative min-h-screen max-h-full h-full max-w-full ${
          isBlur ? "blur-container" : ""
        } flex-col items-center justify-center overflow-x-hidden bg-whitetheme`}
      >
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
          {ownerProjects &&
            ownerProjects.map((project: any) => (
              <ProjectCard
                key={project._id}
                image={projectImage}
                lang={project.lang}
                projectName={project.name}
                desc={project.desc}
                numOfContributors={project.users.length + 3}
                onClick={() => moveToEditor(project._id)}
              />
            ))}
          <ProjectCard onClick={createProject} />
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
          {userProjects &&
            userProjects.map((project: any) => (
              <ProjectCard
                key={project.projectName}
                image={projectImage}
                lang={project.lang}
                projectName={project.name}
                desc={project.desc}
                numOfContributors={project.users.length + 3}
                onClick={() => moveToEditor(project._id)}
              />
            ))}
        </div>
        <div className="left-0 bottom-0 w-full bg-whitetheme">
          <Footer />
        </div>
        {isBlur && <div className="blur-effect" />}
        {isCreatingProject && (
          <CreateProjectPanel
            setIsCreatingProject={setIsCreatingProject}
            setisBlur={setisBlur}
          />
        )}
      </div>
    </>
  );
}
