# Contributing

Contributions are welcome. This is a single-maintainer project, so please open an issue
before starting anything substantial.

**Security problems do not belong in issues.** Follow [SECURITY.md](SECURITY.md).

## Branches, pull requests and releases

- `gh-pages` (the Pages source branch) is the only long-lived branch and is protected: changes land through a pull
  request with the required checks green, commits on it are signed, and force-pushes
  are refused. Pull requests are squash-merged; GitHub deletes the branch on merge. Merging to `gh-pages` republishes the site.
- Branch names: `<type>/<topic>` (`feat/`, `fix/`, `docs/`, `chore/`, `release/`);
  agents use `agent/<name>/<topic>`.
- A release is a pull request that bumps `version` in `package.json` and moves `[Unreleased]` in [CHANGELOG.md](CHANGELOG.md) to a dated version.
  After it merges, a signed `vX.Y.Z` tag on that commit triggers `release.yml`, which refuses to run
  if the tag, `package.json` and the changelog disagree. Tags are never moved or deleted.

## Running it locally

```bash
npm ci && npm test         # headless smoke test (needs Google Chrome installed)
```

The repository is the built site on the `gh-pages` branch; the source is not here, so changes to
the app itself belong in [furniture-quotation](https://github.com/sergiudanstan/furniture-quotation)
and are rebuilt into this branch. `npm test` serves the files under `/table-claude/` itself.

Use `PW_CHANNEL=chromium` if you installed Playwright's own Chromium instead of Chrome.
