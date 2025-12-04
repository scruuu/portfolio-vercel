import React from 'react';
import './index.css';
import Navigation from './components/Navigation';
import Hero from './components/sections/Hero';
import Work from './components/sections/Work';
import Projects from './components/sections/Projects';
import About from './components/sections/About';
import Contact from './components/sections/Contact';

// Add Inter font (similar to Proxima Nova)
import '@fontsource/inter/300.css'; // light
import '@fontsource/inter/400.css'; // regular
import '@fontsource/inter/500.css'; // medium
import '@fontsource/inter/700.css'; // bold

const App: React.FC = () => {
  return (
    <div className="relative w-screen min-h-screen font-['Inter']">
      <Navigation />
      <Hero />
      <Work />
      <Projects />
      <About />
      <Contact />
    </div>
  );
};

export default App;