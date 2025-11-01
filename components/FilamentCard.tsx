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
      whileHover={{ scale: 1.03, y: -4 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 260, damping: 18 }}
      className={[
        "group relative flex h-full w-full flex-col items-start gap-4", // layout
        "rounded-2xl border border-white/10 bg-slate-900/70 px-6 py-5 text-left", // card chrome
        "shadow-lg shadow-black/30 ring-1 ring-white/5", // depth
        "backdrop-blur-md transition-all duration-200", // motion polish
        "hover:-translate-y-2 hover:border-white/20 hover:shadow-2xl", // hover feedback
        "text-white/90",
      ].join(" ")}
    >
      <div
        className={[
          "flex h-12 w-12 items-center justify-center rounded-full bg-white/10", // icon housing
          colorClass,
          "text-white/90",
        ].join(" ")}
      >
        <Image
          src="/benchy.svg"
          alt={filament.name}
          width={40}
          height={40}
          className="opacity-80"
        />
      </div>

      <div className="space-y-1">
        <div className="text-base font-semibold leading-tight text-white">
          {filament.name}
        </div>
        {filament.aliases?.length ? (
          <div className="text-xs uppercase tracking-[0.3em] text-white/50">
            {filament.aliases.join(" • ")}
          </div>
        ) : null}
      </div>
    </motion.button>
  );
}