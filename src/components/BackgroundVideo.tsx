import React from 'react';

export const BackgroundVideo: React.FC = () => {
  return (
    <div
      className="fixed inset-0 z-0 pointer-events-none overflow-hidden select-none"
      aria-hidden="true"
    >
      {/* 30% Blurred Fixed Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="w-full h-full object-cover object-center filter blur-[8px] scale-105 transform-gpu"
      >
        <source src="/background/Meaow.mp4" type="video/mp4" />
      </video>

      {/* Atmospheric Theme-Aware Readability Overlay */}
      <div className="absolute inset-0 bg-[#DAD6D3]/75 dark:bg-[#1D2937]/80 backdrop-blur-[1px] transition-colors duration-300" />
    </div>
  );
};
