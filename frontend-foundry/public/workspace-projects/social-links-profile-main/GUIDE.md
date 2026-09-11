# Social Links Profile - Full Step-by-Step Build Guide

This guide walks you through the whole project: HTML first, then CSS. Every step
teaches you the "why" and then shows you exactly what to type.

**How to use it:** Type every line yourself. No copy-paste - the act of typing is
how your fingers and brain learn. Save your file and refresh your browser after
each step so you can *see* your progress.

**A note on sizes:** The design files are JPGs, so the README itself says you use
your best judgment for sizes. The values here are the accepted standard for this
challenge - but once you build it, compare against the design and tweak.
  
### What was updated in the project

- Added the missing page structure so the card renders correctly inside the body.
- Fixed the Inter font paths so the local font files load properly.
- Refined the card layout, spacing, and button styling to better match the preview.
- Styled each social link as a full-width button with stronger hover and focus states.

---

## Part 0 - Know what you're building

### The design, in plain words

A single **card** sits in the center of a dark page. From top to bottom:

1. A circular avatar photo
2. The person's **name**
3. Their **location** (in green)
4. A short **quote**
5. **5 buttons** stacked vertically (GitHub, Frontend Mentor, LinkedIn, Twitter, Instagram)

When you hover or tab to any button, it turns **green**.

### The tools we'll use

| Concept | Why we need it |
|---|---|
| Semantic HTML (`<main>`, `<header>`, `<nav>`, `<ul>`, `<a>`) | Screen readers and Google understand the page structure |
| Flexbox | Centering the card on the page, and stacking buttons |
| CSS custom properties (`:root` variables) | Store colors once, reuse everywhere |
| `@font-face` | Use the Inter font files that came in `/assets/fonts` |
| `:hover` and `:focus-visible` | The required interactive states |

### Colors (from `style-guide.md`)

| Name | Value | Where it's used |
|---|---|---|
| Green | `hsl(75, 94%, 57%)` | Location text + button hover |
| White | `hsl(0, 0%, 100%)` | Main text, buttons |
| Grey 700 | `hsl(0, 0%, 20%)` | Button background |
| Grey 800 | `hsl(0, 0%, 12%)` | Card background |
| Grey 900 | `hsl(0, 0%, 8%)` | Page background |

### Fonts

- Family: **Inter**
- Weights used: **400** (quote), **600** (location, buttons), **700** (name)
- Body/paragraph size: **14px**

### Files you'll work with

