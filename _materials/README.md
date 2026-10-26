# _materials — your private workspace

Drop raw inputs here. **Nothing in this folder is published** (it is gitignored),
so it is safe for drafts, CVs, and unpublished papers. The agent reads from here and
writes polished output into `content/` (which *is* published).

## Folders

| Folder            | What to drop in                                              | Agent command        |
| ----------------- | ----------------------------------------------------------- | -------------------- |
| `experience/`     | CV bullets, job notes, achievements, project write-ups      | `/update-experience` |
| `writing/`        | rough drafts, notes, research for a tech post               | `/write-article`     |
| `style-samples/`  | your existing papers / writing — teaches the agent your voice | (read by `/write-article`) |

## How to use

1. Put a file in the right folder (any format: `.md`, `.txt`, pasted notes).
2. In Claude Code, run the matching command, e.g. `/write-article my-notes.md`.
3. Review the draft it writes into `content/`, fill any `TODO(andy)` markers, then
   `npm run build` to validate.

See `../AUTHORING.md` for the full guide.
