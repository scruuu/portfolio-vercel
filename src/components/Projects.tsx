import React, { useEffect, useState } from 'react';
import MinimalCard from './MinimalCard';

interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
}

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetch('src/data/projects.json')
      .then((res) => res.json())
      .then(setProjects);
  }, []);

  return (
    <div className="container max-w-2xl mx-auto p-6 grid gap-6 grid-cols-1">
      {projects.map((project) => (
        <MinimalCard
          key={project.title}
          title={project.title}
          description={project.description}
          tech={project.tech}
          github={project.github}
        />
      ))}
    </div>
  );
};

export default Projects;
