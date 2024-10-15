import React from 'react';

interface Skill {
  name: string;
  score: number;
}

interface SkillsVisualizationProps {
  skills: Skill[];
}

const SkillsVisualization: React.FC<SkillsVisualizationProps> = ({ skills }) => {
  return (
    <div>
      {skills.map(skill => (
        <div key={skill.name} className="mb-2">
          <div className="flex justify-between mb-1">
            <span className="text-sm font-medium text-off-white">{skill.name}</span>
          </div>
          <div className="w-full bg-dark-gray rounded-full h-2.5">
            <div 
              className="bg-burgundy h-2.5 rounded-full" 
              style={{ width: `${(skill.score / 5) * 100}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsVisualization;