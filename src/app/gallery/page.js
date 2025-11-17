"use client";

import { useApp } from "../contexts/AppContext";
import Image from "next/image";

function GalleryPage() {
  const { characters, parts } = useApp();

  const getImage = (code) => {
    const part = parts.find((p) => p.code === code);
    return part ? part.file : "/fallback.png";
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-50 p-8">
      <h1 className="text-3xl font-bold mb-6">Galería de personajes</h1>

      {characters.length === 0 ? (
        <p>No hay personajes todavía.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {characters.map((char) => (
            <div
              key={char._id}
              className="bg-slate-900 rounded-xl p-4 flex flex-col items-center gap-2"
            >
              <div className="relative w-[180px] h-[260px] bg-slate-800 rounded-lg overflow-hidden">
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
              </div>
              <p className="font-semibold">{char.name}</p>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}

export default GalleryPage;
