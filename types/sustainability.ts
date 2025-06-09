export interface SustainabilityProject {
  title: string;
  description: string;
  status: string;
  image: string;
}

export interface KeyLearning {
  title: string;
  description: string;
}

export interface SustainabilityData {
  mission: string;
  vision: string;
  currentProjects: SustainabilityProject[];
  keyLearnings: KeyLearning[];
  nextSteps: string[];
}