// Skill Tree Navigation Types

export type DifficultyLevel = 'beginner' | 'intermediate' | 'advanced' | 'frontier';

export type BranchType =
  | 'root'
  | 'context-engineering'
  | 'claude-mastery'
  | 'techniques'
  | 'agents'
  | 'portfolio';

export interface SkillTreeNode {
  id: string;
  label: string;
  href: string;
  difficulty: DifficultyLevel;
  branch: BranchType;
  position: {
    x: number; // 0-100 percentage
    y: number; // 0-100 percentage
  };
  parentId?: string;
  description?: string;
}

export interface SkillTreeConnection {
  from: string; // node id
  to: string;   // node id
}

export interface SkillTreeData {
  nodes: SkillTreeNode[];
  connections: SkillTreeConnection[];
}

// Difficulty color mapping
export const difficultyColors: Record<DifficultyLevel, { bg: string; text: string; border: string }> = {
  beginner: {
    bg: 'bg-green-100 dark:bg-green-900/30',
    text: 'text-green-700 dark:text-green-400',
    border: 'border-green-500',
  },
  intermediate: {
    bg: 'bg-blue-100 dark:bg-blue-900/30',
    text: 'text-blue-700 dark:text-blue-400',
    border: 'border-blue-500',
  },
  advanced: {
    bg: 'bg-purple-100 dark:bg-purple-900/30',
    text: 'text-purple-700 dark:text-purple-400',
    border: 'border-purple-500',
  },
  frontier: {
    bg: 'bg-pink-100 dark:bg-pink-900/30',
    text: 'text-pink-700 dark:text-pink-400',
    border: 'border-pink-500',
  },
};

// Branch color mapping for connection gradients
export const branchColors: Record<BranchType, string> = {
  root: '#3B82F6',           // blue-500
  'context-engineering': '#10B981', // emerald-500
  'claude-mastery': '#8B5CF6',      // violet-500
  techniques: '#F59E0B',     // amber-500
  agents: '#EC4899',         // pink-500
  portfolio: '#06B6D4',      // cyan-500
};
