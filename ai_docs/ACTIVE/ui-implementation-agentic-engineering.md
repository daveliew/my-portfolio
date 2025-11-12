# Agentic Engineering UI/Technical Implementation Plan (FINALIZED)

**Branch**: `feat-content-revamp-dDbWv`
**Status**: Technical Deep-Dive Complete → Ready for Execution
**Purpose**: UI components, routing, and technical infrastructure for Agentic Engineering blog series
**Last Updated**: 2025-01-11

---

## TECHNICAL DECISIONS (Finalized After Deep-Dive)

### Current State Findings

**MDX Status**: ❌ Not configured
- No MDX dependencies in `package.json`
- No `/mdx-components.tsx` file exists
- No existing MDX pages on site
- **Action Required**: Full MDX setup from scratch

**Syntax Highlighting**: ❌ Not implemented
- No Prism.js, Shiki, or highlight.js found
- Code blocks on technical pages use plain `<pre><code>` with basic styling
- **Decision**: Implement Shiki (VS Code quality, future-proof)

**Navigation Structure**: Current mega-menu has ~20+ items across 5 sections
- Getting Started, Learning Paths, Claude Features, AI Techniques, Living Lab
- **Action Required**: Consolidate to 12 items, 4 sections, add "Agentic Engineering"

**Design System**: Strong foundation
- Tailwind with custom theme colors via CSS variables
- Fitzgerald colors defined: `--color-time` (hot pink), `--color-knowledge` (teal), `--color-wealth` (beer gold)
- Existing components: Card, PageLayout, SubpageLayout, SectionHeader
- **Action**: Extend existing patterns for blog components

**Routing Pattern**: Standard Next.js 15 App Router
- No `/app/blog/` directory exists (needs creation)
- Dynamic routes use `[slug]` pattern
- Layouts use nested structure
- **Action**: Create blog routing from scratch

---

## IMPLEMENTATION STRATEGY

### Data-Driven Blog System

**Architecture**:
1. **Content Layer**: JSON metadata (`/data/blog-posts.json`) + MDX files
2. **Rendering Layer**: MDX with Shiki syntax highlighting
3. **Component Layer**: Reusable blog components extending existing design system
4. **Navigation**: Add "Agentic Engineering" to navbar mega-menu

**Why this approach**:
- Matches existing site pattern (data-driven portfolio, skills, experiences)
- Separates metadata (searchable, filterable) from content (easy authoring)
- Type-safe with TypeScript interfaces
- Flexible for future expansion (categories, tags, search)

---

## PHASE 1: MDX & Syntax Highlighting Setup

### 1.1 Install Dependencies

```bash
npm install @next/mdx @mdx-js/loader @mdx-js/react shiki gray-matter
npm install -D remark remark-gfm rehype-pretty-code @types/gray-matter
```

**Dependencies explained**:
- `@next/mdx` - Next.js MDX integration
- `@mdx-js/loader` + `@mdx-js/react` - MDX parsing and React rendering
- `shiki` - VS Code-quality syntax highlighting (better than Prism.js)
- `gray-matter` - YAML frontmatter parsing for metadata
- `remark-gfm` - GitHub-flavored markdown support (tables, strikethrough, task lists)
- `rehype-pretty-code` - Code block enhancement (line highlighting, filename display)

### 1.2 Update Next.js Configuration

**File**: `/next.config.mjs` (EDIT)

```javascript
import createMDX from '@next/mdx';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  pageExtensions: ['ts', 'tsx', 'md', 'mdx'], // Add MD/MDX support
  // ... existing config (experimental, images, etc.)
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [
      // Add GitHub-flavored markdown support
      ['remark-gfm', {}],
    ],
    rehypePlugins: [
      // Add code block enhancements
      ['rehype-pretty-code', {
        theme: 'github-dark', // VS Code theme
        onVisitLine(node) {
          // Prevent lines from collapsing in `display: grid` mode
          if (node.children.length === 0) {
            node.children = [{ type: 'text', value: ' ' }];
          }
        },
        onVisitHighlightedLine(node) {
          node.properties.className.push('highlighted');
        },
        onVisitHighlightedWord(node) {
          node.properties.className = ['word'];
        },
      }],
    ],
  },
});

export default withMDX(nextConfig);
```

### 1.3 Create MDX Components Wrapper

**File**: `/mdx-components.tsx` (NEW - root level)

