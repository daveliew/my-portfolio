import type { Metadata } from 'next';
import AboutContent from './AboutContent';

export const metadata: Metadata = {
  title: 'About',
  description: 'AI Engineer & Builder with 10+ years building ventures from 0→1. Ex-Meta. Implementing human-AI collaboration systems and Context Engineering frameworks.',
  keywords: 'David Liew, AI engineer, context engineering, human-AI collaboration, Meta, Singapore, full-stack developer',
  openGraph: {
    title: 'About David Liew - AI Engineer & Builder',
    description: 'AI Engineer with 10+ years building ventures. Ex-Meta. Implementing human-AI collaboration systems.',
    type: 'profile',
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
