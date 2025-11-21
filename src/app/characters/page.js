"use client";

import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import { useApp } from "../contexts/AppContext";
import CharacterPreview from "../../components/CharacterPreview";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function CharactersPage() {
  const router = useRouter();
  const { addCharacter, parts } = useApp();

  const categories = ["hair", "head", "body", "legs"];

  const [indexes, setIndexes] = useState({
    hair: 0,
    head: 0,
    body: 0,
    legs: 0,
  });

  const [name, setName] = useState("");

  const groupedParts = useMemo(() => {
    const base = {
      hair: [],
      head: [],
      body: [],
      legs: [],
    };

    parts.forEach((p) => {
      if (base[p.type]) {
        base[p.type].push({
          id: p.code,
          src: p.file,
          name: p.name,
        });
      }
    });

    return base;
  }, [parts]);

  const selectedParts = {
    hair: groupedParts.hair[indexes.hair] || null,
    head: groupedParts.head[indexes.head] || null,
    body: groupedParts.body[indexes.body] || null,
    legs: groupedParts.legs[indexes.legs] || null,
  };

  const handleNext = (cat) => {
    const list = groupedParts[cat];
    if (!list || list.length === 0) return;

    setIndexes((prev) => ({
      ...prev,
      [cat]: (prev[cat] + 1) % list.length,
    }));
  };

  const handlePrev = (cat) => {
    const list = groupedParts[cat];
    if (!list || list.length === 0) return;

    setIndexes((prev) => ({
      ...prev,
      [cat]: (prev[cat] - 1 + list.length) % list.length,
    }));
  };

  const handleSave = async () => {
    if (
      !selectedParts.hair ||
      !selectedParts.head ||
      !selectedParts.body ||
      !selectedParts.legs
    ) {
      alert("Faltan partes para armar el personaje.");
      return;
    }

    await addCharacter({
      name: name || "Sin nombre",
      hair: selectedParts.hair.id,
      head: selectedParts.head.id,
      body: selectedParts.body.id,
      legs: selectedParts.legs.id,
    });

    router.push("/gallery");
  };

  const loading =
    !groupedParts.hair.length &&
    !groupedParts.head.length &&
    !groupedParts.body.length &&
    !groupedParts.legs.length;

  if (loading) {
    return (
      <main className="min-h-screen bg-[#1a1a1a] text-white flex items-center justify-center">
        <p>Cargando partes...</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-radial-with-image text-white flex flex-col items-center px-4 md:px-0">
      <Navbar />

      <h1
        className="
          text-2xl md:text-3xl 
          font-black 
          tracking-[0.15em] md:tracking-[0.25em] 
          uppercase 
          mb-6 md:mb-8
          mt-6 md:mt-4
          text-center
          drop-shadow-[4px_4px_0_rgba(0,0,0,0.8)]
        "
      >
        Create Your Character
      </h1>

      {/* MOBILE FIRST */}
      <div className="w-full max-w-6xl flex flex-col items-center gap-6 md:hidden">
        {/* preview */}
        <div className="w-full flex justify-center">
          <div className="mx-auto bg-black rounded-3xl p-4 shadow-2xl w-full max-w-xs">
            <CharacterPreview parts={selectedParts} />
          </div>
        </div>

        {/* controles por categoría */}
        <div className="w-full flex flex-col gap-4">
          {categories.map((cat) => (
            <div
              key={cat}
              className="
                flex items-center justify-between 
                bg-black/50 
                border border-white/10 
                rounded-2xl 
                px-4 py-3
                backdrop-blur-sm
              "
            >
              <p
                className="
                  text-sm font-black uppercase 
                  tracking-[0.2em]
                  drop-shadow-[3px_3px_0_rgba(0,0,0,0.8)]
                "
              >
                {cat}
              </p>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handlePrev(cat)}
                  className="
                    w-9 h-9 
                    bg-white/80 
                    rounded-xl 
                    flex items-center justify-center 
                    text-black text-xl 
                    hover:bg-white 
                    transition
                  "
                >
                  ←
                </button>
                <button
                  onClick={() => handleNext(cat)}
                  className="
                    w-9 h-9 
                    bg-white/80 
                    rounded-xl 
                    flex items-center justify-center 
                    text-black text-xl 
                    hover:bg-white 
                    transition
                  "
                >
                  →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* DESKTOP */}
      <div className="hidden md:flex relative w-full max-w-6xl justify-center mt-4">
        {/* izquierda */}
        <div className="absolute left-60 top-0 bottom-0 flex flex-col justify-center gap-10 pl-8">
          {categories.map((cat) => (
            <div key={cat} className="flex items-center gap-4">
              <p
                className="
                  text-xl capitalize font-black 
                  tracking-[0.25em]
                  drop-shadow-[4px_4px_0_rgba(0,0,0,0.8)]
                "
              >
                {cat}
              </p>
              <button
                onClick={() => handlePrev(cat)}
                className="
                  w-10 h-10 
                  bg-white/80 
                  rounded-xl 
                  flex items-center justify-center 
                  text-black text-2xl 
                  hover:bg-white 
                  transition
                "
              >
                ←
              </button>
            </div>
          ))}
        </div>

        {/* preview */}
        <div className="mx-auto bg-black rounded-3xl p-6 shadow-2xl">
          <CharacterPreview parts={selectedParts} />
        </div>

        {/* derecha */}
        <div className="absolute right-85 top-0 bottom-0 flex flex-col justify-center gap-10 pr-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleNext(cat)}
              className="
                w-10 h-10 
                bg-white/80 
                rounded-xl 
                flex items-center justify-center 
                text-black text-2xl 
                hover:bg-white 
                transition
              "
            >
              →
            </button>
          ))}
        </div>
      </div>

      {/* nombre + guardar */}
      <div className="mt-8 md:mt-10 flex flex-col items-center gap-4 md:gap-6 w-full max-w-md">
        <input
          placeholder="Nombre del personaje"
          className="
            px-4 py-3 
            w-full md:w-72
            bg-black/60 backdrop-blur-sm
            border border-white/10
            rounded-xl
            text-white placeholder-gray-400
            shadow-[0_0_20px_rgba(0,0,0,0.6)]
            focus:outline-none focus:ring-2 focus:ring-purple-500/60
            transition-all duration-200
            tracking-wide
            text-sm md:text-base
          "
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <button
          onClick={handleSave}
          className="
            px-6 py-3 md:px-8 
            w-full md:w-auto
            rounded-xl 
            text-base md:text-lg font-semibold
            bg-purple-700/80
            hover:bg-purple-600
            text-white tracking-wide
            shadow-[0_0_25px_rgba(147,51,234,0.45)]
            hover:shadow-[0_0_35px_rgba(147,51,234,0.8)]
            transition-all duration-200
            hover:scale-[1.03]
          "
        >
          Guardar personaje
        </button>
      </div>
      <Footer />
    </main>
  );
}

export default CharactersPage;
