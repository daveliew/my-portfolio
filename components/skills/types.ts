export interface Subskills {
    [key: string]: number;
  }
  
  export interface Skill {
    name: string;
    subskills: Subskills;
  }
  
  export interface SkillsData {
    skills: Skill[];
  }
  
  // If you need types for the advanced capabilities and other sections:
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
  
  export interface AdvancedCapability {
    name: string;
    score: number;
    intersection: string[];
    evidence: {
      description: string;
      examples: string[];
    };
  }
  
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
  
  export interface CompleteSkillsData extends SkillsData {
    technicalBackground: TechnicalBackground;
    aiCapabilities: AICapabilities;
    advancedCapabilities: AdvancedCapability[];
    uniqueValueProposition: UniqueValueProposition;
  }