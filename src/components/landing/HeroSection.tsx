"use client";
import "./landing.css";
import { useRouter } from "next/navigation";

const HeroSection = () => {
  const router = useRouter();

  return (
    <section className="flex flex-col items-center justify-center w-full h-screen gap-8 hero-section">
      <h4 className="text-xl text-gray-500">Master the Art of Scrum</h4>
      <div className="flex flex-col items-center gap-8 text-center">
        <h2 className="text-2xl font-bold leading-none md:text-6xl md:leading-tight">
          Unlock Your Potential as a <br />
          <span className="text-blue-600">Scrum Master</span>
        </h2>
        <p className="text-xl text-gray-600 md:text-2xl">
          Dive into a world of advanced Scrum knowledge and techniques
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <button className="px-8 py-3 text-lg font-semibold text-white bg-blue-600 rounded-full shadow-lg outline-none cursor-pointer hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
            Start Learning
          </button>
          <button
            onClick={() => router.push("/community")}
            className="px-8 py-3 text-lg font-semibold text-blue-600 bg-white border border-blue-600 rounded-full shadow-lg outline-none cursor-pointer hover:bg-blue-50 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Join the Community
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
