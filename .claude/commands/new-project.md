---
description: Add a project / experiment card from raw material
argument-hint: [project name or file]
---

You are adding a project card to Andy's portfolio.

## Inputs

- Material describing the project: `$ARGUMENTS`, or a relevant file in
  `_materials/experience/` or `_materials/writing/`.
- **Read an existing card first** for the exact schema: `content/projects/*.yaml`.

## Task

Create `content/projects/<slug>.yaml` matching the existing schema. Fields:

- `title`, `description`, `slug`
- `status` (e.g. `active` | `maintained` | `archived`)
- `url`, `repository`
- `tags` (list), `category`
- `featured` (boolean), `sortRank` (number — lower shows first)
- `role`, `impact`, `proofPoints` (list)

Only fill fields you have real information for; omit optional ones rather than
inventing them. **Never fabricate URLs, metrics, or outcomes** — use `TODO(andy)`
where something is unknown.

## After writing

- Summarize the card and any TODOs.
- **Do not commit** — Andy reviews first. Suggest `npm run build` to validate.
