# Design System Documentation

## Philosophy & Foundation

This design system embodies our core philosophy: **blending human wisdom with AI automation**. Every element is designed to be both human-intuitive and machine-readable.

### Core Principles
1. **Semantic Over Decorative**: Names should convey meaning, not just appearance
2. **Predictable Patterns**: Consistent structure enables both human understanding and AI assistance
3. **Progressive Enhancement**: Build from accessible foundations upward
4. **Three-Pillar Alignment**: Visual elements should reinforce our Time, Knowledge, Wealth framework

## Color System

### Semantic Color Palette
Our colors are organized around meaning, not just aesthetics:

```css
/* Primary Palette - Aligned with Three Pillars */
--accent-primary: #FF0081;    /* Hot Pink - Time/Energy */
--accent-secondary: #0CC0DF;  /* Teal - Knowledge/Growth */
--accent-tertiary: #F8B400;   /* Beer Gold - Wealth/Impact */

/* Foundation Colors */
--text-primary: #F9FAFB;      /* Off White - Clarity */
--text-secondary: #94A3B8;    /* Muted Grey - Supporting information */
--background-primary: #1E293B; /* Dark Grey - Focus and depth */
--background-secondary: #111827; /* Darker Grey - Elevation and structure */
```

### Usage Guidelines

#### Time/Energy (Hot Pink)
- **Use for**: Action items, deadlines, energy metrics
- **Meaning**: Urgency, vitality, human agency
- **Implementation**: `themeColors.text.time`, `themeColors.border.time`

#### Knowledge/Growth (Teal)
- **Use for**: Learning content, insights, AI capabilities
- **Meaning**: Growth, clarity, technological precision
- **Implementation**: `themeColors.text.knowledge`, `themeColors.background.knowledge`

#### Wealth/Impact (Beer Gold)
- **Use for**: Achievements, financial content, legacy items
- **Meaning**: Prosperity, warmth, tangible outcomes
- **Implementation**: `themeColors.text.wealth`, `themeColors.bar.wealth`

## Typography

### Font Philosophy
Two fonts create the human-AI balance:

- **Luna** (`font-heading`): For headings and navigation
  - Represents: Structure, clarity, AI precision
  - Usage: H1-H4, navbar, important labels

- **Quicksand** (`font-sans`): For body text
  - Represents: Warmth, readability, human connection
  - Usage: Paragraphs, descriptions, content

### Hierarchy
```css
h1: 4xl (36px) - Page titles, major sections
h2: 3xl (30px) - Section headers
h3: 2xl (24px) - Subsection headers  
h4: xl (20px) - Component headers
p: base (16px) - Body text
```

## Component Patterns

### Card Components
Cards represent contained units of information, following our philosophy:

```tsx
// Standard card pattern
<div className="card">
  {/* Content */}
</div>

// Pillar-specific cards
<div className={`card border-2 ${themeColors.border.time}`}>
  {/* Time-related content */}
</div>
```

### Button Patterns
Buttons follow semantic naming and predictable behavior:

```tsx
// Primary action (matches accent-primary)
<button className="btn">Primary Action</button>

// Secondary action (outlined)
<button className="btn-secondary">Secondary Action</button>
```

### Layout Patterns
Consistent spacing and structure:

```tsx
// Standard content container
<div className="container">
  <div className="text-block">
    {/* Centered content, max-width for readability */}
  </div>
</div>
```

## AI-Friendly Conventions

### For LLM Consumption
1. **Consistent naming patterns**: All theme colors follow `themeColors.[property].[pillar]`
2. **Type safety**: TypeScript definitions in `styles/theme.ts`
3. **Predictable structure**: Components follow similar patterns
4. **Semantic HTML**: Proper heading hierarchy and landmarks

### For Human-AI Collaboration
1. **Self-documenting code**: Class names explain their purpose
2. **Modular architecture**: Components can be composed and extended
3. **Clear boundaries**: Separation of concerns between layout, theming, and behavior

## Implementation Examples

### Three-Pillar Component
```tsx
const PillarCard = ({ pillar, children }: { pillar: 'time' | 'knowledge' | 'wealth', children: React.ReactNode }) => (
  <div className={`card border-2 ${themeColors.border[pillar]} ${themeColors.background[pillar]}`}>
    {children}
  </div>
);
```

### Accessibility Guidelines
- All colors meet WCAG AA contrast requirements
- Focus states use consistent patterns
- Semantic HTML structure throughout

## Best Practices

### For Humans
- Use the semantic theme colors rather than hardcoded values
- Follow the established typography hierarchy
- Maintain consistent spacing using Tailwind's scale

### For AI Assistants
- When creating new components, follow existing patterns in `components/common/`
- Use the `themeColors` object for consistency
- Reference this guide for color and typography decisions
- Test changes against the three-pillar philosophy

## Evolution Guidelines

This design system should evolve to better serve human-AI collaboration:
1. **Document patterns** as they emerge
2. **Maintain semantic meaning** in naming
3. **Test with both human and AI users**
4. **Update this guide** when adding new patterns

---

*This design system embodies our philosophy of human creativity + AI precision = empowering innovation.* 