Maps Markdown elements to custom React components:

```typescript
import type { MDXComponents } from 'mdx/types';
import { CodeBlock } from '@/components/blog/CodeBlock';
import { SectionHeader } from '@/components/common/SectionHeader';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Headings
    h1: (props) => <h1 className="text-4xl font-bold mb-6 text-[var(--color-time)]" {...props} />,
    h2: (props) => <SectionHeader level={2} {...props} />, // Reuse existing component
    h3: (props) => <h3 className="text-xl font-semibold mt-6 mb-3" {...props} />,

    // Paragraphs and lists
    p: (props) => <p className="mb-4 leading-relaxed" {...props} />,
    ul: (props) => <ul className="mb-4 pl-6 list-disc" {...props} />,
    ol: (props) => <ol className="mb-4 pl-6 list-decimal" {...props} />,
    li: (props) => <li className="mb-2" {...props} />,

    // Blockquotes
    blockquote: (props) => (
      <blockquote
        className="border-l-4 border-[var(--color-knowledge)] pl-4 py-2 my-4 italic bg-gray-50 dark:bg-gray-800"
        {...props}
      />
    ),

    // Code blocks
    pre: CodeBlock, // Custom component with Shiki highlighting
    code: (props) => {
      // Inline code (not in <pre>)
      if (!props.className) {
        return <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded text-sm font-mono" {...props} />;
      }
      // Block code (handled by <pre> wrapper)
      return <code {...props} />;
    },

    // Links
    a: (props) => (
      <a
        className="text-[var(--color-knowledge)] hover:text-[var(--color-time)] underline transition-colors"
        {...props}
      />
    ),

    // Horizontal rule
    hr: (props) => <hr className="my-8 border-gray-300 dark:border-gray-700" {...props} />,

    ...components,
  };
}
```

---

## PHASE 2: Data Structure & Type Definitions

### 2.1 Create Blog Post Metadata File

**File**: `/data/blog-posts.json` (NEW)

```json
{
  "series": {
    "agentic-engineering": {
      "title": "Agentic Engineering",
      "description": "A comprehensive guide to mastering AI orchestration and agentic systems",
      "totalPosts": 10,
      "estimatedReadTime": "2-3 hours total"
    }
  },
  "posts": [
    {
      "id": "evolution-of-agentic-ai",
      "title": "The Evolution of Agentic AI: From Prompts to Orchestration",
      "description": "Understanding the paradigm shift from ChatGPT 2023 to agentic orchestration in 2025. Agency > Intelligence.",
      "date": "2025-01-15",
      "readTime": "8 min",
      "category": "agentic-engineering",
      "author": "Dave Liew",
      "slug": "evolution-of-agentic-ai",
      "featured": true,
      "tags": ["history", "foundations", "agency"],
      "seriesPosition": 1,
      "arc": "Context & Foundation"
    },
    {
      "id": "what-is-agentic-engineering",
      "title": "What Is Agentic Engineering?",
      "description": "Beyond prompt engineering, beyond tool use—orchestration as a discipline",
      "date": "2025-01-22",
      "readTime": "7 min",
      "category": "agentic-engineering",
      "author": "Dave Liew",
      "slug": "what-is-agentic-engineering",
      "featured": false,
      "tags": ["foundations", "definition", "principles"],
      "seriesPosition": 2,
      "arc": "Context & Foundation"
    }
    // ... remaining 8 posts
  ],
  "arcs": [
    {
      "name": "Context & Foundation",
      "posts": [1, 2],
      "description": "Understanding the evolution and definition of agentic engineering"
    },
    {
      "name": "Mental Models",
      "posts": [3, 4],
      "description": "Frameworks for thinking about agentic systems"
    },
    {
      "name": "Technical Depth",
      "posts": [5, 6, 7],
      "description": "Architecture decisions and implementation patterns"
    },
    {
      "name": "Reality Check",
      "posts": [8, 9],
      "description": "Failure modes and real-world case studies"
    },
    {
      "name": "Consolidation",
      "posts": [10],
      "description": "Bringing it all together"
    }
  ]
}
```

### 2.2 Create TypeScript Type Definitions

**File**: `/types/blog.ts` (NEW)

