import type { Metadata } from 'next';
import TechnicalLeadershipContent from './TechnicalLeadershipContent';

export const metadata: Metadata = {
  title: 'Technical Leadership Path',
  description: 'Context Engineering validated across 3 client projects. Learn technical leadership patterns for AI-augmented development workflows.',
  keywords: 'technical leadership, Context Engineering, AI workflow, client projects, technical patterns, AI development',
  openGraph: {
    title: 'Technical Leadership - Context Engineering Validated',
    description: 'Context Engineering patterns validated across real client projects.',
  },
};

export default function TechnicalLeadershipPage() {
  return <TechnicalLeadershipContent />;
}
