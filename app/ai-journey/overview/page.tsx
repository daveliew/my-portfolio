import type { Metadata } from 'next';
import OverviewContent from './OverviewContent';

export const metadata: Metadata = {
  title: 'Learn AI Your Way',
  description: 'Start building with AI today—no coding required. Two paths: beginners start with Vibe Coding (30 min to first project), technical professionals fast-track deeper.',
  keywords: 'learn AI, AI for beginners, no-code AI, AI learning path, vibe coding, AI skills, practical AI',
  openGraph: {
    title: 'Learn AI Your Way - Start Building Today',
    description: 'No coding required to start. Build your first AI project in 30 minutes.',
  },
};

export default function LearningOverviewPage() {
  return <OverviewContent />;
}
