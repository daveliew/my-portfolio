'use client';

import React, { useState, useEffect } from 'react';
import { ExperienceSectionProps } from '@/types/experience';
import CategorySection from './CategorySection';

const ExperienceSection: React.FC<ExperienceSectionProps> = ({ areas = [] }) => {
  const [selectedArea, setSelectedArea] = useState<string>('');

  // Set initial selected area and trigger default card selection
  useEffect(() => {
    if (areas?.length > 0) {
      setSelectedArea(areas[0].id);
    }
  }, [areas]);

  const handleAreaChange = (areaId: string) => {
    setSelectedArea(areaId);
    // Trigger an event to notify CategorySection to reset to first card
    const event = new CustomEvent('resetActiveCard');
    window.dispatchEvent(event);
  };

  if (!areas?.length) {
    return null;
  }

  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-center mb-12 text-off-white">
        Professional Experience
      </h2>
      
      <div className="flex flex-wrap justify-center gap-8 mb-12">
        {areas.map((area) => (
          <button
            key={area.id}
            className={`px-6 py-3 text-lg transition-colors duration-300 ${
              selectedArea === area.id
                ? 'text-off-white border-b-2 border-burgundy font-medium'
                : 'text-gray-500 hover:text-gray-300'
            }`}
            onClick={() => handleAreaChange(area.id)}
          >
            {area.title}
          </button>
        ))}
      </div>
      
      {areas.find(area => area.id === selectedArea) && (
        <CategorySection area={areas.find(area => area.id === selectedArea)!} />
      )}
    </section>
  );
};

export default ExperienceSection;
