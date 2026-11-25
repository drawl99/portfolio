---
name: Andrés Giraldo Portfolio
description: A chaptered, numbered engineering index of shipped work that scrolls like a film reel.
colors:
  graphite: "#121212"
  graphite-2: "#1b1b1a"
  bone: "#ece8df"
  bone-dim: "#a9a49a"
  ink: "#121212"
  rule: "rgba(236, 232, 223, 0.12)"
  rule-strong: "rgba(236, 232, 223, 0.28)"
  grid-line: "rgba(236, 232, 223, 0.045)"
  orange: "#ff5b1f"
  cobalt: "#2f4bf0"
  cobalt-text: "#8fa2ff"
  lime: "#c6f432"
  sodium: "#ffd02e"
typography:
  display:
    fontFamily: "Bricolage Grotesque Variable, Geist Variable, system-ui, sans-serif"
    fontSize: "clamp(3.5rem, 21.5vw, 21rem)"
    fontWeight: 800
    lineHeight: 0.8
    letterSpacing: "-0.045em"
    fontVariation: "'opsz' 96"
  chapter-giant:
    fontFamily: "Bricolage Grotesque Variable, Geist Variable, system-ui, sans-serif"
    fontSize: "clamp(3.25rem, 11vw, 12rem)"
    fontWeight: 800
    lineHeight: 0.85
    letterSpacing: "-0.05em"
    fontVariation: "'opsz' 96"
  headline:
    fontFamily: "Bricolage Grotesque Variable, Geist Variable, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 4.6vw, 4.75rem)"
    fontWeight: 800
    lineHeight: 0.92
    letterSpacing: "-0.045em"
    fontVariation: "'opsz' 96"
  chapter-title:
    fontFamily: "Bricolage Grotesque Variable, Geist Variable, system-ui, sans-serif"
    fontSize: "clamp(1.5rem, 3.2vw, 2.75rem)"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.035em"
    fontVariation: "'opsz' 48"
  title:
    fontFamily: "Bricolage Grotesque Variable, Geist Variable, system-ui, sans-serif"
    fontSize: "clamp(1.5rem, 3vw, 2.625rem)"
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: "-0.03em"
    fontVariation: "'opsz' 48"
  statement:
    fontFamily: "Bricolage Grotesque Variable, Geist Variable, system-ui, sans-serif"
    fontSize: "clamp(1.625rem, 3.6vw, 3.5rem)"
    fontWeight: 500
    lineHeight: 1.08
    letterSpacing: "-0.03em"
    fontVariation: "'opsz' 48"
  body:
    fontFamily: "Geist Variable, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "JetBrains Mono Variable, ui-monospace, monospace"
    fontSize: "0.75rem"
    fontWeight: 400
    letterSpacing: "0.04em"
    fontFeature: "tnum"
  chip:
    fontFamily: "JetBrains Mono Variable, ui-monospace, monospace"
    fontSize: "0.6875rem"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "0.03em"
rounded:
  none: "0px"
spacing:
  gutter: "clamp(1.25rem, 3vw, 3rem)"
  bar-h: "3.5rem"
  band-h: "clamp(3.75rem, 5.5vw, 4.75rem)"
  chapter-body: "clamp(3rem, 8vw, 7rem)"
  chip-gap: "0.375rem"
  control-h: "2.75rem"
