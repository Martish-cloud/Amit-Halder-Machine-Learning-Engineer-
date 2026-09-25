import React, { useState, useEffect, useRef } from 'react';
import { motion, useReducedMotion, useInView } from 'framer-motion';
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
import { personalInfo, certifications } from '../data/profile';

// ─── Proper Typewriter Effect with Blinking Cursor ───────────────────────────
function TypewriterName({
  text,
  isReady = true,
  inView = true,
}: {
  text: string;
  isReady?: boolean;
  inView?: boolean;
}) {
  const prefersReduced = useReducedMotion();
  const [displayedCount, setDisplayedCount] = useState(() => (prefersReduced ? text.length : 0));

  useEffect(() => {
    if (prefersReduced) return;
    if (!isReady || !inView) return;

    let current = 0;
    let interval: ReturnType<typeof setInterval>;

    // Wait a brief 200ms after entering view, then start typing smoothly
    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        current++;
        setDisplayedCount(current);
        if (current >= text.length) {
          clearInterval(interval);
        }
      }, 85); // 85ms per character: deliberate, readable, premium
    }, 200);

    return () => {
      clearTimeout(timeout);
      if (interval) clearInterval(interval);
      setDisplayedCount(0);
    };
  }, [text, isReady, inView, prefersReduced]);

  if (prefersReduced) {
    return (
      <span className="inline-flex items-baseline relative">
        <span className="tracking-tight bg-gradient-to-r from-[#FFFFFF] via-[#E8F5E9] to-[#14532D] bg-clip-text text-transparent drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)]">
          {text}
        </span>
      </span>
    );
  }

  const activeCount = !isReady || !inView ? 0 : displayedCount;
  const typedText = text.slice(0, activeCount);

  return (
    <span className="inline-flex items-baseline relative">
      <span className="sr-only">{text}</span>
      <span
        aria-hidden="true"
        className="tracking-tight bg-gradient-to-r from-[#FFFFFF] via-[#E8F5E9] to-[#14532D] bg-clip-text text-transparent drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)]"
      >
        {typedText}
      </span>
      {/* Blinking Cursor: stays active and continues blinking after typing finishes */}
      <motion.span
        aria-hidden="true"
        animate={{ opacity: [1, 0, 1] }}
        transition={{
          duration: 0.7,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="inline-block text-brand-burgundy font-light ml-1 select-none drop-shadow-[0_0_8px_rgba(101,23,36,0.6)]"
      >
        |
      </motion.span>
    </span>
  );
}

interface HeroProps {
  isLoaded?: boolean;
}

export const Hero: React.FC<HeroProps> = ({ isLoaded = true }) => {
  const heroName = personalInfo.name.toUpperCase();
  const prefersReduced = useReducedMotion();
  const headingRef = useRef<HTMLHeadingElement>(null);
  const isHeadingInView = useInView(headingRef, { once: false, amount: 0.3 });

  // Subtle entrance animation: fade in, upward movement (10 -> 0), spring-like settle
  const titleVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: prefersReduced
        ? { duration: 0.1 }
        : {
            type: 'spring' as const,
            stiffness: 160,
            damping: 18,
            mass: 0.8,
            delay: 0.1,
          },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Subtle cinematic radial vignette behind text for supreme readability without hiding the background video */}
      <div
        className="absolute inset-0 pointer-events-none -z-10 flex items-center justify-center overflow-hidden"
        aria-hidden="true"
      >
        <div
          className="w-full max-w-5xl h-[85%] rounded-full blur-3xl pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at center, rgba(14, 18, 24, 0.82) 0%, rgba(14, 18, 24, 0.45) 55%, transparent 75%)',
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto w-full flex flex-col items-center text-center relative z-10">

        {/* Status Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-dark-card/90 border border-brand-burgundy/40 text-brand-warm-gray text-xs font-mono mb-6 backdrop-blur-md shadow-lg shadow-black/30"
        >
          <span className="w-2 h-2 rounded-full bg-brand-burgundy animate-ping" />
          <span className="font-semibold tracking-wide">PRODUCTION-READY AI &amp; ML SYSTEMS</span>
          <Sparkles className="w-3.5 h-3.5 ml-1 text-brand-burgundy" />
        </motion.div>

        {/* Hero Headline — Typewriter Effect */}
        <h1
          ref={headingRef}
          className="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-white flex items-baseline justify-center flex-wrap gap-y-1 min-h-[1.15em] drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)]"
          aria-label={heroName}
        >
          <TypewriterName text={heroName} isReady={isLoaded} inView={isHeadingInView} />
        </h1>

        {/* Sub-headline / Professional Title — Subtle Entrance & Settle */}
        <motion.div
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          className="mt-3 sm:mt-4 text-xl sm:text-2xl md:text-3xl font-medium tracking-tight"
        >
          <span className="text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)] font-display font-bold">
            {personalInfo.headline}
          </span>
        </motion.div>

        {/* Value Proposition Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-4 max-w-2xl text-base sm:text-lg font-mono text-[#9DDCFF] font-medium drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]"
        >
          &ldquo;{personalInfo.tagline}&rdquo;
        </motion.div>

        {/* Supporting Bio */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 max-w-3xl text-sm sm:text-base text-slate-200 leading-relaxed font-sans drop-shadow-[0_1px_6px_rgba(0,0,0,0.9)]"
        >
          A results-driven Generative AI Developer, Machine Learning Engineer, and AI Automation
          professional with{' '}
          <strong className="font-semibold text-white underline decoration-brand-burgundy/60 underline-offset-2">2+ years</strong> of
          experience, combined with{' '}
          <strong className="font-semibold text-white underline decoration-brand-burgundy/60 underline-offset-2">6+ years</strong> in
          printing production operations and data analysis. Specialized in LLM integration, prompt
          engineering, and AI workflow automation.
        </motion.p>

        {/* Contact Info Pills */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-6 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 text-xs text-slate-200 font-mono"
        >
          <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-900/85 border border-white/15 backdrop-blur-md shadow-md">
            <MapPin className="w-3.5 h-3.5 text-amber-400" />
            <span>{personalInfo.location}</span>
          </div>
          <a
            href={`mailto:${personalInfo.email}`}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-900/85 border border-white/15 backdrop-blur-md shadow-md hover:border-rose-500/60 hover:text-white transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-rose-400" />
            <span>{personalInfo.email}</span>
          </a>
          <a
            href={`tel:${personalInfo.phoneRaw}`}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-900/85 border border-white/15 backdrop-blur-md shadow-md hover:border-sky-500/60 hover:text-white transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-sky-400" />
            <span>{personalInfo.phone}</span>
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-900/85 border border-white/15 backdrop-blur-md shadow-md hover:border-sky-500/60 hover:text-white transition-colors"
          >
            <LinkedinIcon className="w-3.5 h-3.5 text-sky-400" />
            <span>{personalInfo.linkedinDisplay}</span>
          </a>
        </motion.div>

        {/* Hero Action CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4"
        >
          {/* Primary CTA — Burgundy */}
          <a
            href="#inquiry"
            className="px-6 py-3 rounded-xl bg-brand-burgundy text-white font-semibold text-sm shadow-xl shadow-brand-burgundy/30 hover:bg-rose-700 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2 border border-rose-500/50"
          >
            <span>Start a Project</span>
            <Bot className="w-4 h-4 text-white" />
          </a>

          <a
            href="#experience"
            className="px-6 py-3 rounded-xl bg-slate-900/85 border border-white/20 hover:border-rose-500/50 text-white font-medium text-sm hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2 backdrop-blur-md shadow-md hover:bg-slate-900"
          >
            <span>View Experience</span>
            <ArrowDown className="w-4 h-4 text-rose-400" />
          </a>

          <a
            href={personalInfo.resumeUrl}
            download="Amit_Halder_Resume.pdf"
            className="px-6 py-3 rounded-xl bg-slate-900/85 border border-white/20 hover:border-rose-500/50 text-white font-medium text-sm hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2 backdrop-blur-md shadow-md hover:bg-slate-900 group"
          >
            <Download className="w-4 h-4 text-rose-400 group-hover:translate-y-0.5 transition-transform" />
            <span>Download CV</span>
          </a>

          <a
            href="#skills"
            className="px-6 py-3 rounded-xl bg-slate-900/85 border border-white/20 hover:border-rose-500/50 text-white font-medium text-sm hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2 backdrop-blur-md shadow-md"
          >
            <span>Explore Skills</span>
          </a>
        </motion.div>

        {/* Factual Value Summary Cards */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mt-14 w-full grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4"
        >
          <div className="glass-card p-4 rounded-2xl flex flex-col items-center justify-center text-center bg-slate-900/85 backdrop-blur-md border border-white/15 shadow-lg">
            <BrainCircuit className="w-5 h-5 text-rose-400 mb-2" />
            <span className="font-display font-bold text-2xl text-white">2+ Years</span>
            <span className="text-xs text-slate-300 font-mono font-medium">GenAI &amp; ML Workflows</span>
          </div>

          <div className="glass-card p-4 rounded-2xl flex flex-col items-center justify-center text-center bg-slate-900/85 backdrop-blur-md border border-white/15 shadow-lg">
            <Layers className="w-5 h-5 text-sky-400 mb-2" />
            <span className="font-display font-bold text-2xl text-white">6+ Years</span>
            <span className="text-xs text-slate-300 font-mono font-medium">Operations &amp; Analytics</span>
          </div>

          <div className="glass-card p-4 rounded-2xl flex flex-col items-center justify-center text-center bg-slate-900/85 backdrop-blur-md border border-white/15 shadow-lg">
            <Sparkles className="w-5 h-5 text-amber-400 mb-2" />
            <span className="font-display font-bold text-2xl text-white">{certifications.length}</span>
            <span className="text-xs text-slate-300 font-mono font-medium">Verified Credentials</span>
          </div>

          <div className="glass-card p-4 rounded-2xl flex flex-col items-center justify-center text-center bg-slate-900/85 backdrop-blur-md border border-white/15 shadow-lg">
            <Database className="w-5 h-5 text-emerald-400 mb-2" />
            <span className="font-display font-bold text-2xl text-white">6</span>
            <span className="text-xs text-slate-300 font-mono font-medium">Languages Mastered</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