- `index.html` - the structure (already exists, we'll rebuild the body)
- `style.css` - the stylesheet used for all visual styling in this project

---

## Part 1 - HTML (the structure)

> Think of HTML as the **skeleton**. It holds everything in place and gives
> meaning. CSS is the skin and clothes (colors, spacing, appearance). We do HTML
> first because structure comes before beauty.

### Step 1.1 - Open `index.html` and look at it

You already have a starter file. Notice the `<head>` has:

- `<!DOCTYPE html>` - tells the browser "this is modern HTML"
- `<meta charset="UTF-8">` - allows special characters
- `<meta name="viewport" ...>` - makes it look right on phones
- `<link rel="icon" ...>` - the little tab icon

These are all correct. **Leave the `<head>` alone for now** (we'll add one thing
in Step 1.8).

### Step 1.2 - Clear out the body

Delete everything between `<body>` and `</body>` (lines 17-33). You should be left
with:

```html
<body>

</body>
```

**Why:** We're rebuilding the content properly, with semantic tags and classes.

### Step 1.3 - Add the main container (the card)

```html
<body>
  <main class="card">
  </main>
</body>
```

**What this teaches:**
- `<main>` tells browsers and screen readers "this is the page's main content."
- A **class** (`class="card"`) is a name tag you can use later in CSS to style
  this exact element. One element, one name.

### Step 1.4 - Add the header (avatar + name + location)

```html
<main class="card">
  <header class="card__header">
    <img class="avatar" src="assets/images/avatar-jessica.jpeg" alt="Portrait of Jessica Randall">
    <h1 class="name">Jessica Randall</h1>
    <p class="location">London, United Kingdom</p>
  </header>
</main>
```

**What this teaches:**
- `<header>` groups the introductory content - the "who is this?" section.
- `<img>` needs two things:
  - `src` - the path to the image file
  - `alt` - a text description. Think of it as *describing the photo to a friend
    who can't see it* (screen readers read this aloud).
- `<h1>` is the **page title** - like the title of a book chapter. There should
  be exactly one per page, and it's the most important heading.
- `<p>` is a paragraph of text.
- Notice the `card__` prefix on classes (`card__header`). That's a naming
  convention called **BEM** (Block, Element, Modifier). It's just a way of saying
  "these things belong to the card." You don't have to use it, but it keeps
  things tidy and is used widely in real projects.

### Step 1.5 - Add the quote

```html
<main class="card">
  <header class="card__header">
    <img class="avatar" src="assets/images/avatar-jessica.jpeg" alt="Portrait of Jessica Randall">
    <h1 class="name">Jessica Randall</h1>
    <p class="location">London, United Kingdom</p>
  </header>

  <p class="bio">"Front-end developer and avid reader."</p>
</main>
```

**What this teaches:** The quote is separate from the header, so it gets its own
`<p>` with a different class. Classes let you style the location and the quote
*differently*, even though they're both paragraphs.

### Step 1.6 - Add the buttons as a list of links

```html
<nav class="links">
  <ul class="links__list">
    <li><a href="#">GitHub</a></li>
    <li><a href="#">Frontend Mentor</a></li>
    <li><a href="#">LinkedIn</a></li>
    <li><a href="#">Twitter</a></li>
    <li><a href="#">Instagram</a></li>
  </ul>
</nav>
```

**What this teaches:**
- This is a **list of links**, so it's a `<ul>` (unordered list) of `<li>`
  (list items). Each link is an `<a>` (anchor).
- `<nav>` says "these links let you navigate somewhere."
- Why not `<button>`? These go to *other pages*, so they're links (`<a>`), not
  buttons. Buttons trigger an action *on the page*; links take you somewhere.
- The `href="#"` is a placeholder. Real links would be like
  `href="https://github.com/yourname"`.
- Using `<a>` inside `<li>` means **any device** - mouse, keyboard, screen reader,
  touch - can reach and activate each link.

### Step 1.7 - Put the header + nav together

Your whole `<body>` should now be:

```html
<body>
  <main class="card">
    <header class="card__header">
      <img class="avatar" src="assets/images/avatar-jessica.jpeg" alt="Portrait of Jessica Randall">
      <h1 class="name">Jessica Randall</h1>
      <p class="location">London, United Kingdom</p>
    </header>

    <p class="bio">"Front-end developer and avid reader."</p>

    <nav class="links">
      <ul class="links__list">
        <li><a href="#">GitHub</a></li>
        <li><a href="#">Frontend Mentor</a></li>
        <li><a href="#">LinkedIn</a></li>
        <li><a href="#">Twitter</a></li>
        <li><a href="#">Instagram</a></li>
      </ul>
    </nav>
  </main>
</body>
```

**Stop here and refresh your browser.** You'll see the plain text content - no
styling yet. That's expected and *correct*. Content first, beauty second.

### Step 1.8 - What this version implements in the HTML

The finished version of this project keeps the same structure you are learning,
but it also adds a few details that make the page feel more polished and more
accessible:

- The profile card is wrapped in a clear `<main>` container so the page has a
  strong single content area.
- The real image file from the assets folder is used, so the avatar appears as a
  proper profile photo instead of a placeholder.
- The social links are grouped inside a `<nav>` and given an `aria-label` so the
  section is easier for screen readers to understand.
- The link text is written consistently and each item points to a real URL, which
  makes the page feel complete rather than like a demo placeholder.

These changes are not just about appearance. They also help the HTML communicate
meaning more clearly, which is one of the biggest goals of good semantic markup.

### Step 1.9 - Link your stylesheet (and clean up the head)

Two things to do in `<head>`:

1. **Remove** the entire `<style>` block (lines 12-15). We're moving all styling
   to a separate file.
2. **Add** a link to your new CSS file, right after the favicon line:

```html
<link rel="stylesheet" href="style.css">
```

Your `<head>` should now look like this:

```html
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <link rel="icon" type="image/png" sizes="32x32" href="./assets/images/favicon-32x32.png">
  <link rel="stylesheet" href="style.css">

  <title>Frontend Mentor | Social links profile</title>
</head>
```

**What this teaches:**
- `href="styles.css"` says "my CSS lives in a file next to this HTML called
  styles.css." (Relative path = same folder.)
- A separate CSS file means: one place to change the look of the whole page,
  and the HTML stays clean.

**HTML is done!** Refresh - nothing changed visually yet, because `style.css`
doesn't exist yet. Time to create it.

---

## Part 2 - CSS (the style)

> CSS = **Cascading Style Sheets**. It's the "cascading" part that matters most:
> rules can inherit and override each other, top to bottom. Later rules win over
> earlier ones with equal importance.

### Step 2.1 - Create `style.css`

Right-click in your project folder > New File > `style.css`. Open it in your editor.

In this project, the stylesheet is named `style.css`, so the HTML links to that
file directly. The finished version of the CSS does more than just color the
page. It also centers the card on the screen, uses the Inter font files from the
assets folder, gives the bio and location their own spacing and color, and makes
each social link look like a real button with a stronger hover and focus state.

These finishing touches are what make the design feel close to the preview rather
than looking like a rough draft.

### Step 2.2 - Load the Inter font

You have the font files in `assets/fonts/`. This block registers them so you can
use the family `Inter` anywhere:

```css
@font-face {
  font-family: "Inter";
  src: url("assets/fonts/static/Inter-Regular.ttf") format("truetype");
  font-weight: 400;
}

@font-face {
  font-family: "Inter";
  src: url("assets/fonts/static/Inter-SemiBold.ttf") format("truetype");
  font-weight: 600;
}

@font-face {
  font-family: "Inter";
  src: url("assets/fonts/static/Inter-Bold.ttf") format("truetype");
  font-weight: 700;
}
```

**What this teaches:**
- `@font-face` is like telling the browser: "if anyone asks for a font called
  Inter at this weight, load this file."
- We register **400** (Regular), **600** (SemiBold), and **700** (Bold) - the
  three weights the style guide lists. If you ask for a weight that isn't
  registered, the browser will fake it - which looks bad.

> **Alternative:** you could use Google Fonts with one `<link>` in the HTML
> instead. But since the files are already in the project, self-hosting means no
> internet needed and faster loading.

### Step 2.3 - Store the colors as variables

Add this block:

```css
:root {
  --green: hsl(75, 94%, 57%);
  --white: hsl(0, 0%, 100%);
  --grey-700: hsl(0, 0%, 20%);
  --grey-800: hsl(0, 0%, 12%);
  --grey-900: hsl(0, 0%, 8%);
}
```

**What this teaches:**
- `:root` is a special selector that means "the whole document." Variables set
  here are available everywhere.
- A **custom property** (variable) is a labeled box: `--green` holds the value
  `hsl(75, 94%, 57%)`.
- Benefits: you type the color once, and if you ever change it, you change it in
  one place - every spot that says `var(--green)` updates automatically.
- These are the exact colors from `style-guide.md`, so this is your single source
  of truth for the palette.

### Step 2.4 - The reset + base body styles

```css
*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  margin: 0;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Inter", sans-serif;
  background-color: var(--grey-900);
  color: var(--white);
  padding: 1.5rem;
}
```

**What this teaches:**
- `box-sizing: border-box` is the "gift box" rule. Normally, padding and border
  get *added on top of* an element's width (making it bigger than you asked).
  With `border-box`, the width you set *includes* padding and border - the box
  never surprises you by overflowing.
- `body { margin: 0; }` - browsers add a default 8px margin around the body.
  We remove it so our card can sit flush against the viewport.
- `min-height: 100vh` - the body is at least the full height of the screen
  (100% of the viewport height). Without this, the body is only as tall as its
  content, and you couldn't vertically center anything.
- `display: flex; align-items: center; justify-content: center;` - this is the
  centering recipe. Think of the body as a shelf:
  - `flex` turns it into a flex container (the shelf)
  - `justify-content: center` centers left-to-right (across the shelf)
  - `align-items: center` centers top-to-bottom (shelf height)
- `background-color: var(--grey-900)` - the page background uses your variable.
- `padding: 1.5rem` on the body - a safety buffer so the card never touches the
  screen edges on small phones.

### Step 2.5 - The card

```css
.card {
  background-color: var(--grey-800);
  padding: 2.5rem;
  border-radius: 1rem;
  width: 100%;
  max-width: 24rem;
  text-align: center;
}
```

**What this teaches:**
- `background-color` - dark grey, so the card stands out from the near-black page.
- `padding: 2.5rem` - space *inside* the card between its edge and the content
  (the bubble wrap in the gift box).
- `border-radius: 1rem` - rounds the corners. Larger value = rounder corners.
- `width: 100%` + `max-width: 24rem` - "be as wide as your container, but never
  wider than 384px." This keeps the card at a nice readable size on desktop
  while letting it shrink on phones.
- `text-align: center` - centers all text inside the card. One rule, whole card.

### Step 2.6 - The header and avatar

.card__header {
  margin-bottom: 1.5rem;
}

.avatar {
  width: 5.5rem;
  height: 5.5rem;
  border-radius: 50%;
  margin-bottom: 1.5rem;
}
```

**What this teaches:**
- `.avatar` sized 88px x 88px (`5.5rem`). `border-radius: 50%` makes the square
  image a perfect **circle** - 50% of its own width/height.
- `margin-bottom` pushes the elements below it away. Margins are the "space
  between gift boxes" - outside spacing. (Padding is inside; margin is outside.)
- `margin-bottom: 1.5rem` on the header too, separating header from the quote.
- Without a width/height, the image would render at its natural file size -
  probably too big. Setting both keeps it proportional and consistent.

### Step 2.7 - Name, location, quote

```css
.name {
  margin: 0;
  font-size: 1.5rem;
  font-weight: 700;
}

.location {
  margin: 0.5rem 0 0;
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--green);
}

