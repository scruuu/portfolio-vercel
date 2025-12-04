import React, { useState } from 'react';
import './index.css';
import './App.css';
import './components/Navigation.css'; // Import navigation styles
import { motion, AnimatePresence } from 'framer-motion';
import { SimpleCard } from './components/SimpleCard';
import projectsData from './data/projects.json';
import { useForm, ValidationError } from '@formspree/react';
// Import assets so Vite processes and hashes them
import backgroundVideo from '/background.mp4';
import msLogo from './assets/ms.jpg';
import meImg from './assets/me.png';
import project1 from './assets/projects/project-1.jpeg';
import project2 from './assets/projects/project-2.jpeg';
import project3 from './assets/projects/project-3.jpeg';
import project4 from './assets/projects/project-4.jpeg';
import project5 from './assets/projects/project-5.jpeg';
import project6 from './assets/projects/project-6.jpeg';

// Add Inter font (similar to Proxima Nova)
import '@fontsource/inter/300.css'; // light
import '@fontsource/inter/400.css'; // regular
import '@fontsource/inter/500.css'; // medium
import '@fontsource/inter/700.css'; // bold

function ContactForm() {
  // TODO: Replace with your form ID
  const [state, handleSubmit] = useForm("mrbavlvr");
  if (state.succeeded) {
      return <p>Thanks for your message!</p>;
  }
  return (
      <form onSubmit={handleSubmit} className="space-y-4">
      <input
        id="email"
        type="email" 
        name="email"
        placeholder="Your email"
        className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:border-white transition-colors"
      />
      <ValidationError 
        prefix="Email"
        field="email"
        errors={state.errors}
      />
      <textarea
        id="message"
        name="message"
        placeholder="Your message"
        rows={4}
        className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:border-white transition-colors resize-none"
      />
      <ValidationError 
        prefix="Message"
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting} className="w-full py-3 bg-white text-black font-bold rounded-lg hover:bg-gray-100 transition-colors">
        SEND MESSAGE
      </button>
    </form>
  );
}

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative w-screen min-h-screen font-['Inter']">
      <div className="relative w-screen h-screen overflow-hidden">
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src={backgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col justify-between h-full text-white p-8">
          {/* Top Navigation */}
          <div className="w-full flex justify-between items-center font-['Inter']">
            <h2 className="text-2xl font-bold uppercase">UJJAWAL VATS</h2>
            {/* Desktop Menu */}
            <nav className="hidden md:flex gap-8">
              <a href="#work" className="text-xl hover:text-gray-300 transition-colors uppercase nav-underline">
                WORK
              </a>
              <a href="#projects" className="text-xl hover:text-gray-300 transition-colors uppercase nav-underline">
                PROJECTS
              </a>
              <a href="#about" className="text-xl hover:text-gray-300 transition-colors uppercase nav-underline">
                ABOUT ME
              </a>
              <a href="#contact" className="text-xl hover:text-gray-300 transition-colors uppercase nav-underline">
                CONTACT
              </a>
            </nav>
            {/* Mobile Menu Button (fixed, toggles between hamburger and X) */}
            <button className={`mobile-hamburger md:hidden ${isMenuOpen ? 'open' : ''}`} onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}>
              {isMenuOpen ? (
                <svg className="hamburger-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="hamburger-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                  className="mobile-menu-overlay md:hidden"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, ease: 'easeInOut' }}
                  onClick={() => setIsMenuOpen(false)}
                />

                <motion.aside
                  className="mobile-menu md:hidden"
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
      <div id="work" className="bg-white text-gray-900 py-16">
        <div className="max-w-5xl mx-auto px-8 md:px-16 lg:px-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="md:col-span-1">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-left text-gray-900 font-['Inter'] uppercase">WORK EXPERIENCE</h2>
            </div>
            <div className="md:col-span-1 flex items-center">
              <p className="text-lg text-gray-700 font-['Inter']">A brief overview of my professional journey, highlighting impactful roles and the skills I've developed across top organizations in finance, technology, and design.</p>
            </div>
          </div>
        </div>
        {/* Work Experience Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 px-8 md:px-16 lg:px-24">
          <div className="md:col-span-1 self-center mr-8">
            <img 
              src={msLogo} 
              alt="Morgan Stanley" 
              className="w-full h-auto object-cover shadow-lg" 
            />
          </div>
          <div className="md:col-span-2">
            <h3 className="text-3xl font-bold text-gray-900 mb-2 uppercase">MORGAN STANLEY</h3>
            <p className="text-xl text-gray-700 mb-4 uppercase">TECHNOLOGY ANALYST | August 2025 - Present</p>
            <div className="space-y-2 text-gray-600">
              <p>• Enhancing a financial transaction processing system to support global operations.</p>
              <p>• Implementing multi-currency features and improving system scalability.</p>
              <p>• Developing automated file processing pipelines with Spring Boot & Batch.</p>
              <p>• Collaborating with teams to deliver secure, reliable, and high-performance solutions.</p>
            </div>
            <div className="mt-4">
              <p className="text-sm text-gray-500">Technologies: Java, Spring, Spring Boot</p>
            </div>

            <hr className="my-8 border-gray-300" />

            <p className="text-xl text-gray-700 mb-4 uppercase">TECHNOLOGY APPRENTICE | July 2024 - August 2025</p>
            <div className="space-y-2 text-gray-600">
              <p>• Developed backend services using Java, Spring Boot, and Spring Batch.</p>
              <p>• Built and optimized batch processing workflows for large-scale data.</p>
              <p>• Contributed to the migration of legacy components into modern Spring Boot services.</p>
              <p>• Strengthened skills in REST/SOAP services, testing, and multi-module projects.</p>
            </div>
            <div className="mt-4">
              <p className="text-sm text-gray-500">Technologies: Java, Spring, Spring Boot, Spring Batch</p>
            </div>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div id="projects" className="bg-black text-white py-16">
        <div className="max-w-5xl mx-auto px-8 md:px-16 lg:px-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
            <div className="md:col-span-1">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-left text-white font-['Inter'] uppercase">PROJECTS</h2>
            </div>
            <div className="md:col-span-1 flex items-center">
              <p className="text-lg text-gray-300 font-['Inter']">A showcase of my personal projects and technical experiments, demonstrating my passion for innovation and problem-solving.</p>
            </div>
          </div>
        </div>
        
        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4 md:px-8 lg:px-12">
          {projectsData.map((project, index) => (
            <SimpleCard 
              key={index}
              className="h-80 w-full"
              backContent={
                <div className="relative h-full p-6 flex flex-col">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white font-['Inter'] uppercase mb-4">{project.title}</h3>
                    <div className="space-y-2">
                      {project.description.split('. ').map((bullet, i) => (
                        <p key={i} className="text-gray-300 font-['Inter'] text-sm">• {bullet}</p>
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-700">
                    <span className="text-sm text-gray-400 font-['Inter']">{project.date}</span>
                    {project.url && project.url !== '404' ? (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-gray-300 transition-all transform hover:-translate-y-1 hover:translate-x-1 group"
                      >
                        <svg
                          className="w-8 h-8 transform -rotate-45"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2.5}
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </a>
                    ) : (
                      <span className="text-sm text-gray-500">No link available</span>
                    )}
                  </div>
                </div>
              }
            >
              <div className="relative h-full">
                <img 
                  src={
                    index === 0 ? project1 :
                    index === 1 ? project2 :
                    index === 2 ? project3 :
                    index === 3 ? project4 :
                    index === 4 ? project5 :
                    project6
                  }
                  alt={project.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = `https://source.unsplash.com/random/800x600/?${project.category.toLowerCase().replace(/\s+/g, '-')}`;
                  }}
                />
                <div className="absolute bottom-4 left-4 card-title z-20">
                  <h3 className="text-2xl font-bold text-white mb-2 font-['Inter'] uppercase">{project.title}</h3>
                </div>
              </div>
            </SimpleCard>
          ))}
        </div>
      </div>

      {/* About Me Section */}
      <div id="about" className="bg-white text-gray-900 py-16">
        <div className="max-w-5xl mx-auto px-8 md:px-16 lg:px-24">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-left md:text-center text-gray-900 font-['Inter'] uppercase">ABOUT ME</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start px-8 md:px-16 lg:px-24">
          <div className="relative">
            <div className="md:sticky md:top-24">
              <div
                className="relative rounded-lg overflow-hidden shadow-xl"
              >
                <img 
                  src={meImg} 
                  alt="Ujjawal Vats"
                  className="w-full aspect-square object-cover" 
                />
              </div>
            </div>
          </div>
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 font-['Inter']">WHO AM I?</h3>
              <p className="text-lg text-gray-700 font-['Inter'] leading-relaxed">
                A dedicated software professional with a strong interest in backend development and system integration. Skilled in Java, Spring Boot, and database technologies, with a solid foundation in computer science fundamentals.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 font-['Inter']">QUICK FACTS</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 mt-1">•</span>
                  <p className="text-gray-700 font-['Inter']">Based in Bengaluru, open to global opportunities</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 mt-1">•</span>
                  <p className="text-gray-700 font-['Inter']">Computer Science graduate from Graphic Era University specializing in Artifical Intelligence & Machine Learning</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 mt-1">•</span>
                  <p className="text-gray-700 font-['Inter']">1+ years of professional experience in software development</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 mt-1">•</span>
                  <p className="text-gray-700 font-['Inter']">Passionate about problem-solving, continuous learning, and building impactful solutions</p>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 font-['Inter']">SKILLS</h3>
              <div className="flex flex-wrap gap-2">
                {['Java', 'Spring', 'Spring Boot', 'Spring Batch', 'Python', 'ML', 'DL', 'Tensorflow', 'SQL', 'React', 'TypeScript', 'Git'].map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full font-['Inter']">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact" className="bg-black text-white py-16">
        <div className="max-w-3xl mx-auto px-8 md:px-16 lg:px-24">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-left md:text-center font-['Inter'] uppercase">LET'S CONNECT</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-8 md:px-16 lg:px-24">
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-4 font-['Inter']">Contact Information</h3>
              <div className="space-y-4">
                <a href="mailto:ujjawal.vats@gmail.com" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="font-['Inter']">ujjawal.vats@gmail.com</span>
                </a>
                <a href="tel:+1234567890" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="font-['Inter']">
                    +91 9318468334
                  </span>
                </a>
                <p className="flex items-center gap-3 text-gray-300">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="font-['Inter']">Bengaluru, Karnataka</span>
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 font-['Inter']">Social Links</h3>
              <div className="flex flex-wrap gap-4">
                <a href="https://github.com/scruuu" target="_blank" rel="noopener noreferrer" 
                  className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                  <span className="font-['Inter']">GitHub</span>
                </a>
                <a href="https://www.linkedin.com/in/ujjawal-vats-523a59247" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  <span className="font-['Inter']">LinkedIn</span>
                </a>
                <a href="https://open.spotify.com/user/31zylrr5hzwpk5bn5h647qyjsifm?si=4c1219b1b0514daf" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                  </svg>
                  <span className="font-['Inter']">Spotify</span>
                </a>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 font-['Inter']">Quick Message</h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;