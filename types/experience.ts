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
  skills: string[];
}

export interface ExperienceSectionProps {
  areas: ProfessionalArea[];
} 