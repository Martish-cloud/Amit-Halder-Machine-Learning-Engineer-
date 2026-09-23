import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Factory, Database, Sparkles, BrainCircuit } from 'lucide-react';
import { evolutionStages } from '../data/profile';

const stageIconMap: Record<number, React.ReactNode> = {
  0: <Factory className="w-5 h-5 text-brand-charcoal dark:text-slate-300" />,
  1: <Database className="w-5 h-5 text-brand-slate" />,
  2: <Sparkles className="w-5 h-5 text-brand-navy dark:text-brand-warm-gray" />,
  3: <BrainCircuit className="w-5 h-5 text-brand-burgundy" />,
};

export const CareerEvolution: React.FC = () => {
  return (
    <section id="journey" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex items-center gap-2 mb-3">
        <span className="font-mono text-xs text-brand-burgundy uppercase tracking-widest">
          02 // Professional Trajectory
        </span>
        <div className="h-[1px] flex-1 max-w-[80px] bg-brand-burgundy/30" />
      </div>

      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 dark:text-brand-warm-gray tracking-tight">
            Career Evolution
          </h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 max-w-2xl font-sans">
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
            className="glass-card p-6 rounded-2xl flex flex-col justify-between relative group"
          >
            {/* Header with icon & step badge */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center">
                  {stageIconMap[idx]}
                </div>
                <span className="font-mono text-xs px-2.5 py-1 rounded-full bg-slate-200/50 dark:bg-white/5 text-slate-700 dark:text-slate-300 font-semibold">
                  STEP {stage.step}
                </span>
              </div>

              <div className="text-[11px] font-mono text-brand-slate mb-1">
                {stage.timeframe} &bull; {stage.domain}
              </div>

              <h3 className="font-display font-bold text-base text-slate-900 dark:text-brand-warm-gray mb-2 group-hover:text-brand-burgundy transition-colors">
                {stage.title}
              </h3>

              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                {stage.description}
              </p>
            </div>

            {/* Core capabilities */}
            <div className="mt-5 pt-4 border-t border-slate-200/60 dark:border-white/5">
              <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400 mb-2">
                Capabilities
              </div>
              <div className="flex flex-wrap gap-1.5">
                {stage.capabilities.map((cap) => (
                  <span
                    key={cap}
                    className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300"
                  >
                    {cap}
                  </span>
                ))}
              </div>
            </div>

            {/* Next stage arrow (except last) */}
            {idx < evolutionStages.length - 1 && (
              <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-20 w-6 h-6 rounded-full bg-brand-navy dark:bg-dark-surface border border-white/20 items-center justify-center text-slate-300 shadow-md">
                <ArrowRight className="w-3.5 h-3.5 text-brand-burgundy" />
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};
