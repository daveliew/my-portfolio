'use client';

import React, { useState } from 'react';

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
  areas: ProfessionalArea | ProfessionalArea[];
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({ areas }) => {
  const areaArray = Array.isArray(areas) ? areas : [areas];

  return (
    <div>
      {areaArray.map((area) => (
        <CategorySection key={area.id} area={area} />
      ))}
    </div>
  );
};

const CategorySection: React.FC<{ area: ProfessionalArea }> = ({ area }) => {
  const [activeTab, setActiveTab] = useState(area.experiences?.[0]?.id || '');

  if (!area.experiences || area.experiences.length === 0) {
    return (
      <section className="my-8">
        <h2 className="text-2xl font-semibold mb-4">{area.title}</h2>
        <p>No experiences available for this area.</p>
      </section>
    );
  }

  return (
    <section className="my-8">
      <h2 className="text-2xl font-semibold mb-4">{area.title}</h2>
      
      <div className="mb-6">
        <h3 className="text-xl font-medium mb-2">Experiences</h3>
        <div className="flex mb-4">
          {area.experiences.map(exp => (
            <button
              key={exp.id}
              className={`px-4 py-2 mr-2 rounded-t-lg ${activeTab === exp.id ? 'bg-[var(--midnight-blue)] text-[var(--light-text)]' : 'bg-[var(--space-grey)] bg-opacity-10'}`}
              onClick={() => setActiveTab(exp.id)}
            >
              {exp.company}
            </button>
          ))}
        </div>
        {area.experiences.map(exp => (
          <div key={exp.id} className={`card ${activeTab === exp.id ? 'block' : 'hidden'}`}>
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
