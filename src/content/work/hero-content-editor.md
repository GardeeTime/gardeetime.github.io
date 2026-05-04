---
title: "Hero Content Editor"
company: Backstroke
role: Director of Product
startDate: "2026-04"
summary: "Form-based configurator for placing exact brand fonts on hero images. Single-canvas rendering pipeline for guaranteed WYSIWYG."
tags: [AI-PM, Eng, Design]
status: shipped
order: 5
---

## The problem

A meaningful slice of our customers — premium apparel and lifestyle brands — need exact brand fonts on hero images. AI-generated text can't match brand typography reliably. It gets close, then ships something Marketing rejects.

## The decision

Replace AI text generation with **direct user control**. A configurator, not a generator.

## What I built

- **Single-canvas rendering pipeline.** One canvas function is the sole source of truth for both preview and export. Whatever the user sees is what gets exported. No second renderer to drift.
- **Resizable text boxes** with drag-to-move + handle-drag-to-resize. Full pan/zoom. Responsive canvas with aspect-ratio fit.
- **Font weights parsed from Google Fonts URLs**, including multi-axis variable fonts. The customer pastes a Google Fonts link; the editor figures out the rest.
- **Save-to-library pipeline.** Canvas → blob → CDN URL → hero library. One click, one path.
- **Toolbar.** Download PNG, save to library. 3×3 position presets with per-element default widths. Text-under layout mode.

## Audit + ship

Ran the full audit pass before engineer review. YELLOW → GREEN after MUST-FIX items: save error handling, text-under colors, blob cleanup, download safety, save-payload metadata. 16 unit tests passing.

## Why this matters

The simple version: AI is excellent at generation when the brand voice is loose. When it's tight — exact pantone, exact letterforms, exact spacing — AI is friction, not a feature. This editor matches the customer's tolerance for visual imprecision, which for premium brands is roughly zero.
