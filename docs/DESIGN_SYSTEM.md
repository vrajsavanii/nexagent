/**
 * NexAgent Design System Documentation
 * Version 7.0 — Phase 7 Implementation
 * Last Updated: September 2026
 *
 * This document is the canonical reference for the NexAgent design system.
 * All new components, pages, and UI changes should adhere to these standards.
 */

# NexAgent Design System

## Vision

NexAgent should feel like **one carefully engineered digital product**, not a collection of web pages. Every element should feel intentional, architectural, and premium.

> "Warm white, graphite, technical blue, NexAgent teal, and restrained metallic accents."

---

## 1. Color System

### Canonical Tokens (CSS Custom Properties in `:root`)

```css
/* Backgrounds */
--nx-bg:           #F7F7F5   /* Warm off-white — page background */
--nx-surface:      #FFFFFF   /* Pure white — cards, modals */
--nx-surface-alt:  #F0EFEA   /* Warm neutral — footer, sidebar */

/* Text */
--nx-text:           #17191A  /* Primary graphite — headings, body */
--nx-text-2:         #2E3133  /* Lighter graphite */
--nx-text-secondary: #57595B  /* Secondary — supporting copy */
--nx-text-muted:     #84888A  /* Muted — captions, metadata */

/* Brand Accents */
--nx-teal:       #3D9D99   /* NexAgent primary teal */
--nx-teal-light: rgba(61, 157, 153, 0.10)
--nx-champagne:  #D7CBB8   /* Warm metallic */
--nx-silver:     #BDC9C7   /* Cool metallic — borders */

/* Borders */
--nx-border:        rgba(23, 25, 26, 0.10)
--nx-border-strong: rgba(23, 25, 26, 0.25)
```

### Tailwind Utility Classes

| Intent              | Class            | Value        |
|---------------------|------------------|--------------|
| Page background     | `bg-nx-bg`       | `#F7F7F5`    |
| Card surface        | `bg-nx-surface`  | `#FFFFFF`    |
| Alt surface         | `bg-nx-surface-alt` | `#F0EFEA` |
| Primary text        | `text-nx-text`   | `#17191A`    |
| Secondary text      | `text-nx-text-secondary` | `#57595B` |
| Muted text          | `text-nx-text-muted` | `#84888A` |
| Brand teal          | `text-nx-teal`   | `#3D9D99`    |
| Subtle border       | `border-nx-border` | 10% graphite |

### Rules
- ✅ Use CSS custom properties (`var(--nx-teal)`) or Tailwind tokens
- ❌ Never use raw hex literals (`#3D9D99`) in component JSX
- ❌ Never use Material-3 tokens (`text-primary`, `bg-surface-container-low`)

---

## 2. Typography System

### Scale

| Token            | Size    | Weight | Usage                          |
|------------------|---------|--------|--------------------------------|
| `text-display-xl`| 88px    | 600    | Homepage hero only             |
| `text-display-lg`| 72px    | 600    | Major hero moments             |
| `text-display-md`| 56px    | 600    | Section hero                   |
| `text-display-sm`| 44px    | 600    | Large feature callouts         |
| `text-heading-xl`| 36px    | 600    | Page H1 (non-hero)             |
| `text-heading-lg`| 28px    | 600    | H2 section titles              |
| `text-heading-md`| 22px    | 600    | H3 sub-section                 |
| `text-heading-sm`| 18px    | 600    | H4 cards, callouts             |
| `text-body-xl`   | 20px    | 400    | Lead paragraph                 |
| `text-body-lg`   | 17px    | 400    | Standard body                  |
| `text-body-md`   | 15px    | 400    | Secondary body                 |
| `text-body-sm`   | 13px    | 400    | Captions, card meta            |
| `text-eyebrow`   | 11px    | 600    | Section labels (uppercase)     |
| `text-label-md`  | 12px    | 600    | Button text, nav items         |
| `text-code`      | 12px    | 500    | Code, mono metadata            |

### Font Families
- `font-sans` / `font-display` — Hanken Grotesk (headings + body)
- `font-mono` — JetBrains Mono (labels, code, metadata, button text)

### Rules
- ✅ Use semantic scale tokens: `text-heading-lg`, `text-body-md`
- ❌ Never use arbitrary sizes: `text-[18px]`, `text-xl`, `text-base`
- All uppercase text must be `font-mono` with `tracking-wider`
- Headings in NexAgent contexts use `uppercase` with `tracking-tight`

---

## 3. Spacing System

### Named Scale (4px base unit)

