// Theme system aligned with the philosophy of human wisdom + AI automation
// Each color category represents one of the three pillars of the life system

export const themeColors = {
  border: {
    time: 'border-[var(--accent-primary)]',
    knowledge: 'border-[var(--accent-secondary)]',
    wealth: 'border-[var(--accent-tertiary)]'
  },
  text: {
    time: 'text-[var(--accent-primary)]',
    knowledge: 'text-[var(--accent-secondary)]',
    wealth: 'text-[var(--accent-tertiary)]'
  },
  background: {
    time: 'bg-[var(--accent-primary)]/10',
    knowledge: 'bg-[var(--accent-secondary)]/10',
    wealth: 'bg-[var(--accent-tertiary)]/10'
  },
  bar: {
    time: 'bg-[var(--accent-primary)]',
    knowledge: 'bg-[var(--accent-secondary)]',
    wealth: 'bg-[var(--accent-tertiary)]'
  }
} as const;

// Extended theme utilities for common UI patterns
export const themeUtilities = {
  // Card variants for each pillar
  cards: {
    time: `card border-2 ${themeColors.border.time} ${themeColors.background.time}`,
    knowledge: `card border-2 ${themeColors.border.knowledge} ${themeColors.background.knowledge}`,
    wealth: `card border-2 ${themeColors.border.wealth} ${themeColors.background.wealth}`,
  },
  
  // Button variants
  buttons: {
    primary: 'btn bg-[var(--accent-primary)] hover:bg-[var(--accent-secondary)]',
    secondary: 'btn border border-[var(--accent-primary)] text-[var(--accent-primary)] bg-transparent hover:bg-[var(--accent-primary)]/10',
    tertiary: 'btn bg-[var(--accent-tertiary)] text-[var(--background-primary)] hover:bg-[var(--accent-tertiary)]/90'
  },

  // Status indicators
  status: {
    active: themeColors.text.time,
    learning: themeColors.text.knowledge,
    completed: themeColors.text.wealth,
  }
} as const;

// Color meanings for AI understanding
export const colorMeanings = {
  time: {
    color: 'Hot Pink (#FF0081)',
    represents: 'Human agency, energy, urgency, action-oriented tasks',
    usage: 'Deadlines, energy metrics, time-sensitive content, user actions'
  },
  knowledge: {
    color: 'Teal (#0CC0DF)',
    represents: 'Growth, clarity, AI capabilities, learning, precision',
    usage: 'Educational content, AI features, insights, data visualization'
  },
  wealth: {
    color: 'Beer Gold (#F8B400)',
    represents: 'Achievement, prosperity, tangible outcomes, legacy',
    usage: 'Financial content, completed projects, success metrics, rewards'
  }
} as const;

// Type-safe way to access theme colors
export type ThemeColorCategory = keyof typeof themeColors;
export type ThemeColorKey = 'time' | 'knowledge' | 'wealth';
export type ThemeUtilityCategory = keyof typeof themeUtilities;

// Helper function for AI/programmatic color selection
export function getThemeColor(category: ThemeColorCategory, pillar: ThemeColorKey): string {
  return themeColors[category][pillar];
}

// Helper function to get semantic meaning of colors
export function getColorMeaning(pillar: ThemeColorKey) {
  return colorMeanings[pillar];
}

// Validation helper for ensuring consistent theming
export function validateThemeUsage(pillar: ThemeColorKey, context: string): boolean {
  // Simple context validation - can be expanded
  const timeContexts = ['deadline', 'action', 'energy', 'time', 'human', 'agency'];
  const knowledgeContexts = ['learning', 'ai', 'growth', 'insight', 'education', 'data'];
  const wealthContexts = ['achievement', 'financial', 'success', 'completion', 'legacy'];
  
  switch (pillar) {
    case 'time':
      return timeContexts.some(ctx => context.toLowerCase().includes(ctx));
    case 'knowledge':
      return knowledgeContexts.some(ctx => context.toLowerCase().includes(ctx));
    case 'wealth':
      return wealthContexts.some(ctx => context.toLowerCase().includes(ctx));
    default:
      return false;
  }
} 