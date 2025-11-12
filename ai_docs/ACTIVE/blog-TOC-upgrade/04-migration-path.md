# TOC Migration Path: Winborne → ROJ Upgrade Strategy

**Date**: 2025-01-11
**Status**: Strategic Planning

## Overview

This document outlines the progressive enhancement path from Winborne's simple TOC to ROJ's production-grade architecture, with clear triggers for when each upgrade is justified.

---

## Starting Point: Winborne-Style Implementation

### What We Build Initially (2-3 hours)

**Single component**: `/components/common/TableOfContents.tsx` (~300 lines)

**Features**:
- DOM-based heading extraction (h2, h3)
- Manual scroll tracking with 80px offset
- Active section highlighting (left border + bg color from ROJ)
- Mobile: Floating button + right-sliding drawer
- Desktop: Sticky sidebar (top-24, max-h-[calc(100vh-8rem)])
- Simple ID generation: `.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-')`

**Enhancements from ROJ**:
- ✅ Use ROJ's `generateAnchorId()` (Unicode-safe, future-proof)
- ✅ ARIA labels for accessibility
- ✅ ROJ's visual styling (left border + background on active)

**Skip from ROJ** (not needed yet):
- ❌ IntersectionObserver (manual scroll sufficient for short pages)
- ❌ Hierarchical nesting (h2/h3 flat structure works)
- ❌ Localization infrastructure (English-only)
- ❌ Multiple TOC components (single use case)
- ❌ Progress bar component

**Covers**: 80% of use cases with 20% of complexity

---

## Upgrade Phase 1: Performance Enhancement

### Trigger: Scroll Tracking Feels Sluggish

**When to upgrade**:
- Pages exceed 3000 words regularly
- User reports indicate slow/janky scroll behavior
- Mobile scroll tracking has noticeable lag
- 20+ headings in a single page

**What to upgrade**:
- Replace manual scroll event listener with IntersectionObserver
- Add debouncing (100ms) to prevent excessive re-renders
- Keep single-component structure (no refactoring)

**Implementation** (~1-2 hours):

```typescript
// BEFORE: Manual scroll tracking
useEffect(() => {
  const handleScroll = () => {
    const headingElements = toc.map(item =>
      document.getElementById(item.id)
    ).filter(Boolean);

    const currentSection = headingElements.reverse().find(el =>
      window.scrollY + 100 >= el.offsetTop
    );

    if (currentSection) setActiveId(currentSection.id);
  };

  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, [toc]);

// AFTER: IntersectionObserver
const useActiveSection = (headingIds: string[]) => {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleHeadings = entries
          .filter(entry => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visibleHeadings.length > 0) {
          setActiveId(visibleHeadings[0].target.id);
        }
      },
      {
        rootMargin: '-20% 0px -70% 0px', // 20% from top, 70% from bottom
        threshold: 0
      }
    );

    headingIds.forEach(id => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [headingIds]);

  return activeId;
};
```

**Files to modify**:
- `/components/common/TableOfContents.tsx` (swap scroll tracking logic)

**Testing checklist**:
- [ ] Active section updates smoothly on scroll
- [ ] No lag on mobile devices
- [ ] Correct section highlighted when near bottom of page
- [ ] Browser history/back button still works

**Effort**: 1-2 hours
**ROI**: Significant performance improvement, no complexity increase

---

## Upgrade Phase 2: Hierarchical Support

### Trigger: Content Needs Deep Nesting

**When to upgrade**:
- Technical documentation requires h4/h5/h6 levels
- API reference pages need deep structure
- User requests collapsible nested sections
- Visual hierarchy clarity needed for complex topics

**What to upgrade**:
- Add recursive `TOCItem` component
- Change data structure to support `children` array
- Update heading extraction to build hierarchy
- Add visual indentation for nested levels

**Implementation** (~2-3 hours):

**New type definition**:
```typescript
// BEFORE: Flat structure
interface TOCHeading {
  id: string;
  text: string;
  level: number;
}

// AFTER: Hierarchical structure
interface TOCHeading {
  id: string;
  title: string;
  level: number;
  children?: TOCHeading[]; // Recursive nesting
}
```

