---
title: "Surge — Predictive Content for Klaviyo"
company: Backstroke
role: Director of Product
startDate: "2026-02"
summary: "Backstroke's predictive content system. Marketers generate per-audience hero variants as portable Universal Content blocks inside Klaviyo, with zero workflow change."
tags: [AI-PM, Eng, Shipped, Strategy]
status: shipped
featured: true
order: 1
---

## The bet

Most ESPs (including Klaviyo) ship AI **generation** but not predictive **personalization**. Surge is the bet on the second half of that arc — same campaign, dynamic content, scored per audience, delivered as a Universal Content block the marketer can drag anywhere.

## What I built

I scaffolded Surge end-to-end as a working POC, then drove it through five hardening phases to a real ML-backed v1.

- **Backend.** Clean controller → orchestrator → service architecture, with local DB campaign sync, manual + auto refresh, search/pagination, sort-by-send-date, and cached editor-type detection per campaign.
- **UI.** A hero picker aligned with the predictive-hero pattern — multi-image upload from URL, Drive, or a hero library. Click-through URL validation. Code-template detection with an amber warning so customers know which campaigns the system can and can't handle. Auto-poll on block verification with graceful timeout. Edit-content flow that skips the start-over step.
- **Slack-native delivery.** Built the entire Slack experience end-to-end: notifications, hero upload + scoring, approval, polish, plus a slash command with a campaign-picker modal. Cross-surface sync so a web action closes any open Slack notification.
- **Hardening.** Audit-driven across security (signed tenancy, SSRF mitigation), correctness (state-machine terminals, locked approval flow), observability (correlation IDs, structured logs, scheduled-job summaries), and performance (queue segmentation, partner-API timeout, partial index).

## Why differentiated

The Slack-first UX is the long-term differentiator. Marketers stay where they already work — Slack and Klaviyo — instead of context-switching into another product.

## Status

Phase 5 PRs out across three repositories. Slack integration audit-hardened, ready for review. Subject-line / preheader extension validated and queued for the next milestone.

## A note on how I built this

I'm a PM, not an engineer. I built this with Claude Code as my coding partner — every POC came with a six-lens audit pass before engineer review, producing a clean MUST-FIX queue rather than a half-baked branch on someone's desk.
