"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { PersonIcon } from "@radix-ui/react-icons";
import { signOut, useSession } from "next-auth/react";

const HomeNav = () => {
  const router = useRouter();
  const [courseName, setCourseName] = useState("");
  const { data: session }: any = useSession();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-20 flex flex-col items-center justify-between w-full px-4 py-2 bg-white sm:flex-row sm:px-10">
      <div className="flex items-center justify-between w-full sm:w-auto">
        <Link href="/">
          <Image
            priority
            src="/images/beta_logo.svg"
            alt="12"
            width={100}
            height={100}
            className="object-cover w-32 h-full p-2 cursor-pointer select-one bg-white/50 rounded-2xl backdrop-blur-sm sm:w-48"
          />
        </Link>
        <div className="flex items-center sm:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-gray-500 hover:text-gray-600 focus:outline-none"
          >
            <svg
              className="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMobileMenuOpen ? (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      <nav
        className={`${
          isMobileMenuOpen ? "flex" : "hidden"
        } flex-col items-center w-full py-4 sm:flex sm:flex-row sm:items-center sm:justify-between sm:py-0`}
      >
        <div className="flex flex-col items-center justify-center flex-grow sm:flex-row">
          <ul className="flex flex-col items-center gap-4 sm:flex-row sm:gap-4 sm:pr-4 sm:shadow-2xl sm:rounded-2xl sm:h-fit sm:backdrop-blur-md sm:bg-white/60 sm:shadow-gray-100">
            <div className="flex items-center justify-center bg-white border border-gray-300 rounded-2xl sm:m-2 sm:place-content-center sm:hover:border-indigo-500 sm:focus:border-indigo-500 sm:active:border-indigo-500 sm:gap-2 sm:bg-gray-100">
              <input
                type="text"
                value={courseName}
                onChange={(e) => setCourseName(e.target.value)}
                className="px-4 py-2 outline-none rounded-2xl placeholder:font-light"
                placeholder="I want to learn"
              />
              <button
                onClick={() => router.push("/login")}
                className="flex items-center px-4 py-2 cursor-pointer rounded-xl h-fit"
              >
                <span className="material-icons-round">search</span>
              </button>
            </div>
            <Link
              className="flex items-center gap-2 p-2 transition hover:text-indigo-400"
              href="/what's-new"
            >
              <span>What&apos;s new</span>
              <Image
                src="/images/glowing_star.svg"
                alt="12"
                width={40}
                height={40}
                className="object-cover w-8 h-8"
              />
            </Link>
            <Link
              className="p-2 transition hover:text-indigo-400"
              href="/courses"
            >
              Courses
            </Link>
          </ul>
        </div>
        {!session ? (
          <div className="flex flex-col gap-4 mt-4 sm:flex-row sm:mt-0">
            <button
              onClick={() => router.push("/login")}
              className="flex items-center px-4 py-2 border border-gray-200 rounded-xl cursor-pointer"
            >
              Log In
            </button>
            <button
              onClick={() => router.push("/cart")}
              className="flex items-center px-4 py-2 border border-gray-200 rounded-xl cursor-pointer"
            >
              <span className="material-symbols-outlined">shopping_cart</span>
            </button>
          </div>
        ) : (
          <div className="flex gap-4 mt-4 sm:mt-0">
            <button
              onClick={() => router.push("/dashboard")}
              className="flex items-center px-4 py-4 border border-gray-300 rounded-full cursor-pointer"
            >
              <PersonIcon />
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default HomeNav;
