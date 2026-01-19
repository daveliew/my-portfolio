import type { Metadata } from 'next';
import ClaudeMdContent from './ClaudeMdContent';

export const metadata: Metadata = {
  title: 'CLAUDE.md Files',
  description: 'Give Claude persistent memory about your project. Learn how to write effective CLAUDE.md files for better AI collaboration with memory triggers and project context.',
  keywords: 'CLAUDE.md, Claude Code, AI memory, project context, Context Engineering, AI collaboration, memory triggers',
  openGraph: {
    title: 'CLAUDE.md Files - Persistent AI Memory',
    description: 'Give Claude persistent memory about your project with CLAUDE.md files. Templates and best practices included.',
  },
};

export default function ClaudeMdPage() {
  return <ClaudeMdContent />;
}
