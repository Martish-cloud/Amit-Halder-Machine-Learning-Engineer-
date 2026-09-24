import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { ChevronLeft, ChevronRight, CheckCircle2, BookOpen, Shield, Eye } from 'lucide-react';
import { certifications } from '../data/profile';
import type { CertificationItem } from '../types';
import { ImageLightboxModal } from '../components/ImageLightboxModal';

const categories = [
  'All',
  'AI & GenAI',
  'Data & Analytics',
  'Automation & Dev',
  'Productivity & Languages',
  'Business / Management',
] as const;

type Direction = 'next' | 'prev';

const providerBadgeColor = (provider: string) => {
  switch (provider) {
    case 'Anthropic':
      return 'bg-amber-500/10 text-amber-700 dark:text-amber-300 border-amber-500/30';
    case 'Qualcomm':
      return 'bg-blue-600/10 text-blue-700 dark:text-blue-300 border-blue-600/30';
    case 'UniAthena':
      return 'bg-purple-600/10 text-purple-700 dark:text-purple-300 border-purple-600/30';
    case 'IBM':
    case 'IBM SkillsBuild':
      return 'bg-brand-slate/10 text-brand-slate border-brand-slate/30 dark:bg-brand-slate/20 dark:text-brand-warm-gray';
    case 'Deloitte':
      return 'bg-brand-navy/10 text-brand-navy border-brand-navy/30 dark:bg-brand-slate/20 dark:text-brand-warm-gray';
    case 'Udemy':
      return 'bg-brand-charcoal/10 text-brand-charcoal border-brand-charcoal/30 dark:bg-white/5 dark:text-slate-300';
    case 'Simplilearn':
      return 'bg-brand-burgundy/10 text-brand-burgundy border-brand-burgundy/30';
    case 'LearnTube.AI':
      return 'bg-emerald-600/10 text-emerald-700 dark:text-emerald-300 border-emerald-600/30';
    default:
      return 'bg-slate-100 text-slate-600 border-slate-300 dark:bg-white/5 dark:text-slate-400 dark:border-white/10';
  }
};

