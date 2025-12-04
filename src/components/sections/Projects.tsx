import React from 'react';
import { motion } from 'framer-motion';
import { SimpleCard } from '../SimpleCard';
import projectsData from '../../data/projects.json';
import project1 from '../../assets/projects/project-1.jpeg';
import project2 from '../../assets/projects/project-2.jpeg';
import project3 from '../../assets/projects/project-3.jpeg';
import project4 from '../../assets/projects/project-4.jpeg';
import project5 from '../../assets/projects/project-5.jpeg';
import project6 from '../../assets/projects/project-6.jpeg';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const Projects: React.FC = () => {
    return (
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
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4 md:px-8 lg:px-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {projectsData.map((project, index) => (
            <motion.div key={index} variants={itemVariants}>
              <SimpleCard 
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
            </motion.div>
          ))}
        </motion.div>
      </div>
    )
};

export default Projects;