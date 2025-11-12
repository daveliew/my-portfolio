# TOC Research Findings: ROJ vs Winborne Implementations

**Date**: 2025-01-11
**Status**: Comprehensive Analysis Complete

## Executive Summary

Two validated TOC implementations found in Dave's projects:

- **ROJ**: Production-grade 11-component architecture with IntersectionObserver, Unicode support, hierarchical nesting
- **Winborne**: Lightweight 300-line single-component with manual scroll tracking, simple h2/h3 structure

**Recommendation**: Start with Winborne's simplicity, upgrade to ROJ's IntersectionObserver only when performance warrants it.

---

## ROJ Implementation: Production-Grade Multi-Component Architecture

**Location**: `/Users/dave/CODE/FOUNDATION_LABS/ROJ/speech-therapy-app/src/components/features/learning-library/TableOfContents/`

### Component Structure (11 Files)

1. **`index.tsx`** - Main desktop/mobile TOC wrapper
2. **`BlogTableOfContents.tsx`** - Simplified flat TOC for blog pages
3. **`MobileTOCDrawer.tsx`** - Floating button drawer for mobile
4. **`TOCItem.tsx`** - Recursive heading item renderer
5. **`ScrollableTOC.tsx`** - Side-scrollable TOC with custom container
6. **`ProgressBar.tsx`** - Reading progress bar (0-100%)
7. **`types.ts`** - Shared TypeScript interfaces
8. **`utilities.ts`** - Heading flattening utility
9. **`hooks/useActiveSection.ts`** - IntersectionObserver-based active section detection
10. **`utils/extractHeadings.ts`** - Heading extraction with HTML entity decoding
11. **`TocbotWrapper.tsx`** - Alternative tocbot library wrapper

**Total Lines**: ~900+ (distributed across components)

### Key Technical Details

#### Type Definitions (`types.ts`)

```typescript
export interface TOCHeading {
  id: string;
  title: string;
  level: number; // 1-6 for h1-h6
  children?: TOCHeading[]; // Recursive nesting
}
```

#### Active Section Tracking (`hooks/useActiveSection.ts`)

**Uses IntersectionObserver for efficiency**:

```typescript
const observer = new IntersectionObserver(
  (entries) => {
    // Find topmost visible heading
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
```

**Why IntersectionObserver**:
- More efficient than scroll event listeners (no constant polling)
- Automatically tracks which sections are in viewport
- Better performance on long pages (5000+ words)

**Debouncing**: 100ms delay to prevent excessive re-renders

**Secondary Hook**: `useScrollProgress()` for reading progress bar (0-100% calculation)

#### Scroll Behavior

**Smooth scrolling with offset**:
```typescript
const element = document.getElementById(headingId);
const yOffset = -80; // Account for fixed header
const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
window.scrollTo({ top: y, behavior: 'smooth' });
```

**URL hash management**:
- Updates browser history with section anchor
- Handles IntersectionObserver near-bottom detection
- Preserves back button functionality

#### Heading Extraction (`utils/extractHeadings.ts`)

**Markdown regex pattern**:
```typescript
const headingRegex = /^(#{1,6})\s+(.+)$/gm;
```

**Consolidated `generateAnchorId()` function** (robust, Unicode-aware):

```typescript
function generateAnchorId(text: string | ReactNode): string {
  // 1. Convert ReactNode to string if needed
  let str = typeof text === 'string' ? text : extractTextFromReactNode(text);

  // 2. Decode HTML entities (&amp; → &, &quot; → ", etc.)
  str = decodeHtmlEntities(str);

  // 3. Unicode-aware normalization
  str = str
    .toLowerCase()
    .trim()
    .replace(/[^\p{L}\p{N}\s-]/gu, '') // Preserve international chars
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .substring(0, 80); // Length limit for URL safety

  // 4. Fallback if empty (hash-based ID)
  return str || `heading-${hashCode(text)}`;
}
```

**Why this is superior**:
- Handles ReactNode inputs (not just strings)
- Decodes HTML entities (content from CMS often has `&amp;`, `&quot;`)
- Unicode-aware: Preserves Chinese, Arabic, accented characters
- Fallback mechanism prevents empty IDs
- Length-limited for URL safety

