"use client";

import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import Footer from "../components/Footer";

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
        {/**<div className="flex items-center justify-center h-full w-full space-x-10">
          <Image
            src={session.user?.image ? session.user?.image : "../favicon.ico"}
            width={100}
            height={100}
            className="rounded-full w-10"
            alt=""
          />
          <div className="text-gray-950 font-mono">
            Hi {session.user?.name}! your email address is:{" "}
            {session.user?.email}
          </div>
          <button
            className="text-white z-50 bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            onClick={() => signOut()}
          >
            Sign Out
          </button>
        </div>*/}
        <div className="fixed left-0 bottom-0 w-full bg-whitetheme">
          <Footer />
        </div>
      </div>
    </>
  );
}
