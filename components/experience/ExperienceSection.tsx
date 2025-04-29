'use client';

import React, { useState, useEffect } from 'react';
import { ExperienceSectionProps } from '@/types/experience';
import CategorySection from './CategorySection';

const ExperienceSection: React.FC<ExperienceSectionProps> = ({ areas = [] }) => {
  const [selectedArea, setSelectedArea] = useState<string>('');

  // Set initial selected area and trigger default card selection
  useEffect(() => {
    if (areas?.length > 0) {
      // Find the Tech & AI Implementation area
      const techArea = areas.find(area => area.title.includes('Technology & AI'));
      setSelectedArea(techArea?.id || areas[0].id);
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
    <section className="w-full bg-[var(--background-secondary)] border-t border-[var(--dark-grey-secondary)]/20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-[var(--text-primary)]">
          Professional Experience
        </h2>
        
        <div className="flex flex-wrap justify-between gap-4 mb-12 w-full">
          {areas.map((area) => (
            <button
              key={area.id}
              className={`flex-1 px-6 py-3 text-lg transition-colors duration-300 min-w-[250px] ${
                selectedArea === area.id
                  ? 'text-[var(--text-primary)] border-b-2 border-[var(--accent-primary)] font-medium'
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
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
      </div>
    </section>
  );
};

export default ExperienceSection;
