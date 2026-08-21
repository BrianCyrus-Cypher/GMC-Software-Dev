# Social Links Profile - Updated Step-by-Step Build Guide

This guide walks you through the project using the current version of the code.
It follows the same teaching style as the original guide, but it reflects the
actual profile card, real social links, and the styling now used in the project.

**How to use it:** Type each line yourself. Save the file and refresh the browser
after each step so you can see your progress.

### What changed in the current version

- The page now uses a real profile card structure with Brian Cyrus as the profile name.
- The content includes a real avatar image, real location text, and real social links.
- The card is centered on the page with responsive spacing and a polished dark theme.
- Each social link is styled as a full-width button with hover and focus states.
- The Inter font is loaded locally from the assets folder, and CSS variables are used for the colors.

---

## Part 0 - Know what you're building

### The design, in plain words

A single card sits in the center of the page on a dark background. From top to
bottom, it contains:

1. A circular avatar image
2. The person's name
3. A location line in green
4. A short bio sentence
5. A vertical stack of social links

When you hover over or tab to a link, it changes to green.

### The tools we'll use

| Concept | Why we need it |
|---|---|
| Semantic HTML (`<main>`, `<header>`, `<nav>`, `<ul>`, `<a>`) | Gives the page meaning and makes it easier for screen readers |
| Flexbox | Helps center the card and arrange the buttons vertically |
| CSS custom properties (`:root`) | Stores colors in one place so they can be reused |
| `@font-face` | Loads the Inter font files from the local assets folder |
| `:hover` and `:focus-visible` | Creates the interactive states for the links |

### Colors (from style-guide.md)

| Name | Value | Where it's used |
|---|---|---|
| Green | `hsl(75, 94%, 57%)` | Location text + link hover |
| White | `hsl(0, 0%, 100%)` | Main text and button text |
| Grey 500 | `hsl(0, 0%, 75%)` | Bio text |
| Grey 700 | `hsl(0, 0%, 20%)` | Link button background |
| Grey 800 | `hsl(0, 0%, 12%)` | Card background |
| Grey 900 | `hsl(0, 0%, 8%)` | Page background |

### Fonts

- Family: Inter
- Weights used: 400, 600, 700
- Body text size: 14px

### Files you'll work with

- `index.html` - the page structure
- `style.css` - the styling for the page

---

## Part 1 - HTML (the structure)

> Think of HTML as the skeleton. It gives the page meaning. CSS makes it look nice.

### Step 1.1 - Open `index.html`

Open the file and look at the `<head>` first. You should already see:

- `<!DOCTYPE html>`
- the character set meta tag
- the viewport meta tag
- the favicon link
- the stylesheet link
- the page title

The head is already in good shape, so we will mainly focus on the body.

### Step 1.2 - Build the main card container

Inside the `<body>`, add a `<main>` element with the class `card`:

```html
<body>
  <main class="card">
  </main>
</body>
```

**Why:** The card is the main content area of the page. The `card` class lets us
style that container later.

### Step 1.3 - Add the profile header

Place a header inside the card with the profile information:

```html
<body>
  <main class="card">
    <header class="card__header">
      <img class="avatar" src="./assets/images/Brian.jpg" alt="Portrait of Brian Cyrus" />
      <h1 class="name">Brian Cyrus</h1>
      <p class="location">Nairobi, Kenya</p>
    </header>
  </main>
</body>
```

**Why:** This section introduces the person. The image, heading, and location all
belong together, so they are grouped inside `<header>`.

### Step 1.4 - Add the bio text

Below the header, add a short paragraph for the bio:

```html
<body>
  <main class="card">
    <header class="card__header">
      <img class="avatar" src="./assets/images/Brian.jpg" alt="Portrait of Brian Cyrus" />
      <h1 class="name">Brian Cyrus</h1>
      <p class="location">Nairobi, Kenya</p>
    </header>

    <p class="bio">Full-Stack Developer and Vibe Coder</p>
  </main>
</body>
```

**Why:** The bio is separate from the header, so it gets its own class. That makes
it easier to style differently later.

### Step 1.5 - Add the social links as a navigation list

Create a `<nav>` element below the bio and place the links inside an unordered list:

```html
<body>
  <main class="card">
    <header class="card__header">
      <img class="avatar" src="./assets/images/Brian.jpg" alt="Portrait of Brian Cyrus" />
      <h1 class="name">Brian Cyrus</h1>
      <p class="location">Nairobi, Kenya</p>
    </header>

    <p class="bio">Full-Stack Developer and Vibe Coder</p>

    <nav class="links" aria-label="Social links">
      <ul class="links__list">
        <li><a href="https://github.com/BrianCyrus-Cypher">GitHub</a></li>
        <li><a href="https://www.frontendmentor.io">Frontend Mentor</a></li>
        <li><a href="https://www.linkedin.com/in/brian-ngatia-cypher">LinkedIn</a></li>
        <li><a href="https://x.com/Cy_pher254">Twitter</a></li>
        <li><a href="https://www.instagram.com/cy_pher___/">Instagram</a></li>
      </ul>
    </nav>
  </main>
</body>
```

