"use client";

import Image from "next/image";

export default function CharacterCard({ parts, className = "" }) {
  return (
    <div
      className={`
        relative w-[250px] h-[350px] rounded-xl overflow-hidden
        ${className}
      `}
    >
      {parts.hair?.src && (
        <Image
          src={parts.hair.src}
          alt="hair"
          fill
          className="object-contain"
        />
      )}

      {parts.body?.src && (
        <Image
          src={parts.body.src}
          alt="body"
          fill
          className="object-contain"
        />
      )}

      {parts.head?.src && (
        <Image
          src={parts.head.src}
          alt="head"
          fill
          className="object-contain"
        />
      )}

      {parts.legs?.src && (
        <Image
          src={parts.legs.src}
          alt="legs"
          fill
          className="object-contain"
        />
      )}
    </div>
  );
}
