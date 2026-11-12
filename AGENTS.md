# Agent instructions for MotionPilot

MotionPilot is a tool-agnostic set of Agent Skills, **not** a video renderer. The source of truth is the provided media, product documentation and user requirements.

## Operating principles

1. **Comprehension before aesthetics.** Identify the viewer's questions and the specific takeaway of every chapter.
2. **Authentic UI only.** Preserve actual labels, values, navigation, interactions, screenshot geometry and privacy. Never fabricate product screens, metrics or states.
3. **Responsive by direction, not crop.** 16:9 and 9:16 are independently composed shot plans. Do not just center-crop one into the other.
4. **Stable UI by default.** Pan or zoom only where it improves understanding. Use anchored contextual magnification selectively.
5. **Purposeful motion.** Stagger heading then description; hold long enough to read; avoid motion during complex product interactions.
6. **Narration-first audio.** Synchronize speech with verified UI behavior; duck music and use restrained, semantic SFX.
7. **Observable QA.** Inspect actual rendered frames, transitions and audio. Correct blocking issues before delivery. Never conflate technical decode success with user comprehension.

## Before creating artifacts

- Inspect source media and target requirements; never guess missing screens.
- Establish learning goals, audience, duration constraints and output aspect ratios.
- Create a source inventory and scene-by-scene shot plan.
- Choose an editing/rendering engine actually available. Do not claim to have used unavailable tools.
- Check consent/licensing for assets, music, fonts and voice models.

## Repo structure

The installable units are `skills/<skill-name>/SKILL.md`. Each must contain valid `name` and `description` YAML frontmatter and can function independently after selective installation. Do not place essential content in files outside an individual skill's directory unless the main SKILL.md contains sufficient fallback instructions.

`README.md` contains installation documentation. `docs/WORKFLOW.md` explains the full pipeline. `examples/alonepro-walkthrough.json` is a sanitized example, not real project footage.

Validate via `node scripts/validate-skills.mjs`. Test discovery with `npx skills add . --list` (Node 22.20+). Avoid committing large footage, output videos, credentials or voice model weights.

## Delivery reporting

Distinguish clearly between **created files**, **decoded renders**, **visual inspection**, **audio listening**, and **actual audience comprehension tests**. If any stage could not be completed, say so and do not invent a link.
