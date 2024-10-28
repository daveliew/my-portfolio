'use client';

import React, { useState } from 'react';
import { SkillsData, Skill } from './types';
import SkillsChart from './SkillsChart';
import SkillDetails from './SkillDetails';

interface SkillsSectionProps {
  data: SkillsData;
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ data }) => {
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(data.skills[0] || null);

  const handleSkillClick = (skill: Skill) => {
    setSelectedSkill(skill);
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="min-h-[500px]">
            <SkillsChart 
              skills={data.skills} 
              onSkillClick={handleSkillClick}
              selectedSkill={selectedSkill}
            />
          </div>
          {selectedSkill && (
            <div>
              <SkillDetails skill={selectedSkill} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
