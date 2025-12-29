# Notion CMS Integration Architecture

## Overview
This document outlines the architecture for integrating Notion as a Content Management System (CMS) for Dave's portfolio website, specifically to support the "learning in public" strategy and systematic exploration content.

## Integration Strategy

### Phase 1: Foundation Setup
**Goal:** Establish Notion as content creation hub

**Notion Workspace Structure:**
```
Dave's Learning Lab
├── 📝 Learning Lab Notes (Database)
│   ├── Title (Title)
│   ├── Date (Date)
│   ├── Category (Select: AI, Frameworks, Client Work, Insights)
│   ├── Status (Select: Draft, Published, Archived)
│   ├── Tags (Multi-select)
│   ├── Summary (Rich Text)
│   └── Content (Rich Text)
├── 🏗️ Framework Documentation (Database)
│   ├── Framework Name (Title)
│   ├── Type (Select: Three-Hat, ADHD-AI, 2-Minute Rule)
│   ├── Version (Number)
│   ├── Testing Status (Select: Prototype, Testing, Proven, Deprecated)
│   ├── Last Updated (Date)
│   └── Documentation (Rich Text)
├── 🧪 Open Research (Database)
│   ├── Research Title (Title)
│   ├── Hypothesis (Rich Text)
│   ├── Status (Select: Planning, Active, Analyzing, Complete)
│   ├── Start Date (Date)
│   ├── Findings (Rich Text)
│   └── Next Steps (Rich Text)
└── 📚 Resource Collections (Database)
    ├── Resource Name (Title)
    ├── Type (Select: Tool, Article, Framework, Course)
    ├── Category (Select: AI, Productivity, Development, Business)
    ├── Use Case (Rich Text)
    ├── URL (URL)
    └── Notes (Rich Text)
```

### Phase 2: Technical Implementation

**Required Dependencies:**
```bash
npm install @notionhq/client
npm install notion-to-md  # For converting Notion blocks to Markdown
```

**Environment Variables:**
```
NOTION_SECRET_KEY=secret_...
NOTION_LEARNING_NOTES_DB_ID=...
NOTION_FRAMEWORKS_DB_ID=...
NOTION_RESEARCH_DB_ID=...
NOTION_RESOURCES_DB_ID=...
```

**API Routes Structure:**
```
/api/notion/
├── learning-notes.ts      # GET published learning notes
├── frameworks.ts          # GET framework documentation
├── research.ts           # GET active research projects
└── resources.ts          # GET curated resources
```

**Type Definitions:**
```typescript
// types/notion.ts
export interface LearningNote {
  id: string;
  title: string;
  date: string;
  category: 'AI' | 'Frameworks' | 'Client Work' | 'Insights';
  status: 'Draft' | 'Published' | 'Archived';
  tags: string[];
  summary: string;
  content: NotionBlock[];
}

export interface Framework {
  id: string;
  name: string;
  type: 'Three-Hat' | 'ADHD-AI' | '2-Minute Rule';
  version: number;
  testingStatus: 'Prototype' | 'Testing' | 'Proven' | 'Deprecated';
  lastUpdated: string;
  documentation: NotionBlock[];
}

export interface Research {
  id: string;
  title: string;
  hypothesis: string;
  status: 'Planning' | 'Active' | 'Analyzing' | 'Complete';
  startDate: string;
  findings: NotionBlock[];
  nextSteps: NotionBlock[];
}
```

### Phase 3: Frontend Integration

**Homepage Integration Points:**
1. **Hero Section:** Add "Latest Discovery" card with most recent learning note
2. **Current Experiments:** Pull from Research database where status = 'Active'
3. **Framework Workshop:** Display frameworks with status = 'Proven'

**New Pages:**
- `/discoveries` - Learning Lab Notes listing and detail pages
- `/research` - Open research projects with public findings
- `/frameworks` - Interactive framework documentation

**Component Structure:**
```
/components/notion/
├── NotionRenderer.tsx     # Render Notion blocks as React components
├── LearningNoteCard.tsx   # Summary card for learning notes
├── ResearchStatus.tsx     # Research project status display
└── FrameworkGuide.tsx     # Interactive framework documentation
```

## Implementation Timeline

### Week 1: Setup & Configuration
- [ ] Create Notion workspace and databases
- [ ] Set up Notion API integration
- [ ] Create basic API routes

### Week 2: Core Integration
- [ ] Build NotionRenderer component
- [ ] Implement caching strategy
- [ ] Create type definitions

### Week 3: Frontend Components
- [ ] Build learning note components
- [ ] Add research status displays
- [ ] Integrate with homepage

### Week 4: Polish & Optimization
- [ ] Implement caching for performance
- [ ] Add error handling
- [ ] SEO optimization for Notion content

## Technical Benefits

1. **Superior Writing Experience:** Notion's editor is optimized for long-form content
2. **Flexible Organization:** Database properties enable sophisticated categorization
3. **Real-time Collaboration:** Easy sharing and feedback collection
4. **Version Control:** Built-in change tracking and history
5. **Mobile-friendly:** Write and publish from anywhere

## SEO Considerations

- Generate static props for published content
- Implement proper meta tags for Notion-sourced content
- Use structured data for learning notes and research
- Implement XML sitemap generation for dynamic content

## Caching Strategy

```typescript
// Implement Redis or simple file-based caching
const CACHE_TTL = 5 * 60 * 1000; // 5 minutes

export async function getCachedNotionData(
  key: string, 
  fetcher: () => Promise<any>
) {
  // Check cache first
  // If not cached or expired, fetch from Notion
  // Cache result with TTL
}
```

## Content Workflow

1. **Draft in Notion:** Use rich editor for content creation
2. **Tag and Categorize:** Use database properties for organization
3. **Publish:** Change status to "Published" in Notion
4. **Auto-sync:** Website pulls published content via API
5. **Iterate:** Update content in Notion, changes reflect on website

This architecture supports the strategic shift to "learning in public" while providing a scalable foundation for content management as the site grows.