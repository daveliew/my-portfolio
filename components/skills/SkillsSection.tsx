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
    <section className="w-full bg-[var(--background-secondary)] pt-12 md:pt-16 pb-4 md:pb-8">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-[var(--text-primary)]">
          Skills Overview
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="min-h-[300px] md:min-h-[400px]">
            <SkillsChart 
              skills={data}
              onSkillClick={handleSkillClick}
              selectedSkill={selectedSkill}
            />
          </div>
          {selectedSkill && (
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-[var(--text-primary)] md:hidden">
                {selectedSkill.name}
              </h3>
              <div className="h-[300px] md:h-[400px]">
                <SkillDetails skill={selectedSkill} />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
