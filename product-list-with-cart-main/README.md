# Product List With Cart: Design-First Build Guide

This project recreates the supplied dessert shop reference at desktop and mobile sizes. The current checkpoint is intentionally design-only: the product cards and empty cart are static HTML, and the old `script.js` behavior layer has been removed so the visual system can be understood before interactivity is added.

## What The Reference Is Saying

The interface has three visual priorities:

1. **Browse first.** “Desserts” is the dominant heading and the product grid carries most of the page.
2. **Act at the image.** Every card puts its Add to Cart pill across the lower edge of the image, where the shopper is already looking.
3. **Keep the cart visible.** On desktop the cart is a white panel beside the grid. On mobile it moves below all products so the single-column browsing flow is not interrupted.

The desktop reference is approximately 1440px wide. The mobile reference is approximately 375px wide. Treat those as visual targets, not fixed sizes: the page should remain usable from 320px upward.

## Build Order

### 1. Inspect the supplied design system

`style-guide.md` gives the official Red Hat Text font, three weights, and the Rose/Red/Green palette. The `assets/images` folder contains desktop, tablet, mobile, and thumbnail exports. Use those assets instead of cropping one image with CSS; each export is composed for its target ratio.

### 2. Build semantic HTML before behavior

The page uses a `main` containing a product `section` and an `aside` for the cart. Each product is an `article` with:

- a `picture` element for responsive image selection;
- an image action region containing the Add to Cart button;
- category, product name, and price text.

This structure gives screen readers a meaningful reading order and gives CSS clear ownership boundaries. The cart is an `aside` because it supports, rather than replaces, the product content.

The current `index.html` includes static cards so CSS can be developed and previewed without JavaScript. Later, the data in `data.json` can generate the same card structure.

### 3. Define variables once

The `:root` variables in `style.css` are named by purpose rather than repeated hex values:

| Variable | Why it exists |
| --- | --- |
| `--red` | Primary action color, prices, selected borders, and the cart heading. |
| `--red-dark` | A darker hover/focus action state with enough contrast from the default button. |
| `--green` | The carbon-neutral delivery accent. It is intentionally used sparingly. |
| `--rose-50` | The page canvas and soft inset surfaces. It keeps the page warm without competing with food photography. |
| `--rose-100` | Subtle dividers and selected-area contrast. |
| `--rose-300` / `--rose-400` | Quiet borders for pills and remove controls. |
| `--rose-500` | Secondary category, helper, and metadata text. |
| `--rose-900` | Primary headings and product names. |

The reference does **not** need a gradient. Its hierarchy comes from food photography, a warm flat canvas, white cart surfaces, and one strong red action color. Adding a gradient would introduce a new visual layer that is absent from the design and reduce the quiet contrast around the cards.

### 4. Establish the page frame

`.page-shell` uses `width: min(100% - 2.5rem, 1216px)` to keep a 40px total mobile gutter while preventing the desktop layout from becoming too wide. `margin: 0 auto` centers that bounded frame. The vertical padding creates the generous breathing room visible around the desktop composition.

`.page-layout` starts as a one-column CSS Grid. At `960px`, it becomes two columns: a flexible product area and a cart column that never shrinks below 18rem. Grid is the right method here because the two regions are page-level tracks, not content that should wrap unpredictably.

### 5. Build the product grid

`.product-grid` is also CSS Grid. It changes from one column, to two columns at `600px`, to three columns at `960px`. `minmax(0, 1fr)` prevents long names from forcing a track wider than its share. The separate row and column gaps preserve the reference’s consistent rhythm.

The product image uses `aspect-ratio: 1 / 1`, `object-fit: cover`, and an 8px radius. `aspect-ratio` reserves the space before an image loads, while `object-fit` keeps every exported image visually consistent. The transparent 2px border reserves space for the later selected state, so adding a red border will not move neighboring cards.

### 6. Anchor the product action

`.product-image-wrap` is `position: relative`, creating a local positioning context. `.cart-actions` is absolutely positioned at the bottom center of that wrapper and translated by half its own width. This is why the pill can overlap the image edge without affecting the grid row height.

The Add to Cart control is white with a thin Rose border so it reads as a floating control over photography. Its large pill radius signals a compact action. The future quantity control reuses the same fixed height and radius, but switches to red to communicate the selected state.

### 7. Style readable card details

