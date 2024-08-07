// pages/api/projects.ts

import { NextRequest, NextResponse } from "next/server";
import {
  createProject,
  getProjectsByOwner,
  getProjectsByUser,
  projectParams,
} from "@/lib/actions/project.action";

export interface ProjectProps {
  name?: string;
  desc?: string;
  lang?: string;
  owner?: string;
  users?: string[];
  image?: string;
}

const projectHandler = async (req: NextRequest) => {
  if (req.method !== "POST") {
    return NextResponse.json(
      { message: "Method not allowed" },
      { status: 405 }
    );
  }

  const data: ProjectProps = await req.json();

  if (
    !data.name ||
    !data.desc ||
    !data.lang ||
    !data.owner ||
    !data.users ||
    !data.image
  ) {
    return NextResponse.json({ message: "Bad request" }, { status: 400 });
  }

  try {
    await createProject({
      data: {
        name: data.name,
        desc: data.desc,
        lang: data.lang,
        owner: data.owner,
        users: data.users,
        image: data.image,
      },
    });
    return NextResponse.json(
      { message: "Project created successfully!" },
      { status: 200 }
    );
  } catch (err: any) {
    console.error("Error creating project:", err);
    return NextResponse.json({ message: err.message }, { status: 500 });
  }
};

const getProjectsHandler = async (req: NextRequest) => {
  if (req.method !== "GET") {
    return NextResponse.json(
      { message: "Method not allowed" },
      { status: 405 }
    );
  }

  const { searchParams } = new URL(req.url);
  const owner = searchParams.get("owner");
  const user = searchParams.get("user");

  if (owner) {
    try {
      const projects = await getProjectsByOwner(owner);
      return NextResponse.json(projects, { status: 200 });
    } catch (error: any) {
      console.error("Error fetching projects:", error);
      return NextResponse.json({ message: error.message }, { status: 500 });
    }
  } else if (user) {
    try {
      const project = await getProjectsByUser(user);
      return NextResponse.json(project, { status: 200 });
    } catch (error: any) {
      console.error("Error fetching project:", error);
      return NextResponse.json({ message: error.message }, { status: 500 });
    }
  } else {
    return NextResponse.json({ message: "Bad request" }, { status: 400 });
  }
};

export { projectHandler as POST, getProjectsHandler as GET };
