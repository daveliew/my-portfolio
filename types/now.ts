export interface FocusArea {
  title: string;
  description: string;
  system: string;
  progress: string;
}

export interface RoadmapItem {
  quarter: string;
  title: string;
  description: string;
  requiredSkills: string[];
  foundationSkills: string[];
  progress: number;
  status: string;
}

export interface RecentUpdate {
  date: string;
  title: string;
  description: string;
}

export interface NowData {
  focusAreas: FocusArea[];
  roadmap: RoadmapItem[];
  recentUpdates: RecentUpdate[];
  lastUpdated: string;
}