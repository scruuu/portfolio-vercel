import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ children, className }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className={className}>
      <motion.div
        style={{
          transform: isInView ? 'none' : 'translateY(100px)',
          opacity: isInView ? 1 : 0,
          transition: 'all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s'
        }}
      >
        {children}
      </motion.div>
    </section>
  );
};

export default Section;
