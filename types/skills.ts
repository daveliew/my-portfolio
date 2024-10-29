export interface Skill {
  name: string;
  subskills: Record<string, number | undefined>;
  description?: string;
}

export interface SkillsData {
  skills: Skill[];
}

export interface SkillLevel {
  score: number;
  evidence: string;
  growth_path: string;
}

export interface SkillsChartProps {
  skills: Skill[];
  onSkillClick: (skill: Skill) => void;
  selectedSkill?: Skill | null;
}

export interface ChartDataPoint {
  name: string;
  value: number;
  originalSkill: Skill;
}

export interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{
    value: number;
    payload: ChartDataPoint;
  }>;
}

// Technical background section
export interface TechnicalBackground {
  education: {
    name: string;
    focus: string;
    skills: string[];
  };
  keyExperiences: {
    company: string;
    role: string;
    technicalContributions: string[];
  }[];
}

// AI capabilities section
export interface AICapabilities {
  currentStrengths: {
    promptEngineering: {
      score: number;
      evidence: string[];
    };
    toolIntegration: {
      score: number;
      evidence: string[];
    };
  };
  developmentFocus: {
    immediate: string[];
    growth: string[];
  };
}

// Advanced capabilities section
export interface AdvancedCapability {
  name: string;
  score: number;
  intersection: string[];
  evidence: {
    description: string;
    examples: string[];
  };
}

// Unique value proposition section
export interface UniqueValueProposition {
  corePillars: {
    name: string;
    description: string;
  }[];
  emergingStrengths: {
    name: string;
    description: string;
    growthPotential: string;
  }[];
} 