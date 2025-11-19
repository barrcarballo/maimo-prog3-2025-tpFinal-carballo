"use client";

import { useApp } from "../contexts/AppContext";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function GalleryPage() {
  const { characters, parts } = useApp();

  const getImage = (code) => {
    const part = parts.find((p) => p.code === code);
    return part ? part.file : "/fallback.png";
  };

  return (
    <div className="min-h-screen bg-radial-with-image text-white relative overflow-hidden">
      <Navbar />

      <div />
      <main className="relative z-10 max-w-6xl mx-auto px-6 py-12">
  
        <header className="mb-10 text-center">
          <h1 className="text-5xl font-bold tracking-[0.35em] uppercase drop-shadow-[3px_3px_0_rgba(0,0,0,0.8)]">
            Gallery
          </h1>
          <p className="mt-3 text-l text-gray-300 italic">
            A collection of unique creations
          </p>
        </header>

        {characters.length === 0 ? (
          <p className="text-center text-gray-300">
            Aún no hay personajes… crea tu primera criatura en{" "}
            <span className="font-semibold">Burton Maker</span>.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {characters.map((char) => (
              <div
                key={char._id}
                className="group bg-black/40 border border-white/10 rounded-2xl p-5 flex flex-col items-center gap-4 shadow-[0_0_30px_rgba(0,0,0,0.7)] hover:shadow-[0_0_45px_rgba(168,85,247,0.7)] hover:-translate-y-1 transition-all duration-200"
              >
                <div className="relative w-[200px] h-[260px] bg-black rounded-2xl overflow-hidden">
                  <Image
                    src={getImage(char.hair)}
                    alt=""
                    fill
                    className="object-contain"
                  />
                  <Image
                    src={getImage(char.body)}
                    alt=""
                    fill
                    className="object-contain"
                  />
                  <Image
                    src={getImage(char.legs)}
                    alt=""
                    fill
                    className="object-contain"
                  />
                  <Image
                    src={getImage(char.head)}
                    alt=""
                    fill
                    className="object-contain"
                  />

                  {/* Borde luminoso hover */}
                  <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10 group-hover:ring-purple-400/60 transition" />
                </div>

                <p className="font-semibold tracking-wide group-hover:text-purple-300">
                  {char.name}
                </p>
              </div>
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default GalleryPage;
