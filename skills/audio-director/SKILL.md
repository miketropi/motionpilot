---
name: audio-director
description: Design and produce intelligible voice-over, supportive licensed or original background music, semantic sound effects, captions, mixing and mastering for product demo/tutorial videos. Use when adding full audio to SaaS, web app or WordPress walkthroughs in both horizontal and vertical formats.
---

# Audio Director — Narration-Led Production

Audio supports **viewer comprehension**, not sound activity for its own sake. Voice is the primary informational track; music and SFX are supporting layers.

## Mandatory audio order

1. Lock learning outcomes and the evidence-based shot plan.
2. Write narration only for actual visible UI and verified product behavior.
3. Time narration against scene starts, actions and result holds.
4. Choose one consistent appropriate narrator; verify pronunciation and licensing.
5. Add understated music with clean editorial dynamics.
6. Add sparse SFX at meaningful chapter starts, real clicks and verified success events.
7. Mix, normalize, measure, listen, revise and export separate stems.

## Narration writing

Use natural, concise spoken language, not a verbatim reading of heading and description.

- Begin with a task or question: "Now we will add Donor Account to the menu."
- Name the relevant UI area before asking viewers to locate it.
- Narrate actual steps while they are visible; do not mention features absent from footage.
- Explain what changed and why the result matters.
- Pause briefly after complex information.
- Keep utterances within their scene; do not truncate or unnaturally speed speech to match video.
- Avoid unverified numerical claims, fake product capability and personal donor information.

For silent videos, substitute shorter on-screen editorial text and longer stable holds.

## Voice performance

- Choose natural, approachable, professional delivery for tutorials.
- Use one coherent voice unless dialogue is intentional.
- Check pronunciation of AlonePro, WordPress, Gutenberg, WooCommerce, Stripe and product-specific labels.
- Speak steadily with natural phrase breaks and clear consonants.
- Never clone someone's real voice without authorization.
- Respect the terms of the voice engine and voice/model assets.

If TTS produces blank or malformed audio, treat that segment as failed; do not deliver a video with missing sentences. Regenerate, or switch to a consistent alternative **for all segments** as needed.

## Music

- Prefer minimal ambient or understated corporate/technology textures for software guidance.
- Use properly licensed or original music and record its source/rights.
- Avoid aggressive percussion, intrusive bass, tiring loops and sudden loudness changes.
- Duck music smoothly during speech. Keep a stable low-level bed in pauses.
- Align larger musical changes with a chapter, not every mouse click.

## Semantic SFX

Use subtle clicks for real interactions, restrained whooshes for major chapter handoffs and one short success cue for a verified result. Do not add sounds to every heading animation or every cut. SFX must not be mistaken for actual product behavior.

## Technical mix

- Deliver editable stems: `voiceover.wav`, `background_music.wav`, `sound_effects.wav` plus master audio.
- Typical target for online guided video: around -16 to -18 LUFS integrated, true peak ideally ≤ -1 dBTP; meet destination/platform requirements where they differ.
- Use modest high-pass, compression and limiting where needed.
- Check short-term loudness and avoid audible pumping from ducking.
- Export 48 kHz stereo AAC with MP4 and preserve high-quality WAV master.
- Generate captions/subtitles with timecodes; verify text against actual speech.

**Numbers are targets, not proof of quality.** Always listen to beginning/middle/end on headphones and a small speaker, plus check actual sync.

## 16:9 and 9:16

Narration content may be reused for the same learning objectives, but an independently recut 9:16 shot may have different timing. Retiming must be checked per format. Do not silently slow video, alter speech quality or cut off words to preserve one master duration.

## QA gates

- Every required narration segment audible and finished.
- Names and UI terminology correctly pronounced.
- Narration aligns with visible real UI state and result.
- Music never masks speech; SFX feel intentional, not repetitive.
- No clipping, harsh transients, unexplained silence or abrupt music edits.
- Stem lengths, sample rates, timecodes and final AAC stream verified.
- Privacy, recording consent, sample rights and voice model licensing checked.
- Report human listening and viewer comprehension as **not tested** if you only ran signal/codec tools.

The official Remotion and ElevenLabs audio skills are useful references, but this skill does not require or falsely claim access to either provider.
