# Architecture Overview - daveliew Portfolio

## Philosophy-Driven Architecture

The daveliew portfolio embodies the **Fitzgerald Principle**: "The test of a first-rate intelligence is the ability to hold two opposed ideas in the mind at the same time, and still retain the ability to function."

This principle manifests throughout the codebase as **productive tensions**:
- Simple surfaces with rich depth
- Technical rigor with human warmth
- Consistent patterns with intentional flexibility
- AI augmentation preserving human agency

## Core Architecture Patterns

### 1. Data-Driven Content Architecture
```
/data/ → TypeScript Interfaces → Components → UI
```
- JSON files define all content (skills, experiences, AI journey)
- TypeScript interfaces in `/types/` ensure type safety
- Components consume typed data through props
- No hardcoded content in components

### 2. Three-Pillar Theme System
```typescript
// Semantic color mappings in styles/theme.ts
{
  time: '#FF0081',      // Hot Pink - Human Agency/Energy
  knowledge: '#0CC0DF', // Teal - AI Capabilities/Growth
  wealth: '#F8B400'     // Beer Gold - Tangible Outcomes/Impact
}
```

### 3. Component Philosophy
Each component follows the "simple surface, rich depth" pattern:
- Clean, minimal public API
- Rich internal logic when needed
- Progressive disclosure of complexity
- Meaningful animations that enhance understanding

## Technical Stack

### Core Technologies
- **Next.js 14**: App Router with RSC support
- **TypeScript**: Strict mode for type safety
- **Tailwind CSS**: Utility-first with custom design system
- **Framer Motion**: Meaningful animations
- **Recharts**: Data visualization in skills sections

### Build Pipeline
```bash
prebuild → type-check → lint → philosophy-check → build
```
Each step must pass for deployment to succeed.

## Project Structure

### Navigation Architecture
```
Main Nav (5 focused pages):
├── Home
├── AI Journey (mega-menu with 9 sub-pages)
├── Laboratory (5 innovation views)
├── Philosophy
└── Contact
```

### Component Organization
```
/components/
├── layout/      # Site-wide components (Navbar, Footer)
├── common/      # Reusable UI components
├── skills/      # Skills visualization components
├── ai-journey/  # AI journey specific layouts
└── experience/  # Experience section components
```

### Data Flow
1. **Content Definition**: JSON files in `/data/`
2. **Type Safety**: TypeScript interfaces in `/types/`
3. **Component Consumption**: Props with full type checking
4. **Theme Application**: Semantic color utilities
5. **User Experience**: Consistent, meaningful interactions

## Philosophy Validation System

The codebase includes automated philosophy validation:
- Scores adherence to Fitzgerald Principle (currently 7%)
- Checks for productive tensions in components
- Validates semantic color usage
- Ensures human-centric design patterns

## Key Architectural Decisions

### 1. Streamlined Navigation
- Only 5 main pages to prevent sprawl
- Mega-menu for rich AI journey content
- Laboratory section for innovation experiments

### 2. Content Management
- All content in JSON files (not in components)
- TypeScript interfaces for type safety
- Easy updates without touching component code

### 3. Build Safety
- Pre-deployment validation prevents broken deployments
- ESLint strictness blocks bad code at Netlify level
- Philosophy checks maintain design coherence

### 4. Performance Optimizations
- Server-side rendering for initial load
- Client-side navigation for smooth transitions
- Lazy loading for heavy components
- Optimized images in public/images/

## Working with the Architecture

### Adding New Features
1. Define data structure in TypeScript interface
2. Create JSON data file
3. Build component following "simple surface, rich depth"
4. Apply semantic theming
5. Add meaningful animations if appropriate
6. Run full validation before committing

### Common Patterns
- Use `PageLayout` wrapper for consistent page structure
- Apply theme colors semantically (not decoratively)
- Follow existing component patterns in the same directory
- Maintain productive tensions in design decisions

### Testing & Validation
```bash
npm run pre-deploy  # Run before any deployment
npm run philosophy-check  # Check adherence to principles
npm run quick-check  # Fast validation during development
```

## Innovation Laboratory

The `/laboratory` section represents the convergence of three unstoppable trends:
1. **AI Revolution**: Exponential reasoning capabilities
2. **Sustainability Imperatives**: Climate-driven innovation
3. **Robotic Systems**: Physical automation at scale

Each laboratory view connects to real business value and investment opportunities while maintaining human-centric design.