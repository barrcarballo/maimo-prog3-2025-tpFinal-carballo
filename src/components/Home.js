'use client'
import React from 'react';
import { useRouter } from "next/navigation";

const HomeContainer = () => {
    const router = useRouter();

//      return (
//     <div className="flex flex-col items-center justify-center h-screen text-center bg-gray-900 text-white">
//       <h1 className="text-4xl font-bold mb-6">Creador de Personajes</h1>
//       <p className="mb-10 text-lg">Inspirado en el universo de Tim Burton 🖤</p>
//       <button
//         onClick={() => router.push("/characters")}
//         className="px-6 py-3 bg-purple-700 hover:bg-purple-600 rounded-lg transition"
//       >
//         Comenzar
//       </button>
//     </div>
//   );
return (
    <main className="min-h-screen bg-slate-950 text-slate-50 flex flex-col items-center justify-center gap-4">
      <h1 className="text-4xl font-bold">Burton Maker</h1>
      <p className="opacity-80">Crea tu propio personaje gótico.</p>
      <button
        onClick={() => router.push("/characters")}
        className="px-6 py-3 rounded-lg bg-purple-600 hover:bg-purple-500 transition"
      >
        Comenzar
      </button>
    </main>
  );
}

export default HomeContainer;