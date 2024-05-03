"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const letStart = () => {
    console.log("Here");
    router.push("/Login");
  };

  return (
    <>
      <div className="flex h-full flex-col items-center justify-center">
        <div className="space-y-6">
          <button onClick={letStart}>Let{"'"}s start!</button>
        </div>
      </div>
    </>
  );
}
