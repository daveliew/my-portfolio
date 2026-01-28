import type { Metadata } from 'next';
import HackathonsContent from './HackathonsContent';

export const metadata: Metadata = {
  title: 'Hackathons - Building in Public',
  description: 'Hackathon adventures and projects by David Liew. AI hackathons, rapid prototyping, and lessons learned from building under pressure.',
  keywords: 'AI hackathon singapore, hackathon projects, rapid prototyping, building in public',
  openGraph: {
    title: 'Hackathons - Building in Public',
    description: 'Adventures and lessons from hackathons and rapid building.',
  },
};

export default function HackathonsPage() {
  return <HackathonsContent />;
}
