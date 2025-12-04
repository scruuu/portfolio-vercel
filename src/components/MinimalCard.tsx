import React from 'react';
import './MinimalCard.css';

interface MinimalCardProps {
  title: string;
  description: string;
  tech: string[];
  github: string;
}

const MinimalCard: React.FC<MinimalCardProps> = ({ title, description, tech, github }) => {
  return (
    <div className="minimal-card">
      <h3 className="minimal-card-title">{title}</h3>
      <p className="minimal-card-description">{description}</p>
      <div className="minimal-card-footer">
        <div className="minimal-card-tech">
          {tech.map((t) => (
            <span key={t} className="minimal-card-tech-item">
              {t}
            </span>
          ))}
        </div>
        <a href={github} target="_blank" rel="noopener noreferrer" className="minimal-card-link">
          →
        </a>
      </div>
    </div>
  );
};

export default MinimalCard;
