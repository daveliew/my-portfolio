'use client';

import ExperienceSection from '@/components/experience/ExperienceSection';
import experiencesData from '../data/experiences.json';
import SkillsSection from '@/components/skills/SkillsSection';
import skillsData from '@/data/skills.json';
import { SkillsData } from '@/types/skills';

// Type assertion to ensure the JSON data matches the SkillsData interface
const typedSkillsData = skillsData as SkillsData;

export default function HomeContent() {
  return (
    <main>
      <section id="skills" className="mt-16"> 
        <SkillsSection data={typedSkillsData.skills} /> 
      </section>
      
      <section id="experience" className="mt-16">
        <ExperienceSection areas={experiencesData.professionalAreas} /> 
      </section>
    </main>
  );
}
