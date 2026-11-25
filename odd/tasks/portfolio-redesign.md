# Portfolio redesign

Objective: full redesign of the portfolio fusing imflorea.dev, kaveenk.com and ludovicargenty.com (scroll experience).
Branch: `feat/redesign`. Delivery: work-unit commits on the branch, push/PR is the user's call. Test runner: none (static Astro site); checks are `pnpm build` (astro check + build), the Impeccable detector and browser verification at desktop and mobile.

## Specs

- S1: "podriamos hacer un rediseño completo con cosas de los 3" (imflorea.dev, kaveenk.com, ludovicargenty.com).
- S2: "me gusto el efecto del scroll en el de https://ludovicargenty.com/" — smooth scroll (Lenis), sticky colored chapter headers, pinned horizontal project showcase with `01 / 06` counter and START–END progress bar.
- S3: Audience is recruiters and freelance clients equally (PRODUCT.md).
- S4: Keep bilingual EN/ES. Drop the `/neovim` view, the multi-palette theme selector and the light/dark toggle (user selected only "Bilingüe EN/ES" to survive).
- S5: Project images: "tu puedes tomarlas con las que estan en vivo y tengas acceso de tomar los screens". Projects without a live site get a typographic cover, no fake screenshots.
- S6: Approved direction: terminal hero (`whoami`) + huge name; numbered nav `[01]…[06]` with project count; numbered experience timeline with collapsed detail; huge section titles and faint grid lines; graphite ground, bone text, chapter colors orange/cobalt/lime/yellow; Bricolage Grotesque display, Geist body, JetBrains Mono labels; self-hosted fonts.
- S7: `prefers-reduced-motion` and mobile fall back to normal scrolling and a vertical project stack.

## Tasks

| ID | Specs | Route | Status | Commit |
|---|---|---|---|---|
| T0 | — | inline | done | c2e239a (CV content from earlier in session) |
| T1 | S5 | inline | done | a09734c |
| T2 | S1, S6 | inline | done | 9f80ffb |
| T3 | S1, S2, S6, S7 | inline | done | 9f80ffb |
| T4 | S4 | inline | done | 9f80ffb |
| T5 | all | inline + finish review subagent | in progress | |
| T6 | all | documenter subagent | pending | |

T1 screenshots · T2 layout, fonts, tokens, nav, hero · T3 chapters (about, experience, work showcase, index, stack, contact) with Lenis and pinned scroll · T4 remove neovim pages, theme switch, keyboard manager, leftover template CV PDF · T5 verify desktop/mobile + detector + finish review · T6 DESIGN.md.

Route evidence: single coherent visual system sharing tokens and layout; units are not independent, so no Writer trigger; parent writes inline.

## Log

- L1 (2026-11-25): "me gusto mucho los portafolios que me nombraste, podriamos hacer un rediseño completo con cosas de los 3, me gusto el efecto del scroll en el de https://ludovicargenty.com/"
- L2: Init answers — audience "Ambos por igual"; survive "Bilingüe EN/ES"; images "tu puedes tomarlas con las que estan en vivo y tengas acceso de tomar los screens".
- L3: User approved the direction: "Yes, build it".
- L4: Found `public/anmol.pdf` is a template author's CV, not Andrés's; remove it, and no CV download button until he provides one.
- L5: T1–T4 built. Evidence: `pnpm build` 0 errors/0 warnings; Impeccable detector `[]`; browser checks at 1440x900 and 375x812 (EN and ES): hero, sticky bands, reel pinned with counter/rail/percent, index, stack, contact; mobile reel stacks vertically, no horizontal overflow. Fixed during verification: reel HUD grid width, UTC year for education dates, mobile band wrap, mobile hero gap. Landing-rewards.pages.dev did not respond, PrestaFy only shows login: typographic covers / no thumbnail.
- L6: User: "saca una landing de las destacadas y mete el de viveros chess" → chose "Parking Mobile". Viveros Chess featured 4th, Parking Mobile moved to the index.
- L7: User: "y saca de los proyectos a rewardsapp landing y claude plugins". Removed both from EN/ES data; 12 projects remain (6 featured, 6 in the index).
- L8: User: "los repos que sean privados no le pongas link de gh". Checked with gh api: ecommerce, viveros-chess, prestafy are private → github link removed; erica-viveros and portfolio stay public.
