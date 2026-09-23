import React, { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
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

// ─── Typewriter Hook ────────────────────────────────────────────────────────
function useTypewriter(text: string, speed = 70) {
  const prefersReduced = useReducedMotion();
  const [displayed, setDisplayed] = useState(() => (prefersReduced ? text : ''));
  const [done, setDone] = useState(() => !!prefersReduced);

  useEffect(() => {
    if (prefersReduced) return;
    setDisplayed('');
    setDone(false);
    let i = 0;
    const timer = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) {
        clearInterval(timer);
        setDone(true);
      }
    }, speed);
    return () => clearInterval(timer);
  }, [text, speed, prefersReduced]);

  return { displayed, done };
}

export const Hero: React.FC = () => {
  const prefersReduced = useReducedMotion();
  const heroName = personalInfo.name.toUpperCase();
  const { displayed, done } = useTypewriter(heroName, 68);

  // Bounce animation for professional title
  const bounceVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.35,
        ease: 'easeOut' as const,
      },
    },
    idle: prefersReduced
      ? {}
      : {
          y: [0, -5, 0],
          transition: {
            duration: 2.8,
            ease: 'easeInOut' as const,
            repeat: 2,
            repeatType: 'loop' as const,
            delay: 1.2,
          },
        },
  };

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
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-burgundy/10 border border-brand-burgundy/25 text-brand-burgundy dark:text-brand-warm-gray text-xs font-mono mb-6 backdrop-blur-md"
        >
          <span className="w-2 h-2 rounded-full bg-brand-burgundy animate-ping" />
          <span>PRODUCTION-READY AI &amp; ML SYSTEMS</span>
          <Sparkles className="w-3.5 h-3.5 ml-1" />
        </motion.div>

        {/* Hero Headline — Typewriter Effect */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-slate-900 dark:text-brand-warm-gray min-h-[1.2em] flex items-center justify-center"
          aria-label={heroName}
        >
          <span aria-hidden="true">{displayed}</span>
          {/* Blinking cursor — hidden when done typing or reduced motion */}
          {!done && !prefersReduced && (
            <span
              className="inline-block w-[3px] h-[0.85em] ml-1 bg-brand-burgundy animate-cursor-blink align-middle"
              aria-hidden="true"
            />
          )}
        </motion.h1>

        {/* Sub-headline / Professional Title — Bounce */}
        <motion.div
          variants={bounceVariants}
          initial="hidden"
          animate={['visible', 'idle']}
          className="mt-3 sm:mt-4 text-xl sm:text-2xl md:text-3xl font-medium tracking-tight"
        >
          <span className="text-gradient-burgundy font-display font-semibold">
            {personalInfo.headline}
          </span>
        </motion.div>

        {/* Value Proposition Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-4 max-w-2xl text-base sm:text-lg font-mono text-brand-slate dark:text-brand-slate font-medium"
        >
          &ldquo;{personalInfo.tagline}&rdquo;
        </motion.div>

        {/* Supporting Bio */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-4 max-w-3xl text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-sans"
        >
          A results-driven Generative AI Developer, Machine Learning Engineer, and AI Automation
          professional with{' '}
          <strong className="font-semibold text-slate-900 dark:text-brand-warm-gray">2+ years</strong> of
          experience, combined with{' '}
          <strong className="font-semibold text-slate-900 dark:text-brand-warm-gray">6+ years</strong> in
          printing production operations and data analysis. Specialized in LLM integration, prompt
          engineering, and AI workflow automation.
        </motion.p>

        {/* Contact Info Pills */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="mt-6 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 text-xs text-slate-600 dark:text-slate-400 font-mono"
        >
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-200/50 dark:bg-white/5 border border-slate-300/60 dark:border-white/10">
            <MapPin className="w-3.5 h-3.5 text-brand-burgundy" />
            <span>{personalInfo.location}</span>
          </div>
          <a
            href={`mailto:${personalInfo.email}`}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-200/50 dark:bg-white/5 border border-slate-300/60 dark:border-white/10 hover:border-brand-burgundy/50 hover:text-brand-burgundy transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-brand-burgundy" />
            <span>{personalInfo.email}</span>
          </a>
          <a
            href={`tel:${personalInfo.phoneRaw}`}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-200/50 dark:bg-white/5 border border-slate-300/60 dark:border-white/10 hover:border-brand-slate/50 transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-brand-slate" />
            <span>{personalInfo.phone}</span>
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-200/50 dark:bg-white/5 border border-slate-300/60 dark:border-white/10 hover:border-brand-slate/50 transition-colors"
          >
            <LinkedinIcon className="w-3.5 h-3.5 text-brand-slate" />
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
          {/* Primary CTA — Burgundy */}
          <a
            href="#inquiry"
            className="px-6 py-3 rounded-xl bg-brand-burgundy text-white font-semibold text-sm shadow-lg shadow-brand-burgundy/25 hover:bg-brand-burgundy/90 hover:shadow-brand-burgundy/35 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2"
          >
            <span>Start a Project</span>
            <Bot className="w-4 h-4" />
          </a>

          <a
            href="#experience"
            className="px-6 py-3 rounded-xl bg-white/80 dark:bg-white/5 border border-slate-300 dark:border-white/15 hover:border-brand-slate/50 text-slate-800 dark:text-white font-medium text-sm hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2 backdrop-blur-sm"
          >
            <span>View Experience</span>
            <ArrowDown className="w-4 h-4" />
          </a>

          <a
            href={personalInfo.resumeUrl}
            download="Amit_Halder_Resume.pdf"
            className="px-6 py-3 rounded-xl bg-white/80 dark:bg-white/5 border border-slate-300 dark:border-white/15 hover:border-brand-slate/50 text-slate-800 dark:text-white font-medium text-sm hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2 backdrop-blur-sm group"
          >
            <Download className="w-4 h-4 text-brand-slate group-hover:translate-y-0.5 transition-transform" />
            <span>Download CV</span>
          </a>

          <a
            href="#skills"
            className="px-6 py-3 rounded-xl bg-brand-slate/10 hover:bg-brand-slate/20 text-brand-slate dark:text-brand-warm-gray border border-brand-slate/30 hover:border-brand-slate/60 font-semibold text-sm transition-all flex items-center gap-2"
          >
            <span>Explore Skills</span>
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
            <BrainCircuit className="w-5 h-5 text-brand-burgundy mb-2" />
            <span className="font-display font-bold text-2xl text-slate-900 dark:text-brand-warm-gray">2+ Years</span>
            <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">GenAI &amp; ML Workflows</span>
          </div>

          <div className="glass-card p-4 rounded-2xl flex flex-col items-center justify-center text-center">
            <Layers className="w-5 h-5 text-brand-slate mb-2" />
            <span className="font-display font-bold text-2xl text-slate-900 dark:text-brand-warm-gray">6+ Years</span>
            <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">Operations &amp; Analytics</span>
          </div>

          <div className="glass-card p-4 rounded-2xl flex flex-col items-center justify-center text-center">
            <Sparkles className="w-5 h-5 text-brand-charcoal dark:text-brand-warm-gray mb-2" />
            <span className="font-display font-bold text-2xl text-slate-900 dark:text-brand-warm-gray">13</span>
            <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">Verified Credentials</span>
          </div>

          <div className="glass-card p-4 rounded-2xl flex flex-col items-center justify-center text-center">
            <Database className="w-5 h-5 text-brand-navy dark:text-brand-slate mb-2" />
            <span className="font-display font-bold text-2xl text-slate-900 dark:text-brand-warm-gray">6</span>
            <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">Languages Mastered</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
