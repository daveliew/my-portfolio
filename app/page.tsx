'use client';

import { useState } from 'react';
import ExperienceSection from '@/components/experience/ExperienceSection';
import SkillsChart from '@/components/skills/SkillsChart';
import SkillDetails from '@/components/skills/SkillDetails';
import experiencesData from '../data/experiences.json';

export default function HomeContent() {
  const [selectedSkill, setSelectedSkill] = useState(null);

  const skills = [
    { name: "Digital Marketing", score: 4, subskills: [
      { name: 'Content Marketing', score: 4 },
      { name: 'SEO', score: 3 },
      { name: 'Social Media Marketing', score: 4 },
      { name: 'Email Marketing', score: 3 },
    ]},
    { name: "Business Operations", score: 4, subskills: [
      { name: 'Process Optimization', score: 4 },
      { name: 'Team Management', score: 4 },
      { name: 'Strategic Planning', score: 3 },
      { name: 'Resource Allocation', score: 4 },
    ]},
    { name: "Sales", score: 3, subskills: [
      { name: 'Lead Generation', score: 3 },
      { name: 'Negotiation', score: 3 },
      { name: 'Client Relationship Management', score: 3 },
      { name: 'Sales Strategy', score: 3 },
    ]},
    { name: "Project Management", score: 4, subskills: [
      { name: 'Agile Methodologies', score: 4 },
      { name: 'Risk Management', score: 4 },
      { name: 'Stakeholder Communication', score: 4 },
      { name: 'Resource Planning', score: 4 },
    ]},
    { name: "Data Analysis", score: 5, subskills: [
      { name: 'Statistical Analysis', score: 5 },
      { name: 'Data Visualization', score: 5 },
      { name: 'SQL', score: 5 },
      { name: 'Python', score: 5 },
    ]},
    { name: "Web Development", score: 4, subskills: [
      { name: 'Frontend (React, Next.js)', score: 4 },
      { name: 'Backend (Node.js, Express)', score: 4 },
      { name: 'Database Design', score: 4 },
      { name: 'API Development', score: 4 },
    ]},
  ];

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
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/2">
            <SkillsChart 
              skills={skills} 
              onSkillClick={(skill) => setSelectedSkill(skill)}
            />
          </div>
          <div className="w-full md:w-1/2">
            {selectedSkill ? (
              <SkillDetails 
                name={selectedSkill.name} 
                subskills={selectedSkill.subskills} 
              />
            ) : (
              <p>Click on a skill to see more details</p>
            )}
          </div>
        </div>
      </section>
      
      <section id="experiences" className="mt-16">
        <h2 className="text-3xl font-bold mb-4 heading">Professional Experience</h2>
        <ExperienceSection areas={professionalAreas} />
      </section>
    </main>
  );
}
