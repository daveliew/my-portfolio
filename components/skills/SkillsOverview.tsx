import React, { useState, useEffect } from 'react';
import SkillsChart from './SkillsChart';
import SkillDetails from './SkillDetails';
import { Skill } from '../../types/skills';

interface SkillsOverviewProps {
  skills: Skill[];
}

const SkillsOverview: React.FC<SkillsOverviewProps> = ({ skills }) => {
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);

  useEffect(() => {
    // Preselect "Web Development" skill
    const webDevelopmentSkill = skills.find(skill => skill.name === "Web Development");
    if (webDevelopmentSkill) {
      setSelectedSkill(webDevelopmentSkill);
    }
  }, [skills]);

  return (
    <div className="w-full bg-space-black text-off-white p-4">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2">
          <SkillsChart 
            skills={skills} 
            onSkillClick={setSelectedSkill} 
            selectedSkill={selectedSkill}
          />
      <p className="text-sm mb-4">(Click on a skill in the chart to see more details)</p>
        </div>
        <div className="w-full md:w-1/2">
          {selectedSkill && (
            <SkillDetails name={selectedSkill.name} subskills={selectedSkill.subskills} />
          )}
        </div>
      </div>
    </div>
  );
};

export default SkillsOverview;
