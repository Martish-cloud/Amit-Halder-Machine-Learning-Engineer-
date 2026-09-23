import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { ChevronLeft, ChevronRight, CheckCircle2, BookOpen, Shield } from 'lucide-react';
import { certifications } from '../data/profile';

const categories = [
  'All',
  'AI & GenAI',
  'Data & Analytics',
  'Automation & Dev',
  'Productivity & Languages',
] as const;

type Direction = 'next' | 'prev';

const providerBadgeColor = (provider: string) => {
  switch (provider) {
    case 'IBM':
      return 'bg-brand-slate/10 text-brand-slate border-brand-slate/30 dark:bg-brand-slate/20 dark:text-brand-warm-gray';
    case 'Deloitte':
      return 'bg-brand-navy/10 text-brand-navy border-brand-navy/30 dark:bg-brand-slate/20 dark:text-brand-warm-gray';
    case 'Udemy':
      return 'bg-brand-charcoal/10 text-brand-charcoal border-brand-charcoal/30 dark:bg-white/5 dark:text-slate-300';
    case 'Simplilearn':
      return 'bg-brand-burgundy/10 text-brand-burgundy border-brand-burgundy/30';
    default:
      return 'bg-slate-100 text-slate-600 border-slate-300 dark:bg-white/5 dark:text-slate-400 dark:border-white/10';
  }
};

