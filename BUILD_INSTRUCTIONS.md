# How to Build the Safari Horizon Tours Website - Step by Step

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Building index.html (Home Page)](#2-building-indexhtml-home-page)
3. [Building about.html (About Page)](#3-building-abouthtml-about-page)
4. [Building tours.html (Tours Page)](#4-building-tourshtml-tours-page)
5. [Building gallery.html (Gallery Page)](#5-building-galleryhtml-gallery-page)
6. [Building contact.html (Contact Page)](#6-building-contacthtml-contact-page)
7. [HTML Concepts Reference](#7-html-concepts-reference)

---

## 1. Project Overview

### What You Are Building
A 5-page website for a fictional Kenyan safari company called Safari Horizon Tours. Every page shares the same header navigation and footer. The site uses only HTML with no CSS or JavaScript.

### Page List

| File | Purpose |
|------|---------|
| `index.html` | Home page - hero, highlights, destinations, testimonials |
| `about.html` | About page - story, mission, values, team, stats |
| `tours.html` | Tours page - comparison table, 4 tour packages with itineraries |
| `gallery.html` | Gallery page - categorized photo gallery |
| `contact.html` | Contact page - detailed form, FAQs, social links |

### Key Rule: Shared Elements
Every page must have the exact same `<header>` and `<footer>`. When you build each page, copy these from the first page you create. This keeps the site consistent.

---

## 2. Building index.html (Home Page)

### Step 1: Document Setup

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Safari Horizon Tours - Home</title>
</head>
<body>
```

| Line | Code | What It Does |
|------|------|--------------|
| 1 | `<!DOCTYPE html>` | Declares this is an HTML5 document. Must be the first line. |
| 2 | `<html lang="en">` | Root element. `lang="en"` tells browsers the page is in English. |
| 3 | `<head>` | Opens the head section for metadata (not visible on page). |
| 4 | `<meta charset="UTF-8">` | Sets character encoding to support all characters including accents. |
| 5 | `<meta name="viewport" ...>` | Makes the page responsive on mobile devices. |
| 6 | `<title>` | Text shown in the browser tab. |
| 7 | `</head>` | Closes the head section. |
| 8 | `<body>` | Opens the body - everything visible goes here. |

### Step 2: The Header (Shared Across All Pages)

```html
    <header>
        <h1>Safari Horizon Tours</h1>
        <p>Experience the Wild Beauty of Kenya</p>
        <nav>
            <a href="index.html">Home</a>
            <a href="about.html">About Us</a>
            <a href="tours.html">Tours</a>
            <a href="gallery.html">Gallery</a>
            <a href="contact.html">Contact</a>
        </nav>
    </header>
```

| Element | What It Does |
|---------|--------------|
| `<header>` | Semantic element - marks the top section of the page. |
| `<h1>` | Main heading. One per page for SEO. Shows the company name. |
| `<p>` | Tagline beneath the company name. |
| `<nav>` | Semantic element - tells browsers this is navigation. |
| `<a href="index.html">` | Link to the home page. Since you are ON this page, it reloads it. |
| `<a href="about.html">` | Link to the about page. The `href` points to a different file. |
| `<a href="tours.html">` | Link to the tours page. |
| `<a href="gallery.html">` | Link to the gallery page. |
| `<a href="contact.html">` | Link to the contact page. |

#### How Cross-Page Links Work
`<a href="about.html">` tells the browser to load the file `about.html` from the same folder. All 5 HTML files must be in the same directory for these links to work.

**IMPORTANT:** This exact header block will be copied into all 5 pages.

### Step 3: The Main Content Wrapper

```html
    <main>
```

The `<main>` element wraps all the unique content of this page. It is a semantic element that tells screen readers "this is the main content area." Every page has its own `<main>` with different content inside.

### Step 4: Hero Section

```html
        <section id="hero">
            <img src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1200" alt="African savanna at sunset with acacia trees" width="1000">
            <h2>Your Adventure Begins Here</h2>
            <p>Safari Horizon Tours has been guiding travelers through Kenya's most breathtaking landscapes since 2010.</p>
            <p><a href="tours.html">View Our Tours</a></p>
        </section>
```

| Element | What It Does |
|---------|--------------|
| `<section id="hero">` | Groups the hero content. `id="hero"` lets other pages or anchors link to it. |
| `<img src="..." alt="..." width="1000">` | Displays a large hero image. `src` is the image URL. `alt` describes the image. `width` sets display size. |
| `<h2>` | Section heading - second-level heading below the page's `<h1>`. |
| `<p>` | Introductory paragraph. |
| `<a href="tours.html">` | Call-to-action link that takes the user to the tours page. |

#### Image URLs
The `src` attributes use Unsplash URLs. These are real, working image URLs hosted online. You can replace them with any image URL. The `?w=1200` parameter tells Unsplash to serve a 1200px wide version.

### Step 5: Why Choose Us Section

```html
        <section id="highlights">
            <h2>Why Choose Safari Horizon Tours?</h2>

            <div>
                <h3>Expert Guides</h3>
                <p>Our guides are born and raised in the Kenyan wilderness.</p>
            </div>

            <div>
                <h3>Small Group Sizes</h3>
                <p>We limit our safari groups to a maximum of 8 guests.</p>
            </div>

            <div>
                <h3>Luxury Tented Camps</h3>
                <p>Sleep under the stars in our handpicked luxury tented camps.</p>
            </div>

            <div>
                <h3>Conservation Commitment</h3>
                <p>10% of every booking goes directly to Kenyan wildlife conservation.</p>
            </div>
        </section>
```

| Element | What It Does |
|---------|--------------|
| `<section id="highlights">` | Section with an id for potential internal linking. |
| `<h2>` | Section title. |
| `<div>` | Generic container - groups one highlight's heading and paragraph together. |
| `<h3>` | Sub-heading for each highlight. Below `<h2>` in hierarchy. |

#### Heading Hierarchy
```
<h1> = Page title (company name in header)
  <h2> = Section titles (Why Choose Us, Popular Destinations, etc.)
    <h3> = Sub-items within sections (Expert Guides, Small Groups, etc.)
```

### Step 6: Popular Destinations Section

```html
        <section id="popular-destinations">
            <h2>Popular Destinations</h2>

            <div>
                <img src="https://images.unsplash.com/photo-1589802829985-817e51171b92?w=400" alt="Wildebeest crossing the Mara River" width="300">
                <h3>Maasai Mara National Reserve</h3>
                <p>Home to the Great Wildebeest Migration and the Big Five.</p>
                <p><a href="tours.html#mara-safari">View Mara Tours</a></p>
            </div>
```

| Element | What It Does |
|---------|--------------|
| `<img>` | Destination photo. `width="300"` makes it smaller than the hero image. |
| `<h3>` | Destination name. |
| `<p>` | Brief description. |
| `<a href="tours.html#mara-safari">` | **Cross-page anchor link** - loads `tours.html` AND scrolls to the element with `id="mara-safari"`. |

#### How Cross-Page Anchors Work
`href="tours.html#mara-safari"` does two things:
1. `tours.html` - navigates to the tours page
2. `#mara-safari` - scrolls to the element with `id="mara-safari"` on that page

This is how you link from one page to a specific section on another page.

### Step 7: Testimonials Section

```html
        <section id="testimonials">
            <h2>What Our Guests Say</h2>

            <div>
                <blockquote>
                    <p>"The safari of a lifetime! Our guide Joseph spotted a leopard within the first hour."</p>
                </blockquote>
                <p><strong>Sarah &amp; James Mitchell</strong> - London, United Kingdom</p>
                <p>Maasai Mara 5-Day Safari - March 2025</p>
            </div>
        </section>
```

| Element | What It Does |
|---------|--------------|
| `<blockquote>` | Semantic element for quoted text. Tells browsers this is a quotation. |
| `<strong>` | Makes text bold. Used for the guest's name to make it stand out. |
| `&amp;` | HTML entity for the `&` character. Required because `&` is a special character in HTML. |

#### HTML Entities
| Entity | Displays As | Why Use It |
|--------|------------|------------|
| `&amp;` | & | `&` is reserved for HTML syntax |
| `&lt;` | < | `<` starts HTML tags |
| `&gt;` | > | `>` ends HTML tags |
| `&quot;` | " | Used inside attributes |
| `&#39;` | ' | Apostrophe |

### Step 8: Call to Action Section

```html
        <section id="cta">
            <h2>Ready to Start Your Adventure?</h2>
            <p>Browse our curated tour packages or contact us for a custom itinerary.</p>
            <p><a href="tours.html">Explore Tours</a> | <a href="contact.html">Get in Touch</a></p>
        </section>
```

The `|` is just a text separator between the two links. The `<p>` wraps them on one line.

### Step 9: Close Main and Add Footer

```html
    </main>

    <footer>
        <h3>Safari Horizon Tours</h3>
        <p>&copy; 2025 Safari Horizon Tours. All Rights Reserved.</p>
        <p>14 Kenyatta Avenue, Suite 302, Nairobi 00100, Kenya</p>
        <p>Phone: +254 712 345 678</p>
        <p>Email: info@safarihorizontours.co.ke</p>
    </footer>

</body>
</html>
```

| Element | What It Does |
|---------|--------------|
| `</main>` | Closes the main content area. |
| `<footer>` | Semantic element for the bottom section of the page. |
| `<h3>` | Footer heading (company name). Uses `<h3>` not `<h1>` because it's not the page title. |
| `&copy;` | HTML entity that displays the copyright symbol (©). |
| `<p>` | Each piece of footer info on its own line. |
| `</footer>` | Closes the footer. |
| `</body>` | Closes the body. |
| `</html>` | Closes the HTML document. |

---

## 3. Building about.html (About Page)

### Step 1: Document Setup and Header

Copy the exact same document setup and header from `index.html`. Only change the `<title>`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>About Us - Safari Horizon Tours</title>
</head>
<body>

    <header>
        <h1>Safari Horizon Tours</h1>
        <p>Experience the Wild Beauty of Kenya</p>
        <nav>
            <a href="index.html">Home</a>
            <a href="about.html">About Us</a>
            <a href="tours.html">Tours</a>
            <a href="gallery.html">Gallery</a>
            <a href="contact.html">Contact</a>
        </nav>
    </header>
```

**Key Point:** The header is IDENTICAL on every page. Only the `<title>` in the `<head>` changes.

### Step 2: About Hero Section

```html
    <main>

        <section id="about-hero">
            <img src="https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1200" alt="Safari vehicle on the Kenyan savanna" width="1000">
            <h2>About Safari Horizon Tours</h2>
            <p>From a single Land Rover and a passion for wildlife to one of Kenya's most trusted safari operators.</p>
        </section>
```

Same pattern as the home page hero: image + heading + paragraph inside a `<section>`.

### Step 3: Our Story Section

```html
        <section id="our-story">
            <h2>Our Story</h2>
            <img src="https://images.unsplash.com/photo-1494783367193-149034c05e8f?w=600" alt="Kenyan landscape at golden hour" width="500">
            <p>Safari Horizon Tours was founded in 2010 by Daniel Kipchoge...</p>
            <p>Starting with just one vehicle...</p>
            <p>Despite our growth, we remain a family-owned business...</p>
        </section>
```

| Element | What It Does |
|---------|--------------|
| `<img>` | Image placed AFTER the heading (unlike the hero where it comes first). This is intentional - different sections can have different layouts. |
| Multiple `<p>` tags | Each paragraph of the story is separated. This creates natural spacing between paragraphs. |

### Step 4: Mission Section

```html
        <section id="mission">
            <h2>Our Mission</h2>
            <p>To provide transformative safari experiences that connect travelers with Kenya's extraordinary wildlife.</p>
        </section>
```

Simple section with just a heading and one paragraph. Not every section needs images or complex structure.

### Step 5: Values Section

```html
        <section id="values">
            <h2>Our Core Values</h2>

            <div>
                <h3>Wildlife First</h3>
                <p>Every decision we make prioritizes the well-being of animals.</p>
            </div>

            <div>
                <h3>Community Empowerment</h3>
                <p>We employ local Maasai, Samburu, and Kikuyu communities.</p>
            </div>

            <div>
                <h3>Authentic Experiences</h3>
                <p>No staged interactions or tourist traps.</p>
            </div>

            <div>
                <h3>Safety Excellence</h3>
                <p>All our vehicles are equipped with first aid kits and satellite phones.</p>
            </div>
        </section>
```

Same pattern as the highlights section on the home page: `<div>` wrappers with `<h3>` and `<p>` inside.

### Step 6: Team Section

```html
        <section id="team">
            <h2>Meet Our Team</h2>

            <div>
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300" alt="Portrait of Daniel Kipchoge" width="250">
                <h3>Daniel Kipchoge - Founder &amp; CEO</h3>
                <p>Former Kenya Wildlife Service ranger with 15 years of field experience.</p>
            </div>
```

| Element | What It Does |
|---------|--------------|
| `<img>` | Team member photo. Smaller width (250) for portrait shots. |
| `<h3>` | Name and title combined in one heading. |
| `&amp;` | HTML entity for the `&` in "Founder & CEO". |

### Step 7: Stats Table

```html
        <section id="stats">
            <h2>Safari Horizon by the Numbers</h2>

            <table>
                <thead>
                    <tr>
                        <th>Metric</th>
                        <th>Number</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Years in Operation</td>
                        <td>15 (since 2010)</td>
                    </tr>
                    <tr>
                        <td>Total Guests Guided</td>
                        <td>12,400+</td>
                    </tr>
```

#### Table Structure Explained

| Element | What It Does |
|---------|--------------|
| `<table>` | Creates a table. |
| `<thead>` | Table head - wraps the header row. Semantic grouping. |
| `<tbody>` | Table body - wraps all data rows. Semantic grouping. |
| `<tr>` | Table row. Each `<tr>` is one horizontal row. |
| `<th>` | Table header cell. Bold and centered by default. Used in the header row. |
| `<td>` | Table data cell. Normal text. Used in body rows. |

#### How Tables Work Visually
```
<table>
  <thead>
    <tr>           <- Header row
      <th>A</th>   <- Header cell 1
      <th>B</th>   <- Header cell 2
    </tr>
  </thead>
  <tbody>
    <tr>           <- Data row 1
      <td>1</td>   <- Data cell 1
      <td>2</td>   <- Data cell 2
    </tr>
    <tr>           <- Data row 2
      <td>3</td>   <- Data cell 1
      <td>4</td>   <- Data cell 2
    </tr>
  </tbody>
</table>
```

This creates:
```
| A   | B   |
|-----|-----|
| 1   | 2   |
| 3   | 4   |
```

### Step 8: Certifications List

```html
        <section id="certifications">
            <h2>Certifications &amp; Partnerships</h2>
            <ul>
                <li>Kenya Professional Safari Guides Association (KPSGA) - Licensed Operator</li>
                <li>Kenya Tourism Board - Registered Tour Operator</li>
                <li>African Wildlife Foundation - Conservation Partner</li>
                <li>Maasai Mara Wildlife Conservancies Association - Member</li>
                <li>TripAdvisor - Certificate of Excellence (2019-2025)</li>
                <li>National Geographic - Recommended Tour Operator</li>
            </ul>
        </section>
```

| Element | What It Does |
|---------|--------------|
| `<ul>` | Unordered list - displays items with bullet points (dots). |
| `<li>` | List item - each item in the list. |

#### Ordered vs Unordered Lists
| Tag | Display | Use When |
|-----|---------|----------|
| `<ul>` | Bullet points (dots) | Order does not matter (features, items) |
| `<ol>` | Numbers (1, 2, 3) | Order matters (steps, ranks, itineraries) |

### Step 9: CTA and Footer

```html
        <section id="about-cta">
            <h2>Experience the Difference</h2>
            <p>Ready to see Kenya through the eyes of people who truly know and love this land?</p>
            <p><a href="tours.html">Browse Our Tours</a> | <a href="contact.html">Contact Us Today</a></p>
        </section>

    </main>

    <footer>
        <h3>Safari Horizon Tours</h3>
        <p>&copy; 2025 Safari Horizon Tours. All Rights Reserved.</p>
        <p>14 Kenyatta Avenue, Suite 302, Nairobi 00100, Kenya</p>
        <p>Phone: +254 712 345 678</p>
        <p>Email: info@safarihorizontours.co.ke</p>
    </footer>

</body>
</html>
```

Footer is identical to `index.html`. Every page ends the same way.

---

## 4. Building tours.html (Tours Page)

### Step 1: Setup and Header

Same as before - copy the header, change the title:

```html
    <title>Tours - Safari Horizon Tours</title>
```

### Step 2: Tour Comparison Table

This is the most complex table in the project:

```html
        <section id="comparison">
            <h2>Tour Package Comparison</h2>

            <table>
                <thead>
                    <tr>
                        <th>Feature</th>
                        <th>Mara Classic (3 Days)</th>
                        <th>Big Five Expedition (5 Days)</th>
                        <th>Grand Kenya Safari (7 Days)</th>
                        <th>Luxury Flying Safari (4 Days)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>Price Per Person</strong></td>
                        <td>$1,200</td>
                        <td>$2,450</td>
                        <td>$3,800</td>
                        <td>$4,200</td>
                    </tr>
                    <tr>
                        <td><strong>Duration</strong></td>
                        <td>3 Days / 2 Nights</td>
                        <td>5 Days / 4 Nights</td>
                        <td>7 Days / 6 Nights</td>
                        <td>4 Days / 3 Nights</td>
                    </tr>
```

#### Table Structure
- **5 columns**: Feature column + 4 tour packages
- **12 rows**: One row per feature (price, duration, parks, accommodation, etc.)
- **`<th>`** in the header row makes the tour names bold
- **`<td><strong>`** in the first column makes feature names bold within normal cells

#### Why `<strong>` Inside `<td>`?
`<th>` only works in `<thead>`. In the `<tbody>`, if you want bold text, you must use `<strong>` or `<b>` inside the `<td>`.

### Step 3: Individual Tour Package

Each tour follows this pattern:

```html
        <section id="mara-safari">
            <h2>Mara Classic Safari - 3 Days</h2>
            <img src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=600" alt="Maasai Mara savanna landscape" width="500">
            <p><strong>Price:</strong> $1,200 per person | <strong>Duration:</strong> 3 Days / 2 Nights | <strong>Destination:</strong> Maasai Mara</p>
            <p>Perfect for first-time safari-goers or those with limited time.</p>

            <h3>Itinerary</h3>
            <ol>
                <li><strong>Day 1 - Nairobi to Maasai Mara:</strong> Depart Nairobi at 7:00 AM...</li>
                <li><strong>Day 2 - Full Day in the Mara:</strong> Early morning game drive...</li>
                <li><strong>Day 3 - Final Game Drive &amp; Return:</strong> Dawn game drive...</li>
            </ol>

            <h3>What's Included</h3>
            <ul>
                <li>2 nights luxury tented camp accommodation</li>
                <li>All meals (breakfast, lunch, dinner)</li>
                <li>4 game drives in private 4x4 Land Cruiser</li>
                <li>Maasai Mara Conservancy entry fees</li>
                <li>Professional KPSGA-certified guide</li>
                <li>Round-trip transport from Nairobi</li>
                <li>Bottled water during game drives</li>
            </ul>

            <h3>What's Not Included</h3>
            <ul>
                <li>International flights</li>
                <li>Travel insurance</li>
                <li>Personal expenses and tips</li>
                <li>Hot air balloon ride (available as add-on for $450)</li>
                <li>Visa fees</li>
            </ul>
        </section>
```

| Element | What It Does |
|---------|--------------|
| `<section id="mara-safari">` | The `id` allows cross-page links like `tours.html#mara-safari` from other pages. |
| `<strong>` in `<p>` | Bold labels like **Price:** and **Duration:** within a paragraph. |
| `\|` character | Text separator between info items on the same line. |
| `<ol>` | Ordered list for the itinerary - numbers show the day order (1, 2, 3). |
| `<li>` items in itinerary | Each day is one `<li>` with a bold day title and description. |
| `<ul>` for inclusions | Unordered list - bullet points for included items. |
| `<ul>` for exclusions | Same format for items not included. |

#### Ordered List for Itineraries
```html
<ol>
    <li><strong>Day 1 - Title:</strong> Description...</li>
    <li><strong>Day 2 - Title:</strong> Description...</li>
    <li><strong>Day 3 - Title:</strong> Description...</li>
</ol>
```

This displays as:
```
1. Day 1 - Title: Description...
2. Day 2 - Title: Description...
3. Day 3 - Title: Description...
```

Numbers are automatic - you do not type them.

### Step 4: Custom Tour Section

```html
        <section id="custom-tour">
            <h2>Custom Safari Itineraries</h2>
            <p>Don't see exactly what you're looking for?</p>

            <h3>Popular Custom Options</h3>
            <ul>
                <li><strong>Honeymoon Safaris:</strong> Romantic bush dinners, private guides...</li>
                <li><strong>Family Safaris:</strong> Kid-friendly guides, shorter game drives...</li>
                <li><strong>Photography Safaris:</strong> Specialized vehicles with beanbag mounts...</li>
                <li><strong>Walking Safaris:</strong> Multi-day trekking safaris...</li>
                <li><strong>Combination Tours:</strong> Pair your Kenya safari with a beach extension...</li>
            </ul>

            <p>To discuss a custom itinerary, <a href="contact.html">contact our team</a></p>
        </section>
```

Bold category names inside `<li>` items using `<strong>`.

### Step 5: Booking Information Section

```html
        <section id="booking-info">
            <h2>Booking Information</h2>

            <h3>How to Book</h3>
            <ol>
                <li>Choose your preferred tour package</li>
                <li>Contact us via phone, email, or the contact form</li>
                <li>Receive a detailed itinerary and quote within 24 hours</li>
                <li>Confirm your booking with a 30% deposit</li>
                <li>Receive your pre-departure pack</li>
                <li>Arrive in Kenya and enjoy your safari!</li>
            </ol>

            <h3>Payment Terms</h3>
            <ul>
                <li>30% deposit required to confirm booking</li>
                <li>Remaining balance due 45 days before tour start date</li>
                <li>Accept: Bank transfer, credit card (Visa/Mastercard), PayPal</li>
                <li>All prices in USD</li>
            </ul>

            <h3>Cancellation Policy</h3>
            <ul>
                <li>60+ days before departure: Full refund minus $100 admin fee</li>
                <li>30-59 days: 50% refund</li>
                <li>15-29 days: 25% refund</li>
                <li>Less than 15 days: No refund</li>
            </ul>
        </section>
```

Uses both `<ol>` (for sequential booking steps) and `<ul>` (for terms and policies).

---

## 5. Building gallery.html (Gallery Page)

### Step 1: Setup and Header

Same header, title changes to:

```html
    <title>Gallery - Safari Horizon Tours</title>
```

### Step 2: Gallery Sections

The gallery is organized into 5 categories, each following the same pattern:

```html
        <section id="wildlife">
            <h2><a href="#wildlife">Wildlife</a></h2>

            <div>
                <img src="https://images.unsplash.com/photo-1535338454528-1b40281e2266?w=500" alt="Male lion resting on the savanna grass" width="400">
                <p><strong>Mara Lion Pride</strong> - A dominant male lion resting in the golden grass.</p>
            </div>

            <div>
                <img src="..." alt="..." width="400">
                <p><strong>Photo Title</strong> - Photo description.</p>
            </div>
```

| Element | What It Does |
|---------|--------------|
| `<section id="wildlife">` | Each category gets its own section with a unique id. |
| `<h2><a href="#wildlife">` | The heading is wrapped in an anchor link. Clicking it jumps to this section. This is an **internal anchor** - it links to itself for navigation purposes. |
| `<div>` | Each photo and its caption are grouped together. |
| `<img>` | Gallery photo. All use `width="400"` for consistent sizing. |
| `<p><strong>Title</strong> - Description</p>` | Caption with bold title and regular description. |

#### Internal Anchors Explained
```html
<h2><a href="#wildlife">Wildlife</a></h2>
```

The `#wildlife` in the href points to `id="wildlife"` on the SAME page. When clicked, the browser scrolls down to that section. This is useful for long pages with multiple sections.

### Step 3: Repeat for All Categories

Each section follows the same pattern. The 5 categories are:

1. `id="wildlife"` - 8 animal photos
2. `id="landscapes"` - 6 landscape photos
3. `id="camps"` - 4 accommodation photos
4. `id="experiences"` - 4 activity photos
5. `id="guest-photos"` - 3 guest photos with quotes

### Step 4: Guest Photos Section

```html
        <section id="guest-photos">
            <h2><a href="#guest-photos">Guest Photos</a></h2>
            <p>Want to be featured? Tag your photos with #SafariHorizonTours on Instagram.</p>

            <div>
                <img src="..." alt="..." width="400">
                <p><strong>Photo by Sarah Mitchell</strong> - "Our guide Joseph got us the most incredible lion encounter."</p>
            </div>
```

Guest photos include the photographer's name and their quote in the caption.

---

## 6. Building contact.html (Contact Page)

### Step 1: Setup and Header

Same header, title changes to:

```html
    <title>Contact Us - Safari Horizon Tours</title>
```

### Step 2: Contact Details with Address Element

```html
        <section id="contact-details">
            <h2>Our Office</h2>
            <img src="https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=600" alt="Nairobi city skyline" width="500">

            <address>
                <p><strong>Safari Horizon Tours Ltd.</strong></p>
                <p>14 Kenyatta Avenue, Suite 302</p>
                <p>Nairobi 00100, Kenya</p>
            </address>

            <p><strong>Phone:</strong> +254 712 345 678</p>
            <p><strong>WhatsApp:</strong> +254 723 456 789</p>
            <p><strong>Email:</strong> info@safarihorizontours.co.ke</p>
            <p><strong>Office Hours:</strong> Monday - Friday 8:00 AM - 6:00 PM (EAT)</p>
        </section>
```

| Element | What It Does |
|---------|--------------|
| `<address>` | Semantic element specifically for contact information. Screen readers announce it as address content. Search engines use it to identify contact details. |

### Step 3: The Contact Form

This is the most complex form in the project:

```html
        <section id="contact-form">
            <h2>Send Us a Message</h2>

            <form action="#" method="post">
```

| Element | What It Does |
|---------|--------------|
| `<form>` | Container for all form inputs. |
| `action="#"` | Where to send the form data when submitted. `#` means current page (no server in this project). In a real site, this would be a server URL. |
| `method="post"` | How to send the data. `post` sends it in the request body (hidden). `get` puts it in the URL (visible). |

### Step 4: Fieldset - Personal Information

```html
                <fieldset>
                    <legend>Personal Information</legend>

                    <label for="fullname">Full Name *</label>
                    <input type="text" id="fullname" name="fullname" placeholder="e.g. John Smith" required>

                    <label for="email">Email Address *</label>
                    <input type="email" id="email" name="email" placeholder="e.g. john@example.com" required>

                    <label for="phone">Phone Number</label>
                    <input type="tel" id="phone" name="phone" placeholder="e.g. +44 7700 900000">

                    <label for="country">Country of Residence *</label>
                    <input type="text" id="country" name="country" placeholder="e.g. United Kingdom" required>
                </fieldset>
```

| Element | What It Does |
|---------|--------------|
| `<fieldset>` | Groups related form inputs together visually. Creates a box around them in the browser. |
| `<legend>` | Title for the fieldset. Appears as a caption inside the fieldset border. |
| `<label for="fullname">` | Label text attached to the input. The `for` attribute matches the input's `id`. Clicking the label focuses the input. Screen readers read the label when the input is selected. |
| `<input type="text">` | Single-line text input. Accepts any characters. |
| `<input type="email">` | Email input. Browser validates that the value contains @ and a domain. On mobile, shows the email keyboard with @ shortcut. |
| `<input type="tel">` | Phone input. On mobile, shows the numeric phone keypad. |
| `placeholder="e.g. John Smith"` | Hint text inside the input that disappears when the user types. |
| `required` | Browser blocks form submission if this field is empty. Shows a validation popup. |

#### Label-Input Connection
```html
<label for="fullname">Full Name *</label>
<input type="text" id="fullname" name="fullname">
```

Three things must match:
1. `for="fullname"` on the label
2. `id="fullname"` on the input
3. `name="fullname"` sends the data to the server

### Step 5: Fieldset - Safari Details

```html
                <fieldset>
                    <legend>Safari Details</legend>

                    <label for="tour-interest">Tour Package Interest</label>
                    <select id="tour-interest" name="tour-interest">
                        <option value="">-- Select a Tour --</option>
                        <option value="mara-classic">Mara Classic Safari (3 Days) - $1,200</option>
                        <option value="big-five">Big Five Expedition (5 Days) - $2,450</option>
                        <option value="grand-kenya">Grand Kenya Safari (7 Days) - $3,800</option>
                        <option value="luxury-flying">Luxury Flying Safari (4 Days) - $4,200</option>
                        <option value="amboseli">Amboseli Kilimanjaro Safari (4 Days) - $1,950</option>
                        <option value="nakuru-day">Lake Nakuru Day Trip (1 Day) - $350</option>
                        <option value="custom">Custom Itinerary</option>
                        <option value="unsure">Not Sure Yet - Need Advice</option>
                    </select>
```

| Element | What It Does |
|---------|--------------|
| `<select>` | Creates a dropdown menu. Users click it and choose one option. |
| `<option>` | One item in the dropdown. |
| `value=""` | The data sent to the server when this option is selected. The text between the tags is what the user sees. |
| `value=""` (empty) | The default "Select a Tour" option sends no data - it acts as a placeholder. |

#### How Select Works
```html
<select id="tour" name="tour">
    <option value="">-- Choose --</option>
    <option value="mara">Mara Classic</option>
    <option value="big5">Big Five</option>
</select>
```

User sees:
```
[ -- Choose --  v ]
```
When opened:
```
[ -- Choose --   ]
[ Mara Classic   ]
[ Big Five       ]
```

If user picks "Mara Classic", the value `"mara"` is sent to the server.

### Step 6: Date and Number Inputs

```html
                    <label for="travel-date">Preferred Travel Date</label>
                    <input type="date" id="travel-date" name="travel-date">

                    <label for="group-size">Number of Travelers *</label>
                    <input type="number" id="group-size" name="group-size" min="1" max="20" placeholder="e.g. 2" required>
```

| Element | What It Does |
|---------|--------------|
| `<input type="date">` | Shows a calendar date picker. User clicks and selects a date from the calendar. |
| `<input type="number">` | Only allows numbers. Shows up/down arrows (spinners) on most browsers. |
| `min="1"` | Minimum allowed value. Browser blocks submission if value is less than 1. |
| `max="20"` | Maximum allowed value. Browser blocks submission if value is more than 20. |

### Step 7: More Select Dropdowns

```html
                    <label for="budget">Budget Range (USD per person)</label>
                    <select id="budget" name="budget">
                        <option value="">-- Select Budget --</option>
                        <option value="under-1000">Under $1,000</option>
                        <option value="1000-2000">$1,000 - $2,000</option>
                        <option value="2000-3000">$2,000 - $3,000</option>
                        <option value="3000-5000">$3,000 - $5,000</option>
                        <option value="5000-plus">$5,000+</option>
                    </select>
```

Same `<select>` pattern. Each `<option>` has a `value` attribute for the server and display text between the tags for the user.

### Step 8: Textarea Fields

```html
                    <label for="special-req">Special Requirements or Requests</label>
                    <textarea id="special-req" name="special-req" rows="5" placeholder="e.g. dietary requirements, mobility needs..."></textarea>

                    <label for="message">Your Message *</label>
                    <textarea id="message" name="message" rows="6" placeholder="Tell us about your dream safari." required></textarea>
```

| Element | What It Does |
|---------|--------------|
| `<textarea>` | Multi-line text input. Users can type paragraphs. |
| `rows="5"` | Sets the visible height to 5 lines. The user can drag to resize. |
| `<textarea>` has a closing tag | Unlike `<input>`, textarea is not self-closing. Content between tags would be default text. |

#### Input vs Textarea
| Feature | `<input>` | `<textarea>` |
|---------|-----------|--------------|
| Lines | Single line | Multi-line |
| Resize | No | Yes (by default) |
| Default text | `value` attribute | Text between tags |
| Use for | Names, emails, search | Messages, reviews, comments |

### Step 9: Checkbox and Submit

```html
                <fieldset>
                    <legend>Newsletter</legend>

                    <input type="checkbox" id="newsletter" name="newsletter" value="yes">
                    <label for="newsletter">Yes, I would like to receive Safari Horizon Tours newsletters.</label>
                </fieldset>

                <p>* Required fields</p>

                <button type="submit">Send Inquiry</button>
                <button type="reset">Clear Form</button>
            </form>
```

| Element | What It Does |
|---------|--------------|
| `<input type="checkbox">` | A toggle box. Checked = sends `"yes"`. Unchecked = sends nothing. |
| `value="yes"` | The value sent to the server when checked. |
| `<button type="submit">` | Submits the form. Browser collects all field data and sends it. |
| `<button type="reset">` | Clears all form fields back to their default state. |

### Step 10: FAQ Section

```html
        <section id="faq">
            <h2>Frequently Asked Questions</h2>

            <div>
                <h3>Do I need a visa to visit Kenya?</h3>
                <p>Most nationalities require a visa. You can apply for an e-Visa online at evisa.go.ke.</p>
            </div>

            <div>
                <h3>Is Kenya safe for tourists?</h3>
                <p>Yes. Kenya is one of Africa's most popular tourist destinations.</p>
            </div>
```

FAQ pattern: each question is an `<h3>` and each answer is a `<p>` inside a `<div>`.

### Step 11: Emergency Contact and Social Links

```html
        <section id="emergency">
            <h2>Emergency Contact</h2>
            <p>For existing guests currently on safari, our 24/7 emergency line is available:</p>
            <p><strong>Emergency Hotline:</strong><a href="tel: +254 700 111 222"> +254 700 111 222</a></p>
            <p><strong>Satellite Phone (in the field):</strong> +870 776 444 555</p>
        </section>

        <section id="social">
            <h2>Follow Us</h2>
            <ul>
                <li><a href="#">Instagram: @safarihorizontours</a></li>
                <li><a href="#">Facebook: Safari Horizon Tours</a></li>
                <li><a href="#">Twitter: @SafariHorizonKE</a></li>
                <li><a href="#">YouTube: Safari Horizon Tours</a></li>
                <li><a href="#">TripAdvisor: Safari Horizon Tours Reviews</a></li>
            </ul>
        </section>
```

Social links use `<ul>` with `<li>` items, each containing an `<a>` link. The `href="#"` is a placeholder for real URLs.

### Step 12: Footer

Same footer as all other pages.

---

## 7. HTML Concepts Reference

### All Elements Used in This Project

| Element | Category | Pages Used On |
|---------|----------|---------------|
| `<!DOCTYPE html>` | Declaration | All |
| `<html>` | Root | All |
| `<head>` | Metadata | All |
| `<meta>` | Metadata | All |
| `<title>` | Metadata | All |
| `<body>` | Root | All |
| `<header>` | Semantic | All |
| `<nav>` | Semantic | All |
| `<main>` | Semantic | All |
| `<section>` | Semantic | All |
| `<footer>` | Semantic | All |
| `<address>` | Semantic | Contact |
| `<blockquote>` | Semantic | Home |
| `<h1>` to `<h3>` | Heading | All |
| `<p>` | Text | All |
| `<strong>` | Text | All |
| `<img>` | Media | All |
| `<a>` | Link | All |
| `<div>` | Container | All |
| `<ul>` | List | About, Tours, Contact |
| `<ol>` | List | Tours |
| `<li>` | List | About, Tours, Contact |
| `<table>` | Table | About, Tours |
| `<thead>` | Table | About, Tours |
| `<tbody>` | Table | About, Tours |
| `<tr>` | Table | About, Tours |
| `<th>` | Table | About, Tours |
| `<td>` | Table | About, Tours |
| `<form>` | Form | Contact |
| `<fieldset>` | Form | Contact |
| `<legend>` | Form | Contact |
| `<label>` | Form | Contact |
| `<input>` | Form | Contact |
| `<select>` | Form | Contact |
| `<option>` | Form | Contact |
| `<textarea>` | Form | Contact |
| `<button>` | Form | Contact |

### All Input Types Used

| Type | Where Used | Purpose |
|------|------------|---------|
| `text` | Contact form | Name, country |
| `email` | Contact form | Email address |
| `tel` | Contact form | Phone number |
| `number` | Contact form | Group size |
| `date` | Contact form | Travel date |
| `checkbox` | Contact form | Newsletter opt-in |

### All Attributes Used

| Attribute | Element | Purpose |
|-----------|---------|---------|
| `lang` | `<html>` | Page language |
| `charset` | `<meta>` | Character encoding |
| `name` + `content` | `<meta>` | Metadata |
| `id` | Any | Unique identifier |
| `href` | `<a>` | Link destination |
| `src` | `<img>` | Image URL |
| `alt` | `<img>` | Image description |
| `width` | `<img>` | Display width |
| `for` | `<label>` | Connects to input id |
| `type` | `<input>`, `<button>` | Input or button type |
| `name` | `<input>`, `<select>`, `<textarea>` | Field name for submission |
| `value` | `<input>`, `<option>` | Data value sent to server |
| `placeholder` | `<input>`, `<textarea>` | Hint text |
| `required` | `<input>`, `<textarea>` | Must be filled |
| `min` | `<input>` | Minimum value |
| `max` | `<input>` | Maximum value |
| `rows` | `<textarea>` | Visible height |
| `action` | `<form>` | Submit destination URL |
| `method` | `<form>` | HTTP method (get/post) |

### How to Run

1. Create a folder called `SAFARI`
2. Create 5 files inside it: `index.html`, `about.html`, `tours.html`, `gallery.html`, `contact.html`
3. Paste the code for each file
4. Open `index.html` in your browser
5. Click the navigation links to visit each page
6. All links, anchors, and navigation should work between pages
