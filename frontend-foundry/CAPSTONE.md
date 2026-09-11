# Capstone brief: The Everyday Operations Kit

Build a small web app that helps one real person manage a repeated weekly task. Choose one:

- a household pantry and expiry tracker
- a study queue with time estimates
- a local shop's order board
- a travel packing and budget planner
- a personal workout block planner

## Required product behavior

- Add, edit, complete, and remove an item.
- Filter items by a useful category or status.
- Show an empty state, a loading-like state, and an error state.
- Persist the working data in `localStorage`.
- Work with keyboard navigation and readable labels.
- Fit a narrow phone viewport without horizontal scrolling.
- Explain one design measurement decision in the README.

## Build constraints

Start with HTML and CSS. Add JavaScript only when the static interface is clear. Use Tailwind for one deliberate surface, not as a replacement for thinking. Keep the data in an array of objects and write small functions with names that describe their job.

## Definition of done

A person can understand the first action within ten seconds, complete the core workflow without instructions, refresh the page without losing their work, and recover from an invalid input. A screenshot is not the finish line; a useful interaction is.

## React migration brief

After the vanilla version is stable, migrate it in this order:

1. Convert repeated item markup into a component.
2. Pass item data as props.
3. Move the list into state.
4. Add event handlers for the same actions.
5. Extract reusable form and filter components.
6. Compare the vanilla and React versions for clarity, performance, and maintainability.
