# Getting Started - daveliew Developer Guide

## Prerequisites

- Node.js 18+ and npm
- Git
- Basic knowledge of Next.js, TypeScript, and Tailwind CSS

## Initial Setup

```bash
# Clone the repository
git clone [repository-url]
cd daveliew

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit http://localhost:3000 to see the site.

## Development Workflow

### 1. Before Making Changes
```bash
# ALWAYS run this first to check for existing issues
npm run pre-deploy
```

### 2. During Development
```bash
# Fast checks during development
npm run quick-check

# Type checking only (faster than full build)
npm run type-check

# Lint checking
npm run lint

# Philosophy adherence check
npm run philosophy-check
```

### 3. Before Committing
```bash
# Full validation suite (REQUIRED)
npm run pre-deploy
```

## Common Development Tasks

### Adding New Content

1. **Update JSON data files** in `/data/`
   - `skills.json` - Technical skills and capabilities
   - `experiences.json` - Work experience entries
   - `ai-journey.json` - AI journey content
   - `ai-journey-portfolio.json` - Portfolio items
   - `ai-journey-learning-paths.json` - Learning resources

2. **Type safety is enforced** - Check `/types/` for interfaces

### Modifying Components

1. **Follow existing patterns** in the same directory
2. **Use semantic theming**:
   ```tsx
   import { themeColors } from '@/styles/theme';
   
   // Use semantic colors
   className={`text-${themeColors.knowledge}`} // AI/Knowledge
   className={`text-${themeColors.time}`}      // Human/Energy
   className={`text-${themeColors.wealth}`}    // Impact/Outcomes
   ```

3. **Maintain "simple surface, rich depth"** philosophy

### Adding New Pages

1. Create page in appropriate directory under `/app/`
2. Use `PageLayout` component for consistency
3. Follow Next.js 15 App Router conventions
4. Add navigation entry if needed

## ESLint Quote Escaping

**CRITICAL**: ESLint will block deployments for quote issues.

Common fixes:
- `'` → `&apos;`
- `"` → `&quot;`
- `` ` `` → `&grave;` (if in JSX)

## Philosophy Integration

Every component should embody productive tensions:
- Technical excellence WITH human warmth
- Simplicity WITH depth
- Consistency WITH flexibility

Run `npm run philosophy-check` to validate adherence.

## File Organization

```
/app/              # Next.js pages and routes
/components/       # React components
/data/            # JSON content files
/types/           # TypeScript interfaces
/styles/          # Global styles and theme
/public/          # Static assets
/utils/           # Utility functions
/scripts/         # Build and validation scripts
```

## Debugging Tips

1. **Build errors**: Run `npm run pre-deploy` for detailed validation
2. **Type errors**: Check `/types/` for correct interfaces
3. **Styling issues**: Verify Tailwind classes and theme usage
4. **Content not updating**: Clear `.next/` cache and restart dev server

## Performance Considerations

- Keep animations meaningful (not decorative)
- Lazy load heavy components
- Optimize images before adding to `/public/images/`
- Use Server Components where possible

## Getting Help

1. Check existing patterns in similar components
2. Review type definitions in `/types/`
3. Consult design system in `/ai_docs/developer_guide/design-system.md`
4. Run validation scripts for immediate feedback