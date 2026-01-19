import type { Metadata } from 'next';
import OverviewContent from './OverviewContent';

export const metadata: Metadata = {
  title: 'AI Learning Overview',
  description: 'Structured paths to develop practical AI skills: philosophy-driven learning approach with immediate value and long-term foundation building.',
  keywords: 'AI learning, AI skills, learning path, AI journey, practical AI, AI education, skill development',
  openGraph: {
    title: 'AI Learning Overview - Structured Skills Development',
    description: 'Develop practical AI skills with structured learning paths focused on immediate value.',
  },
};

export default function LearningOverviewPage() {
  return <OverviewContent />;
}
