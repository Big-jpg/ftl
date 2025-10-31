import { Tier } from '@/data/filaments';

interface TierBadgeProps {
  tier: Tier;
}

const tierStyles: Record<Tier, string> = {
  S: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40',
  A: 'bg-sky-500/20 text-sky-400 border-sky-500/40',
  B: 'bg-amber-500/20 text-amber-400 border-amber-500/40',
  C: 'bg-red-500/20 text-red-400 border-red-500/40',
  F: 'bg-slate-500/20 text-slate-400 border-slate-500/40',
};

export default function TierBadge({ tier }: TierBadgeProps) {
  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold border ${tierStyles[tier]}`}
    >
      {tier} Tier
    </span>
  );
}
