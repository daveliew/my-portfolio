export interface Experience {
  role: string;
  company?: string;
  type?: string;
  period: string;
  highlights: string[];
  keySkills: string[];
}

export interface ProfessionalArea {
  id: string;
  title: string;
  description: string;
  experiences: Experience[];
  skills: any;
}

export interface ExperienceSectionProps {
  areas: {
    id: string;
    title: string;
    experiences: Experience[];
    skills: any;
  }[];
} 