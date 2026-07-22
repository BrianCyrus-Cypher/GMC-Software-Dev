# How to Build a Basic HTML Restaurant Website - Step by Step

## What You Will Build
A single-page restaurant website using only HTML. No CSS, no JavaScript. Just pure HTML structure.

---

## Step 1: Create the File

Create a new file called `index.html`. This is the standard name for a website's main page. When you open a folder as a website, the browser looks for `index.html` first.

---

## Step 2: The Document Type Declaration

```html
<!DOCTYPE html>
```

This is the very first line. It tells the browser "this file is an HTML5 document." Without this, the browser might render the page in an older, broken mode. The `!` means it is a declaration, not an HTML tag.

---

## Step 3: The Root Element

```html
<html lang="en">
```

This opens the HTML document. Everything else goes between this and the closing `</html>` tag. The `lang="en"` attribute tells the browser and screen readers that the page is in English. This helps with accessibility and search engines.

---

## Step 4: The Head Section

```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>La Maison Dorée - Fine Dining Restaurant</title>
</head>
```

### What each line does:

**`<head>`** - Opens the head section. Nothing here is visible on the page. It holds metadata (data about the page).

**`<meta charset="UTF-8">`** - Sets the character encoding to UTF-8. This supports all characters including special ones like é, ñ, and emojis. Without this, accent marks in "La Maison Dorée" would show as garbage text.

**`<meta name="viewport" content="width=device-width, initial-scale=1.0">`** - Makes the page responsive on mobile devices. `width=device-width` sets the page width to match the device screen. `initial-scale=1.0` prevents the browser from zooming in or out automatically.

**`<title>`** - The text that appears in the browser tab and bookmark. Also used by search engines as the page title in results.

**`</head>`** - Closes the head section.

---

## Step 5: The Body Opens

```html
<body>
```

Everything between `<body>` and `</body>` is what the user actually sees on the page.

---

## Step 6: The Header

```html
<header>
    <h1>La Maison Dorée</h1>
    <nav>
        <a href="#welcome">Home</a>
        <a href="#menu">Menu</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
    </nav>
</header>
```

### What each part does:

**`<header>`** - A semantic HTML5 element. It tells the browser "this is the top section of the page." Search engines and screen readers understand this means navigation and branding.

**`<h1>`** - The main heading of the page. There should only be one `<h1>` per page for SEO. It is the most important heading.

**`<nav>`** - Another semantic element. It tells the browser "this section contains navigation links."

**`<a href="#welcome">`** - An anchor link. The `href` attribute holds the destination. The `#` symbol means "jump to the element on this page that has this id." So `#welcome` scrolls to the element with `id="welcome"`.

**`<a href="#menu">`** - Jumps to the menu section.

**`<a href="#about">`** - Jumps to the about section.

**``<a href="#contact">`** - Jumps to the contact form.

**`</nav>`** - Closes the navigation.

**`</header>`** - Closes the header.

---

## Step 7: The Welcome Section

```html
<section id="welcome">
    <h2>Welcome to La Maison Dorée</h2>
    <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200" alt="Restaurant interior" width="800">
    <p>Experience the art of fine dining where every dish tells a story. Our passionate chefs craft culinary masterpieces using the freshest ingredients from local farms.</p>
</section>
```

### What each part does:

**`<section id="welcome">`** - A semantic element that groups related content. The `id="welcome"` is a unique identifier. The nav link `href="#welcome"` uses this id to know where to scroll.

**`<h2>`** - A second-level heading. Used for section titles. Hierarchically below `<h1>`.

**`<img>`** - Displays an image. Self-closing tag (no `</img>`).

| Attribute | Purpose |
|-----------|---------|
| `src` | The image source URL. This links to an image hosted on Unsplash. |
| `alt` | Alternative text. Describes the image for screen readers and shows if the image fails to load. |
| `width="800"` | Sets the image display width to 800 pixels. |

**`<p>`** - A paragraph of text. The welcome message introducing the restaurant.

**`</section>`** - Closes the welcome section.

---

## Step 8: The Menu Section

```html
<section id="menu">
    <h2>Our Menu</h2>

    <div>
        <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400" alt="Caesar Salad" width="300">
        <h3>Garden Fresh Caesar Salad</h3>
        <p>Crisp romaine lettuce, house-made croutons, parmesan shavings, and our signature creamy Caesar dressing.</p>
        <p>Price: $14.99</p>
    </div>

    <div>
        <img src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400" alt="Margherita Pizza" width="300">
        <h3>Wood-Fired Margherita Pizza</h3>
        <p>San Marzano tomatoes, fresh mozzarella di bufala, basil leaves, and extra virgin olive oil on our signature crust.</p>
        <p>Price: $18.99</p>
    </div>

    <div>
        <img src="https://images.unsplash.com/photo-1544025162-d76694265947?w=400" alt="Grilled Salmon" width="300">
        <h3>Pan-Seared Atlantic Salmon</h3>
        <p>Fresh salmon fillet with lemon butter sauce, served with roasted asparagus and herbed rice pilaf.</p>
        <p>Price: $28.99</p>
    </div>

    <div>
        <img src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400" alt="Beef Tenderloin" width="300">
        <h3>Filet Mignon au Poivre</h3>
        <p>Tender beef tenderloin with peppercorn sauce, accompanied by truffle mashed potatoes and glazed vegetables.</p>
        <p>Price: $42.99</p>
    </div>

    <div>
        <img src="https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400" alt="Tiramisu" width="300">
        <h3>Classic Italian Tiramisu</h3>
        <p>Layers of espresso-soaked ladyfingers, mascarpone cream, dusted with cocoa powder and dark chocolate shavings.</p>
        <p>Price: $12.99</p>
    </div>

    <div>
        <img src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400" alt="Pasta" width="300">
        <h3>Lobster Linguine Alfredo</h3>
        <p>Succulent lobster tail tossed with linguine in a rich, creamy parmesan alfredo sauce with fresh herbs.</p>
        <p>Price: $36.99</p>
    </div>
