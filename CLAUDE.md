# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

CANN Design is a portfolio/business website for a creative design collective. It is a monorepo with two packages:
- `frontend/` — Next.js 15 app (App Router, React 19, TypeScript, Tailwind CSS 4)
- `studio/` — Sanity CMS admin for content management

## Commands

All commands run from the `frontend/` directory:

```bash
npm run dev      # Start dev server at localhost:3000
npm run build    # Production build
npm run start    # Run production server
npm run lint     # Run ESLint
```

There is no test runner configured.

For the Sanity studio (`studio/` directory):
```bash
npm run dev      # Start Sanity Studio at localhost:3333
```

## Architecture

### Data Flow
Content is managed in Sanity CMS and fetched via GROQ queries. The Sanity client is configured in `frontend/libs/sanity.ts` (project ID: `b9nvsyw4`, dataset: `production`). All GROQ queries are centralized in `frontend/libs/queries.ts`.

Data fetching pattern: pages marked `"use client"` fetch in `useEffect` using `client.fetch(query, params)`. There are no loading states — components return `null` while data loads.

Images from Sanity are references, not URLs. Use the `urlFor()` helper from `libs/sanity.ts` to convert them: `urlFor(image).width(800).url()`.

### Content Types (Sanity Schemas)
- **project** — Portfolio pieces with title, slug, mainImage, excerpt, body (PortableText), categories, publishedAt
- **education** — Educational posts with the same shape as project
- **category** — Taxonomy shared by both projects and education posts

### Routing
| Route | Notes |
|---|---|
| `/` | Home — 4 full-screen sections using `SmoothScroller` (full-page scroll behavior) |
| `/projects` | Client component — grid with category filter buttons |
| `/projects/[slug]` | Individual project; renders `body` via `<PortableText>` |
| `/education` | Grid of education posts |
| `/education/[slug]` | Individual education post |
| `/about`, `/collaborate` | Static pages |

### Key Components
- **`SmoothScroller`** — Wraps the home page in `@fullpage/react-fullpage` for full-page scroll sections
- **`ContentCard`** — Reusable animated card (Framer Motion `whileInView`) used in project and education grids
- **`Header`** — Fixed navbar; uses `usePathname()` for active route highlighting; hamburger on mobile
- **`BackToTop`** — Floating button that tracks footer position to avoid overlap

### Styling
Tailwind CSS 4 utility classes. Black/white theme. Consistent patterns: `rounded` buttons, `hover:` transitions with `duration-300`. Framer Motion handles entrance animations on cards.

Rich text from Sanity renders via `@portabletext/react` with `@tailwindcss/typography` prose styles.
