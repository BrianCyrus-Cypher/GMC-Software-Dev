# React lesson map

## 01. Components and JSX

Read `App`, `PhaseContent`, and `BriefCard`. JSX lets markup and JavaScript data meet in one render description. Components give repeated UI a name and a boundary.

**Exercise:** create a `LessonLink` component from the repeated lesson button markup.

## 02. Props

`BriefCard` receives `number`, `title`, `label`, `body`, and `link`. Props are inputs; the child should not mutate them.

**Exercise:** add a `tone` prop and style one brief card differently.

## 03. State and events

`activeLesson`, `activePhase`, `filter`, and `checklist` are state because they change as a user interacts. Event handlers describe what happens next.

**Exercise:** add a “reset board” button that restores the initial checklist.

## 04. Lists and conditional UI

`map` renders lessons and checklist items. `filter` produces the visible subset. The empty state appears when no items remain.

**Exercise:** add a `loading` boolean and render a loading state for 700ms before the board appears.

## 05. Forms and effects

Next, build a controlled message composer with `value` and `onChange`. Then learn `useEffect` for synchronization, subscriptions, and persistence. Do not use effects for ordinary derived values.

**Exercise:** persist the selected phase and checklist to local storage, then restore them on reload.

## 06. Composition and architecture

Move data to `src/data`, visual units to `src/components`, and cross-cutting logic to hooks only when those boundaries clarify the work.

**Exercise:** split the app without changing its behavior. Explain every new file in the README.

## 07. Next steps

Add React Router for document routes, a form library for complex validation, tests for business rules, and a backend API. Keep the PRD and TRD current as the product grows.
