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
      return 'bg-amber-500/15 text-amber-300 border-amber-500/40';
    case 'Qualcomm':
      return 'bg-blue-500/15 text-blue-300 border-blue-500/40';
    case 'UniAthena':
      return 'bg-purple-500/15 text-purple-300 border-purple-500/40';
    case 'IBM':
    case 'IBM SkillsBuild':
      return 'bg-sky-500/15 text-sky-300 border-sky-500/40';
    case 'Deloitte':
      return 'bg-emerald-500/15 text-emerald-300 border-emerald-500/40';
    case 'Great Learning':
      return 'bg-cyan-500/15 text-cyan-300 border-cyan-500/40';
    case 'Udemy':
      return 'bg-indigo-500/15 text-indigo-300 border-indigo-500/40';
    case 'Simplilearn':
      return 'bg-rose-500/15 text-rose-300 border-rose-500/40';
    case 'LearnTube.AI':
      return 'bg-teal-500/15 text-teal-300 border-teal-500/40';
    default:
      return 'bg-white/10 text-slate-200 border-white/20';
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
        <span className="font-mono text-xs text-rose-400 uppercase tracking-widest font-semibold">
          06 // Professional Credentials
        </span>
        <div className="h-[1px] flex-1 max-w-[80px] bg-rose-500/30" />
      </div>

      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
        <div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
            Verified Certifications
          </h2>
          <p className="mt-2 text-sm text-slate-300 max-w-xl font-sans">
            Formal technical certifications issued by Qualcomm, Anthropic, IBM, Deloitte, Simplilearn, UniAthena, and partner institutions.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-2xl glass-panel border border-white/15 bg-slate-900/60 text-xs">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-3 py-1.5 rounded-xl transition-all font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 ${
                selectedCategory === category
                  ? 'bg-brand-burgundy text-white shadow-sm font-semibold border border-rose-500/40'
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
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
          <div className="relative flex rounded-2xl shadow-2xl shadow-black/60 overflow-hidden min-h-[500px] border border-white/10">

            {/* LEFT COVER / SPINE */}
            <div className="w-[36%] bg-gradient-to-b from-[#0B0F17] via-[#101726] to-[#0A0E17] flex flex-col items-center justify-between p-8 relative shrink-0 border-r border-white/10">
              {/* Spine detail */}
              <div className="absolute top-0 right-0 bottom-0 w-3 bg-gradient-to-r from-black/60 to-transparent pointer-events-none" />
              <div className="absolute inset-0 bg-tech-grid opacity-10 pointer-events-none" />

              <div className="relative z-10 flex flex-col items-center text-center gap-5 my-auto">
                {/* Cover emblem */}
                <div className="w-16 h-16 rounded-2xl bg-rose-950/40 border border-rose-500/40 flex items-center justify-center shadow-lg shadow-black/40">
                  <BookOpen className="w-8 h-8 text-rose-300" />
                </div>

                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-rose-400 font-semibold mb-1">
                    Professional Dossier
                  </div>
                  <h3 className="font-display font-extrabold text-2xl text-white tracking-tight leading-tight">
                    AMIT<br />HALDER
                  </h3>
                  <div className="mt-2 h-[2px] w-12 bg-rose-500 mx-auto rounded-full shadow-[0_0_8px_rgba(244,63,94,0.5)]" />
                  <p className="mt-2.5 text-xs font-mono text-slate-300 leading-relaxed font-medium">
                    Certification Archive
                  </p>
                </div>

                {/* Category indicator */}
                <div className="px-3 py-1.5 rounded-full bg-rose-950/40 border border-rose-500/40 text-[10px] font-mono text-rose-200 font-semibold shadow-sm">
                  {selectedCategory === 'All' ? 'All Credentials' : selectedCategory}
                </div>

                {/* Counter */}
                <div className="text-[11px] font-mono text-slate-300 font-semibold tracking-wider">
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
                      <h3 className="font-display font-bold text-xl sm:text-2xl text-white leading-tight mb-3">
                        {currentCert.title}
                      </h3>

                      {/* Credential verified status */}
                      <div className="flex items-center gap-2 text-xs text-rose-400 font-semibold mb-3">
                        <CheckCircle2 className="w-4 h-4 text-rose-400 shrink-0" />
                        <span>Verified Credential · Issued by {currentCert.provider}</span>
                      </div>
                    </div>

                    {/* Certificate Preview / Visual Card */}
                    <div className="my-auto flex flex-col items-center justify-center">
                      {currentCert.image ? (
                        <div
                          onClick={() => setModalCert(currentCert)}
                          className="group relative cursor-pointer rounded-2xl overflow-hidden border border-[#E7D7BE]/80 shadow-lg hover:shadow-2xl transition-all duration-300 max-h-48 sm:max-h-52 w-full max-w-sm flex items-center justify-center p-3.5 bg-[#FFF8E7]"
                        >
                          <img
                            src={currentCert.image}
                            alt={`${currentCert.title} certificate`}
                            loading="lazy"
                            decoding="async"
                            className="max-h-40 sm:max-h-44 w-full object-contain rounded-lg shadow-sm group-hover:scale-[1.02] transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-brand-burgundy text-white text-xs font-semibold shadow-lg border border-rose-500/30">
                              <Eye className="w-3.5 h-3.5 text-white" />
                              <span>View Certificate</span>
                            </span>
                          </div>
                        </div>
                      ) : (
                        <div className="w-full max-w-sm p-6 rounded-xl border border-dashed border-white/15 bg-white/5 flex flex-col items-center justify-center text-center">
                          <Shield className="w-8 h-8 text-slate-400 mb-2" />
                          <span className="text-xs font-mono text-slate-300">
                            Verified Completion Record
                          </span>
                        </div>
                      )}

                      {/* Prominent View Certificate Button */}
                      {currentCert.image && (
                        <button
                          type="button"
                          onClick={() => setModalCert(currentCert)}
                          className="mt-3.5 inline-flex items-center gap-2 px-5 py-2 rounded-xl bg-brand-burgundy hover:bg-rose-700 text-white font-semibold text-xs shadow-md shadow-brand-burgundy/30 hover:scale-[1.02] active:scale-[0.98] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 border border-rose-500/30"
                          aria-label={`View full certificate for ${currentCert.title}`}
                        >
                          <Eye className="w-3.5 h-3.5 text-white" />
                          <span>View Full Certificate</span>
                        </button>
                      )}
                    </div>

                    {/* Bottom rule */}
                    <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-300">
                      <span className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold">
                        Amit Halder Portfolio
                      </span>
                      <span className="font-semibold text-slate-200">
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
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800/80 border border-white/15 text-slate-200 disabled:opacity-30 disabled:cursor-not-allowed hover:border-rose-500/50 hover:bg-slate-800 transition-all text-sm font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500"
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
                      ? 'w-6 h-2 bg-rose-500'
                      : 'w-2 h-2 bg-slate-700 hover:bg-slate-500'
                  }`}
                  aria-label={`Go to certificate ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={goNext}
              disabled={currentIndex === totalCerts - 1}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800/80 border border-white/15 text-slate-200 disabled:opacity-30 disabled:cursor-not-allowed hover:border-rose-500/50 hover:bg-slate-800 transition-all text-sm font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500"
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
                className="glass-card p-5 rounded-2xl flex flex-col gap-4 border border-white/15 bg-slate-900/70 shadow-sm"
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
                  <span className="text-[10px] font-mono text-slate-300 font-medium">
                    {currentCert.category}
                  </span>
                </div>

                <h3 className="font-display font-bold text-lg text-white leading-snug">
                  {currentCert.title}
                </h3>

                {/* Certificate image preview if available */}
                {currentCert.image && (
                  <div
                    onClick={() => setModalCert(currentCert)}
                    className="relative rounded-2xl overflow-hidden border border-[#E7D7BE]/80 bg-[#FFF8E7] p-3.5 cursor-pointer flex items-center justify-center max-h-52 shadow-md"
                  >
                    <img
                      src={currentCert.image}
                      alt={`${currentCert.title} certificate`}
                      loading="lazy"
                      decoding="async"
                      className="max-h-44 w-full object-contain rounded-lg shadow-sm"
                    />
                  </div>
                )}

                <div className="flex items-center gap-1.5 text-xs text-rose-400 font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-rose-400" />
                  <span>Credential Verified · {currentCert.provider}</span>
                </div>

                {/* View Certificate Button */}
                {currentCert.image && (
                  <button
                    type="button"
                    onClick={() => setModalCert(currentCert)}
                    className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-brand-burgundy hover:bg-rose-700 text-white font-semibold text-xs shadow-md border border-rose-500/30 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500"
                    aria-label={`View certificate for ${currentCert.title}`}
                  >
                    <Eye className="w-3.5 h-3.5 text-white" />
                    <span>View Certificate</span>
                  </button>
                )}

                <div className="flex items-center justify-between text-xs font-mono text-slate-300 pt-3 border-t border-white/10">
                  <span>Issuer: {currentCert.provider}</span>
                  <span className="font-semibold">{String(currentIndex + 1).padStart(2, '0')} / {String(totalCerts).padStart(2, '0')}</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Mobile nav */}
          <div className="flex items-center justify-between mt-4 gap-3">
            <button
              onClick={goPrev}
              disabled={currentIndex === 0}
              className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl glass-panel border border-white/15 bg-slate-900/60 text-slate-200 disabled:opacity-30 hover:border-rose-500/40 transition-all text-xs font-semibold"
              aria-label="Previous certificate"
            >
              <ChevronLeft className="w-4 h-4" />
              Previous
            </button>
            <span className="text-xs font-mono text-slate-300 font-semibold tabular-nums whitespace-nowrap">
              {currentIndex + 1} / {totalCerts}
            </span>
            <button
              onClick={goNext}
              disabled={currentIndex === totalCerts - 1}
              className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl glass-panel border border-white/15 bg-slate-900/60 text-slate-200 disabled:opacity-30 hover:border-rose-500/40 transition-all text-xs font-semibold"
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
