import React, { useState } from 'react';
import { SkillCategory, SkillDetails } from '@/types/ai-journey';

interface SkillsMatrixProps {
  skillsMap: SkillCategory[];
}

const SkillsMatrix: React.FC<SkillsMatrixProps> = ({ skillsMap }) => {
  const [expandedSkill, setExpandedSkill] = useState<string | null>(null);

  const toggleSkill = (skillName: string) => {
    if (expandedSkill === skillName) {
      setExpandedSkill(null);
    } else {
      setExpandedSkill(skillName);
    }
  };

  const renderProficiencyStars = (proficiency: number) => {
    return (
      <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-4 h-4 ${
              i < proficiency ? 'text-yellow-500' : 'text-gray-600'
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <div className="space-y-6">
      {skillsMap.map((category, categoryIndex) => (
        <div key={categoryIndex} className="bg-dark-gray rounded-lg p-4 shadow-md">
          <h3 className="text-xl font-semibold text-burgundy mb-3">{category.category}</h3>
          <div className="space-y-4">
            {category.skills.map((skill, skillIndex) => (
              <div key={skillIndex} className="border-b border-gray-700 pb-4 last:border-0 last:pb-0">
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleSkill(skill.name)}
                >
                  <div>
                    <h4 className="text-lg font-medium text-off-white">{skill.name}</h4>
                    <p className="text-sm text-gray-400">{skill.description}</p>
                  </div>
                  <div className="flex flex-col items-end">
                    {renderProficiencyStars(skill.proficiency)}
                    {skill.inProgress ? (
                      <span className="text-xs bg-blue-600 text-white px-2 py-1 rounded mt-2">
                        In Progress
                      </span>
                    ) : skill.completedDate ? (
                      <span className="text-xs text-gray-400 mt-2">
                        Completed: {new Date(skill.completedDate).toLocaleDateString()}
                      </span>
                    ) : null}
                  </div>
                </div>

                {expandedSkill === skill.name && (
                  <div className="mt-4 pl-4 border-l-2 border-burgundy-light">
                    {skill.foundationSkills && skill.foundationSkills.length > 0 && (
                      <div className="mb-3">
                        <h5 className="text-sm font-medium text-off-white mb-2">Foundation Skills Applied:</h5>
                        <div className="flex flex-wrap gap-2 mb-3">
                          {skill.foundationSkills.map((foundationSkill, i) => (
                            <span 
                              key={i}
                              className="px-2 py-1 text-xs bg-burgundy-dark text-white rounded-md"
                            >
                              {foundationSkill}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    <h5 className="text-sm font-medium text-off-white mb-2">Key Learnings:</h5>
                    <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
                      {skill.keyLearnings.map((learning, learningIndex) => (
                        <li key={learningIndex}>{learning}</li>
                      ))}
                    </ul>
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

export default SkillsMatrix; 