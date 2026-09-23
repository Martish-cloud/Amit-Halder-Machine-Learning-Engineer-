import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { techOrbit } from '../data/profile';
import { Terminal, Sparkles } from 'lucide-react';

export const TechOrbit: React.FC = () => {
  const [activeTech, setActiveTech] = useState<string | null>(null);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'AI':
        return 'border-brand-burgundy/40 text-brand-burgundy bg-brand-burgundy/5 hover:border-brand-burgundy';
      case 'Code':
        return 'border-brand-slate/40 text-brand-slate bg-brand-slate/5 hover:border-brand-slate';
      case 'Data':
        return 'border-brand-navy/40 text-brand-navy dark:text-brand-warm-gray bg-brand-navy/5 hover:border-brand-navy';
      case 'Automation':
        return 'border-brand-charcoal/40 text-brand-charcoal dark:text-slate-300 bg-brand-charcoal/5 hover:border-brand-charcoal';
      case 'Operations':
        return 'border-brand-slate/30 text-brand-slate/80 bg-brand-slate/5 hover:border-brand-slate';
      default:
        return 'border-slate-300 dark:border-white/20 text-slate-700 dark:text-slate-300';
    }
  };

  return (
    <section className="relative py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="glass-panel p-8 sm:p-12 rounded-3xl relative overflow-hidden border border-slate-200 dark:border-white/10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-brand-burgundy uppercase tracking-wider mb-2">
              <Terminal className="w-3.5 h-3.5" />
              <span>Core Stack Matrix</span>
            </div>
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-slate-900 dark:text-brand-warm-gray">
              AI &amp; Engineering Toolkit
            </h3>
          </div>
          <p className="text-xs font-mono text-slate-500 dark:text-slate-400 max-w-md">
            Click or hover any technology node to view specialization tier. Filtered strictly by verified skills and experience.
          </p>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5">
          {techOrbit.map((tech) => {
            const isSelected = activeTech === tech.name;
            return (
              <motion.button
                key={tech.name}
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActiveTech(isSelected ? null : tech.name)}
                className={`p-4 rounded-xl border transition-all text-left flex flex-col justify-between backdrop-blur-md ${getCategoryColor(
                  tech.category
                )} ${isSelected ? 'ring-2 ring-brand-burgundy shadow-lg shadow-brand-burgundy/15' : ''}`}
              >
                <div className="flex items-center justify-between w-full mb-3">
                  <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-black/10 dark:bg-white/10">
                    {tech.category}
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">
                    {tech.level}
                  </span>
                </div>

                <div className="font-display font-semibold text-sm sm:text-base text-slate-900 dark:text-white">
                  {tech.name}
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Selected Tech Detail Banner */}
        {activeTech && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 p-4 rounded-xl bg-brand-burgundy/10 border border-brand-burgundy/30 flex items-center justify-between flex-wrap gap-2 text-xs font-mono text-brand-burgundy"
          >
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              <span>Selected Node: <strong>{activeTech}</strong></span>
            </div>
            <span>Integrated across production deployments &amp; workflows</span>
          </motion.div>
        )}
      </div>
    </section>
  );
};