.bio {
  margin: 0 0 1.5rem;
  font-size: 0.875rem;
  line-height: 1.5;
  color: hsl(0, 0%, 75%);
}
```

**What this teaches:**
- `font-size: 1.5rem` = 24px. We use **rem** units instead of px because rem
  scales with the user's browser settings - people who need bigger text get it.
  1rem = the root font size (16px by default), so 1.5rem = 24px.
- `.location` uses the green variable - this is the "London, United Kingdom"
  accent from the design.
- `.bio` is the quote. Notice it's a slightly lighter grey, not pure white -
  that's a subtle hierarchy so the name pops the most.
- `line-height: 1.5` gives each line breathing room - cramped text is hard to read.
- `margin: 0.5rem 0 0` is shorthand: top, left/right, bottom. Or think of it as
  clock order starting at top. `margin: 0 0 1.5rem` means top 0, sides 0, bottom 1.5rem.

### Step 2.8 - The links list (buttons)

```css
.links__list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.links__list a {
  display: block;
  padding: 0.875rem;
  border-radius: 0.5rem;
  background-color: var(--grey-700);
  color: var(--white);
  font-size: 0.875rem;
  font-weight: 600;
  text-decoration: none;
  transition: background-color 0.2s ease, color 0.2s ease;
}
```

**What this teaches:**
- `list-style: none` removes the bullet dots. `margin: 0; padding: 0;` removes
  the browser's default list indentation.
- `display: flex; flex-direction: column; gap: 1rem;` - the **shelf** again, but
  this time the books are stacked *vertically* (`column`), and `gap` puts equal
  space *between* them (no margin hacks needed).
- `display: block` on the link makes the *whole* row clickable, not just the text.
- `padding: 0.875rem` (14px) gives the button height so it looks like a real button.
- `text-decoration: none` removes the default underline on links.
- `transition` makes the hover color change *smooth* instead of snapping.

### Step 2.9 - Hover and focus states (the required feature!)

```css
.links__list a:hover,
.links__list a:focus-visible {
  background-color: var(--green);
  color: var(--grey-900);
}
```

**What this teaches:**
- This is the feature from the challenge's user story: "See hover and focus
  states for all interactive elements."
- `:hover` - when the mouse is over the link.
- `:focus-visible` - when a keyboard user tabs to the link. This is how a
  keyboard user "sees where they are." We style it the same as hover so both
  input methods get feedback.
- Green background + very dark text. Why dark text on green? **Contrast.**
  White text on that bright green would be hard to read - dark text passes the
  WCAG accessibility contrast check. Could a person with low vision read it? Yes.
- `color: var(--grey-900)` reuses the page background color as the text color -
  a trick to keep the palette small.

### Step 2.10 - Mobile touch-up

```css
@media (max-width: 400px) {
  .card {
    padding: 1.5rem;
  }
}
```

**What this teaches:**
- `@media` (media query) lets you write CSS that only applies under certain
  conditions - here, screens narrower than 400px.
- On tiny phones, 2.5rem of card padding eats up the width. Shrinking it to
  1.5rem keeps the card comfortably inside the screen.
- This is the first taste of **responsive design**: one layout that adapts.

### Step 2.11 - (Optional) Update the attribution

The footer in the original file said "Coded by Your Name Here." If you removed
it, you can add your own footer under the card. Your name goes in the link:

```html
<footer class="attribution">
  Challenge by <a href="https://www.frontendmentor.io?ref=challenge">Frontend Mentor</a>.
  Coded by <a href="#">Your Name</a>.
