---
title: "Surge for Flows — Always-On Predictive Hero"
company: Backstroke
role: Director of Product
startDate: "2026-04"
summary: "Extended Surge from campaigns to Klaviyo flows — the always-on side of email. Every welcome, abandoned cart, browse abandon, and post-purchase send now gets the predicted-best hero per cohort, with no new creative work."
tags: [AI-PM, Strategy, Shipped]
status: shipped
featured: false
order: 2
heroImage: ./screenshots/surge-for-flows/cover.png
heroImageAlt: "Surge for Flows is Live — Backstroke blog cover."
links:
  - label: "Launch announcement"
    url: "https://www.backstroke.com/blog/surge-for-flows-is-live"
---

## What Surge for Flows does

Surge runs as a Klaviyo Universal Content block. Drop it into a flow step that has a hero — welcome, abandoned cart, browse abandon, post-purchase — and from that point forward every subscriber who enters the flow gets the predicted-best hero variant for their cohort. Scored continuously. New cohorts in the account are picked up automatically.

## The bet

Campaigns are the cherry; flows are the ice cream. Across the average Backstroke account, ~13 active flows quietly drive 40–70% of total email revenue. Surge was already lifting *campaign* revenue by ~31% — but only on the sends marketers remembered to push through it. Moving the same lift mechanic to the always-on surface meant Backstroke's predictive layer ran on every email, not just the ones manually queued.

## What I drove

- **Discovery.** With engineering, mapped the constraints that shaped the architecture: variant generation is account-scoped (not campaign-scoped), flow API writes are template-mediated, and "campaign" in our model is really just a label. The product is the universal content block plus the inference layer behind it — the surface changes, the engine doesn't.
- **Fallback economics.** New subscribers who haven't been profiled receive the fallback variant — already the predicted-best performer across the audience. The cost of being unprofiled is muted, not catastrophic. That made it possible to ship with imperfect coverage instead of waiting for 100% enrichment.
- **Real-time enrichment scope.** Partnered with our Head of AI to scope a webhook → FullContact → cohort-inference → Klaviyo write-back pipeline as the higher-coverage alternative to fallback-only, for accounts that want it.
- **Pilot framing.** Identified the first-wave accounts (Perry Ellis, Homeroom, PSD) and the controlled-A/B design — primary metric: revenue per recipient on the instrumented step, 4-week window, starting on Welcome and Abandoned Cart.

## Why differentiated

Flows are where every ESP ships AI generation but no one ships predictive personalization. Marketers refresh flow art about once a quarter and let it run. A "set it once, lifts forever" layer on that surface is a different value prop than "AI generates a new hero" — and it doesn't add a single asset request to the creative team's queue.

## Live with customers

First-wave Surge for Flows accounts: Perry Ellis, Homeroom, and PSD. Instrumented in a controlled A/B over a 4-week window, starting on Welcome and Abandoned Cart — the two highest-revenue flow steps in most accounts. The Surge baseline going in: ~31% campaign revenue lift on average.

## What's next

Subject Line & Preheader Surge — same engine, applied to the two largest drivers of open rate. Surge in Slack — campaign-level optimization without leaving Slack — is also in dev.
