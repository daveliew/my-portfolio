# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server on http://localhost:3000
- `npm run build` - Build production version (runs type-check and lint first)
- `npm run type-check` - TypeScript type checking with `tsc --noEmit`
- `npm run lint` - ESLint with Next.js configuration
- `npm run start` - Start production server
- `npm run philosophy-check` - Validate adherence to Fitzgerald Principle (currently 7% score)

### Pre-Deployment Validation (ALWAYS RUN FIRST!)

**CRITICAL: Always check for build errors before making changes or committing code.**

- `npm run pre-deploy` - Full validation (TypeScript + ESLint + Philosophy + Build)
- `npm run quick-check` - Fast validation (TypeScript + ESLint + Philosophy)
- `npm run deploy-check` - Alias for pre-deploy

**Deployment Workflow:**
1. **FIRST** - Run `npm run pre-deploy` to identify any existing errors
2. Make your changes
3. **ALWAYS** - Run `npm run pre-deploy` again before committing
4. Fix any errors found (typically ESLint quote escaping: `'` → `&apos;`, `"` → `&quot;`)
5. Deploy only when validation passes

The prebuild script automatically runs type checking and linting before building, so ESLint errors will block Netlify deployments.

## Testing Individual Components

For development efficiency:
- `npm run type-check` - Faster than full build for TypeScript validation
- `npm run lint` - Quick ESLint check (5-7 lines output when clean)
- `npm run philosophy-check` - Check design philosophy adherence

## Architecture Overview

This is a Next.js 14 portfolio website embodying the **Fitzgerald Principle**: holding two opposed ideas simultaneously while retaining the ability to function. The codebase demonstrates productive tensions throughout: simple surfaces with rich depth, technical rigor with human warmth, and AI augmentation preserving human agency.

### Core Philosophy Integration

The site blends **human wisdom with AI automation**, structured around three unstoppable trends:

1. **AI Revolution** - Exponential capabilities in reasoning and automation
2. **Sustainability Imperatives** - Climate urgency driving green technology
3. **Robotic Systems** - Physical automation reaching cost parity

### Quick Architecture Reference

**Navigation Structure**: 5 main pages with AI Journey mega-menu (9 sub-pages) and Laboratory section (5 views)

**Build Pipeline**: `prebuild → type-check → lint → philosophy-check → build` (all must pass for deployment)

### Key Architectural Patterns

**Data-Driven Content**: The site content is driven by JSON files in `/data/` that define skills, experiences, and AI journey information. These files follow strict TypeScript interfaces defined in `/types/`.

**Theme System**: Uses CSS custom properties for theming with a utility system in `styles/theme.ts` that provides type-safe color mappings for three main categories: time, knowledge, and wealth. See `ai_docs/developer_guide/design-system-reference.md` for comprehensive guidelines.

**Component Structure**:
- `/components/layout/` - Site-wide layout components (Navbar, Footer)
- `/components/common/` - Reusable UI components
- `/components/skills/` - Skills visualization components (charts, matrices, cards)
- `/components/ai-journey/` - AI journey specific layouts
- `/components/experience/` - Experience section components

**Routing Structure**: Uses Next.js App Router with nested routes for the AI journey section (`/ai-journey/overview`, `/ai-journey/portfolio`, etc.).

### Innovation Laboratory Structure

The `/laboratory` section represents the convergence of the three unstoppable trends with five main views:
- **Overview** - The thesis and laboratory focus
- **Active Experiments** - Current human-AI-robot collaboration projects
- **Sustainability Lab** - Projects at the intersection of AI and environmental impact
- **Investment Thesis** - Business and investment opportunities in the convergence space
- **Insights** - Key learnings from laboratory experiments

### Data Flow

1. JSON data files define content structure
2. TypeScript interfaces ensure type safety across components
3. Components consume data through props and render using Tailwind classes
4. Theme utilities provide consistent styling across skill visualizations
5. Color meanings are semantically tied to the three-pillar philosophy

### Design System

