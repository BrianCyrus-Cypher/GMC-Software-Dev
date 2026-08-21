# Stats Preview Card — Flexbox Lecture Notes

**Overview:**

This document explains the components used in this project (pure HTML & CSS), how they are implemented using Flexbox, and how you can reuse the same concepts in other projects. The goal is a compact, practical lecture-style reference you can keep while learning Flexbox.

**Files added:**
- `solution.html` — finished responsive HTML demo of the card component.
- `styles.css` — mobile-first stylesheet that demonstrates Flexbox for layout and alignment.

**Design goals:**
- Mobile-first, responsive layout
- Semantic HTML structure
- Clear use of Flexbox for horizontal/vertical alignment and distribution
- Reusable small components (card, stats row)

**1. HTML structure (why it matters)**

- The document uses semantic tags: `main`, `section`, `h1`, `p`, `ul`/`li` for the stats list. Semantic structure helps accessibility and makes styling predictable.

- Key component: the `section.card` groups image + content. Keeping markup simple lets CSS (Flexbox) control presentation without extra wrappers.

Example skeleton:

```
<section class="card">
  <picture class="card-image">...</picture>
  <div class="card-content"> ... <ul class="stats"> <li class="stat">...</li> </ul></div>
</section>
```

**2. Flexbox fundamentals used here**

- `display:flex` turns an element into a flex container. Its direct children become flex items.
- `flex-direction` (row/column) controls the main axis. Default is `row`. Mobile-first we often rely on `column` stacking by using the natural flow, and switch to `row` on larger screens.
- `justify-content` distributes space along the main axis (left/center/right/space-between).
- `align-items` aligns along the cross axis (top/center/baseline).
- `flex` shorthand (e.g., `flex:1`) lets an item grow and fill available space — used for the `.stat` items so they share width evenly.

Mapping to project CSS:
- `.stats { display:flex; gap:12px }` — creates a horizontal row of stat blocks with consistent spacing.
- `.stat { flex:1; display:flex; flex-direction:column }` — each stat grows equally and stacks value + label vertically.
- `.card` switches from a single-column stacked layout (mobile) to `display:flex` on desktop so the image and content sit side-by-side.

**3. Mobile-first approach (why and how)**

- Start by styling for the smallest screens (simpler flow: images stacked above content). Then use media queries to change layout for larger viewports.
- In `styles.css` we keep the mobile rules first (image on top, content below). At `@media (min-width:700px)` we set `.card{display:flex}` so the image and content share a row on larger screens.

Practical pattern:
- Mobile: vertical stack (easier for reading and accessibility)
- Desktop: use `display:flex` on the wrapper to place major regions side-by-side

**4. Reusable component patterns**

- Card shell: `background`, `border-radius`, `overflow:hidden` — works for any card with image + content.
- Stats row: `display:flex` + `gap` + `flex:1` on children — use for any set of equal-width items (pricing columns, features, KPI tiles).

Copy-paste pattern for equal columns:

```
.row{display:flex;gap:1rem}
.row > *{flex:1}
```

**5. Shortcuts and shorthand CSS used**

- `flex:1` is shorthand for `flex-grow:1; flex-shrink:1; flex-basis:0%` — it makes elements share available space evenly.
- `gap` works with Flexbox to add consistent spacing between flex items — cleaner than margins.
- CSS custom properties (variables) at `:root` make colors and sizes easy to reuse and change.

Why use these shortcuts: they reduce verbosity and make responsive adjustments predictable.

**6. Accessibility & small UX notes**

- Use semantic HTML (headings, lists) so assistive tech can parse content.
- Provide `alt` text for images. If images are purely decorative, an empty `alt=""` is acceptable. In this demo the image is decorative so a short descriptive `alt` is fine.
- Ensure color contrast is sufficient. The style guide lists accessible palettes — use tools like the Lighthouse or Contrast Checker to validate.

**7. How to reuse the component in another project**

1. Copy `section.card` markup into the new page.
2. Include `styles.css` (or extract the component rules) and ensure variables are defined or replaced with your project's variables.
3. Swap the images or use an inline SVG for the hero area.
4. Adjust `max-width` and padding to fit your layout system.

Example: embedding the card inside a page grid

```
<div class="grid">
  <div class="grid-col"> ... other content ...</div>
  <div class="grid-col"> <!-- paste card here --> </div>
</div>
```

**8. Small exercises to build intuition**

- Exercise 1: Change `.stats` to `flex-direction:column` on small screens, verify layout changes.
- Exercise 2: Replace `flex:1` with `flex:2` on the middle `.stat` and observe how it grows.
- Exercise 3: Remove `gap` and instead use individual margins on `.stat` — notice the difference in maintainability.

**9. Realistic application tips**

- Use Flexbox for component-level layout (rows of buttons, nav bars, cards). For full-page layouts with complex two-dimensional grids, consider CSS Grid.
- Combine both: Grid for the page-level structure, Flexbox for components inside grid areas.

**10. Where to go next (resources)**

- MDN Flexbox: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout
- A Complete Guide to Flexbox (CSS-Tricks): https://css-tricks.com/snippets/css/a-guide-to-flexbox/
- Interactive playground: https://flexboxfroggy.com/

---

If you'd like, I can:
- Replace the existing `index.html` with `solution.html` as the live page, or
- Create a small README entry in the main `README.md` linking to this lecture file and the solution preview.

Tell me which next step you prefer.
