"use client";

import type { CSSProperties } from "react";

import FilamentCard from "./FilamentCard";
import { FilamentInfo, Tier } from "@/data/filaments";

const TIER_ACCENTS: Record<Tier, string> = {
  S: "255, 119, 119",
  A: "255, 183, 119",
  B: "255, 219, 119",
  C: "244, 255, 140",
  F: "194, 136, 219",
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
  const accent = TIER_ACCENTS[tier];
  const sectionStyle: CSSProperties = {
    backgroundColor: "#13130f",
    boxShadow: "0 30px 60px -45px rgba(0, 0, 0, 0.85)",
  };

  return (
    <section
      className={[
        "relative isolate w-full overflow-hidden",
        "rounded-3xl border border-white/10",
        "bg-[#13130f]",
        "text-white/90",
      ].join(" ")}
      style={sectionStyle}
    >
      <div
        aria-hidden
        className="absolute inset-y-0 left-0 w-20 sm:w-24 md:w-28 lg:w-32"
        style={{
          background: `linear-gradient(90deg, rgba(${accent},0.85) 0%, rgba(${accent},0.72) 35%, rgba(${accent},0.28) 68%, rgba(${accent},0) 100%)`,
        }}
      />

      <div className="relative grid gap-6 md:grid-cols-[minmax(0,12rem)_1fr] px-6 py-7 sm:px-8">
        <div className="flex flex-col gap-4">
          <div className="space-y-1">
            <div
              className={[
                "text-4xl font-semibold leading-none tracking-tight text-white",
                color,
              ].join(" ")}
            >
              {tier}
            </div>
            <div className="text-xs font-semibold uppercase tracking-[0.6em] text-white/70">
              {label}
            </div>
          </div>

          <div
            className={[
              "inline-flex items-center gap-2",
              "rounded-full border border-white/15 bg-white/10 px-3 py-1",
              "text-[10px] font-medium uppercase tracking-[0.24em] text-white/70",
            ].join(" ")}
          >
            <span>{filaments.length}</span>
            <span>materials</span>
          </div>
        </div>

        <div className="relative">
          <div
            className={[
              "grid gap-4",
              "sm:grid-cols-2",
              "xl:grid-cols-3",
              "2xl:grid-cols-4",
            ].join(" ")}
          >
            {filaments.map((f) => (
              <div key={f.id} className="h-full">
                <FilamentCard
                  filament={f}
                  colorClass={color}
                  onSelect={onSelect}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}