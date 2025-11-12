'use client';

import { ReactNode } from 'react';
import PageLayout from '@/components/common/PageLayout';
import type { BlogPost } from '@/types/blog';

interface BlogPostLayoutProps {
  post: BlogPost;
  children: ReactNode;
  tableOfContents?: ReactNode;
}

export default function BlogPostLayout({ post, children, tableOfContents }: BlogPostLayoutProps) {
  return (
    <PageLayout
      title={post.title}
      description={post.description}
      backLink={{ href: '/blog', text: 'Back to Blog' }}
      maxWidth="5xl"
    >
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-8 mt-8">
          {/* Main content */}
          <article className="max-w-3xl">
            {/* Metadata header */}
            <header className="mb-6">
              {/* Category badge */}
              <div className="mb-2">
                <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-[var(--color-knowledge)]/10 text-[var(--color-knowledge)]">
                  {post.category.replace('-', ' ')}
                </span>
              </div>

              {/* Meta */}
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
                <span>•</span>
                <span>{post.readTime}</span>
                {post.seriesPosition && post.seriesTotal && (
                  <>
                    <span>•</span>
                    <span className="text-[var(--color-time)]">
                      Part {post.seriesPosition} of {post.seriesTotal}
                    </span>
                  </>
                )}
              </div>

              {/* Tags */}
              {post.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs rounded bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}
            </header>

            {/* Content */}
            <div className="prose prose-lg dark:prose-invert max-w-none">
              {children}
            </div>
          </article>

          {/* Sidebar with TOC */}
          {tableOfContents && (
            <aside className="hidden lg:block">
              <div className="sticky top-24">
                {tableOfContents}
              </div>
            </aside>
          )}
        </div>
      </div>
    </PageLayout>
  );
}