```typescript
export interface BlogPost {
  id: string;
  title: string;
  description: string;
  date: string; // ISO date string
  readTime: string; // "8 min"
  category: 'agentic-engineering' | 'ai-patterns' | 'implementation';
  author: string;
  slug: string;
  featured: boolean;
  tags: string[];
  seriesPosition?: number; // Optional for non-series posts
  arc?: string; // Optional arc grouping
}

export interface BlogSeries {
  title: string;
  description: string;
  totalPosts: number;
  estimatedReadTime: string;
}

export interface BlogArc {
  name: string;
  posts: number[]; // Post IDs in this arc
  description: string;
}

export interface BlogData {
  series: Record<string, BlogSeries>;
  posts: BlogPost[];
  arcs: BlogArc[];
}
```

---

## PHASE 3: Blog Components

### 3.1 BlogPostCard Component

**File**: `/components/blog/BlogPostCard.tsx` (NEW)

```typescript
import Link from 'next/link';
import { BlogPost } from '@/types/blog';
import { fadeInUp } from '@/utils/animations';
import { motion } from 'framer-motion';

interface BlogPostCardProps {
  post: BlogPost;
  featured?: boolean;
}

export function BlogPostCard({ post, featured = false }: BlogPostCardProps) {
  return (
    <motion.div
      variants={fadeInUp}
      className={`
        group relative overflow-hidden rounded-lg border border-gray-200 dark:border-gray-800
        hover:border-[var(--color-knowledge)] transition-all duration-300
        ${featured ? 'col-span-2 row-span-2' : ''}
      `}
    >
      <Link href={`/blog/${post.slug}`} className="block p-6">
        {/* Series position badge */}
        {post.seriesPosition && (
          <div className="inline-block px-3 py-1 mb-3 text-sm font-medium bg-[var(--color-knowledge)] text-white rounded-full">
            Part {post.seriesPosition}
          </div>
        )}

        {/* Title */}
        <h3 className={`font-bold mb-2 group-hover:text-[var(--color-time)] transition-colors ${featured ? 'text-2xl' : 'text-xl'}`}>
          {post.title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {post.description}
        </p>

        {/* Metadata */}
        <div className="flex items-center gap-4 text-sm text-gray-500">
          <span>{post.date}</span>
          <span>•</span>
          <span>{post.readTime}</span>
          {post.arc && (
            <>
              <span>•</span>
              <span className="text-[var(--color-knowledge)]">{post.arc}</span>
            </>
          )}
        </div>

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-800 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </Link>
    </motion.div>
  );
}
```

### 3.2 CodeBlock Component (Shiki-Powered)

**File**: `/components/blog/CodeBlock.tsx` (NEW)

```typescript
'use client';

import { useState } from 'react';
import { CheckIcon, ClipboardIcon } from '@heroicons/react/24/outline'; // Or your icon library

interface CodeBlockProps {
  children: React.ReactNode;
  className?: string; // Language from MDX: "language-typescript"
  filename?: string;
  highlightLines?: number[];
}

export function CodeBlock({ children, className, filename }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  // Extract language from className (e.g., "language-typescript" -> "typescript")
  const language = className?.replace('language-', '') || 'text';

  const handleCopy = async () => {
    const code = extractTextFromChildren(children);
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group my-6">
      {/* Header with language and filename */}
      <div className="flex items-center justify-between px-4 py-2 bg-gray-800 text-gray-300 rounded-t-lg text-sm">
        <div className="flex items-center gap-3">
          {filename && <span className="font-mono">{filename}</span>}
          <span className="text-xs uppercase tracking-wide text-gray-500">{language}</span>
        </div>

        {/* Copy button */}
        <button
          onClick={handleCopy}
          className="p-1.5 rounded hover:bg-gray-700 transition-colors"
          aria-label="Copy code"
        >
          {copied ? (
            <CheckIcon className="w-5 h-5 text-green-400" />
          ) : (
            <ClipboardIcon className="w-5 h-5" />
          )}
        </button>
      </div>

      {/* Code content (Shiki handles highlighting via rehype-pretty-code) */}
      <pre className="!mt-0 !rounded-t-none overflow-x-auto bg-gray-900 p-4">
        <code className={className}>{children}</code>
      </pre>
    </div>
  );
}

// Helper to extract text from React children
function extractTextFromChildren(children: React.ReactNode): string {
  if (typeof children === 'string') return children;
  if (Array.isArray(children)) return children.map(extractTextFromChildren).join('');
  if (children && typeof children === 'object' && 'props' in children) {
    return extractTextFromChildren(children.props.children);
  }
  return '';
}
```

