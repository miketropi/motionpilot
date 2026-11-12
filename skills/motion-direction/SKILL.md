---
name: motion-direction
description: Plan and refine purposeful motion for screen-recorded product demos, including chapter introductions, typography choreography, camera reframing, UI focus and scene transitions. Use to improve polish without creating jitter, distracting effects or loss of viewer comprehension.
---

# Motion Direction — Precision Before Spectacle

Act as a senior motion designer. Motion should **show what matters**, maintain continuity and allow information to settle.

## Motion hierarchy

1. Verified product interactions (actual source behavior).
2. Attention guides (target highlight, verified detail).
3. Chapter communication (heading, description, takeaway).
4. Transitions between genuinely different ideas.
5. Supporting decoration only if it clarifies hierarchy.

Do not animate the real WordPress/SaaS screen itself just to look alive.

## Chapter prelude choreography

Before each major concept change, optionally show a short editorial title treatment:
1. **Signal**: small index or chapter context.
2. **Heading**: fade + subtle rise, 300–700 ms.
3. **Description**: delayed by roughly 180–400 ms, fade + 8–24 px rise.
4. **Read**: hold both still long enough for normal reading, ideally after narration.
5. **Handoff**: transition smoothly to the real application view.

These timings are adaptable defaults, not universal constraints. Avoid ten compulsory intros for ten micro-actions.

## Approved motion grammar

Choose a small, consistent family per video:
- **Editorial Rise:** short vertical translation with soft ease-out, then fixed hold.
- **Line/Accent Reveal:** brand line appears as a visual boundary; never before the primary headline is legible.
- **Split Reveal:** heading and supporting copy enter in sequence; use for major section changes only.
- **Shared-Anchor Match Cut:** transition between a UI overview and actual related detail.
- **Soft Dissolve:** between distinct concepts; never blur or mask important UI clicks.
- **Contextual Zoom:** selective detail magnification with stable source-linked context.

Avoid random transitions, excessive glow/particles, jarring glitches, fake perspective rotations, over-bouncy motion and omnipresent zoom.

## Timing reference

| Animation | Initial range |
| --- | --- |
| Hover | 150–240 ms |
| Click feedback | 100–180 ms |
| UI microinteraction | 180–350 ms |
| Panel/title entrance | 350–700 ms |
| Camera reframe | 500–900 ms |
| Scene handoff | 250–700 ms |
| Major hero reveal | 700–1400 ms |
| Result hold | Content-dependent; often 1–3 s or more |

Recommended ease: `cubic-bezier(0.22, 1, 0.36, 1)` for ease-out, `cubic-bezier(0.76, 0, 0.24, 1)` for in-out. Do not use linear movement as a blanket default. Spring motion may help physical objects but should rarely be applied to static UI screenshots.

## Camera discipline

- Stable camera is the default.
- Choose pan, push, pull or track only to reveal a relationship or improve reading.
- A tiny 1.05–1.20x push may add emphasis, but bigger moves are justified only by legibility.
- Never crop-pan via round(x) or integer-stepped ROI per frame: it creates stutter.
- Maintain spatial continuity across cuts; isolate UI anchors from camera layer.
- Let titles settle before demanding attention to a busy application interaction.

## Effects quality checklist

- Avoid masks overlapping relevant controls.
- Keep blur off legible UI; reserve motion blur for fast moving decorative layers.
- Use consistent shadows, border radii, typography and accent color.
- Confirm motion in video playback at real speed, not only a static contact sheet.
- At 0%, 25%, 50%, 75%, 100% of each critical move, inspect collision, cropping, easing and aliasing.
- Verify chapter title → first UI frame and result → takeaway transitions separately.

## Motion variation that is not arbitrary

Vary framing and pacing based on concept: an overview uses stable width; an instruction uses actual cursor behavior; a detailed setting uses a focused UI region; a result uses a hold; a new chapter uses a short typographic transition. **The story chooses the motion pattern**, never a random effect generator.
