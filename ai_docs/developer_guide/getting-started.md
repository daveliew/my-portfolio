# Getting Started - daveliew Portfolio

## Prerequisites

- Node.js 18+ and npm
- Git
- Basic knowledge of Next.js, TypeScript, and Tailwind CSS

## Quick Setup

```bash
git clone [repository-url]
cd daveliew
npm install
npm run dev
```

Visit http://localhost:3000

## Key References

- **Commands & Workflow**: See `/CLAUDE.md` → Development Commands section
- **Design System**: See `/ai_docs/developer_guide/design-system.md`
- **Architecture**: See `/ai_docs/architecture/codebase-analysis.md`

## Content Updates

All content lives in `/data/*.json` files with TypeScript interfaces in `/types/`:

| File | Content |
|------|---------|
| `skills.json` | Technical skills, capabilities |
| `experiences.json` | Work experience |
| `ai-journey.json` | AI journey content, case studies |
| `sustainability.json` | Lab experiments, investment thesis |

**Never hardcode content in components** - always use data files.

## Debugging Tips

1. **Build errors**: Run `npm run pre-deploy` for detailed validation
2. **Type errors**: Check `/types/` for correct interfaces
3. **Styling issues**: Verify Tailwind classes and theme usage in `styles/theme.ts`
4. **Content not updating**: Clear `.next/` cache: `rm -rf .next && npm run dev`

## Performance Considerations

- Use Server Components where possible
- Keep animations meaningful (not decorative)
- Optimize images before adding to `/public/images/`
- Lazy load heavy components
