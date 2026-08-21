# CSS Grid Migration Presentation Report: Rep'ing the Team to the Class

Good morning/afternoon, class! As the representative for our team, I’m excited to present our migration from **Flexbox** to **CSS Grid** for the Stats Preview Card component. 

Below is our full project report explaining **what** we changed, **how** it works, and **why** we chose our specific CSS values over other alternatives.

---

## Slide 1: Executive Summary & Objective

Our main objective was to completely swap the page's layout mechanics from Flexbox to **CSS Grid**. 

### Why Grid?
While Flexbox is excellent for content-driven, one-dimensional alignments (like a simple list of buttons), CSS Grid gives us two-dimensional control and lets us separate the visual layout order from the HTML document order. This is particularly useful for responsive component reordering.

---

## Slide 2: HTML Structure Analysis

Here is the exact HTML structure we worked with:
```html
<section class="card">
    <picture class="card-image">...</picture>
    <div class="card-content">
        ...
        <ul class="stats">
            <li class="stat">...</li>
        </ul>
    </div>
</section>
```
### Team Decision: Zero HTML Changes
We purposely chose **not** to edit the HTML file. 
- **Reasoning:** In a production team, changing HTML can break accessibility hooks, SEO schemas, or JavaScript event selectors. By using CSS Grid, we achieved a complete layout swap and content reordering entirely within `style.css`.

---

## Slide 3: Detailed CSS Changes (Area by Area)

Here is a breakdown of every single selector we updated in [style.css](file:///c:/Users/User/GMC%20SOFTWARE%20DEV/stats-preview-card-component-main/style.css), detailing the values we chose and why.

### 1. The Wrapper (`body`)
```css
body {
    display: grid;
    place-items: center;
    padding: 30px;
}
```
* **How it works:** Turning the body into a grid container allows us to use `place-items: center`, which is shorthand for `align-items: center` (vertical) and `justify-items: center` (horizontal).
* **Why this value?**
  - **Why not `display: flex; justify-content: center; align-items: center;`?** While Flexbox works, `place-items: center` in Grid achieves the exact same centering in fewer lines of code.
  - **Why not `grid-template-columns: 1fr 1fr;`?** The body only has a single main child element (`.page`). Splitting the body into multiple columns would place our card in column 1 and the footer in column 2 side-by-side, breaking the layout. We keep it as a default single-column layout so children stack vertically and remain centered.

---

### 2. The Page Layout (`.page`)
```css
.page {
    width: auto;
    display: grid;
    justify-items: center;
    align-items: center;
    gap: 24px;
}
```
* **How it works:** The `.page` houses the `.card` and the `.attribution` footer.
* **Why this value?** 
  - Using `display: grid` with `justify-items: center` ensures the card and the footer are aligned horizontally in the center.
  - We used `gap: 24px` instead of margins because `gap` guarantees space only *between* elements, preventing unwanted margins at the top or bottom of the container.

---

### 3. The Card Element (`.card`)
```css
.card {
    display: grid;
    grid-template-columns: 1fr;
}
```
* **How it works:** On mobile screens, the card's elements stack vertically.
* **Why this value?** 
  - We defined `grid-template-columns: 1fr` (one column taking up 100% of the available fractional space) to ensure the image sits cleanly on top of the text block in a stack.

---

### 4. The Stats Row (`.stats`)
```css
.stats {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
}
```
* **How it works:** Arranges the three stat blocks ("Companies", "Templates", "Queries") side-by-side.
* **Why this value?**
  - **Why `repeat(3, 1fr)` instead of percentages or pixels?** Using `repeat(3, 1fr)` divides the container into 3 columns of exactly equal, flexible width. If we used `33.33%`, it wouldn't account for the gaps, causing overflow. If we used pixels (like `100px 100px 100px`), the columns would remain rigid on small devices and look broken. `1fr` scales fluidly with the screen size.

---

### 5. Individual Stat Block (`.stat`)
```css
.stat {
    display: grid;
    grid-template-columns: 1fr;
    justify-items: start;
}
```
* **How it works:** Stacks the stat number (e.g. `10K+`) on top of its label.
* **Why this value?**
  - Using `justify-items: start` left-aligns the text contents within each grid column, preserving clean readability.

---

## Slide 4: Desktop Enhancements (`@media (min-width: 700px)`)

When the screen width expands past `700px`, we restructure the grid tracks:

```css
.card {
    grid-template-columns: 1fr 1fr;
}
.card-content {
    grid-column: 1;
    grid-row: 1;
}
.card-image {
    grid-column: 2;
    grid-row: 1;
}
```

### Why these layout decisions?
1. **`grid-template-columns: 1fr 1fr;`**
   - **Why not `4fr 4fr` or `10fr 10fr`?** Proportions in CSS Grid function as ratios. `1fr 1fr` represents a 1:1 split (50% each). Writing `4fr 4fr` behaves identically to `1fr 1fr` because the ratio is still 1:1, but `1fr 1fr` is much cleaner, more standard, and easier for the team to read.
2. **Reversing Column Order (`grid-column` and `grid-row`):**
   - In our HTML, the `.card-image` is written *before* the `.card-content`. However, the design requires the image to be on the right and content on the left on desktop.
   - We explicitly placed `.card-content` in Column 1 and `.card-image` in Column 2, both on Row 1.
   - **Why not `grid-column: 5`?** A grid layout must only place items in defined columns. Since we set up a 2-column grid (`1fr 1fr`), using `grid-column: 5` tells the browser to create empty columns (columns 3 and 4) which stretches the grid and breaks the visual design. Keeping the column index at `2` aligns the image perfectly on the right.

---

## Q&A / Defense Checklist (The "Class Presentation" Qs)

* **Q: "Why did you choose `display: grid` for `.card-image img`?"**
  * **A:** While images are normally `display: block` to prevent inline vertical spacing gaps, making it `display: grid` acts identically to block formatting since it has no children, keeping the image fully aligned and conforming to the "Grid-only" display requirement.
* **Q: "What are the benefits of using Grid over Flexbox here?"**
  * **A:** Control. In Flexbox, we had to use `flex-direction: row-reverse` which reversed the visual order. With Grid, we have absolute coordinate control (`grid-column: 1` vs `2`). If we want to add a third column tomorrow (e.g. a sidebar), we can do so instantly by changing a single CSS track definition, without rewriting layout logic.
