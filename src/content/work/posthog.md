---
title: "From zero to product analytics"
company: Backstroke
role: Director of Product
startDate: "2026-03"
endDate: "2026-04"
summary: "Drove Backstroke's first-ever product analytics instrumentation end-to-end — vendor evaluation, architecture, implementation plan, code, PR reviews, production cutover."
tags: [AI-PM, Eng, Shipped, Strategy]
status: shipped
featured: true
order: 2
heroImage: ./screenshots/posthog/cover.webp
heroImageAlt: "PostHog mascot hedgehog presenting a bar chart on an easel"
---

## Before this

Zero. No usage tracking, no adoption signal, no funnel visibility. The company was flying blind on which features customers actually used.

## What I shipped

A vendor evaluation, an architecture decision, a 5-milestone roadmap, a working frontend integration, and a teammate-facing playbook — all in about four weeks.

### Vendor selection

Ran a full evaluation against the major options. Modeled cost against expected event volume across each vendor's free tier. Recommended PostHog for unified events + dashboards + session replay + feature flags, plus Ruby + JS SDK parity for our stack. Security approved.

### Frontend implementation (shipped)

- Provider + hook pattern matching the existing feature-flag context, so analytics use feels native to the codebase.
- User identification on login, account-level grouping, identity reset on logout.
- A focused custom-event vocabulary covering auth, the core funnel, templates, hero tooling, the editor, and integrations.
- **Privacy-forward config:** autocapture off (deliberate tracking only), session recording off (the editor handles sensitive content), IP tracking off, persistence in `sessionStorage`, person profiles `identified_only`. PII limited to email + name.
- **Double-gated for safe rollout:** an env var AND an explicit enable flag. Env-var absence is an instant kill switch.
- Hardened all analytics calls with try/catch so a tracking failure can never break a primary user action.

### Catching a phantom-event class of bug

Right after merge I noticed a handful of events in the dashboard that didn't match anything in the codebase. Root-caused them as **phantom events** — names that appeared during someone's local testing but were never committed. They would have lived in the dashboard forever, never firing in production. Built a follow-up PR with cleanly-scoped events for the surfaces that had been missed, plus a state-property pattern that collapsed several near-duplicate buttons into one event with context.

### Team enablement

Wrote a full analytics-events section into the team's coding-conventions doc: naming conventions, property conventions, safety rules, service-routing guidance, and a four-item ship checklist designed to prevent the phantom-event failure mode from recurring.

## Outcome

First-ever usage and adoption tracking. Foundation for funnel analysis on the core flow, conversion through the predictive content surface, and integration usage.
