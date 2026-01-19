import type { Metadata } from 'next';
import PortfolioContent from './PortfolioContent';

export const metadata: Metadata = {
  title: 'AI Portfolio',
  description: 'AI project case studies: Voice AI hackathons, client implementations, and exploration projects demonstrating practical AI application.',
  keywords: 'AI portfolio, AI case studies, Voice AI, AI projects, hackathon projects, client AI work, AI implementation',
  openGraph: {
    title: 'AI Portfolio - Case Studies & Projects',
    description: 'Real-world AI implementations from hackathons to client projects.',
  },
};

export default function AIPortfolioPage() {
  return <PortfolioContent />;
}
