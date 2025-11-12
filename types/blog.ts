// Blog post metadata and content types

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  category: 'agentic-engineering' | 'ai-patterns' | 'implementation' | 'journey';
  author: string;
  featured: boolean;
  tags: string[];
  seriesPosition?: number;
  seriesTotal?: number;
  arc?: string;
  published: boolean;
}

export interface BlogSeries {
  id: string;
  title: string;
  description: string;
  totalPosts: number;
  estimatedReadTime: string;
  posts: BlogPost[];
}

export interface BlogArc {
  name: string;
  posts: number[];
  description: string;
}

export interface JourneyLayerProps {
  why: string;
  triedFirst: string;
  wentWrong: string;
  breakthrough: string;
  differently: string;
  stillLearning: string;
}

export interface TOCHeading {
  id: string;
  text: string;
  level: number;
}

export interface BlogMetadata {
  posts: BlogPost[];
  series: Record<string, BlogSeries>;
  arcs: BlogArc[];
}