**New recursive component** (`/components/common/TOCItem.tsx`):
```typescript
interface TOCItemProps {
  heading: TOCHeading;
  activeId: string | null;
  onItemClick: (id: string) => void;
}

export function TOCItem({ heading, activeId, onItemClick }: TOCItemProps) {
  const isActive = activeId === heading.id;

  return (
    <div>
      <a
        href={`#${heading.id}`}
        onClick={(e) => {
          e.preventDefault();
          onItemClick(heading.id);
        }}
        className={cn(
          "block py-1 text-sm transition-colors border-l-2",
          `pl-${(heading.level - 1) * 3}`, // Dynamic indentation
          isActive
            ? "border-blue-600 bg-blue-50 font-semibold"
            : "border-transparent hover:border-gray-300"
        )}
      >
        {heading.title}
      </a>

      {/* Recursive children */}
      {heading.children && heading.children.length > 0 && (
        <div className="ml-3">
          {heading.children.map(child => (
            <TOCItem
              key={child.id}
              heading={child}
              activeId={activeId}
              onItemClick={onItemClick}
            />
          ))}
        </div>
      )}
    </div>
  );
}
```

**Hierarchy building utility** (`/utils/buildHeadingHierarchy.ts`):
```typescript
export function buildHierarchy(headings: TOCHeading[]): TOCHeading[] {
  const root: TOCHeading[] = [];
  const stack: TOCHeading[] = [];

  headings.forEach(heading => {
    // Find parent based on level
    while (stack.length > 0 && stack[stack.length - 1].level >= heading.level) {
      stack.pop();
    }

    if (stack.length === 0) {
      root.push(heading);
    } else {
      const parent = stack[stack.length - 1];
      if (!parent.children) parent.children = [];
      parent.children.push(heading);
    }

    stack.push(heading);
  });

  return root;
}
```

**Files to create**:
- `/components/common/TOCItem.tsx` (recursive component)
- `/utils/buildHeadingHierarchy.ts` (hierarchy building)

**Files to modify**:
- `/components/common/TableOfContents.tsx` (use TOCItem, update extraction)
- `/types/blog.ts` (add `children` to interface)

**Testing checklist**:
- [ ] h2 → h3 → h4 nesting displays correctly
- [ ] Visual indentation clear at all levels
- [ ] Active highlighting works on nested items
- [ ] Click navigation works for all levels
- [ ] Collapsing/expanding optional (can add later)

**Effort**: 2-3 hours
**ROI**: Supports complex documentation, better visual hierarchy

---

## Upgrade Phase 3: Modular Architecture

### Trigger: Multiple TOC Styles Needed

**When to upgrade**:
- Blog posts need different TOC than technical docs
- Some pages need inline TOC, others need sidebar
- Progress bar needed for some content types
- Different visual styles per content category

**What to upgrade**:
- Split `TableOfContents.tsx` into multiple specialized components
- Create shared utilities module
- Add configurable options (depth, style, features)
- Extract common logic to hooks

**Implementation** (~3-4 hours):

**New component structure**:
```
/components/common/TableOfContents/
├── index.tsx                   # Main wrapper (exports all variants)
├── BlogTableOfContents.tsx     # Simplified for blog posts
├── DocTableOfContents.tsx      # Full-featured for documentation
├── InlineTOC.tsx               # Inline card variant
├── SidebarTOC.tsx              # Sticky sidebar variant
├── MobileTOCDrawer.tsx         # Mobile drawer (shared)
├── TOCItem.tsx                 # Recursive item renderer (shared)
├── ProgressBar.tsx             # Reading progress (optional)
├── types.ts                    # Shared interfaces
├── utilities.ts                # Heading flattening, etc.
├── hooks/
│   ├── useActiveSection.ts     # IntersectionObserver logic
│   └── useScrollProgress.ts    # Progress bar calculation
└── utils/
    ├── extractHeadings.ts      # Heading extraction
    └── buildHierarchy.ts       # Hierarchy building
```

**Example specialized components**:

```typescript
// BlogTableOfContents.tsx - Simple flat structure
export function BlogTableOfContents({ headings }: Props) {
  const activeId = useActiveSection(headings.map(h => h.id));

  return (
    <Card>
      <h3>In This Article</h3>
      <nav>
        {headings.map(heading => (
          <a href={`#${heading.id}`}>{heading.title}</a>
        ))}
      </nav>
    </Card>
  );
}

