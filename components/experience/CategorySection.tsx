import React, { useState, useEffect } from 'react';
import { ProfessionalArea } from '@/types/experience';

const CategorySection: React.FC<{ area: ProfessionalArea }> = ({ area }) => {
  const [activeExperience, setActiveExperience] = useState(area.experiences[0]);

  // Update activeExperience when area changes
  useEffect(() => {
    setActiveExperience(area.experiences[0]);
  }, [area]);

  useEffect(() => {
    const handleReset = () => {
      if (area.experiences?.length > 0) {
        setActiveExperience(area.experiences[0]);
      }
    };

    window.addEventListener('resetActiveCard', handleReset);
    return () => window.removeEventListener('resetActiveCard', handleReset);
  }, [area]);

  return (
    <div className="space-y-8">
      <p className="text-gray-300 text-center max-w-2xl mx-auto mb-8">
        {area.description}
      </p>
      
      <div className="flex flex-wrap gap-2 justify-center mb-8">
        {area.skills?.map((skill: string, i: number) => (
          <span
            key={i}
            className="text-xs px-2 py-1 bg-primary-yellow-dark/20 rounded-full text-primary-yellow-dark"
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
                  className={`text-xs px-2 py-1 rounded-full ${
                    activeExperience === exp
                      ? 'bg-primary-yellow/20 text-primary-yellow'
                      : 'bg-primary-yellow-dark/20 text-primary-yellow-dark'
                  }`}
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

export default CategorySection; 