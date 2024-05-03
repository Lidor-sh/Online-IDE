"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const letStart = () => {
    router.push("/Login");
  };

  return (
    <div className="flex max-h-full h-screen max-w-full flex-col items-center justify-center">
      <div className="space-y-6">
        <button
          className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          onClick={letStart}
        >
          Let{"'"}s start!
        </button>
      </div>
    </div>
  );
}
