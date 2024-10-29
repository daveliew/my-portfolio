'use client';

import React, { useState } from 'react';
import { Skill } from '@/types/skills';
import SkillsChart from './SkillsChart';
import SkillDetails from './SkillDetails';

interface SkillsSectionProps {
  data: Skill[];
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ data }) => {
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(data[0] || null);

  const handleSkillClick = (skill: Skill) => {
    setSelectedSkill(skill);
  };

  return (
    <section className="py-16">
      <h2 className="text-4xl font-bold text-center mb-12 text-off-white">
        Skills Overview
      </h2>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="min-h-[500px]">
            <SkillsChart 
              skills={data}  // Pass data directly as skills
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
