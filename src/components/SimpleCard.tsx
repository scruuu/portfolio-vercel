import React, { useState } from 'react';
import './SimpleCard.css';

interface SimpleCardProps {
  children: React.ReactNode;
  backContent: React.ReactNode;
  className?: string;
}

export const SimpleCard: React.FC<SimpleCardProps> = ({ children, backContent, className = '' }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="simple-card-container">
      <div
        className={`simple-card ${className} ${isFlipped ? 'is-flipped' : ''}`}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <div className="card-side card-front">
          {children}
        </div>
        <div className="card-side card-back">
          {backContent}
        </div>
      </div>
    </div>
  );
};