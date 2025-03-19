import React from 'react';

interface SkillCategory {
  category: string;
  skills: Array<{
    name: string;
    description: string;
    relatedTechnologies?: string[];
  }>;
}

interface SkillsMatrixProps {
  skillsMap: SkillCategory[];
}

const SkillsMatrix: React.FC<SkillsMatrixProps> = ({ skillsMap }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {skillsMap.map((categoryData) => (
        <div key={categoryData.category} className="bg-gray-800 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-off-white mb-4">{categoryData.category}</h3>
          <div className="space-y-4">
            {categoryData.skills.map((skill, index) => (
              <div key={index} className="border-l-2 border-burgundy-dark pl-4">
                <h4 className="text-burgundy font-medium mb-2">{skill.name}</h4>
                <p className="text-gray-300 text-sm mb-3">{skill.description}</p>
                <div className="flex flex-wrap gap-2">
                  {skill.relatedTechnologies?.map((tech, idx) => (
                    <span key={idx} className="px-2 py-1 text-xs bg-gray-700 text-gray-300 rounded-md">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsMatrix; 