import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { personalInfo } from '../data/profile';

interface NavbarProps {
  activeSection: string;
  isDark: boolean;
  toggleTheme: () => void;
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

export const Navbar: React.FC<NavbarProps> = ({ activeSection, isDark, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
        {/* Brand Monogram & Name */}
        <a
          href="#home"
          className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-burgundy rounded-xl"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-burgundy/20 to-brand-navy/30 border border-brand-burgundy/30 flex items-center justify-center font-display font-bold text-sm tracking-wider text-slate-100 dark:text-white group-hover:border-brand-burgundy/70 transition-colors shadow-sm">
            <span className="font-mono text-brand-burgundy dark:text-brand-warm-gray font-bold text-xs">AH</span>
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-sm tracking-tight text-slate-900 dark:text-brand-warm-gray group-hover:text-brand-burgundy transition-colors">
              {personalInfo.name}
            </span>
            <span className="text-[11px] font-mono text-brand-slate hidden sm:block">
              GenAI / ML Engineer
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links Pill */}
        <nav
          className="hidden lg:flex items-center gap-1 px-3 py-1.5 rounded-full glass-panel shadow-lg shadow-black/5 dark:shadow-black/20"
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
                    ? 'text-white dark:text-white font-semibold'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-brand-burgundy to-brand-slate shadow-sm"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </a>
            );
          })}
        </nav>

        {/* Right Actions: Theme Toggle + Contact CTA */}
        <div className="flex items-center gap-2.5">
          <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />

          <a
            href="#inquiry"
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-brand-burgundy text-white hover:bg-brand-burgundy/90 border border-brand-burgundy/50 hover:border-brand-burgundy transition-all duration-200 shadow-sm"
          >
            <span>Let's Work Together</span>
          </a>

          {/* Mobile Hamburger Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-xl bg-white/5 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-800 dark:text-slate-200"
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
