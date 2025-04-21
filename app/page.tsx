'use client';

import React, { useEffect } from 'react';
import ExperienceSection from '@/components/experience/ExperienceSection';
import experiencesData from '../data/experiences.json';
import SkillsSection from '@/components/skills/SkillsSection';
import skillsData from '@/data/skills.json';
import { SkillsData } from '@/types/skills';
import ImpactfulStatement from '@/components/common/ImpactfulStatement';
import PortfolioSummary from '@/components/common/PortfolioSummary';

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
  useEffect(() => {
    // Handle initial page load with hash in URL
    if (typeof window !== 'undefined') {
      // Short timeout to ensure the page is fully loaded
      setTimeout(() => {
        const hash = window.location.hash;
        if (hash) {
          const elementId = hash.substring(1); // Remove the # character
          const element = document.getElementById(elementId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }, 100);
    }
  }, []);

  return (
    <div className="max-w-4xl mx-auto">
      <ImpactfulStatement />
      <PortfolioSummary className="mt-8 md:mt-12" />

      <main>
        <section id="skills" className="mt-8 scroll-mt-24 md:scroll-mt-32"> 
          <SkillsSection data={typedSkillsData.skills} /> 
        </section>
        
        <section id="experience" className="mt-8 scroll-mt-24 md:scroll-mt-32">
          <ExperienceSection areas={experiencesData.professionalAreas} /> 
        </section>
      </main>
    </div>
  );
}
