import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { X, ZoomIn, ZoomOut, RotateCcw, ExternalLink } from 'lucide-react';

interface ImageLightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  category?: string;
  imageSrc: string;
  altText: string;
  badge?: string;
}

export const ImageLightboxModal: React.FC<ImageLightboxModalProps> = ({
  isOpen,
  onClose,
  title,
  category,
  imageSrc,
  altText,
  badge,
}) => {
  const [zoom, setZoom] = useState(1);
  const prefersReduced = useReducedMotion();
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  const handleClose = useCallback(() => {
    setZoom(1);
    onClose();
  }, [onClose]);

  // Focus management
  useEffect(() => {
    if (isOpen) {
      previousFocusRef.current = document.activeElement as HTMLElement | null;
      const timer = setTimeout(() => {
        closeButtonRef.current?.focus();
      }, 50);
      return () => clearTimeout(timer);
    } else {
      if (previousFocusRef.current) {
        previousFocusRef.current.focus();
      }
    }
  }, [isOpen]);

  // Lock body scroll while modal is open
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isOpen]);

  // ESC key listener
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    },
    [handleClose]
  );

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [isOpen, handleKeyDown]);

  const handleZoomIn = (e: React.MouseEvent) => {
    e.stopPropagation();
    setZoom((z) => Math.min(z + 0.25, 2.5));
  };

  const handleZoomOut = (e: React.MouseEvent) => {
    e.stopPropagation();
    setZoom((z) => Math.max(z - 0.25, 0.75));
  };

  const handleResetZoom = (e: React.MouseEvent) => {
    e.stopPropagation();
    setZoom(1);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
        role="dialog"
        aria-modal="true"
        aria-labelledby="lightbox-modal-title"
      >
        {/* Dark Translucent Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: prefersReduced ? 0.1 : 0.2 }}
          onClick={handleClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
          aria-hidden="true"
        />

        {/* Modal Window Container */}
        <motion.div
          initial={prefersReduced ? { opacity: 0 } : { opacity: 0, scale: 0.95, y: 10 }}
          animate={prefersReduced ? { opacity: 1 } : { opacity: 1, scale: 1, y: 0 }}
          exit={prefersReduced ? { opacity: 0 } : { opacity: 0, scale: 0.95, y: 10 }}
          transition={{ duration: prefersReduced ? 0.15 : 0.3, ease: [0.16, 1, 0.3, 1] }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-brand-warm-gray dark:bg-[#1D2937] rounded-2xl sm:rounded-3xl border border-slate-300 dark:border-white/10 shadow-2xl overflow-hidden z-10"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 border-b border-slate-300/80 dark:border-white/10 bg-white/60 dark:bg-black/20 shrink-0">
            <div className="min-w-0 pr-3">
              <div className="flex items-center gap-2 mb-0.5">
                {badge && (
                  <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full bg-brand-burgundy/15 text-brand-burgundy dark:text-brand-warm-gray font-semibold">
                    {badge}
                  </span>
                )}
                {category && (
                  <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400">
                    {category}
                  </span>
                )}
              </div>
              <h3
                id="lightbox-modal-title"
                className="font-display font-bold text-base sm:text-lg text-slate-900 dark:text-brand-warm-gray truncate"
              >
                {title}
              </h3>
            </div>

            {/* Controls: Zoom, Full View & Close */}
            <div className="flex items-center gap-1.5 shrink-0">
              <div className="hidden sm:flex items-center gap-1 bg-slate-200/80 dark:bg-white/5 rounded-xl p-1 border border-slate-300/80 dark:border-white/10 mr-1">
                <button
                  type="button"
                  onClick={handleZoomOut}
                  disabled={zoom <= 0.75}
                  aria-label="Zoom out"
                  title="Zoom out"
                  className="p-1.5 rounded-lg text-slate-700 dark:text-slate-300 hover:text-brand-burgundy hover:bg-white dark:hover:bg-white/10 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                >
                  <ZoomOut className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={handleResetZoom}
                  aria-label="Reset zoom"
                  title="Reset zoom"
                  className="px-2 py-1 text-xs font-mono font-medium rounded-lg text-slate-700 dark:text-slate-300 hover:text-brand-burgundy hover:bg-white dark:hover:bg-white/10 transition-colors"
                >
                  {Math.round(zoom * 100)}%
                </button>
                <button
                  type="button"
                  onClick={handleZoomIn}
                  disabled={zoom >= 2.5}
                  aria-label="Zoom in"
                  title="Zoom in"
                  className="p-1.5 rounded-lg text-slate-700 dark:text-slate-300 hover:text-brand-burgundy hover:bg-white dark:hover:bg-white/10 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                >
                  <ZoomIn className="w-4 h-4" />
                </button>
                {zoom !== 1 && (
                  <button
                    type="button"
                    onClick={handleResetZoom}
                    aria-label="Reset scale"
                    title="Reset scale"
                    className="p-1.5 rounded-lg text-slate-700 dark:text-slate-300 hover:text-brand-burgundy hover:bg-white dark:hover:bg-white/10 transition-colors"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              {/* Open in new tab link */}
              <a
                href={imageSrc}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open image in new tab"
                title="Open image in new tab"
                className="p-2 rounded-xl text-slate-700 dark:text-slate-300 hover:text-brand-burgundy hover:bg-white dark:hover:bg-white/10 border border-transparent hover:border-slate-300 dark:hover:border-white/10 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
              </a>

              {/* Close Button */}
              <button
                ref={closeButtonRef}
                type="button"
                onClick={handleClose}
                aria-label="Close viewer (ESC)"
                title="Close (ESC)"
                className="p-2 rounded-xl bg-brand-burgundy/10 hover:bg-brand-burgundy text-brand-burgundy hover:text-white border border-brand-burgundy/30 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-burgundy"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Image Display Area */}
          <div className="relative flex-1 min-h-[300px] max-h-[calc(92vh-110px)] overflow-auto p-4 sm:p-6 flex items-center justify-center bg-slate-100/50 dark:bg-black/40">
            <div
              className="relative transition-transform duration-200 ease-out flex items-center justify-center max-w-full"
              style={{
                transform: `scale(${zoom})`,
                transformOrigin: 'center center',
              }}
            >
              <img
                src={imageSrc}
                alt={altText}
                loading="eager"
                decoding="async"
                draggable={false}
                className="max-w-full max-h-[70vh] w-auto h-auto object-contain rounded-xl shadow-lg border border-slate-300/60 dark:border-white/10 select-none"
              />
            </div>
          </div>

          {/* Footer Bar */}
          <div className="px-4 sm:px-6 py-2.5 border-t border-slate-300/80 dark:border-white/10 bg-white/40 dark:bg-black/20 flex items-center justify-between text-xs font-mono text-slate-500 dark:text-slate-400 shrink-0">
            <span>Press ESC or click outside to close</span>
            <span className="hidden sm:inline">Original Document / Certificate</span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
