import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SimpleCardProps {
  children: React.ReactNode;
  backContent: React.ReactNode;
  className?: string;
}

export const SimpleCard: React.FC<SimpleCardProps> = ({ children, backContent, className = '' }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const variants = {
    front: {
      rotateY: 0,
      transition: { duration: 0.4 }
    },
    back: {
      rotateY: 180,
      transition: { duration: 0.4 }
    }
  };

  return (
    <div
      className={`relative w-full cursor-pointer [perspective:1000px] ${className}`}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <AnimatePresence>
        <motion.div
          className="absolute inset-0 [transform-style:preserve-3d]"
          initial={false}
          animate={isFlipped ? 'back' : 'front'}
          variants={variants}
        >
          <div className="absolute inset-0 overflow-hidden [backface-visibility:hidden] [transform-style:preserve-3d]">
            {children}
          </div>
          <div className="absolute inset-0 overflow-hidden [backface-visibility:hidden] [transform:rotateY(180deg)] [transform-style:preserve-3d] bg-gradient-to-r from-[rgba(17,17,17,0.95)] to-[rgba(17,17,17,0.98)] text-white p-5 flex flex-col justify-between items-stretch">
            {backContent}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};