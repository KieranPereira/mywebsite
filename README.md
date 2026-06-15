# Kieran Pereira — Portfolio (Slide Deck)

A data-driven portfolio built with **Next.js 14 (Pages Router) + TypeScript + TailwindCSS**.

The homepage is a **full-screen snap-scroll slide deck** — one project per slide, skimmable in
~1 minute. A matching **PDF** is generated from the same data via the print route. Depth on
demand lives at `/portfolio/[slug]`.

---

## How to add or edit a PROJECT

All projects live in **`src/data/projects.tsx`** in the `projects` array. Order = slide order
on the deck, table of contents, and PDF.

| Field         | Required | What it is                                                                 |
| ------------- | -------- | -------------------------------------------------------------------------- |
| `slug`        | ✅       | URL-safe id → slide id `project-<slug>` and page `/portfolio/<slug>`.      |
| `title`       | ✅       | Project name on the slide and detail page.                                 |
| `caption`     | ✅       | One punchy hook line (subtitle on the slide).                              |
| `heroStat`    | ✅       | Bold achievement line: `{value, label}`.                                   |
| `media`       | ✅       | Main visual: `{type, src, poster?}`.                                       |
| `tldr`        | optional | Overview paragraph on the slide.                                           |
| `highlights`  | optional | Key Contributions bullets (3–4).                                             |
| `techTags`    | optional | Small chips under the bullets.                                             |
| `links`       | optional | GitHub / demo / deck buttons.                                              |
| `gallery`     | optional | Extra images shown in the visual block alongside `media`.                  |
| `subtitle`    | optional | Explicit slide subtitle (defaults to `caption`).                           |
| `achievement` | optional | Override text for the bottom achievement line (else `heroStat`).           |
| `deepDive`    | optional | Full breakdown on `/portfolio/[slug]` (rich JSX, collapsed by default).    |
| `external`    | optional | If set, links straight out — no detail page or "Full breakdown" link.      |

A new project automatically appears as a **new slide**, in the **TOC**, in the **PDF**, and
gets a detail page — no other code changes.

## Slide order

Defined in **`src/data/deck.ts`** → `buildDeckSlides()`:

`Cover → About → [one slide per project] → Experience → Education → Contact`

To change deck copy (cover bio, about intro, contact tagline, company logos), edit
**`deckData`** in **`src/data/data.tsx`**.

## How to add or edit a JOB or EDUCATION entry

In **`src/data/data.tsx`**:

- Work → `experience` array
- Education → `education` array

Each entry supports `caption`, `tldr`, and `content` (full bullets — detail page / print only).

## How to swap media and logos

- Project media → `/public/<folder>/` then update `media.src`, `poster`, and `gallery` paths.
- Company logos (About / Experience slides) → `/public/experience/*.png`, listed in `deckData.experienceLogos`.
- Headshot → `src/images/profilepic.jpg` (also exported as `profileImage` in `data.tsx`).

Keep videos as H.264 `.mp4` with a **poster** image — videos show as posters in the PDF.

## Run locally

```bash
yarn install
yarn dev          # http://localhost:3000 — interactive deck
```

Open **`/deck/print`** and click **Save as PDF** to preview the printable deck.

```bash
yarn compile      # TypeScript check
yarn lint         # Prettier + ESLint (zero warnings)
yarn build        # Production build
yarn sitemap      # Regenerate sitemap
```

## Deploy

Deploys to **Vercel** with zero config — `yarn build` on push. No environment variables required.
