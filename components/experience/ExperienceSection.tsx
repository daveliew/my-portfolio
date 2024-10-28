'use client';

import React, { useState } from 'react';

interface Skill {
  name: string;
  score: number;
}

interface Experience {
  id: string;
  role: string;
  company: string;
  highlight: string;
}

interface ProfessionalArea {
  id: string;
  title: string;
  experiences: Experience[];
  skills: Skill[];
}

interface ExperienceSectionProps {
  areas: ProfessionalArea[];
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({ areas }) => {
  const [selectedArea, setSelectedArea] = useState('startup-strategies');

  const getAreaById = (id: string) => areas.find(area => area.id === id);

  return (
    <div className="mt-8">
      <div className="flex justify-center mb-6">
        {areas.map((area) => (
          <button
            key={area.id}
            className={`px-4 py-2 mx-2 rounded-md ${
              selectedArea === area.id
                ? 'bg-burgundy text-off-white'
                : 'bg-dark-gray text-off-white hover:bg-light-burgundy'
            }`}
            onClick={() => setSelectedArea(area.id)}
          >
            {area.title}
          </button>
        ))}
      </div>
      
      {getAreaById(selectedArea) && (
        <CategorySection area={getAreaById(selectedArea)!} />
      )}
    </div>
  );
};

const CategorySection: React.FC<{ area: ProfessionalArea }> = ({ area }) => {
  const [activeExperience, setActiveExperience] = useState(area.experiences?.[0] || null);

  if (!area.experiences || area.experiences.length === 0) {
    return (
      <section className="my-8">
        <p>No experiences available for this area.</p>
      </section>
    );
  }

  return (
    <section className="my-8">
      <div className="flex">
        <div className="w-1/3 pr-4">
          {area.experiences.map(exp => (
            <button
              key={exp.id}
              className={`w-full text-left px-4 py-2 mb-2 rounded-lg ${
                activeExperience?.id === exp.id 
                  ? 'bg-burgundy text-off-white' 
                  : 'bg-dark-gray text-off-white hover:bg-light-burgundy'
              }`}
              onClick={() => setActiveExperience(exp)}
            >
              {exp.company}
            </button>
          ))}
        </div>
        
        <div className="w-2/3 px-4">
          {activeExperience && (
            <div className="card bg-dark-gray p-4 rounded-lg">
              <h4 className="font-medium text-xl mb-2">{activeExperience.role}</h4>
              <h5 className="font-medium text-lg mb-2 text-burgundy">{activeExperience.company}</h5>
              <p>{activeExperience.highlight}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
