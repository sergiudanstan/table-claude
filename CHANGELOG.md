# Changelog

All notable changes to this project are documented here. The format follows
[Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and this project uses
[Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.1.1] - 2026-11-26

### Changed
- README and live page now point to [furniture-quotation](https://github.com/sergiudanstan/furniture-quotation), which supersedes this repository. The repository is archived after this release.

## [0.1.0] - 2026-11-25

First tagged release of the table generator with live pricing and PDF quote as published at
https://sergiudanstan.github.io/table-claude/ (built site; the source is not in this repository).

### Added
- Headless page smoke test (`npm test`) run in CI on every push and pull request, including a real PDF quote export.
- CI, CodeQL, OpenSSF Scorecard and a tag-triggered release workflow with build provenance; Dependabot for actions and npm.
- `README.md`, `SECURITY.md`, `CONTRIBUTING.md`, this changelog and a `package.json` for the test tooling.

[Unreleased]: https://github.com/sergiudanstan/table-claude/compare/v0.1.1...HEAD
[0.1.1]: https://github.com/sergiudanstan/table-claude/releases/tag/v0.1.1
[0.1.0]: https://github.com/sergiudanstan/table-claude/releases/tag/v0.1.0
