import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="https://res.cloudinary.com/dd6ynbqu6/video/upload/v1764854641/7513671-uhd_2560_1440_24fps_azq466.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col justify-between h-full text-white p-8">
        {/* Center Content */}
        <div className="flex items-center justify-center flex-1">
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold uppercase text-center font-['Inter']"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            ROME WASN'T BUILT IN A DAY
          </motion.h1>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Hero;
