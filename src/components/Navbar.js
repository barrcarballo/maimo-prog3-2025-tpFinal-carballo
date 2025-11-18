"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="relative w-full flex flex-col items-center pt-10 pb-6 overflow-hidden">
      {/* Capa de degradado */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-linear-to-b from-black to-transparent" />

      {/* Contenido encima */}
      <div className="z-10 m-6">
        <Image
          src="/dummy/logo.png"
          alt="BurtonMaker Logo"
          width={360}
          height={130}
          className="object-contain"
        />
      </div>

      <ul
        className="z-10 flex gap-20 font-black 
    text-white 
    drop-shadow-[4px_0px_0px_rgba(0,0,0,0.8)] text-lg  tracking-wide"
      >
        <li>
          <Link href="/" className="hover:text-gray-300 transition">
            Home
          </Link>
        </li>

        <li>
          <Link href="/gallery" className="hover:text-gray-300 transition">
            Gallery
          </Link>
        </li>

        <li>
          <Link href="/about" className="hover:text-gray-300 transition">
            About me
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
