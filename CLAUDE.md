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

### Key Architectural Patterns

**Data-Driven Content**: The site content is driven by JSON files in `/data/` that define skills, experiences, and AI journey information. These files follow strict TypeScript interfaces defined in `/types/`.

**Theme System**: Uses CSS custom properties for theming with a utility system in `styles/theme.ts` that provides type-safe color mappings for three main categories: time, knowledge, and wealth.

**Component Structure**:
- `/components/layout/` - Site-wide layout components (Navbar, Footer)
- `/components/common/` - Reusable UI components
- `/components/skills/` - Skills visualization components (charts, matrices, cards)
- `/components/ai-journey/` - AI journey specific layouts
- `/components/experience/` - Experience section components

**Routing Structure**: Uses Next.js App Router with nested routes for the AI journey section (`/ai-journey/overview`, `/ai-journey/portfolio`, etc.).

### Data Flow

1. JSON data files define content structure
2. TypeScript interfaces ensure type safety across components
3. Components consume data through props and render using Tailwind classes
4. Theme utilities provide consistent styling across skill visualizations

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