export const Certifications: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<Direction>('next');
  const [modalCert, setModalCert] = useState<CertificationItem | null>(null);
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

  // Page flip variants
  const reducedVariants = {
    enter: { opacity: 0, x: direction === 'next' ? 20 : -20 },
    center: { opacity: 1, x: 0, transition: { duration: 0.25, ease: 'easeOut' as const } },
    exit: { opacity: 0, x: direction === 'next' ? -20 : 20, transition: { duration: 0.2, ease: 'easeIn' as const } },
  };

  const flipVariants = {
    enter: (dir: Direction) => ({
      rotateY: dir === 'next' ? 80 : -80,
      opacity: 0,
      transformOrigin: dir === 'next' ? 'left center' : 'right center',
    }),
    center: {
      rotateY: 0,
      opacity: 1,
      transformOrigin: 'center center',
      transition: { duration: 0.4, ease: 'easeOut' as const },
    },
    exit: (dir: Direction) => ({
      rotateY: dir === 'next' ? -80 : 80,
      opacity: 0,
      transformOrigin: dir === 'next' ? 'right center' : 'left center',
      transition: { duration: 0.3, ease: 'easeIn' as const },
    }),
  };

  const pageVariants = prefersReduced ? reducedVariants : flipVariants;
  const pageTransition = { duration: prefersReduced ? 0.25 : 0.4, ease: 'easeOut' as const };

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
            Formal technical certifications issued by Qualcomm, Anthropic, IBM, Deloitte, Simplilearn, UniAthena, and partner institutions.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-2xl glass-panel border border-slate-200 dark:border-white/10 text-xs">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-3 py-1.5 rounded-xl transition-all font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-burgundy ${
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

      {/* ── DESKTOP: Book Layout ───────────────────────────── */}
      <div className="hidden md:block">
        <div className="book-perspective max-w-4xl mx-auto">
          {/* Book wrapper — two-page spread */}
          <div className="relative flex rounded-2xl shadow-2xl shadow-brand-navy/30 overflow-hidden min-h-[500px] border border-slate-300/80 dark:border-white/10">

            {/* LEFT COVER / SPINE */}
            <div className="w-[36%] bg-gradient-to-br from-brand-navy via-brand-navy to-brand-charcoal flex flex-col items-center justify-between p-8 relative shrink-0">
              {/* Spine detail */}
              <div className="absolute top-0 right-0 bottom-0 w-3 bg-gradient-to-r from-brand-charcoal/80 to-transparent" />
              <div className="absolute inset-0 bg-tech-grid opacity-10" />

              <div className="relative z-10 flex flex-col items-center text-center gap-5 my-auto">
                {/* Cover emblem */}
                <div className="w-16 h-16 rounded-2xl bg-brand-burgundy/20 border border-brand-burgundy/40 flex items-center justify-center shadow-inner">
                  <BookOpen className="w-8 h-8 text-brand-warm-gray" />
                </div>

                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-brand-slate mb-1">
                    Professional Dossier
                  </div>
                  <h3 className="font-display font-extrabold text-2xl text-brand-warm-gray tracking-tight leading-tight">
                    AMIT<br />HALDER
                  </h3>
                  <div className="mt-2 h-[2px] w-12 bg-brand-burgundy mx-auto rounded-full" />
                  <p className="mt-2.5 text-xs font-mono text-brand-slate leading-relaxed">
                    Certification Archive
                  </p>
                </div>

                {/* Category indicator */}
                <div className="px-3 py-1.5 rounded-full bg-brand-burgundy/20 border border-brand-burgundy/40 text-[10px] font-mono text-brand-warm-gray/90 font-medium">
                  {selectedCategory === 'All' ? 'All Credentials' : selectedCategory}
                </div>

                {/* Counter */}
                <div className="text-[11px] font-mono text-brand-slate">
                  {String(currentIndex + 1).padStart(2, '0')} / {String(totalCerts).padStart(2, '0')}
                </div>
              </div>
            </div>

            {/* RIGHT PAGE — Certificate Content */}
            <div className="flex-1 bg-brand-warm-gray dark:bg-dark-card relative overflow-hidden flex flex-col">
              {/* Page texture */}
              <div className="absolute inset-0 bg-tech-grid opacity-20 dark:opacity-10 pointer-events-none" />
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
                    className="absolute inset-0 flex flex-col justify-between p-7 sm:p-9 book-page"
                  >
                    {/* Page header */}
                    <div>
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <div className="text-[10px] font-mono uppercase tracking-widest text-brand-charcoal dark:text-slate-400 mb-1">
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
                        <span className="text-[10px] font-mono text-brand-charcoal dark:text-slate-400 px-2.5 py-1 rounded-lg bg-brand-charcoal/8 dark:bg-white/5">
                          {currentCert.category}
                        </span>
                      </div>

                      {/* Certificate title */}
                      <h3 className="font-display font-bold text-xl sm:text-2xl text-brand-navy dark:text-brand-warm-gray leading-tight mb-3">
                        {currentCert.title}
                      </h3>

                      {/* Credential verified status */}
                      <div className="flex items-center gap-2 text-xs text-brand-burgundy font-medium mb-3">
                        <CheckCircle2 className="w-4 h-4 shrink-0" />
                        <span>Verified Credential · Issued by {currentCert.provider}</span>
                      </div>
                    </div>

                    {/* Certificate Preview / Visual Card */}
                    <div className="my-auto flex flex-col items-center justify-center">
                      {currentCert.image ? (
                        <div
                          onClick={() => setModalCert(currentCert)}
                          className="group relative cursor-pointer rounded-xl overflow-hidden border border-slate-300 dark:border-white/10 shadow-md hover:shadow-xl transition-all duration-300 max-h-44 sm:max-h-48 w-full max-w-sm flex items-center justify-center bg-white/60 dark:bg-black/30"
                        >
                          <img
                            src={currentCert.image}
                            alt={`${currentCert.title} certificate`}
                            loading="lazy"
                            className="max-h-44 sm:max-h-48 w-full object-contain p-2 group-hover:scale-[1.02] transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-brand-navy/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-brand-burgundy text-white text-xs font-semibold shadow-lg">
                              <Eye className="w-3.5 h-3.5" />
                              <span>View Certificate</span>
                            </span>
                          </div>
                        </div>
                      ) : (
                        <div className="w-full max-w-sm p-6 rounded-xl border border-dashed border-slate-300 dark:border-white/15 bg-white/40 dark:bg-white/5 flex flex-col items-center justify-center text-center">
                          <Shield className="w-8 h-8 text-brand-slate mb-2" />
                          <span className="text-xs font-mono text-slate-600 dark:text-slate-300">
                            Verified Completion Record
                          </span>
                        </div>
                      )}

                      {/* Prominent View Certificate Button */}
                      {currentCert.image && (
                        <button
                          type="button"
                          onClick={() => setModalCert(currentCert)}
                          className="mt-3.5 inline-flex items-center gap-2 px-5 py-2 rounded-xl bg-brand-burgundy text-white font-semibold text-xs shadow-md shadow-brand-burgundy/25 hover:bg-brand-burgundy/90 hover:scale-[1.02] active:scale-[0.98] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-burgundy"
                          aria-label={`View full certificate for ${currentCert.title}`}
                        >
                          <Eye className="w-3.5 h-3.5" />
                          <span>View Full Certificate</span>
                        </button>
                      )}
                    </div>

                    {/* Bottom rule */}
                    <div className="pt-4 border-t border-brand-charcoal/20 dark:border-white/10 flex items-center justify-between text-xs font-mono text-brand-charcoal/70 dark:text-slate-400">
                      <span className="text-[10px] uppercase tracking-wider">
                        Amit Halder Portfolio
                      </span>
                      <span>
                        {String(currentIndex + 1).padStart(2, '0')} / {String(totalCerts).padStart(2, '0')}
                      </span>
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
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-brand-navy dark:bg-white/5 border border-brand-slate/30 dark:border-white/10 text-brand-warm-gray disabled:opacity-30 disabled:cursor-not-allowed hover:border-brand-burgundy/50 hover:bg-brand-navy/80 transition-all text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-burgundy"
              aria-label="Previous certificate"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Previous</span>
            </button>

            {/* Dot indicators */}
            <div className="flex gap-1.5 flex-wrap justify-center max-w-xs">
              {filteredCerts.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > currentIndex ? 'next' : 'prev');
                    setCurrentIndex(i);
                  }}
                  className={`transition-all rounded-full focus:outline-none ${
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
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-brand-navy dark:bg-white/5 border border-brand-slate/30 dark:border-white/10 text-brand-warm-gray disabled:opacity-30 disabled:cursor-not-allowed hover:border-brand-burgundy/50 hover:bg-brand-navy/80 transition-all text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-burgundy"
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
                  enter: (dir: Direction) => ({ opacity: 0, x: dir === 'next' ? 40 : -40 }),
                  center: { opacity: 1, x: 0 },
                  exit: (dir: Direction) => ({ opacity: 0, x: dir === 'next' ? -40 : 40 }),
                }}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="glass-card p-5 rounded-2xl flex flex-col gap-4"
              >
                {/* Mobile card header */}
                <div className="flex items-center justify-between">
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

                <h3 className="font-display font-bold text-lg text-slate-900 dark:text-brand-warm-gray leading-snug">
                  {currentCert.title}
                </h3>

                {/* Certificate image preview if available */}
                {currentCert.image && (
                  <div
                    onClick={() => setModalCert(currentCert)}
                    className="relative rounded-xl overflow-hidden border border-slate-200 dark:border-white/10 bg-white/40 dark:bg-black/20 p-2 cursor-pointer flex items-center justify-center max-h-48"
                  >
                    <img
                      src={currentCert.image}
                      alt={`${currentCert.title} certificate`}
                      loading="lazy"
                      className="max-h-44 w-full object-contain rounded-lg"
                    />
                  </div>
                )}

                <div className="flex items-center gap-1.5 text-xs text-brand-burgundy font-medium">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Credential Verified · {currentCert.provider}</span>
                </div>

                {/* View Certificate Button */}
                {currentCert.image && (
                  <button
                    type="button"
                    onClick={() => setModalCert(currentCert)}
                    className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-brand-burgundy text-white font-semibold text-xs shadow-md hover:bg-brand-burgundy/90 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-burgundy"
                    aria-label={`View certificate for ${currentCert.title}`}
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Certificate</span>
                  </button>
                )}

                <div className="flex items-center justify-between text-xs font-mono text-slate-500 pt-3 border-t border-slate-200/60 dark:border-white/5">
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
              className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl glass-panel border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 disabled:opacity-30 hover:border-brand-burgundy/40 transition-all text-xs font-semibold"
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
              className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl glass-panel border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 disabled:opacity-30 hover:border-brand-burgundy/40 transition-all text-xs font-semibold"
              aria-label="Next certificate"
            >
              Next
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Certificate Lightbox Modal */}
      {modalCert && modalCert.image && (
        <ImageLightboxModal
          isOpen={Boolean(modalCert)}
          onClose={() => setModalCert(null)}
          title={modalCert.title}
          category={modalCert.category}
          badge={`Issued by ${modalCert.provider}`}
          imageSrc={modalCert.image}
          altText={`${modalCert.title} Certificate`}
        />
      )}
    </section>
  );
};
