"use client";

import { signOut, useSession } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";
import { useRef } from "react";
import { ScrollParallax } from "react-just-parallax";

export default function Page() {
  const { data: session } = useSession();
  const router = useRouter();
  const parallaxRef = useRef(null);

  if (!session) {
    router.push("../Login");
  } else {
    return (
      <>
        <div
          className="flex items-center justify-center h-[200vh] w-screen space-x-10"
          ref={parallaxRef}
        >
          <img
            src={session.user?.image ? session.user?.image : "../favicon.ico"}
            className="rounded-full w-10"
          />
          <div className="text-gray-950">
            Hi {session.user?.name}! your email address is:{" "}
            {session.user?.email}
          </div>
          <button
            className="text-white z-50 bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            onClick={() => signOut()}
          >
            Sign Out
          </button>
        </div>
      </>
    );
  }
}
