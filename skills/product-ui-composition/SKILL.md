---
name: product-ui-composition
description: Present real web-app and SaaS interfaces accurately in product videos. Use when converting desktop screenshots or screen recordings into cinematic compositions, choosing readable zoom regions, preventing crop/jitter, preserving workflow fidelity, or protecting sensitive data.
---

# Authentic Product UI Composition

The application is the subject. Effects are secondary. **Preserve real UI truth** even when it restricts cinematic options.

## 1. Classify and verify input

For every asset, record the exact source, dimensions, timestamp, UI screen/state, focal controls, background and sensitive regions. Group images as overview, feature, interaction, detail, result or branding. Track evidence: source + time + verified action/label.

Never invent features, statistics, buttons, charts, success states or mobile-responsive layouts. For unsupported states, ask for genuine footage or flag a gap.

## 2. Safe composition

- Preserve source proportions and recognizable component relationships.
- No nonuniform scaling of screenshots or recorded UI.
- No automatic `object-fit: cover` or center-crop that hides essential controls.
- Keep UI clearly readable at final viewing size, not only at editing resolution.
- Frames, shadows and rounded corners must fit the true browser/device content.
- Make crop decisions in normalized source coordinates and document what was removed.
- Full-screen overview is an **orientation tool**, not a mandatory persistent miniature.

## 3. Choose the focus strategy (in order)

**A. Full UI / wide overview** — when navigation and layout context are the story and still readable.

**B. Focused static crop** — when a single region is all that matters and its origin was established; use verified pixels, not recreated UI.

**C. Contextual magnification** — when the real UI detail is too small, and readers must understand where it belongs. Combine:
- An undistorted overview layer, usually static and sufficiently visible to orient.
- A highlight rectangle anchored to the verified source region.
- A separate magnified panel showing the **same region and same time/state**.
- A subtle connector/anchor only when it improves correspondence.
- A stable hold after the detail appears.

**D. Guided interaction** — when movement and an actual sequence are crucial, preserve real cursor actions and result.

Use the least complicated strategy that communicates the feature.

## 4. Selective zoom gate

Before zooming, answer yes/no:
1. Is the detail actually unreadable without magnification?
2. Does the detail matter to the claim?
3. Can the detail be shown alone without losing essential context?
4. Can the viewer recognize the location of the detail?
5. Can the same thing be explained more simply with one caption?

If magnification is unnecessary, don't use it. Do not repeat overview + zoom in every shot. Variation should come from meaning, not artificial visual noise.

## 5. Anti-jitter camera & timing

- Prefer a stable camera during critical reading or form input.
- Never animate a moving crop window using stepwise integer rounding frame-by-frame.
- Prefer deterministic subpixel transforms, source-anchored interpolation and a smooth, deliberate ease.
- At scene boundaries, match shared UI anchors or intentionally hard-cut; avoid accidental spatial jumps.
- Inspect motion start, midpoint, end and the boundary between shots in actual playback.
- Disable camera drift/handheld shake for SaaS UI as a default.

Reference motion: short gentle pushes, purposeful track, match cuts and stable result holds — not endless slow pans.

## 6. Privacy

Audit every face, name, email, phone, mailing address, payment card and donor record. Redact before publishing. Verify masks throughout source movement, close-ups and all export aspect ratios. Never expose private data in narration, subtitles, filenames or screenshots of QA.

## Delivery

A shot manifest must list source media/time, focus region, composition strategy, crop coordinates (if any), privacy masks, reason for zoom, expected result, and final export checks. The reviewer must be able to identify exactly what real source pixels are shown.
