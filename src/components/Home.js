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

      <main className="min-h-[calc(100vh-80px)] flex flex-col items-center justify-center gap-6 relative z-10 text-center">
        <h1
          className="
    text-5xl 
    font-black 
    text-white 
    drop-shadow-[4px_4px_0px_rgba(0,0,0,0.8)]
    tracking-widest
    rotate-[-2deg]
  "
        >
          Welcome dear fan...
        </h1>
        <p
          className="
    text-xl 
    text-white 
    max-w-md
    leading-relaxed 
    italic
    drop-shadow-[2px_2px_0px_rgba(0,0,0,0.6)]
  "
        >
          Create your own gothic character and bring your dark style to life.
        </p>

        <button
          onClick={() => router.push("/characters")}
          className="
      px-8 py-3 
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
