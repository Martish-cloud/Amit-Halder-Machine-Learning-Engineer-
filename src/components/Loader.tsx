import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoaderProps {
  onComplete: () => void;
}

export const Loader: React.FC<LoaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsDone(true);
            setTimeout(onComplete, 400);
          }, 200);
          return 100;
        }
        const next = prev + Math.floor(Math.random() * 18) + 8;
        return next > 100 ? 100 : next;
      });
    }, 45);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-dark-bg text-brand-warm-gray"
        >
          {/* Ambient center glow — burgundy, restrained */}
          <div className="absolute w-72 h-72 rounded-full bg-brand-burgundy/8 blur-[100px] pointer-events-none" />

          {/* Profile Identity Emblem with Subtle Fade-in + Scale/Pop Animation */}
          <div className="relative mb-6">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
              className="w-20 h-20 rounded-2xl p-1 bg-gradient-to-br from-brand-burgundy/40 via-brand-navy/60 to-brand-slate/40 border border-brand-burgundy/40 shadow-2xl backdrop-blur-xl relative overflow-hidden"
            >
              <img
                src="/profile.jpeg"
                alt="Amit Halder"
                className="w-full h-full object-cover rounded-xl"
              />
            </motion.div>
          </div>

          {/* Progress bar container */}
          <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden relative">
            <motion.div
              className="h-full bg-gradient-to-r from-brand-burgundy to-brand-slate rounded-full"
              style={{ width: `${progress}%` }}
              transition={{ ease: 'easeOut', duration: 0.1 }}
            />
          </div>

          {/* Text status */}
          <div className="mt-3 font-mono text-xs text-brand-slate flex items-center gap-2">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-brand-burgundy animate-ping" />
            <span>INITIALIZING SYSTEM</span>
            <span className="text-brand-burgundy">{progress}%</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
