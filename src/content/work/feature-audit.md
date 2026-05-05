---
title: "/feature-audit — POC-to-production audit suite"
company: Backstroke
role: Director of Product
startDate: "2026-03"
summary: "Six-lens audit suite I authored for honest, repeatable handoff reviews of my own feature branches. Has caught MUST-FIX issues on every project I've shipped."
tags: [AI-PM, Eng, Tooling]
status: shipped
order: 6
heroImage: ./screenshots/feature-audit/cover.png
heroImageAlt: "Feature audit Claude Code skill output showing numbered issue table"
---

## Why this exists

I'm a PM building POCs in Claude Code. Without a sharp pre-handoff filter, my PRs would land on engineers' desks with subtle bugs, missing observability, and copy that needed a second pass — all of which would erode the trust that lets me keep building.

`/feature-audit` is that filter.

## What it does

Six specialized audit agents, each with its own self-contained prompt:

1. **Production readiness** — security, correctness, deploy safety
2. **UX & design** — visual consistency, edge cases, empty states
3. **User flow completeness** — every entry/exit path, no dead ends
4. **Copy & content** — voice, register, no developer-speak
5. **Integration contracts** — API shape, error handling, retry logic
6. **Observability** — logging, metrics, debuggability

## How it runs

**Two-phase design.** Phase 1 is read-only — produces a numbered issue table across all audits, sorted MUST FIX → SHOULD FIX → NICE TO HAVE. Phase 2 works through approved issues one commit per fix. The user (me) approves by number.

**Runs audits in parallel.** Phase 1 agents are independent, so they spawn concurrently. Huge wall-clock win over sequential execution.

**Convention discovery first.** Before any audit runs, the agent inspects 2–3 existing examples of each pattern (controllers, models, components, tests, services, API calls) so audits judge the branch against *how this codebase does things*, not generic best practices.

**Scope check.** Flags branches above a size threshold and suggests logical PR splits before proceeding.

**Commit discipline baked in.** Typed prefixes, never amend/squash, one fix per commit. Engineers can review the audit fixes as a clean sequence.

## What it taught me about my own work

The lens that catches the most issues is **observability** — almost every PM-built POC ships without correlation IDs, without structured logging, without the breadcrumbs an engineer needs to debug it at 2am. The second-most: **copy**. AI defaults to developer-speak unless aggressively course-corrected.

I now write copy first, observability second, and feature logic third. The audit just enforces what I already know I should have done.
