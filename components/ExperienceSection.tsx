import React from 'react';

interface Skill {
  name: string;
  score: number;
}

interface Experience {
  id: string;
  role: string;
  company: string;
  highlight: string;
}

interface ProfessionalArea {
  id: string;
  title: string;
  experiences: Experience[];
  skills: Skill[];
}

interface ExperienceSectionProps {
  area: ProfessionalArea;
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({ area }) => {
  return (
    <section className="my-8">
      <h2 className="text-2xl font-semibold mb-4">{area.title}</h2>
      
      <div className="mb-6">
        <h3 className="text-xl font-medium mb-2">Experiences</h3>
        {area.experiences.map(exp => (
          <div key={exp.id} className="mb-4">
            <h4 className="font-medium">{exp.role} at {exp.company}</h4>
            <p>{exp.highlight}</p>
          </div>
        ))}
      </div>
      
      <div>
        <h3 className="text-xl font-medium mb-2">Skills</h3>
        <ul className="list-disc list-inside">
          {area.skills.map(skill => (
            <li key={skill.name}>
              {skill.name} - Proficiency: {skill.score}/5
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ExperienceSection;

