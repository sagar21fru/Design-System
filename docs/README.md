# Real Estate

The design system for the Real Estate product: a violet brand, a teal accent, a grey-green neutral scale, and a type system that scales across four breakpoints. Every value here comes from the Figma file's variable collections (Color Usage, Typography Primitives, Responsive Typography, Spacing, Border, Layout, Breakpoint). Usage notes give each variable's intent in plain words.

## Voice and content

Listings are the product. Write copy that is concrete and scannable: price, size, location, then the feeling. Lead with the number people search by, and write prices as "AED 1,250,000". Use sentence case for headings and buttons ("View listing", not "View Listing"). Keep labels to one or two words.

## Colour

**Brand.** Violet is the identity. `bg-brand-primary` (violet-500, `#8657EA`) is the primary action fill; white text on it passes (4.6:1). `bg-neutral-inverse-primary` (violet-900, `#3F2276`) is the deep brand surface for heroes, headers and footers. Teal (`text-brand-inverse`, `icon-brand-primary`, `#1E8678`) is the accent. Use it for links, active icons and brand borders.

**Surfaces.** Light pages sit on `bg-neutral-primary` (violet-100). Raise panels with `bg-neutral-secondary`, and use `bg-neutral-tertiary` for hover. Dark bands use the `bg-neutral-inverse-*` steps.

**Text on dark.** On `bg-neutral-inverse-primary`, use `text-neutral-inverse-primary` (white, 12.3:1) for body text, `text-neutral-inverse-secondary` (7.8:1) for secondary text and `text-brand-primary` (light teal, 8.6:1) for highlights.

**Text on light: please check this in Figma.** As exported, the `Text/Neutral` scale runs light to dark: Primary `#A0B1AF`, Secondary `#809895`, Tertiary `#5D7370`, Disabled `#2A3433`. On `bg-neutral-primary`, only *Disabled* passes AA (10.6:1). Primary manages 1.8:1, Secondary 2.5:1 and Tertiary 4.2:1. The scale looks reversed in the Color Usage collection. The values are kept exactly as exported, and each token's note flags the problem. Until the file is fixed, set body text on light surfaces in `text-neutral-disabled` or `bg-neutral-inverse-primary`.

**Status.** Each status has a subtle tint and a bold colour: `bg-semantic-{success|error|warning|info}-{subtle|bold}`. The `text-semantic-*-inverse` and `icon-semantic-*-inverse` tokens alias the bold colour, for use on light surfaces. The `-primary` tokens alias the subtle tint, for use on bold fills. Mind these pairs:
- Warning bold (`#FCD936`) on white or tint is about 1.2–1.4:1. Put warning text on a dark ground, or use the yellow only as a fill with `text-neutral-disabled` on it (9.2:1).
- Success bold (`#42A147`) with white text is 3.3:1, which passes for large text (24px+) and icons only.
- Error and info bold pass with white (5.3:1 and 5.1:1).

**Primitives.** The file's Color Primitives collection wasn't in the export. The primitive tokens here (`voilet-*`, `teal-*`, `neutral-*`, `clay-100`, `green-*`, `red-*`, `yellow-*`, `blue-*`, `orange-100`) are only the steps the semantic tokens point at, with their exact values. "voilet" is spelled as it is in Figma. In UI, reach for semantic tokens and never for primitives.

## Typography

**Families.** The web and desktop face is **Roboto Flex** (`--font-sans`), set in the Typography Primitives *Desktop* mode. The same collection sets **DM Sans** for iOS (`--font-ios`) and **DM Serif Text** for Android (`--font-android`). All three are Google Fonts.

**Roles.** There are four groups: `heading-5xl`…`heading-2xs`, `text-2xl`…`text-xs`, `link-l|m|s` and `label-l|m|s`. The type tokens carry desktop (XL) sizes. Use headings for listing titles and page structure, text for descriptions, labels for form fields and meta (beds, baths, area), and links for inline navigation.

**Responsive sizes** (font size/line height in px, from the Responsive Typography collection). Styles not listed are the same at every breakpoint. The iOS and Android columns come from the Typography Primitives modes.

| style | XL 1440 | L 1024 | M 768 | S 393 | iOS / Android |
|---|---|---|---|---|---|
| `heading-5xl` | 72/80 | 64/72 | 56/64 | 48/56 | 56/64 |
| `heading-4xl` | 64/72 | 56/64 | 48/56 | 40/48 | 48/56 |
| `heading-3xl` | 56/64 | 48/56 | 40/48 | 36/44 | 40/48 |
| `heading-2xl` | 48/56 | 40/48 | 36/44 | 32/40 | 32/40 |
| `heading-xl` | 40/48 | 36/44 | 32/40 | 28/36 | 28/36 |
| `heading-l` | 32/40 | 28/36 | 26/34 | 24/32 | 24/32 |
| `heading-m` | 24/32 | 22/30 | 20/28 | 20/28 | 20/28 |
| `heading-s` | 20/28 | 20/28 | 18/26 | 18/26 | 18/26 |
| `text-2xl` | 24/32 | 22/30 | 20/28 | 20/28 | 20/28 |
| `text-xl` | 20/28 | 20/28 | 18/26 | 18/26 | 18/26 |

The Breakpoint collection has two modes. Desktop uses XL (1440) and shows the title with no menu. Mobile uses S (393) and shows the menu with no title.

## Spacing, radius and borders

Spacing runs on a 4/8px rhythm from `space-2xs` (2px) to `space-12xl` (112px). Use `space-m` and `space-l` inside components, `space-xl` and `space-2xl` between them, and `space-4xl` and up between page sections.

Radii: `radius-xs` 4, `radius-s` 8 (buttons, inputs), `radius-m` 12 (cards), `radius-l` 16 (modals, listing photos), `radius-pill` and `radius-circle` (50%). Stroke widths run from `border-width-xs` (1px) to `border-width-xl` (8px). Use `border-width-m` for focus rings.

## Iconography and imagery

No icons or logos were in the upload. Icon colours are defined (`icon-*`), but there are no icon files yet. Until a logo arrives, set the name in `heading` type.

## Assumptions in this draft (please confirm)

- **Name.** The name "Real Estate" is taken from the Figma file's name.
- **Font weights.** The export has no weight variables. Headings are set at 700, text at 400, and links and labels at 500.
- **Letter spacing.** Figma exports −1 (large headings) and −5 (`heading-m`, `-s`, `-xs`) with no unit. They are read as percentages (−0.01em and −0.05em). If they are pixels, −5px is far too tight for 16–24px type.
- **Circle radius.** Figma stores this as 50. It is applied as 50%.
- **Duplicate variable.** The file has both `Text/Semantic/Success/Primary` and `…/primary` (white). The second one is kept as `text-semantic-success-primary-alt`.
- **Renamed group.** "Icon/Semantic 2" is written as `icon-semantic-*`.

## Not synced

- The Color Primitives collection (only the steps in use came through).
- Font files: Roboto Flex, DM Sans and DM Serif Text load from Google Fonts.
- The iOS and Android type sizes are in the README table only, not in the tokens.
- Logos, icons, effects and shadows, and components. None of these were in the export.
