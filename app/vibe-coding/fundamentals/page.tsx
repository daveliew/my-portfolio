import type { Metadata } from 'next';
import FundamentalsContent from './FundamentalsContent';

export const metadata: Metadata = {
  title: 'Web Fundamentals - The Only 3 Concepts You Need | David Liew',
  description: 'Master Events, State, and Conditionals through an interactive traffic light demo. Understand why your AI-generated code works.',
  keywords: ['web fundamentals', 'events', 'state', 'conditionals', 'vibe coding', 'javascript basics', 'interactive demo'],
  openGraph: {
    title: 'Web Fundamentals - The Only 3 Concepts You Need',
    description: 'Master Events, State, and Conditionals through an interactive traffic light demo.',
    type: 'article',
  },
};

export default function FundamentalsPage() {
  return <FundamentalsContent />;
}
