# 03 / JavaScript functions

## Start with familiar data

The function lab uses a grocery basket because the behavior is easy to verify:

- `filter` shows only groceries in a chosen category.
- `map` turns each grocery object into an HTML row.
- `reduce` adds prices into a total.

## Small examples

```js
const fresh = groceries.filter((grocery) => grocery.category === 'fresh');
const names = groceries.map((grocery) => grocery.name);
const total = groceries.reduce((sum, grocery) => sum + grocery.price, 0);
```

Each function has one job. That makes the result easier to test and reuse.

## Practice

1. Add a `quantity` property to each grocery.
2. Use `map` to show the quantity in each row.
3. Change `reduce` so the total includes quantity.
4. Add a `budget` filter that shows items under a chosen price.
5. Save a new basket with `localStorage` only after the basic behavior works.

## Checkpoint

Change one piece of data and confirm the interface updates without manually editing the HTML. That is the beginning of data-driven UI.
