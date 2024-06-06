"use client";

import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

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
      <div
        className="flex items-center justify-center h-full w-full space-x-10"
        ref={parallaxRef}
      >
        <Image
          src={session.user?.image ? session.user?.image : "../favicon.ico"}
          width={100}
          height={100}
          className="rounded-full w-10"
          alt=""
        />
        <div className="text-gray-950">
          Hi {session.user?.name}! your email address is: {session.user?.email}
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
