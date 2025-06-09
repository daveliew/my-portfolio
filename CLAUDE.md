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

This is a Next.js 14 portfolio website using the App Router architecture with TypeScript, Tailwind CSS, and Framer Motion for animations. The site embodies the **Fitzgerald Principle** throughout its design and implementation.

### Philosophy-Driven Design System

**The Fitzgerald Principle**: "The test of a first-rate intelligence is the ability to hold two opposed ideas in mind at the same time and still retain the ability to function." This principle guides every design decision.

**Productive Tensions in Architecture**:
- **Immediate practical value AND long-term civilizational contribution**
- **Technical rigor AND business pragmatism** 
- **Simple user experience AND complex underlying systems**
- **Consistent patterns AND flexible customization**

### Key Architectural Patterns

**Data-Driven Content**: The site content is driven by JSON files in `/data/` that define skills, experiences, and AI journey information. These files follow strict TypeScript interfaces defined in `/types/`.

**Philosophy-First Component Design**: Every component balances opposing forces - simplicity with power, consistency with flexibility, aesthetics with functionality.

**Component Structure**:
- `/components/layout/` - Site-wide layout components (Navbar, Footer)
- `/components/common/` - Reusable UI components following Fitzgerald Principle
- `/components/skills/` - Skills visualization components (charts, matrices, cards)
- `/components/ai-journey/` - AI journey specific layouts
- `/components/experience/` - Experience section components

**Streamlined Navigation**: Home | Philosophy | Laboratory | AI Journey | Contact
- **Philosophy**: The intellectual framework (Fitzgerald Principle, Triangle Foundation)
- **Laboratory**: Live experiments in human-AI collaboration  
- **AI Journey**: Learning frameworks for the next generation

**Theme System**: Uses CSS custom properties for theming with a utility system in `styles/theme.ts` that provides type-safe color mappings.

**Routing Structure**: Uses Next.js App Router with laser-focused structure eliminating distraction pages (removed /now, /personal, /work).

### Data Flow & Design Philosophy

1. **Philosophy defines structure** - Fitzgerald Principle organizing principle
2. **JSON data files** define content structure with TypeScript interfaces
3. **Components embody tensions** - each component balances opposing forces
4. **Animations create flow** - Framer Motion for meaningful transitions
5. **Content shows proof** - every page demonstrates the philosophy in action

### Design System Principles

**Simplicity with Impact**: Every element serves the core mission of demonstrating first-rate intelligence through productive tensions.

**Consistency with Flexibility**: Reusable patterns that can adapt while maintaining philosophical coherence.

**Proof over Claims**: Show don't tell - the site structure itself demonstrates human-AI collaboration principles.

### Path Aliases

Uses `@/*` alias pointing to the root directory, configured in `tsconfig.json`.

## Key Dependencies

- **framer-motion** - For page transitions and animations
- **recharts** - For data visualizations in skills sections
- **next** - React framework with App Router
- **tailwindcss** - Utility-first CSS framework

## Design System & Philosophy

This codebase follows a philosophy-driven design system based on the **Fitzgerald Principle**: "The test of a first-rate intelligence is the ability to hold two opposed ideas in mind at the same time and still retain the ability to function."

**Key Documentation:**
- `/docs/DESIGN_SYSTEM.md` - Complete component patterns and philosophy guidelines
- `/DESIGN_SYSTEM_VERSION.md` - Version history and evolution tracking
- `npm run philosophy-check` - Automated validation of philosophy adherence

**Current Philosophy Score:** 7% (v1.0.0 baseline)
**Goal:** Increase philosophy integration while maintaining functional excellence.

Every component should balance productive tensions: simplicity AND depth, consistency AND flexibility, immediate value AND long-term vision.

# important-instruction-reminders
Do what has been asked; nothing more, nothing less.
NEVER create files unless they're absolutely necessary for achieving your goal.
ALWAYS prefer editing an existing file to creating a new one.
NEVER proactively create documentation files (*.md) or README files. Only create documentation files if explicitly requested by the User.