// DocTableOfContents.tsx - Full-featured with hierarchy + progress
export function DocTableOfContents({ headings, showProgress = false }: Props) {
  const activeId = useActiveSection(headings.map(h => h.id));
  const progress = useScrollProgress();

  return (
    <aside className="sticky top-24">
      {showProgress && <ProgressBar value={progress} />}
      <h3>Table of Contents</h3>
      <nav>
        {headings.map(heading => (
          <TOCItem heading={heading} activeId={activeId} />
        ))}
      </nav>
    </aside>
  );
}
```

**Configurable options**:
```typescript
interface TOCOptions {
  variant: 'blog' | 'doc' | 'inline' | 'sidebar';
  showProgress?: boolean;
  maxDepth?: number; // 2 = h2/h3, 3 = h2/h3/h4
  style?: 'default' | 'minimal' | 'detailed';
  locale?: 'en' | 'zh-CN';
}
```

**Files to create** (~11 files, like ROJ):
- All structure above

**Files to modify**:
- Update pages to use specific TOC variant
- Update types to include configuration

**Testing checklist**:
- [ ] Blog TOC variant works on blog posts
- [ ] Doc TOC variant works on documentation
- [ ] Shared logic doesn't duplicate
- [ ] Each variant maintains its styling
- [ ] Configuration options work correctly

**Effort**: 3-4 hours
**ROI**: Reusable across content types, easier to maintain variants separately

---

## Upgrade Phase 4: International Support

### Trigger: Non-English Content Added

**When to upgrade**:
- Launching Chinese/Spanish/other language versions
- User-generated content includes Unicode characters
- URL slugs need to support international characters

**What to upgrade**:
- Already handled by ROJ's `generateAnchorId()` (if adopted in Phase 0)
- Add locale support infrastructure (if modular architecture exists)
- Add translations for TOC UI text

**Implementation** (~2-3 hours if starting from scratch, ~0 hours if using `generateAnchorId()`):

**If using ROJ's `generateAnchorId()` from start**: No code changes needed! Function already supports:
- Unicode characters (Chinese, Arabic, accents)
- HTML entity decoding (`&amp;` → `&`, etc.)
- Fallback mechanism for edge cases

**If using Winborne's naive regex**: Replace ID generation:

```typescript
// BEFORE: ASCII-only
const id = text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');

// AFTER: Unicode-aware
const id = generateAnchorId(text); // From ROJ
```

**Add locale support** (if modular architecture exists):

```typescript
const translations = {
  'en': {
    toc: 'Table of Contents',
    readingProgress: 'Reading Progress',
    inThisArticle: 'In This Article'
  },
  'zh-CN': {
    toc: '目录',
    readingProgress: '阅读进度',
    inThisArticle: '本文内容'
  }
};

export function TableOfContents({ locale = 'en' }: Props) {
  const t = translations[locale];

  return (
    <nav aria-label={t.toc}>
      <h3>{t.toc}</h3>
      {/* ... */}
    </nav>
  );
}
```

**Files to modify**:
- `/utils/generateHeadingId.ts` (if not using ROJ's version)
- `/components/common/TableOfContents/types.ts` (add locale to options)
- All TOC components (use translated strings)

**Testing checklist**:
- [ ] Chinese characters in headings generate valid IDs
- [ ] Arabic/RTL text handled correctly
- [ ] Accented characters preserved (café, naïve, etc.)
- [ ] HTML entities decoded properly
- [ ] UI text translates correctly

**Effort**:
- 0 hours if using `generateAnchorId()` from start
- 2-3 hours if adding Unicode support + localization

**ROI**: Supports international audience, prevents future refactoring

---

## Upgrade Phase 5: Advanced Features

### Trigger: UX Enhancement Requests

**When to upgrade**:
- Analytics show low article completion rates (add progress bar)
- Users want to collapse/expand nested sections
- Keyboard navigation requested for accessibility
- Search within TOC requested

**What to upgrade** (pick and choose):

#### 5A: Reading Progress Bar (1 hour)

```typescript
const useScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrolled = window.scrollY;
      const progress = (scrolled / documentHeight) * 100;

      setProgress(Math.min(100, Math.max(0, progress)));
    };

    window.addEventListener('scroll', updateProgress);
    updateProgress();

    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  return progress;
};

