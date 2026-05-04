---
title: "Flip Turn — Smart HTML Import"
company: Backstroke
role: Director of Product
startDate: "2026-03"
summary: "Two-step AI pipeline that converts existing email HTML into editable templates. Tested clean across seven varied brand emails."
tags: [AI-PM, Eng, POC]
status: poc
featured: true
order: 4
---

## What it does

Paste a customer's existing email HTML. Get back a fully editable template with intact rows, columns, button grids, and image/text sections.

## How it works

A two-step AI pipeline behind a single endpoint:

1. **HTML analyzer.** Reads the source HTML and produces a structured spec — section types, content, layout decisions.
2. **Builder.** Consumes the spec and assembles the template element-by-element using the editor's own structured tools.

The analyzer prompts are **principle-based**, not rule-enumerated, so they scale across email patterns instead of breaking on the first edge case.

## The interesting bit: HTML preprocessing

ESPs leak a lot of garbage into source HTML. I built a preprocessor that strips MSO/MJML boilerplate and the mobile-only duplicates that some platforms emit (which would otherwise double-render every section).

This was the single biggest quality lever — analyzer output went from "mostly right" to "near-perfect" once preprocessing landed.

## Test results

Seven email types pass cleanly across a deliberately varied set — apparel, outdoor, decor, education, university merchandise. The samples covered hero images, product grids, multi-column layouts, animated CTAs, and footer-heavy structures.

## What I learned post-launch

Image-heavy emails — the **majority** of real-world sends — produce output comparable to the editor's native importer. The differentiated value isn't reproduction; it's image **decomposition** — extracting text from product-card images into editable blocks. That's the next scope: multimodal vision + OCR.
