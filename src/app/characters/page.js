"use client";

import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import { useApp } from "../contexts/AppContext";
import CharacterPreview from "../../components/CharacterPreview";

export default function CharactersPage() {
  const router = useRouter();
  const { addCharacter, parts } = useApp();

  const categories = ["hair", "head", "body", "legs"];

  // índices de la opción seleccionada por categoría
  const [indexes, setIndexes] = useState({
    hair: 0,
    head: 0,
    body: 0,
    legs: 0,
  });

  const [name, setName] = useState("");

  // 1) Agrupar las parts que vienen del backend por tipo
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
          id: p.code,        // ej: "hair1"
          src: p.file,   // ej: "/parts/hair1.png"
          name: p.name,      // ej: "Hair 1"
        });
      }
    });

    return base;
  }, [parts]);

  // 2) Obtener la parte seleccionada actual según los índices
  const selectedParts = {
    hair: groupedParts.hair[indexes.hair] || null,
    head: groupedParts.head[indexes.head] || null,
    body: groupedParts.body[indexes.body] || null,
    legs: groupedParts.legs[indexes.legs] || null,
  };

  // 3) Flecha siguiente
  const handleNext = (cat) => {
    const list = groupedParts[cat];
    if (!list || list.length === 0) return;

    setIndexes((prev) => ({
      ...prev,
      [cat]: (prev[cat] + 1) % list.length,
    }));
  };

  // 4) Flecha anterior
  const handlePrev = (cat) => {
    const list = groupedParts[cat];
    if (!list || list.length === 0) return;

    setIndexes((prev) => ({
      ...prev,
      [cat]: (prev[cat] - 1 + list.length) % list.length,
    }));
  };

  // 5) Guardar personaje (manda codes al backend)
  const handleSave = async () => {
    if (!selectedParts.hair || !selectedParts.head || !selectedParts.body || !selectedParts.legs) {
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

  // Si todavía no cargaron las parts del backend
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
    <main className="min-h-screen bg-[#1a1a1a] text-white flex flex-col items-center p-10">
      <h1 className="text-5xl mb-6 font-bold tracking-widest">Burton Maker</h1>

      <div className="relative w-full max-w-6xl flex justify-center mt-4">

        {/* PANEL IZQUIERDO: texto + flecha izquierda */}
        <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-center gap-10 pl-8">
          {categories.map((cat) => (
            <div key={cat} className="flex items-center gap-4">
              <p className="text-2xl w-20 capitalize">{cat}</p>
              <button
                onClick={() => handlePrev(cat)}
                className="w-10 h-10 bg-white/80 rounded-xl flex items-center justify-center text-black text-2xl hover:bg-white transition"
              >
                ←
              </button>
            </div>
          ))}
        </div>

        {/* CENTRO: preview del personaje */}
        <div className="mx-auto bg-black/50 rounded-3xl p-6 shadow-2xl">
          <CharacterPreview parts={selectedParts} />
        </div>

        {/* PANEL DERECHO: flecha derecha */}
        <div className="absolute right-0 top-0 bottom-0 flex flex-col justify-center gap-10 pr-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleNext(cat)}
              className="w-10 h-10 bg-white/80 rounded-xl flex items-center justify-center text-black text-2xl hover:bg-white transition"
            >
              →
            </button>
          ))}
        </div>
      </div>

      {/* nombre + guardar */}
      <div className="mt-10 flex flex-col items-center gap-4">
        <input
          placeholder="Nombre del personaje"
          className="px-4 py-2 bg-black border border-gray-600 rounded-xl text-white"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button
          onClick={handleSave}
          className="px-6 py-3 bg-purple-600 hover:bg-purple-500 rounded-xl text-lg transition"
        >
          Guardar personaje
        </button>
      </div>
    </main>
  );
}
