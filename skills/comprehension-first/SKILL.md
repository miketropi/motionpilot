---
name: comprehension-first
description: Structure digital-product videos around viewer understanding, learning outcomes, readable pacing and proof from real UI. Use when tutorials feel too fast, feature demos are confusing, chapters lack meaning or visual storytelling needs to communicate what users should remember.
---

# Comprehension-First Video Storytelling

A video succeeds only if the intended audience can correctly describe the feature or workflow afterward. Do not substitute slower playback for clearer explanation.

## 1. Define the learning contract

For the intended audience, write:
- **Prior knowledge** — what can they reasonably recognize already?
- **Questions** — what do they need answered?
- **Outcomes** — actions or distinctions they should be able to repeat.
- **Evidence** — authentic application states or behavior for each outcome.
- **Common misconceptions** — likely points of confusion.

Example: "A donor can distinguish Recognition, Digital and Physical rewards"; not "Show three UI tabs."

## 2. Plan by concepts, not by screenshot count

One chapter should answer one meaningful question. Prefer 4–6 connected concepts in an overview. Move advanced admin settings to a dedicated guide when covering them would overload the core story.

Use this pattern when appropriate:

1. **Pre-signal** — say what viewers are about to learn. It may be a 1–3 s chapter prelude, but only when changing concepts.
2. **Orient** — show where the user is in the real app.
3. **Explain** — state why this action matters in ordinary language.
4. **Demonstrate** — show one verified action or accurate state.
5. **Result** — hold the real response long enough to understand.
6. **Takeaway** — reinforce the idea in a short sentence.

Do not narrate every button click when a concise explanation of the outcome would be better.

## 3. Allocate time according to cognitive work

Scene duration is driven by reading load, interface complexity, cursor action and narration — **not** uniform slideshow beats.

- A simple chapter label may take 1–2 s plus a stable reading hold.
- A new multi-step workflow may require 8–25 s or longer.
- A technical UI may need a context shot, focused shot, slow action and result.
- Stop movement while complex text or configuration must be read.
- Do not cut immediately after a result first appears.
- Reserve time for audience orientation after changing locations or applications.
- If audio is present, allow natural phrasing and breath before moving on.

These are editorial starting points, not hard limits; observe real user comprehensibility.

## 4. Use cognitive load intentionally

- Introduce terms **before** asking viewers to recognize them in dense UI.
- Keep one primary message and visual focal point per beat.
- Use visual signaling (region outline, pointer, highlight) to locate relevant controls.
- Remove redundant callouts and decorative elements that compete with the task.
- Segment distinct concepts; avoid repeated mandatory title cards for micro-steps.
- Make text and visible actions complement rather than repeat each other.
- Prevent split attention between distant microtext and unrelated narration.

## 5. Storyboard acceptance fields

For every chapter produce:
`audienceQuestion`, `answer`, `sourceEvidence`, `visualFocus`, `action`, `result`, `takeaway` and `comprehensionCheck`.

Example:

| Field | Example |
| --- | --- |
| Question | How can a visitor find Donor Account? |
| Evidence | WordPress menu editor and site navigation |
| Action | Add the page to the primary menu and save |
| Result | Public navigation shows Donor Account |
| Takeaway | Menu changes are not verified until viewed on site |
| Comprehension check | Can a first-time user name the next step? |

## 6. Comprehension review

Ask a fresh viewer to watch once at normal speed, then answer 3–5 questions without hints. Record:
- Accuracy of recall and next action.
- Scenes they rewind or cannot explain.
- Whether visual focus matched the explanation.
- Points where they lost context.
- Speech readability and pacing.

If no study is run, mark **Comprehension: Not tested**. Self-assessment and clean decoding are not substitutes.

## Special cases

Silent videos: use short captions and deliberate holds. Short social videos: teach one memorable outcome rather than claiming complete tutorial coverage. Long tutorials: provide chapter structure and periodic recaps, not constant visual motion.

Applies equally to horizontal and vertical videos; change the framing independently, not the learning goal.
