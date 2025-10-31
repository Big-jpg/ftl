"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FilamentInfo } from "@/data/filaments";

interface FilamentCardProps {
  filament: FilamentInfo;
  colorClass: string; // tier accent, e.g. "text-emerald-400"
  onSelect: (f: FilamentInfo) => void;
}

export default function FilamentCard({
  filament,
  colorClass,
  onSelect,
}: FilamentCardProps) {
  return (
    <motion.button
      type="button"
      onClick={() => onSelect(filament)}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className={[
        // layout
        "w-full h-full flex flex-col items-center justify-center text-center rounded-xl p-4",
        // background separation
        "bg-white/10 backdrop-blur-md",
        // border / shadow
        "border border-white/10 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.8)]",
        // hover feedback
        "hover:bg-white/15 hover:border-white/20 transition-colors duration-200",
        // text
        "text-white"
      ].join(" ")}
    >
      {/* Benchy icon */}
      <div
        className={[
          "flex items-center justify-center",
          colorClass,           // tint for the stroke/fill if using currentColor
          "text-white/80",      // fallback if SVG isn't using currentColor
          "mb-3"
        ].join(" ")}
      >
        {/* Option A: inline SVG component (BenchyIcon) */}
        {/* <BenchyIcon className="w-10 h-10" /> */}

        {/* Option B: using /public/benchy.svg */}
        <Image
          src="/benchy.svg"
          alt={filament.name}
          width={40}
          height={40}
          className="opacity-80"
        />
      </div>

      {/* label */}
      <div className="text-sm font-semibold leading-snug text-white/90">
        {filament.name}
      </div>
    </motion.button>
  );
}
