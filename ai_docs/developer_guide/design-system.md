# Design System - Fitzgerald Principle

> "The test of a first-rate intelligence is the ability to hold two opposed ideas in mind at the same time and still retain the ability to function." - F. Scott Fitzgerald

This design system embodies the Fitzgerald Principle through productive tensions in every component.

---

## Core Philosophy

Every design decision balances opposing forces:
- **Simplicity AND Power**
- **Consistency AND Flexibility**
- **Human warmth AND Technical rigor**
- **Immediate value AND Long-term vision**

### Three-Pillar Alignment
Visual elements reinforce the Time, Knowledge, Wealth framework throughout.

---

## Color System

### Semantic Color Palette

Colors organized by meaning, not just aesthetics:

```css
/* Primary Palette - Three Pillars */
--accent-primary: #FF0081;    /* Hot Pink - Time/Energy */
--accent-secondary: #0CC0DF;  /* Teal - Knowledge/Growth */
--accent-tertiary: #F8B400;   /* Beer Gold - Wealth/Impact */

/* Foundation Colors */
--text-primary: #F9FAFB;      /* Off White */
--text-secondary: #94A3B8;    /* Muted Grey */
--background-primary: #1E293B; /* Dark Grey */
--background-secondary: #111827; /* Darker Grey */
```

### Usage by Pillar

| Pillar | Color | Use For | Implementation |
|--------|-------|---------|----------------|
| **Time/Energy** | Hot Pink | Actions, urgency, human agency | `themeColors.text.time` |
| **Knowledge/Growth** | Teal | Learning, insights, AI capabilities | `themeColors.text.knowledge` |
| **Wealth/Impact** | Beer Gold | Achievements, outcomes, legacy | `themeColors.text.wealth` |

### Gradient Patterns

```css
/* Philosophy containers */
bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20

/* Live experiments */
bg-gradient-to-r from-green-50 to-blue-50

/* Insights/learning */
bg-gradient-to-r from-amber-50 to-orange-50
```

---

## Typography

### Fonts
- **Luna** (`font-heading`): Headings, navigation - Structure, AI precision
- **Quicksand** (`font-sans`): Body text - Warmth, human connection

### Hierarchy
```
h1: 4xl (36px) - Page titles
h2: 3xl (30px) - Section headers
h3: 2xl (24px) - Subsection headers
h4: xl (20px) - Component headers
p: base (16px) - Body text
```

---

## Component Patterns

### Cards - Simplicity with Depth

```tsx
// Basic Card
<Card className="p-6">
  <h3>Simple Content</h3>
</Card>

// Pillar-specific Card
<Card className={`p-6 border-2 ${themeColors.border.time}`}>
  {/* Time-related content */}
</Card>

// Philosophy Card (gradient)
<Card className="p-8 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20">
  <blockquote>Philosophical content</blockquote>
</Card>
```

### Sections - Structure with Flow

```tsx
<motion.section
  {...sectionAnimation(index)}
  className="py-8 border-t border-gray-200 dark:border-gray-700"
>
  <SectionHeader title="Clear Purpose" />
  <Card className="p-6">{/* Content */}</Card>
</motion.section>
```

### Animation - Motion with Meaning

```tsx
// Staggered reveals
{items.map((item, index) => (
  <motion.div {...sectionAnimation(index)} key={item.id}>
    {item.content}
  </motion.div>
))}

// Hover depth
<Card whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
  Content that reveals more on interaction
</Card>
```

---

## AI-Friendly Conventions

### For LLM Consumption
1. **Consistent naming**: `themeColors.[property].[pillar]`
2. **Type safety**: TypeScript definitions in `styles/theme.ts`
3. **Predictable structure**: Components follow similar patterns
4. **Semantic HTML**: Proper heading hierarchy and landmarks

### For Human-AI Collaboration
1. **Self-documenting code**: Class names explain purpose
2. **Modular architecture**: Composable components
3. **Clear boundaries**: Separation of layout, theming, behavior

---

## Component Creation Guidelines

When creating new components, ask:

1. **Fitzgerald Question**: What opposing forces does this balance?
2. **Mission Alignment**: Does this demonstrate human-AI collaboration?
3. **Simple Surface, Rich Depth**: Understand immediately, discover more?
4. **Consistent but Flexible**: Follows patterns, allows customization?

```tsx
// Good - Embodies tensions
export function InsightCard({ insight, status }) {
  return (
    <Card className="p-6">
      <h3>{insight.icon} {insight.title}</h3>
      <p className="text-gray-600">{insight.description}</p>
      <span className={getStatusColor(status)}>{status}</span>
    </Card>
  );
}

// Bad - Just decoration
export function PrettyCard({ children }) {
  return <div className="fancy-animations">{children}</div>;
}
```

---

## Best Practices

### For Humans
- Use semantic theme colors, not hardcoded values
- Follow typography hierarchy
- Maintain consistent spacing via Tailwind scale
- All colors meet WCAG AA contrast

### For AI Assistants
- Follow patterns in `components/common/`
- Use the `themeColors` object
- Reference this guide for decisions
- Test against three-pillar philosophy

---

## Evolution

Maintain core tensions as the system evolves:
- Add complexity that creates simplicity
- Build constraints that enable freedom
- Create patterns that allow breaking patterns
- Design systems that feel human while being systematic

*The goal isn't perfection—it's productive tension that creates value.*

---

## Philosophy Workflow

### Before Major Releases

1. **`npm run philosophy-check`** - Automated Fitzgerald Principle scoring
2. **Review Component Patterns** - Ensure new additions follow established tensions
3. **Test User Journey** - Verify philosophy is clear throughout experience
4. **Document Changes** - Explain how changes advance or refine philosophy

### Contributing to Philosophy Evolution

When proposing design system changes, answer:

1. **Identify the Tension** - What opposing forces does this balance?
2. **Serve the Mission** - How does this advance human-AI collaboration?
3. **Show Don't Tell** - Can this demonstrate rather than just describe?
4. **Maintain Coherence** - Does this fit with existing philosophy?
