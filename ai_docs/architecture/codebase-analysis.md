# Dave Liew Portfolio - Codebase Analysis

## Overview

This is a modern Next.js 15 portfolio website that embodies the **Fitzgerald Principle** - the ability to hold two opposed ideas in mind simultaneously while still functioning. The site demonstrates human-AI collaboration through a philosophy-driven design system.

## Tech Stack & Architecture

### Core Technologies
- **Framework**: Next.js 15.5 with App Router & Turbopack
- **React**: React 19 with improved hydration
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS with custom design system
- **Animation**: Framer Motion
- **Data Visualization**: Recharts
- **Build Tools**: ESLint, TypeScript compiler

### Architecture Patterns
- **App Router**: Modern Next.js routing with RSC support
- **Data-Driven Content**: JSON files drive content with TypeScript interfaces
- **Component-Based**: Modular, reusable components organized by domain
- **Philosophy-First Design**: Every component embodies productive tensions

## Project Structure

```
daveliew/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Homepage
│   ├── philosophy/        # Philosophy framework page
│   ├── laboratory/        # Live experiments page
│   ├── ai-journey/        # AI learning journey section
│   │   ├── why-ai/       # Why human-AI collaboration
│   │   ├── portfolio/    # Portfolio results
│   │   └── how-to-learn/ # Learning paths & frameworks
│   └── contact/          # Contact page
├── components/            # React components
│   ├── layout/           # Site-wide components (Navbar, Footer)
│   ├── common/           # Reusable UI components
│   ├── skills/           # Skills visualization components
│   ├── ai-journey/       # AI journey specific components
│   └── experience/       # Experience section components
├── data/                 # JSON data files
│   ├── skills.json       # Skills & capabilities data
│   ├── experiences.json  # Professional experience
│   ├── ai-journey.json   # AI learning journey data
│   └── sustainability.json # Sustainability focus data
├── styles/               # Styling system
│   ├── globals.css       # Global styles & CSS variables
│   ├── theme.ts          # TypeScript theme utilities
│   └── (see ai_docs/developer_guide/design-system.md)
├── types/                # TypeScript interfaces
├── utils/                # Utility functions
└── scripts/              # Build & validation scripts
```

## Key Design Patterns

### 1. **Fitzgerald Principle Implementation**
The entire codebase embodies productive tensions:
- **Simplicity AND Power**: Clean interfaces with rich functionality
- **Consistency AND Flexibility**: Systematic patterns that allow variation
- **Technical AND Human**: AI-friendly code that feels human

### 2. **Theme System Architecture**
```typescript
// Three-pillar philosophy represented in colors
- Hot Pink (#FF0081): Time/Energy/Human Agency
- Teal (#0CC0DF): Knowledge/Growth/AI Capabilities  
- Beer Gold (#F8B400): Wealth/Impact/Tangible Outcomes
```

### 3. **Component Philosophy**
Components follow a "simple surface, rich depth" pattern:
```tsx
<Card hover>  // Simple usage
  // But contains hover states, animations, and semantic meaning
</Card>
```

### 4. **Data-Driven Architecture**
- TypeScript interfaces ensure type safety
- JSON data files provide content flexibility
- Components consume data through predictable patterns

## Build & Development Commands

### Development Workflow
```bash
npm run dev          # Start development server
npm run type-check   # TypeScript validation
npm run lint         # ESLint checks
npm run build        # Production build
```

### Pre-Deployment Validation
```bash
npm run pre-deploy   # Full validation suite
npm run quick-check  # Fast validation
npm run philosophy-check  # Philosophy adherence check
```

**Critical**: The prebuild script runs automatically before `npm run build`, ensuring TypeScript and ESLint compliance. Common issues:
- ESLint quote escaping: `'` → `&apos;`, `"` → `&quot;`

## Navigation Structure

### Complete Site Map (19 Routes)

**Main Pages (5):**
- `/` - Homepage: Philosophy introduction & 3-Hat Framework
- `/philosophy` - Fitzgerald Principle framework deep dive
- `/laboratory` - Live experiments & professional background
- `/contact` - Connection point & collaboration
- `/ai-journey` - AI learning hub with comprehensive paths

**AI Journey Routes (14):**

*Core Sections:*
- `/ai-journey/why-ai` - Why human-AI collaboration matters
- `/ai-journey/portfolio` - Portfolio & active projects
- `/ai-journey/how-to-learn/overview` - Three-Hat Framework overview

