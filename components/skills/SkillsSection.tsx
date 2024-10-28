import React from 'react';

interface Skill {
  name: string;
  score: number;
}

interface SkillsSectionProps {
  skills: {
    technical: Skill[];
    soft: Skill[];
  };
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ skills }) => {
  return (
    <section className="my-8">
      <h2 className="text-2xl font-semibold mb-4">Skills</h2>
      
      <div className="mb-6">
        <h3 className="text-xl font-medium mb-2">Technical Skills</h3>
        <ul className="list-disc list-inside">
          {skills.technical.map(skill => (
            <li key={skill.name}>
              {skill.name} - Proficiency: {skill.score}/5
            </li>
          ))}
        </ul>
      </div>
      
      <div>
        <h3 className="text-xl font-medium mb-2">Soft Skills</h3>
        <ul className="list-disc list-inside">
          {skills.soft.map(skill => (
            <li key={skill.name}>
              {skill.name} - Proficiency: {skill.score}/5
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default SkillsSection;

