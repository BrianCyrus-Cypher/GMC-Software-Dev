# Frontend Foundry roadmap

This is the recommended order. Each stage ends with something a person could use.

## Stage 1: The web canvas

Build a semantic meal planner with HTML only. Practice headings, landmarks, links, lists, forms, tables, media, and accessible labels.

**Ship:** a readable page that still works with CSS and JavaScript turned off.

## Stage 2: Visual systems

Add custom CSS. Create a small design system with color tokens, a spacing scale, type hierarchy, borders, states, and responsive layout rules.

**Ship:** the same planner at mobile, tablet, and desktop widths.

## Stage 3: Utility thinking

Rebuild one screen using Tailwind CSS. Translate decisions into utilities, compare the result with custom CSS, and decide which approach is clearer for the feature.

**Ship:** a responsive dashboard with a documented class strategy.

## Stage 4: Browser behavior

Use JavaScript for events, arrays, functions, DOM updates, form validation, and local storage. Keep the data separate from the rendering logic.

**Ship:** a planner where people can add, filter, complete, and persist meals.

## Stage 5: Product thinking

Interview the problem, define the smallest useful workflow, sketch states, write acceptance criteria, and test with another person.

**Ship:** the capstone described in `CAPSTONE.md`.

## Stage 6: React bridge

Migrate the same capstone without changing its product requirements. Identify repeated UI as components, pass data through props, move interactive values into state, and keep the browser behavior understandable.

**Ship:** a React version that is easier to extend, not merely different syntax.
