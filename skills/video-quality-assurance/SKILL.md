---
name: video-quality-assurance
description: Audit AI-edited product videos for viewer comprehension, true-to-source UI fidelity, frame and motion consistency, responsive layout, privacy, narration synchronization, audio quality and deliverable integrity. Use before final export or when users report jerkiness, bad cropping, unclear tutorials or audio issues.
---

# Video QA — Evidence Before Score

A renderer returning exit code 0 means little about whether a viewer can understand the video. Review actual visual and audio outcomes.

## Mandatory layers

### 1. Product/UI correctness
- Identify every featured UI element in original source footage/screenshot.
- Check that no action, label, value, success screen or claim is fabricated.
- Verify genuine temporal order and result.
- Scan personal/donor data, including cropped magnified panels and subtitles.

### 2. Comprehension and orientation
- One primary concept per scene/chapter.
- Viewer knows where they are before seeing a detail.
- Caption or narration introduces the UI before expecting recognition.
- UI text readable at realistic playback size.
- Results stay visible long enough to understand.
- Viewers have time to mentally transition between concepts.

### 3. Composition and aspect ratios
- Check 16:9, 9:16, 4:5, 1:1 exports independently if delivered.
- All UI scaled uniformly; no destructive crop hides critical data.
- Correct safe areas, captions and browser/device frame proportions.
- Selective magnification linked to correct real source region/time.
- Avoid permanently tiny full UI in vertical cuts.

### 4. Motion and temporal continuity
Inspect at start, 25%, 50%, 75%, end of important animations; review every chapter-to-UI handoff and representative continuous playback.

Block: stepwise crop jitter, camera jumps, accidental overlap, clipping, sudden scale/brightness shifts, misleading cursor clicks, awkward temporal holds, hard flicker or unexpected padding.

### 5. Audio
Listen to representative beginning, middle, ending and important UI events. Verify intelligibility, terminology, scene sync, music ducking, non-overpowering SFX and no clipped sentences. Validate LUFS, true peak, channels and codec where possible.

### 6. Technical
Validate duration, aspect ratio, width/height, fps, codec, decode of full MP4, audio stream, caption timecodes, platform compatibility and editable project reproducibility. Verify actual file path/URL before offering downloads.

## Quality weighting

Default rubric:
- Viewer comprehension: 35%
- Product fidelity & information correctness: 25%
- UI legibility & frame composition: 15%
- Motion continuity & effect restraint: 10%
- Audio quality & synchronization: 10%
- Technical export: 5%

For silent video, reallocate audio weight to comprehension and UI legibility; never pretend audio is present.

**Auto-fail regardless of score**: inaccurate product behavior, data exposure, destructive clipping, unreadable critical UI, severe jitter, inaudible required speech, broken timecode, corrupted video, unlicensed asset or missing required deliverable.

## Report format

Write `QA_REPORT.md` with:
1. Asset inputs and inspected source scope.
2. Outputs and exact technical facts.
3. Tested checks (method, time range, pass/fail).
4. Actual defects found and corrected (before/after).
5. Remaining limitations, notably source detail quality.
6. Audio listening and audience comprehension study status.
7. Release decision: PASS / PASS WITH LIMITATIONS / FAIL.

Distinguish:
- **Verified**: checked via tool output or direct inspection.
- **Observed**: spot-checked limited scenes.
- **Assumed**: design intent only (cannot be represented as passed).
- **Not tested**: no empirical viewer evaluation.

## Audience test

Ask a first-time viewer 3–5 questions without coaching after one viewing. Record correct answers, uncertainty, rewind moments and what action they would take next. If unavailable, score visual and technical quality but explicitly leave comprehension **Not tested**.

Never invent a 90/100 quality score just to satisfy a target.
