---
title: "Hero Lab Library — making saved creative compound"
company: Backstroke
role: Director of Product
startDate: "2026-06"
summary: "Closed the loop on Hero Lab: saved heroes and backgrounds now live in a searchable library and feed back into future generations, so proven creative compounds instead of being recreated from scratch."
tags: [AI-PM, Eng, Design, Shipped]
status: shipped
featured: false
order: 8
heroImage: ./screenshots/hero-lab-library/cover.png
heroImageAlt: "Hero Lab Library grid of saved hero images, sortable and searchable"
links:
  - label: "Product update"
    url: "https://www.backstroke.com/product-updates/%F0%9F%97%82%EF%B8%8F-a-home-for-your-hero-lab-assets"
---

## What it does

Hero Lab now has a dedicated Library, split into Heroes and Backgrounds tabs. Sort by newest, filter by aspect ratio, date, or source, and search by text across hundreds of saved assets. Editing a hero reopens it in Create mode with everything restored. Saved backgrounds become reusable building blocks — dropped straight into new heroes as a base image, or fed back in as AI reference images.

## The bet

Every hero and background generated in Hero Lab used to disappear after the session it was made in — there was no way to find it again, and fixing a typo meant starting over from a blank canvas. The Library closes that loop: instead of creative resetting every campaign, the best-performing assets compound, feeding forward into future generations instead of being recreated from scratch.

## What I built

This came directly from watching customers use Hero Lab — they were saving hero images with no way to find, edit, or reuse them on the next campaign. I scoped and built a POC of what a library could look like, then put it in front of customers to find out what they actually needed: what kind of editing, what kind of reuse.

I built that feedback into the real implementation, tested it end-to-end, shipped it behind a feature flag, and rolled it out to production.

## Status

Shipped June 2026. All customers are using it, consistently.