components:
  button-primary:
    backgroundColor: "{colors.orange}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0 1rem"
    height: "{spacing.control-h}"
  button-primary-hover:
    backgroundColor: "{colors.bone}"
    textColor: "{colors.ink}"
  button-secondary:
    backgroundColor: "{colors.graphite}"
    textColor: "{colors.bone}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0 1rem"
    height: "{spacing.control-h}"
  button-secondary-hover:
    backgroundColor: "{colors.bone}"
    textColor: "{colors.ink}"
  button-copy:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.orange}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0 1.1rem"
    height: "{spacing.control-h}"
  button-copy-hover:
    textColor: "{colors.bone}"
  chip:
    textColor: "{colors.bone-dim}"
    typography: "{typography.chip}"
    rounded: "{rounded.none}"
    padding: "0.25rem 0.5rem"
  chapter-band:
    backgroundColor: "{colors.orange}"
    textColor: "{colors.ink}"
    typography: "{typography.chapter-title}"
    rounded: "{rounded.none}"
    padding: "0 {spacing.gutter}"
    height: "{spacing.band-h}"
  chapter-band-cobalt:
    backgroundColor: "{colors.cobalt}"
    textColor: "{colors.bone}"
  top-bar:
    backgroundColor: "{colors.graphite}"
    textColor: "{colors.bone-dim}"
    typography: "{typography.label}"
    height: "{spacing.bar-h}"
    padding: "0 {spacing.gutter}"
  lang-switch-active:
    backgroundColor: "{colors.bone}"
    textColor: "{colors.ink}"
    padding: "0.35rem 0.6rem"
---

# Design System: Andrés Giraldo Portfolio

## Overview

**Creative North Star: "The Engineering Index"**

The site is a printed technical document set on a dark drafting table: a graphite ground ruled with faint 12-column hairlines, bone-colored type, and six numbered chapters, each announced by a solid band of signal color that sticks under the top bar as you read through it. Hierarchy comes from scale and numbering, not from containers: monumental Bricolage Grotesque for names and chapter titles, quiet Geist for reading, and JetBrains Mono for every index, date, count and tag, always bracketed or uppercase.

