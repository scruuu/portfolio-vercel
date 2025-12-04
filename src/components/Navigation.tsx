import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Top Navigation */}
      <div className="w-full flex justify-between items-center font-['Inter'] p-8 absolute top-0 z-20 text-white">
        <h2 className="text-2xl font-bold uppercase">UJJAWAL VATS</h2>
        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8">
          <a href="#work" className="text-xl hover:text-gray-300 transition-colors uppercase relative inline-block after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-[2px] after:bg-current after:scale-x-0 after:origin-bottom-right after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100 hover:after:origin-bottom-left">
            WORK
          </a>
          <a href="#projects" className="text-xl hover:text-gray-300 transition-colors uppercase relative inline-block after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-[2px] after:bg-current after:scale-x-0 after:origin-bottom-right after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100 hover:after:origin-bottom-left">
            PROJECTS
          </a>
          <a href="#about" className="text-xl hover:text-gray-300 transition-colors uppercase relative inline-block after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-[2px] after:bg-current after:scale-x-0 after:origin-bottom-right after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100 hover:after:origin-bottom-left">
            ABOUT ME
          </a>
          <a href="#contact" className="text-xl hover:text-gray-300 transition-colors uppercase relative inline-block after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-[2px] after:bg-current after:scale-x-0 after:origin-bottom-right after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100 hover:after:origin-bottom-left">
            CONTACT
          </a>
        </nav>
        {/* Mobile Menu Button (fixed, toggles between hamburger and X) */}
        <button className={`md:hidden fixed top-7 right-7 z-[10050] w-10 h-10 flex items-center justify-center cursor-pointer bg-transparent border-0 tap-highlight-transparent ${isMenuOpen ? 'open' : ''}`} onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}>
          {isMenuOpen ? (
            <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-7 h-7 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence mode="wait">
        {isMenuOpen && (
          <>
            <motion.div
              className="md:hidden fixed inset-0 bg-black/40 z-[10040]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
              onClick={() => setIsMenuOpen(false)}
            />

            <motion.aside
              className="md:hidden fixed top-0 right-0 h-screen w-[68vw] max-w-[380px] bg-black/95 text-white z-[10045] pt-16 overflow-y-auto shadow-[-18px_0_48px_rgba(0,0,0,0.55)]"
              role="dialog"
              aria-hidden={!isMenuOpen}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.6, ease: [0.2, 0.9, 0.2, 1] }}
            >
              <nav className="flex flex-col items-center justify-center gap-6 px-6 pb-8 h-full">
                <a href="#work" className="text-xl hover:text-gray-300 transition-colors uppercase" onClick={() => setIsMenuOpen(false)}>
                  WORK
                </a>
                <a href="#projects" className="text-xl hover:text-gray-300 transition-colors uppercase" onClick={() => setIsMenuOpen(false)}>
                  PROJECTS
                </a>
                <a href="#about" className="text-xl hover:text-gray-300 transition-colors uppercase" onClick={() => setIsMenuOpen(false)}>
                  ABOUT ME
                </a>
                <a href="#contact" className="text-xl hover:text-gray-300 transition-colors uppercase" onClick={() => setIsMenuOpen(false)}>
                  CONTACT
                </a>
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