</footer>
```

---

## Part 3 - Test it like a pro

### Checklist

1. **Open `index.html` in your browser.** Double-click the file, or right-click >
   Open With > your browser.
2. **Card centered?** It should be dead-center on the page, on all screen sizes.
3. **Hover a button** - it should smoothly turn green with dark text.
4. **Keyboard test:** press `Tab` repeatedly. A focus ring/state should appear on
   each link, and `Enter` should activate it. This is the accessibility check.
5. **Resize the window** (or use DevTools > device toolbar, shortcut `Ctrl+Shift+M`).
   Check widths: ~1440px (desktop), 375px (mobile), and 320px (small phone).
   Nothing should overflow or touch the screen edges.
6. **Screenshot-compare** against `design/desktop-design.jpg` and
   `design/mobile-design.jpg` and note the differences (sizes, spacing).

### How to open the live preview

If you want a live preview that auto-refreshes, VS Code users can install the
**Live Server** extension, then right-click `index.html` > Open with Live Server.

### Bonus challenges (when the basics feel solid)

- Fill the buttons with **real links** (`href="https://github.com/yourname"` etc.)
- Try swapping the 5 `<li>` items' order in HTML vs. using `order` in CSS - see
  how flexbox can reorder content without touching HTML.
- Add `outline: none` to the focus rule (WARNING: think about whether that's a
  good idea for keyboard users - there's a famous accessibility lesson here!).

### Common mistakes to avoid

- **Link broken?** Check the path. `assets/images/...` (no leading `./`) works
  when the HTML and `assets` folder are in the same directory.
- **Font not loading?** The file must be registered with `@font-face` BEFORE it's
  used, and the `src` path must be correct relative to `styles.css`.
- **CSS not applying at all?** Is the `<link rel="stylesheet" href="styles.css">`
  line present, and does `styles.css` live in the same folder as `index.html`?
- **No hover change?** Check for typos in the selector, and make sure the rules
  come *after* the base link styles (cascading - later wins).

---

## Where to go next

- Stuck on a concept? Search "[concept] MDN" - MDN Web Docs is the definitive
  reference.
- Want more visual explanations? CSS-Tricks has an amazing Flexbox guide.
- Share your finished work with the community and ask for feedback:
  https://www.frontendmentor.io/community

You've built a real, interactive, accessible web page. That's a huge step.
Whatever you do next - keep building. There's no wrong answer when you're learning!