*Learning Paths:*
- `/ai-journey/how-to-learn/llm-handling` - LLM communication fundamentals
- `/ai-journey/how-to-learn/agent-rag` - Agent & RAG systems
- `/ai-journey/how-to-learn/technical-leadership` - 3-Hat technical leadership

*Claude Mastery (8 modules):*
- `/ai-journey/how-to-learn/claude-mastery` - Claude Mastery hub
- `/ai-journey/how-to-learn/claude-mastery/prompt-engineering` - Prompting techniques
- `/ai-journey/how-to-learn/claude-mastery/tool-use` - Tool use implementation
- `/ai-journey/how-to-learn/claude-mastery/computer-use` - Computer use capabilities
- `/ai-journey/how-to-learn/claude-mastery/vision-multimodal` - Vision & multimodal
- `/ai-journey/how-to-learn/claude-mastery/retrieval-augmented-generation` - RAG systems
- `/ai-journey/how-to-learn/claude-mastery/model-context-protocol` - MCP integration
- `/ai-journey/how-to-learn/claude-mastery/developer-console` - Developer tools
- `/ai-journey/how-to-learn/claude-mastery/cookbook-examples` - Practical examples

**SEO:**
- Sitemap available at `/sitemap.xml` (auto-generated via `app/sitemap.ts`)

## Content Management

### Data Files
- `skills.json`: Technical capabilities, AI skills, unique value propositions
- `experiences.json`: Professional history and achievements
- `ai-journey.json`: Learning paths and AI journey documentation
- `sustainability.json`: Sustainability and ESG focus areas

### Content Patterns
1. **Hero Pattern**: Philosophy-first with Fitzgerald quote
2. **Triangle Foundation**: Three opposing forces that strengthen each other
3. **Live Proof Pattern**: Evidence over claims
4. **Productive Tensions**: Showing opposing ideas that create value

## Testing & Quality

### Validation Scripts
1. **Philosophy Validation** (`validate-philosophy.js`):
   - Checks for Fitzgerald Principle adherence
   - Scores components on philosophical alignment
   - Provides improvement suggestions

2. **Pre-Deploy Script** (`pre-deploy.js`):
   - Runs TypeScript type checking
   - Executes ESLint validation
   - Performs philosophy checks
   - Builds production bundle

### Current Philosophy Score: 7%
Starting baseline with room for growth - the goal isn't 100% (that would be dogmatic) but strong philosophical coherence.

## Design System

### Core Principles
1. **Semantic Over Decorative**: Names convey meaning
2. **Predictable Patterns**: Consistent structure for human and AI understanding
3. **Progressive Enhancement**: Build from accessible foundations
4. **Three-Pillar Alignment**: Visual elements reinforce Time/Knowledge/Wealth framework

### Component Patterns
- **Cards**: Simple surface with hover depth
- **Sections**: Rigid structure creating smooth flow
- **Navigation**: Ruthless focus with complete access
- **Content Hierarchy**: Proof over claims

## Deployment & Infrastructure

### Build Process
1. TypeScript compilation with strict mode
2. ESLint validation (critical - blocks deployment on errors)
3. Philosophy validation (non-critical warning)
4. Next.js production build

### Deployment Considerations
- Netlify deployment with automatic builds
- Environment variables for production
- Static site generation for performance

## Future Architecture Considerations

### Planned Enhancements (v1.1.0+)
- Increase philosophy score to 20%+
- Enhanced productive tension patterns
- Real-time experiment status updates
- Interactive philosophy demonstrations

### Long-term Vision (v2.0.0)
- AI-assisted component generation
- Adaptive interface based on user understanding
- Open-source framework for philosophy-driven design

## Key Takeaways for Future Claude Instances

1. **Philosophy First**: Every decision should embody the Fitzgerald Principle
2. **Validation is Critical**: Always run `npm run pre-deploy` before committing
3. **Follow the Theme System**: Use semantic colors (time/knowledge/wealth)
4. **Data-Driven**: Modify JSON files for content, components for structure
5. **Simple with Depth**: Surface simplicity, underlying richness
6. **Test the Tensions**: New features should balance opposing forces

## Common Pitfalls to Avoid

1. **ESLint Errors Block Deployment**: Fix quote escaping issues immediately
2. **Don't Skip Philosophy**: Components without philosophical alignment feel empty
3. **Maintain Type Safety**: TypeScript interfaces prevent runtime errors
4. **Respect the Navigation**: 5 focused pages prevent sprawl
5. **Content in JSON**: Keep content in data files, not hardcoded in components

---

*This codebase demonstrates that the test of first-rate code is the ability to hold simplicity and complexity in mind at the same time and still retain the ability to function.*