# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Two audiences, weighted equally:

- **Recruiters and hiring engineers** evaluating a full stack engineer for a role. They skim fast, want proof of depth (stack, scale, how he works) and a way to contact him or get the CV.
- **Prospective freelance clients** (small businesses and founders in Colombia and abroad) looking for someone to build a website or system. They want to see shipped, live work and an easy way to start a conversation.

## Product Purpose

Personal portfolio of Andrés Giraldo, Full Stack Software Engineer in Cali, Colombia. It shows who he is, the work he has shipped (company products and independent projects), how he works, and makes it easy to contact him. Success: a visitor of either audience reaches out (email, LinkedIn, WhatsApp) or keeps the CV.

## Positioning

An engineer who owns products end to end (database, services, frontend, CI/CD, production) on real Colombian products (Controlo, Exploreti, NITOR), and who builds AI-assisted development workflows (Claude Code plugins, gentle-ai ODD) that his team uses daily.

## Operating Context

- Content source of truth: `cv.json` (EN) and `src/i18n/cv.es.json` (ES), JSON Resume-like schema (basics, work, education, certificates, skills, languages, projects).
- Static Astro site deployed on Cloudflare Pages (`pnpm deploy`).

## Capabilities and Constraints

- Bilingual EN/ES is required, with a language switch (EN default, `/es/` prefix).
- Decided to drop in the redesign: the `/neovim` alternate view, the multi-palette theme selector, and the light/dark toggle.
- Must stay static and fast (no heavy WebGL); content-heavy experience and project sections must remain legible.
- Projects without a live site (private repos, unreleased products) must not get fake screenshots.

## Brand Commitments

- Name: Andrés Giraldo. Role: Full Stack Software Engineer. Location: Cali, Colombia.
- Profile photo at `public/` (existing asset).
- Visual references the user explicitly liked: imflorea.dev, kaveenk.com, ludovicargenty.com, especially ludovicargenty's scroll experience (smooth scroll, pinned horizontal project showcase with counter and progress bar, sticky chapter headers).

## Evidence on Hand

- Real work history and project descriptions in `cv.json` / `src/i18n/cv.es.json`.
- Live sites for screenshots: controlo.co, exploreti.com, nitor.com.co, pokebonkhub.com, diefersas.com.co, parkingmobile.co, prestafy-six.vercel.app, viveros-chess-production.up.railway.app, erica-viveros.pages.dev, landing-rewards.pages.dev.
- No testimonials, client quotes or metrics beyond those already in the CV data; do not invent any.

## Product Principles

1. Proof over claims: show shipped, live work first.
2. Scannable for a recruiter in 30 seconds, deep enough for an engineer in 5 minutes.
3. One clear path to contact from anywhere on the page.
4. Craft is part of the pitch: the site itself must feel built with care, without sacrificing speed or legibility.

## Accessibility & Inclusion

Respect `prefers-reduced-motion` (smooth scroll and pinned/horizontal effects degrade to normal scrolling), keep body text at readable sizes and WCAG AA contrast, and keep keyboard navigation working.
