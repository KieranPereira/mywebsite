# Kieran Pereira — Portfolio

A fast, data-driven portfolio built with **Next.js 14 (Pages Router) + TypeScript + TailwindCSS**.

The whole point of this setup: **all content lives in plain data files** so you can add or
edit a project or job without touching any layout or logic. If you can copy an object and
change some text, you can update the site.

---

## How to add or edit a PROJECT

All projects live in **`src/data/projects.tsx`** in the `projects` array. The order of the
array is the order they appear on the homepage (most impressive first).

To add one, copy an existing object and change the fields:

| Field        | Required | What it is                                                                 |
| ------------ | -------- | -------------------------------------------------------------------------- |
| `slug`       | ✅       | URL-safe id. `"taflab"` → page at `/portfolio/taflab`.                      |
| `title`      | ✅       | Project name shown on the card and page.                                   |
| `caption`    | ✅       | One punchy hook line.                                                       |
| `heroStat`   | ✅       | The big bold number: `{value: "23% faster", label: "than ..."}`.           |
| `media`      | ✅       | `{type: 'video' \| 'image', src: '/path', poster: '/path'}` (see below).   |
| `tldr`       | optional | 1–2 sentence plain-English summary.                                        |
| `highlights` | optional | 3–4 short bullet outcomes shown on the project page.                       |
| `techTags`   | optional | List of tech, e.g. `['ROS2', 'C++']`.                                      |
| `links`      | optional | Buttons: `{type, label, href}`. `type` is `github`/`demo`/`deck`/`external`.|
| `deepDive`   | optional | Collapsible long-form sections (the only field that uses rich content).    |
| `external`   | optional | If set to a URL, the card links straight out — **no detail page**.          |
| `featured`   | optional | Marks the project as featured.                                             |

> The `deepDive` field is the only one that takes rich JSX (paragraphs, lists, images). If
> you just want the basics, you can leave it out and the project still gets a clean page.

A new project automatically shows up on the homepage grid **and** gets its own page at
`/portfolio/<slug>` — no other code changes needed.

## How to add or edit a JOB or EDUCATION entry

These live in **`src/data/data.tsx`**:

- Work history → the `experience` array.
- Education → the `education` array.

Each entry has:

- `title`, `location`, `date` — the basics.
- `caption` — a one-line hook (shown in orange).
- `tldr` — a one-sentence summary (work entries).
- `content` — the full bullet list, collapsed by default behind a "View details" toggle.

## How to edit SKILLS, CONTACT, and the HERO

Also in **`src/data/data.tsx`**:

- `skills` — grouped tags. Add a skill by adding `{name: 'Thing'}` to a group.
- `contact` — the contact links (email / LinkedIn / GitHub). No form, just links.
- `heroData` — your name, the one-line positioning, and the resume/contact buttons.

## How to swap media

All media files live in **`/public`** (e.g. `/public/capstone/frontvideo.mp4`). Drop a file
in there and point a project's `media.src` (and `poster`) at the path **relative to
`/public`** — e.g. a file at `public/capstone/frontvideo.mp4` is referenced as
`/capstone/frontvideo.mp4`.

Tips for keeping the site fast:

- Use H.264 `.mp4` for video and give every video a `poster` image.
- Keep videos reasonably small (the homepage cards autoplay them, muted, only when in view).
- Images are served through `next/image`, so they're optimized automatically.

---

## Run locally

```bash
yarn install
yarn dev          # http://localhost:3000
```

Other useful scripts:

```bash
yarn compile      # TypeScript type-check
yarn lint         # Prettier + ESLint (must pass with zero warnings)
yarn build        # Production build
yarn sitemap      # Regenerate sitemap (next-sitemap)
```

## Deploy

The site deploys to **Vercel** with zero config — push to your connected Git repo and Vercel
runs `yarn build`. No environment variables are required (contact is links-only).
