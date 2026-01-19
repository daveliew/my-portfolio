import type { Metadata } from 'next';
import VibeCodingContent from './VibeCodingContent';

export const metadata: Metadata = {
  title: 'Vibe Coding',
  description: 'Build your professional brand without writing code. Describe your vision, AI handles the implementation. Entry-level context engineering for beginners.',
  keywords: 'vibe coding, no-code, AI website builder, v0.dev, context engineering, beginner AI, personal branding',
  openGraph: {
    title: 'Vibe Coding - Build Without Code',
    description: 'Describe your vision in plain English, AI builds your professional brand.',
  },
};

export default function VibeCodingPage() {
  return <VibeCodingContent />;
}