The category uses the muted Rose 500 color and a smaller size because it is supporting metadata. The product name uses weight 600 to create a clear second level. The price uses the red action color and weight 700 so it can be scanned quickly without becoming a second heading.

### 8. Style the empty cart first

The cart panel is white with a small radius and internal padding. The empty state uses Grid with `justify-items: center` so the illustration and helper text share a centered axis. The supplied empty-cart SVG is better than drawing a substitute because it matches the reference’s exact silhouette and color.

The populated cart, carbon note, confirmation button, and modal styles already exist as the next visual state in `style.css`; they are currently unused until the behavior layer is rebuilt.

### 9. Add responsive behavior

Use the mobile-first rules as the baseline, then add only the layout changes that the reference requires:

- below `600px`: one product column and a full-width cart below it;
- from `600px`: two product columns and a centered modal when it is reintroduced;
- from `960px`: three product columns, the side cart, and larger top padding.

Do not use viewport-scaled font sizes for the compact labels. Stable type sizes keep the card information readable and prevent the buttons from changing height between devices.

### 10. Add behavior after the design is stable

When the design checkpoint matches the reference, restore a behavior layer with this sequence:

1. Fetch and validate `data.json`.
2. Render the product cards from data while preserving the existing classes.
3. Store selected quantities in one cart state object or `Map`.
4. Re-render the product control and cart summary from that state.
5. Add, increment, decrement, remove, confirm, and start-new-order actions.
6. Manage focus and keyboard escape behavior for the modal.
7. Test empty, one-item, multi-item, removal, reset, and responsive states.

Keeping the CSS class contract stable means behavior can be added without redesigning the page.

## Design Checklist

- [ ] Page canvas is Rose 50, not white or dark gray.
- [ ] Desktop shows three product columns beside a white cart panel.
- [ ] Mobile shows one full-width product column and the cart after the products.
- [ ] Images use the supplied desktop/tablet/mobile sources.
- [ ] Add to Cart pills overlap the bottom edge of each image.
- [ ] Card labels, names, and prices have distinct visual hierarchy.
- [ ] Empty cart illustration and message are centered.
- [ ] Borders, focus states, and selected-state space do not shift layout.
- [ ] No gradient is added where the reference has a flat surface.

## Run The Design Checkpoint

Because `data.json` and image loading are local assets, use a local server rather than opening the file directly. From this folder, for example:

```text
py -m http.server 5500
```

Then open `http://localhost:5500`. Compare the page at roughly 375px and 1440px wide, and inspect an intermediate width around 768px to make sure the grid transition is graceful.

## Project Files

- `index.html` - static semantic design checkpoint;
- `style.css` - font loading, variables, layout, responsive rules, states, and future modal styles;
- `data.json` - product source for the later rendering phase;
- `assets/images` - supplied responsive product images and interface icons;
- `style-guide.md` - original challenge colors, font, and target widths.

# Frontend Mentor - Product list with cart

![Design preview for the Product list with cart coding challenge](./preview.jpg)

## Welcome! 👋

Thanks for checking out this front-end coding challenge.

