# 📖 How We Built the Recipe Page: A Beginner's Guide

This guide breaks down **every HTML tag and CSS rule** used in this project. Everything is explained in plain English with real-world analogies, step-by-step visuals, and explanations of common web design "gotchas."

---

## 🗺️ Visual Architecture (The Big Picture)

Here is how the HTML elements are layered on the screen:

```
┌────────────────────────────────────────────────────────┐
│  body (Cream Background, Centers the Card)             │
│                                                        │
│    ┌──────────────────────────────────────────────┐    │
│    │  main.card (White box, ROUNDED EDGES)        │    │
│    │                                              │    │
│    │  ┌────────────────────────────────────────┐  │    │
│    │  │  img.hero-image (Omelette photo)       │  │    │
│    │  └────────────────────────────────────────┘  │    │
│    │                                              │    │
│    │  ┌────────────────────────────────────────┐  │    │
│    │  │  div.card-body (Adds padding/spacing)  │  │    │
│    │  │                                        │  │    │
│    │  │  h1.recipe-title                       │  │    │
│    │  │  p.recipe-description                  │  │    │
│    │  │  section.prep-box (Pink background)    │  │    │
│    │  │  section (Ingredients)                 │  │    │
│    │  │  section (Instructions)                │  │    │
│    │  │  section (Nutrition Table)             │  │    │
│    │  │                                        │  │    │
│    │  └────────────────────────────────────────┘  │    │
│    └──────────────────────────────────────────────┘    │
│                                                        │
└────────────────────────────────────────────────────────┘
```

---

## 🎨 1. The Core Secret: How the Card Gets its "Smooth Edges"

Getting a clean, card-like look with rounded corners is a classic CSS challenge. If done wrong, the top image will overlap the card's corners and look blocky. Here is how we solved it:

### The Rounded Corner Gotcha

We wanted the `.card` to have smooth, rounded corners. So we applied:
```css
.card {
  border-radius: 24px;
}
```

However, the hero image (`<img class="hero-image">`) sits at the very top of the card. Images are default rectangular boxes with sharp $90^\circ$ corners.

```
WHAT HAPPENS WITHOUT CLIPPING:
┌─────────────────────────┐  ◄─── Square Image Corner (Sharp!)
│░░░░░░░░░░░░░░░░░░░░░░░░░│
│░░░░ HERO IMAGE HERE ░░░░│
└─╮                     ╭─┘
  │   WHITE CARD BODY   │    ◄─── Rounded Card Border (24px)
  └─────────────────────┘
```

Because the image sits *inside* the card, its sharp corners leak out over the card's rounded top.

### The Solutions

There are two ways to fix this in CSS:

#### Method A: Clip the overflow (What we used)
We added `overflow: hidden` to the card.
```css
.card {
  border-radius: 24px;
  overflow: hidden; /* ◄─── THE MAGIC WAND */
}
```
* **How it works:** `overflow: hidden` acts like a cookie cutter. It tells the card: *"If any child element (like the image) tries to spill outside my rounded borders, cut it off!"* The image is automatically clipped to match the card's top corners.

#### Method B: Match the border radius manually
You could also round the top-left and top-right corners of the image itself:
```css
.hero-image {
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
}
```
* **Why Method A is better:** By using `overflow: hidden` on the card container, you only have to define the rounded corners once. If you change the image later, or add a banner above it, the container will automatically clip it without you having to write new CSS rules for the new images.

---

## 📦 2. Spacing: Margin vs. Padding

Understanding spacing is the difference between a cluttered website and a professional design.

```
┌──────────────────────────────────────┐
│  MARGIN (Space OUTSIDE the boundary) │
│   ┌──────────────────────────────┐   │
│   │           BORDER             │   │
│   │   ┌──────────────────────┐   │   │
│   │   │       PADDING        │   │   │
│   │   │  (Space INSIDE box)  │   │   │
│   │   │   ┌──────────────┐   │   │   │
│   │   │   │   CONTENT    │   │   │   │
│   │   │   └──────────────┘   │   │   │
│   │   └──────────────────────┘   │   │
│   └──────────────────────────────┘   │
└──────────────────────────────────────┘
```

### Real-World Analogy: Your House
* **Content:** You and your furniture.
* **Padding:** The space inside your rooms between you and the walls. It gives you breathing room so you don't bump into things.
* **Border:** The physical walls of your house.
* **Margin:** The yard outside your house. It keeps your neighbor's house from touching yours.

### How We Used It:
1. **`body` padding:** Added space around the edges of the screen so that on tablet screens, the card doesn't touch the browser window edges.
2. **`.card-body` padding:** Added space *inside* the white card around the text. This keeps the words away from the card's edge, making the recipe easy and relaxing to read.
3. **`margin-bottom` on headings/paragraphs:** Pushes the next element down, creating distinct vertical separations between titles, paragraphs, and lists.

---

## 🧩 3. Layout: How Flexbox Centers Everything

