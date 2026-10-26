## Development

```sh
npm install
npm run dev
```

Build and verify:

```sh
npm run build
npm run verify
```

## Documentation

- Product positioning: `PRODUCT.md`
- Design system: `DESIGN.md`
- User README: `README.md`
- Astro: https://docs.astro.build

Config entrypoint: `site.config.mjs`. This site's identity lives in the committed
overlay `instance.config.mjs` (project root).

## Authoring workflow (content from raw materials)

Andy drops raw inputs into `_materials/` (gitignored, private), then uses the agent
commands in `.claude/commands/`:

- `/write-article [file|topic]` — turn notes in `_materials/writing/` into a styled
  tech post in `content/articles/`, matching the voice in `_materials/style-samples/`.
- `/update-experience` — merge `_materials/experience/` into `content/profile/person.yaml`
  and `resume.md`.
- `/new-project` — add a card to `content/projects/`.

Full guide: `AUTHORING.md`. Commands must never invent facts (leave `TODO(andy)`
markers) and never commit — Andy reviews, then `npm run build` validates.
