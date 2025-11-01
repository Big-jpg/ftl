"use client";

import { useState, useMemo } from "react";
import { Code2, Github, Linkedin } from "lucide-react";
import { TIERS, FILAMENTS, FilamentInfo } from "@/data/filaments";
import TierSection from "@/components/TierSection";
import FilamentModal from "@/components/FilamentModal";

export default function Page() {
    const [selected, setSelected] = useState<FilamentInfo | null>(null);

    return (
        <main className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-slate-100 p-6 md:p-10 flex flex-col">
            <div className="max-w-6xl mx-auto w-full space-y-10 flex-1">
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

            <footer className="mt-16 border-t border-white/10">
                <div className="max-w-6xl mx-auto w-full flex flex-col gap-4 py-6 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
                    <p className="text-center md:text-left">
                        Crafted with curiosity by Ross Farrell. Dive deeper into the code or connect below.
                    </p>
                    <div className="flex items-center justify-center gap-4">
                        <a
                            href="https://www.linkedin.com/in/rossfarrellvirtualengineer/"
                            className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-slate-200 transition hover:border-white/20 hover:bg-white/10 hover:text-white"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Ross Farrell on LinkedIn"
                        >
                            <Linkedin className="h-4 w-4" />
                            <span className="text-xs font-medium tracking-wide">LinkedIn</span>
                        </a>
                        <a
                            href="https://github.com/Big-jpg"
                            className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-slate-200 transition hover:border-white/20 hover:bg-white/10 hover:text-white"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Big-jpg on GitHub"
                        >
                            <Github className="h-4 w-4" />
                            <span className="text-xs font-medium tracking-wide">GitHub</span>
                        </a>
                        <a
                            href="https://github.com/Big-jpg/ftl"
                            className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-slate-200 transition hover:border-white/20 hover:bg-white/10 hover:text-white"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="View the project repository"
                        >
                            <Code2 className="h-4 w-4" />
                            <span className="text-xs font-medium tracking-wide">Project Repo</span>
                        </a>
                    </div>
                </div>
            </footer>

            <FilamentModal
                filament={selected}
                onClose={() => setSelected(null)}
            />
        </main>
    );
}