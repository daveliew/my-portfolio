import type { Metadata } from 'next';
import ContextEngineeringContent from './ContextEngineeringContent';

export const metadata: Metadata = {
  title: 'Context Engineering',
  description: 'The real skill isn\'t prompting—it\'s architecting what AI knows before it reasons. Learn CLAUDE.md files, Skills, Hooks, and Archetypes.',
  keywords: 'Context Engineering, CLAUDE.md, AI context, prompt engineering, MCP, Model Context Protocol, AI skills',
  openGraph: {
    title: 'Context Engineering - Architecting AI Understanding',
    description: 'The real skill isn\'t prompting—it\'s architecting what AI knows before it reasons.',
  },
};

export default function ContextEngineeringPage() {
  return <ContextEngineeringContent />;
}
