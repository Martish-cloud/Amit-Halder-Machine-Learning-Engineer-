import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowDown,
  Download,
  Mail,
  Phone,
  MapPin,
  Sparkles,
  Bot,
  BrainCircuit,
  Database,
  Layers,
} from 'lucide-react';
import { LinkedinIcon } from '../components/icons';
import { personalInfo } from '../data/profile';

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto w-full flex flex-col items-center text-center relative z-10">
        {/* Status Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-cyan/10 border border-brand-cyan/25 text-brand-cyan text-xs font-mono mb-6 backdrop-blur-md"
        >
          <span className="w-2 h-2 rounded-full bg-brand-cyan animate-ping" />
          <span>PRODUCTION-READY AI & ML SYSTEMS</span>
          <Sparkles className="w-3.5 h-3.5 ml-1" />
        </motion.div>

        {/* Hero Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-slate-900 dark:text-white"
        >
          {personalInfo.name}
        </motion.h1>

        {/* Sub-headline / Professional Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-3 sm:mt-4 text-xl sm:text-2xl md:text-3xl font-medium tracking-tight"
        >
          <span className="text-gradient-cyan font-display font-semibold">
            {personalInfo.headline}
          </span>
        </motion.div>

        {/* Value Proposition Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-4 max-w-2xl text-base sm:text-lg font-mono text-brand-blue dark:text-brand-cyan/90 font-medium"
        >
          "{personalInfo.tagline}"
        </motion.div>

        {/* Supporting Bio based strictly on CV */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-4 max-w-3xl text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-sans"
        >
          A results-driven Generative AI Developer, Machine Learning Engineer, and AI Automation
          professional with <strong className="font-semibold text-slate-900 dark:text-white">2+ years</strong> of experience, combined with{' '}
          <strong className="font-semibold text-slate-900 dark:text-white">6+ years</strong> in printing production operations and data analysis.
          Specialized in LLM integration, prompt engineering, and AI workflow automation.
        </motion.p>

        {/* Contact Info Pills */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="mt-6 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 text-xs text-slate-600 dark:text-slate-400 font-mono"
        >
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-200/50 dark:bg-white/5 border border-slate-300/60 dark:border-white/10">
            <MapPin className="w-3.5 h-3.5 text-brand-cyan" />
            <span>{personalInfo.location}</span>
          </div>
          <a
            href={`mailto:${personalInfo.email}`}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-200/50 dark:bg-white/5 border border-slate-300/60 dark:border-white/10 hover:border-brand-cyan hover:text-brand-cyan transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-brand-cyan" />
            <span>{personalInfo.email}</span>
          </a>
          <a
            href={`tel:${personalInfo.phoneRaw}`}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-200/50 dark:bg-white/5 border border-slate-300/60 dark:border-white/10 hover:border-brand-cyan hover:text-brand-cyan transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-brand-cyan" />
            <span>{personalInfo.phone}</span>
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-200/50 dark:bg-white/5 border border-slate-300/60 dark:border-white/10 hover:border-brand-cyan hover:text-brand-cyan transition-colors"
          >
            <LinkedinIcon className="w-3.5 h-3.5 text-brand-cyan" />
            <span>{personalInfo.linkedinDisplay}</span>
          </a>
        </motion.div>

        {/* Hero Action CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4"
        >
          <a
            href="#skills"
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-brand-cyan via-brand-blue to-brand-indigo text-white font-semibold text-sm shadow-lg shadow-brand-cyan/20 hover:shadow-brand-cyan/35 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2"
          >
            <span>Explore My Work</span>
            <Bot className="w-4 h-4" />
          </a>

          <a
            href="#experience"
            className="px-6 py-3 rounded-xl bg-white/80 dark:bg-white/5 border border-slate-300 dark:border-white/15 hover:border-brand-cyan text-slate-800 dark:text-white font-medium text-sm hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2 backdrop-blur-sm"
          >
            <span>View Experience</span>
            <ArrowDown className="w-4 h-4" />
          </a>

          <a
            href={personalInfo.resumeUrl}
            download="Amit_Halder_Resume.pdf"
            className="px-6 py-3 rounded-xl bg-white/80 dark:bg-white/5 border border-slate-300 dark:border-white/15 hover:border-emerald-500 text-slate-800 dark:text-white font-medium text-sm hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2 backdrop-blur-sm group"
          >
            <Download className="w-4 h-4 text-emerald-400 group-hover:translate-y-0.5 transition-transform" />
            <span>Download CV</span>
          </a>

          <a
            href="#contact"
            className="px-6 py-3 rounded-xl bg-brand-cyan/10 hover:bg-brand-cyan/20 text-brand-cyan border border-brand-cyan/30 hover:border-brand-cyan/60 font-semibold text-sm transition-all flex items-center gap-2"
          >
            <span>Let's Connect</span>
          </a>
        </motion.div>

        {/* Factual Value Summary Cards */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mt-14 w-full grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4"
        >
          <div className="glass-card p-4 rounded-2xl flex flex-col items-center justify-center text-center">
            <BrainCircuit className="w-5 h-5 text-brand-cyan mb-2" />
            <span className="font-display font-bold text-2xl text-slate-900 dark:text-white">2+ Years</span>
            <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">GenAI & ML Workflows</span>
          </div>

          <div className="glass-card p-4 rounded-2xl flex flex-col items-center justify-center text-center">
            <Layers className="w-5 h-5 text-brand-blue mb-2" />
            <span className="font-display font-bold text-2xl text-slate-900 dark:text-white">6+ Years</span>
            <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">Operations & Analytics</span>
          </div>

          <div className="glass-card p-4 rounded-2xl flex flex-col items-center justify-center text-center">
            <Sparkles className="w-5 h-5 text-brand-violet mb-2" />
            <span className="font-display font-bold text-2xl text-slate-900 dark:text-white">13</span>
            <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">Verified Credentials</span>
          </div>

          <div className="glass-card p-4 rounded-2xl flex flex-col items-center justify-center text-center">
            <Database className="w-5 h-5 text-emerald-400 mb-2" />
            <span className="font-display font-bold text-2xl text-slate-900 dark:text-white">6</span>
            <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">Languages Mastered</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
