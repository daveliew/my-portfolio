import React, { useState } from 'react';
import SkillsChart from './SkillsChart';
import SkillDetails from './SkillDetails';
import SkillTree from './SkillTree';

interface Skill {
  name: string;
  score: number;
  subskills: { name: string; score: number }[];
}

interface SkillsOverviewProps {
  skills: Skill[];
}

const SkillsOverview: React.FC<SkillsOverviewProps> = ({ skills }) => {
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);

  return (
    <div className="w-full bg-space-black text-off-white p-4">
      <h2 className="text-3xl font-bold mb-4">Skills Overview</h2>
      <p className="text-sm mb-4">Click on a skill in the chart to see more details</p>
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2">
          <SkillsChart skills={skills} onSkillClick={setSelectedSkill} />
        </div>
        <div className="w-full md:w-1/2">
          {selectedSkill ? (
            <SkillDetails name={selectedSkill.name} subskills={selectedSkill.subskills} />
          ) : (
            <p>Select a skill to see details</p>
          )}
        </div>
      </div>
      <SkillTree skills={skills.map(skill => ({ name: skill.name, subskills: skill.subskills.map(s => s.name) }))} />
    </div>
  );
};

export default SkillsOverview;

