"use client";

import CharacterCard from "./CharacterCard";

export default function CharacterPreview({ parts }) {
  return (
    <div className="flex flex-col items-center gap-4">
      <CharacterCard parts={parts} />
    </div>
  );
}