**Builds hierarchical structure**:
- Parses heading levels (h1-h6)
- Creates nested children arrays
- Preserves parent-child relationships

#### Responsive Design

**Desktop**:
- Sticky sidebar: `top-24 max-h-[calc(100vh-8rem)]`
- Scrollable overflow if TOC is long
- Left border + background color on active section

**Mobile**:
- Fixed floating button: `bottom-4 right-4 z-50`
- Full-width drawer (w-80) slides in from right
- Header/footer pinned, nav scrollable in middle
- Overlay backdrop: `bg-black/50`

**Breakpoints**:
- `lg:` for desktop visibility
- `lg:hidden` for mobile-only components

#### Visual Styling

**Active section highlighting**:
```typescript
className={cn(
  "border-l-2 pl-3 py-1 transition-colors",
  isActive
    ? "border-blue-600 bg-blue-50 font-semibold"
    : "border-transparent hover:border-gray-300"
)}
```

**Hierarchical indentation**:
- h2: `pl-3`
- h3: `pl-6`
- h4: `pl-9`

**Dark mode support**:
- `dark:bg-blue-900` for active
- `dark:text-gray-300` for inactive

#### Accessibility

- **ARIA labels**: `aria-label="Table of Contents"`
- **Semantic HTML**: `<nav>` wrapper
- **Keyboard navigation**: Focus states on links
- **Screen reader friendly**: Descriptive link text

#### Locale Support

English + Chinese-CN translations:
```typescript
const t = {
  'en': { toc: 'Table of Contents', progress: 'Reading Progress' },
  'zh-CN': { toc: '目录', progress: '阅读进度' }
};
```

### ROJ Dependencies

```json
{
  "tocbot": "^4.36.4",  // Installed but not used in custom components
  "lucide-react": "^0.511.0",  // Icons: Menu, X
  "framer-motion": "^12.12.1",  // Animations
  "next": "^15.3.2",
  "react": "^19.1.0"
}
```

### Why ROJ Is Complex

1. **Localization**: English + Chinese requires translation infrastructure
2. **Hierarchical nesting**: h2 → h3 → h4 → h5 support (recursive components)
3. **Modular reusability**: Used across guides, blog, lessons (configurable options)
4. **Unicode content**: International audience needs sophisticated ID generation
5. **Multiple TOC styles**: BlogTOC (flat), MobileTOCDrawer, ScrollableTOC (different UX patterns)

---

## Winborne Implementation: Lightweight Single-Component Pattern

**Location**: `/Users/dave/CODE/CLIENT_WORK/winborne-site/components/blog/BlogPostLayout.tsx`

**Total Lines**: ~300 (all TOC logic in one component)

### Component Structure

**Single file handles**:
- Heading extraction
- Scroll tracking
- Desktop sidebar
- Mobile drawer
- Active section highlighting

**No separate component library** - TOC built into BlogPostLayout directly.

### Key Technical Details

#### Heading Extraction

**DOM-based approach** (not regex):

```typescript
// Parse rendered HTML content
const doc = new DOMParser().parseFromString(htmlContent, 'text/html');
const headings = doc.querySelectorAll('h2, h3');

const toc = Array.from(headings).map(heading => ({
  id: heading.textContent
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')  // Only word chars, spaces, hyphens
    .replace(/\s+/g, '-'),
  text: heading.textContent,
  level: parseInt(heading.tagName.substring(1))
}));
```

**Why DOM-based**:
- Works with rendered React Markdown output
- Accurate (uses actual DOM structure)
- Simple (no regex complexity)

**Limitations**:
- No HTML entity decoding (`&amp;` would become `amp`)
- No Unicode support (non-ASCII chars removed)
- Only h2/h3 supported (flat structure)

#### Scroll Tracking

**Manual scroll event listener**:

