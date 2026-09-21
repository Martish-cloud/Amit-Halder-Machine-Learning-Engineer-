import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [cursorState, setCursorState] = useState<'default' | 'pointer' | 'card'>('default');
  const [isFinePointer, setIsFinePointer] = useState(false);

  useEffect(() => {
    // Only enable for desktop mice
    const fineCheck = window.matchMedia('(pointer: fine)');
    setIsFinePointer(fineCheck.matches);

    const handlePointerChange = (e: MediaQueryListEvent) => {
      setIsFinePointer(e.matches);
    };
    fineCheck.addEventListener('change', handlePointerChange);

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement | null;
      if (!target) return;

      if (target.closest('button, a, input, textarea, select, [role="button"]')) {
        setCursorState('pointer');
      } else if (target.closest('.glass-card, [data-interactive="card"]')) {
        setCursorState('card');
      } else {
        setCursorState('default');
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      fineCheck.removeEventListener('change', handlePointerChange);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  if (!isFinePointer) return null;

  return (
    <>
      {/* Center dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-brand-cyan pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
        animate={{
          x: position.x,
          y: position.y,
          scale: cursorState === 'pointer' ? 0.5 : 1,
        }}
        transition={{ type: 'spring', stiffness: 1000, damping: 50 }}
      />
      {/* Outer tracking ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border border-brand-cyan/60 pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2"
        animate={{
          x: position.x,
          y: position.y,
          width: cursorState === 'pointer' ? 44 : cursorState === 'card' ? 36 : 24,
          height: cursorState === 'pointer' ? 44 : cursorState === 'card' ? 36 : 24,
          backgroundColor: cursorState === 'pointer' ? 'rgba(6, 182, 212, 0.15)' : 'rgba(6, 182, 212, 0.03)',
          borderColor: cursorState === 'pointer' ? '#06b6d4' : 'rgba(6, 182, 212, 0.4)',
        }}
        transition={{ type: 'spring', stiffness: 350, damping: 28 }}
      />
    </>
  );
};
