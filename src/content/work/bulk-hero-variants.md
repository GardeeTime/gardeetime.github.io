---
title: "Bulk Hero Variants — from a brief to 36 on-brand creatives"
company: Backstroke
role: Director of Product
startDate: "2026-05"
summary: "Took hero-image creation from one-off manual design to generating 36 ready-to-test variants from a single campaign brief, with brand guidelines built into every generation."
tags: [AI-PM, Eng, Design, Shipped]
status: shipped
featured: true
order: 3
links:
  - label: "Product update"
    url: "https://www.backstroke.com/product-updates/bulk-hero-variants-with-ai-backgrounds-%F0%9F%AA%84"
---

## What it does

Bulk Variants turns a single campaign brief into a full set of ready-to-test hero images. Bring your own images and Backstroke generates 36 brand-correct text-overlay variants per image automatically — or describe the campaign, optionally reference a product page, and get 1, 3, or 6 AI-generated on-brand backgrounds to turn into the same variant set. A dedicated Hero Image Brand Guidelines section feeds typography, CTA style, photography direction, color palette, and an avoid-list into every generation.

## The bet

Building a meaningful number of on-brand hero variants used to mean sourcing or designing each background separately, then hand-building typography, CTA, and layout variations one at a time — hours of design work per campaign. Bulk Variants collapses that into one flow, betting that brand guardrails, not manual craft, are what makes AI-generated variants usable at scale.

## What I built

Marketers essentially never created more than one hero-image variant per campaign — sourcing or designing a background, then hand-building the typography, CTA, and layout combinations one at a time, was too tedious and too far outside most teams' design skillset to do at any real scale. I built this to solve that at scale with AI, using Nano Banana Pro for background generation alongside our own deterministic variant-building pipeline.

I iterated against real customer usage rather than in a vacuum: built a POC that let me generate bulk variants and send them to customers directly, then tracked which ones got approved and dug into why the rejected ones didn't land. That feedback loop drove changes on both sides of the system — the deterministic hero-building logic and the AI generation itself — until the output held up without someone redesigning it after the fact.

## Status

Shipped May 2026.
