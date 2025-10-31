"use client";

import type { CSSProperties } from "react";

import FilamentCard from "./FilamentCard";
import { FilamentInfo, Tier } from "@/data/filaments";

const TIER_ACCENTS: Record<Tier, string> = {
  S: "255, 127, 127",
  A: "255, 191, 127",
  B: "255, 223, 127",
  C: "255, 255, 127",
  F: "191, 127, 191",
};

interface TierSectionProps {
  tier: Tier;
  label: string;
  color: string; // e.g. "text-[#ff7f7f]"
  filaments: FilamentInfo[];
  onSelect: (f: FilamentInfo) => void;
}

export default function TierSection({
  tier,
  label,
  color,
  filaments,
  onSelect,
}: TierSectionProps) {
  const sectionStyle: CSSProperties = {
    background: `linear-gradient(90deg, rgba(${TIER_ACCENTS[tier]},0.25) 0%, rgba(${TIER_ACCENTS[tier]},0.08) 55%, rgba(${TIER_ACCENTS[tier]},0) 100%), #1a1a17`,
  };

  return (
    <section
      className={[
        "relative isolate w-full overflow-hidden",
        "flex flex-col gap-5 md:flex-row md:items-stretch",
        "rounded-3xl border border-white/10",
        "px-4 py-6 sm:px-6 sm:py-8",
        "bg-[#1a1a17]",
      ].join(" ")}
      style={sectionStyle}
    >
      <div className="md:min-w-[6rem] flex flex-col gap-2">
        <div
          className={[
            "text-xs sm:text-sm font-semibold uppercase tracking-[0.4em] text-white/80",
            "whitespace-nowrap",
            color,
          ].join(" ")}
        >
          {label}
        </div>

        <div
          className={[
            "inline-flex items-center gap-2",
            "rounded-full border border-white/15 bg-white/10 px-3 py-1",
            "text-[10px] font-medium uppercase tracking-[0.2em] text-white/60",
          ].join(" ")}
        >
          <span>{filaments.length}</span>
          <span>materials</span>
        </div>
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex gap-4 sm:gap-6 overflow-x-auto pb-2 sm:pb-3 px-1 sm:px-2 snap-x snap-mandatory">
          {filaments.map((f) => (
            <div
              key={f.id}
              className="flex-shrink-0 min-w-[12rem] sm:min-w-[13rem] lg:min-w-[14rem] snap-center"
            >
              <FilamentCard
                filament={f}
                colorClass={color}
                onSelect={onSelect}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}