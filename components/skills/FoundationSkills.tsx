import React, { useState } from 'react';
import { FoundationCategory } from '@/types/ai-journey';

interface FoundationSkillsProps {
  foundationSkills: FoundationCategory[];
}

const FoundationSkills: React.FC<FoundationSkillsProps> = ({ foundationSkills }) => {
  const [expandedSkill, setExpandedSkill] = useState<string | null>(null);

  const toggleSkill = (skillName: string) => {
    if (expandedSkill === skillName) {
      setExpandedSkill(null);
    } else {
      setExpandedSkill(skillName);
    }
  };

  return (
    <div className="space-y-10">
      {foundationSkills.map((category, categoryIndex) => (
        <div key={categoryIndex} className="bg-dark-gray rounded-lg p-6 shadow-md">
          <h3 className="text-xl font-semibold text-burgundy mb-3">{category.name}</h3>
          <p className="text-gray-300 mb-6">{category.description}</p>
          
          <div className="space-y-6">
            {category.skills.map((skill, skillIndex) => (
              <div key={skillIndex} className="border-t border-gray-700 pt-4">
                <div 
                  className="flex justify-between items-start cursor-pointer"
                  onClick={() => toggleSkill(skill.name)}
                >
                  <h4 className="text-lg font-medium text-off-white">{skill.name}</h4>
                  <span className="text-sm bg-burgundy-dark text-white px-2 py-1 rounded">
                    {expandedSkill === skill.name ? 'Hide Details' : 'Show Details'}
                  </span>
                </div>
                
                {expandedSkill === skill.name && (
                  <div className="mt-4 grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="bg-gray-800 rounded-lg p-4">
                      <h5 className="text-sm font-medium text-burgundy mb-3">Core Strengths</h5>
                      <div className="flex flex-wrap gap-2">
                        {skill.strengths.map((strength, i) => (
                          <span 
                            key={i} 
                            className="px-2 py-1 text-xs bg-gray-700 text-gray-300 rounded-md"
                          >
                            {strength}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="bg-gray-800 rounded-lg p-4">
                      <h5 className="text-sm font-medium text-burgundy mb-3">AI Applications</h5>
                      <ul className="list-disc list-inside text-sm text-gray-300 space-y-2">
                        {skill.aiApplications.map((application, i) => (
                          <li key={i}>{application}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FoundationSkills; 