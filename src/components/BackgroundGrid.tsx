import React from 'react';

export const BackgroundGrid: React.FC = () => {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden transform-gpu"
      aria-hidden="true"
      style={{ contain: 'strict' }}
    >
      {/* Ambient gradient orbs — premium, restrained (no neon) */}
      <div className="absolute -top-[15%] -left-[10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] rounded-full bg-brand-burgundy/5 dark:bg-brand-burgundy/7 blur-[140px] transition-opacity duration-1000 transform-gpu will-change-transform" />
      <div className="absolute top-[35%] -right-[15%] w-[55vw] h-[55vw] max-w-[700px] max-h-[700px] rounded-full bg-brand-navy/8 dark:bg-brand-slate/6 blur-[150px] transition-opacity duration-1000 transform-gpu will-change-transform" />
      <div className="absolute -bottom-[10%] left-[20%] w-[45vw] h-[45vw] max-w-[600px] max-h-[600px] rounded-full bg-brand-charcoal/5 dark:bg-brand-charcoal/7 blur-[130px] transition-opacity duration-1000 transform-gpu will-change-transform" />

      {/* Subtle mathematical grid */}
      <div className="absolute inset-0 bg-tech-grid opacity-60 dark:opacity-35" />

      {/* Subtle dot pattern */}
      <svg className="absolute inset-0 w-full h-full opacity-15 dark:opacity-20" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="dot-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="20" cy="20" r="1" className="fill-brand-slate dark:fill-brand-charcoal" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dot-grid)" />
      </svg>
    </div>
  );
};
