---
title: "Predictive Hero — productionization direction"
company: Backstroke
role: Director of Product
startDate: "2026-02"
summary: "The core ML feature scoring hero images per audience cohort. Made the call on which architecture to ship — productionizing the existing builder over a more elegant proxy."
tags: [Strategy, AI-PM, Eng]
status: shipped
featured: true
order: 3
---

## The decision

Two architectures sat in front of us:

- **Path A** — productionize the existing campaign builder flow. Zero incremental customer effort. Less elegant from a separation-of-concerns standpoint.
- **Path B** — a cleaner proxy architecture using Universal Content blocks and hero sets. Better long-term separation, but a meaningful new UX surface customers would have to learn.

I made the call on **Path A**. The whiteboard elegance of Path B wasn't worth the new UX tax for the first customer pilot. Path A meant the customer's existing builder kept working, with predictive scoring layered behind it.

## Profile-tagging strategy

Stable demographic + segment tags rather than per-send tagging, with layered refresh cadences:

- Demographics — monthly
- Segments — weekly
- Content affinity — weekly

This was the difference between a feature that ran cleanly at scale and one that would have burned through enrichment quotas.

## Shared infrastructure

The infra carries forward into Surge and the next predictive content surface:

- A shared cohorts model
- CLIP image embeddings via a serverless inference path
- Cohort-ID write-back into the ESP profile
- A reusable preview component pattern

## A small bug worth telling

The team flagged via screen recording that drag-and-dropping multiple hero images in predictive mode only persisted the last one. Diagnosed as a stale-closure bug — the handler read its state from the render closure, so every serial `await` iteration called the callback with a stale snapshot. Last write won.

Fix was a one-line swap from a setter to a functional updater. The same callback also backed the Drive-multiselect path, so that surface was fixed in the same change.

## Status

First customer pilot in flight. Path-A productionization is the foundation everything else stacks on.
