"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";

const HomeContainer = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-custom-radial text-white relative overflow-hidden">
      <Navbar />

      <div className="spiral-layer" />

      {/* mobile first */}
      <main
        className="
          min-h-[calc(100vh-80px)]
          flex flex-col items-center justify-center
          gap-4
          px-4
          relative z-10 
          text-center
          md:gap-6
          md:px-0
        "
      >
        <h1
          className="
            text-3xl
            md:text-5xl
            font-black 
            text-white 
            tracking-[0.25em]
            md:tracking-widest
            -rotate-1
            md:rotate-[-2deg]
            drop-shadow-[3px_3px_0px_rgba(0,0,0,0.8)]
          "
        >
          Welcome dear fan...
        </h1>

        <p
          className="
            text-base
            md:text-xl 
            text-white 
            max-w-md
            leading-relaxed 
            italic
            mt-2
            md:mt-0
            drop-shadow-[2px_2px_0px_rgba(0,0,0,0.6)]
          "
        >
          Create your own gothic character and bring your dark style to life.
        </p>

        <button
          onClick={() => router.push("/characters")}
          className="
            mt-4
            md:mt-6
            px-6 py-3 
            md:px-8
            rounded-xl 
            bg-purple-700/80 
            hover:bg-purple-600 
            transition-all 
            duration-200
            shadow-[0_0_15px_rgba(147,51,234,0.4)]
            hover:shadow-[0_0_25px_rgba(147,51,234,0.7)]
            text-white 
            font-semibold
            tracking-wider
            border border-purple-400/40
            backdrop-blur-sm
            hover:scale-105
          "
        >
          Start Creating
        </button>
      </main>

      <Footer />
    </div>
  );
};

export default HomeContainer;
