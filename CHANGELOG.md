# Changelog

## [4.0.0](https://github.com/npm/git/compare/v3.0.2...v4.0.0) (2022-10-14)

### ⚠️ BREAKING CHANGES

* `@npmcli/git` is now compatible with the following semver range for node: `^14.17.0 || ^16.13.0 || >=18.0.0`

### Features

* [`84d1268`](https://github.com/npm/git/commit/84d12684685fbb071b62c3e84f44107fc11e5ec0) [#85](https://github.com/npm/git/pull/85) postinstall for dependabot template-oss PR (@lukekarrys)

### Dependencies

* [`49d794d`](https://github.com/npm/git/commit/49d794d9f09c54c10a0f0e2e54ebc174d7392533) [#93](https://github.com/npm/git/pull/93) bump proc-log from 2.0.1 to 3.0.0

## [3.0.2](https://github.com/npm/git/compare/v3.0.1...v3.0.2) (2022-08-15)


### Bug Fixes

* linting ([ea31a17](https://github.com/npm/git/commit/ea31a176d41f5355ef85a624028acfe57c1e650e))

### [3.0.1](https://github.com/npm/git/compare/v3.0.0...v3.0.1) (2022-04-05)


### Bug Fixes

* replace deprecated String.prototype.substr() ([#68](https://github.com/npm/git/issues/68)) ([b146f20](https://github.com/npm/git/commit/b146f202c7e4be3d9ee456dee00fdcf879ce2362))


### Dependencies

* bump @npmcli/promise-spawn from 1.3.2 to 3.0.0 ([#69](https://github.com/npm/git/issues/69)) ([d8f4488](https://github.com/npm/git/commit/d8f44887166a74b8d54b44f5c0a5062b302517af))
* update lru-cache requirement from ^7.3.1 to ^7.4.0 ([#50](https://github.com/npm/git/issues/50)) ([3beb9a2](https://github.com/npm/git/commit/3beb9a29d0aff7264a8a8a3073648b10cacff97c))
* update lru-cache requirement from ^7.4.0 to ^7.4.1 ([#55](https://github.com/npm/git/issues/55)) ([17c1e8a](https://github.com/npm/git/commit/17c1e8aff482cd77470bb9abec1b165d3ee6f9b0))
* update lru-cache requirement from ^7.4.1 to ^7.4.2 ([#56](https://github.com/npm/git/issues/56)) ([eeb67f4](https://github.com/npm/git/commit/eeb67f44eb777c1f917fb12241ee360478dd12de))
* update lru-cache requirement from ^7.4.2 to ^7.4.4 ([#57](https://github.com/npm/git/issues/57)) ([24dff2f](https://github.com/npm/git/commit/24dff2f0f46e3e1844a8824403acb0061b61b8ca))

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
