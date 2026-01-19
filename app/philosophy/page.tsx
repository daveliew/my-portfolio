import type { Metadata } from 'next';
import PhilosophyContent from './PhilosophyContent';

export const metadata: Metadata = {
  title: 'Philosophy',
  description: 'The Fitzgerald Principle: First-rate intelligence through productive tensions. My operating system for pioneering human-AI collaboration.',
  keywords: 'Fitzgerald Principle, human-AI collaboration, philosophy, productive tensions, complementarity, AI ethics',
  openGraph: {
    title: 'The Fitzgerald Principle - Philosophy',
    description: 'First-rate intelligence through productive tensions. My operating system for human-AI collaboration.',
  },
};

export default function PhilosophyPage() {
  return <PhilosophyContent />;
}
