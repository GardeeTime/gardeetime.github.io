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
  - label: "MCP docs"
    url: "https://headless.backstroke.com/"
---

```
.+###############+.
######*##**########
######=:.==--######      ...               :-           .               ::                 =**:  -**-  .=***=.  ****++:
#######=:##*.*#####     .#==*-  :--.  .--: =*  :: :--:.=#--.:-::- .--:  ++  :: .--:        *@%# .%%@= =@*:.:##. @%::-%@:
#####*-----.-######     .#+=#= :-:-#.:#::- =*-*= :#-:- -#-:.:+#=::#-:+* +*-*- =*::*=       *@=@-+@=@= %@.       @@==+@%.
#######+=### *#####     .#:.-#.=+==#:=*    =#+*.  :=*+ :#.   ++  -#  :# +*++. +*===-       *@.%#@*-@= #@:   ==. @%---:
#####*-::---=######     .#+++= ++=+*:.++++.-* :*-.++++  +++.=**+  =++*- =+ :*-.++++        *@.-@@.-@= .*%*+#@+  @%
###################                                                                        ..  ..  ..    ::.    ..
=*-=============-*=
 :*#############*-
```

## What it does

Backstroke MCP connects any MCP-compatible AI assistant — Claude today, others next — directly to Backstroke's prediction models: subject lines, hero scoring, and campaign content, all reachable right inside the assistant a marketer already uses. Sign in once with OAuth; from then on the assistant can call Backstroke's tools whenever asked, and every new tool that ships appears automatically, with no reinstall or reconnect.

Tools split into two groups. Read-only tools — `predict_subject_lines`, `predict_subject_lines_for_my_audience`, `read_campaign_content`, `score_hero_generic`, `score_hero_for_my_audience` — are always allowed and never touch a customer's systems. Write tools, like `push_subject_lines_to_klaviyo`, ask for explicit approval every single time and only ever create drafts for review. Nothing sends on its own.

## The bet

Most marketing MCP connectors give an assistant read access to a customer's own account data. Backstroke's bet is different: subject lines are *generated* from patterns learned across 10,000 brands, but heroes are *scored* — candidate images ranked against a model of the customer's actual audience, something a generic generator can't do because it has no read on that list. The assistant proposes; the customer commits, with every write pausing for approval and nothing retained beyond answering the question asked.

## What I drove

I built the first version myself — a local Backstroke MCP server wired to our predictive subject-line model, running end-to-end against my own local Claude install. That proved it out before we spent a single hour of engineering time: the integration was technically feasible, and it was useful enough to be worth building for real. I circulated the POC internally to get early feedback.

From there I handed the production build to an engineer and our fractional CTO, with an under-two-week deadline to get it live — security review, infrastructure, event tracking, and the full end-to-end implementation. I held that timeline accountable, stayed in the loop through testing and review of how it actually behaved end-to-end, and drove the decisions on install UX — making the connect flow simple enough that a non-technical marketer could set it up without help.

## Status

Shipped as a Customer Preview, rolling out to Backstroke customers first, June 2026. SOC 2 Type II compliant. Roadmap ahead: the full hero workflow (score → generate → activate) end-to-end, and connecting assistants beyond Claude.
