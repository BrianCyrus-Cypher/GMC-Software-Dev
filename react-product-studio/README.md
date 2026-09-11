# React Product Studio

A build-first React curriculum that teaches the library through a real product: a WhatsApp AI agent command center. The interface is intentionally both the lesson and the example. Read the product documents, inspect the components, change state, and then extend the project.

## Run it

```bash
npm install
npm run dev
```

Open the local URL Vite prints in the terminal. Build for production with `npm run build`.

## What this teaches

- React entry points and component composition
- JSX expressions and conditional rendering
- Props through reusable cards and phase content
- `useState` for navigation, tabs, filters, checkboxes, and feedback
- Event handlers and controlled form controls
- Array rendering with `map`, filtering with `filter`, and stable keys
- UX states: active, complete, empty, feedback, and responsive navigation
- Accessibility basics: landmarks, labels, keyboard-friendly buttons, focusable controls, status announcements
- UI architecture: hierarchy, density, measurement, contrast, color roles, and responsive behavior
- Product planning through a PRD, TRD, and UX playbook

## Learning route

1. Read `docs/PRD.md`: understand the user and the boundary of the agent.
2. Read `docs/TRD.md`: trace the dependency chain from WhatsApp to production.
3. Open `src/main.jsx`: identify `App`, `PhaseContent`, and `BriefCard`.
4. Change the active phase and explain which state value caused the screen to change.
5. Add a sixth checklist item and a new filter group.
6. Read `docs/UX-PLAYBOOK.md` and audit the interface at a narrow viewport.
7. Move repeated data into a separate module, then split the large `App` component into smaller files.

## React progression

The project intentionally starts in one file so the learner can see the complete flow. The next refactor should separate it into `components/`, `data/`, and `hooks/` only when the boundaries are understood. Later stages can add React Router, a server API, forms, tests, and a real persistence layer.

## Design principles

The visual language uses a deep blue working surface, acid lime action states, coral emphasis, editorial type, and a responsive two-column rhythm. It is designed to feel like a product workshop rather than a generic dashboard. The UI favors visible system status and compact scan-friendly controls because an operations team needs confidence more than decoration.