If you don't use a layout system, elements stack vertically in the top-left corner of the page. To center the recipe card perfectly in the middle of the screen, we used **Flexbox**.

```css
body {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}
```

### Breaking down the rules:
* **`display: flex;`**
  Turns the `body` into a flexible container.
* **`flex-direction: column;`**
  Stacks the children (the recipe card and the footer attribution) vertically like a tower, instead of side-by-side like books on a shelf.
* **`align-items: center;`**
  Aligns the card horizontally in the center of the screen (left-to-right).
* **`justify-content: center;`**
  Aligns the card vertically in the center of the screen (top-to-bottom).
* **`min-height: 100vh;`**
  Tells the body to be *at least* $100\%$ of the **V**iewport **H**eight (the height of the browser screen). Without this, the page would only be as tall as the recipe card, and there wouldn't be any space to center it vertically.

---

## 🎨 4. Custom Styling & Visuals

Here is how we customized the default browser styles to make the design look premium.

### A. Loading Fonts Locally (`@font-face`)
Instead of linking to Google Fonts over the internet, we loaded font files directly from the project directory.

```css
@font-face {
  font-family: "Young Serif";
  src: url("./assets/fonts/young-serif/YoungSerif-Regular.ttf") format("truetype");
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}
```
* **Why local is better:** If the user is offline or has slow internet, the page will load instantly with the correct fonts, rather than showing generic default fonts while waiting to download them from Google.
* **`font-display: swap;`** tells the browser to display a default font immediately, then "swap" it to our custom font once it has finished loading. This prevents text from being invisible while the page loads.

### B. Custom Bullet Points (`::before` pseudo-elements)
Standard bullet points (`<ul>`) are boring black dots. The design calls for custom-colored, perfectly sized dots.

1. First, we hide the default bullets:
   ```css
   .ingredients-list {
     list-style: none; /* Removes default black bullets */
   }
   ```
2. Next, we use a CSS "pseudo-element" called `::before` to draw our own dot in front of each item:
   ```css
   .ingredients-list li::before {
     content: "";
     width: 4px;
     height: 4px;
     border-radius: 50%; /* 50% makes a square into a circle */
     background-color: var(--color-brown-800); /* Dark brown dot */
     flex-shrink: 0; /* Prevents dot from squeezing on small screens */
   }
   ```

### C. Custom Numbered Lists (CSS Counters)
Similarly, standard numbers in `<ol>` lists are hard to style. By default, you can't change only the number's color without changing the text color too. We bypassed this using **CSS Counters**.

1. Reset the default numbers:
   ```css
   .instructions-list {
     list-style: none;
     counter-reset: step-counter; /* Starts a counter at 0 */
   }
   ```
2. Increment and display the counter on each list item:
   ```css
   .instructions-list li {
     counter-increment: step-counter; /* Adds +1 to counter for each item */
   }
   .instructions-list li::before {
     content: counter(step-counter) "."; /* Displays "1.", "2.", etc. */
     color: var(--color-brown-800); /* Styles the number brown */
     font-weight: 700; /* Makes the number bold */
   }
   ```

---

## 🎨 5. Color Palette & Typography Tokens

We used HSL (**H**ue, **S**aturation, **L**ightness) to handle colors. HSL is clean because you can easily adjust how light or dark a color is by changing the third value.

| Token | HSL Code | Sample | Role in Project |
| :--- | :--- | :---: | :--- |
| `--color-stone-100` | `hsl(30, 54%, 90%)` | 🪵 | Page background (warm cream) |
| `--color-stone-150` | `hsl(30, 18%, 87%)` | 🌫️ | Dividers and table border lines |
| `--color-stone-600` | `hsl(30, 10%, 34%)` | ✒️ | Body text (readable grey-brown) |
| `--color-stone-900` | `hsl(24, 5%, 18%)` | 🖤 | Main heading titles (near black) |
| `--color-brown-800` | `hsl(14, 45%, 36%)` | 🪵 | Section headings and numbers |
| `--color-rose-50` | `hsl(330, 100%, 98%)` | 🌸 | Preparation box background (pale rose) |
| `--color-rose-800` | `hsl(332, 51%, 32%)` | 🍷 | Preparation box title and bullets |

---

## 📱 6. Mobile Responsiveness (Media Queries)

On large screens, a card looks best when it floats in the middle of the screen with space around it. But on a mobile phone, a floating card is too narrow and wastes screen space.

We used a **media query** to detect when the screen is smaller than `600px`:

```css
@media (max-width: 600px) {
  body {
    padding: 0; /* Remove body margins */
  }
  .card {
    border-radius: 0; /* Make card flush with screen edges */
  }
  .hero-image {
    height: 240px; /* Reduce image height so content is visible sooner */
  }
}
```

* **Analogy:** Media queries are like a responsive wardrobe. *If* it starts raining (screen gets small), *then* put on an umbrella (change styles to flush/mobile mode).

---

