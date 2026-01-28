import type { Metadata } from 'next';
import TeachingContent from './TeachingContent';

export const metadata: Metadata = {
  title: 'Teaching - Workshops & Talks',
  description: 'AI workshops and talks by David Liew. Vibe coding, context engineering, and building with AI. Available for corporate training and educational institutions.',
  keywords: 'AI workshop singapore, vibe coding workshop, AI training, context engineering, corporate AI training',
  openGraph: {
    title: 'Teaching - AI Workshops & Talks',
    description: 'Learn to build with AI through hands-on workshops and talks.',
  },
};

export default function TeachingPage() {
  return <TeachingContent />;
}
