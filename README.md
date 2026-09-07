# EMBER & SPICE — Premium Digital Restaurant Menu

A frontend-only, production-style single-page restaurant menu built with HTML5, CSS3, Vanilla JavaScript, Tailwind CDN, Bootstrap Icons, Owl Carousel and GLightbox.

## Run it

Open `index.html` in a modern browser. No build step, backend or database is required.

For best local development, use a simple static server such as VS Code Live Server.

## Files

- `index.html` — page structure, SEO metadata, JSON-LD and library includes
- `css/style.css` — design system and responsive UI
- `js/script.js` — menu data, rendering, search, filters, category navigation, modal, theme and carousel
- `assets/images/` — local image folder reserved for optimized self-hosted assets

## Customizing the menu

Edit the `menuItems` array in `js/script.js`. Each object includes:

`name`, `category`, `price`, `description`, `ingredients`, `image`, `vegetarian`, `vegan`, `spicy`, `bestseller`, `special`, `dietary`, `spice`, `portion`

The menu cards, search, filters, detail modal and featured carousel are generated from this single data structure.

## Replacing restaurant details

Update the restaurant name, address, phone number, WhatsApp URL, maps URL and opening hours in `index.html`. Also update the JSON-LD restaurant data.

## Image performance

The demo uses remote Unsplash image URLs so the folder stays lightweight. For production, replace these with local WebP/AVIF images in `assets/images/` and keep the existing `loading="lazy"` behavior for menu images.

## Accessibility

The implementation includes semantic headings, keyboard-operable menu cards, focus states, accessible labels, Escape-to-close modal behavior and a `prefers-reduced-motion` fallback.
