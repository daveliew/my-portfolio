// Laboratory experiment types for Voice UI, AI Agents, and Sustainability pillars

export interface LabExperiment {
  title: string;
  description: string;
  status: string;
  tools?: string[];
  validated?: string[];
  exploring?: string[];
}

export interface VoicePillar {
  pillar: string;
  tagline: string;
  status: string;
  experiments: LabExperiment[];
  capabilities: string[];
  learnings: string[];
  thesis: string;
}

export interface AgentPillar {
  pillar: string;
  tagline: string;
  status: string;
  experiments: LabExperiment[];
  capabilities: string[];
  learnings: string[];
  thesis: string;
}

export interface SustainabilityPillar {
  pillar: string;
  status: string;
  tagline: string;
  summary: string;
  watchingAreas: string[];
  keyInsights: {
    title: string;
    description: string;
  }[];
  futureExploration: string;
}
