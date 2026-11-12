#!/usr/bin/env node
// Zero-dependency structural check. Content-specific visual/auditory QA still requires an actual render.
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { join, resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const skillsDir = join(root, 'skills');
const dirs = readdirSync(skillsDir, { withFileTypes: true }).filter(x => x.isDirectory()).map(x => x.name).sort();
const errors = [];
const expected = ['motionpilot', 'comprehension-first', 'product-ui-composition', 'responsive-video', 'motion-direction', 'audio-director', 'video-quality-assurance'];

for (const dir of expected) {
  if (!dirs.includes(dir)) errors.push('Missing skill: ' + dir);
}
for (const dir of dirs) {
  const path = join(skillsDir, dir, 'SKILL.md');
  if (!existsSync(path)) {
    errors.push('Missing SKILL.md: ' + dir);
    continue;
  }
  const data = readFileSync(path, 'utf8');
  if (!data.startsWith('---\n')) {
    errors.push('Missing frontmatter: ' + dir);
    continue;
  }
  const end = data.indexOf('\n---\n', 4);
  if (end === -1) {
    errors.push('Unclosed frontmatter: ' + dir);
    continue;
  }
  const yaml = data.slice(4, end);
  const matchName = yaml.match(/^name:\s*(.+)$/m);
  const matchDesc = yaml.match(/^description:\s*(.+)$/m);
  const name = matchName?.[1]?.trim();
  const desc = matchDesc?.[1]?.trim();
  if (!name || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(name) || name.length > 64) errors.push('Invalid skill name: ' + dir);
  if (name !== dir) errors.push('Skill name does not match directory: ' + dir);
  if (!desc || desc.length > 1024) errors.push('Invalid description: ' + dir);
  if (!data.slice(end + 5).trim()) errors.push('Empty instructions: ' + dir);
  if (Buffer.byteLength(data, 'utf8') > 100000) errors.push('Unusually large SKILL.md: ' + dir);
}
try {
  const manifest = JSON.parse(readFileSync(join(root, 'examples', 'alonepro-walkthrough.json'), 'utf8'));
  if (!manifest.exampleOnly) errors.push('Example must be clearly marked illustrative');
  if (!manifest.formats?.some(x=>x.width===1920 && x.height===1080)) errors.push('Missing landscape example');
  if (!manifest.formats?.some(x=>x.width===1080 && x.height===1920)) errors.push('Missing portrait example');
} catch (e) {
  errors.push('Example JSON: ' + e.message);
}
if (errors.length) {
  console.error('MotionPilot validation failed:\n' + errors.map(e => '- ' + e).join('\n'));
  process.exitCode = 1;
} else {
  console.log('MotionPilot validation passed: ' + dirs.length + ' Agent Skills, manifest, landscape & portrait.');
}