Density is deliberate and alternating. Each chapter opens loud (a color band, then the chapter title echoed at giant size in the chapter's own color) and settles into calm, ruled reading columns. Motion behaves like film transport: smooth inertial scroll, a pinned horizontal reel for the featured work, text that rises out of a clip. Every motion has a still fallback; reduced motion and narrow screens get the same content as a plain vertical flow.

The material is flat and square. Structure is drawn with 1px rules, never with shadow, glow or rounded cards. Color is reserved for chapter identity and for the single active signal in any region.

**Key Characteristics:**
- Graphite ground with 12-column hairlines; bone text; square corners everywhere.
- One solid band color per chapter (orange, cobalt, lime, sodium, bone), carried into that chapter's giant title and accents.
- Three-voice type: monumental grotesque, reading sans, bracketed mono indices.
- Structure from 1px rules and numbering, not boxes or elevation.
- Pinned, filmic scroll on wide screens with motion allowed; vertical flow otherwise.

## Colors

A near-black, warm-neutral document lit by five saturated chapter signals, used one chapter at a time.

### Primary
- **Signal Orange** (`orange`): the house signal. Bands the About and Contact chapters, fills the primary action, the selection highlight, the focus ring, the terminal caret, the monogram's accent and the active nav index. Contact is fully drenched in it as the closing chapter.

### Secondary
- **Cobalt** (`cobalt`): band color for Experience; carries bone type, not ink.
- **Periwinkle Text** (`cobalt-text`): the legible-on-graphite form of cobalt, used for the Experience giant title, entry numbers and the `@ company` prefix. Raw cobalt never sets text on graphite.

### Tertiary
- **Lime** (`lime`): band for Selected Work; the reel's counter, progress fill, bullet ticks and link hover; the terminal user name and availability dot in the hero.
- **Sodium Yellow** (`sodium`): band for the project index; its indices, title hover and the GitHub tile hover fill.

### Neutral
- **Graphite** (`graphite`): page ground and top bar (at 92% with a 10px backdrop blur).
- **Graphite Lift** (`graphite-2`): the only raised tone; screenshot frames and project-cell hover.
- **Bone** (`bone`): primary text, secondary-button hover fill, active language tab, and the Stack chapter band.
- **Dim Bone** (`bone-dim`): metadata, nav at rest, chips, captions, secondary list text.
- **Ink** (`ink`): type on every light band and on the orange drench; same value as graphite, named for its role.
- **Rule** (`rule`) and **Strong Rule** (`rule-strong`): hairline dividers; strong rules frame timelines, grids, frames and the hero meta row.
- **Grid Line** (`grid-line`): the 12-column hairlines painted on the body background only.

### Named Rules
**The One Band Rule.** Each chapter owns exactly one tone. Its band, its giant title and its accent details use that tone and no other chapter color.

**The Ink-On-Signal Rule.** Type on orange, lime, sodium and bone bands is ink; cobalt is the single exception and carries bone. Focus outlines inside bands switch to ink.

## Typography

**Display Font:** Bricolage Grotesque Variable (with Geist Variable, system-ui)
**Body Font:** Geist Variable (with system-ui)
**Label/Mono Font:** JetBrains Mono Variable (with ui-monospace)

**Character:** A loud, optically sized grotesque set tight and uppercase at poster scale, against a neutral reading sans and an engineer's mono that numbers everything. The grotesque uses the `opsz` axis: 96 at the largest sizes, 48 at heading sizes.

### Hierarchy
- **Display** (800, `display`): the hero name only, uppercase across the full width; the second line is drawn as a bone outline (1.5px stroke, 1px under 560px) with transparent fill.
- **Chapter Giant** (800, `chapter-giant`): the chapter title echoed in uppercase below each band, in the chapter's tone; decorative, hidden from assistive tech.
- **Headline** (800, `headline`): project names in the work reel; balanced wrap.
- **Chapter Title** (700, `chapter-title`): the sticky band heading, preceded by a mono `[0N]` index and followed by an optional superscript count.
- **Title** (700, `title`): experience roles; project-index cells use the same voice smaller (clamp(1.375rem, 2vw, 1.75rem)).
- **Statement** (500 to 600, `statement`): the About paragraph, the Stack word list and the Contact lead; the contact email runs at 800 up to 7rem.
- **Body** (400, `body`): reading text at 0.9375 to 1.0625rem, line-height 1.55 to 1.6, capped at 52 to 72ch.
- **Label** (`label`, uppercase, tabular numerals): nav, indices, dates, counters, actions, captions. **Chip** (`chip`) is its smaller sibling.

### Named Rules
**The Numbered Document Rule.** Every chapter, nav item, entry and project carries a mono index (`[01]`, `01 / 06`, `01`, decimal-leading-zero list counters). Numbers are structure here, not decoration.

**The Two Optical Sizes Rule.** Bricolage runs at opsz 96 for 800-weight poster sizes and opsz 48 for headings and statements; nothing else.

## Layout

Full-bleed sections padded by a single fluid gutter (`gutter`) on both sides; there is no centered max-width container. The body background paints 12 equal columns inside the gutters as hairlines, and that is the implied grid.

- **Top bar:** fixed, `bar-h` tall, three columns (monogram, centered numbered nav, EN/ES switch).
- **Chapters:** each is a sticky band (`band-h`) pinned directly under the top bar, then the giant title, then a body padded `chapter-body` vertically. Anchor scrolling offsets for bar plus band.
- **Hero:** full small-viewport height; prompt, name, then a bottom meta row above a strong rule with role, availability and actions left, grayscale portrait with coordinates right.
- **Experience:** ruled timeline rows on a 3-column grid (4rem index, date column, 3fr content); single column under 760px.
- **Work reel:** on screens wider than 900px with motion allowed, a sticky stage filling the viewport under bar and band; slides are 100vw wide in a horizontal track driven by vertical scroll, with a HUD row (counter, progress rail, hint). Otherwise slides stack vertically, separated by rules.
- **Project index:** auto-fill grid of cells at least 22rem wide, drawn as a ruled table (top/left rules on the grid, right/bottom on each cell).
- **Breakpoints:** 960px (nav drops labels), 900px (reel and hero go vertical), 760px (timeline collapses), 560px (nav scrolls horizontally, tighter type).

## Elevation & Depth

Flat. There are no drop shadows and no glow anywhere in the system. Depth is conveyed by stacking order alone: the translucent blurred top bar, the sticky chapter band sliding over content beneath it, and the one lifted tone (`graphite-2`) for frames and hovered cells.

### Named Rules
**The Ruled, Not Raised Rule.** Separate things with a 1px rule (`rule` or `rule-strong`) or a tone shift, never a shadow.

## Shapes

Square corners on every surface, button, chip, frame, tab and image (`rounded.none`). Borders are 1px; the only heavier line is the 2px ink underline of the contact email and the 2px reel progress rail. The only circles are small functional marks: the availability dot and the 8px outlined dots in the screenshot frame's chrome. Arrows are inline SVG strokes, rotated 45 degrees for outbound links.

## Components

### Buttons
Square, mono, uppercase, tactile through fill swaps rather than movement.
- **Shape:** square corners, at least `control-h` tall, 1px border.
- **Primary:** orange fill, ink label, orange border; hover swaps to a bone fill.
- **Secondary:** transparent with a bone border and bone label; hover fills bone with ink label.
- **Copy (on orange drench):** ink fill with an orange label; hover turns the label bone.
- **Transitions:** background and color over 0.3s on `ease-out`.

### Arrow Links
Mono uppercase label with a 1px currentColor underline drawn as a bottom border and a trailing arrow that nudges 2px up-right on hover (0.35s). Used for "visit site" and profile links; hover color follows the chapter tone.

### Chips
- **Style:** transparent, 1px currentColor border, mono `chip` type, 0.25rem by 0.5rem padding, optional 14px inline SVG tech icon; color inherits (dim bone in content).
- **State:** static tags; no selected state.

### Cards / Containers
- **Screenshot frame:** 1px strong rule, `graphite-2` fill, a mono browser-chrome strip (dots plus URL) above a top-anchored screenshot at 1600 by 840. Projects without a live site get a typographic lime cover instead of a fake screenshot.
- **Project cell:** ruled table cell, no radius, padding clamp(1.25rem, 2.2vw, 2rem); hover lifts to `graphite-2` and restores the thumbnail from 60% grayscale to full color.

### Navigation
- **Top bar:** mono uppercase numbered links in dim bone; hover and active (scroll-tracked `aria-current`) go bone, with the active index in orange. Labels drop under 960px; under 560px the list scrolls horizontally.
- **Language switch:** two square tabs inside a strong-rule border; the active tab is a bone fill with ink text.

### Chapter Band (signature)
Sticky full-width band in the chapter tone with ink type (bone on cobalt), an ink bottom rule, the `[0N]` index, the title, an optional superscript count, and a right-aligned `0N / 06` counter. Followed by the giant uppercase echo of the title in the chapter tone.

### Disclosure
Native `details` with a hairline top rule, mono summary, and a drawn plus (two 1px bars) that collapses to a minus when open; project cells use a rotating chevron. Inner lists are mono-numbered.

### Work Reel (signature)
Pinned horizontal showcase: a slide is a 1.45fr frame beside a 1fr copy column (headline, description, lime-ticked points, chips, arrow links). HUD shows the lime counter, a 2px rail with lime fill scaled to progress, and a hint. Degrades to stacked slides.

## Do's and Don'ts

### Do:
- **Do** give every new chapter one tone from the five and carry it through band, giant title and accents (The One Band Rule).
- **Do** set ink type on light bands and bone type on cobalt; use `cobalt-text` for cobalt-colored text on graphite.
- **Do** number things in mono: `[0N]` indices, `0N / 06` counters, zero-padded list counters, tabular dates.
- **Do** draw structure with 1px rules and keep every corner square.
- **Do** give every scroll or entrance effect a still, vertical fallback under `prefers-reduced-motion` and below 900px.
- **Do** keep screenshots real and top-anchored in the frame; use a typographic cover when no live site exists.

### Don't:
- **Don't** add drop shadows, glows or rounded cards; depth is tone and stacking only.
- **Don't** set raw cobalt text on graphite; it fails contrast.
- **Don't** mix two chapter tones inside one chapter.
- **Don't** introduce a centered max-width container or a sidebar-plus-bento card grid; content runs edge to gutter.
- **Don't** set body paragraphs or descriptions in Bricolage or in mono; Geist reads, Bricolage announces, mono indexes.
