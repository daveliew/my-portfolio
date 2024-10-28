'use client';

import React, { useState, useEffect } from 'react';
import { Experience, ProfessionalArea, ExperienceSectionProps } from '@/types/experience';

const ExperienceSection: React.FC<ExperienceSectionProps> = ({ areas = [] }) => {
  const [selectedArea, setSelectedArea] = useState<string>('');

  // Set initial selected area after component mounts
  useEffect(() => {
    if (areas?.length > 0) {
      setSelectedArea(areas[0].id);
    }
  }, [areas]);

  if (!areas?.length) {
    return null; // or return a loading state
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
                ? 'text-off-white border-b-2 border-burgundy'
                : 'text-gray-400 hover:text-off-white'
            }`}
            onClick={() => setSelectedArea(area.id)}
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

const CategorySection: React.FC<{ area: ProfessionalArea }> = ({ area }) => {
  const [activeExperience, setActiveExperience] = useState(area.experiences[0]);

  return (
    <div className="space-y-8">
      <p className="text-gray-300 text-center max-w-2xl mx-auto mb-8">
        {area.description}
      </p>
      
      {/* Add skills section if needed */}
      <div className="flex flex-wrap gap-2 justify-center mb-8">
        {area.skills?.map((skill: string, i: number) => (
          <span
            key={i}
            className="text-xs px-2 py-1 bg-burgundy/20 rounded-full text-burgundy"
          >
            {skill}
          </span>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {area.experiences.map((exp, index) => (
          <div
            key={index}
            className={`p-6 rounded-lg cursor-pointer transition-all duration-300 ${
              activeExperience === exp
                ? 'bg-burgundy ring-1 ring-burgundy'
                : 'bg-dark-gray hover:bg-light-burgundy'
            }`}
            onClick={() => setActiveExperience(exp)}
          >
            <div className="mb-4">
              <h3 className="text-xl font-medium mb-1">{exp.role}</h3>
              <p className="text-gray-300 text-sm">
                {exp.company || exp.type} • {exp.period}
              </p>
            </div>
            
            <ul className="text-sm text-gray-300 mb-4 space-y-2">
              {exp.highlights.map((highlight, i) => (
                <li key={i} className="list-disc ml-4">
                  {highlight}
                </li>
              ))}
            </ul>
            
            <div className="flex flex-wrap gap-2">
              {exp.keySkills.map((skill, i) => (
                <span
                  key={i}
                  className="text-xs px-2 py-1 bg-burgundy/20 rounded-full text-burgundy"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceSection;
