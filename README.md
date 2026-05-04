# gardeetime.github.io

Personal portfolio for Adam Gardner. Built with Astro, deployed to GitHub Pages.

> **Live:** [gardeetime.github.io](https://gardeetime.github.io/)

---

## ⚠️ Security first — read before adding anything

This repo is **public**. Everything committed (including git history) is visible to anyone.

**Before committing any new content — work entry, screenshot, testimonial — confirm none of the following are present:**

- [ ] Specific customer names (use roles like "a premium apparel brand")
- [ ] Customer revenue or pricing figures (e.g. `$5K/mo`)
- [ ] Internal Linear ticket IDs (`BAC-####`)
- [ ] Internal PR numbers from private repos
- [ ] Internal branch names (`adam/...`)
- [ ] Internal class names, file paths, env var names
- [ ] Internal endpoint paths
- [ ] Specific teammate names without their consent
- [ ] Phone numbers, personal addresses
- [ ] API keys, tokens, `.env` files (these are gitignored — but verify)

**Screenshots** carry extra risk. Before adding one:

- Crop tightly. Cut out browser tabs, Slack notifications, internal URLs.
- Redact customer names, email addresses, internal IDs visible in the UI.
- Treat each screenshot like a public marketing asset — because it is now.

### Automated scan

`npm run check:secrets` runs a regex scan over `src/`, `docs/`, and `public/` for the patterns above. **It runs automatically before every build** (via the `prebuild` hook), so the GitHub Actions deploy will fail if any high-risk pattern matches.

To run it manually:

```sh
npm run check:secrets
```

Patterns and the allowlist live in [`scripts/scan-sensitive.mjs`](./scripts/scan-sensitive.mjs). Update them when new sensitive identifiers come up (new customer wins, new internal services, etc.).

If a soft warning is intentional and accurate (e.g. a generic dollar figure used as a scope signal), leave it. Soft warnings don't block the build.

---

## Stack

- **[Astro 6](https://astro.build/)** — static site, content collections, image optimization
- **[Tailwind 4](https://tailwindcss.com/)** — palette tokens via `@theme` block in `src/styles/global.css`
- **Fraunces + Inter + JetBrains Mono** — type pairing
- **GitHub Pages** — deploy via `.github/workflows/deploy.yml`

## Local dev

```sh
nvm use 22          # Astro 6 needs Node ≥ 22.12
npm install
npm run dev         # http://localhost:4321
```

| Command | What it does |
| --- | --- |
| `npm run dev` | Dev server with HMR |
| `npm run build` | Static build to `./dist/` (runs scan first) |
| `npm run preview` | Serve the built `./dist/` locally |
| `npm run check:secrets` | Run the sensitive-content scan only |

## Adding content

See [`docs/CONTENT_GUIDE.md`](./docs/CONTENT_GUIDE.md) for the full workflow.

Quick version:

- **Work entry**: drop a `.md` file in `src/content/work/`. Frontmatter shape is in the guide.
- **Testimonial**: drop a `.md` file in `src/content/testimonials/` with quote/role/company in frontmatter.
- **Screenshots**: drop the image file next to the `.md` and reference with `![alt](./file.png)`.

## Deploy

Every push to `main` triggers `.github/workflows/deploy.yml`:

1. Run `npm run build` — which runs the secrets scan via `prebuild`, then builds the site.
2. Upload `./dist/` as a Pages artifact.
3. Deploy via `actions/deploy-pages`.

If the secrets scan finds a high-risk match, the workflow fails and nothing deploys. That's the safety net.

## Repo layout

```
.
├── .github/workflows/deploy.yml    # GH Pages deploy
├── docs/CONTENT_GUIDE.md           # how to add content + sanitization checklist
├── public/                         # static assets (avatar, favicons)
├── scripts/scan-sensitive.mjs      # secrets scanner (runs in prebuild + CI)
├── src/
│   ├── components/                 # MyceliumNetwork, ContributionGrid, TestimonialsSection, etc.
│   ├── content/
│   │   ├── work/                   # one .md per project
│   │   └── testimonials/           # one .md per quote
│   ├── layouts/Base.astro
│   ├── pages/
│   ├── styles/global.css           # palette + typography tokens
│   └── content.config.ts           # collection schemas
└── astro.config.mjs
```
