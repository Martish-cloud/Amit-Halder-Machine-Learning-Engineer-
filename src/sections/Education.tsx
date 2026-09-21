import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Languages, BookOpen } from 'lucide-react';
import { education, languages } from '../data/profile';

export const Education: React.FC = () => {
  return (
    <section id="education" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex items-center gap-2 mb-3">
        <span className="font-mono text-xs text-brand-cyan uppercase tracking-widest">
          05 // Academic & Linguistic Profile
        </span>
        <div className="h-[1px] flex-1 max-w-[80px] bg-brand-cyan/30" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Education */}
        <div className="lg:col-span-6 flex flex-col gap-6">
          <div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 dark:text-white tracking-tight flex items-center gap-3">
              <GraduationCap className="w-8 h-8 text-brand-cyan" />
              <span>Education</span>
            </h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 font-sans">
              Formal academic qualifications and professional language curriculum.
            </p>
          </div>

          <div className="space-y-4">
            {education.map((edu, idx) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="glass-card p-6 rounded-2xl relative overflow-hidden"
              >
                <div className="flex items-start justify-between gap-4 mb-2">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center text-brand-cyan">
                      <BookOpen className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-base text-slate-900 dark:text-white">
                        {edu.degree}
                      </h3>
                      <div className="text-xs font-mono text-brand-blue dark:text-brand-cyan">
                        {edu.institution}
                      </div>
                    </div>
                  </div>

                  {edu.status && (
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/30 shrink-0">
                      {edu.status}
                    </span>
                  )}
                </div>

                {edu.period && (
                  <div className="mt-3 text-xs font-mono text-slate-500">
                    Period: {edu.period}
                  </div>
                )}
                {edu.field && (
                  <div className="mt-1 text-xs text-slate-600 dark:text-slate-400">
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
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 dark:text-white tracking-tight flex items-center gap-3">
              <Languages className="w-8 h-8 text-brand-violet" />
              <span>Language Proficiency</span>
            </h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 font-sans">
              Multilingual fluency supporting cross-functional and global collaboration.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {languages.map((lang, idx) => (
              <motion.div
                key={lang.language}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="glass-card p-5 rounded-2xl flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-display font-bold text-base text-slate-900 dark:text-white">
                    {lang.language}
                  </span>
                  {lang.nativeName && (
                    <span className="text-xs font-mono text-slate-400">
                      {lang.nativeName}
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-slate-200/60 dark:border-white/5 text-xs">
                  <span className="text-slate-600 dark:text-slate-300 font-medium">
                    {lang.proficiency}
                  </span>
                  <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-slate-100 dark:bg-white/5 text-brand-cyan border border-slate-200 dark:border-white/5">
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