**Why:** These are links to other pages, so they should be inside `<a>` tags.
Using a list makes the structure clear and accessible.

### Step 1.6 - Check the completed HTML structure

Your finished HTML should now include:

- one main content container
- one profile header section
- one bio paragraph
- one navigation area with five links

This structure is clean, semantic, and ready for styling.

---

## Part 2 - CSS (the style)

> CSS is where the page becomes visual. It controls color, spacing, layout, and interaction.

### Step 2.1 - Create `style.css`

Create a new file named `style.css` in the project root. Then open it and begin with the font definitions.

### Step 2.2 - Load the local Inter font files

Add this block at the top of the file:

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

**Why:** This tells the browser which font files to use for the Inter font at the
weights needed by the design.

### Step 2.3 - Create CSS variables for the colors

Add the color variables next:

```css
:root {
  --green: hsl(75, 94%, 57%);
  --white: hsl(0, 0%, 100%);
  --grey-500: hsl(0, 0%, 75%);
  --grey-700: hsl(0, 0%, 20%);
  --grey-800: hsl(0, 0%, 12%);
  --grey-900: hsl(0, 0%, 8%);
}
```

**Why:** Variables let you reuse the same color values throughout the file. If you
need to change the palette later, you only change it in one place.

### Step 2.4 - Add the box-sizing reset and base body styles

Add the following:

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
  justify-content: center;
  align-items: center;
  font-family: "Inter", sans-serif;
  background-color: var(--grey-900);
  color: var(--white);
  padding: 1.5rem;
}
```

**Why:**
- `box-sizing: border-box` helps keep sizing predictable.
- `margin: 0` removes the default gap around the page.
- `min-height: 100vh` makes the page at least as tall as the viewport.
- Flexbox centers the card both horizontally and vertically.

### Step 2.5 - Style the card container

Now style the main card:

```css
.card {
  background-color: var(--grey-800);
  padding: 2.5rem;
  border-radius: 1.25rem;
  width: min(100%, 24rem);
  text-align: center;
  box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.04);
}
```

**Why:** This gives the card its dark background, rounded corners, spacing, and
maximum width.

### Step 2.6 - Style the header area and avatar

Add the following styles:

```css
.card__header {
  margin-bottom: 1.5rem;
}

.avatar {
  width: 5.5rem;
  height: 5.5rem;
  border-radius: 50%;
  margin-bottom: 1.5rem;
  object-fit: cover;
}
```

**Why:** The avatar should appear circular and slightly spaced from the rest of the
content. `object-fit: cover` keeps the image nicely framed inside the circle.

### Step 2.7 - Style the name, location, and bio

Add these rules:

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
  color: var(--grey-500);
}
```

**Why:** These styles make the profile details feel clear and visually balanced.
The location gets the green accent color to match the design.

### Step 2.8 - Style the link list as a vertical button stack

Add the list styles:

```css
.links__list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
}
```

**Why:** The links are stacked vertically, so a column flex layout is perfect.
The gap creates spacing between each button.

### Step 2.9 - Style each link as a button

Now define the button appearance:

```css
.links__list a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0.85rem 1rem;
  border-radius: 0.75rem;
  background-color: var(--grey-700);
  color: var(--white);
  font-size: 0.95rem;
  font-weight: 600;
  text-decoration: none;
  transition: background-color 180ms ease, color 180ms ease, transform 180ms ease;
}
```

**Why:** This makes each link feel like a real button. The display properties help
center the text nicely, and the rounded corners make the design more polished.

### Step 2.10 - Add interactive hover and focus states

Finish the stylesheet with:

```css
.links__list a:hover,
.links__list a:focus-visible {
  background-color: var(--green);
  color: var(--grey-900);
  transform: translateY(-1px);
}

.links__list a:focus-visible {
  outline: 2px solid var(--green);
  outline-offset: 2px;
}
```

**Why:** These states make the links feel interactive and accessible. Hover gives
mouse users feedback, and `:focus-visible` helps keyboard users know where they are.

---

## Final result

When all of the above is in place, the page should look like a polished social
profile card with:

- a centered dark card
- a circular profile image
- green location text
- a clean bio section
- a vertical stack of social buttons
- hover and focus feedback on each link

This version is a strong example of how HTML structure and CSS styling work together
for a complete front-end component.
