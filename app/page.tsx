'use client';

import ExperienceSection from '@/components/experience/ExperienceSection';
import experiencesData from '../data/experiences.json';
import SkillsSection from '@/components/skills/SkillsSection';
import skillsData from '../data/skills.json';

export default function HomeContent() {
  return (
    <main>
      <section id="skills" className="mt-16">
        <h2 className="text-3xl font-bold mb-4 heading">Skills Overview</h2>
        <SkillsSection data={skillsData.skills} /> 
      </section>
      
      <section id="experiences" className="mt-16">
        <ExperienceSection areas={experiencesData.professionalAreas} /> 
      </section>
    </main>
  );
}
