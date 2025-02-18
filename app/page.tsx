'use client';

import ExperienceSection from '@/components/experience/ExperienceSection';
import experiencesData from '../data/experiences.json';
import SkillsSection from '@/components/skills/SkillsSection';
import skillsData from '@/data/skills.json';
import { SkillsData } from '@/types/skills';

// Define types for the raw data structure
interface RawSkill {
  name: string;
  subskills: Record<string, number | undefined>;
}

interface RawSkillsData {
  skills: RawSkill[];
}

// Helper function to clean and validate skills data
function cleanSkillsData(rawData: RawSkillsData): SkillsData {
  return {
    skills: rawData.skills.map((skill) => ({
      name: skill.name,
      subskills: Object.fromEntries(
        Object.entries(skill.subskills)
          .filter((entry): entry is [string, number] => 
            typeof entry[1] === 'number'
          )
      )
    }))
  };
}

// Use the cleaned data
const typedSkillsData = cleanSkillsData(skillsData);

export default function HomeContent() {
  return (
    <main>
      <section id="skills" className="mt-16 scroll-margin"> 
        <SkillsSection data={typedSkillsData.skills} /> 
      </section>
      
      <section id="experience" className="mt-16 scroll-margin">
        <ExperienceSection areas={experiencesData.professionalAreas} /> 
      </section>
    </main>
  );
}
