# GitHub Copilot instructions for this repo ✅

## Quick summary
- This repo contains *course notes* for TypeScript and Playwright: `Notes.txt`, `Typescript-course.txt`, and `Typescrupt-Playwright.txt` (note: filename has a typo).
- There are currently **no** build/config files (no `package.json`, `tsconfig.json`, `playwright.config.ts`, or CI workflows). Agents should not assume any existing build/test CI setup.

## Goals an agent may be asked to help with 🔧
- Convert plain lecture notes into structured markdown or example projects (split by section/topic).
- Extract exercises, generate runnable code samples, or scaffold a TypeScript + Playwright sample project.
- Fix small repo issues (e.g., filename typo `Typescrupt-Playwright.txt`) only after confirming with maintainers.

## When you make edits — high-level rules 📏
- Preserve original lecture text and numbering where present. Example: a line like
  `11. Using Node.js To Run JavaScript Code` should remain verbatim when moving to a new file unless asked to normalize formatting.
- If creating code examples or tests, put them under clear folders: `src/` for TypeScript examples and `playwright/` or `tests/` for Playwright examples.
- Do not remove or rename top-level files without maintainer confirmation.

## Patterns & conventions discovered in this repo 🔍
- Plain text lecture lists with indexes and durations (e.g. `13. Working with Types & Exploring Built-in Types
5min`). Keep timestamps attached when migrating content.
- Playwright-related guidance exists as lecture outlines but no runnable code or config currently exists.

## Suggested, conservative scaffolding steps (ask first) 💡
- If asked to make the repo runnable build a minimal scaffold and list the commands in your PR: e.g. `npm init -y`, `npm i -D typescript playwright`, `npx tsc --init`. Only add these if the maintainer approves.
- When adding tests or examples, include README snippets with explicit commands to run them.

## What NOT to do ❌
- Don’t assume CI, linters, or test runners exist — create them only with explicit approval.
- Don’t change the semantic meaning of course notes (timestamps, numbering, section order) unless asked.

## PR guidance for agents 🧾
- Provide a short PR description that explains the change, the reason, and any commands added to the repo.
- If you add scaffolding, include a migration plan for old files (where content was moved) and keep the original files until the maintainer approves deletion.

---

If anything above is unclear or you want me to include concrete `package.json` / `tsconfig` examples or scaffolded sample code for a Playwright/TypeScript demo, tell me which direction you'd prefer and I'll iterate. ✨