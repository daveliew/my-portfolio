import type { Metadata } from 'next';
import WhyAIContent from './WhyAIContent';

export const metadata: Metadata = {
  title: 'Why AI',
  description: 'Understanding the AI S-curve and why now is the critical inflection point. Coatue research framework for AI adoption phases from infrastructure to physical AI.',
  keywords: 'AI adoption, S-curve, Coatue framework, AI infrastructure, Edge AI, AI applications, Physical AI, technology adoption',
  openGraph: {
    title: 'Why AI - Understanding the S-Curve',
    description: 'We are at a critical inflection point in AI adoption. Learn the phases from infrastructure to physical AI.',
  },
};

export default function WhyAIPage() {
  return <WhyAIContent />;
}
