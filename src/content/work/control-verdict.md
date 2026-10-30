---
title: "Control + Verdict — a prediction product that can tell you not to send"
company: Backstroke
role: Director of Product
startDate: "2026-08"
summary: "Replaced the hero leaderboard with a single verdict against the image you'd send anyway — and gave Surge the honesty to refuse a send when personalization isn't predicted to beat it."
tags: [AI-PM, Eng, Strategy, Shipped]
status: shipped
featured: true
order: 1
links:
  - label: "Hero Lab update"
    url: "https://www.backstroke.com/product-updates/%F0%9F%8F%81-hero-lab-control-verdict"
  - label: "Surge update"
    url: "https://www.backstroke.com/product-updates/%E2%9A%A1-surge-control-verdict"
---

## What it does

Marketers now name a **control**: the hero they'd send if they did nothing. Every generated variant is scored against it under the same model and the same audience cohorts. The control doesn't compete in the set; it's the bar.

Instead of a leaderboard, Hero Lab and Surge return one of four verdicts:

- **Send the set.** Personalization is predicted to beat the control.
- **One image beat the control.** A single image wins outright.
- **The control is predicted to win.** Keep what you have.
- **No clear winner yet.** The differences are too close to call.

When the control isn't beaten, Surge doesn't build the Klaviyo block and explains why. Results too close to call get their own group instead of being dressed up as a winner.

## The bet

A ranking always produces a #1, even when the gap between #1 and #2 sits inside the model's own noise. That's fine for a demo and bad for trust: the first time a "winner" loses to the marketer's original image, they stop believing the product.

So the bet was to measure against what the customer would actually ship, and only call a win when the margin is both **real** (larger than the scorer's repeatability) and **visible** (large enough to show up as lift in a live campaign). That means "keep your control" will be a common answer. We said so up front rather than selling the feature as a win-finder.

## What I drove

- **Turned a data-science finding into a product rule.** Our data scientist's analysis showed that what separated winning tests from flat ones wasn't creative variety. It was how far the predicted picks sat above the customer's control. I worked with them to turn that into a two-part acceptance bar, one threshold for "is the difference real" and one for "will anyone see it," and kept it defined in one place on the server so the UI could never drift from it.
- **Built the Hero Lab half myself**, across the Rails API and the React UI: control selection, the verdict panel, the tie grouping, and the copy changes that came with it. "Approve" became "Add to library," "segment" became "cohort," and editing a saved variant sends it back to draft.
- **Scoped and shipped the Surge half.** I traced the existing Surge path and found it re-scored heroes before building the Klaviyo block, which would have thrown the verdict away. I specced a path that takes the already-decided assignments, added a Blocks tab for created blocks with retry on failed pushes, and opened "Create block in Klaviyo" to any Hero Lab run, with or without a control.
- **Shipped it staged, then generally available.** Hero Lab went out behind a flag first; the Surge verdict went to every account with no flag after a full staging run that ended in a real Klaviyo push.

## Status

Hero Lab verdict shipped August 12, 2026; Surge verdict August 27, 2026. Live for all customers.
