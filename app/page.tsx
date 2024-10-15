'use client';

import ExperienceSection from '@/components/experience/ExperienceSection';
import experiencesData from '../data/experiences.json';
import skillsData from '../data/skills.json';
import SkillsOverview from '../components/skills/SkillsOverview';

export default function HomeContent() {
  const { skills } = skillsData;

  const professionalAreas = [
    {
      id: 'digital-marketing',
      title: 'Digital Marketing & Growth',
      experiences: experiencesData.professionalAreas.find(area => area.id === 'digital-marketing')?.experiences || [],
      skills: experiencesData.professionalAreas.find(area => area.id === 'digital-marketing')?.skills || [],
    },
    {
      id: 'startup-strategies',
      title: 'Startup Strategies & Operations',
      experiences: experiencesData.professionalAreas.find(area => area.id === 'startup-strategies')?.experiences || [],
      skills: experiencesData.professionalAreas.find(area => area.id === 'startup-strategies')?.skills || [],
    },
    {
      id: 'business-analysis',
      title: 'Business Analysis & Strategy',
      experiences: experiencesData.professionalAreas.find(area => area.id === 'business-analysis')?.experiences || [],
      skills: experiencesData.professionalAreas.find(area => area.id === 'business-analysis')?.skills || [],
    },
  ];

  return (
    <main>
      <section id="skills" className="mt-16">
        <h2 className="text-3xl font-bold mb-4 heading">Skills Overview</h2>
        <SkillsOverview skills={skills} />
      </section>
      
      <section id="experiences" className="mt-16">
        <h2 className="text-3xl font-bold mb-4 heading">Professional Experience</h2>
        <ExperienceSection areas={professionalAreas} />
      </section>
    </main>
  );
}
