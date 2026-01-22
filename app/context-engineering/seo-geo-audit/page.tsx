import type { Metadata } from 'next';
import SeoGeoAuditContent from '@/components/content/SeoGeoAuditContent';

export const metadata: Metadata = {
  title: 'AI-Assisted SEO/GEO Auditing | Context Engineering',
  description: 'Learn how to use Claude Code with Firecrawl and Context7 MCP tools for continuous, research-backed SEO and GEO (Generative Engine Optimization) auditing.',
  keywords: 'AI SEO audit, GEO generative engine optimization, llms.txt best practices, AI discoverability, Claude Code SEO workflow, context engineering, MCP tools',
  openGraph: {
    title: 'AI-Assisted SEO/GEO Auditing: A Living Workflow',
    description: 'A framework for continuous, AI-powered SEO and GEO optimization using Claude Code, Firecrawl, and Context7.',
    type: 'article',
  },
  alternates: {
    canonical: 'https://daveliew.com/context-engineering/seo-geo-audit',
  },
};

export default function SeoGeoAuditPage() {
  return <SeoGeoAuditContent variant="context-engineering" />;
}
