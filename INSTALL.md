# Installing this skill (instructions for AI agents)

A user gave you a link to this repository and wants the `idaproject-slides` skill installed. The skill is the folder `skills/idaproject-slides/`, which contains `SKILL.md` and `references/`. Copy that folder into a skills directory your client reads, then tell the user in Russian what you did.

## 1. Pick the destination

Ask the user only if the choice isn't clear from context. Default to the current project.

| Client | Project scope (default) | User scope |
|---|---|---|
| Claude Code | `<project>/.claude/skills/idaproject-slides/` | `~/.claude/skills/idaproject-slides/` |
| Codex, or a project on the AI OS layout | `<project>/.agents/skills/idaproject-slides/` | `~/.agents/skills/idaproject-slides/` |

If `.claude/skills` is a symlink to `.agents/skills`, install once into `.agents/skills`.

## 2. Install

Use either method.

**With Node.js (preferred):**

```bash
npx --yes github:cenya-ida/idaproject-presentations-skill
```

Options:
- `--agents` installs into `.agents/skills`.
- `--all` installs into both directories.
- `--global` installs into the home directory.
- `--dir <path>` installs into a custom directory.
- `--force` replaces an existing copy.
- `--dry-run` previews the result without writing anything.

**With git only:**

```bash
git clone --depth 1 https://github.com/cenya-ida/idaproject-presentations-skill /tmp/idaproject-presentations-skill
mkdir -p .claude/skills
cp -r /tmp/idaproject-presentations-skill/skills/idaproject-slides .claude/skills/
rm -rf /tmp/idaproject-presentations-skill
```

Don't overwrite an existing `idaproject-slides` folder without asking the user, because it may contain local edits.

## 3. Verify

- `<destination>/idaproject-slides/SKILL.md` exists and starts with `name: idaproject-slides`.
- All six files are in `references/`:
  - `narrative.md`
  - `slide-types.md`
  - `visual-system.md`
  - `figma-build.md`
  - `review.md`
  - `qa-checklist.md`

## 4. Tell the user (in Russian)

Report where the skill was installed. Explain that a new session is needed for the client to discover it. Explain how to call it: `/idaproject-slides` in Claude Code, `$idaproject-slides` in Codex, or just ask for an IdaProject deck. Mention that building slides requires the Figma MCP server with access to the company's presentation files.
