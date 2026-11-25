# table-claude

[![CI](https://github.com/sergiudanstan/table-claude/actions/workflows/ci.yml/badge.svg)](https://github.com/sergiudanstan/table-claude/actions/workflows/ci.yml)
[![CodeQL](https://github.com/sergiudanstan/table-claude/actions/workflows/codeql.yml/badge.svg)](https://github.com/sergiudanstan/table-claude/actions/workflows/codeql.yml)
[![OpenSSF Scorecard](https://api.scorecard.dev/projects/github.com/sergiudanstan/table-claude/badge)](https://scorecard.dev/viewer/?uri=github.com/sergiudanstan/table-claude)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

Parametric 3D-printable table generator with live pricing and a PDF quote, running entirely in
the browser.

**Live:** https://sergiudanstan.github.io/table-claude/

## What this repository is

The **built site only**: a Vite production bundle (`index.html` and `assets/`, including the
Manifold WASM kernel, three.js and jsPDF) on the `gh-pages` branch, served by GitHub Pages from
the branch root. Its asset URLs are built for the base path `/table-claude/`. The TypeScript source
is not in this repository; the same code base lives on in
[furniture-quotation](https://github.com/sergiudanstan/furniture-quotation), which adds a chair next to
the table.

## What it configures

Seven table parameters in mm: top width 400-2400 (default 1200), top depth 300-1600 (800), top
thickness 10-100 (30), top corner radius 0-100 (20), leg height 300-1200 (720), leg width 20-200
(60), leg inset 0-300 (40). Wood and finish are selectable; the model downloads as 3MF, STL or OBJ.

## Pricing logic

Read from the shipped bundle (EUR): volume (top plus four legs) x 1.08 waste factor x price per
cm3 of the wood; plus finish (surface area x price per m2); plus labor at 45 EUR/h for 180 base
minutes, +0.5 per mm of leg inset and +1 per mm of top corner radius; overhead x1.15; 25 % profit;
minimum 220 EUR. **Export PDF Quote** writes an A4 "Table Quotation" PDF with a 3D snapshot,
generated in the browser; nothing is uploaded.

## Development

```bash
npm ci
npm test           # serves the site under /table-claude/, loads it in headless Chrome,
                   # exports the PDF quote and fails on any page error
```

`npm test` needs Google Chrome installed (set `PW_CHANNEL=chromium` to use Playwright's Chromium).
CI runs this smoke test, `npm audit` on the test tooling, `pip-audit` on the CI toolchain, CodeQL and
`zizmor` on the workflows.

See [CONTRIBUTING.md](CONTRIBUTING.md), [SECURITY.md](SECURITY.md) and [CHANGELOG.md](CHANGELOG.md).
