"use client";

import React from "react";
import Navbar from "@/components/Navbar";

function AboutPage() {
  return (
    <div className="min-h-screen bg-radial-with-image text-white relative overflow-hidden">
      <Navbar />
      <div />
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
          <p className="text-gray-300 leading-relaxed mb-6">
            Bienvenido al mundo de{" "}
            <span className="text-purple-300 font-semibold">Burton Maker</span>,
            un espacio donde tu imaginación toma forma con un toque oscuro,
            elegante y gótico. Este proyecto fue creado para que puedas
            construir tus propios personajes inspirados en la estética
            maravillosa y retorcida del universo de Tim Burton.
          </p>

          <p className="text-gray-300 leading-relaxed mb-6">
            Aquí, cada criatura nace combinando partes, sombras, gestos y
            texturas que evocan ese estilo inconfundible: ojos grandes,
            proporciones torcidas, y una vibra misteriosa que parece venir
            directamente de una película stop-motion.
          </p>

          <p className="text-gray-300 leading-relaxed">
            El objetivo es simple:{" "}
            <span className="text-purple-300 font-semibold">
              dar vida a lo extraño
            </span>
            . Crear personajes únicos, divertidos, inquietantes y hermosos que
            representen todo lo que te guste del mundo gótico, lo creepy
            adorable y la creatividad sin límites.
          </p>
        </div>
      </main>
    </div>
  );
}

export default AboutPage;