### 3.3 BlogPostLayout Component

**File**: `/components/blog/BlogPostLayout.tsx` (NEW)

```typescript
import { BlogPost } from '@/types/blog';
import { BackLink } from '@/components/common/BackLink';
import { SeriesNavigation } from '@/components/blog/SeriesNavigation';

interface BlogPostLayoutProps {
  post: BlogPost;
  previousPost?: BlogPost;
  nextPost?: BlogPost;
  children: React.ReactNode; // MDX content
}

export function BlogPostLayout({ post, previousPost, nextPost, children }: BlogPostLayoutProps) {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Back link */}
      <BackLink href="/blog" label="Back to blog" />

      {/* Series indicator */}
      {post.seriesPosition && (
        <div className="mt-6 inline-block px-4 py-2 bg-[var(--color-knowledge)] bg-opacity-10 rounded-lg">
          <span className="text-sm font-medium text-[var(--color-knowledge)]">
            Agentic Engineering Series: Part {post.seriesPosition} of 10
          </span>
        </div>
      )}

      {/* Post header */}
      <header className="mt-6 mb-12">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>

        {/* Metadata */}
        <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400">
          <span>{post.author}</span>
          <span>•</span>
          <time dateTime={post.date}>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</time>
          <span>•</span>
          <span>{post.readTime}</span>
        </div>

        {/* Arc badge */}
        {post.arc && (
          <div className="mt-4">
            <span className="inline-block px-3 py-1 text-sm bg-gray-100 dark:bg-gray-800 rounded-full">
              {post.arc}
            </span>
          </div>
        )}
      </header>

      {/* Blog content */}
      <article className="prose prose-lg dark:prose-invert max-w-none">
        {children}
      </article>

      {/* Series navigation */}
      {(previousPost || nextPost) && (
        <SeriesNavigation
          previousPost={previousPost}
          nextPost={nextPost}
          currentPosition={post.seriesPosition || 1}
          totalPosts={10}
        />
      )}
    </div>
  );
}
```

### 3.4 SeriesNavigation Component

**File**: `/components/blog/SeriesNavigation.tsx` (NEW)

```typescript
import Link from 'next/link';
import { BlogPost } from '@/types/blog';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

interface SeriesNavigationProps {
  previousPost?: BlogPost;
  nextPost?: BlogPost;
  currentPosition: number;
  totalPosts: number;
}

export function SeriesNavigation({ previousPost, nextPost, currentPosition, totalPosts }: SeriesNavigationProps) {
  return (
    <nav className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800">
      {/* Progress indicator */}
      <div className="mb-6">
        <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400 mb-2">
          <span>Series Progress</span>
          <span>{currentPosition} of {totalPosts}</span>
        </div>
        <div className="w-full h-2 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-[var(--color-knowledge)] transition-all duration-300"
            style={{ width: `${(currentPosition / totalPosts) * 100}%` }}
          />
        </div>
      </div>

      {/* Previous/Next links */}
      <div className="grid grid-cols-2 gap-4">
        {/* Previous post */}
        {previousPost ? (
          <Link
            href={`/blog/${previousPost.slug}`}
            className="flex items-start gap-3 p-4 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-[var(--color-knowledge)] transition-colors group"
          >
            <ArrowLeftIcon className="w-5 h-5 mt-1 flex-shrink-0 text-gray-400 group-hover:text-[var(--color-knowledge)] transition-colors" />
            <div>
              <div className="text-sm text-gray-500 mb-1">Previous</div>
              <div className="font-medium group-hover:text-[var(--color-time)] transition-colors">
                {previousPost.title}
              </div>
            </div>
          </Link>
        ) : (
          <div /> // Empty div to maintain grid layout
        )}

        {/* Next post */}
        {nextPost ? (
          <Link
            href={`/blog/${nextPost.slug}`}
            className="flex items-start gap-3 p-4 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-[var(--color-knowledge)] transition-colors group text-right"
          >
            <div className="flex-1">
              <div className="text-sm text-gray-500 mb-1">Next</div>
              <div className="font-medium group-hover:text-[var(--color-time)] transition-colors">
                {nextPost.title}
              </div>
            </div>
            <ArrowRightIcon className="w-5 h-5 mt-1 flex-shrink-0 text-gray-400 group-hover:text-[var(--color-knowledge)] transition-colors" />
          </Link>
        ) : (
          <div /> // Empty div to maintain grid layout
        )}
      </div>

      {/* Back to series overview */}
      <div className="mt-6 text-center">
        <Link
          href="/blog/agentic-engineering"
          className="text-sm text-[var(--color-knowledge)] hover:text-[var(--color-time)] transition-colors"
        >
          View all posts in this series →
        </Link>
      </div>
    </nav>
  );
}
```

