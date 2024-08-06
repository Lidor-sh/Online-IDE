// pages/api/projects.ts

import { NextRequest, NextResponse } from 'next/server';
import { createProject } from '@/lib/actions/project.action';

interface ProjectProps {
  name: string;
  desc: string;
  lang: string;
  owner: string;
  users: string[];
  image: string;
}

const projectHandler = async (req: NextRequest) => {
  if (req.method !== 'POST') {
    return NextResponse.json({ message: 'Method not allowed' }, { status: 405 });
  }

  const data: ProjectProps = await req.json();
  
  if (!data.name || !data.desc || !data.lang || !data.owner || !data.users || !data.image) {
    return NextResponse.json({ message: 'Bad request' }, { status: 400 });
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
    return NextResponse.json({ message: 'Project created successfully!' }, { status: 200 });
  } catch (err: any) {
    console.error('Error creating project:', err);
    return NextResponse.json({ message: err.message }, { status: 500 });
  }
};

export { projectHandler as POST };
