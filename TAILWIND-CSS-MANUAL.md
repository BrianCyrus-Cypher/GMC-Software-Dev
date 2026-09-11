# Tailwind CSS Project Instruction Manual

This is a repeatable workflow for building the projects in this workspace with Tailwind CSS. It uses the pulled [testimonials-concord reference project](testimonials-concord/index.html) as the main case study and translates its normal CSS into Tailwind utilities.

## Important scope note

Tailwind has thousands of generated utilities and arbitrary values. No sensible project should use every class. This manual covers every major utility family and shows how to discover any individual property in the [Flowbite Tailwind CSS Cheat Sheet](https://flowbite.com/tools/tailwind-cheat-sheet/). The [official Tailwind documentation](https://tailwindcss.com/docs) is the complete reference for all utilities, variants, configuration, and plugins.

## 1. The workflow to use for every project

1. Read the brief and list the content, interactions, states, and responsive changes.
2. Create semantic HTML before styling: `main`, `header`, `nav`, `section`, `article`, `button`, and real headings.
3. Start mobile-first. Add the smallest layout first, then add `sm:`, `md:`, `lg:`, `xl:`, or `2xl:` only when the design changes.
4. Identify layout ownership. Use Grid for rows and columns; use Flexbox for one-dimensional alignment.
5. Add Tailwind classes in this order: layout, sizing, spacing, typography, color, borders, effects, states, and responsive variants.
6. Extract repeated markup into components when using React. In plain HTML, keep repeated structures consistent and readable.
7. Test at narrow mobile, wide mobile, tablet, and desktop widths. Check overflow, contrast, focus, and image cropping.
8. Compare the result with the design, then adjust one utility at a time.

## 2. Setup options

### Option A: CDN for a small exercise

Use this when learning or making a static prototype. It needs no build step, but it is not the preferred production setup.

```html
<!-- Loads Tailwind in the browser for a quick prototype. -->
<script src="https://cdn.tailwindcss.com"></script>
```

```html
<!-- Utilities are written directly on the element they style. -->
<body class="min-h-screen bg-slate-100 text-slate-900">
  <main class="mx-auto max-w-6xl px-4 py-8">
    <h1 class="text-3xl font-bold">My project</h1>
  </main>
</body>
```

### Option B: Vite plus Tailwind v4 for a real project

```bash
# Create the application.
npm create vite@latest my-tailwind-project -- --template vanilla
cd my-tailwind-project

# Install the project dependencies and Tailwind's Vite plugin.
npm install
npm install -D tailwindcss @tailwindcss/vite
npm run dev
```

```js
// vite.config.js: connect Tailwind to Vite's CSS pipeline.
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss()],
});
```

```css
/* src/style.css: import Tailwind's generated utilities. */
@import "tailwindcss";

/* Keep only genuine project-wide rules here. */
@theme {
  --font-display: "Barlow Semi Condensed", sans-serif;
}
```

## 3. The utility families

Use the cheat sheet to search by CSS property. The examples below show the most useful forms and the naming pattern behind them.

### Layout and positioning

```html
<!-- Flow, display, and positioning. -->
<div class="block md:flex">Content</div>
<div class="grid grid-cols-1 gap-6 md:grid-cols-2">Cards</div>
<div class="relative"><span class="absolute right-4 top-4">Badge</span></div>

<!-- Grid columns, rows, placement, and alignment. -->
<div class="grid grid-cols-4 grid-rows-2 items-stretch justify-items-stretch">
  <article class="col-span-2 row-span-1">Wide card</article>
</div>

<!-- Flex direction, wrapping, alignment, and distribution. -->
<div class="flex flex-col flex-wrap items-center justify-between gap-4 md:flex-row">
  Toolbar
</div>
```

Common families: `block`, `hidden`, `flex`, `grid`, `inline`, `relative`, `absolute`, `sticky`, `container`, `columns-*`, `grid-cols-*`, `col-span-*`, `gap-*`, `items-*`, `justify-*`, `content-*`, `self-*`, `place-*`, `order-*`, `float-*`, and `z-*`.

### Sizing and spacing

```html
<!-- Width, height, minimums, maximums, and viewport-relative sizing. -->
<section class="min-h-screen w-full max-w-6xl p-6 sm:px-8 lg:py-12">
  <!-- Margin and space utilities control external relationships. -->
  <div class="mx-auto mt-8 space-y-4">Content</div>
</section>
```

Common families: `w-*`, `h-*`, `size-*`, `min-w-*`, `max-w-*`, `min-h-*`, `max-h-*`, `m-*`, `mx-*`, `my-*`, `mt-*`, `p-*`, `px-*`, `py-*`, `space-x-*`, and `space-y-*`.

### Typography

```html
<!-- Typography utilities replace most basic text CSS declarations. -->
<h1 class="font-display text-4xl font-bold leading-tight tracking-tight text-slate-900">
  A clear page heading
</h1>
<p class="max-w-prose text-base font-normal leading-7 text-slate-600">
  Supporting copy should remain readable at every breakpoint.
</p>
```

Common families: `font-*`, `text-*`, `text-left`, `uppercase`, `italic`, `underline`, `leading-*`, `tracking-*`, `decoration-*`, `whitespace-*`, `break-*`, `truncate`, and `line-clamp-*`.

### Backgrounds, borders, and effects

```html
<!-- Color, image, gradient, border, radius, shadow, and opacity. -->
<article class="rounded-xl border border-slate-200 bg-white bg-cover bg-center p-6 shadow-lg">
  <div class="bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white">Accent</div>
</article>
```

Common families: `bg-*`, `from-*`, `via-*`, `to-*`, `border-*`, `rounded-*`, `shadow-*`, `ring-*`, `opacity-*`, `mix-blend-*`, and `divide-*`.

### Images, overflow, and interaction

```html
<!-- Object utilities keep fixed-format media from distorting. -->
<img class="aspect-square w-full rounded-full object-cover" src="image.jpg" alt="Descriptive subject" />

<!-- State variants apply styles only during a user interaction. -->
<button class="cursor-pointer transition hover:-translate-y-0.5 hover:bg-slate-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600 disabled:cursor-not-allowed disabled:opacity-50">
  Submit
</button>
```

Common families: `object-*`, `aspect-*`, `overflow-*`, `overscroll-*`, `cursor-*`, `select-*`, `pointer-events-*`, `resize`, `transition-*`, `duration-*`, `ease-*`, `transform`, and `animate-*`.

## 4. Responsive design and variants

Tailwind is mobile-first: an unprefixed class applies to every size, and a prefixed class overrides it from that breakpoint upward.

```html
<!-- One column by default, two columns at 768px, four at 1280px. -->
<div class="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">Cards</div>

<!-- Hide navigation on mobile and show it from the medium breakpoint. -->
<nav class="hidden items-center gap-6 md:flex">Links</nav>
```

Default breakpoints: `sm` 640px, `md` 768px, `lg` 1024px, `xl` 1280px, and `2xl` 1536px. Use variants such as `hover:`, `focus:`, `focus-visible:`, `active:`, `disabled:`, `group-hover:`, `peer-checked:`, `dark:`, `motion-safe:`, and `motion-reduce:` when the interaction requires them.

## 5. Complete case study: testimonials-concord

The original project uses CSS Grid areas, Flexbox, custom properties, pseudo-elements, and a desktop-to-mobile media query. The following is the Tailwind version of that same structure. Comments explain the purpose of the nearby markup or class.

```html
<!-- Tailwind CDN is enough when this file is opened as a static exercise. -->
<script src="https://cdn.tailwindcss.com"></script>

<!-- The page background and font are applied at the document level. -->
<main class="grid min-h-screen place-items-center bg-slate-100 px-3 py-9 font-sans text-slate-700">
  <!-- One column is the mobile default; spans replace the desktop grid areas. -->
  <section class="grid w-full max-w-6xl grid-cols-1 gap-6 lg:grid-cols-4" aria-label="Testimonials">
    <!-- lg:col-span-2 makes this card occupy two desktop columns. -->
    <article class="relative overflow-hidden rounded-xl bg-violet-700 p-6 text-white shadow-xl lg:col-span-2">
      <!-- Flex aligns the avatar and author information on one axis. -->
      <header class="relative z-10 mb-5 flex items-center gap-3.5">
        <!-- size, rounded, border, and object-cover translate the original image CSS. -->
        <img class="size-9 rounded-full border-2 border-white/60 object-cover" src="./images/image-daniel.jpg" alt="Daniel Clifford" />
        <div>
          <h2 class="text-sm font-semibold">Daniel Clifford</h2>
          <p class="text-xs text-violet-100/80">Verified Graduate</p>
        </div>
      </header>
      <!-- Relative and z-10 keep content above the decorative quotation image. -->
      <h3 class="relative z-10 mb-4 text-2xl font-semibold leading-tight">I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined.</h3>
      <p class="relative z-10 text-sm leading-6 text-violet-100/85">“I honestly feel I got every penny's worth. Since completing the course, I successfully switched careers.”</p>
      <!-- An absolutely positioned image replaces the original pseudo-element. -->
      <img class="absolute right-8 top-0 w-24 opacity-50" src="./images/bg-pattern-quotation.svg" alt="" aria-hidden="true" />
    </article>

    <!-- A single-column card needs no span; the grid places it next. -->
    <article class="rounded-xl bg-slate-600 p-6 text-white shadow-xl">
      <header class="mb-5 flex items-center gap-3.5">
        <img class="size-9 rounded-full object-cover" src="./images/image-jonathan.jpg" alt="Jonathan Walters" />
        <div><h2 class="text-sm font-semibold">Jonathan Walters</h2><p class="text-xs text-slate-300">Verified Graduate</p></div>
      </header>
      <h3 class="mb-4 text-xl font-semibold leading-tight">The team was very supportive and kept me motivated</h3>
      <p class="text-sm leading-6 text-slate-300">“I started as a total newbie with virtually no coding skills. I now work as a mobile engineer.”</p>
    </article>

    <!-- This light card demonstrates dark text on a light surface. -->
    <article class="rounded-xl bg-white p-6 text-slate-700 shadow-xl">
      <header class="mb-5 flex items-center gap-3.5">
        <img class="size-9 rounded-full border-2 border-slate-700/20 object-cover" src="./images/image-jeanette.jpg" alt="Jeanette Harmon" />
        <div><h2 class="text-sm font-semibold">Jeanette Harmon</h2><p class="text-xs text-slate-500">Verified Graduate</p></div>
      </header>
      <h3 class="mb-4 text-xl font-semibold leading-tight">An overall wonderful and rewarding experience</h3>
      <p class="text-sm leading-6 text-slate-600">“I now have a job I really enjoy, and make a good living while doing something I love.”</p>
    </article>

    <!-- This card spans two desktop columns, matching the original grid area. -->
    <article class="rounded-xl bg-slate-950 p-6 text-white shadow-xl lg:col-span-2">
      <header class="mb-5 flex items-center gap-3.5">
        <img class="size-9 rounded-full object-cover" src="./images/image-patrick.jpg" alt="Patrick Abrams" />
        <div><h2 class="text-sm font-semibold">Patrick Abrams</h2><p class="text-xs text-slate-300">Verified Graduate</p></div>
      </header>
      <h3 class="mb-4 text-2xl font-semibold leading-tight">Awesome teaching support from TAs who did the bootcamp themselves.</h3>
      <p class="text-sm leading-6 text-slate-300">“The program gave me the confidence necessary to present myself as a capable junior developer.”</p>
    </article>

    <!-- lg:row-span-2 keeps this card tall on desktop; it returns to normal flow on mobile. -->
    <article class="rounded-xl bg-white p-6 text-slate-700 shadow-xl lg:row-span-2">
      <header class="mb-5 flex items-center gap-3.5">
        <img class="size-9 rounded-full border-2 border-slate-700/20 object-cover" src="./images/image-kira.jpg" alt="Kira Whittle" />
        <div><h2 class="text-sm font-semibold">Kira Whittle</h2><p class="text-xs text-slate-500">Verified Graduate</p></div>
      </header>
      <h3 class="mb-4 text-xl font-semibold leading-tight">Such a life-changing experience. Highly recommended!</h3>
      <p class="text-sm leading-6 text-slate-600">“The entire curriculum and staff did not disappoint. The agile team project took my learning to the next level.”</p>
    </article>
  </section>
</main>
```

### Mapping the original CSS to Tailwind

| Original CSS idea | Tailwind translation |
| --- | --- |
| `display: grid` | `grid` |
| `grid-template-columns` | `grid-cols-1 lg:grid-cols-4` |
| `gap: 26px` | `gap-6` or `gap-[26px]` |
| `display: flex` | `flex` |
| `align-items: center` | `items-center` |
| `padding` | `p-6`, `px-*`, `py-*` |
| `border-radius` | `rounded-xl` |
| `box-shadow` | `shadow-xl` |
| `background` and `color` | `bg-*` and `text-*` |
| `object-fit: cover` | `object-cover` |
| media query | `lg:` or another breakpoint prefix |
| pseudo-element quotation art | a positioned decorative `<img>` |

## 6. Components, arbitrary values, and custom CSS

Do not force every unusual design value into the default scale. Use an arbitrary value such as `w-[37rem]`, `grid-cols-[1fr_2fr]`, or `bg-[#4c1d95]` when the value is intentional. Use CSS in the stylesheet when the behavior is genuinely complex, shared, or impossible to express clearly with utilities.

For React, keep repeated class strings in a component and use a class-merging helper only when conditional classes become difficult to read. Do not build class names dynamically from incomplete strings such as ``text-${color}-600``; Tailwind needs to see complete class names when scanning source files.

## 7. Accessibility and quality checks

- Use meaningful HTML and one clear `h1` per page.
- Give informative images useful `alt` text. Give decorative images `alt=""` and `aria-hidden="true"`.
- Use `<button>` for actions and `<a>` for navigation.
- Keep visible keyboard focus with `focus-visible:*` utilities.
- Check text and background contrast, especially on dark cards.
- Test keyboard navigation, zoom to 200%, reduced motion, and narrow screens.
- Avoid using color alone to communicate status.
- Run `npm run build` before shipping a Vite project.

## 8. Useful links

- [Flowbite Tailwind CSS Cheat Sheet](https://flowbite.com/tools/tailwind-cheat-sheet/): searchable visual reference for utility classes.
- [Tailwind CSS documentation](https://tailwindcss.com/docs): the complete official reference.
- [Tailwind CSS GitHub repository](https://github.com/tailwindlabs/tailwindcss): source, examples, and the project that powers the utilities.
- [Pulled testimonials-concord project](testimonials-concord/index.html): the local HTML case study used in this manual.
- [Original repository on GitHub](https://github.com/BrianCyrus-Cypher/testimonials-concord): source project requested for comparison.

## 9. Final checklist

Before calling a project complete, confirm that the page has a semantic structure, a mobile-first layout, responsive breakpoints, readable utility class groups, real focus styles, accessible images, no horizontal overflow, and a successful production build. When a class is unfamiliar, search the cheat sheet by the CSS property you want to replace.
