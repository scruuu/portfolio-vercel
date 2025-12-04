import React, { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './EnhancedCard.css';

export interface EnhancedCardProps {
  children: React.ReactNode;
  backContent?: React.ReactNode;
  className?: string;
  expandable?: boolean;
}

export const EnhancedCard: React.FC<EnhancedCardProps> = ({ children, backContent, className = '', expandable = false }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const card = cardRef.current;
    if (!card || !wrapper) return;

    const updateCardStyle = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = (x / rect.width) * 200 - 100;
      const centerY = (y / rect.height) * 200 - 100;

      wrapper.style.setProperty('--pointer-x', `${(x / rect.width) * 100}%`);
      wrapper.style.setProperty('--pointer-y', `${(y / rect.height) * 100}%`);
      wrapper.style.setProperty('--rotate-x', `${centerY * -0.05}deg`);
      wrapper.style.setProperty('--rotate-y', `${centerX * 0.05}deg`);
    };

    const handleMouseEnter = () => {
      wrapper.style.setProperty('--card-opacity', '1');
    };

    const handleMouseLeave = () => {
      wrapper.style.setProperty('--card-opacity', '0');
      wrapper.style.setProperty('--rotate-x', '0deg');
      wrapper.style.setProperty('--rotate-y', '0deg');
    };

    card.addEventListener('mousemove', updateCardStyle);
    card.addEventListener('mouseenter', handleMouseEnter);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mousemove', updateCardStyle);
      card.removeEventListener('mouseenter', handleMouseEnter);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const handleClick = () => {
    if (!isFlipped) {
      setIsFlipped(true);
    }
  };

  const handleExpandClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsExpanded(!isExpanded);
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsFlipped(false);
    setIsExpanded(false);
  };

  return (
    <>
      <div ref={wrapperRef} className={`enhanced-card-wrapper ${className}`} onClick={handleClick}>
        <motion.div
          ref={cardRef}
          className={`enhanced-card ${isFlipped ? 'is-flipped' : ''}`}
          layout
          transition={{ duration: 0.5, type: 'spring' }}
        >
          <div className="enhanced-card-content enhanced-card-front">
            {children}
          </div>
          {backContent && (
            <div className="enhanced-card-content enhanced-card-back">
              <div className="flex flex-col h-full relative">
                {expandable && (
                  <button
                    onClick={handleExpandClick}
                    className="expand-button"
                    title={isExpanded ? "Collapse" : "Expand"}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
                    </svg>
                  </button>
                )}
                                <div className="flex-grow overflow-y-auto">
                  {backContent}
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </div>
      {isFlipped && !isExpanded && (
        <div className="overlay" onClick={handleOverlayClick} />
      )}
      <AnimatePresence>
        {(isFlipped || isExpanded) && (
          <motion.div
            className="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleOverlayClick}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            className="expanded-card-container"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            <div className="expanded-card-content">
              {backContent}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