export function ProgressBar({ value }: { value: number }) {
  return (
    <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
      <div
        className="h-full bg-blue-600 transition-all duration-300"
        style={{ width: `${value}%` }}
      />
    </div>
  );
}
```

#### 5B: Collapsible Sections (1-2 hours)

```typescript
export function TOCItem({ heading, activeId }: Props) {
  const [isExpanded, setIsExpanded] = useState(true);
  const hasChildren = heading.children && heading.children.length > 0;

  return (
    <div>
      <div className="flex items-center">
        {hasChildren && (
          <button onClick={() => setIsExpanded(!isExpanded)}>
            {isExpanded ? <ChevronDown /> : <ChevronRight />}
          </button>
        )}
        <a href={`#${heading.id}`}>{heading.title}</a>
      </div>

      {hasChildren && isExpanded && (
        <div className="ml-6">
          {heading.children.map(child => (
            <TOCItem key={child.id} heading={child} activeId={activeId} />
          ))}
        </div>
      )}
    </div>
  );
}
```

#### 5C: Keyboard Navigation (1 hour)

```typescript
useEffect(() => {
  const handleKeyPress = (e: KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      // Move to next heading
      focusNextHeading();
    } else if (e.key === 'ArrowUp') {
      // Move to previous heading
      focusPreviousHeading();
    } else if (e.key === 'Enter') {
      // Navigate to focused heading
      navigateToFocusedHeading();
    }
  };

  document.addEventListener('keydown', handleKeyPress);
  return () => document.removeEventListener('keydown', handleKeyPress);
}, []);
```

#### 5D: TOC Search (2-3 hours)

```typescript
export function SearchableTOC({ headings }: Props) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredHeadings = useMemo(() => {
    if (!searchTerm) return headings;

    return headings.filter(h =>
      h.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [headings, searchTerm]);

  return (
    <div>
      <input
        type="search"
        placeholder="Search sections..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <nav>
        {filteredHeadings.map(heading => (
          <TOCItem heading={heading} activeId={activeId} />
        ))}
      </nav>
    </div>
  );
}
```

**Effort**: 1-3 hours per feature
**ROI**: Improved UX, higher engagement, better accessibility

---

## Decision Tree: When to Upgrade

```
Start Here: Winborne-style single component (2-3 hours)
    |
    ├─ Pages >3000 words? → Phase 1: IntersectionObserver (1-2 hours)
    |
    ├─ Need h4/h5 nesting? → Phase 2: Hierarchical support (2-3 hours)
    |
    ├─ Multiple TOC styles? → Phase 3: Modular architecture (3-4 hours)
    |
    ├─ International content? → Phase 4: Unicode support (0-3 hours)*
    |
    └─ UX enhancements? → Phase 5: Advanced features (1-3 hours each)

* 0 hours if using generateAnchorId() from start
```

---

## Cost-Benefit Analysis

| Phase | Effort | When Needed | ROI | Urgency |
|-------|--------|-------------|-----|---------|
| **Start (Winborne)** | 2-3 hrs | Now | ⭐⭐⭐⭐⭐ | High |
| **Phase 1: Performance** | 1-2 hrs | Pages >3000 words | ⭐⭐⭐⭐ | Low (wait for trigger) |
| **Phase 2: Hierarchy** | 2-3 hrs | Deep nesting needed | ⭐⭐⭐ | Low (wait for trigger) |
| **Phase 3: Modular** | 3-4 hrs | Multiple styles needed | ⭐⭐⭐⭐ | Low (wait for trigger) |
| **Phase 4: Unicode** | 0-3 hrs | International content | ⭐⭐⭐⭐⭐ | Medium (do early if planning) |
| **Phase 5: Features** | 1-3 hrs ea | User requests | ⭐⭐⭐ | Low (nice-to-have) |

---

## Recommendation for daveliew.com

### Immediate (Week 1):

✅ **Implement Winborne-style TOC** (2-3 hours)
- Single component
- Manual scroll tracking
- **BUT use ROJ's `generateAnchorId()`** (future-proof)
- h2/h3 flat structure

### Near-term (1-3 months):

⏸️ **Wait for triggers before upgrading**
- Monitor page performance
- Track user feedback
- Measure content complexity

### Long-term (3-6 months):

🔄 **Upgrade selectively as needed**
- Phase 1 if performance issues
- Phase 2 if deep docs needed
- Phase 3 if multiple content types
- Phase 4 already handled (if using `generateAnchorId()`)
- Phase 5 based on user requests

### Total Investment:

**Initial**: 2-3 hours
**Upgrades**: 0-12 hours (spread over time, only if triggered)

**Maximum complexity**: ROJ-level architecture (11 components)
**Minimum complexity**: Winborne-style (single component)
**Recommended**: Start minimal, upgrade incrementally

---

## Key Insight: Progressive Enhancement

**Don't build for future complexity that may never come.**

- Start simple (Winborne)
- Upgrade only when triggered by real needs
- Each phase is self-contained (no throwing away work)
- Total effort scales with actual requirements

**80/20 rule**: Winborne gets 80% of value with 20% of effort. Only upgrade when the remaining 20% of value is actually needed.
