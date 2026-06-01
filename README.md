# Floating Paradise Website

Production website and Sanity CMS for Floating Paradise, a boutique stay and experience platform in Karimunjawa. The project is built with Next.js, uses Sanity for editable content, and deploys through Vercel.

## Overview

This repository contains:

- Public marketing website with localized English and Indonesian routes.
- Sanity Studio mounted at `/studio`.
- CMS schemas for homepage, rooms, explore items, yoga retreat, getting here, about page, FAQ, and site settings.
- Tripla booking integration handled in code.
- Hardcoded fallbacks for key content so the public site remains stable if selected CMS fields are empty.

## Tech Stack

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS
- Sanity CMS
- Vercel Analytics
- Tripla booking widget

## Project Structure

```text
app/                         Next.js routes, layouts, pages, and Sanity Studio route
components/                  Shared UI and website sections
lib/                         Sanity client, fetch helpers, images, Tripla helpers
sanity/schemas/              Sanity document schemas
sanity/plugins/              Custom Sanity Studio plugins, including the welcome dashboard
scripts/                     One-off CMS migration and seed scripts
public/                      Static images and public assets
docs/                        Internal CMS guide documents
```

## Environment Variables

Create `.env.local` from `.env.example`:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET="production"
SANITY_API_READ_TOKEN=
SANITY_API_WRITE_TOKEN=
SANITY_REVALIDATE_SECRET=
```

Notes:

- `NEXT_PUBLIC_SANITY_PROJECT_ID` and `NEXT_PUBLIC_SANITY_DATASET` are required for the website and Studio.
- `SANITY_API_READ_TOKEN` is used when private/read-token access is needed.
- `SANITY_API_WRITE_TOKEN` is only needed for migration or seed scripts that write to Sanity.
- `SANITY_REVALIDATE_SECRET` protects the CMS webhook endpoint used for on-demand page refreshes.
- Do not commit real tokens or `.env.local`.

## Local Development

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open:

- Website: `http://localhost:3000`
- Sanity Studio: `http://localhost:3000/studio`

## Useful Commands

```bash
npm run dev
npm run build
npm run start
npm run lint
npx tsc --noEmit
npx sanity schemas validate
```

## CMS Editing Rules

The CMS is designed for safe content editing, not structural redesign.

Safe to edit:

- Text content, titles, descriptions, and body copy.
- Images and galleries.
- Prices and price details where fields exist.
- Contact information, WhatsApp, and social links.
- Existing FAQ items and categories.

Do not edit without developer review:

- Slugs.
- New rooms or bungalows.
- New Explore items.
- New transfer cities on Getting Here.
- Booking integration or Tripla room IDs.
- Large layout or navigation changes.

## Tripla Booking

Tripla booking is intentionally handled in code through official Tripla IDs in `lib/tripla.ts`. CMS editors should not add or edit booking URL fields. If Tripla room IDs or facility details change, update the code and verify the booking flow before deploying.

## Sanity Content Scripts

Some scripts require a write token:

```powershell
$env:SANITY_API_WRITE_TOKEN="your-write-token"
node scripts\seed-getting-here-page.mjs
```

Only run write scripts after confirming the target dataset and expected document changes.

## Sanity Webhook Revalidation

The production site uses cached pages for performance. To refresh pages immediately after CMS publishing, configure a Sanity webhook that calls:

```text
https://floatingparadise.id/api/revalidate?secret=<SANITY_REVALIDATE_SECRET>
```

Recommended webhook settings:

- Dataset: `production`
- Trigger: create, update, publish
- Projection/body: include at least `_type`, `_id`, and `slug`
- Secret: match the `SANITY_REVALIDATE_SECRET` value configured in Vercel

The endpoint maps Sanity document types to affected pages and calls `revalidatePath` for those routes.

## Deployment

The production branch is `main`. Pushing to `main` triggers the connected Vercel deployment.

Before pushing production changes, run:

```bash
npx tsc --noEmit
npx sanity schemas validate
```

For frontend or CMS UI changes, also check the affected pages locally where possible.

## Maintenance Notes

- Keep generated files out of commits unless they are intentionally required.
- Keep CMS guides aligned with the actual Sanity schemas and frontend behavior.
- Prefer fallback-safe CMS changes: empty optional fields should not break public pages.
- Treat booking, routing, and slugs as code-owned behavior.
