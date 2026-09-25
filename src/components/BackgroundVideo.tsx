import React, { useEffect, useRef } from 'react';

export const BackgroundVideo: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (!videoRef.current) return;
      if (document.hidden) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch(() => {});
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-0 pointer-events-none overflow-hidden select-none"
      aria-hidden="true"
      style={{ contain: 'strict' }}
    >
      {/* Fixed Background Video - Clean & Clearly Visible with subtle soft blur on desktop (1.5px) */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        className="w-full h-full object-cover object-center md:filter md:blur-[1.5px] scale-[1.01] transform-gpu opacity-85 will-change-transform"
      >
        <source src="/background/Meaow.mp4" type="video/mp4" />
      </video>

      {/* Subtle atmospheric tint to maintain readability while keeping the video clean and visible */}
      <div className="absolute inset-0 bg-[#0e1218]/15 transition-colors duration-300" />
    </div>
  );
};