**Color Philosophy:**
- **Hot Pink** (#FF0081) - Time/Energy/Human Agency
- **Teal** (#0CC0DF) - Knowledge/Growth/AI Capabilities  
- **Beer Gold** (#F8B400) - Wealth/Impact/Tangible Outcomes

See `ai_docs/developer_guide/design-system-reference.md` for complete usage guidelines and best practices for human-AI collaboration.

### Path Aliases

Uses `@/*` alias pointing to the root directory, configured in `tsconfig.json`.

## Common Development Patterns

### Adding/Modifying Content
1. Edit JSON files in `/data/` (never hardcode content in components)
2. TypeScript interfaces in `/types/` will enforce correct structure
3. Components automatically reflect changes

### ESLint Quote Escaping (Common Deployment Blocker)
- Replace `'` with `&apos;`
- Replace `"` with `&quot;`
- These errors WILL block Netlify deployments

### Philosophy Validation
The codebase includes automated scoring (currently 7%) for adherence to the Fitzgerald Principle. Every component should demonstrate productive tensions.

## Key Dependencies

- **next** (14.2.0) - React framework with App Router
- **typescript** (^5) - Type safety with strict mode
- **tailwindcss** (^3.4.7) - Utility-first CSS framework  
- **framer-motion** (^10.16.5) - Meaningful animations
- **recharts** (^2.10.4) - Data visualizations in skills sections

## Comprehensive Documentation

Detailed documentation is available in `/ai_docs/`:
- **Developer Guide**: Architecture overview, getting started, component patterns
- **User Guide**: Installation, features, troubleshooting (when created)
- **API Reference**: Component APIs, data models (when created)
- **Architecture**: System design, data flows, ADRs (when created)

## Dave's Communication Style & Tone

When writing content for this site, follow these principles learned from Dave's authentic voice:

### Core Voice Attributes
- **Humble explorer**: "Still figuring it out", "happy to share what I've learned"
- **Direct but warm**: Clear insights without aggressive claims
- **Helper not seller**: Focus on sharing value, not pushing services
- **Philosophical yet practical**: Deep insights delivered conversationally

### Writing Guidelines
1. **Lead with contrarian insights**: "Most people use AI to do more. I use it to do less."
2. **Share journey without bragging**: Mention Meta/Unity/ventures as context, not credentials
3. **Use proper sentence case**: This is web content, not WhatsApp
4. **End with gentle invitations**: "Happy to chat about yours" not "Book a call now!"
5. **Embrace the virtuous cycle**: Build time → Capture knowledge → Create value → Share freely

### Hero Section Example (What Works)
```
Dave Liew
Most people use AI to do more. I use it to do less.

After working at Meta, Unity, and co-founding a few ventures,
I learned something: Time compounds faster than money.

So I build tools that delete tasks instead of adding them.
WhatsApp insights. Self-thinking dashboards. Emails that sort themselves.

The pattern I'm exploring:
Build time → Capture knowledge → Create value → Share freely

Currently helping 3 businesses reclaim their time. Happy to chat about yours.
```

### What to Avoid
- ❌ Corporate speak: "I build tools that solve real problems"
- ❌ Aggressive claims: "10x your productivity!"
- ❌ Sales language: "Book your consultation today"
- ❌ Overly casual: "yeah so basically..." (save for actual chats)
- ❌ Achievement focus: "Scaled ventures from $0→$1M+"

### Key Phrases That Work
- "I'm exploring..."
- "Still figuring it out, but..."
- "Happy to share what I've learned"
- "If something helps you, that's enough for me"
- "Time compounds faster than money"

# important-instruction-reminders
Do what has been asked; nothing more, nothing less.
NEVER create files unless they're absolutely necessary for achieving your goal.
ALWAYS prefer editing an existing file to creating a new one.
NEVER proactively create documentation files (*.md) or README files. Only create documentation files if explicitly requested by the User.

## Working with the Innovation Laboratory

When making changes to the laboratory section:
1. **Follow the convergence philosophy** - Every feature should relate to AI, sustainability, or robotics
2. **Use semantic theming** - Colors should align with their meaning (time/knowledge/wealth)
3. **Maintain experiment focus** - Content should feel like active research, not static documentation
4. **Consider investment implications** - Features should connect to business value and scalability
5. **Preserve human-centric design** - Technology should enhance rather than replace human capabilities