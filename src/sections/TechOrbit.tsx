import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { techOrbit } from '../data/profile';
import { Terminal, Sparkles } from 'lucide-react';

export const TechOrbit: React.FC = () => {
  const [activeTech, setActiveTech] = useState<string | null>(null);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'AI':
        return 'border-rose-500/40 text-rose-300 bg-rose-950/30 hover:border-rose-400 hover:bg-rose-950/50';
      case 'Code':
        return 'border-sky-500/40 text-sky-300 bg-sky-950/30 hover:border-sky-400 hover:bg-sky-950/50';
      case 'Data':
        return 'border-emerald-500/40 text-emerald-300 bg-emerald-950/30 hover:border-emerald-400 hover:bg-emerald-950/50';
      case 'Automation':
        return 'border-purple-500/40 text-purple-300 bg-purple-950/30 hover:border-purple-400 hover:bg-purple-950/50';
      case 'Operations':
        return 'border-amber-500/40 text-amber-300 bg-amber-950/30 hover:border-amber-400 hover:bg-amber-950/50';
      default:
        return 'border-white/20 text-slate-200 bg-slate-900/40 hover:border-white/40';
    }
  };

  return (
    <section className="relative py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="glass-panel p-8 sm:p-12 rounded-3xl relative overflow-hidden border border-white/15 bg-slate-900/70 shadow-lg">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-rose-400 uppercase tracking-wider mb-2 font-semibold">
              <Terminal className="w-3.5 h-3.5" />
              <span>Core Stack Matrix</span>
            </div>
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-white">
              AI &amp; Engineering Toolkit
            </h3>
          </div>
          <p className="text-xs font-mono text-slate-300 max-w-md">
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
                )} ${isSelected ? 'ring-2 ring-rose-500 shadow-lg shadow-rose-950/50' : ''}`}
              >
                <div className="flex items-center justify-between w-full mb-3">
                  <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-white/10 text-slate-200 font-semibold">
                    {tech.category}
                  </span>
                  <span className="text-[10px] font-mono text-slate-300 font-medium">
                    {tech.level}
                  </span>
                </div>

                <div className="font-display font-semibold text-sm sm:text-base text-white">
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
            className="mt-6 p-4 rounded-xl bg-rose-950/40 border border-rose-500/40 flex items-center justify-between flex-wrap gap-2 text-xs font-mono text-rose-200 shadow-sm"
          >
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-rose-400" />
              <span>Selected Node: <strong className="text-white font-bold">{activeTech}</strong></span>
            </div>
            <span className="text-slate-300">Integrated across production deployments &amp; workflows</span>
          </motion.div>
        )}
      </div>
    </section>
  );
};
