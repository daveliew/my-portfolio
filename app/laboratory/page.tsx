import type { Metadata } from 'next';
import LaboratoryContent from './LaboratoryContent';

export const metadata: Metadata = {
  title: 'Laboratory',
  description: 'Innovation Laboratory: Voice AI, AI Agents, and Context Engineering experiments. Building expertise in public through hands-on exploration.',
  keywords: 'AI laboratory, Voice AI, ElevenLabs, AI agents, Context Engineering, Claude Code, innovation experiments',
  openGraph: {
    title: 'Innovation Laboratory - Voice AI, Agents & Context Engineering',
    description: 'Three streams reshaping human-AI collaboration: Voice interfaces, AI Agents, and Context Engineering.',
  },
};

export default function LaboratoryPage() {
  return <LaboratoryContent />;
}
