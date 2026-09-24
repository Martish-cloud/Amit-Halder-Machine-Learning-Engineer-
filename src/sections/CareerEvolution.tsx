import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Factory, Database, Sparkles, BrainCircuit } from 'lucide-react';
import { evolutionStages } from '../data/profile';

const stageIconMap: Record<number, React.ReactNode> = {
  0: <Factory className="w-5 h-5 text-amber-400" />,
  1: <Database className="w-5 h-5 text-sky-400" />,
  2: <Sparkles className="w-5 h-5 text-emerald-400" />,
  3: <BrainCircuit className="w-5 h-5 text-rose-400" />,
};

export const CareerEvolution: React.FC = () => {
  return (
    <section id="journey" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex items-center gap-2 mb-3">
        <span className="font-mono text-xs text-rose-400 uppercase tracking-widest font-semibold">
          02 // Professional Trajectory
        </span>
        <div className="h-[1px] flex-1 max-w-[80px] bg-rose-500/40" />
      </div>

      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight drop-shadow-sm">
            Career Evolution
          </h2>
          <p className="mt-2 text-sm text-slate-300 max-w-2xl font-sans">
            How 6+ years of operational discipline, ERP tracking, and data analysis in industrial environments
            evolved into engineering cutting-edge Generative AI and Machine Learning systems.
          </p>
        </div>
      </div>

      {/* Trajectory Sequence Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 relative">
        {evolutionStages.map((stage, idx) => (
          <motion.div
            key={stage.step}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="glass-card p-6 rounded-2xl flex flex-col justify-between relative group border border-white/12"
          >
            {/* Header with icon & step badge */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-slate-800/80 border border-white/15 flex items-center justify-center shadow-inner">
                  {stageIconMap[idx]}
                </div>
                <span className="font-mono text-xs px-3 py-1 rounded-full bg-rose-950/50 text-rose-300 border border-rose-500/40 font-bold shadow-sm">
                  STEP {stage.step}
                </span>
              </div>

              <div className="text-xs font-mono text-slate-300 font-medium mb-1.5">
                {stage.timeframe} &bull; <span className="text-rose-400 font-semibold">{stage.domain}</span>
              </div>

              <h3 className="font-display font-bold text-base text-white mb-2 group-hover:text-rose-300 transition-colors">
                {stage.title}
              </h3>

              <p className="text-xs text-slate-300 leading-relaxed font-sans">
                {stage.description}
              </p>
            </div>

            {/* Core capabilities */}
            <div className="mt-5 pt-4 border-t border-white/10">
              <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400 mb-2 font-semibold">
                Capabilities
              </div>
              <div className="flex flex-wrap gap-1.5">
                {stage.capabilities.map((cap) => (
                  <span
                    key={cap}
                    className="px-2.5 py-1 rounded-md text-[10px] font-mono bg-slate-800/80 text-slate-200 border border-white/10 hover:border-white/20 transition-colors"
                  >
                    {cap}
                  </span>
                ))}
              </div>
            </div>

            {/* Next stage arrow (except last) — clearly visible, elevated circular button */}
            {idx < evolutionStages.length - 1 && (
              <div className="hidden lg:flex absolute -right-3.5 top-1/2 -translate-y-1/2 z-20 w-7 h-7 rounded-full bg-slate-800 border border-white/25 hover:border-rose-400 items-center justify-center shadow-lg transition-colors">
                <ArrowRight className="w-3.5 h-3.5 text-rose-400" />
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};
