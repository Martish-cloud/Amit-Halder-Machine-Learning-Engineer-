import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, ChevronRight } from 'lucide-react';
import { experiences } from '../data/profile';

export const Experience: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'genai' | 'operations'>('all');

  const filteredExperiences = experiences.filter((exp) => {
    if (filter === 'all') return true;
    return exp.category === filter;
  });

  const filterBtnClass = (active: boolean) =>
    `px-3.5 py-1.5 rounded-lg transition-all ${
      active
        ? 'bg-brand-burgundy text-white font-semibold shadow-sm border border-rose-500/40'
        : 'text-slate-300 hover:text-white hover:bg-white/5'
    }`;

  return (
    <section id="experience" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex items-center gap-2 mb-3">
        <span className="font-mono text-xs text-rose-400 uppercase tracking-widest font-semibold">
          03 // Professional Experience
        </span>
        <div className="h-[1px] flex-1 max-w-[80px] bg-rose-500/30" />
      </div>

      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
            Work Experience Timeline
          </h2>
          <p className="mt-2 text-sm text-slate-300 max-w-xl font-sans">
            Chronological record of roles spanning Generative AI development at Intuit and Mphasis,
            along with comprehensive industrial PPC and ERP leadership.
          </p>
        </div>

        {/* Filter Toggle Buttons */}
        <div className="flex items-center p-1 rounded-xl glass-panel border border-white/15 bg-slate-900/60 self-start md:self-auto text-xs font-medium">
          <button onClick={() => setFilter('all')} className={filterBtnClass(filter === 'all')}>
            All Roles (6)
          </button>
          <button onClick={() => setFilter('genai')} className={filterBtnClass(filter === 'genai')}>
            GenAI &amp; Applied ML
          </button>
          <button onClick={() => setFilter('operations')} className={filterBtnClass(filter === 'operations')}>
            Operations &amp; ERP
          </button>
        </div>
      </div>

      {/* Interactive Timeline Container */}
      <div className="relative border-l-2 border-slate-700/60 ml-4 sm:ml-8 md:ml-32 space-y-12">
        <AnimatePresence mode="popLayout">
          {filteredExperiences.map((exp, idx) => (
            <motion.div
              key={exp.id}
              layout
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, margin: '-40px' }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="relative pl-6 sm:pl-10 group"
            >
              {/* Timeline Marker Dot */}
              <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-slate-950 border-2 border-rose-500 shadow-[0_0_8px_rgba(244,63,94,0.4)] group-hover:scale-125 transition-transform flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-rose-400" />
              </div>

              {/* Timestamp badge — left side on md+ */}
              <div className="md:absolute md:-left-36 md:top-0 text-left md:text-right md:w-28 text-xs font-mono mb-2 md:mb-0">
                <span className="inline-block px-2.5 py-1 rounded-md bg-slate-800/80 border border-white/15 font-semibold text-slate-200 shadow-sm">
                  {exp.period}
                </span>
              </div>

              {/* Main Role Card */}
              <div className="glass-card p-6 sm:p-7 rounded-2xl border border-white/15 bg-slate-900/70 shadow-sm hover:shadow-lg transition-all">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-white/10">
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="font-display font-bold text-lg sm:text-xl text-white">
                        {exp.role}
                      </h3>
                      {exp.isRemote && (
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-emerald-950/40 text-emerald-300 border border-emerald-500/30">
                          REMOTE
                        </span>
                      )}
                      {exp.category === 'genai' && (
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-rose-950/40 text-rose-300 border border-rose-500/30">
                          GENAI / ML
                        </span>
                      )}
                    </div>
                    <div className="text-sm font-medium text-slate-300 mt-1 flex items-center gap-2">
                      <span className="text-slate-200 font-semibold">{exp.company}</span>
                      {exp.location && (
                        <>
                          <span className="text-slate-500">&bull;</span>
                          <span className="text-xs text-slate-400 font-normal flex items-center gap-1">
                            <MapPin className="w-3 h-3 text-rose-400" />
                            {exp.location}
                          </span>
                        </>
                      )}
                    </div>
                  </div>

                  <span className="text-xs font-mono text-slate-400 md:hidden">{exp.period}</span>
                </div>

                {/* Key Responsibilities */}
                <div className="mt-4 space-y-2.5 text-xs sm:text-sm text-slate-200">
                  {exp.responsibilities.map((resp, rIdx) => (
                    <div key={rIdx} className="flex items-start gap-2.5">
                      <ChevronRight className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{resp}</span>
                    </div>
                  ))}
                </div>

                {/* Tech and Capability Tags */}
                <div className="mt-5 pt-4 border-t border-white/10 flex flex-wrap items-center gap-1.5">
                  <span className="text-[10px] font-mono uppercase text-slate-400 mr-1 font-semibold">Skills:</span>
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-slate-800/80 text-slate-200 border border-white/10 hover:border-rose-500/40 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
};
