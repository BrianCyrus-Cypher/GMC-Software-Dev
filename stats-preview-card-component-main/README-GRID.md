# Stats Preview Card — CSS Grid Lecture Notes

**Overview:**

This document explains how the components in this project are implemented using CSS Grid, how you can transition layouts from Flexbox to Grid, and how you can apply these Grid concepts to other projects. It serves as a practical, comprehensive guide to CSS Grid, detailing shorthands, item placement, alignment tools, and real-world patterns.

**Files modified/added:**
- `index.html` — HTML structure of the card component.
- `style.css` — Mobile-first stylesheet restructured to use CSS Grid for layout, item alignment, and grid column spacing.

**Design goals:**
- Mobile-first, responsive layout using CSS Grid.
- Use explicit column/row definitions instead of Flexbox ordering.
- Grid-based alignment and distribution.
- Reusable Grid component patterns (cards, columns).

---

## 1. HTML Structure for CSS Grid

Just like Flexbox, CSS Grid relies on a **parent-child relationship**:
- **Grid Container:** The parent element with `display: grid`.
- **Grid Items:** The immediate children of the grid container.

```
<section class="card">         <-- Grid Container
  <picture class="card-image"> <-- Grid Item 1
    ...
  </picture>
  <div class="card-content">   <-- Grid Item 2
    ...
    <ul class="stats">         <-- Grid Container
      <li class="stat">...</li> <-- Grid Item 1
      <li class="stat">...</li> <-- Grid Item 2
      <li class="stat">...</li> <-- Grid Item 3
    </ul>
  </div>
</section>
```

In CSS Grid, the HTML structure remains clean. We do not need extra wrapper tags to position items side-by-side or stacked; Grid lets us explicitly place any item in any cell or grid area.

---

## 2. CSS Grid Fundamentals Used Here

- **`display: grid`**: Declares a grid formatting context for the container.
- **`grid-template-columns`**: Defines the columns of the grid. We use:
  - `1fr` on mobile to represent one full-width column.
  - `1fr 1fr` on desktop for two equal-width columns.
  - `repeat(3, 1fr)` for the three stats items to create three equal-width columns.
- **`place-items: center`**: A convenient shorthand that sets both `align-items` and `justify-items` to `center`, centering the card perfectly inside the viewport.
- **`grid-column` and `grid-row`**: Control where a grid item starts and ends. Used on desktop to reorder the layout (placing content in column 1 and image in column 2) without changing the markup.

---

## 3. Mobile-First Approach with CSS Grid

We start with mobile styling to ensure readable layouts on small screens, then enhance for desktop viewports using media queries.

### Mobile Grid Layout
By default, the `.card` has a single column, stacking elements vertically in DOM order:
```css
.card {
    display: grid;
    grid-template-columns: 1fr;
}
```

### Desktop Grid Layout Enhancement
At `@media (min-width:700px)`, the card expands into two equal-width columns:
```css
@media(min-width:700px) {
  .card {
    grid-template-columns: 1fr 1fr;
  }
}
```

---

## 4. Reversing and Placing Grid Items

In the Flexbox layout, reversing the layout was done using `flex-direction: row-reverse`. With CSS Grid, we have explicit control over where items sit using `grid-column` and `grid-row`.

On desktop, we display the card content on the left (column 1) and the image on the right (column 2) while keeping them in the same row (row 1):
```css
.card-content {
    grid-column: 1;
    grid-row: 1;
}

.card-image {
    grid-column: 2;
    grid-row: 1;
}
```
This is a powerful advantage of Grid: layout presentation is completely separated from document structure.

---

## 5. CSS Grid Properties & Shorthands Cheat Sheet

### The Grid Container (Parent)

