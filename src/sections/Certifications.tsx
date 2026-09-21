import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { certifications } from '../data/profile';

const categories = [
  'All',
  'AI & GenAI',
  'Data & Analytics',
  'Automation & Dev',
  'Productivity & Languages',
] as const;

export const Certifications: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredCerts = certifications.filter((cert) => {
    if (selectedCategory === 'All') return true;
    return cert.category === selectedCategory;
  });

  const getProviderBadge = (provider: string) => {
    switch (provider) {
      case 'IBM':
        return 'bg-blue-500/10 text-blue-400 border-blue-500/30';
      case 'Deloitte':
        return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30';
      case 'Udemy':
        return 'bg-purple-500/10 text-purple-400 border-purple-500/30';
      case 'Simplilearn':
        return 'bg-amber-500/10 text-amber-400 border-amber-500/30';
      default:
        return 'bg-slate-500/10 text-slate-400 border-slate-500/30';
    }
  };

  return (
    <section id="certifications" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex items-center gap-2 mb-3">
        <span className="font-mono text-xs text-brand-cyan uppercase tracking-widest">
          06 // Professional Credentials
        </span>
        <div className="h-[1px] flex-1 max-w-[80px] bg-brand-cyan/30" />
      </div>

      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
        <div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 dark:text-white tracking-tight">
            Verified Certifications
          </h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 max-w-xl font-sans">
            Formal technical certifications issued by IBM, Deloitte, Simplilearn, Udemy, and partner institutions.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-2xl glass-panel border border-slate-200 dark:border-white/10 text-xs">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-3 py-1.5 rounded-xl transition-all font-medium ${
                selectedCategory === category
                  ? 'bg-brand-cyan text-white shadow-sm font-semibold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {category} {category === 'All' ? `(${certifications.length})` : ''}
            </button>
          ))}
        </div>
      </div>

      {/* Certifications Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <AnimatePresence mode="popLayout">
          {filteredCerts.map((cert, idx) => (
            <motion.div
              key={cert.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, delay: idx * 0.03 }}
              className="glass-card p-5 rounded-2xl flex flex-col justify-between group hover:border-brand-cyan/40"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span
                    className={`text-[10px] font-mono px-2 py-0.5 rounded-full border font-semibold ${getProviderBadge(
                      cert.provider
                    )}`}
                  >
                    {cert.provider}
                  </span>

                  <span className="text-[10px] font-mono text-slate-400">
                    {cert.category}
                  </span>
                </div>

                <h3 className="font-display font-bold text-base text-slate-900 dark:text-white group-hover:text-brand-cyan transition-colors leading-snug">
                  {cert.title}
                </h3>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200/60 dark:border-white/5 flex items-center justify-between text-xs text-slate-500 font-mono">
                <div className="flex items-center gap-1 text-brand-cyan">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Credential Verified</span>
                </div>
                <span>Issuer: {cert.provider}</span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};
