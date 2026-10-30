---
title: "Smart Shortlist — a quality gate before anything gets scored"
company: Backstroke
role: Director of Product
startDate: "2026-08"
summary: "Built and rolled out a visual-quality gate that pre-selects the usable Hero Lab variants and screens out text over faces and unreadable contrast, so a full manual review becomes a quick pass."
tags: [AI-PM, Eng, Ops, Shipped]
status: shipped
featured: false
order: 4
heroImage: ./screenshots/smart-shortlist/cover.png
heroImageAlt: "Smart Shortlist pre-selecting 85 of 108 hero variants, with quality notes on flagged tiles"
links:
  - label: "Product update"
    url: "https://www.backstroke.com/product-updates/%E2%9C%A8-smart-shortlist"
---

## What it does

Bulk generation can produce hundreds of hero variants in one batch. Smart Shortlist checks every one before it's scored and pre-selects the usable ones. It screens out the obvious failures, like copy sitting across a face or text you can't read against the background, so the marketer no longer clicks through tiles one by one or hits "Select all" and hopes.

When the gate can't judge something with confidence, the variant stays in and gets flagged. It isn't silently removed.

## The bet

Scoring costs money and attention. Every unusable variant that reaches scoring wastes both, and a ranked list with obvious junk in it makes the whole product look careless. A cheap, honest screen up front makes everything downstream better.

## What I drove

I built Smart Shortlist across three services and then ran the production rollout myself, from a runbook I wrote the night before.

- **Reviewed my own work adversarially before the final review.** That caught a cache design that went against a data-handling decision we'd just ratified. I fixed it so the cache is partitioned per account, which keeps customer data deletion clean.
- **Self-served the infrastructure** with an explicit blast-radius rule for every change: read the plan, confirm it touches nothing outside the new module, then apply. I also added a step that runs a smoke test inside the production image before any deploy, so "it works on my machine" can't ship.
- **Added a staging rehearsal I didn't strictly need, and it paid for itself.** It surfaced a missing configuration value that had passed two reviews. It also replaced my guess about a deploy-time risk window with a real measurement, about five times smaller than I'd estimated.
- **Turned first real-use feedback into fixes.** An early heavy user filed seven complaints. Tracing them through the code showed five root causes, and two of those explained two complaints each. I made the product call to keep the shortlist pre-selected and gave users a way to drop a whole creative family at once.

## Status

Shipped August 6, 2026.