### 3.5 BlogPostList Component

**File**: `/components/blog/BlogPostList.tsx` (NEW)

```typescript
'use client';

import { useState } from 'react';
import { BlogPost } from '@/types/blog';
import { BlogPostCard } from './BlogPostCard';
import { motion } from 'framer-motion';
import { containerVariants, itemVariants } from '@/utils/animations';

interface BlogPostListProps {
  posts: BlogPost[];
}

export function BlogPostList({ posts }: BlogPostListProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Filter posts by category
  const filteredPosts = selectedCategory === 'all'
    ? posts
    : posts.filter(post => post.category === selectedCategory);

  // Get unique categories
  const categories = ['all', ...Array.from(new Set(posts.map(p => p.category)))];

  return (
    <div>
      {/* Category filter */}
      <div className="flex gap-2 mb-8 overflow-x-auto">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`
              px-4 py-2 rounded-lg font-medium text-sm whitespace-nowrap transition-colors
              ${selectedCategory === category
                ? 'bg-[var(--color-knowledge)] text-white'
                : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700'
              }
            `}
          >
            {category === 'all' ? 'All Posts' : category.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
          </button>
        ))}
      </div>

      {/* Posts grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {filteredPosts.map((post, index) => (
          <motion.div key={post.id} variants={itemVariants}>
            <BlogPostCard post={post} featured={index === 0 && selectedCategory === 'all'} />
          </motion.div>
        ))}
      </motion.div>

      {/* Empty state */}
      {filteredPosts.length === 0 && (
        <div className="text-center py-12 text-gray-500">
          No posts found in this category.
        </div>
      )}
    </div>
  );
}
```

---

## PHASE 4: Routing & Pages

### 4.1 Create Blog Hub Page

**File**: `/app/blog/page.tsx` (NEW)

```typescript
import { BlogPostList } from '@/components/blog/BlogPostList';
import { PageLayout } from '@/components/common/PageLayout';
import blogData from '@/data/blog-posts.json';

export const metadata = {
  title: 'Blog | Dave Liew',
  description: 'Agentic engineering, AI orchestration patterns, and implementation guides',
};

export default function BlogPage() {
  return (
    <PageLayout>
      <div className="max-w-7xl mx-auto px-4 py-12">
        <header className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Blog</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Exploring agentic engineering, AI orchestration, and the future of human-AI collaboration.
          </p>
        </header>

        <BlogPostList posts={blogData.posts} />
      </div>
    </PageLayout>
  );
}
```

### 4.2 Create Agentic Engineering Series Overview

**File**: `/app/blog/agentic-engineering/page.tsx` (NEW)

```typescript
import { PageLayout } from '@/components/common/PageLayout';
import { BlogPostCard } from '@/components/blog/BlogPostCard';
import blogData from '@/data/blog-posts.json';

export const metadata = {
  title: 'Agentic Engineering Series | Dave Liew',
  description: 'A comprehensive 10-part guide to mastering AI orchestration and agentic systems',
};

export default function AgenticEngineeringSeriesPage() {
  const seriesPosts = blogData.posts
    .filter(post => post.category === 'agentic-engineering')
    .sort((a, b) => (a.seriesPosition || 0) - (b.seriesPosition || 0));

  return (
    <PageLayout>
      <div className="max-w-7xl mx-auto px-4 py-12">
        <header className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Agentic Engineering Series</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">
            A comprehensive 10-part guide to mastering AI orchestration and agentic systems.
            From foundations to production implementation.
          </p>

          {/* Series stats */}
          <div className="flex gap-6 text-sm">
            <div>
              <span className="text-gray-500">Total Posts:</span>
              <span className="ml-2 font-medium">{seriesPosts.length}</span>
            </div>
            <div>
              <span className="text-gray-500">Est. Reading Time:</span>
              <span className="ml-2 font-medium">2-3 hours</span>
            </div>
          </div>
        </header>

        {/* Posts grouped by arc */}
        {blogData.arcs.map(arc => {
          const arcPosts = seriesPosts.filter(post => post.arc === arc.name);

          return (
            <section key={arc.name} className="mb-12">
              <h2 className="text-2xl font-bold mb-2">{arc.name}</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">{arc.description}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {arcPosts.map(post => (
                  <BlogPostCard key={post.id} post={post} />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </PageLayout>
  );
}
```

