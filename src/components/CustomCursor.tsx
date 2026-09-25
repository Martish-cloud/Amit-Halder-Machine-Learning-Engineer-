import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [cursorState, setCursorState] = useState<'default' | 'pointer' | 'card'>('default');
  const [isFinePointer, setIsFinePointer] = useState<boolean>(() =>
    typeof window !== 'undefined' ? window.matchMedia('(pointer: fine)').matches : false
  );

  // Motion values avoid triggering React component re-renders on mousemove
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const dotX = useSpring(mouseX, { stiffness: 1200, damping: 50 });
  const dotY = useSpring(mouseY, { stiffness: 1200, damping: 50 });

  const ringX = useSpring(mouseX, { stiffness: 380, damping: 30 });
  const ringY = useSpring(mouseY, { stiffness: 380, damping: 30 });

  useEffect(() => {
    // Only enable for desktop mice
    const fineCheck = window.matchMedia('(pointer: fine)');

    const handlePointerChange = (e: MediaQueryListEvent) => {
      setIsFinePointer(e.matches);
    };
    fineCheck.addEventListener('change', handlePointerChange);

    if (!fineCheck.matches) {
      return () => {
        fineCheck.removeEventListener('change', handlePointerChange);
      };
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

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
  }, [mouseX, mouseY, isFinePointer]);

  if (!isFinePointer) return null;

  return (
    <>
      {/* Center dot - burgundy accent */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-brand-burgundy pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2"
        style={{ x: dotX, y: dotY }}
        animate={{
          scale: cursorState === 'pointer' ? 0.5 : 1,
        }}
        transition={{ type: 'spring', stiffness: 1000, damping: 50 }}
      />
      {/* Outer tracking ring - burgundy/slate accent */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2"
        style={{ x: ringX, y: ringY }}
        animate={{
          width: cursorState === 'pointer' ? 44 : cursorState === 'card' ? 36 : 24,
          height: cursorState === 'pointer' ? 44 : cursorState === 'card' ? 36 : 24,
          backgroundColor:
            cursorState === 'pointer'
              ? 'rgba(101, 23, 36, 0.12)'
              : 'rgba(68, 87, 94, 0.05)',
          borderColor:
            cursorState === 'pointer'
              ? 'rgba(101, 23, 36, 0.7)'
              : 'rgba(68, 87, 94, 0.35)',
        }}
        transition={{ type: 'spring', stiffness: 350, damping: 28 }}
      />
    </>
  );
};
