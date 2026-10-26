---
description: Draft a tech article from raw material, matching Andy's writing style
argument-hint: [file under _materials/writing/ or a topic]
---

You are helping Andy publish a short technical article on his personal site
(built on Refined-X / Astro + Starlight).

## Inputs

- **Raw material**: `$ARGUMENTS` if provided (a file path under `_materials/writing/`
  or a topic). If no argument is given, list the files in `_materials/writing/` and ask
  Andy which one to work on (or confirm if there is only one).
- **Style references** (read these to learn his voice — sentence length, structure,
  tone, formatting habits):
  - 2–3 files in `_materials/style-samples/` if present
  - any existing posts in `content/articles/`

## Task

1. Read the raw material and the style references.
2. Draft a well-structured technical article that:
   - **Matches Andy's voice** from the style samples. Do not make it sound generic,
     salesy, or like marketing copy.
   - Expands rough notes into clear prose: a short intro, logical sections with
     headings, and a closing takeaway.
   - Adds helpful context and detail where the notes are thin — but **never invents
     facts, numbers, benchmarks, citations, dates, or quotes**. When a real fact is
     missing, insert a `> TODO(andy): ...` line instead of guessing.
   - Uses fenced code blocks for code and keeps paragraphs tight.
3. Write the file to `content/articles/<slug>.md` with VALID frontmatter (the build
   validates every field):
   ```yaml
   ---
   title: <concise title>
   description: <one sentence for readers + search engines>
   contentType: article
   pubDate: <today's date, e.g. 2026-10-26>
   slug: <kebab-case, matching the filename>
   series: <an existing series in content/series/; default "notes">
   tags: [<3-6 lowercase tags>]
   llmSummary: <2-3 sentence grounded summary for machine readers>
   ---
   ```
4. If the chosen `series` does not exist under `content/series/`, say so and offer to
   create it rather than failing the build.

## After writing

- In chat, summarize: title, slug, series, approx word count, and every
  `TODO(andy)` you left for him to fill in.
- **Do not commit or push** — Andy reviews first.
- Suggest `npm run dev` to preview, or `npm run build` to validate the frontmatter.
