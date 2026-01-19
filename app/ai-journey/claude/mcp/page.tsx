import type { Metadata } from 'next';
import MCPContent from './MCPContent';

export const metadata: Metadata = {
  title: 'Model Context Protocol (MCP)',
  description: 'Universal AI integration standard for connecting Claude to databases, filesystems, and APIs. Learn MCP composition patterns and server setup.',
  keywords: 'MCP, Model Context Protocol, AI integration, Claude tools, Supabase MCP, filesystem MCP, API integration, AI automation',
  openGraph: {
    title: 'Model Context Protocol (MCP) - Universal AI Integration',
    description: 'Connect Claude to your tools with MCP. Database access, filesystem operations, and API integration in one standard.',
  },
};

export default function MCPPage() {
  return <MCPContent />;
}
