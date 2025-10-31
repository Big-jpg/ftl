"use client";

import { useState, useMemo } from "react";
import { TIERS, FILAMENTS, FilamentInfo } from "@/data/filaments";
import TierSection from "@/components/TierSection";
import FilamentModal from "@/components/FilamentModal";

export default function Page() {
    const [selected, setSelected] = useState<FilamentInfo | null>(null);

    return (
        <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100 p-6 md:p-10">
            <div className="max-w-6xl mx-auto space-y-10">
                <header className="text-center space-y-3">
                    <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
                        3D Printing Filament Tier List
                    </h1>
                    <p className="text-slate-400 text-sm md:text-base">
                        Click a Benchy to see pros, cons, ideal use cases, and where to buy.
                    </p>
                    <p className="text-[10px] text-slate-600 uppercase tracking-wide">
                        Some filaments need hardened nozzles, enclosures, or fume control.
                    </p>
                </header>

                <div className="space-y-12">
                    {TIERS.map(({ tier, label, color }) => {
                        const tierFils = useMemo(
                            () => FILAMENTS.filter((f) => f.tier === tier),
                            [tier]
                        );

                        return (
                            <TierSection
                                key={tier}
                                tier={tier}
                                label={label}
                                color={color}
                                filaments={tierFils}
                                onSelect={(f) => setSelected(f)}
                            />
                        );
                    })}
                </div>
            </div>

            <FilamentModal
                filament={selected}
                onClose={() => setSelected(null)}
            />
        </main>
    );
}
