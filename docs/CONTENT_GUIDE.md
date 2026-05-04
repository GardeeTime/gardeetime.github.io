# How to add a work entry

Each `.md` file in this folder becomes a work entry on the site.

## Frontmatter

```yaml
---
title: "Project name"
company: Backstroke
role: Director of Product
startDate: "2026-04"          # YYYY-MM
endDate: "2026-05"            # optional — omit for ongoing
summary: "One-sentence pull quote that shows on the work index and detail header."
tags: [PM, AI, Shipped]       # free-form
status: shipped               # shipped | in-progress | poc | concept | ongoing
featured: true                # show on home page (default false)
order: 1                      # lower = higher in list
heroImage: ./screenshots/cover.png   # optional cover image
heroImageAlt: "Description for accessibility"
links:
  - label: "Linear project"
    url: "https://linear.app/..."
---
```

## Body

Plain Markdown. Headings (`##`, `###`), lists, **bold**, `code`, [links](https://...).

## Adding screenshots

1. Drop the image file alongside this `.md` file (or in a `screenshots/` subfolder next to it).
2. Reference it with a relative path:

   ```md
   ![Screenshot of the predict heroes flow](./screenshots/predict-flow.png)
   ```

3. Astro automatically optimizes and serves multiple sizes.

For a caption, use a `<figure>`:

```md
<figure>
  <img src="./screenshots/predict-flow.png" alt="Predict heroes flow" />
  <figcaption>The predict-heroes step in the campaign builder.</figcaption>
</figure>
```

## Sanitization checklist (every entry)

Before committing a new entry, scan for:

- [ ] No specific customer names — use roles ("a premium apparel brand")
- [ ] No customer revenue figures
- [ ] No internal Linear ticket IDs (BAC-####)
- [ ] No internal PR numbers (#123) unless the repo is public
- [ ] No internal branch names (`adam/...`)
- [ ] No internal class names, file paths, or env var names
- [ ] No internal endpoint paths
- [ ] No specific teammate names without consent

If unsure, generalize. The story is in the decisions, not the file paths.
