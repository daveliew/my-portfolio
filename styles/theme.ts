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

// Type-safe way to access theme colors
export type ThemeColorCategory = keyof typeof themeColors;
export type ThemeColorKey = 'time' | 'knowledge' | 'wealth'; 