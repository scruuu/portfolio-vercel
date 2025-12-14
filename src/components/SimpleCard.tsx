import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';

interface SimpleCardProps {
  children: React.ReactNode;
  backContent: React.ReactNode;
  className?: string;
  /** When true, show expanded content in a centered overlay (popout) */
  overlay?: boolean;
  /** Optional layoutId for shared element transitions (Framer Motion) */
  layoutId?: string;
}

export const SimpleCard: React.FC<SimpleCardProps> = ({ children, backContent, className = '', overlay = false, layoutId }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const closeButtonRef = React.useRef<HTMLButtonElement | null>(null);
  const [isMobile, setIsMobile] = React.useState<boolean>(false);

  const toggle = () => setIsExpanded((s) => !s);

  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggle();
    }
    if (e.key === 'Escape') {
      setIsExpanded(false);
    }
  };

  // When overlay is open, lock body scroll and focus the close button
  React.useEffect(() => {
    if (overlay && isExpanded) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      // focus the close button after the frame
      requestAnimationFrame(() => closeButtonRef.current?.focus());
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [overlay, isExpanded]);

  // detect mobile viewport for responsive modal behaviour
  React.useEffect(() => {
    const check = () => setIsMobile(typeof window !== 'undefined' ? window.innerWidth <= 640 : false);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  // no manual rect measuring: using Framer Motion shared layoutId for smooth animation

  // Global Escape handler for overlay mode
  React.useEffect(() => {
    if (!overlay || !isExpanded) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsExpanded(false);
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [overlay, isExpanded]);

  return (
    <div
      className={`relative w-full cursor-pointer ${className}`}
      onClick={() => { if (!isExpanded) toggle(); }}
      onKeyDown={onKeyDown}
      role="button"
      tabIndex={0}
      aria-expanded={isExpanded}
    >
      {/* Main content (front of the card) */}
      <motion.div layoutId={layoutId} className="relative z-10">
        {children}
      </motion.div>

      {/* Expandable section - either inline (grows the card) or overlay (popout) */}
      <AnimatePresence initial={false}>
        {isExpanded && !overlay && (
          <motion.section
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: 'auto' },
              collapsed: { opacity: 0, height: 0 }
            }}
            transition={{ duration: 0.45, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="z-0"
          >
            <div className="p-6 bg-gradient-to-r from-[rgba(17,17,17,0.95)] to-[rgba(17,17,17,0.98)] text-white">
              {backContent}
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* Overlay popout rendering outside the flow (portal) */}
      {typeof document !== 'undefined' && ReactDOM.createPortal(
        <AnimatePresence>
          {isExpanded && overlay && (
            <>
              <motion.div
                key="backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.22, ease: [0.06, 0.01, 0.1, 0.99] }}
                onClick={(e) => {
                  e.stopPropagation();
                  setIsExpanded(false);
                }}
                className="fixed inset-0 bg-black/55 z-40"
                style={{ backdropFilter: 'blur(6px)' }}
              />

              <motion.div
                key="overlay"
                initial={isMobile ? { y: 40, opacity: 0 } : { opacity: 0, scale: 0.992 }}
                animate={isMobile ? { y: 0, opacity: 1 } : { opacity: 1, scale: 1 }}
                exit={isMobile ? { y: 40, opacity: 0 } : { opacity: 0, scale: 0.992 }}
                transition={{ duration: 0.34, ease: [0.04, 0.2, 0.08, 0.99], layout: { type: 'spring', stiffness: 120, damping: 20, mass: 0.9 } as any }}
                className={isMobile ? 'fixed inset-0 z-50 flex items-end justify-center p-4 pointer-events-none' : 'fixed inset-0 z-50 flex items-center justify-center p-6 pointer-events-none'}
              >
                <motion.div
                  layoutId={layoutId}
                  role="dialog"
                  aria-modal="true"
                  onClick={(e) => e.stopPropagation()}
                  className={isMobile ? 'pointer-events-auto w-full bg-[#0f0f0f] rounded-t-lg shadow-2xl ring-1 ring-white/5 overflow-auto' : 'pointer-events-auto w-full max-w-3xl bg-[#0f0f0f] rounded-md shadow-2xl ring-1 ring-white/5 overflow-auto transform-gpu will-change-transform'}
                  style={isMobile ? { maxHeight: '92vh' } : { maxHeight: '90vh' }}
                  transition={{ layout: { type: 'spring', stiffness: 120, damping: 20, mass: 0.9 } as any }}
                >
                  <div className="flex justify-end p-3">
                    <button
                      ref={closeButtonRef}
                      onClick={() => setIsExpanded(false)}
                      className="text-gray-300 hover:text-white focus:outline-none"
                      aria-label="Close details"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>

                  <div className="p-6 bg-gradient-to-r from-[rgba(17,17,17,0.95)] to-[rgba(17,17,17,0.98)] text-white">
                    {backContent}
                  </div>
                </motion.div>
              </motion.div>
            </>
          )}
        </AnimatePresence>,
        document.body
      )}
    </div>
  );
};