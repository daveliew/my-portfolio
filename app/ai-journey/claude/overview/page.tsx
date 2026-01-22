import type { Metadata } from 'next';
import OverviewContent from './OverviewContent';

export const metadata: Metadata = {
  title: 'Claude Mastery',
  description: 'Comprehensive learning path for mastering Claude: Opus 4.5 capabilities, Claude Code 2.1, Extended Thinking, prompt caching, and Context Engineering.',
  keywords: 'Claude Mastery, Opus 4.5, Claude Code, Extended Thinking, prompt caching, Claude learning path, Anthropic AI, 2026',
  openGraph: {
    title: 'Claude Mastery - Comprehensive Learning Path',
    description: 'Master Claude capabilities from prompt engineering to autonomous coding with Claude Code.',
  },
};

export default function ClaudeMasteryPage() {
  return <OverviewContent />;
}