| Token         | Value  | Usage                          |
|---------------|--------|--------------------------------|
| `space-1`     | 4px    | Micro gap between elements     |
| `space-2`     | 8px    | Small gap, icon padding        |
| `space-4`     | 16px   | Base spacing                   |
| `space-6`     | 24px   | Card padding, list spacing     |
| `space-8`     | 32px   | Section sub-spacing            |
| `space-12`    | 48px   | Small section padding          |
| `space-16`    | 64px   | Medium section padding         |
| `space-20`    | 80px   | Large section padding          |
| `section-sm`  | 48px   | Compact sections               |
| `section-md`  | 80px   | Standard sections              |
| `section-lg`  | 120px  | Hero-scale sections            |
| `gutter`      | 24px   | Desktop side padding           |
| `gutter-wide` | 40px   | Wide viewport side padding     |

### Container Tokens

| Component         | Max Width | Side Padding        |
|-------------------|-----------|---------------------|
| `PageContainer`   | 1280px    | 20px / 24px / 40px  |
| `ContentContainer`| 960px     | auto                |
| `NarrowContainer` | 680px     | auto                |
| `WideContainer`   | 1440px    | auto                |

---

## 4. Border Radius System

| Token      | Value   | Usage                                |
|------------|---------|--------------------------------------|
| `none`     | 0px     | Table cells, technical elements      |
| `rounded-xs`| 2px   | Status dots, micro chips             |
| `rounded-sm`| 4px   | Buttons, form inputs, tech tags      |
| `rounded`  | 6px     | Cards, modals, containers (default)  |
| `rounded-lg`| 12px  | Drawer panels, large containers      |
| `rounded-full`| 9999px | Logo, avatar, nav pills, CTA pills |

### Rules
- ✅ Use only the defined 6 radius values
- ❌ Never use arbitrary radius: `rounded-[10px]`, `rounded-xl`, `rounded-2xl`, `rounded-3xl`
- Buttons → `rounded-sm` (4px)
- Cards → `rounded` (6px)
- Nav items + header pill → `rounded-full`

---

## 5. Shadow System

| Token       | Usage                          |
|-------------|--------------------------------|
| `shadow-sm` | Buttons, small elements        |
| `shadow`    | Cards on hover, modals         |
| `shadow-md` | Dropdowns, tooltips            |
| `shadow-lg` | Fullscreen overlays, drawers   |

---

## 6. Component API Reference

### `<Button>` — `src/components/ui/Button.tsx`

| Prop      | Type                                    | Default     |
|-----------|-----------------------------------------|-------------|
| `variant` | `primary \| secondary \| ghost \| icon` | `primary`   |
| `size`    | `sm \| md \| lg`                        | `md`        |
| `href`    | `string`                                | —           |
| `external`| `boolean`                               | `false`     |
| `disabled`| `boolean`                               | `false`     |
| `loading` | `boolean`                               | `false`     |
| `icon`    | `string` (Material Symbol name)         | —           |
| `iconLeading` | `string`                            | —           |

```tsx
// Primary CTA
<Button variant="primary" size="lg" href="/book-a-strategy-call" icon="arrow_forward">
  Book a Strategy Call
</Button>

// Secondary
<Button variant="secondary" href="/contact">
  Talk to NexAgent
</Button>

// Loading state
<Button loading onClick={submitForm}>Processing...</Button>

// Icon-only
<Button variant="icon" icon="close" aria-label="Close dialog" />
```

### `<SectionHeader>` — `src/components/ui/SectionHeader.tsx`

| Prop          | Type                  | Default  |
|---------------|-----------------------|----------|
| `eyebrow`     | `string`              | —        |
| `heading`     | `string`              | required |
| `accentWord`  | `string`              | —        |
| `description` | `string`              | —        |
| `align`       | `left \| center`      | `left`   |
| `headingSize` | `xl \| lg \| md`      | `lg`     |
| `headingAs`   | `h1 \| h2 \| h3`      | `h2`     |

```tsx
<SectionHeader
  eyebrow="NEXAGENT / SOLUTIONS"
  heading="Enterprise Systems That Think."
  accentWord="Think."
  description="AI-powered automation at enterprise scale."
  align="left"
  headingAs="h2"
/>
```

### `<Badge>` — `src/components/ui/Badge.tsx`

```tsx
<Badge variant="teal" dot>ACTIVE / PRODUCTION</Badge>
<Badge variant="muted">IN DEVELOPMENT</Badge>
<StatusBadge status="ACTIVE" />
<StatusBadge status="ENTERPRISE" />
```

### `<FormField>` — `src/components/ui/FormField.tsx`

