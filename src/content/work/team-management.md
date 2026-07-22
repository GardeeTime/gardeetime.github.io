---
title: "Self-Serve Team Management & Account Switching"
company: Backstroke
role: Director of Product
startDate: "2026-07"
summary: "Moved team administration out of support tickets and into the product — invites, roles, MFA, and account switching customers manage themselves — unlocking agencies managing multiple client accounts."
tags: [AI-PM, Eng, Strategy, Shipped]
status: shipped
featured: false
order: 7
links:
  - label: "Product update"
    url: "https://www.backstroke.com/product-updates/self-serve-auth-user-management"
---

## What it does

Customers can now manage their own team from a new Settings area: invite teammates and assign Admin or Member roles, require or self-enroll in MFA, and — for users who belong to more than one account — switch between accounts without logging out. Brand Config and Integrations moved under the same Settings area.

## The bet

Team administration was previously a support-ticket-driven process. Making it self-serve unlocks a segment that couldn't operate cleanly before: agencies and multi-account users managing several client accounts under one login, without asking Backstroke to do it for them.

## What I built

I saw the pain directly: customers filing support tickets just to reset a password, invite or remove a teammate, or require MFA — none of it existed as anything customers could do themselves. I scoped and built the whole thing end-to-end using Claude Code, delivered in two slices.

- **Slice one — internal tool.** Backend plus an internal admin UI so our own team could invite users, reset passwords, and manage MFA without engineering involvement.
- **Slice two — self-serve.** Took the same capability and exposed it directly to customers, replacing the support-ticket flow entirely.

Tested thoroughly before shipping — manual pass, automated tests, and a security review.

## Status

Shipped July 2026. In production — customers are using it.
