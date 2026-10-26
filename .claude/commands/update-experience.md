---
description: Update Andy's work experience / about page from raw material
argument-hint: [optional note or file]
---

You are updating Andy's professional profile on his personal site.

## Inputs

- **New material**: read everything in `_materials/experience/` (CV bullets, job
  notes, achievements, project write-ups). Also use `$ARGUMENTS` if Andy passed a
  specific note or file.
- **Current profile** (read first so you preserve the exact schema):
  - `content/profile/person.yaml` — `timeline` (work history), `stats`,
    `knowsAbout`, `capabilities`, `links`
  - `content/profile/resume.md` — the About-page prose

## Task

1. Merge the new material into the existing profile. Typically:
   - Add or update `timeline:` entries (`period`, `role`, `description`), most recent first.
   - Update `knowsAbout:` skills and `stats:` where warranted.
   - Update the narrative in `resume.md` to reflect the latest role and experience.
2. **Keep the exact YAML field names and structure** — the build validates them.
   Do not rename or drop required fields.
3. Write in Andy's voice and be concrete about impact, but **never invent employers,
   dates, titles, metrics, or achievements**. Where a detail is missing, leave a
   `# TODO(andy): ...` comment (in YAML) or `> TODO(andy): ...` line (in Markdown).

## After writing

- Summarize what changed (timeline entries added/updated, skills, resume edits) and
  list every `TODO(andy)` gap.
- **Do not commit or push** — Andy reviews first.
- Suggest `npm run build` to validate the profile schema.
