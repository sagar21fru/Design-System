# Real Estate Design System

A comprehensive design system for the Real Estate product, featuring a violet brand identity, teal accents, and a responsive typography system.

## Overview

This design system was extracted from Figma and contains:
- **Color tokens**: Brand colors, semantic tokens, and status colors
- **Typography**: Responsive type scale with Roboto Flex, DM Sans, and DM Serif Text
- **Spacing**: Consistent 4/8px rhythm from 2px to 112px
- **Border radius**: Standardized corner radii
- **Components**: Ready-to-use design patterns

## Quick Start

### Using CSS Tokens

Import all tokens at once:

```html
<link rel="stylesheet" href="tokens/all-tokens.css">
```

Or import individually:

```css
@import url("tokens/colors.css");
@import url("tokens/typography.css");
@import url("tokens/spacing.css");
@import url("tokens/radius.css");
```

### Example Usage

```html
<div style="background: var(--bg-brand-primary); padding: var(--space-l);">
  <h1 class="heading-xl">Welcome to Real Estate</h1>
  <p class="text-l" style="color: var(--text-neutral-inverse-primary);">
    Find your perfect property
  </p>
</div>
```

## Color System

### Brand Colors
- **Primary**: `--bg-brand-primary` (Violet #8657EA)
- **Accent**: `--text-brand-inverse` (Teal #1E8678)
- **Surfaces**: Light mode uses `--bg-neutral-primary` (Violet 100)

### Semantic Colors
- **Success**: Green (#42A147)
- **Error**: Red (#E53836)
- **Warning**: Yellow (#FCD936)
- **Info**: Blue (#1F87E5)

## Typography

### Font Families
- **Web/Desktop**: Roboto Flex (`var(--font-sans)`)
- **iOS**: DM Sans (`var(--font-ios)`)
- **Android**: DM Serif Text (`var(--font-android)`)

### Type Styles
- **Headings**: `.heading-5xl` through `.heading-2xs`
- **Body Text**: `.text-2xl` through `.text-xs`
- **Links**: `.link-l`, `.link-m`, `.link-s`
- **Labels**: `.label-l`, `.label-m`, `.label-s`

### Responsive Sizing
The typography system includes breakpoint-specific sizes for XL (1440px), L (1024px), M (768px), and S (393px) screens.

## Spacing

Consistent spacing scale following a 4/8px rhythm:
- `--space-2xs`: 2px
- `--space-xs`: 4px
- `--space-s`: 8px
- `--space-m`: 12px
- `--space-l`: 16px
- ... up to `--space-12xl`: 112px

## Border Radius

- `--radius-xs`: 4px
- `--radius-s`: 8px (buttons, inputs)
- `--radius-m`: 12px (cards)
- `--radius-l`: 16px (modals, photos)
- `--radius-pill`: 50%
- `--radius-circle`: 50%

## Files Structure

```
design-system/
├── README.md                   # This file
├── design-system.json          # Design system metadata
├── docs/
│   └── README.md              # Detailed brand guidelines
└── tokens/
    ├── all-tokens.css         # All tokens combined
    ├── colors.css             # Color tokens
    ├── typography.css         # Typography styles
    ├── spacing.css            # Spacing tokens
    ├── radius.css             # Border radius tokens
    └── tokens.json            # Source tokens (JSON)
```

## Documentation

For detailed brand guidelines, usage notes, and accessibility information, see [docs/README.md](docs/README.md).

## Source

This design system was synced from Figma on 2026-09-23:
- **Figma File**: [Real Estate](https://www.figma.com/design/IXusz7MfDilb1e8CHYsEmo/Real-Estate)
- **Collections**: 7 Figma variable collections (98 colors, 22 type styles, spacing, radius, borders, breakpoints)

## Claude Design

View the interactive design system: [Claude Design Artifact](https://claude.ai/artifact/2wzSgn74Mdds1KpXveLGZt)

---

Last updated: 2026-09-27
