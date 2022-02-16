# Changelog

## [3.0.0](https://www.github.com/npm/git/compare/v2.1.0...v3.0.0) (2022-02-16)


### ⚠ BREAKING CHANGES

* this drops support for the `log` property and all logs are now emitted on the process object via `proc-log`.
* this drops support for node10 and non-LTS versions of node12 and node14.

### Features

* use proc-log instead of process.emit and drop support for `log` property ([#41](https://www.github.com/npm/git/issues/41)) ([70fc3c4](https://www.github.com/npm/git/commit/70fc3c45f48918680c7dd17cfd248043d3a29d8d))


### Dependencies

* @npmcli/template-oss@2.7.1 ([#39](https://www.github.com/npm/git/issues/39)) ([2f4154a](https://www.github.com/npm/git/commit/2f4154a9f96cec6e8174d8d129f1a82cf54135c0))
* bump lru-cache from 6.0.0 to 7.3.1 ([#45](https://www.github.com/npm/git/issues/45)) ([ca9ccde](https://www.github.com/npm/git/commit/ca9ccde8bf0432d5d83d7256282c856081c08357))
* bump npm-pick-manifest from 6.1.1 to 7.0.0 ([#46](https://www.github.com/npm/git/issues/46)) ([294da31](https://www.github.com/npm/git/commit/294da31044ba1b86210ded3eeef4ec6255a74336))
