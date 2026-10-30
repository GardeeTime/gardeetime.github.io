---
title: "Creative Loops — from one hero to an audience-matched set"
company: Backstroke
role: Director of Product
startDate: "2026-09"
summary: "Generate, check, and score new heroes against the one you'd otherwise send, round after round, until there's a set predicted to beat it. Then carry that set straight into a campaign without re-scoring."
tags: [AI-PM, Eng, Strategy, Design, Shipped]
status: shipped
featured: true
order: 1
links:
  - label: "Beta announcement"
    url: "https://www.backstroke.com/product-updates/creative-loops-enters-beta"
  - label: "Sets in campaigns"
    url: "https://www.backstroke.com/product-updates/use-predictive-sets-in-campaigns"
---

## What it does

Start with the hero you'd normally send. Creative Loops uses your product, your copy, and your brand's style to generate new candidates, screens them for quality, and scores them against your original for each audience cohort. Each round builds on what scored well in the last one. You can mix up to 12 of your own photos with generated backgrounds, review which image goes to which audience, and then save the winning set, push it to Klaviyo as a block, or (since October) drop it straight into a draft campaign with its audience assignments intact.

You get an email when a run finishes. The loop does the exploring; you make the call.

## The bet

Before Loops, a marketer had to do the work themselves: generate variants, prune the bad ones, score, look at the result, and repeat. Most people stopped after one pass, so most sets never got good enough to beat the control.

Loops packages that whole cycle into one job, and every step it runs was something we'd already shipped and tested on its own: generation by creative family, the quality screen, and the control verdict. The bet is that the value comes from wiring proven parts into a loop, not from a new model.

## What I drove

- **Wrote the spec and the build plans** across all four codebases (the AI service, the API, the UI, and infrastructure), then ran the build in phases and shipped it dark to production behind a flag.
- **Tested the dark release against the original design** and turned the gaps into a short list of fixes I built myself: entry points from Hero Lab, the rename to "Creative Loops," a lightbox for reviewing a set, and removing a Yes/Maybe/No label row. That row looked like a gate on set membership, and it had side effects the user couldn't see. I replaced it with explicit "Add to library" and "Download" actions.
- **Ran the beta rollout account by account.** Each account got a readiness check (brand config, fonts, fresh audience data) before it was switched on, and accounts with stale audience data were held back rather than switched on with bad inputs.
- **Closed the last step to the send.** The follow-up lets a finished set go straight into a campaign. It reuses the assignments the loop already made instead of re-scoring, so what the marketer reviewed is exactly what goes out.

## Status

Beta launched September 29, 2026 for participating accounts. Sets in campaigns shipped October 13, 2026.
