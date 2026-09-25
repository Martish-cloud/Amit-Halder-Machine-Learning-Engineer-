import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Languages, BookOpen } from 'lucide-react';
import { education, languages } from '../data/profile';

export const Education: React.FC = () => {
  return (
    <section id="education" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex items-center gap-2 mb-3">
        <span className="font-mono text-xs text-rose-400 uppercase tracking-widest font-semibold">
          05 // Academic &amp; Linguistic Profile
        </span>
        <div className="h-[1px] flex-1 max-w-[80px] bg-rose-500/30" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Education */}
        <div className="lg:col-span-6 flex flex-col gap-6">
          <div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight flex items-center gap-3">
              <GraduationCap className="w-8 h-8 text-rose-400" />
              <span>Education</span>
            </h2>
            <p className="mt-2 text-sm text-slate-300 font-sans">
              Formal academic qualifications and professional language curriculum.
            </p>
          </div>

          <div className="space-y-4">
            {education.map((edu, idx) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: '-40px' }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="glass-card p-6 rounded-2xl relative overflow-hidden border border-white/15 bg-slate-900/70 hover:border-white/25 transition-all shadow-sm"
              >
                <div className="flex items-start justify-between gap-4 mb-2">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-slate-800/80 border border-white/15 flex items-center justify-center text-rose-400">
                      <BookOpen className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-base text-white">
                        {edu.degree}
                      </h3>
                      <div className="text-xs font-mono text-slate-300">
                        {edu.institution}
                      </div>
                    </div>
                  </div>

                  {edu.status && (
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold bg-rose-950/40 text-rose-300 border border-rose-500/40 shrink-0">
                      {edu.status}
                    </span>
                  )}
                </div>

                {edu.period && (
                  <div className="mt-3 text-xs font-mono text-slate-400">
                    Period: {edu.period}
                  </div>
                )}
                {edu.field && (
                  <div className="mt-1 text-xs text-slate-200">
                    Curriculum: {edu.field}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Column: Languages */}
        <div className="lg:col-span-6 flex flex-col gap-6">
          <div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight flex items-center gap-3">
              <Languages className="w-8 h-8 text-sky-400" />
              <span>Language Proficiency</span>
            </h2>
            <p className="mt-2 text-sm text-slate-300 font-sans">
              Multilingual fluency supporting cross-functional and global collaboration.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {languages.map((lang, idx) => (
              <motion.div
                key={lang.language}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: '-40px' }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="glass-card p-5 rounded-2xl flex flex-col justify-between border border-white/15 bg-slate-900/70 hover:border-white/25 transition-all shadow-sm"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-display font-bold text-base text-white">
                    {lang.language}
                  </span>
                  {lang.nativeName && (
                    <span className="text-xs font-mono text-slate-400">
                      {lang.nativeName}
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-white/10 text-xs">
                  <span className="text-slate-200 font-medium">
                    {lang.proficiency}
                  </span>
                  <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-slate-800/80 text-rose-300 border border-white/10 font-semibold">
                    {lang.levelCode}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
