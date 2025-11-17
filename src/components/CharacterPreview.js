"use client";

import Image from "next/image";

function CharacterPreview({ parts }) {
  return (
    <div className="relative w-[200px] h-[300px] bg-slate-900 rounded-xl overflow-hidden">
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

      {parts.legs?.src && (
        <Image
          src={parts.legs.src}
          alt="legs"
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
    </div>
  );
}

export default CharacterPreview;
