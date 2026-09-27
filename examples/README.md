# Design System Examples

This folder contains ready-to-use components and starter templates for the Real Estate Design System.

## 📁 Structure

```
examples/
├── README.md                          # This file
├── demo.html                          # Complete component showcase
├── components/
│   ├── components.css                 # Pre-built CSS components
│   └── react-components.jsx           # React component library
└── templates/
    └── landing-page.html             # Complete landing page template
```

## 🚀 Quick Start

### View the Demo

Open `demo.html` in your browser to see all available components:

```bash
# From the examples folder
open demo.html
# or
start demo.html  # Windows
```

### Use the Landing Page Template

The `templates/landing-page.html` is a complete, production-ready landing page that includes:
- Navigation with brand identity
- Hero section with search
- Features showcase
- Property cards grid
- Statistics section
- Call-to-action section
- Footer with links

Simply copy it to your project and customize!

## 🎨 Components Library

### CSS Components (`components/components.css`)

All components are built with the design system tokens and ready to use:

**UI Elements:**
- Buttons (Primary, Secondary, Outline)
- Badges (Success, Error, Warning, Info)
- Alerts (Success, Error, Warning, Info)
- Cards (Standard, Property cards)
- Forms (Input, Select, Textarea)

**Layout:**
- Navbar
- Hero section
- Grid systems (2, 3, 4 columns)
- Container

**Utilities:**
- Spacing utilities (mt-*, mb-*)
- Flexbox helpers
- Text alignment

### React Components (`components/react-components.jsx`)

Reusable React components with TypeScript-ready props:

```jsx
import { Button, PropertyCard, Hero, Navbar } from './components/react-components';

// Use in your app
<Button variant="primary" onClick={handleClick}>
  Click Me
</Button>

<PropertyCard 
  price="AED 1,250,000"
  title="Luxury Apartment"
  location="Dubai Marina"
  beds={3}
  baths={2}
  sqft="1,500"
  status="new"
/>
```

## 📦 Installation

### For HTML Projects

1. Copy the `design-system` folder to your project
2. Link the CSS files in your HTML:

```html
<link rel="stylesheet" href="path/to/design-system/tokens/all-tokens.css">
<link rel="stylesheet" href="path/to/design-system/examples/components/components.css">
```

### For React/Next.js Projects

1. Copy the `design-system` folder to your project
2. Import in your app entry point:

```jsx
// In _app.js or layout.js
import '../design-system/tokens/all-tokens.css'
import '../design-system/examples/components/components.css'

// Import components
import { Button, Card, PropertyCard } from '../design-system/examples/components/react-components'
```

### For Vue/Nuxt Projects

```vue
<template>
  <div class="property-card">
    <!-- Use the CSS classes -->
  </div>
</template>

<style>
@import '../design-system/tokens/all-tokens.css';
@import '../design-system/examples/components/components.css';
</style>
```

## 🎯 Component Examples

### Button

```html
<button class="btn btn-primary">Primary Button</button>
<button class="btn btn-secondary">Secondary Button</button>
<button class="btn btn-outline">Outline Button</button>
```

### Property Card

```html
<div class="property-card">
  <div class="property-image"></div>
  <div class="property-content">
    <div style="display: flex; justify-content: space-between;">
      <h4 class="heading-m property-price">AED 1,250,000</h4>
      <span class="badge badge-info">New</span>
    </div>
    <h3 class="heading-s">Luxury Marina Apartment</h3>
    <p class="property-location text-s">📍 Dubai Marina</p>
    <div class="property-features">
      <span class="feature">🛏️ 3 Beds</span>
      <span class="feature">🛁 2 Baths</span>
      <span class="feature">📐 1,500 sqft</span>
    </div>
  </div>
</div>
```

### Form Elements

```html
<div class="input-group">
  <label class="input-label">Property Name</label>
  <input type="text" class="input" placeholder="Enter name">
</div>

<div class="input-group">
  <label class="input-label">Property Type</label>
  <select class="select">
    <option>Apartment</option>
    <option>Villa</option>
    <option>Townhouse</option>
  </select>
</div>
```

### Grid Layout

```html
<div class="grid grid-3">
  <div class="card">Card 1</div>
  <div class="card">Card 2</div>
  <div class="card">Card 3</div>
</div>
```

## 🎨 Customization

All components use design system tokens, so you can easily customize them:

```css
/* Override tokens in your own CSS */
:root {
  --bg-brand-primary: #your-color;
  --space-l: 24px;
  --radius-m: 16px;
}
```

## 📱 Responsive Design

All components are mobile-responsive out of the box:
- Grid layouts adapt to screen size
- Typography scales with breakpoints
- Touch-friendly button and input sizes

## 🔗 Resources

- [Full Design System Documentation](../README.md)
- [Design Tokens Reference](../tokens/)
- [Brand Guidelines](../docs/README.md)
- [GitHub Repository](https://github.com/sagar21fru/Design-System)
- [Claude Design Artifact](https://claude.ai/artifact/2wzSgn74Mdds1KpXveLGZt)

## 💡 Tips

1. **Start with the landing page template** - It's a complete example you can customize
2. **Use the demo.html** - Preview all components and copy the ones you need
3. **Import only what you need** - Link individual token files instead of all-tokens.css for smaller bundles
4. **Follow the naming conventions** - Component classes follow BEM-like patterns for clarity

## 🆘 Need Help?

- Check the demo.html for live examples
- Review the component source code for implementation details
- See the main README for design system principles
- Open an issue on GitHub for bugs or feature requests

---

Built with ❤️ using the Real Estate Design System
