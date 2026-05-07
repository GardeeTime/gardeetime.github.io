---
title: "Shopify Integration — public App Store launch"
company: Backstroke
role: Director of Product
startDate: "2025-11"
endDate: "2026-04"
summary: "Backstroke's first public Shopify integration — OAuth, GraphQL Admin API, GDPR webhooks. Approved by Shopify on first submission with zero review feedback."
tags: [AI-PM, Eng, Shipped, Strategy]
status: shipped
featured: true
order: 1
heroImage: ./screenshots/shopify-integration/cover.png
heroImageAlt: "Shopify shopping-bag logo — Backstroke is now a listed Shopify app"
links:
  - label: "Shopify App Store listing"
    url: "https://apps.shopify.com/backstroke"
  - label: "Demo video"
    url: "https://www.youtube.com/watch?v=bNSd-GU5zic"
---

## What it does

Connect your Shopify store to Backstroke in one click. Your full product catalog — products, images, variants, collections — syncs in automatically and stays in sync as your inventory changes. From there, marketers use real Shopify product data directly inside Backstroke email campaigns instead of manually copying or updating product info.

## What I built

I drove this end-to-end as a PM, taking the work ~95% of the way to done in a working branch before engineering picked it up for review. Backstroke's first public Shopify integration was **approved by Shopify on first submission with zero feedback from their review team.**

- **Full OAuth flow in Rails**, modeled on the existing Google Drive OAuth pattern: `ShopifyOauth` initializer reading client_id/secret from encrypted credentials, `auth_url` + `callback` endpoints, CSRF state protection, HMAC verification, encrypted token storage. Replaced the legacy credential-paste flow that Shopify deprecated for new apps as of January 2026.
- **GraphQL Admin API migration.** Rewrote `ShopifyClient` from REST to GraphQL — required for all new Shopify apps. Preserved the public client interface so downstream sync services needed zero changes.
- **GDPR mandatory webhooks.** Built `customers_data_request`, `customers_redact`, `shop_redact`, and `app_uninstalled` endpoints with HMAC signature verification. Required to pass app review.
- **Frontend OAuth handoff.** Updated `ShopifyCard` from a credential form to a shop-domain input + "Connect Shopify" redirect. The integrations page handles success/error params on return.
- **Backward compatibility.** Kept the legacy connect endpoint working so existing customers with pasted tokens didn't break during the migration.
- **Stood up a Shopify development store** and validated the entire OAuth + product-sync loop end-to-end before submission, including ngrok-tunneled webhook delivery.
- **Submission package.** Shopify Partner app config, redirect URLs, `read_products` scope justification, GDPR webhook URLs, listing copy. App Store Submission Plan published as a Linear project doc.

## Production rollout — wiring the approved app to serve prod customers

After approval, I caught a gap that would have blocked the actual customer rollout: the App Store-approved app was still pointed at staging URLs, and there was no separate staging app. Turning Shopify on for any prod customer would have failed OAuth.

I **re-architected the original "create a new prod app" plan into a 3-app per-environment model** (Backstroke prod / Backstroke-Staging / Backstroke-Local). Kept the App Store-approved app for prod by repointing its URLs and webhooks rather than creating a new prod app — preserved Shopify's review and saved a multi-week re-review delay.

Drove the work hands-on in terminal: stood up the staging Shopify app, **discovered and documented that GDPR webhook config no longer exists in the new Shopify Dev Dashboard — Shopify CLI / `shopify.app.toml` is the only path now**, configured the TOML and ran `shopify app deploy` to push the webhooks, and opened the PR to swap staging Rails credentials. Established the deploy-sequencing rule (staging Rails creds before prod URL activation) and turned a 35-line wiki stub into a 150-line reference covering the 3-app model, the CLI workaround, credentials structure, and gotchas.

## Why it matters

- **Distribution.** Public App Store presence means Backstroke is now discoverable inside Shopify's marketplace, not just inbound-sales-driven.
- **Customer expectation parity.** Unblocks the "connect Shopify and my products are there" expectation Shopify-first customers had set against Klaviyo's UX bar.
- **Approval signal.** First-submission approval with no review feedback is rare for an integration touching OAuth + GDPR webhooks. Validates the call to mirror the proven Google Drive OAuth pattern rather than invent a new one.
