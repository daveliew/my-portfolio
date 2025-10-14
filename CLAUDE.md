# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Quick Reference

**Stack**: Next.js 15.5 + React 19 + TypeScript + Tailwind + Framer Motion
**Philosophy**: Fitzgerald Principle (opposing forces in productive tension)
**Path Alias**: `@/*` → root directory
**Critical**: Always run `npm run pre-deploy` before committing

## Development Commands

- `npm run dev` - Start development server (http://localhost:3000)
- `npm run build` - Build production (runs type-check + lint first)
- `npm run type-check` - TypeScript validation only
- `npm run lint` - ESLint validation only
- `npm run philosophy-check` - Fitzgerald Principle adherence scoring
- `npm run pre-deploy` - Full validation (TypeScript + ESLint + Philosophy + Build)
- `npm run quick-check` - Fast validation (TypeScript + ESLint + Philosophy, no build)

## Pre-Deployment Validation

**CRITICAL: Always check for build errors before making changes or committing code.**

**Workflow:**
1. Run `npm run pre-deploy` FIRST to identify existing errors
2. Make your changes
3. Run `npm run pre-deploy` again before committing
4. Fix any errors (typically ESLint quote escaping: `'` → `&apos;`, `"` → `&quot;`)
5. Deploy only when validation passes

**Validation Scripts:**
- `scripts/pre-deploy.js` - Runs all checks sequentially, stops on critical failures
- `scripts/validate-philosophy.js` - Scans components for Fitzgerald Principle patterns
- `scripts/quick-check.js` - Fast validation without build step

**Note**: The prebuild script runs type-check + lint automatically before build. ESLint errors WILL block Netlify deployments.

## Project Structure

**No `/src` directory** - All files at root level:

```
/app              - Next.js App Router pages & layouts
/components       - React components (layout, common, skills, ai-journey, experience)
/data             - JSON content files (never hardcode content in components)
/types            - TypeScript interfaces for data structures
/styles           - Global CSS and theme utilities
/utils            - Helper functions (animations.ts for framer-motion)
/scripts          - Validation and build scripts
/public           - Static assets
/ai_docs          - Comprehensive documentation
```

**App Router Structure:**
- Main pages at `/app/page.tsx`, `/app/philosophy/page.tsx`, `/app/contact/page.tsx`
- AI Journey nested routes: `/app/ai-journey/[section]/page.tsx`
  - Examples: `/ai-journey/portfolio`, `/ai-journey/how-to-learn/claude-mastery/tool-use`
- Laboratory at `/app/laboratory/page.tsx`

## Architecture Essentials

**Core Philosophy**: Portfolio embodying the Fitzgerald Principle - holding two opposed ideas simultaneously while retaining ability to function. Built around three trends:
1. **AI Revolution** - Exponential reasoning/automation capabilities
2. **Sustainability Imperatives** - Climate urgency driving green tech
3. **Robotic Systems** - Physical automation reaching cost parity

**Tech Stack**: Next.js 15.5 with React 19, leveraging App Router, Turbopack dev builds, and React 19's improved hydration.

**Data-Driven Content Pattern** (CRITICAL):
- Content lives in `/data/*.json` files, NOT hardcoded in components
- TypeScript interfaces in `/types/*.ts` enforce structure
- Components consume data via props only
- Never hardcode content directly in components

**Component Organization**:
- `/components/layout/` - Navbar, Footer (site-wide)
- `/components/common/` - Reusable UI (Card, CTAButton, PageLayout, etc.) with barrel exports
- `/components/skills/` - Skills visualizations (charts, matrices, cards)
- `/components/ai-journey/` - AI journey layouts (SubpageLayout)
- `/components/experience/` - Experience section components

## Theme System

**Color Philosophy** (semantic meaning):
- **Hot Pink (#FF0081)** - `time` - Human agency, energy, urgency
- **Teal (#0CC0DF)** - `knowledge` - AI capabilities, growth, learning
- **Beer Gold (#F8B400)** - `wealth` - Tangible outcomes, achievement, legacy

**Usage**: Theme utilities in `styles/theme.ts` provide type-safe color mappings:
```typescript
import { themeColors, getThemeColor } from '@/styles/theme';
// Use: themeColors.border.time, themeColors.text.knowledge, etc.
```

**Animation Utilities**: `utils/animations.ts` provides framer-motion helpers:
```typescript
import { fadeInUp, containerVariants, itemVariants } from '@/utils/animations';
```

## Common Development Patterns

### Content Updates
1. Edit JSON files in `/data/` (e.g., `skills.json`, `experiences.json`)
2. TypeScript interfaces in `/types/` enforce correct structure
3. Components automatically reflect changes

### ESLint Quote Escaping (Common Deployment Blocker)
**These errors WILL block Netlify deployments:**
- Replace `'` with `&apos;`
- Replace `"` with `&quot;`
- Always run `npm run lint` before committing

### Adding New Pages
1. Create page in `/app/[route]/page.tsx`
2. Add data to appropriate JSON file in `/data/`
3. Update Navbar links if needed in `/components/layout/Navbar.tsx`

## Key Dependencies

- **next** (^15.5.5) - React framework with App Router and Turbopack
- **react** (^19.2.0) - React 19 with improved hydration and Actions
- **typescript** (^5) - Strict type checking
- **tailwindcss** (^3.4.18) - Utility-first CSS
- **framer-motion** (^11.18.2) - Animations
- **recharts** (^2.15.4) - Data visualizations

**Build Config:**
- Path alias `@/*` maps to root (tsconfig.json)
- Strict TypeScript with `noEmit` flag
- Standalone output mode (next.config.mjs)

## Dave's Voice Guidelines

When writing content for this site:
- **Humble explorer**: "Still figuring it out", "happy to share what I've learned"
- **Direct but warm**: Clear insights without aggressive claims or sales language
- **Lead with contrarian insights**: "Most people use AI to do more. I use it to do less."
- **Gentle invitations**: "Happy to chat" not "Book a call now!"
- **Proper sentence case**: Web content, not WhatsApp casual
- **Virtuous cycle**: Build time → Capture knowledge → Create value → Share freely

**Avoid**: Corporate speak, aggressive claims ("10x your productivity!"), achievement focus, overly casual tone

## Comprehensive Documentation

Detailed documentation available in `/ai_docs/`:
- `developer_guide/` - Architecture, getting started, design system reference
- `quick_start/` - 15-minute setup procedures
- `technical/` - Complete references

---

**Philosophy Integration Note**: The codebase includes automated scoring for Fitzgerald Principle adherence. Components should demonstrate productive tensions (simple surfaces with rich depth, technical rigor with human warmth, AI augmentation preserving human agency).

# important-instruction-reminders
Do what has been asked; nothing more, nothing less.
NEVER create files unless they're absolutely necessary for achieving your goal.
ALWAYS prefer editing an existing file to creating a new one.
NEVER proactively create documentation files (*.md) or README files. Only create documentation files if explicitly requested by the User.
