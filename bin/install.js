#!/usr/bin/env node
'use strict';

// Installs the idaproject-presentations-skill skill into a skills directory that an AI agent reads.
// Usage: npx github:cenya-ida/idaproject-presentations-skill [options]

const fs = require('fs');
const os = require('os');
const path = require('path');

const SKILL = 'idaproject-presentations-skill';
const SOURCE = path.join(__dirname, '..', 'skills', SKILL);

const HELP = `Install the ${SKILL} skill.

Usage:
  npx github:cenya-ida/idaproject-presentations-skill [options]

Targets (default: --claude in the current project):
  --claude        ./.claude/skills          (Claude Code, this project)
  --agents        ./.agents/skills          (Codex / AI OS layout, this project)
  --all           both of the above
  --global        install into the home directory instead of the project
                  (~/.claude/skills for --claude, ~/.agents/skills for --agents)
  --dir <path>    install into <path>/${SKILL} (overrides the targets above)

Other:
  --force         replace an existing copy
  --dry-run       show what would happen without writing anything
  -h, --help      show this help
`;

function parseArgs(argv) {
  const opts = { claude: false, agents: false, global: false, dir: null, force: false, dryRun: false };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === '--claude') opts.claude = true;
    else if (a === '--agents') opts.agents = true;
    else if (a === '--all') { opts.claude = true; opts.agents = true; }
    else if (a === '--global' || a === '-g') opts.global = true;
    else if (a === '--dir') { opts.dir = argv[++i]; if (!opts.dir) fail('--dir needs a path'); }
    else if (a.startsWith('--dir=')) opts.dir = a.slice(6);
    else if (a === '--force' || a === '-f') opts.force = true;
    else if (a === '--dry-run') opts.dryRun = true;
    else if (a === '-h' || a === '--help') { process.stdout.write(HELP); process.exit(0); }
    else fail(`Unknown option: ${a}\n\n${HELP}`);
  }
  if (!opts.claude && !opts.agents) opts.claude = true;
  return opts;
}

function fail(msg) {
  process.stderr.write(`Error: ${msg}\n`);
  process.exit(1);
}

function targets(opts) {
  if (opts.dir) return [path.resolve(opts.dir)];
  const base = opts.global ? os.homedir() : process.cwd();
  const list = [];
  if (opts.claude) list.push(path.join(base, '.claude', 'skills'));
  if (opts.agents) list.push(path.join(base, '.agents', 'skills'));
  return list;
}

// Two targets can be the same folder (e.g. .claude/skills -> ../.agents/skills); install once.
function realOrSelf(p) {
  try { return fs.realpathSync(p); } catch { return path.resolve(p); }
}

function main() {
  const opts = parseArgs(process.argv.slice(2));
  if (!fs.existsSync(path.join(SOURCE, 'SKILL.md'))) fail(`skill source not found at ${SOURCE}`);

  const seen = new Set();
  let installed = 0;
  for (const root of targets(opts)) {
    const key = realOrSelf(root);
    if (seen.has(key)) continue;
    seen.add(key);

    const dest = path.join(root, SKILL);
    if (fs.existsSync(dest) && !opts.force) {
      process.stdout.write(`skip  ${dest} (already exists; use --force to replace)\n`);
      continue;
    }
    if (opts.dryRun) {
      process.stdout.write(`would install  ${dest}\n`);
      continue;
    }
    fs.mkdirSync(root, { recursive: true });
    if (fs.existsSync(dest)) fs.rmSync(dest, { recursive: true, force: true });
    fs.cpSync(SOURCE, dest, { recursive: true });
    process.stdout.write(`ok    ${dest}\n`);
    installed++;
  }

  if (installed > 0) {
    process.stdout.write(
      `\nDone. Start a new agent session so it picks up the skill, then ask for a deck,\n` +
      `or call it directly: /${SKILL} (Claude Code) or $${SKILL} (Codex).\n`
    );
  }
}

main();