</section>
```

### What each part does:

**`<section id="menu">`** - Opens the menu section. The `id="menu"` lets the nav link jump here.

**`<h2>`** - Section heading "Our Menu".

**`<div>`** - A generic container. Groups one menu item's content together (image, name, description, price). Without CSS it just sits there, but it keeps the code organized.

**Each menu item follows the same pattern:**

```
<div>
    <img>    (food photo)
    <h3>     (dish name)
    <p>      (description)
    <p>      (price)
</div>
```

### Why use `<h3>` for dish names?

The heading hierarchy matters:

```
<h1> = Page title (La Maison Dorée)
  <h2> = Section titles (Our Menu, Our Story, Contact Us)
    <h3> = Sub-items within sections (individual dish names)
```

This hierarchy helps search engines understand the page structure and screen readers navigate the content.

### Why two `<p>` tags instead of one for the dish?

Separating the description and price into different paragraphs keeps them visually separated even without CSS. The browser adds space between paragraph elements by default.

---

## Step 9: The About Section

```html
<section id="about">
    <h2>Our Story</h2>
    <p>Founded in 1985 by Chef Antoine Beaumont, La Maison Dorée began as a small family bistro in the heart of the city. With nothing more than a passion for authentic French cuisine and a dream, Chef Antoine transformed a modest storefront into a culinary destination. Over the decades, we have stayed true to our roots while embracing modern culinary innovations. Today, La Maison Dorée stands as a testament to the enduring power of quality, tradition, and the simple joy of sharing a wonderful meal with loved ones. Every dish that leaves our kitchen carries with it the legacy of nearly four decades of culinary excellence.</p>
</section>
```

### What each part does:

**`<section id="about">`** - Opens the about section with an id for navigation.

**`<h2>`** - Section heading "Our Story".

**`<p>`** - The full restaurant backstory in one paragraph. The browser wraps the text automatically to fit the screen width.

---

## Step 10: The Contact Form

```html
<section id="contact">
    <h2>Contact Us</h2>
    <form>
        <label for="name">Your Name:</label>
        <input type="text" id="name" name="name" placeholder="Your Name" required>

        <label for="email">Your Email:</label>
        <input type="email" id="email" name="email" placeholder="Your Email" required>

        <label for="message">Your Message:</label>
        <textarea id="message" name="message" placeholder="Your Message" required></textarea>

        <button type="submit">Send Message</button>
    </form>
