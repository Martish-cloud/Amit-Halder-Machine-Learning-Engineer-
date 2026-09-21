import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Mail,
  Copy,
  Check,
  Phone,
  MapPin,
  Download,
  ExternalLink,
} from 'lucide-react';
import { LinkedinIcon } from '../components/icons';
import { personalInfo } from '../data/profile';

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleDownload = () => {
    setIsDownloading(true);
    setTimeout(() => setIsDownloading(false), 2000);
  };

  return (
    <section id="contact" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex items-center gap-2 mb-3">
        <span className="font-mono text-xs text-brand-cyan uppercase tracking-widest">
          07 // Direct Communication
        </span>
        <div className="h-[1px] flex-1 max-w-[80px] bg-brand-cyan/30" />
      </div>

      <div className="glass-panel p-8 sm:p-14 rounded-3xl relative overflow-hidden border border-slate-200 dark:border-white/10">
        {/* Ambient background glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-cyan/10 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10 items-center">
          {/* Left Column: Heading & Introduction */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/10 text-brand-cyan text-xs font-mono w-fit">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for GenAI & ML Roles</span>
            </div>

            <h2 className="font-display font-bold text-3xl sm:text-5xl text-slate-900 dark:text-white tracking-tight leading-tight">
              Let's Build Scalable <br />
              AI Systems Together.
            </h2>

            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
              Whether you are looking to architect intelligent LLM workflows, optimize enterprise prompt strategies,
              or leverage operational data for machine learning automation, let's connect.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <a
                href={`mailto:${personalInfo.email}`}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-brand-cyan to-brand-blue text-white font-semibold text-sm shadow-lg shadow-brand-cyan/20 hover:shadow-brand-cyan/35 transition-all text-center flex items-center justify-center gap-2"
              >
                <Mail className="w-4 h-4" />
                <span>Send Email</span>
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-300 dark:border-white/15 hover:border-brand-cyan text-slate-800 dark:text-white font-medium text-sm transition-all text-center flex items-center justify-center gap-2"
              >
                <LinkedinIcon className="w-4 h-4 text-brand-cyan" />
                <span>Connect on LinkedIn</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </a>
            </div>
          </div>

          {/* Right Column: Contact Cards & Copy Micro-interaction */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            {/* Email Card with Copy Button */}
            <div className="glass-card p-5 sm:p-6 rounded-2xl flex items-center justify-between gap-4">
              <div className="flex items-center gap-4 min-w-0">
                <div className="w-12 h-12 rounded-xl bg-brand-cyan/10 border border-brand-cyan/25 flex items-center justify-center text-brand-cyan shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-mono text-slate-400">Email Address</div>
                  <div className="font-mono text-xs sm:text-sm font-semibold text-slate-900 dark:text-white truncate">
                    {personalInfo.email}
                  </div>
                </div>
              </div>

              <button
                onClick={handleCopyEmail}
                className="p-3 rounded-xl bg-slate-200/60 dark:bg-white/5 hover:bg-brand-cyan/15 border border-slate-300 dark:border-white/10 hover:border-brand-cyan text-slate-700 dark:text-slate-300 transition-colors shrink-0 relative"
                aria-label="Copy email address"
                title="Copy email to clipboard"
              >
                <AnimatePresence mode="wait">
                  {copiedEmail ? (
                    <motion.div
                      key="check"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      className="flex items-center gap-1.5 text-xs text-emerald-400 font-mono"
                    >
                      <Check className="w-4 h-4" />
                      <span className="hidden sm:inline">Copied!</span>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="copy"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      className="flex items-center gap-1.5 text-xs font-mono"
                    >
                      <Copy className="w-4 h-4" />
                      <span className="hidden sm:inline">Copy</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </div>

            {/* Phone Card */}
            <div className="glass-card p-5 sm:p-6 rounded-2xl flex items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-blue/10 border border-brand-blue/25 flex items-center justify-center text-brand-blue shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-400">Direct Contact</div>
                  <div className="font-mono text-sm font-semibold text-slate-900 dark:text-white">
                    {personalInfo.phone}
                  </div>
                </div>
              </div>

              <a
                href={`tel:${personalInfo.phoneRaw}`}
                className="px-4 py-2 rounded-xl bg-slate-200/60 dark:bg-white/5 hover:bg-brand-blue/15 border border-slate-300 dark:border-white/10 hover:border-brand-blue text-xs font-mono font-medium text-slate-700 dark:text-slate-300 transition-colors"
              >
                Call
              </a>
            </div>

            {/* Location Card */}
            <div className="glass-card p-5 sm:p-6 rounded-2xl flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center text-emerald-400 shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-mono text-slate-400">Primary Location</div>
                <div className="text-sm font-semibold text-slate-900 dark:text-white font-display">
                  {personalInfo.location}
                </div>
              </div>
            </div>

            {/* Resume Download Feature Card */}
            <div className="glass-card p-5 sm:p-6 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-gradient-to-r from-brand-cyan/5 via-transparent to-brand-violet/5 border-brand-cyan/30">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-emerald-400">
                  <Download className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white font-display">
                    Verified Resume (PDF)
                  </div>
                  <div className="text-xs font-mono text-slate-400">
                    Direct download • Updated 2026
                  </div>
                </div>
              </div>

              <a
                href={personalInfo.resumeUrl}
                download="Amit_Halder_Resume.pdf"
                onClick={handleDownload}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold text-xs transition-transform hover:scale-105 active:scale-95 text-center flex items-center justify-center gap-2"
              >
                {isDownloading ? (
                  <>
                    <span className="w-3.5 h-3.5 border-2 border-current border-t-transparent rounded-full animate-spin" />
                    <span>Downloading...</span>
                  </>
                ) : (
                  <>
                    <Download className="w-3.5 h-3.5" />
                    <span>Download CV</span>
                  </>
                )}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
