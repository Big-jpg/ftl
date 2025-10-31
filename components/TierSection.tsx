"use client";

import FilamentCard from "./FilamentCard";
import { FilamentInfo, Tier } from "@/data/filaments";

interface TierSectionProps {
  tier: Tier;
  label: string;
  color: string; // e.g. "text-emerald-400"
  filaments: FilamentInfo[];
  onSelect: (f: FilamentInfo) => void; // 👈 required
}

export default function TierSection({
  tier,
  label,
  color,
  filaments,
  onSelect,
}: TierSectionProps) {
  return (
    <section className="space-y-4">
      <div className="flex items-center gap-3">
        <div className={["text-xl font-semibold tracking-tight", color].join(" ")}>
          {label}
        </div>

        <div
          className={[
            "rounded-full border px-2 py-0.5 text-[10px] font-medium leading-none",
            "border-white/20 text-white/60 bg-white/5"
          ].join(" ")}
        >
          {filaments.length} materials
        </div>
      </div>

      <div
        className="
          grid 
          grid-cols-[repeat(auto-fit,minmax(min(12rem,100%),1fr))] 
          gap-6
        "
      >
        {filaments.map((f) => (
          <FilamentCard
            key={f.id}
            filament={f}
            colorClass={color}
            onSelect={onSelect}     // 👈 pass it straight down
          />
        ))}
      </div>
    </section>
  );
}
