---
title: "Hero Families — creative variety, in the brand's own vocabulary"
company: Backstroke
role: Director of Product
startDate: "2026-09"
summary: "Replaced 'six versions of one look' with seven distinct creative families, derived by classifying hundreds of real brand heroes, and taught the generator each brand's own materials, places, and props."
tags: [AI-PM, Eng, Design, Shipped]
status: shipped
featured: false
order: 4
links:
  - label: "Product update"
    url: "https://www.backstroke.com/product-updates/%F0%9F%8E%A8-hero-families"
---

## What it does

Hero Lab now generates a different kind of image for each slot in a set instead of several takes on one idea. Pick from seven families: **Styled product, Brand color, Texture, Pattern, Environment, Worn / in use,** and **Lifestyle moment**. You get one image per family, up to six per batch, with photo treatments (editorial, natural, seasonal) varied across the set so it doesn't look uniform.

A new **Brand world** section in Brand Config lets each brand describe its own materials, places, moments, and props, so the generator works in their language, not a generic one. Families that need a product photo are greyed out with a note saying what to upload. If a batch only partly finishes, Retry fills in the missing images instead of throwing away the run.

## The bet

Personalization only works if there's something real to choose between. Our sets kept collapsing into near-duplicates, and a predictive model can't find a winner among six of the same image. Variety is a precondition for prediction, not a nice-to-have.

## What I drove

- **Derived the families from evidence, not taste.** I classified 300+ real hero images from brands' own libraries and live sends into a candidate set of categories, checked the model's labels against my own blind labels, and dropped a category that didn't hold up (product presence varied inside every family, so it couldn't be a family on its own).
- **Validated before building.** I ran a generation probe across six real brand configurations and set a round-trip bar: did the generator produce the family we asked for? That became the acceptance test for the build.
- **Pressure-tested the plan, then built it** across the generation service, the API, and the UI with an AI pair (one model building, a second reviewing). I fixed a few problems beyond the plan along the way, such as server-side limits that mirror the client so a long Brand world list can't fail a whole batch.

## Status

Shipped September 10, 2026.