```tsx
<FormField label="Company Name" required error={errors.company}>
  <Input
    value={form.company}
    onChange={(e) => update('company', e.target.value)}
    placeholder="Acme Corporation"
  />
</FormField>

<FormField label="Message" hint="Maximum 500 characters">
  <Textarea rows={4} />
</FormField>

<FormError message={submitError} />
<FormSuccess title="Message received." message="We'll respond within 24 hours." />
```

### `<AccordionGroup>` + `<AccordionItem>`

```tsx
<AccordionGroup withFAQSchema>
  <AccordionItem question="What is NexAgent?" defaultOpen>
    <p>NexAgent is an intelligent technology group...</p>
  </AccordionItem>
  <AccordionItem question="What industries do you serve?">
    <p>Healthcare, Financial Services, B2B Enterprise...</p>
  </AccordionItem>
</AccordionGroup>
```

---

## 7. Motion System

### Constants — `src/components/MotionWrapper.tsx`

```ts
MOTION.duration.fast      = 0.15s
MOTION.duration.standard  = 0.28s
MOTION.duration.slow      = 0.60s
MOTION.ease.standard      = [0.22, 1, 0.36, 1]  // iOS-style exit
MOTION.ease.emphasis      = [0.16, 1, 0.3, 1]   // Emphasized spring
```

### Components

```tsx
// Standard scroll-reveal
<FadeIn delay={0.1} direction="up">...</FadeIn>

// Grid of items revealed in sequence
<StaggerContainer>
  <StaggerItem>Card 1</StaggerItem>
  <StaggerItem>Card 2</StaggerItem>
</StaggerContainer>

// Scale reveal for media / 3D
<ScaleIn delay={0.2}>
  <NexAgentCore3D />
</ScaleIn>

// Scroll progress
<ScrollProgressBar />
```

### Reduced Motion
All `MotionWrapper` components automatically read `prefers-reduced-motion` via `useReducedMotion()` from Framer Motion. Decorative movement is disabled, but opacity fades are preserved.

---

## 8. Accessibility Rules

- **Focus ring**: Provided by `globals.css` `:focus-visible` — teal 2px, 2px offset. Never override.
- **ARIA**: Every interactive element must have `aria-label` when icon-only or not self-describing.
- **Headings**: One `<h1>` per page. Logical `h2 → h3 → h4` hierarchy.
- **Skip link**: `.sr-only` / `.focus:not-sr-only` pattern available from globals.
- **Color contrast**: Body text (#57595B on #F7F7F5) = 4.7:1 ✅ (WCAG AA). Primary text (#17191A) = 18:1 ✅.
- **Reduced motion**: All animation respects OS preference. 3D WebGL stops time accumulation.

---

## 9. Component Priority / When to Use What

| Need                             | Use                                      |
|----------------------------------|------------------------------------------|
| Navigation CTA with analytics    | `CtaSystem` → `PrimaryCTA`, `SecondaryCTA`, `ContextualCTA` |
| Generic interactive button       | `ui/Button`                              |
| Page-level container             | `PageContainer`                          |
| Section wrapper with spacing     | `SectionContainer`                       |
| Section title block              | `SectionHeader`                          |
| Content / reading column         | `NarrowContainer` or `ContentContainer`  |
| Status indicator                 | `Badge` or `StatusBadge`                 |
| Content card                     | `InsightCard`, `FeatureCard`, `TechPillarCard` |
| Metric display                   | `MetricCard`                             |
| Form inputs                      | `FormField` + `Input` / `Textarea` / `Select` |
| Error message                    | `FormError`                              |
| Success state                    | `FormSuccess`                            |
| FAQ / expandable content         | `AccordionGroup` + `AccordionItem`       |
| Content loading                  | `CardSkeleton`, `PageLoader`             |
| No results / empty               | `EmptyState`                             |
| Horizontal separator             | `Divider`                                |

---

## 10. Anti-Patterns (Never Do)

- ❌ Raw hex values in JSX (`className="text-[#3D9D99]"`)
- ❌ Arbitrary sizes (`text-[18px]`, `h-[370px]` unless for media)
- ❌ Material-3 tokens (`bg-surface-container-low`, `text-on-surface-variant`)
- ❌ `font-display` without a valid font-family token
- ❌ `rounded-2xl`, `rounded-3xl`, `rounded-xl` (not in NexAgent radius system)
- ❌ Multiple `<h1>` elements on a single page
- ❌ `<button>` without `type="button"` or `type="submit"`
- ❌ Creating new icon libraries — use Material Symbols Outlined only
- ❌ Adding dark mode styles — NexAgent is light-first

---

*This document is maintained by the NexAgent engineering team. Update after any component addition or design system change.*