export const Certifications: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<Direction>('next');
  const prefersReduced = useReducedMotion();

  const filteredCerts = certifications.filter((cert) =>
    selectedCategory === 'All' ? true : cert.category === selectedCategory
  );

  const totalCerts = filteredCerts.length;
  const currentCert = filteredCerts[currentIndex];

  // Reset index when category changes
  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat);
    setCurrentIndex(0);
    setDirection('next');
  };

  const goNext = () => {
    if (currentIndex < totalCerts - 1) {
      setDirection('next');
      setCurrentIndex((i) => i + 1);
    }
  };

  const goPrev = () => {
    if (currentIndex > 0) {
      setDirection('prev');
      setCurrentIndex((i) => i - 1);
    }
  };

  // Page flip variants — typed for Framer Motion Variants compatibility
  const reducedVariants = {
    enter: { opacity: 0, x: direction === 'next' ? 30 : -30 },
    center: { opacity: 1, x: 0, transition: { duration: 0.3, ease: 'easeOut' as const } },
    exit: { opacity: 0, x: direction === 'next' ? -30 : 30, transition: { duration: 0.25, ease: 'easeIn' as const } },
  };

  const flipVariants = {
    enter: (dir: Direction) => ({
      rotateY: dir === 'next' ? 85 : -85,
      opacity: 0,
      transformOrigin: dir === 'next' ? 'left center' : 'right center',
    }),
    center: {
      rotateY: 0,
      opacity: 1,
      transformOrigin: 'center center',
      transition: { duration: 0.45, ease: 'easeOut' as const },
    },
    exit: (dir: Direction) => ({
      rotateY: dir === 'next' ? -85 : 85,
      opacity: 0,
      transformOrigin: dir === 'next' ? 'right center' : 'left center',
      transition: { duration: 0.35, ease: 'easeIn' as const },
    }),
  };

  const pageVariants = prefersReduced ? reducedVariants : flipVariants;
  const pageTransition = { duration: prefersReduced ? 0.25 : 0.45, ease: 'easeOut' as const };

  return (
    <section id="certifications" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex items-center gap-2 mb-3">
        <span className="font-mono text-xs text-brand-burgundy uppercase tracking-widest">
          06 // Professional Credentials
        </span>
        <div className="h-[1px] flex-1 max-w-[80px] bg-brand-burgundy/30" />
      </div>

      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
        <div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 dark:text-brand-warm-gray tracking-tight">
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
              onClick={() => handleCategoryChange(category)}
              className={`px-3 py-1.5 rounded-xl transition-all font-medium ${
                selectedCategory === category
                  ? 'bg-brand-burgundy text-white shadow-sm font-semibold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {category}
              {category === 'All' ? ` (${certifications.length})` : ''}
            </button>
          ))}
        </div>
      </div>

      {/* ── BOOK LAYOUT ───────────────────────────────────── */}
      {/* Desktop: Book with 3D page flip */}
      <div className="hidden md:block">
        <div className="book-perspective max-w-4xl mx-auto">
          {/* Book wrapper — two-page spread */}
          <div className="relative flex rounded-2xl shadow-2xl shadow-brand-navy/30 overflow-hidden min-h-[460px]">

            {/* LEFT COVER / SPINE */}
            <div className="w-[38%] bg-gradient-to-br from-brand-navy via-brand-navy to-brand-charcoal flex flex-col items-center justify-center p-8 relative shrink-0">
              {/* Spine detail */}
              <div className="absolute top-0 right-0 bottom-0 w-3 bg-gradient-to-r from-brand-charcoal/80 to-transparent" />
              <div className="absolute inset-0 bg-tech-grid opacity-10" />

              <div className="relative z-10 flex flex-col items-center text-center gap-6">
                {/* Cover emblem */}
                <div className="w-16 h-16 rounded-2xl bg-brand-burgundy/20 border border-brand-burgundy/40 flex items-center justify-center">
                  <BookOpen className="w-8 h-8 text-brand-warm-gray" />
                </div>

                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-brand-slate mb-2">
                    Professional Dossier
                  </div>
                  <h3 className="font-display font-extrabold text-2xl text-brand-warm-gray tracking-tight leading-tight">
                    AMIT<br />HALDER
                  </h3>
                  <div className="mt-2 h-[2px] w-12 bg-brand-burgundy mx-auto rounded-full" />
                  <p className="mt-3 text-xs font-mono text-brand-slate leading-relaxed">
                    Professional<br />Certifications
                  </p>
                </div>

                {/* Category indicator */}
                <div className="px-3 py-1.5 rounded-full bg-brand-burgundy/20 border border-brand-burgundy/40 text-[10px] font-mono text-brand-warm-gray/80">
                  {selectedCategory === 'All' ? 'All Categories' : selectedCategory}
                </div>

                {/* Total count */}
                <div className="text-[11px] font-mono text-brand-slate">
                  {totalCerts} {totalCerts === 1 ? 'Certificate' : 'Certificates'}
                </div>
              </div>
            </div>

            {/* RIGHT PAGE — Certificate Content */}
            <div className="flex-1 bg-brand-warm-gray dark:bg-dark-card relative overflow-hidden">
              {/* Page texture */}
              <div className="absolute inset-0 bg-tech-grid opacity-20 dark:opacity-10" />
              {/* Page edge shadow */}
              <div className="absolute top-0 left-0 bottom-0 w-6 bg-gradient-to-r from-black/10 to-transparent pointer-events-none" />

              <AnimatePresence mode="wait" custom={direction}>
                {currentCert && (
                  <motion.div
                    key={`${selectedCategory}-${currentIndex}`}
                    custom={direction}
                    variants={pageVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={pageTransition}
                    className="absolute inset-0 flex flex-col p-8 sm:p-10 book-page"
                  >
                    {/* Page header */}
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <div className="text-[10px] font-mono uppercase tracking-widest text-brand-charcoal dark:text-slate-500 mb-1">
                          Certificate of Completion
                        </div>
                        <div
                          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-[11px] font-mono font-semibold ${providerBadgeColor(
                            currentCert.provider
                          )}`}
                        >
                          <Shield className="w-3 h-3" />
                          {currentCert.provider}
                        </div>
                      </div>
                      <span className="text-[11px] font-mono text-brand-charcoal dark:text-slate-500 px-2.5 py-1 rounded-lg bg-brand-charcoal/8 dark:bg-white/5">
                        {currentCert.category}
                      </span>
                    </div>

                    {/* Decorative rule */}
                    <div className="h-[1px] bg-gradient-to-r from-brand-burgundy/40 via-brand-slate/20 to-transparent mb-6" />

                    {/* Certificate title */}
                    <h3 className="font-display font-bold text-2xl sm:text-3xl text-brand-navy dark:text-brand-warm-gray leading-tight mb-6">
                      {currentCert.title}
                    </h3>

                    {/* Credential verified */}
                    <div className="flex items-center gap-2 text-sm text-brand-burgundy font-medium mb-2">
                      <CheckCircle2 className="w-5 h-5 shrink-0" />
                      <span>Credential Verified</span>
                    </div>

                    <div className="text-xs font-mono text-brand-charcoal dark:text-slate-400 mb-auto">
                      Issued by <strong className="text-brand-navy dark:text-brand-warm-gray">{currentCert.provider}</strong>
                    </div>

                    {/* Bottom rule */}
                    <div className="mt-auto pt-6 border-t border-brand-charcoal/20 dark:border-white/10 flex items-center justify-between">
                      <div className="text-[10px] font-mono text-brand-charcoal/60 dark:text-slate-500 uppercase tracking-wider">
                        Amit Halder Portfolio
                      </div>
                      {/* Page number */}
                      <div className="text-xs font-mono text-brand-charcoal dark:text-slate-400">
                        {String(currentIndex + 1).padStart(2, '0')} / {String(totalCerts).padStart(2, '0')}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={goPrev}
              disabled={currentIndex === 0}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-brand-navy dark:bg-white/5 border border-brand-slate/30 dark:border-white/10 text-brand-warm-gray disabled:opacity-30 disabled:cursor-not-allowed hover:border-brand-burgundy/50 hover:bg-brand-navy/80 transition-all text-sm font-medium"
              aria-label="Previous certificate"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Previous</span>
            </button>

            {/* Dot indicators */}
            <div className="flex gap-1.5">
              {filteredCerts.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > currentIndex ? 'next' : 'prev');
                    setCurrentIndex(i);
                  }}
                  className={`transition-all rounded-full ${
                    i === currentIndex
                      ? 'w-6 h-2 bg-brand-burgundy'
                      : 'w-2 h-2 bg-brand-slate/30 hover:bg-brand-slate/60'
                  }`}
                  aria-label={`Go to certificate ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={goNext}
              disabled={currentIndex === totalCerts - 1}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-brand-navy dark:bg-white/5 border border-brand-slate/30 dark:border-white/10 text-brand-warm-gray disabled:opacity-30 disabled:cursor-not-allowed hover:border-brand-burgundy/50 hover:bg-brand-navy/80 transition-all text-sm font-medium"
              aria-label="Next certificate"
            >
              <span>Next</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* ── MOBILE: Card Viewer ───────────────────────────── */}
      <div className="md:hidden">
        <div className="relative">
          <AnimatePresence mode="wait" custom={direction}>
            {currentCert && (
              <motion.div
                key={`mobile-${selectedCategory}-${currentIndex}`}
                custom={direction}
                variants={{
                  enter: (dir: Direction) => ({ opacity: 0, x: dir === 'next' ? 60 : -60 }),
                  center: { opacity: 1, x: 0 },
                  exit: (dir: Direction) => ({ opacity: 0, x: dir === 'next' ? -60 : 60 }),
                }}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="glass-card p-6 rounded-2xl"
              >
                {/* Mobile card header */}
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-[11px] font-mono font-semibold ${providerBadgeColor(
                      currentCert.provider
                    )}`}
                  >
                    <Shield className="w-3 h-3" />
                    {currentCert.provider}
                  </div>
                  <span className="text-[10px] font-mono text-slate-400">
                    {currentCert.category}
                  </span>
                </div>

                <h3 className="font-display font-bold text-xl text-slate-900 dark:text-brand-warm-gray leading-snug mb-4">
                  {currentCert.title}
                </h3>

                <div className="flex items-center gap-1.5 text-sm text-brand-burgundy font-medium mb-4">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Credential Verified</span>
                </div>

                <div className="flex items-center justify-between text-xs font-mono text-slate-500 pt-4 border-t border-slate-200/60 dark:border-white/5">
                  <span>Issuer: {currentCert.provider}</span>
                  <span>{String(currentIndex + 1).padStart(2, '0')} / {String(totalCerts).padStart(2, '0')}</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Mobile nav */}
          <div className="flex items-center justify-between mt-4 gap-3">
            <button
              onClick={goPrev}
              disabled={currentIndex === 0}
              className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl glass-panel border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 disabled:opacity-30 hover:border-brand-burgundy/40 transition-all text-sm font-medium"
              aria-label="Previous certificate"
            >
              <ChevronLeft className="w-4 h-4" />
              Previous
            </button>
            <span className="text-xs font-mono text-slate-400 tabular-nums whitespace-nowrap">
              {currentIndex + 1} / {totalCerts}
            </span>
            <button
              onClick={goNext}
              disabled={currentIndex === totalCerts - 1}
              className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl glass-panel border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 disabled:opacity-30 hover:border-brand-burgundy/40 transition-all text-sm font-medium"
              aria-label="Next certificate"
            >
              Next
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
