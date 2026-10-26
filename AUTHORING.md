# Authoring guide (for Andy)

This is your plain-English guide to running the site and publishing content with the
help of agent commands. You rarely touch the template's internals — you work in two
places:

- **`_materials/`** — your private inbox. Drop raw stuff here. Never published.
- **`content/`** — the published corpus. The agent writes polished files here; you review.

## The loop

```
drop raw material in _materials/  →  run an agent command  →  review draft in content/  →  npm run build  →  commit
```

## Agent commands

Type these in Claude Code (they live in `.claude/commands/`):

| Command                       | What it does                                                        |
| ----------------------------- | ------------------------------------------------------------------ |
| `/write-article [file]`       | Turns notes in `_materials/writing/` into a tech post in your voice |
| `/update-experience`          | Merges `_materials/experience/` into your About page + resume       |
| `/new-project [file]`         | Adds a project/experiment card to the Projects page                 |

**Learning your style:** put 2–3 of your existing papers or posts in
`_materials/style-samples/`. `/write-article` reads them to match your tone and
structure. The more it has, the closer the match.

**Safety rules the commands follow:** they never invent facts (they leave
`TODO(andy): ...` markers where a real detail is missing), and they never commit —
you always review first.

## Everyday commands

```sh
npm run dev      # preview locally at the printed URL (live reload)
npm run build    # build + validate all content (run before committing)
npm run verify   # extra checks on the built output
```

## Where things live

| You want to change…        | Edit…                                             |
| -------------------------- | ------------------------------------------------- |
| Your name, URL, home copy  | `instance.config.mjs`                             |
| Work experience / about    | `content/profile/person.yaml`, `resume.md`        |
| A blog/tech post           | `content/articles/*.md`                           |
| A project card             | `content/projects/*.yaml`                         |
| Writing "series" (buckets) | `content/series/*.yaml` + `series.json`           |
| Colors / fonts / design    | `DESIGN.md` (reference) + the template styles      |

## Publishing changes

```sh
git add -A
git commit -m "content: <what you added>"
git push
```

When your repo has GitHub Pages enabled, pushing to `main` rebuilds and deploys the
live site automatically.

## Pulling template updates (optional)

The original template is tracked as the `upstream` remote. To pull improvements later:

```sh
git fetch upstream
git merge upstream/main
```

Your identity lives in `instance.config.mjs` and your content in `content/`, so
updates rarely conflict with your work.