## 🧭 7. How HTML and CSS Talk to Each Other

HTML and CSS are two different languages that work together. HTML provides the structure (the furniture) and CSS describes how that furniture looks and where it sits in the room.

### Linking a stylesheet
Place this in the `<head>` so the browser knows to load styles before painting the page:

```html
<link rel="stylesheet" href="style.css">
```

* **`rel="stylesheet"`**: tells the browser this file contains CSS rules.
* **`href`**: path to the file. Relative paths are common for small projects.

Order matters: if you include multiple CSS files, the later files can override earlier rules because of the cascade.

### Inline styles vs classes vs external CSS
* **Inline style** (on the element) — highest priority but hard to maintain:

```html
<div style="color: red;">This is red</div>
```

* **Class** — reusable, preferred for styling many elements:

```html
<div class="card">...</div>
/* CSS */
.card { background: white; }
```

* **External stylesheet** — the usual best practice for separation of concerns and reuse.

---

## 🔖 8. Classes, IDs and Attribute Usage (Practical Rules)

### `class` vs `id`
- Use `class` when you expect a style to be reused across multiple elements.
- Use `id` when the element is unique on the page and you need a single specific hook (or for fragment links). Avoid using `id` only for styling unless necessary.

Example:

```html
<section id="ingredients" class="panel panel--padded">...
</section>
```

### Data attributes and small hooks
`data-*` attributes store small bits of data on elements that JavaScript (or CSS attribute selectors) can read:

```html
<li data-ingredient="eggs">2 eggs</li>
```

You can select them in CSS: `li[data-ingredient="eggs"] { font-weight: 700; }`.

---

## 🛠️ 9. Common HTML Attributes You Encountered (and how to apply them)

Images:
```html
<img class="hero-image" src="assets/images/omelette.jpg" alt="Fluffy omelette on a plate" loading="lazy" width="1200" height="800">
```
- **`alt`**: Required for accessibility — describes the image for screen readers and when images fail to load.
- **`loading="lazy"`**: Defers off-screen images until needed — improves performance.
- **`width` / `height`**: Helps the browser reserve layout space and avoid content jump while the image loads.

Links:
```html
<a href="https://example.com" target="_blank" rel="noopener">More recipes</a>
```
- **`target="_blank"`** opens a new tab; pair with `rel="noopener"` for security.

Semantic structure:
- `<main>`, `<header>`, `<footer>`, `<section>`, `<article>` help both accessibility and SEO by describing the purpose of content.

---

## 🎯 10. CSS Specificity & The Cascade (Why some rules win)

When multiple rules match an element, the browser uses specificity and source order to decide which rule applies.

Quick hierarchy (lowest → highest):

1. Type selectors (e.g., `p`, `h1`) and pseudo-elements
2. Classes, attributes (e.g., `.btn`, `[data-role]`) and pseudo-classes
3. IDs (e.g., `#main`) — higher weight
4. Inline `style="..."` on the element — highest
5. `!important` overrides everything else (use sparingly)

Example:

```css
/* Both match the element below */
.card { color: green; }
#main .card { color: blue; } /* wins because of the ID in the selector */
```

If two rules have the same specificity, the rule that appears later in the CSS wins.

---

## ♿ 11. Accessibility Notes — small choices that matter

* Always provide meaningful `alt` text for images.
* Use semantic tags (`<button>`, `<nav>`, `<main>`) so assistive tech can navigate naturally.
* When a control lacks text, provide a clear `aria-label`:

```html
<button aria-label="Toggle ingredients">☰</button>
```

* Prefer keyboard-accessible patterns; test with the Tab key.

---

## 📐 12. Responsive Images (brief)

For better performance and crisp images on different screens, use `srcset` or `<picture>`:

```html
<img
  src="images/omelette-800.jpg"
  srcset="images/omelette-400.jpg 400w, images/omelette-800.jpg 800w, images/omelette-1200.jpg 1200w"
  sizes="(max-width: 600px) 100vw, 600px"
  alt="Omelette">
```

This tells the browser which file to choose depending on the screen width and device pixel ratio.

---

## 🔗 13. CSS Variables & Overriding from HTML

CSS variables live in CSS (commonly on `:root`) but you can override them on individual elements using `style` or by applying classes.

```css
:root { --accent: hsl(14,45%,36%); }
.card { border-color: var(--accent); }
```

Override for a single element:

```html
<div class="card" style="--accent: hsl(200,80%,40%)">...</div>
```

This is a neat way to make small, component-level theme tweaks without adding new CSS selectors.

---

## 💡 Quick Tips for Learning More
1. **Experiment in the Browser:** Open your project in Google Chrome or Edge, right-click any element, and choose **Inspect**. You can toggle styles on and off to see how they impact the layout in real-time.
2. **Break Things and Fix Them:** Try deleting `overflow: hidden` from the `.card` in your CSS and see what happens to the top corners of the omelette image. This is the best way to understand how styling properties interact with each other!
