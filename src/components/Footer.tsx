import React from 'react';
import { ArrowUp, Mail, Phone, MapPin } from 'lucide-react';
import { LinkedinIcon } from './icons';
import { personalInfo } from '../data/profile';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 border-t border-white/10 bg-slate-950/80 backdrop-blur-xl">
      {/* Gradient top accent — burgundy/slate */}
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-rose-500/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Brand info */}
          <div className="flex flex-col gap-2 max-w-md">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-rose-950/60 to-slate-900 border border-rose-500/40 flex items-center justify-center font-mono font-bold text-xs text-rose-300 shadow-sm">
                AH
              </div>
              <span className="font-display font-bold text-lg text-white">
                {personalInfo.name}
              </span>
            </div>
            <p className="text-xs font-mono text-slate-300">
              {personalInfo.headline}
            </p>
            <p className="text-xs text-slate-300 mt-1 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>{personalInfo.location}</span>
            </p>
          </div>

          {/* Quick links & Contact Actions */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-medium">
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-slate-800/80 border border-white/15 hover:border-rose-500/50 text-slate-200 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-rose-400" />
              <span>{personalInfo.email}</span>
            </a>

            <a
              href={`tel:${personalInfo.phoneRaw}`}
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-slate-800/80 border border-white/15 hover:border-sky-500/50 text-slate-200 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-sky-400" />
              <span>{personalInfo.phone}</span>
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-slate-800/80 border border-white/15 hover:border-sky-500/50 text-slate-200 hover:text-white transition-colors"
            >
              <LinkedinIcon className="w-3.5 h-3.5 text-sky-400" />
              <span>{personalInfo.linkedinDisplay}</span>
            </a>
          </div>

          {/* Scroll to top button */}
          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="p-3 rounded-xl bg-slate-800/80 border border-white/15 hover:border-rose-500/50 hover:text-rose-400 text-slate-200 transition-colors self-end md:self-auto"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        {/* Bottom copyright */}
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-mono">
          <div>
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
            <span className="text-slate-300">Open to AI Engineering &amp; ML roles</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
