---
title: "Surge — Predictive Content for Klaviyo"
company: Backstroke
role: Director of Product
startDate: "2026-02"
summary: "Predictive hero intelligence for Klaviyo campaigns. Marketers pick the heroes, Surge predicts the winner per audience segment, and delivers a ready-to-drag content block. GA April 2026."
tags: [AI-PM, Eng, Shipped, Strategy]
status: shipped
featured: true
order: 2
heroImage: ./screenshots/surge/surge-cover.avif
heroImageAlt: "Surge — predictive hero content delivered as a Klaviyo Universal Content block"
links:
  - label: "Launch announcement"
    url: "https://www.backstroke.com/blog/introducing-surge-revenue-boosting-predictive-hero-intelligence-for-klaviyo-campaigns"
---

## What Surge does

Surge adds predictive hero intelligence to the campaigns marketers are already building in Klaviyo. Instead of switching tools, you stay in your ESP and let Backstroke handle the hero optimization behind the scenes. You pick the hero images, Surge predicts which one performs best for each audience segment, and delivers a ready-to-use content block you drag into your Klaviyo email.

Today, when you build a Klaviyo campaign, you pick one hero image and send it to everyone. You might suspect different audiences respond to different visuals — but testing hero variations manually (building segments, creating conditional content blocks, managing merge tags) is tedious enough that most teams skip it.

Surge eliminates that work. It automatically detects your draft and scheduled campaigns, lets you upload 2–10 hero variations, predicts which hero will perform best for each segment, and generates a smart content block that handles the personalization for you. You drag one block into your email and send. Each subscriber sees the hero predicted to drive the highest engagement for their profile.

## The bet

Most ESPs (including Klaviyo) ship AI **generation** but not predictive **personalization**. Surge is the bet on the second half of that arc — same campaign, dynamic content, scored per audience, delivered as a Universal Content block the marketer can drag anywhere.

## What I built

I scaffolded Surge end-to-end as a working POC, then drove it through five hardening phases to a real ML-backed v1.

- **Backend.** Clean controller → orchestrator → service architecture, with local DB campaign sync, manual + auto refresh, search/pagination, sort-by-send-date, and cached editor-type detection per campaign.
- **UI.** Hero picker aligned with the predictive-hero pattern — multi-image upload from URL, Drive, or a hero library. Click-through URL validation. Code-template detection with an amber warning so customers know which campaigns the system can and can't handle. Auto-poll on block verification with graceful timeout. Edit-content flow that skips the start-over step.
- **Slack-native delivery.** Built the entire Slack experience end-to-end: notifications, hero upload + scoring, approval, polish, plus a slash command with a campaign-picker modal. Cross-surface sync so a web action closes any open Slack notification.
- **Hardening.** Audit-driven across security (signed tenancy, SSRF mitigation), correctness (state-machine terminals, locked approval flow), observability (correlation IDs, structured logs, scheduled-job summaries), and performance (queue segmentation, partner-API timeout, partial index).

## Why differentiated

The Slack-first UX is the long-term differentiator. Marketers stay where they already work — Slack and Klaviyo — instead of context-switching into another product.

## Live with customers

Surge launched as GA on April 29, 2026. From the launch announcement, three early customer results:

- **MERSEA** — 2.2× revenue, 83% higher conversion rate
- **Helix Sleep** — 44% higher click-through rate, 31% lift in conversion
- **Perry Ellis** — 21% increase in click rate, 46% lift in revenue per recipient

The roadmap from here extends predictive optimization to additional email components — product ordering, headlines, CTAs — under the same Klaviyo-native delivery model.

## A note on how I built this

I'm a PM, not an engineer. I built this with Claude Code as my coding partner — every POC came with a six-lens audit pass before engineer review, producing a clean MUST-FIX queue rather than a half-baked branch on someone's desk.
