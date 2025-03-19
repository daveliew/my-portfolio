export interface PhaseOverview {
  name: string;
  description: string;
  status: string;
  completionPercentage: number;
}

export interface FoundationSkill {
  name: string;
  strengths: string[];
  aiApplications: string[];
}

export interface FoundationCategory {
  name: string;
  description: string;
  skills: FoundationSkill[];
}

export interface SkillDetails {
  name: string;
  proficiency: number;
  description: string;
  keyLearnings: string[];
  completedDate?: string;
  inProgress?: boolean;
  foundationSkills?: string[];
}

export interface SkillCategory {
  category: string;
  skills: SkillDetails[];
}

export interface CombinedCapability {
  name: string;
  description: string;
  level: number;
  foundation: string[];
  applications: string[];
}

export interface Milestone {
  milestone: string;
  phase: string;
  targetDate: string;
  description: string;
  requiredSkills: string[];
  status: string;
  completionPercentage: number;
  foundationSkillsUtilized?: string[];
}

export interface CaseStudy {
  title: string;
  date: string;
  phase: string;
  description: string;
  outcomes: string[];
  technologies: string[];
  foundationSkillsApplied?: string[];
}

export interface AIJourney {
  title: string;
  description: string;
  currentPhase: string;
  phasesOverview: PhaseOverview[];
  foundationSkills: FoundationCategory[];
  skillsMap: SkillCategory[];
  combinedCapabilities: CombinedCapability[];
  roadmap: Milestone[];
  casestudies: CaseStudy[];
}

export interface AIJourneyData {
  journey: AIJourney;
} 