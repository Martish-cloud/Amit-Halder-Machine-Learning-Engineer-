import React from 'react';

export const BackgroundVideo: React.FC = () => {
  return (
    <div
      className="fixed inset-0 z-0 pointer-events-none overflow-hidden select-none"
      aria-hidden="true"
    >
      {/* Fixed Background Video - Clean & Clearly Visible with subtle soft blur (1.5px) */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="w-full h-full object-cover object-center filter blur-[1.5px] scale-[1.01] transform-gpu opacity-75 dark:opacity-70"
      >
        <source src="/background/Meaow.mp4" type="video/mp4" />
      </video>

      {/* Subtle atmospheric tint to maintain readability while keeping the video clean and visible */}
      <div className="absolute inset-0 bg-[#DAD6D3]/10 dark:bg-[#0e1218]/15 transition-colors duration-300" />
    </div>
  );
};