| Property | Description | Common Values / Examples |
| :--- | :--- | :--- |
| `display` | Activates CSS Grid formatting | `grid` or `inline-grid` |
| `grid-template-columns` | Defines width of columns | `repeat(3, 1fr)`, `200px 1fr`, `minmax(100px, 1fr)` |
| `grid-template-rows` | Defines height of rows | `auto 1fr`, `repeat(2, 200px)` |
| `grid-template-areas` | Sets custom named areas | `"header header" "sidebar main"` |
| `gap` (or `row-gap`, `column-gap`) | Sets gaps between tracks | `16px`, `1rem 2rem` |
| `justify-items` | Horizontal alignment of items in cells | `start`, `end`, `center`, `stretch` |
| `align-items` | Vertical alignment of items in cells | `start`, `end`, `center`, `stretch` |
| `place-items` | Shorthand for `align-items` + `justify-items` | `center`, `start stretch` |
| `justify-content` | Horizontal alignment of the whole grid | `center`, `space-between`, `space-around` |
| `align-content` | Vertical alignment of the whole grid | `center`, `space-between`, `space-around` |

### The Grid Items (Children)

| Property | Description | Common Values / Examples |
| :--- | :--- | :--- |
| `grid-column-start` / `-end` | Start/end line for column span | `grid-column-start: 1; grid-column-end: 3;` |
| `grid-column` | Shorthand: `start / end` or `start / span N` | `1 / 3`, `1 / span 2`, `span 2` |
| `grid-row-start` / `-end` | Start/end line for row span | `grid-row-start: 1; grid-row-end: 2;` |
| `grid-row` | Shorthand: `start / end` or `start / span N` | `1 / -1` (spans all rows), `span 3` |
| `grid-area` | Shorthand or named grid area | `header`, `1 / 1 / 3 / 3` (`row-start / col-start / row-end / col-end`) |
| `justify-self` | Overrides horizontal alignment for single item | `start`, `end`, `center`, `stretch` |
| `align-self` | Overrides vertical alignment for single item | `start`, `end`, `center`, `stretch` |

---

## 6. Reusable Grid Patterns

### Equal Columns Pattern
Create a row of columns that scale and share space equally:
```css
.grid-cols-3 {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
}
```

### Auto-Fit / Auto-Fill (Responsive Wrap Without Media Queries)
Creates as many columns as will fit, wrapping automatically when the screen shrinks:
```css
.auto-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1rem;
}
```

---

## 7. Accessibility & Small UX Notes

- **DOM Order vs. Visual Order:** When using `grid-column` or `grid-row` to reorder elements (like swapping the image and content), keep in mind that screen readers and keyboard navigation (Tab key) follow the **HTML DOM order**, not the CSS visual order. Ensure the visual flow is intuitive and accessible.
- **Minmax safety:** When using `minmax()`, ensure the minimum value isn't wider than the viewport on small devices to prevent horizontal scrolling.

---

## 8. Small Exercises to Build Intuition

- **Exercise 1:** In `style.css`, modify `.stats` column definition to `grid-template-columns: 1fr` on mobile and `repeat(3, 1fr)` on desktop. Notice how the statistics stack vertically on mobile screens.
- **Exercise 2:** Try using named grid areas (`grid-template-areas`) on the `.card` to position `.card-image` and `.card-content` instead of using explicit numbers.
- **Exercise 3:** Change `.page` to use `place-items: stretch` and see how it affects the width of the card.

---

## 9. Realistic Application Tips: Grid vs. Flexbox

- **Use CSS Grid when:**
  - You need two-dimensional layout control (both columns and rows simultaneously).
  - You need to align items precisely across rows (e.g. alignment grid, dashboard widgets, photo galleries).
  - You need to overlap items easily.
- **Use Flexbox when:**
  - You need a one-dimensional layout (either a single row OR a single column).
  - You want elements to size themselves dynamically based on their content (using `flex-basis: auto`, content width wraps naturally).
  - You are building a navigation bar, breadcrumb list, or inline button groups.

---

## 10. Where to Go Next (Resources)

- **MDN CSS Grid:** [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)
- **A Complete Guide to CSS Grid (CSS-Tricks):** [CSS-Tricks Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)
- **Grid Garden Game:** [Play and Learn Grid](https://cssgridgarden.com/)