```typescript
useEffect(() => {
  const handleScroll = () => {
    const headingElements = toc.map(item =>
      document.getElementById(item.id)
    ).filter(Boolean);

    // Linear search from bottom to top
    const currentSection = headingElements.reverse().find(el => {
      return window.scrollY + 100 >= el.offsetTop;
    });

    if (currentSection) {
      setActiveId(currentSection.id);
    }
  };

  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, [toc]);
```

**Why manual scroll**:
- Simpler than IntersectionObserver (no complex API)
- Works fine for shorter pages (<3000 words)
- Easier to debug

**Limitations**:
- Less performant (constantly polls on scroll)
- 100px offset hardcoded (not configurable)
- No debouncing (could cause excessive re-renders)

#### Scroll Behavior

```typescript
const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    const yOffset = -80; // Fixed header height
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
};
```

**Same as ROJ**: 80px offset for fixed headers, smooth scroll.

#### Responsive Layout

**Desktop** (4-column grid):
```tsx
<div className="grid lg:grid-cols-5 gap-8">
  <article className="lg:col-span-4">
    {/* Main content */}
  </article>

  <aside className="hidden lg:block lg:col-span-1">
    <div className="sticky top-24 max-h-[calc(100vh-8rem)]">
      {/* TOC sidebar */}
    </div>
  </aside>
</div>
```

**Mobile** (floating button + drawer):
```tsx
{/* Floating button */}
<button className="fixed bottom-4 right-4 z-40 lg:hidden">
  <Menu />
</button>

{/* Drawer overlay */}
{isDrawerOpen && (
  <>
    <div className="fixed inset-0 z-40 bg-black/50" onClick={closeDrawer} />
    <div className="fixed right-0 top-0 h-full w-80 z-50 bg-white shadow-xl">
      {/* TOC content */}
    </div>
  </>
)}
```

**Same pattern as ROJ**: Floating button, right-sliding drawer, overlay backdrop.

#### Visual Styling

**Active section**:
```typescript
className={cn(
  "block py-1 text-sm transition-colors",
  item.level === 3 && "pl-4", // h3 indentation
  activeId === item.id
    ? "text-blue-600 font-semibold"
    : "text-gray-600 hover:text-blue-500"
)}
```

**Simpler than ROJ**:
- No left border (just color change)
- Basic indentation (pl-4 for h3)
- No background color on active

#### Mobile Drawer Structure

**Fixed header**:
```tsx
<div className="p-4 border-b">
  <h3 className="font-semibold">Table of Contents</h3>
  <button onClick={closeDrawer}><X /></button>
</div>
```

**Scrollable nav**:
```tsx
<nav className="flex-1 overflow-y-auto p-4">
  {/* TOC links */}
</nav>
```

**Fixed footer** (Winborne-specific):
```tsx
<div className="p-4 border-t">
  <CTAButton text="Get a Quote" href="/contact" />
</div>
```

### Winborne Dependencies

```json
{
  "@radix-ui/react-slot": "^1.0.2",  // Radix UI primitives
  "lucide-react": "^0.303.0",  // Icons
  "reading-time": "^1.5.0",  // Calculate article read time
  "react-markdown": "^9.0.1",  // Markdown parsing
  "gray-matter": "^4.0.3"  // YAML frontmatter
}
```

**No TOC-specific library** - All custom implementation.

### Why Winborne Is Simpler

1. **Single use case**: Blog posts only (not guides + docs + lessons)
2. **English-only**: No localization needed
3. **Flat structure**: h2/h3 only (no deep nesting)
4. **One component**: All logic in BlogPostLayout (no module coordination)
5. **Basic ID generation**: Simple regex (no Unicode/entity support needed)

---

## Side-by-Side Comparison

