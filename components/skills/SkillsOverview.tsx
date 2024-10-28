import React, { useState, useEffect } from 'react';
import SkillsChart from './SkillsChart';
import SkillDetails from './SkillDetails';
import { Skill } from './types';

interface SkillsOverviewProps {
  skills: Skill[];
}

const SkillsOverview: React.FC<SkillsOverviewProps> = ({ skills }) => {
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);

  useEffect(() => {
    // Try to find Pattern Recognition first, fallback to first skill
    const defaultSkill = skills.find(skill => skill.name === "Pattern Recognition") || skills[0];
    if (defaultSkill) {
      setSelectedSkill(defaultSkill);
    }
  }, [skills]);

  return (
    <section className="w-full bg-space-black text-off-white p-4">
      <h2 className="text-3xl font-bold mb-8 text-center">Skills Overview</h2>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/2">
          <SkillsChart 
            skills={skills} 
            onSkillClick={setSelectedSkill} 
            selectedSkill={selectedSkill}
          />
          <p className="text-sm text-center mt-4 text-off-white/80">
            (Click on a skill in the chart to see more details)
          </p>
        </div>
        <div className="w-full md:w-1/2">
          {selectedSkill && (
            <SkillDetails 
              skill={selectedSkill}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default SkillsOverview;
