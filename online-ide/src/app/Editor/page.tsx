"use client"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react";


export default function Page() {
    const router = useRouter();
    const [projectId, setProjectId] = useState<string | null>(null);


    useEffect(() => {
        const searchParams = new URLSearchParams(window.location.search);
        if (searchParams.get("id")) {
          setProjectId(searchParams.get("id") as string);
        }
      }, []);

    return (
    <div>{projectId ? <div>{projectId}</div> : <div>Loading...</div>}</div>
  )
}