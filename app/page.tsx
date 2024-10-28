'use client';

import ExperienceSection from '@/components/experience/ExperienceSection';
import experiencesData from '../data/experiences.json';
import SkillsSection from '@/components/skills/SkillsSection';
import skillsData from '../data/skills.json';

export default function HomeContent() {
  const { skills } = skillsData;

  const professionalAreas = [
    {
      id: 'startup-strategy',
      title: 'Startup Strategy & Pattern Recognition',
      experiences: experiencesData.professionalAreas.find(area => area.id === 'startup-strategy')?.experiences || [],
      skills: experiencesData.professionalAreas.find(area => area.id === 'startup-strategy')?.skills || [],
    },
    {
      id: 'wealth-building',
      title: 'Systematic Wealth Building',
      experiences: experiencesData.professionalAreas.find(area => area.id === 'wealth-building')?.experiences || [],
      skills: experiencesData.professionalAreas.find(area => area.id === 'wealth-building')?.skills || [],
    },
    {
      id: 'digital-creation',
      title: 'Digital Creation & Automation',
      experiences: experiencesData.professionalAreas.find(area => area.id === 'digital-creation')?.experiences || [],
      skills: experiencesData.professionalAreas.find(area => area.id === 'digital-creation')?.skills || [],
    }
  ];

  return (
    <main>
      <section id="skills" className="mt-16">
        <h2 className="text-3xl font-bold mb-4 heading">Skills Overview</h2>
        <SkillsSection data={skillsData} />
      </section>
      
      <section id="experiences" className="mt-16">
        <h2 className="text-3xl font-bold mb-4 heading">Professional Experience</h2>
        <ExperienceSection areas={professionalAreas} />
      </section>
    </main>
  );
}
