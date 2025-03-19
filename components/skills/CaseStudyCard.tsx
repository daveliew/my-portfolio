import React from 'react';
import { CaseStudy } from '@/types/ai-journey';

interface CaseStudyCardProps {
  casestudy: CaseStudy;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ casestudy }) => {
  return (
    <div className="bg-dark-gray rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="p-5">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-semibold text-burgundy">{casestudy.title}</h3>
          <span className="bg-burgundy-dark text-white text-xs px-2 py-1 rounded-full">
            {casestudy.phase}
          </span>
        </div>
        
        <div className="text-sm text-gray-400 mb-4">
          {new Date(casestudy.date).toLocaleDateString(undefined, {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </div>

        <p className="text-gray-300 mb-4">{casestudy.description}</p>

        <div className="mb-4">
          <h4 className="text-sm font-medium text-burgundy mb-2">Outcomes:</h4>
          <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
            {casestudy.outcomes.map((outcome, index) => (
              <li key={index}>{outcome}</li>
            ))}
          </ul>
        </div>

        <div className="mb-4">
          <h4 className="text-sm font-medium text-burgundy mb-2">Technologies Used:</h4>
          <div className="flex flex-wrap gap-2">
            {casestudy.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-2 py-1 text-xs bg-gray-700 text-gray-300 rounded-md"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {casestudy.foundationSkillsApplied && casestudy.foundationSkillsApplied.length > 0 && (
          <div>
            <h4 className="text-sm font-medium text-burgundy mb-2">Foundation Skills Applied:</h4>
            <div className="flex flex-wrap gap-2">
              {casestudy.foundationSkillsApplied.map((skill, index) => (
                <span
                  key={index}
                  className="px-2 py-1 text-xs bg-burgundy-dark text-white rounded-md"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CaseStudyCard; 