import React from 'react';
import { SkillCard } from './SkillCard';
import { SkillLevel, SkillCategoryData } from './types';

interface SkillCategoryProps {
  category: string;
  data: SkillCategoryData;
}

const isNestedSkill = (skill: any): skill is Record<string, SkillLevel> => {
  return typeof skill === 'object' && !('score' in skill);
};

export const SkillCategory: React.FC<SkillCategoryProps> = ({ category, data }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h3 className="text-xl font-bold mb-4">{data.title}</h3>
      <div className="space-y-6">
        {Object.entries(data.skills).map(([skillName, skillData]) => (
          <div key={skillName} className="space-y-4">
            <h4 className="font-semibold capitalize">
              {skillName.replace('_', ' ')}
            </h4>
            {isNestedSkill(skillData) ? (
              <div className="grid gap-4">
                {Object.entries(skillData).map(([subSkill, subSkillData]) => (
                  <SkillCard
                    key={subSkill}
                    name={subSkill}
                    data={subSkillData as SkillLevel}
                  />
                ))}
              </div>
            ) : (
              <SkillCard name={skillName} data={skillData as SkillLevel} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
