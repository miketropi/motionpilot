# MotionPilot workflow

This is the authoring workflow for an AI production agent. The seven SKILL.md files are installable individually; this document provides project-level coordination.

## 0. Inputs and assumptions

Capture: filenames, content type, codec, resolution, frame rate, source start/end, interface region, privacy risks, branding and known features.

Declare:
- Intended audience and viewer question.
- Learning outcomes: what they can explain or do after watching.
- Objective: tutorial, product walkthrough, onboarding, launch promo.
- Required outputs: 16:9 / 9:16 / 1:1 / 4:5 and optional subtitles/audio.
- Requested or available rendering tools; no engine is implied.

## 1. Learning map

For each chapter identify: question, answer, actual UI evidence, focus region, interaction, verified result and takeaway.

Use `Introduce → Orient → Demonstrate → Hold → Reinforce`, adjusting pacing to complexity. Avoid putting 10 dense steps in a one-minute promo.

## 2. Source-backed storyboard

Every shot should provide:
- stable ID;
- source filename and timestamp range;
- story claim/message;
- verified UI target;
- shot type;
- behavior (static overview, focused crop, contextual magnification, real interaction);
- distinct aspect-specific compositions;
- title, description, narration, SFX events;
- hold/readability expectation;
- privacy masks and limitations.

A contextual close-up only earns a place if the target cannot be read in another form. Do not always put overview + zoom side by side.

## 3. Style system

Choose a primary type family, restrained accent and muted background treatment. Keep overlay typography distinct from the actual UI. Use consistent heading/description motion and purposeful, varied chapter transitions. Avoid randomly selected effects.

Example motion:
- heading: fade + rise 300–650 ms;
- description: enters 200–400 ms after heading;
- stable hold: as long as needed to read and understand;
- brief transition between different concepts;
- app remains stable through critical actions.

## 4. Aspect-specific direction

Landscape: show authentic desktop layout at a readable width; captions can sit beside UI.

Portrait: use readable UI regions, context-to-detail sequences, stacked editorial layers. Keep safe areas for mobile platform overlays.

Each version gets its own framing, anchor, typography, safe areas, durations, privacy checks and QA. One render must never be auto-cropped into another and accepted without review.

## 5. Audio

Narration names the task, demonstrates actions and confirms results. Trim/extend scenes to speech-safe lengths rather than damaging natural voice timing. Use a restrained low-level original/licensed score and sparse semantic SFX. Keep editable WAV stems and caption/SRT timing.

## 6. QA and release

- Inspect all first/last UI states, major transitions and targeted focus regions.
- Review real-time playback for scrolling, pan jitter, unreadable labels and cut-off results.
- Review audio listening separately from codec tests.
- Verify export dimensions, fps, codec, full decoding and real downloadable file.
- Run audience comprehension check if possible. Otherwise state that it was not performed.

## Sample artifact set

`asset-inventory.md` · `storyboard.md` · `shot-manifest.json` · `video-landscape.mp4` · `video-portrait.mp4` (when requested) · `voiceover.wav` · `background_music.wav` · `sound_effects.wav` · `subtitles.srt` · `QA_REPORT.md` · editable source.

Do not generate unnecessary deliverables and do not imply unavailable background/asynchronous rendering. Use the actual environment and permissions available in the task.
