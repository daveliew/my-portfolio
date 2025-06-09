export interface VirtuousCyclePhase {
  title: string;
  description: string;
  examples: string[];
  color: 'time' | 'knowledge' | 'wealth';
}

export interface VirtuousCycle {
  title: string;
  subtitle: string;
  description: string;
  phases: VirtuousCyclePhase[];
}

export interface PersonalData {
  virtuousCycle: VirtuousCycle;
}