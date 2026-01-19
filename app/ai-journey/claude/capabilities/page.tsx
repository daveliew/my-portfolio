import type { Metadata } from 'next';
import CapabilitiesContent from './CapabilitiesContent';

export const metadata: Metadata = {
  title: 'Claude Capabilities Reference',
  description: 'Quick reference for Claude capabilities: Vision, Computer Use, Developer Console, and Cookbook with official documentation links.',
  keywords: 'Claude Vision, Computer Use, Anthropic Console, Claude Cookbook, Claude capabilities, AI capabilities, image analysis',
  openGraph: {
    title: 'Claude Capabilities Reference - Vision, Computer Use & More',
    description: 'Quick reference for Claude capabilities with links to official Anthropic documentation.',
  },
};

export default function CapabilitiesPage() {
  return <CapabilitiesContent />;
}
