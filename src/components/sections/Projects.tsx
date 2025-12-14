import React from 'react';
import { motion, LayoutGroup } from 'framer-motion';
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
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

const Projects: React.FC = () => {
  return (
    <div id="projects" className="bg-black text-white py-16">
      <div className="max-w-5xl mx-auto px-8 md:px-16 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-['Inter'] uppercase">
              PROJECTS
            </h2>
          </div>
          <div>
            <p className="text-lg text-gray-300 font-['Inter']">
              A showcase of my personal projects and technical experiments,
              demonstrating my passion for innovation and problem-solving.
            </p>
          </div>
        </div>
      </div>

      <LayoutGroup>
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
                className="w-full"
                overlay
                layoutId={`project-${index}`}
                backContent={
                  <div className="relative p-6 flex flex-col min-h-[14rem]">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold uppercase mb-4">
                        {project.title}
                      </h3>

                      {(project.problem?.trim() ||
                        project.solution?.trim() ||
                        project.impact?.trim()) ? (
                        <div className="space-y-4 text-sm text-gray-300">
                          {project.problem?.trim() && (
                            <div>
                              <h4 className="text-xs uppercase text-gray-400 mb-1">
                                Problem
                              </h4>
                              <p>{project.problem}</p>
                            </div>
                          )}

                          {project.solution?.trim() && (
                            <div>
                              <h4 className="text-xs uppercase text-gray-400 mb-1">
                                Solution
                              </h4>
                              <p>{project.solution}</p>
                            </div>
                          )}

                          {project.impact?.trim() && (
                            <div>
                              <h4 className="text-xs uppercase text-gray-400 mb-1">
                                Impact
                              </h4>
                              <p>{project.impact}</p>
                            </div>
                          )}
                        </div>
                      ) : (
                        <p className="text-sm text-gray-300">
                          {project.description}
                        </p>
                      )}
                    </div>

                    <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-700">
                      <span className="text-sm text-gray-400">
                        {project.date}
                      </span>
                      {project.url && project.url !== '404' ? (
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-gray-300 transition-transform hover:-translate-y-1 hover:translate-x-1"
                        >
                          <svg
                            className="w-8 h-8 -rotate-45"
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
                        <span className="text-sm text-gray-500">
                          No link available
                        </span>
                      )}
                    </div>
                  </div>
                }
              >
                <div className="relative h-80">
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
                      const img = e.target as HTMLImageElement;
                      img.src = `https://source.unsplash.com/random/800x600/?${project.category
                        .toLowerCase()
                        .replace(/\s+/g, '-')}`;
                    }}
                  />
                  <div className="absolute bottom-4 left-4 z-20 max-w-[70%]">
                    <h3 className="text-2xl font-bold uppercase line-clamp-2">
                      {project.title}
                    </h3>
                  </div>
                </div>
              </SimpleCard>
            </motion.div>
          ))}
        </motion.div>
      </LayoutGroup>
    </div>
  );
};

export default Projects;
