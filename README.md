# Safari Horizon Tours - Multi-Page Website

A complete multi-page HTML-only website for Safari Horizon Tours, a fictional Kenyan safari company.

## Project Files

| File | Page | Description |
|------|------|-------------|
| `index.html` | Home | Hero section, highlights, destinations, testimonials |
| `about.html` | About Us | Company story, mission, values, team, stats table |
| `tours.html` | Tours | Comparison table, 4 tour packages with full itineraries |
| `gallery.html` | Gallery | 5 photo categories with 25+ images |
| `contact.html` | Contact | Full contact form, FAQs, emergency contacts |

## Features Used

### Semantic HTML Elements
- `<header>` - Site header on every page
- `<nav>` - Navigation menu
- `<main>` - Main content wrapper
- `<section>` - Content sections
- `<footer>` - Site footer on every page
- `<address>` - Contact address markup
- `<blockquote>` - Guest testimonials
- `<fieldset>` and `<legend>` - Form grouping

### Navigation
- 5 identical nav links on every page (Home, About Us, Tours, Gallery, Contact)
- Cross-page linking using `href="filename.html"`
- Internal anchor links using `href="section-id"` (e.g. tours page links to `#mara-safari`)
- Gallery section anchors for quick jumping between categories

### Forms (Contact Page)
- `<input type="text">` - Full name, country
- `<input type="email">` - Email address
- `<input type="tel">` - Phone number
- `<input type="number">` - Group size (with min/max)
- `<input type="date">` - Travel date picker
- `<input type="checkbox">` - Newsletter opt-in
- `<select>` with `<option>` - Tour interest, budget, accommodation, how they heard about us
- `<textarea>` - Special requirements, message
- `<button type="submit">` and `<button type="reset">`
- `required` attribute on mandatory fields
- `placeholder` attribute for hint text
- `fieldset` and `legend` for form sections

### Tables
- Tour comparison table on tours page (4 packages x 12 features)
- Company statistics table on about page (9 metrics)

### Lists
- Ordered lists `<ol>` for step-by-step itineraries
- Unordered lists `<ul>` for inclusions, exclusions, features, FAQs
- Booking process steps
- Social media links

### Images
- Real Unsplash image URLs throughout
- `alt` attributes on every image for accessibility
- `width` attributes for layout control

### Internal Anchors
- `#hero`, `#highlights`, `#popular-destinations`, `#testimonials` on home page
- `#mara-safari`, `#big-five`, `#amboseli-tour`, `#nakuru-tour`, `#grand-safari` on tours page
- `#wildlife`, `#landscapes`, `#camps`, `#experiences`, `#guest-photos` on gallery page

### Footer (Consistent on All Pages)
- Company name: Safari Horizon Tours
- Copyright: 2025
- Address: 14 Kenyatta Avenue, Suite 302, Nairobi 00100, Kenya
- Phone: +254 712 345 678
- Email: info@safarihorizontours.co.ke

## How to Run

1. Download or clone this folder
2. Open any `.html` file in your web browser
3. Use the navigation links to move between pages

```
# If using the command line:
start index.html        # Windows
open index.html         # Mac
xdg-open index.html     # Linux
```

## File Structure

```
SAFARI/
├── index.html          (Home page)
├── about.html          (About Us page)
├── tours.html          (Tours page with tables and itineraries)
├── gallery.html        (Photo gallery page)
├── contact.html        (Contact form page)
└── README.md           (This file)
```

## No External Dependencies

This project uses pure HTML only. No CSS, no JavaScript, no frameworks, no build tools. Open any file in any browser and it works.

## Browser Compatibility

Works in all modern browsers:
- Google Chrome
- Mozilla Firefox
- Microsoft Edge
- Safari
- Opera
