import type { Metadata } from 'next';
import AIJourneyContent from './AIJourneyContent';

export const metadata: Metadata = {
  title: 'AI Journey',
  description: 'Pioneering human-AI collaboration for the next generation. Learn Context Engineering, Claude mastery, and practical AI implementation frameworks.',
  keywords: 'AI learning, human-AI collaboration, Context Engineering, Claude, AI frameworks, prompt engineering, AI agents',
  openGraph: {
    title: 'AI Journey - Human-AI Collaboration',
    description: 'Pioneering human-AI collaboration. Learn Context Engineering, Claude mastery, and practical AI frameworks.',
  },
};

export default function AIJourneyPage() {
  return <AIJourneyContent />;
}