</section>
```

### What each part does:

**`<section id="contact">`** - Opens the contact section.

**`<form>`** - Container for all input fields. Groups them as a single form unit.

### The Name Field:

```html
<label for="name">Your Name:</label>
<input type="text" id="name" name="name" placeholder="Your Name" required>
```

| Part | What it does |
|------|--------------|
| `<label for="name">` | Text label attached to the input. The `for` attribute matches the input's `id`. Clicking the label focuses the input. Screen readers read the label when the input is selected. |
| `<input type="text">` | A single-line text field. `type="text"` allows any characters. |
| `id="name"` | Unique identifier. The `<label for="name">` uses this to connect to this input. |
| `name="name"` | The field name sent to the server when the form is submitted. |
| `placeholder="Your Name"` | Hint text shown inside the input when empty. Disappears when the user types. |
| `required` | The browser blocks form submission if this field is empty. Shows a validation message. |

### The Email Field:

```html
<label for="email">Your Email:</label>
<input type="email" id="email" name="email" placeholder="Your Email" required>
```

Same structure as the name field, but `type="email"` makes the browser validate that the input contains a proper email format (must have @ and a domain). On mobile, it shows the email keyboard with @ and . shortcuts.

### The Message Field:

```html
<label for="message">Your Message:</label>
<textarea id="message" name="message" placeholder="Your Message" required></textarea>
```

| Part | What it does |
|------|--------------|
| `<textarea>` | A multi-line text field. Users can type paragraphs. Unlike `<input>`, it has a closing tag and can contain default text between the tags. |
| `placeholder` | Same as input - hint text that disappears on typing. |
| `required` | Must be filled before submission. |

### Why `<textarea>` instead of `<input>`?

`<input>` is for single-line text (names, emails, search queries). `<textarea>` is for multi-line text (messages, comments, reviews). It also allows users to resize and scroll through their text.

### The Submit Button:

```html
<button type="submit">Send Message</button>
```

| Part | What it does |
|------|--------------|
| `<button>` | A clickable button element. |
| `type="submit"` | Tells the browser this button submits the form. When clicked, the browser collects all form data and sends it. Without a server, nothing happens, but the form is structured correctly for backend connection. |

---

## Step 11: The Footer

```html
<footer>
    <h3>La Maison Dorée</h3>
    <p>123 Gourmet Avenue, New York, NY 10001</p>
    <p>Phone: (555) 123-4567</p>
    <p>Email: info@lamaisondoree.com</p>
    <p>Hours: Mon-Sun 11AM - 11PM</p>
    <p>
        <a href="#">Facebook</a> |
        <a href="#">Instagram</a> |
        <a href="#">Twitter</a>
    </p>
</footer>
```

### What each part does:

**`<footer>`** - Semantic HTML5 element. Tells the browser this is the bottom section of the page.

**`<h3>`** - Restaurant name as a sub-heading.

**`<p>` tags** - Each contact detail on its own line: address, phone, email, hours.

**Social links:**

```html
<a href="#">Facebook</a> |
<a href="#">Instagram</a> |
<a href="#">Twitter</a>
```

Each `<a>` is a link. The `href="#"` is a placeholder. In a real site, you would replace `#` with actual URLs like `https://facebook.com/lamaisondoree`. The `|` characters are just text separators between the links.

---

## Step 12: Close All Tags

```html
</body>
</html>
```

Every opened tag must be closed. `</body>` closes the body. `</html>` closes the HTML document. The order matters - you must close tags in the reverse order they were opened.

---

## HTML Element Reference

| Element | Type | Purpose |
|---------|------|---------|
| `<!DOCTYPE html>` | Declaration | Tells browser this is HTML5 |
| `<html>` | Root | Contains the entire document |
| `<head>` | Metadata | Holds non-visible page data |
| `<meta>` | Metadata | Sets charset, viewport, etc. |
| `<title>` | Metadata | Browser tab text |
| `<body>` | Root | All visible content |
| `<header>` | Semantic | Top section of page |
| `<nav>` | Semantic | Navigation links |
| `<section>` | Semantic | Groups related content |
| `<footer>` | Semantic | Bottom section of page |
| `<h1>` to `<h6>` | Heading | Headings from most to least important |
| `<p>` | Text | Paragraph of text |
| `<img>` | Media | Displays an image (self-closing) |
| `<a>` | Link | Creates a hyperlink |
| `<div>` | Container | Generic grouping container |
| `<form>` | Form | Groups form inputs |
| `<label>` | Form | Labels for form inputs |
| `<input>` | Form | Single-line user input |
| `<textarea>` | Form | Multi-line user input |
| `<button>` | Form | Clickable button |

---

## Attribute Reference

| Attribute | Used On | Purpose |
|-----------|---------|---------|
| `lang` | `<html>` | Sets the page language |
| `charset` | `<meta>` | Sets character encoding |
| `name` + `content` | `<meta>` | Defines metadata type and value |
| `id` | Any element | Unique identifier for the page |
| `class` | Any element | CSS class name (unused without CSS) |
| `href` | `<a>` | Link destination URL |
| `src` | `<img>` | Image source URL |
| `alt` | `<img>` | Alternative text for image |
| `width` | `<img>` | Image display width in pixels |
| `for` | `<label>` | Connects label to input by id |
| `type` | `<input>`, `<button>` | Defines input type or button behavior |
| `name` | `<input>`, `<textarea>` | Field name for form submission |
| `placeholder` | `<input>`, `<textarea>` | Hint text inside input |
| `required` | `<input>`, `<textarea>` | Field must be filled to submit |

---

## How to Run

1. Open a text editor (VS Code, Notepad++, Sublime Text)
2. Paste the HTML code
3. Save as `index.html`
4. Double-click the file to open in your browser
5. You will see the raw unstyled page with all content visible

---

## What This Page Looks Like Without CSS

- All text is black on white
- Headings are bold and sized by the browser default
- Images display at their specified width
- Links are blue and underlined
- Form inputs are basic browser defaults
- Everything stacks vertically top to bottom
- No colors, no layout, no decorations

This is intentional - it teaches you HTML structure before styling.