### 4.3 Create Dynamic Blog Post Template

**File**: `/app/blog/[slug]/page.tsx` (NEW)

```typescript
import { notFound } from 'next/navigation';
import { BlogPostLayout } from '@/components/blog/BlogPostLayout';
import blogData from '@/data/blog-posts.json';

// Import all MDX posts dynamically
const mdxPosts = {
  'evolution-of-agentic-ai': () => import('./evolution-of-agentic-ai.mdx'),
  'what-is-agentic-engineering': () => import('./what-is-agentic-engineering.mdx'),
  // ... add remaining posts as they're created
};

export async function generateStaticParams() {
  return blogData.posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = blogData.posts.find(p => p.slug === params.slug);

  if (!post) return {};

  return {
    title: `${post.title} | Dave Liew`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
    },
  };
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogData.posts.find(p => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  // Get previous/next posts in series (if applicable)
  const previousPost = post.seriesPosition
    ? blogData.posts.find(p => p.seriesPosition === post.seriesPosition! - 1)
    : undefined;
  const nextPost = post.seriesPosition
    ? blogData.posts.find(p => p.seriesPosition === post.seriesPosition! + 1)
    : undefined;

  // Dynamically import MDX content
  const MDXContent = mdxPosts[post.slug as keyof typeof mdxPosts];

  if (!MDXContent) {
    notFound();
  }

  const { default: Content } = await MDXContent();

  return (
    <BlogPostLayout post={post} previousPost={previousPost} nextPost={nextPost}>
      <Content />
    </BlogPostLayout>
  );
}
```

### 4.4 Create First MDX Blog Post (Template)

**File**: `/app/blog/[slug]/evolution-of-agentic-ai.mdx` (NEW)

```mdx
# The Evolution of Agentic AI: From Prompts to Orchestration

Understanding the paradigm shift from ChatGPT 2023 to agentic orchestration in 2025.

## Introduction

In November 2022, ChatGPT launched and changed everything. But what we're experiencing now—true agentic AI—is fundamentally different from those early days of prompt engineering.

This is the story of how we got here, and why **agency > intelligence** (h/t Andrej Karpathy).

## 2023: The Agency Awakening

When ChatGPT went mainstream in early 2023...

```typescript
// Early 2023: Simple completion pattern
const response = await openai.chat.completions.create({
  model: "gpt-4",
  messages: [{ role: "user", content: "Write me a blog post" }]
});
```

Function calling emerged mid-2023, enabling the first glimpse of agency...

## 2024: The Agentic Explosion

Claude 3.5 Sonnet changed the game...

```typescript
// 2024: Agentic pattern with tool use
const response = await anthropic.messages.create({
  model: "claude-3-5-sonnet-20241022",
  tools: [
    { name: "search_web", /* ... */ },
    { name: "analyze_data", /* ... */ }
  ],
  messages: [{ role: "user", content: "Research and analyze..." }]
});
```

## 2024-2025: The Orchestration Era

Multi-agent coordination, MCP protocol, Skills system...

[Continue with full blog post content...]

## My Journey with This Evolution

**Why I chose to track this**: Back in early 2023, I saw ChatGPT and thought...

**What I tried first**: I focused on prompt engineering, collecting the best prompts...

**What went wrong**: I realized prompts weren't the limiting factor...

**The breakthrough**: When Claude 3.5 Sonnet launched with Extended Thinking...

**What I'd do differently**: I'd have started building multi-agent systems earlier...

**Where I'm still learning**: The right abstractions for agent coordination...

## The Productive Tension: Hype vs Reality

[Weave in Fitzgerald Principle - distinguishing real capability from marketing hype]

## Key Takeaways

1. Agency (autonomous action) matters more than raw intelligence
2. 2023 = Prompts, 2024 = Tools, 2025 = Orchestration
3. We're at an inflection point where production agentic systems are viable

## Next Steps

Continue to [What Is Agentic Engineering?](/blog/what-is-agentic-engineering) to understand how to think about building these systems.
```

---

## PHASE 5: Navigation Updates

