---
title: "Backstroke MCP — putting predictions inside the AI assistant"
company: Backstroke
role: Director of Product
startDate: "2026-06"
summary: "Opened a second distribution channel for Backstroke's prediction models — subject lines and hero recommendations reachable directly from Claude or any MCP-compatible assistant, not just our own UI."
tags: [AI-PM, Eng, Strategy, Shipped]
status: shipped
featured: true
order: 2
links:
  - label: "Product update"
    url: "https://www.backstroke.com/product-updates/backstroke-mcp-(early-access)"
---

## What it does

Backstroke MCP connects any MCP-compatible AI assistant — Claude, or others — directly to Backstroke's prediction models. Subject lines, hero recommendations, and content predictions are now reachable right inside the assistant a marketer already uses, instead of only inside our own UI. Sign in once; from then on the assistant can call Backstroke's tools whenever asked, and anything that writes back into the customer's email platform pauses for explicit approval first.

## The bet

Most marketing MCP connectors give an assistant read access to a customer's own account data. Backstroke's bet is different: the value isn't read access to your account, it's a prediction your account can't produce on its own — learned from real email outcomes across 10,000 brands. The assistant is a research surface, not an unsupervised actor.

## What I drove

I built the first version myself — a local Backstroke MCP server wired to our predictive subject-line model, running end-to-end against my own local Claude install. That proved it out before we spent a single hour of engineering time: the integration was technically feasible, and it was useful enough to be worth building for real. I circulated the POC internally to get early feedback.

From there I handed the production build to an engineer and our fractional CTO, with an under-two-week deadline to get it live — security review, infrastructure, event tracking, and the full end-to-end implementation. I held that timeline accountable, stayed in the loop through testing and review of how it actually behaved end-to-end, and drove the decisions on install UX — making the connect flow simple enough that a non-technical marketer could set it up without help.

## Status

Shipped as an Early Access release, June 2026.
