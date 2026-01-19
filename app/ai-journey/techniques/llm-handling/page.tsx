import type { Metadata } from 'next';
import LLMHandlingContent from './LLMHandlingContent';

export const metadata: Metadata = {
  title: 'LLM Handling & Error Management',
  description: 'Master LLM integration patterns: error handling, retries, rate limiting, and graceful degradation for production AI applications.',
  keywords: 'LLM handling, error management, AI integration, rate limiting, retries, production AI, Claude API, LLM patterns',
  openGraph: {
    title: 'LLM Handling - Production AI Patterns',
    description: 'Build robust AI applications with proper error handling and graceful degradation.',
  },
};

export default function LLMHandlingPage() {
  return <LLMHandlingContent />;
}
