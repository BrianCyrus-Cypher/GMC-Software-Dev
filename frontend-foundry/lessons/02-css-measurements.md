# 02 / CSS measurements

## Measure the job

A card is not `400px` because that number looks nice. It is around `400px` because its content needs room to breathe and because several cards should fit in the available container.

Use this sequence:

1. Identify the content that must fit.
2. Estimate a comfortable width for one item.
3. Add gaps between items.
4. Add outer padding.
5. Test the result at mobile and desktop widths.

The calculator on the home page makes this explicit:

```text
content width + gaps + outer padding = starting width
```

## Useful CSS measurements

- Use `rem` for type and spacing that should scale with the document.
- Use `%`, `min()`, and `max-width` for fluid layouts.
- Use `ch` when readable line length matters.
- Use `px` for small borders and precise controls.
- Use grid or flexbox for relationships between items, not for decoration.

## Practice

Change the lesson grid from five columns at `xl` to four. Ask what the content needs, then adjust the cards rather than blindly changing every margin.