### 5.1 Update Navbar Component

**File**: `/components/layout/Navbar.tsx` (EDIT)

Add "Agentic Engineering" to mega-menu, consolidate to 12 items:

```typescript
const aiJourneyMenu = {
  foundations: [
    { href: '/ai-journey/why-ai', label: 'Why AI Matters', description: 'The case for human-AI collaboration' },
    { href: '/ai-journey/overview', label: 'Learning Philosophy', description: 'Three-Hat Framework introduction' },
    { href: '/ai-journey/how-to-learn/technical-leadership', label: 'Three-Hat Framework', description: 'Architect, PM, Implementation' },
  ],
  agenticEngineering: [ // NEW
    { href: '/blog/agentic-engineering', label: 'Series Overview', description: 'Complete 10-part guide' },
    { href: '/blog', label: 'All Blog Posts', description: 'Latest insights and patterns' },
  ],
  claudeMastery: [
    { href: '/ai-journey/claude/code', label: 'Claude Code', description: 'Autonomous development' },
    { href: '/ai-journey/claude/2026-predictions', label: '2026 Predictions', description: 'Future trajectory' },
    { href: '/ai-journey/claude/overview', label: 'Complete Reference', description: 'All Claude capabilities' },
  ],
  livingLab: [
    { href: '/ai-journey/portfolio', label: 'Portfolio & Case Studies', description: 'Real-world implementations' },
    { href: '/laboratory', label: 'Experiments', description: 'Innovation lab' },
  ],
};

// Update mega-menu rendering to include agenticEngineering section
```

---

## PHASE 6: Styling Integration

### 6.1 Update Global Styles

**File**: `/styles/globals.css` (EDIT - add to end)

```css
/* ===================================
   Blog & Code Block Styling
   =================================== */

/* Shiki code blocks (syntax highlighted by rehype-pretty-code) */
pre {
  @apply bg-gray-900 rounded-lg p-4 overflow-x-auto my-6;
  border-left: 4px solid var(--color-knowledge);
}

pre code {
  @apply font-mono text-sm;
  counter-reset: line;
}

/* Line numbers (if enabled in rehype-pretty-code) */
pre code [data-line] {
  @apply border-l-2 border-l-transparent;
  padding-left: 1rem;
}

/* Highlighted lines */
pre code [data-line].highlighted {
  @apply bg-gray-800 border-l-blue-400;
}

/* Inline code (not in pre blocks) */
:not(pre) > code {
  @apply bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded text-sm font-mono;
}

/* Blog prose styling (for MDX content) */
.prose {
  @apply text-gray-900 dark:text-gray-100;
}

.prose h2 {
  @apply text-2xl font-bold mt-8 mb-4 text-[var(--color-time)];
}

.prose h3 {
  @apply text-xl font-semibold mt-6 mb-3 text-[var(--color-knowledge)];
}

.prose p {
  @apply mb-4 leading-relaxed;
}

.prose ul, .prose ol {
  @apply mb-4 pl-6;
}

.prose li {
  @apply mb-2;
}

.prose blockquote {
  @apply border-l-4 border-[var(--color-knowledge)] pl-4 py-2 my-6 italic bg-gray-50 dark:bg-gray-800;
}

.prose a {
  @apply text-[var(--color-knowledge)] hover:text-[var(--color-time)] underline transition-colors;
}

.prose hr {
  @apply my-8 border-gray-300 dark:border-gray-700;
}

/* Code block copy button hover */
.code-block-header button:hover {
  @apply bg-gray-700;
}
```

---

## IMPLEMENTATION SEQUENCE

### Execution Order (2-2.5 hours total)

**Phase 1: MDX Setup** (20 min)
1. Run `npm install` for all dependencies
2. Update `next.config.mjs` with MDX configuration
3. Create `/mdx-components.tsx`
4. Test build: `npm run build`

**Phase 2: Data Structure** (15 min)
5. Create `/data/blog-posts.json` with initial post metadata
6. Create `/types/blog.ts` with TypeScript interfaces
7. Verify JSON imports work

**Phase 3: Components** (45 min)
8. Create `BlogPostCard.tsx`
9. Create `CodeBlock.tsx` (most complex - Shiki integration)
10. Create `BlogPostLayout.tsx`
11. Create `SeriesNavigation.tsx`
12. Create `BlogPostList.tsx`

