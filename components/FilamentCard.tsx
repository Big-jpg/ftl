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
      whileHover={{ scale: 1.06, y: -8 }}
      whileTap={{ scale: 0.94 }}
      transition={{ type: "spring", stiffness: 260, damping: 12 }}
      className={[
        // layout
        "w-full h-full flex flex-col items-center justify-center text-center rounded-2xl px-6 py-5",
        "snap-center",
        // background separation
        "bg-slate-900/70 backdrop-blur-md",
        // border / shadow
        "border border-white/10 shadow-lg shadow-emerald-500/10 ring-1 ring-white/5",
        // hover feedback
        "hover:-translate-y-1 hover:shadow-2xl hover:border-white/20 transition-all duration-200",
        // text
        "text-white/95"
      ].join(" ")}
    >
      {/* Benchy icon */}
      <div
        className={[
          "flex items-center justify-center rounded-full bg-white/10 p-3",
          colorClass,           // tint for the stroke/fill if using currentColor
          "text-white/90",      // fallback if SVG isn't using currentColor
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
      <div className="text-sm font-semibold leading-snug text-white/95">
        {filament.name}
      </div>
    </motion.button>
  );
}