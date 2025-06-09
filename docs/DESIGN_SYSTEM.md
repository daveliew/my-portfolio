# Design System - Fitzgerald Principle

> "The test of a first-rate intelligence is the ability to hold two opposed ideas in mind at the same time and still retain the ability to function." - F. Scott Fitzgerald

This design system embodies the Fitzgerald Principle through productive tensions in every component and pattern.

## Core Philosophy

Every design decision balances opposing forces:
- **Simplicity AND Power**
- **Consistency AND Flexibility** 
- **Immediate value AND Long-term vision**
- **Technical rigor AND Business pragmatism**

## Component Patterns

### 1. Cards - Simplicity with Depth

**Principle**: Cards appear simple but contain rich interaction and meaning.

```tsx
// Basic Card - Simple surface
<Card className="p-6">
  <h3>Simple Content</h3>
  <p>Clean, minimal presentation</p>
</Card>

// Interactive Card - Power beneath
<Card hover className="p-6">
  <h3>Interactive Content</h3>
  <p>Hover reveals depth and interaction</p>
  <Link href="/deeper">Explore →</Link>
</Card>

// Gradient Card - Philosophy container
<Card className="p-8 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border-blue-200 dark:border-blue-800">
  <blockquote>Philosophical content gets special treatment</blockquote>
</Card>
```

### 2. Sections - Structure with Flow

**Principle**: Rigid structure that creates smooth flow.

```tsx
// Standard Section Pattern
<motion.section
  {...sectionAnimation(index)}
  className="py-8 border-t border-gray-200 dark:border-gray-700"
>
  <SectionHeader title="Clear Purpose" />
  <Card className="p-6">
    <!-- Content that serves the mission -->
  </Card>
</motion.section>
```

### 3. Navigation - Focus with Access

**Principle**: Ruthless focus that still provides complete access.

```tsx
// Streamlined Navigation
const navLinks = [
  { href: '/', label: 'Home' },           // Starting point
  { href: '/philosophy', label: 'Philosophy' }, // The framework  
  { href: '/laboratory', label: 'Laboratory' },  // Live experiments
  { href: '/ai-journey', label: 'AI Journey' },  // Learning paths
  { href: '/contact', label: 'Contact' },         // Connection
];
```

### 4. Content Hierarchy - Proof over Claims

**Principle**: Show don't tell through structure itself.

```tsx
// Hero Pattern - Philosophy First
<div className="text-center">
  <h1>Dave Liew</h1>
  <p>Systems Implementation Pioneer</p>
  
  {/* Fitzgerald Quote - Intellectual Signature */}
  <div className="fitzgerald-quote-card">
    <blockquote>The Fitzgerald quote...</blockquote>
    <p>This is my operating system for pioneering human-AI collaboration.</p>
  </div>
</div>

// Content Pattern - Framework in Action
<section>
  <h2>What I'm Building</h2>
  <div className="grid md:grid-cols-3 gap-6">
    <Card>🧠 Philosophy</Card>  {/* The framework */}
    <Card>🧪 Laboratory</Card>  {/* Live experiments */}
    <Card>🚀 AI Journey</Card>  {/* Learning paths */}
  </div>
</section>
```

## Color & Visual Philosophy

### Productive Tension Colors

Colors that work in tension but create harmony:

```css
/* Philosophy/Framework */
--blue-gradient: from-blue-50 to-indigo-50;
--blue-border: border-blue-200;

/* Live Experiments/Proof */
--green-gradient: from-green-50 to-blue-50;
--green-border: border-green-200;

/* Insights/Learning */
--amber-gradient: from-amber-50 to-orange-50;
--amber-border: border-amber-200;
```

### Typography Tension

```css
/* Headlines - Bold simplicity */
.heading-primary: text-4xl font-bold

/* Body - Readable depth */
.body-text: text-lg leading-relaxed

/* Quotes - Philosophical weight */
.quote-text: text-xl italic text-center
```

## Animation Philosophy

**Principle**: Motion that reveals meaning, not just decoration.

```tsx
// Staggered Reveals - Building understanding
{items.map((item, index) => (
  <motion.div
    {...sectionAnimation(index)}
    key={item.id}
  >
    {item.content}
  </motion.div>
))}

// Hover Interactions - Depth on demand
<Card 
  hover
  whileHover={{ scale: 1.02 }}
  transition={{ duration: 0.2 }}
>
  Content that reveals more on interaction
</Card>
```

## Content Patterns

### The Triangle Foundation Pattern

```tsx
// Three opposing forces that strengthen each other
<div className="grid md:grid-cols-3 gap-6">
  <div>
    <h3>Self-Discovery</h3>
    <p>Understanding my nature</p>
  </div>
  <div>
    <h3>Family Generation</h3> 
    <p>Building for tomorrow</p>
  </div>
  <div>
    <h3>Wealth Generation</h3>
    <p>Funding the exploration</p>
  </div>
</div>
```

### The Productive Tensions Pattern

```tsx
// Showing opposing ideas that create value
<div className="grid md:grid-cols-2 gap-6">
  <div className="space-y-4">
    {leftTensions.map(tension => (
      <div className="flex items-center">
        <span className="w-3 h-3 bg-blue-500 rounded-full mr-4"></span>
        <span><strong>{tension.first}</strong> AND <strong>{tension.second}</strong></span>
      </div>
    ))}
  </div>
  <div className="space-y-4">
    {/* Similar pattern for right side */}
  </div>
</div>
```

### The Live Proof Pattern

```tsx
// Evidence over claims
<Card className="bg-gradient-to-r from-green-50 to-blue-50">
  <h3>⚡ Current Experiment</h3>
  <p>What I'm testing right now</p>
  <p className="text-green-600 font-medium">Status: Active</p>
</Card>
```

## Component Guidelines

### When Creating New Components

1. **Ask the Fitzgerald Question**: What opposing forces does this balance?
2. **Serve the Mission**: Does this help demonstrate human-AI collaboration?
3. **Simple Surface, Rich Depth**: Can users understand immediately but discover more?
4. **Consistent but Flexible**: Does it follow patterns but allow customization?

### Example Component Creation

```tsx
// ✅ Good - Embodies tensions
export function InsightCard({ insight, status }) {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-3">
        {insight.icon} {insight.title}
      </h3>
      <p className="text-gray-600 mb-4">
        {insight.description}
      </p>
      <div className="flex justify-between text-sm">
        <span>Type:</span>
        <span className={`font-medium ${getStatusColor(status)}`}>
          {status}
        </span>
      </div>
    </Card>
  );
}

// ❌ Bad - Just decoration
export function PrettyCard({ children }) {
  return (
    <div className="fancy-animations-everywhere">
      {children}
    </div>
  );
}
```

## Evolution Guidelines

As the design system evolves, maintain the core tensions:

- **Add complexity that creates simplicity**
- **Build constraints that enable freedom**
- **Create patterns that allow breaking patterns**
- **Design systems that feel human while being systematic**

The goal isn't perfection—it's productive tension that creates value.