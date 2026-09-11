# Frontend Foundry

Frontend Foundry is the learning index for the entire `GMC SOFTWARE DEV` workspace. It turns finished projects into a searchable curriculum instead of replacing them with one artificial demo.

## Run the project

This is now a Vite project using the Tailwind v4 Vite plugin. From this directory run:

```bash
npm install
npm run dev
```

Use `npm run build` to create the production build. The project no longer depends on the Tailwind CDN.

## What is included

- A project library covering the recipe page, dessert shop, testimonials grid, social profile, React studio, and this learning site.
- Real images copied from the workspace into `public/reference-images` for the catalog cards.
- Search and language filters generated from one project registry in `app.js`.
- Completion tracking saved with `localStorage`, so the learner can return to the same progress.
- Language coverage for HTML, CSS, Tailwind CSS, JavaScript, React, responsive design, accessibility, and product thinking.
- Reference links to MDN, React, Tailwind, and the Flowbite cheat sheet.

## Suggested route

1. Open the project library and choose a project based on the language or concept you want to practice.
2. Open the original project folder from the card and read its README, HTML, CSS, and JavaScript comments.
3. Rebuild one surface yourself before copying improvements.
4. Mark the project complete only after testing its responsive and interactive states.
5. Add the next project to the registry so the library remains the source of truth.

## Add a new project

1. Copy a representative image into `public/reference-images/`.
2. Add one object to the `projects` array in `app.js` with `id`, `title`, `folder`, `language`, `level`, `image`, `summary`, `concepts`, and `link`.
3. Use a new stable `id`; it is the key used by progress tracking.
4. Describe what the project teaches, not only what it is called.
5. Run `npm run build` and check the card at mobile and desktop widths.

The language filters and total project count update automatically from the registry. This is intentionally data-driven so a new project does not require a new page layout.

## Tailwind references

- [Flowbite Tailwind CSS Cheat Sheet](https://flowbite.com/tools/tailwind-cheat-sheet/)
- [Official Tailwind documentation](https://tailwindcss.com/docs)
- [Tailwind source project](https://github.com/tailwindlabs/tailwindcss)

## Project rules

- Every new feature must solve a user problem, not merely demonstrate a syntax feature.
- Start with content and constraints before choosing dimensions.
- Use a small spacing scale consistently instead of guessing every margin.
- Test at a narrow mobile width and a wide desktop width after each meaningful change.
- Keep the interface useful with JavaScript disabled; enhancement comes after structure.

## Next phase: React

React should arrive after this vanilla project feels comfortable. The same capstone can then be migrated in stages: first components, then props, state, events, and finally a data layer. Do not replace the understanding of HTML, CSS, and browser JavaScript with a framework shortcut.
