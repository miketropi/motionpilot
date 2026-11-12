---
name: responsive-video
description: Direct digital-product videos for landscape 16:9, portrait 9:16, 4:5, 1:1 and custom ratios with independent framing, text, motion and QA. Use when adapting wide desktop application footage to mobile Shorts/Reels or producing multi-format videos without destructive cropping.
---

# Responsive Video Art Direction

**Responsive ≠ crop/resize.** Share the learning goal and product source across formats, but compose each aspect ratio independently.

## Output profiles

| Format | Typical output | Common context |
| --- | --- | --- |
| Landscape | 1920×1080 (16:9) | YouTube, websites, presentations |
| Portrait | 1080×1920 (9:16) | Shorts, Reels, TikTok |
| Social portrait | 1080×1350 (4:5) | Social feed |
| Square | 1080×1080 (1:1) | Square social |
| Hi-res | 3840×2160 or 2160×3840 | When source supports it |

Prefer 30 fps unless there is a justified 60 fps source/delivery requirement. Do not upscale low-detail source and call it native 4K.

## Required adaptation process

For every shared chapter, create distinct plans for:
- UI viewport and readable content region.
- Camera source bounds, anchor, scale and travel.
- Heading size, line breaks, caption placement and reading hold.
- Overlay safe areas and platform controls.
- Motion path, transition direction and chapter pacing.
- Privacy masks and export quality.

Use normalized bounds (0–1) and derive pixels for each canvas, but **do not** reuse one aspect ratio's focal geometry or keyframe coordinates blindly.

## Landscape 16:9

- Prioritize real dashboard relationships and flows that benefit from width.
- Use browser window framing when it adds context; otherwise the UI can take most of the frame.
- Favor horizontal UI with a concise editorial sidebar or brief captions, provided they do not shrink the UI beyond legibility.
- Prefer static context plus occasional meaningful close-up to continuous camera movement.
- Preserve real interaction order and labels.

## Portrait 9:16

- Never squeeze all of a dense desktop dashboard into a tall canvas as the only readable view.
- Start with brief context, then use focused verified UI regions.
- Use vertical editorial layouts (heading → actual UI focus → takeaway) when they fit the content.
- Selectively layer a small overview and larger detail **only where needed**; avoid this pattern as a default for every scene.
- Respect UI overlays and bottom controls on social platforms.
- Reduce simultaneous information and use larger relative type.

## Safe-area profiles

Defaults are planning guards, **not universal platform specifications**:
- Landscape overlay margins: about 5–8% at canvas edges.
- Social portrait initial protection: about 10% top, 18% bottom, 15% right for platform UI.
- Verify against real platform screenshots/guides before final distribution.

Narrative content and labels must remain legible if app overlays cover nonessential margins.

## Camera math & motion

Use source-relative region data:
`focus = {x, y, width, height}` normalized in source space.

Compute a uniform scale that fits this region into the available safe viewport; center around the real source anchor. Apply smooth transforms, not stepwise rounded crop coordinates. Never distort original aspect ratio. Maintain a few hundred milliseconds of settling time after camera movement.

## Multi-format QA

Do not sign off on 9:16 from a successful 16:9 render or vice versa. Check each output for:
- Essential controls and labels visible/readable.
- No letterbox misuse or UI distortion.
- All privacy masks attached to the original UI.
- Camera anchor continuity and no jumps.
- Platform-safe text positions and readable overlays.
- Correct width, height, fps, codec, audio synchronization.
- Viewer takeaway still understandable at native device size.

If footage cannot support a format without becoming illegible, explain the limitation and request/recommend better source, not invented responsive app UI.
