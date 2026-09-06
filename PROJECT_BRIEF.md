# NO FOLD Deck Studio Project Brief

## Product Purpose

NO FOLD Deck Studio is a mobile-first web platform for showcasing original NO FOLD card game editions and custom physical card deck work.

The platform should feel like premium physical card packaging, playful game culture, and editorial product design. It should be content-led, visual, and restrained rather than a generic software dashboard.

## NO FOLD Editions vs Custom Decks

NO FOLD Editions is the original consumer game and IP side of the platform. It exists to present official NO FOLD releases, product details, photography, availability, and pricing when those details are confirmed.

Custom Decks is the customization and service side of the platform. It exists for individuals, brands, restaurants, communities, events, and organizations that want to request custom physical card decks.

Previous custom projects should be treated as portfolio or case-study products unless explicitly marked for sale.

## V1 Scope

- Showcase NO FOLD products.
- Showcase previously produced custom decks when real content is available.
- Display pricing only when confirmed.
- Let visitors explore individual deck detail pages.
- Let visitors submit or begin a custom deck request through a front-end request experience.
- Keep product and deck content primarily in `src/data`.

V1 should not include a full ecommerce platform, a complex card editor, authentication, backend submission handling, or payment functionality.

## Future Scope

- Rive-powered interactive card previews.
- Product photography and edition-specific visual systems.
- Real submission handling for custom deck requests.
- Ecommerce or payment functionality, only after the product direction requires it.
- Rich case-study pages for custom deck projects.
- More advanced filtering or browsing patterns once the catalog warrants them.

## Visual Direction

- Warm off-white and cream base.
- Strong black typography.
- Deep red accents.
- Muted gold accents.
- Large cards and physical product photography.
- Generous whitespace.
- Mobile-first layouts that scale responsively.
- Avoid generic SaaS styling, fake client logos, invented testimonials, invented pricing, and invented statistics.

## Architecture Principles

- Keep page components focused on composition.
- Keep deck and product content in `src/data` before introducing a CMS or backend.
- Build reusable layout, UI, and deck components.
- Preserve a clean route structure with React Router.
- Keep the foundation ready for future Rive integration without adding it before it is needed.
- Avoid unnecessary UI frameworks and premature backend complexity.
