'use client'

import { useState } from 'react';

const ImpactfulStatement = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="text-center py-20 px-4"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h1 className="text-4xl md:text-6xl font-merriweather font-bold mb-4 transition-all duration-300 ease-in-out">
        Co-creating <span className="text-[var(--burgundy)]">Tomorrow</span> through 
        <br className="hidden md:inline" /> 
        <span className="text-[var(--primary-yellow)]">Human Creativity</span> and 
        <span className="text-[var(--light-burgundy)]"> AI Precision</span>
      </h1>
      {isHovered && (
        <p className="mt-4 text-lg max-w-2xl mx-auto transition-opacity duration-300 ease-in-out">
          Leveraging the power of human innovation and artificial intelligence 
          to create groundbreaking solutions for the challenges of today and tomorrow.
        </p>
      )}
    </div>
  );
};

export default ImpactfulStatement;