| Feature | ROJ | Winborne |
|---------|-----|----------|
| **Architecture** | 11 components, modular | Single 300-line component |
| **Line Count** | ~900+ lines (distributed) | ~300 lines (consolidated) |
| **Scroll Tracking** | IntersectionObserver (efficient) | Manual scroll event (simpler) |
| **Heading Detection** | Regex on markdown + entity decode | DOM query on rendered HTML |
| **ID Generation** | Unicode-aware, entity-aware, fallback | Simple word char replacement |
| **Hierarchy Support** | h1-h6 with recursive nesting | h2-h3 flat only |
| **Active Highlighting** | Left border + bg color | Color change only |
| **Mobile Pattern** | Floating drawer + smooth nav | Floating drawer + CTA footer |
| **Locale Support** | English + Chinese-CN | English only |
| **Progress Bar** | Separate component included | Not included |
| **Accessibility** | Full ARIA labels, semantic HTML | Basic semantic HTML |
| **Dependencies** | tocbot (unused), framer-motion | reading-time, react-markdown |
| **Maintenance** | Higher (11 files to coordinate) | Lower (single file) |
| **Flexibility** | High (configurable, reusable) | Low (purpose-built for blog) |
| **Performance** | Better (IntersectionObserver) | Good enough (short pages) |
| **Unicode Support** | Full (Chinese, Arabic, accents) | Limited (ASCII only) |

---

## When to Use Each Approach

### Use Winborne's Pattern When:

✅ **Simple blog posts** (h2/h3 structure, <3000 words)
✅ **English-only content**
✅ **Single content type** (not guides + docs + lessons)
✅ **Quick implementation needed** (2-3 hours)
✅ **Low maintenance preferred** (one file to edit)
✅ **No deep nesting required** (flat heading structure)

### Use ROJ's Pattern When:

✅ **Complex documentation** (h4/h5 nesting, >5000 words)
✅ **International content** (Unicode characters, multiple languages)
✅ **Multiple content types** (blog + guides + API docs)
✅ **Modular reusability** (TOC used across many page types)
✅ **Performance critical** (long pages with lots of headings)
✅ **Accessibility required** (WCAG compliance, screen readers)

---

## Migration Path: Winborne → ROJ

### Phase 1: Start Simple (Winborne)

**Implement**:
- Single-component TOC in `TableOfContents.tsx`
- DOM-based heading extraction
- Manual scroll tracking
- h2/h3 flat structure

**Time**: 2-3 hours
**Covers**: 80% of use cases

### Phase 2: Performance Upgrade

**When**: Pages >3000 words, scroll tracking feels laggy

**Upgrade**:
- Swap manual scroll → IntersectionObserver
- Keep single-component structure
- Add debouncing (100ms)

**Time**: 1-2 hours
**ROI**: Better performance, no complexity increase

### Phase 3: Hierarchical Support

**When**: Content needs h4/h5 nesting (technical docs, API references)

**Upgrade**:
- Recursive `TOCItem` component
- Hierarchical data structure
- Visual indentation for nested headings

**Time**: 2-3 hours
**ROI**: Supports complex documentation

### Phase 4: Modular Architecture

**When**: Multiple TOC styles needed (blog vs docs vs guides)

**Upgrade**:
- Split into separate components (BlogTOC, DocTOC, etc.)
- Shared utilities module
- Configurable options (progress bar, depth, style)

**Time**: 3-4 hours
**ROI**: Reusability across content types

### Phase 5: International Support

**When**: Non-English content or Unicode characters needed

**Upgrade**:
- Unicode-aware `generateAnchorId()` from ROJ
- HTML entity decoding
- Locale support infrastructure

**Time**: 2-3 hours
**ROI**: International audience support

---

## Recommended Hybrid Approach for daveliew.com

### Start with Winborne's Simplicity

**Reasons**:
1. English-only content (no Unicode complexity needed)
2. Simple h2/h3 structure (no deep nesting yet)
3. Quick implementation (2-3 hours vs 6-8 hours)
4. Single use case (blog + documentation pages)
5. Easier to maintain (one component file)

### Adopt ROJ's Best Practices Selectively

**Take from ROJ**:
- ✅ **`generateAnchorId()` function** - Better than Winborne's naive regex (handles edge cases)
- ✅ **IntersectionObserver** - If performance becomes issue
- ✅ **ARIA labels** - Better accessibility than Winborne
- ✅ **TypeScript interfaces** - Type safety for heading structure

