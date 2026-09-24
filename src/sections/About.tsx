import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Cpu, Workflow, BarChart3, Factory, CheckCircle2 } from 'lucide-react';
import { careerPillars, personalInfo } from '../data/profile';

const iconMap: Record<string, React.ReactNode> = {
  Brain: <Brain className="w-5 h-5 text-rose-400" />,
  Cpu: <Cpu className="w-5 h-5 text-sky-400" />,
  Workflow: <Workflow className="w-5 h-5 text-emerald-400" />,
  BarChart3: <BarChart3 className="w-5 h-5 text-amber-400" />,
  Factory: <Factory className="w-5 h-5 text-indigo-400" />,
};

export const About: React.FC = () => {
  return (
    <section id="about" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header Tag */}
      <div className="flex items-center gap-2 mb-3">
        <span className="font-mono text-xs text-rose-400 uppercase tracking-widest font-semibold">
          01 // Professional Profile
        </span>
        <div className="h-[1px] flex-1 max-w-[80px] bg-rose-500/40" />
      </div>

      <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight mb-12 drop-shadow-sm">
        Where Modern AI Engineering <br className="hidden sm:inline" />
        Meets Operational Reality.
      </h2>

      {/* Split Layout: Editorial Left + Pillars Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Editorial Statement */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 flex flex-col gap-6"
        >
          <div className="glass-card p-6 sm:p-8 rounded-3xl relative overflow-hidden border border-white/12 shadow-xl">
            <div className="text-xs font-mono uppercase tracking-wider text-rose-400 font-semibold mb-3">
              Executive Summary
            </div>

            <p className="text-base sm:text-lg text-white leading-relaxed font-sans font-medium">
              {personalInfo.summary}
            </p>

            <div className="mt-8 pt-6 border-t border-white/10 flex flex-col gap-3 text-sm text-slate-200">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <span>Specialized in LLM integration, prompt engineering, and conversational chatbot systems.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <span>6+ years orchestrating high-volume industrial printing production, WIP tracking &amp; ERP data.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <span>End-to-end data analytics translating raw operational metrics into actionable BI dashboards.</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: 5 Core Competence Cards */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {careerPillars.map((pillar, idx) => (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className={`glass-card p-5 rounded-2xl flex flex-col justify-between group border border-white/12 ${
                idx === 4 ? 'sm:col-span-2' : ''
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-800/80 border border-white/15 flex items-center justify-center group-hover:scale-105 transition-transform shadow-inner">
                    {iconMap[pillar.icon]}
                  </div>
                  <span className="text-[11px] font-mono text-slate-400 font-medium">0{idx + 1}</span>
                </div>

                <h3 className="font-display font-bold text-base text-white group-hover:text-rose-300 transition-colors">
                  {pillar.title}
                </h3>
                <h4 className="text-xs font-mono text-slate-300 mb-2 font-medium">
                  {pillar.subtitle}
                </h4>

                <p className="text-xs text-slate-300 leading-relaxed font-sans">
                  {pillar.description}
                </p>
              </div>

              {/* Skill Tags */}
              <div className="mt-4 pt-3 border-t border-white/10 flex flex-wrap gap-1.5">
                {pillar.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-0.5 rounded-md text-[10px] font-mono bg-slate-800/80 text-slate-200 border border-white/10 hover:border-white/20 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
