import React from 'react';

export const BackgroundGrid: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Ambient gradient orbs */}
      <div className="absolute -top-[15%] -left-[10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] rounded-full bg-brand-cyan/8 dark:bg-brand-cyan/10 blur-[130px] transition-opacity duration-1000" />
      <div className="absolute top-[35%] -right-[15%] w-[55vw] h-[55vw] max-w-[700px] max-h-[700px] rounded-full bg-brand-violet/8 dark:bg-brand-violet/10 blur-[140px] transition-opacity duration-1000" />
      <div className="absolute -bottom-[10%] left-[20%] w-[45vw] h-[45vw] max-w-[600px] max-h-[600px] rounded-full bg-brand-blue/6 dark:bg-brand-blue/8 blur-[120px] transition-opacity duration-1000" />

      {/* Subtle mathematical grid */}
      <div className="absolute inset-0 bg-tech-grid opacity-70 dark:opacity-40" />

      {/* Subtle technical node accent SVG */}
      <svg className="absolute inset-0 w-full h-full opacity-20 dark:opacity-25" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="dot-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="20" cy="20" r="1" className="fill-slate-400 dark:fill-slate-600" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dot-grid)" />
      </svg>
    </div>
  );
};
