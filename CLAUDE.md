# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server on http://localhost:3000
- `npm run build` - Build production version (runs type-check and lint first)
- `npm run type-check` - TypeScript type checking with `tsc --noEmit`
- `npm run lint` - ESLint with Next.js configuration
- `npm start` - Start production server

The prebuild script automatically runs type checking and linting before building.

## Architecture Overview

This is a Next.js 14 portfolio website using the App Router architecture with TypeScript, Tailwind CSS, and Framer Motion for animations.

### Core Philosophy Integration

The site embodies the philosophy of **blending human wisdom with AI automation**, structured around three unstoppable trends:

1. **AI Revolution** - Exponential capabilities in reasoning and automation
2. **Sustainability Imperatives** - Climate urgency driving green technology
3. **Robotic Systems** - Physical automation reaching cost parity

### Key Architectural Patterns

**Data-Driven Content**: The site content is driven by JSON files in `/data/` that define skills, experiences, and AI journey information. These files follow strict TypeScript interfaces defined in `/types/`.

**Theme System**: Uses CSS custom properties for theming with a utility system in `styles/theme.ts` that provides type-safe color mappings for three main categories: time, knowledge, and wealth. See `styles/design-system.md` for comprehensive guidelines.

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

See `styles/design-system.md` for complete usage guidelines and best practices for human-AI collaboration.

### Path Aliases

Uses `@/*` alias pointing to the root directory, configured in `tsconfig.json`.

## Key Dependencies

- **framer-motion** - For page transitions and animations
- **recharts** - For data visualizations in skills sections
- **next** - React framework with App Router
- **tailwindcss** - Utility-first CSS framework

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