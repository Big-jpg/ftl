import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import { FilamentInfo } from '@/data/filaments';
import TierBadge from './TierBadge';
import { X } from 'lucide-react';

interface FilamentModalProps {
  filament: FilamentInfo | null;
  onClose: () => void;
}

export default function FilamentModal({ filament, onClose }: FilamentModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (filament) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [filament, onClose]);

  if (!filament) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: 'spring', duration: 0.3 }}
          className="relative max-w-2xl w-full max-h-[90vh] overflow-y-auto rounded-2xl bg-slate-900 border border-slate-700 p-6 shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full hover:bg-slate-800 transition-colors text-slate-400 hover:text-slate-200"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>

          <div className="space-y-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-2xl font-bold text-slate-100 mb-2">
                  {filament.name}
                </h2>
                {filament.aliases && filament.aliases.length > 0 && (
                  <p className="text-sm text-slate-400">
                    Also known as: {filament.aliases.join(', ')}
                  </p>
                )}
              </div>
              <TierBadge tier={filament.tier} />
            </div>

            {filament.disqualified && (
              <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/30">
                <p className="text-red-400 font-semibold">
                  ⚠️ Disqualified / Edible 🍫
                </p>
                <p className="text-sm text-red-300 mt-1">
                  Not a real filament for functional printing
                </p>
              </div>
            )}

            {filament.pros.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold text-emerald-400 mb-2">
                  ✓ Pros
                </h3>
                <ul className="space-y-1 text-slate-300">
                  {filament.pros.map((pro, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-emerald-400 mt-1">•</span>
                      <span>{pro}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {filament.cons.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold text-red-400 mb-2">
                  ✗ Cons
                </h3>
                <ul className="space-y-1 text-slate-300">
                  {filament.cons.map((con, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-red-400 mt-1">•</span>
                      <span>{con}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {filament.useCases.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold text-sky-400 mb-2">
                  🎯 Recommended Use Cases
                </h3>
                <ul className="space-y-1 text-slate-300">
                  {filament.useCases.map((useCase, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-sky-400 mt-1">•</span>
                      <span>{useCase}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {filament.safetyNotes && filament.safetyNotes.length > 0 && (
              <div className="p-4 rounded-lg bg-amber-500/10 border border-amber-500/30">
                <h3 className="text-lg font-semibold text-amber-400 mb-2">
                  ⚠️ Safety Notes
                </h3>
                <ul className="space-y-1 text-amber-200">
                  {filament.safetyNotes.map((note, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-amber-400 mt-1">•</span>
                      <span>{note}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {filament.affiliateUrl && (
              <div className="pt-4 border-t border-slate-700">
                <a
                  href={filament.affiliateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-3 px-6 text-center font-semibold rounded-lg bg-gradient-to-r from-emerald-600 to-sky-600 hover:from-emerald-500 hover:to-sky-500 text-white transition-all shadow-lg hover:shadow-xl"
                >
                  Get Filament →
                </a>
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