[Frontend Mentor](https://www.frontendmentor.io) challenges help you improve your coding skills by building realistic projects.

**To do this challenge, you need a good understanding of HTML, CSS and JavaScript.**

## The challenge

Your challenge is to build out this product list project that includes a functional cart and get it looking as close to the design as possible.

You can use any tools you like to help you complete the challenge. So, if you have something you'd like to practice, feel free to give it a go.

We provide the data for the products in a local `data.json` file. So you can use that to populate the UI dynamically if you choose.

Your users should be able to: 

- Add items to the cart and remove them
- Increase/decrease the number of items in the cart
- See an order confirmation modal when they click "Confirm Order"
- Reset their selections when they click "Start New Order"
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Want some support on the challenge? 

[Join our community](https://www.frontendmentor.io/community) and ask questions in the **#help** channel.

## Where to find everything

Your task is to build out the project to the designs inside the `/design` folder. You will find both a mobile and a desktop version of the design. 

The designs are in JPG static format. Using JPGs will mean that you'll need to use your best judgment for styles such as `font-size`, `padding` and `margin`. 

If you would like the Figma design file to gain experience using professional tools and build more accurate projects faster, you can [subscribe as a PRO member](https://www.frontendmentor.io/pro).

All the required assets for this project are in the `/assets` folder. The images are already exported for the correct screen size and optimized.

We also include variable and static font files for the required fonts for this project. You can choose to either link to Google Fonts or use the local font files to host the fonts yourself. Note that we've removed the static font files for the font weights that aren't needed for this project.

There is also a `style-guide.md` file containing the information you'll need, such as color palette and fonts.

## Using AI coding assistants

We've included two files to help you if you're using AI coding assistants (like Claude, GitHub Copilot, Cursor, etc.) while working on this challenge:

- `AGENTS.md` - Contains detailed instructions for AI assistants on how to help you with this challenge. It's tailored to this challenge's difficulty level, so the AI will provide guidance appropriate to your learning stage—offering more support for beginner challenges and encouraging more independence on advanced ones.
- `CLAUDE.md` - A pointer file that directs Claude-based tools to the AGENTS.md instructions.

**How to use them:** You don't need to do anything! These files are automatically detected by most AI coding tools. The AI will read them and adjust its behavior to be a better learning partner—guiding you toward solutions rather than just giving you the answers.

**Note:** These files are designed to help you *learn*, not to do the work for you. The AI is instructed to ask questions, give hints, and explain concepts rather than writing complete solutions.

## Building your project

Feel free to use any workflow that you feel comfortable with. Below is a suggested process, but do not feel like you need to follow these steps:

1. Initialize your project as a public repository on [GitHub](https://github.com/). Creating a repo will make it easier to share your code with the community if you need help. If you're not sure how to do this, [have a read-through of this Try Git resource](https://try.github.io/).
2. Configure your repository to publish your code to a web address. This will also be useful if you need some help during a challenge as you can share the URL for your project with your repo URL. There are a number of ways to do this, and we provide some recommendations below.
3. Look through the designs to start planning out how you'll tackle the project. This step is crucial to help you think ahead for CSS classes to create reusable styles.
4. Before adding any styles, structure your content with HTML. Writing your HTML first can help focus your attention on creating well-structured content.
5. Write out the base styles for your project, including general content styles, such as `font-family` and `font-size`.
6. Start adding styles to the top of the page and work down. Only move on to the next section once you're happy you've completed the area you're working on.

## Deploying your project

As mentioned above, there are many ways to host your project for free. Our recommended hosts are:

- [GitHub Pages](https://pages.github.com/)
- [Vercel](https://vercel.com/)
- [Netlify](https://www.netlify.com/)

You can host your site using one of these solutions or any of our other trusted providers. [Read more about our recommended and trusted hosts](https://www.frontendmentor.io/guides/hosting-your-solution).

## Create a custom `README.md`

We strongly recommend overwriting this `README.md` with a custom one. We've provided a template inside the [`README-template.md`](./README-template.md) file in this starter code.

The template provides a guide for what to add. A custom `README` will help you explain your project and reflect on your learnings. Please feel free to edit our template as much as you like.

Once you've added your information to the template, delete this file and rename the `README-template.md` file to `README.md`. That will make it show up as your repository's README file.

## Submitting your solution

Submit your solution on the platform for the rest of the community to see. Follow our ["Complete guide to submitting solutions"](https://www.frontendmentor.io/guides/how-to-submit-solutions) for tips on how to do this.

Remember, if you're looking for feedback on your solution, be sure to ask questions when submitting it. The more specific and detailed you are with your questions, the higher the chance you'll get valuable feedback from the community.

## Sharing your solution

There are multiple places you can share your solution:

1. Share your solution page in the **#finished-projects** channel of our [community](https://www.frontendmentor.io/community). 
2. Share on [X (formerly Twitter)](https://x.com/frontendmentor) and mention **@frontendmentor**, including the repo and live URLs in your post. We'd love to take a look at what you've built and help share it around.
3. Share your solution on [LinkedIn](https://www.linkedin.com/company/frontend-mentor/).
4. Blog about your experience building your project. Writing about your workflow, technical choices, and talking through your code is a brilliant way to reinforce what you've learned. Great platforms to write on are [dev.to](https://dev.to/), [Hashnode](https://hashnode.com/), and [CodeNewbie](https://community.codenewbie.org/).

We provide templates to help you share your solution once you've submitted it on the platform. Please do edit them and include specific questions when you're looking for feedback. 

The more specific you are with your questions the more likely it is that another member of the community will give you feedback.

## Got feedback for us?

We love receiving feedback! We're always looking to improve our challenges and our platform. So if you have anything you'd like to mention, please email hi[at]frontendmentor[dot]io.

This challenge is completely free. Please share it with anyone who will find it useful for practice.

**Have fun building!** 🚀