**Phase 4: Routing** (20 min)
13. Create `/app/blog/page.tsx` (hub)
14. Create `/app/blog/agentic-engineering/page.tsx` (series overview)
15. Create `/app/blog/[slug]/page.tsx` (dynamic route)
16. Create `/app/blog/[slug]/evolution-of-agentic-ai.mdx` (first post template)

**Phase 5: Navigation** (10 min)
17. Update `/components/layout/Navbar.tsx` with Agentic Engineering section

**Phase 6: Styling** (15 min)
18. Update `/styles/globals.css` with blog/code styles
19. Test responsive design (mobile, tablet, desktop)

**Validation** (15 min)
20. Run `npm run pre-deploy` (TypeScript + ESLint + Philosophy + Build)
21. Test all routes locally
22. Verify code highlighting works
23. Test series navigation (prev/next)
24. Mobile responsiveness check

---

## KEY TECHNICAL DECISIONS FINALIZED

| Decision | Choice | Rationale |
|----------|--------|-----------|
| **Content Storage** | JSON metadata + MDX files | Separates searchable data from content, matches existing patterns |
| **Syntax Highlighting** | Shiki via rehype-pretty-code | VS Code quality, better than Prism.js, future-proof |
| **MDX Plugins** | remark-gfm + rehype-pretty-code | GitHub-flavored markdown + enhanced code blocks |
| **Blog Format** | MDX (not TSX) | Better authoring experience, markdown fluency |
| **Data Management** | Data-driven (JSON) | Matches portfolio pattern, enables filtering/search |
| **Navigation** | Extend existing mega-menu | Quick win, consistent with site pattern |
| **Component Library** | Extend existing design system | Reuse Card, PageLayout, animations, Fitzgerald colors |
| **Code Block Component** | Custom with Shiki | Full control over UX, copy button, language display |

---

## DEPLOYMENT CHECKLIST

### Pre-Deployment Validation
- [ ] Run `npm run pre-deploy` successfully
- [ ] All TypeScript types compile
- [ ] ESLint passes (no unescaped quotes)
- [ ] Philosophy check passes
- [ ] Build completes without errors
- [ ] Test all routes locally (`/blog`, `/blog/agentic-engineering`, `/blog/[slug]`)
- [ ] Verify Shiki syntax highlighting renders
- [ ] Test code copy button functionality
- [ ] Check series navigation (prev/next links)
- [ ] Mobile responsiveness validated
- [ ] Fitzgerald colors render correctly
- [ ] Dark mode styling works

### Post-Deployment Monitoring
- [ ] Verify blog posts appear in production
- [ ] Check Lighthouse scores (should maintain >90)
- [ ] Monitor for 404 errors
- [ ] Test OG image generation
- [ ] Verify sitemap includes blog routes
- [ ] Check Google Search Console indexing

---

## NEXT STEPS AFTER FOUNDATION

Once technical foundation is complete:

1. **Write first 3 blog posts** in MDX format
2. **Add remaining 7 posts** to `/data/blog-posts.json`
3. **Create blog series page enhancements** (progress tracking, arc visualization)
4. **Implement search/filtering** (if needed for >20 posts)
5. **Add "Related Posts" component** (based on tags/category)
6. **Create RSS feed** (optional, good for SEO)
7. **Add reading progress indicator** (scroll-based)
8. **Implement table of contents** (auto-generated from headings)

---

## OPEN QUESTIONS RESOLVED

### ✅ MDX Setup
- **Status**: Not configured → Full setup required
- **Decision**: Install from scratch with Shiki + rehype-pretty-code

### ✅ Syntax Highlighting
- **Decision**: Shiki (via rehype-pretty-code)
- **Rationale**: VS Code quality, better than Prism.js

### ✅ Collapsible Code
- **Decision**: Build into CodeBlock component (not separate collapsible wrapper)
- **Feature**: Copy button + language label + filename support

### ✅ Navigation Structure
- **Current**: ~20 items across 5 sections
- **Target**: 12 items across 4 sections (add Agentic Engineering, consolidate others)

### ✅ Component Patterns
- **Strategy**: Extend existing design system (Card, PageLayout, animations)
- **Colors**: Use Fitzgerald colors (hot pink, teal, beer gold) from CSS variables

---

**Last Updated**: 2025-01-11
**Status**: Technical Deep-Dive Complete → Ready for Phase 1 Execution
**Next Action**: Install dependencies and configure MDX
