"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Image from "next/image";

function AboutPage() {
  return (
    <div className="min-h-screen bg-radial-with-image text-white relative overflow-hidden">
      <Navbar />

      <main className="relative z-10 max-w-3xl mx-auto px-6 py-20 text-center">
        <h1
          className="
            text-5xl font-black tracking-[0.25em] uppercase mb-8 
            drop-shadow-[4px_4px_0_rgba(0,0,0,0.8)]
          "
        >
          About Me
        </h1>
        <div
          className="
            bg-black/40 backdrop-blur-sm border border-white/10 
            rounded-3xl p-10 shadow-[0_0_50px_rgba(0,0,0,0.7)]
          "
        >
          <p className="text-xl text-gray-300 mb-2">
            {" "}
            Hola! soy{" "}
            <span className="text-purple-300 font-semibold">Bárbara</span>.{" "}
          </p>
          <p className="text-gray-300 leading-relaxed mb-6">
            Me gusta mucho más el diseño que programar, pero igual tuve que
            hacer este final. Elegí un estilo inspirado en Tim Burton porque sus
            mundos siempre me marcaron. Mis películas favoritas son:
          </p>

          {/* Polaroids */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-10">
            <div className="relative w-full max-w-xs mx-auto transform rotate-[-6deg]">
              <div className="bg-white p-3  shadow-2xl">
                <Image
                  width={200}
                  height={300}
                  src="/dummy/corpseBride.jpg"
                  alt="Corpse Bride"
                  className="rounded-md w-full object-cover"
                />
                <p className="mt-2 text-center text-black text-sm font-semibold">
                  Corpse Bride
                </p>
              </div>
            </div>
            <div className="relative w-full max-w-xs mx-auto transform rotate-[4deg]">
              <div className="bg-white p-3  shadow-2xl">
                <Image
                  width={200}
                  height={300}
                  src="/dummy/edwardScissorhands.jpg"
                  alt="Edward Scissorhands"
                  className="rounded-md w-full object-cover"
                />
                <p className="mt-2 text-center text-black text-sm font-semibold">
                  Edward Scissorhands
                </p>
              </div>
            </div>

            <div className="relative w-full max-w-xs mx-auto transform rotate-[-2deg]">
              <div className="bg-white p-3  shadow-2xl">
                <Image
                  width={200}
                  height={300}
                  src="/dummy/theNightmare.jpg"
                  alt="The Nightmare Before Christmas"
                  className="rounded-md w-full object-cover"
                />
                <p className="mt-2 text-center text-black text-sm font-semibold">
                  The Nightmare Before Christmas
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default AboutPage;
