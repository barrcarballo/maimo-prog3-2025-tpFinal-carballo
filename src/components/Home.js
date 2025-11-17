'use client'
import React from 'react';
import { useRouter } from "next/navigation";

const HomeContainer = () => {
    const router = useRouter();
    
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