**Skip from ROJ** (for now):
- ❌ Localization infrastructure (English-only)
- ❌ Recursive nesting components (flat structure sufficient)
- ❌ Multiple TOC variants (single style needed)
- ❌ Progress bar component (nice-to-have, not essential)

### Implementation for daveliew.com

**File**: `/components/common/TableOfContents.tsx`

**Features**:
- Winborne's single-component structure (~300 lines)
- ROJ's `generateAnchorId()` (Unicode-safe, future-proof)
- Manual scroll tracking (sufficient for current pages)
- h2/h3 flat structure
- Desktop sticky sidebar + mobile drawer
- Active section highlighting (ROJ's left border + bg color)
- ARIA labels (ROJ's accessibility)

**Upgrade triggers**:
1. **Performance lag** → Add IntersectionObserver (1-2 hours)
2. **Deep nesting needed** → Add hierarchical support (2-3 hours)
3. **Multiple TOC styles** → Split into modular components (3-4 hours)
4. **International content** → Already handled by `generateAnchorId()`

**Time to implement**: 2-3 hours
**Time to upgrade later**: 1-6 hours (depending on complexity)

---

## Code Samples

### Winborne's Heading Extraction (Simple)

```typescript
const extractHeadings = (htmlContent: string) => {
  const doc = new DOMParser().parseFromString(htmlContent, 'text/html');
  const headings = doc.querySelectorAll('h2, h3');

  return Array.from(headings).map(heading => ({
    id: heading.textContent
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-'),
    text: heading.textContent,
    level: parseInt(heading.tagName.substring(1))
  }));
};
```

### ROJ's Heading Extraction (Robust)

```typescript
const extractHeadings = (markdown: string): TOCHeading[] => {
  const headingRegex = /^(#{1,6})\s+(.+)$/gm;
  const headings: TOCHeading[] = [];
  let match;

  while ((match = headingRegex.exec(markdown)) !== null) {
    const level = match[1].length;
    const title = match[2].trim();
    const id = generateAnchorId(title);

    headings.push({ id, title, level, children: [] });
  }

  return buildHierarchy(headings);
};

const generateAnchorId = (text: string | ReactNode): string => {
  let str = typeof text === 'string' ? text : extractTextFromReactNode(text);
  str = decodeHtmlEntities(str);

  return str
    .toLowerCase()
    .trim()
    .replace(/[^\p{L}\p{N}\s-]/gu, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .substring(0, 80) || `heading-${hashCode(text)}`;
};
```

### Winborne's Scroll Tracking (Manual)

```typescript
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
```

### ROJ's Scroll Tracking (IntersectionObserver)

```typescript
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
      { rootMargin: '-20% 0px -70% 0px', threshold: 0 }
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

---

## Summary Recommendations

### For daveliew.com:

1. **Start with Winborne's single-component pattern** (2-3 hours)
   - Simpler to implement and maintain
   - Sufficient for current content structure
   - Can upgrade later without throwing away work

2. **Adopt ROJ's `generateAnchorId()` function**
   - Better edge case handling
   - Unicode-safe for future international content
   - Minimal complexity increase

3. **Keep manual scroll tracking initially**
   - Simpler code
   - Performance adequate for <3000 word pages
   - Can swap to IntersectionObserver in 1-2 hours if needed

4. **Use ROJ's visual styling** (left border + bg color)
   - Better UX than Winborne's color-only approach
   - More noticeable active section indicator

5. **Add ARIA labels from ROJ**
   - Better accessibility
   - No complexity increase

### Upgrade Triggers:

| Trigger | Upgrade To | Effort |
|---------|-----------|--------|
| Performance lag (scroll feels sluggish) | IntersectionObserver | 1-2 hrs |
| Content needs h4/h5 nesting | Hierarchical components | 2-3 hrs |
| Multiple TOC styles needed | Modular architecture | 3-4 hrs |
| International content added | Already handled by `generateAnchorId()` | 0 hrs |

**Total initial investment**: 2-3 hours
**Total potential upgrades**: 1-6 hours (spread over time, as needed)

This approach gets 80% of the value with 20% of the complexity.
