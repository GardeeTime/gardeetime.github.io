---
title: "Account Research Agent"
company: Salesloft
role: Senior Staff PM
startDate: "2024-09"
endDate: "2025-03"
summary: "Lead PM on a generative agent that compresses an hour of pre-call account research into under a minute. Generated millions in pipeline; closed roughly a hundred deals in the first six months."
tags: [PM, AI, Shipped]
status: shipped
featured: true
order: 5
heroImage: ./screenshots/account-research-agent/cover.webp
heroImageAlt: "Stylized illustration of overlapping document panels with a magnifying glass over a profile, suggesting account research"
---

## The bet

Reps were spending 30–60 minutes per high-priority account stitching together public web data, CRM context, prior conversation history, and recent news before a single call. The agent compresses that into a digestible briefing in under a minute.

## What I drove

- **Discovery.** Embedded with reps doing the manual flow. Watched the seams — where they tabbed, where they copy-pasted, where they gave up. The MVP target wasn't to mimic the manual process; it was to skip the parts they already abandoned.
- **Solution architecture.** Search APIs + an LLM for synthesis. Output structured to surface the **why this account, why now** signal without burying it in transcript-style dumps.
- **Prompt + eval discipline.** Spent meaningful time with engineering on quality and reliability — model selection, prompt iteration, evals against a labeled set so we shipped something reps would trust.
- **Launch + iteration.** Drove early-access cohort, ran weekly review of usage and feedback, fast-followed two adjacent agents (Person Research, Buyer ID).

## Outcome

Shipped to GA. Generated millions in attributed pipeline. Closed roughly 100 deals in the first six months of broad availability. Set the template for the pattern Salesloft used for subsequent agents.
