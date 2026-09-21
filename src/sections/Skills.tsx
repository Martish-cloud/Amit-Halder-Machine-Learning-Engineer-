import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sparkles,
  Binary,
  Cpu,
  Database,
  Layers,
  Palette,
  CheckCircle,
} from 'lucide-react';
import { skillCategories } from '../data/profile';

const categoryIconMap: Record<string, React.ReactNode> = {
  Sparkles: <Sparkles className="w-4 h-4 text-brand-cyan" />,
  Binary: <Binary className="w-4 h-4 text-brand-blue" />,
  Cpu: <Cpu className="w-4 h-4 text-brand-violet" />,
  Database: <Database className="w-4 h-4 text-emerald-400" />,
  Layers: <Layers className="w-4 h-4 text-amber-400" />,
  Palette: <Palette className="w-4 h-4 text-pink-400" />,
};

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const displayedCategories =
    selectedCategory === 'all'
      ? skillCategories
      : skillCategories.filter((c) => c.id === selectedCategory);

  return (
    <section id="skills" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex items-center gap-2 mb-3">
        <span className="font-mono text-xs text-brand-cyan uppercase tracking-widest">
          04 // Skills & Capabilities
        </span>
        <div className="h-[1px] flex-1 max-w-[80px] bg-brand-cyan/30" />
      </div>

      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
        <div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 dark:text-white tracking-tight">
            Technical Ecosystem
          </h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 max-w-xl font-sans">
            Specialized toolsets across Generative AI foundation models, machine learning,
            operational automation, and enterprise business intelligence.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-2xl glass-panel border border-slate-200 dark:border-white/10 text-xs">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-3 py-1.5 rounded-xl transition-all font-medium ${
              selectedCategory === 'all'
                ? 'bg-brand-cyan text-white shadow-sm font-semibold'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            All Disciplines
          </button>
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1.5 rounded-xl transition-all font-medium flex items-center gap-1.5 ${
                selectedCategory === cat.id
                  ? 'bg-brand-cyan text-white shadow-sm font-semibold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <span>{cat.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Categorized Skills Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {displayedCategories.map((category) => (
            <motion.div
              key={category.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.35 }}
              className="glass-card p-6 rounded-2xl flex flex-col justify-between group hover:border-brand-cyan/40"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-200/60 dark:border-white/10 mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center">
                      {categoryIconMap[category.icon]}
                    </div>
                    <h3 className="font-display font-bold text-base text-slate-900 dark:text-white">
                      {category.name}
                    </h3>
                  </div>
                  <span className="text-[10px] font-mono text-slate-400">
                    {category.skills.length} skills
                  </span>
                </div>

                <p className="text-xs text-slate-500 dark:text-slate-400 mb-5 font-sans">
                  {category.description}
                </p>

                {/* Skills Badges */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                        skill.highlight
                          ? 'bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/30 shadow-sm'
                          : 'bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/5'
                      }`}
                    >
                      <CheckCircle className="w-3 h-3 text-brand-cyan/80 shrink-0" />
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};
