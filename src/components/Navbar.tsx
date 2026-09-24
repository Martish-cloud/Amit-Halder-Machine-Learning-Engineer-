import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Menu, X, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/profile';

interface NavbarProps {
  activeSection: string;
}

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Journey', href: '#journey' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Inquiry', href: '#inquiry' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 flex justify-center ${
        isScrolled ? 'py-3' : 'py-5'
      }`}
    >
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Profile Identity & Name — Subtle Left-to-Right Entrance Animation */}
        <motion.a
          href="#home"
          initial={prefersReduced ? { opacity: 0 } : { opacity: 0, x: -28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: prefersReduced ? 0.3 : 0.75,
            ease: [0.16, 1, 0.3, 1],
            delay: 0.1,
          }}
          className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-burgundy rounded-xl"
        >
          <div className="w-10 h-10 rounded-xl overflow-hidden border border-brand-burgundy/40 shadow-sm relative group-hover:border-brand-burgundy/80 transition-colors shrink-0">
            <img
              src="/profile.jpeg"
              alt="Amit Halder"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-sm tracking-tight text-white group-hover:text-rose-300 transition-colors">
              {personalInfo.name}
            </span>
            <span className="text-[11px] font-mono text-slate-300 hidden sm:block font-medium">
              GenAI / ML Engineer
            </span>
          </div>
        </motion.a>

        {/* Desktop Navigation Links Pill */}
        <nav
          className="hidden lg:flex items-center gap-1 px-3.5 py-1.5 rounded-full glass-panel shadow-xl shadow-black/40"
          aria-label="Main Navigation"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.href}
                href={link.href}
                className={`relative px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                  isActive
                    ? 'text-white font-semibold'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-brand-burgundy to-rose-700 shadow-md shadow-brand-burgundy/30"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </a>
            );
          })}
        </nav>

        {/* Right Actions: Contact CTA + Mobile Hamburger */}
        <div className="flex items-center gap-2.5">
          <a
            href="#inquiry"
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-brand-burgundy text-white hover:bg-brand-burgundy/90 border border-brand-burgundy/50 hover:border-brand-burgundy transition-all duration-200 shadow-sm"
          >
            <span>Let's Work Together</span>
          </a>

          {/* Mobile Hamburger Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-xl bg-slate-800/80 border border-white/20 text-white hover:bg-slate-700 transition-colors"
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="fixed inset-0 top-[68px] z-30 lg:hidden bg-dark-bg/97 dark:bg-dark-bg/97 backdrop-blur-2xl p-6 flex flex-col justify-between overflow-y-auto border-t border-white/8"
          >
            <div className="flex flex-col gap-2 pt-4">
              <span className="text-[11px] font-mono uppercase tracking-widest text-slate-500 mb-2">
                Navigation
              </span>
              {navLinks.map((link, idx) => {
                const isActive = activeSection === link.href.replace('#', '');
                return (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.04 }}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between p-3.5 rounded-xl text-base font-medium transition-colors ${
                      isActive
                        ? 'bg-brand-burgundy/15 text-brand-burgundy font-semibold border border-brand-burgundy/30'
                        : 'text-slate-200 hover:bg-white/5'
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && <Sparkles className="w-4 h-4 text-brand-burgundy" />}
                  </motion.a>
                );
              })}
            </div>

            <div className="pt-6 border-t border-white/10 flex flex-col gap-3">
              <a
                href={personalInfo.resumeUrl}
                download="Amit_Halder_Resume.pdf"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-medium text-sm border border-white/10 transition-colors"
              >
                Download Resume (PDF)
              </a>
              <a
                href="#inquiry"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3 rounded-xl bg-brand-burgundy text-white font-semibold text-sm shadow-lg shadow-brand-burgundy/25 hover:bg-brand-burgundy/90 transition-colors"
              >
                Start a Project
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
