import React from 'react';

export const BackgroundVideo: React.FC = () => {
  return (
    <div
      className="fixed inset-0 z-0 pointer-events-none overflow-hidden select-none"
      aria-hidden="true"
    >
      {/* Fixed Background Video - 70% Visible in Light and Dark Mode */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="w-full h-full object-cover object-center filter blur-[8px] scale-105 transform-gpu opacity-70"
      >
        <source src="/background/Meaow.mp4" type="video/mp4" />
      </video>

      {/* Subtle atmospheric tint to maintain text contrast while preserving 70% video visibility */}
      <div className="absolute inset-0 bg-[#DAD6D3]/15 dark:bg-[#0e1218]/20 backdrop-blur-[0.5px] transition-colors duration-300" />
    </div>
  );
};
