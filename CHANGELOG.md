# Changelog

## [5.0.2](https://github.com/npm/git/compare/v5.0.1...v5.0.2) (2023-08-30)

### Dependencies

* [`9df0371`](https://github.com/npm/git/commit/9df03715ed40cb22fd61a8525a83f3e29b11898d) [#148](https://github.com/npm/git/pull/148) bump which from 3.0.1 to 4.0.0

## [5.0.1](https://github.com/npm/git/compare/v5.0.0...v5.0.1) (2023-08-15)

### Dependencies

* [`25fb1d1`](https://github.com/npm/git/commit/25fb1d1ae9fcbc35b0b86dffb5ca70f89ad6611b) [#146](https://github.com/npm/git/pull/146) bump npm-pick-manifest from 8.0.2 to 9.0.0

## [5.0.0](https://github.com/npm/git/compare/v4.1.0...v5.0.0) (2023-08-14)

### ⚠️ BREAKING CHANGES

* support for node 14 has been removed

### Bug Fixes

* [`a85584b`](https://github.com/npm/git/commit/a85584bd368e723b278cf6c81d8d25f9f89a7a2d) [#143](https://github.com/npm/git/pull/143) drop node14 support (@lukekarrys)
* [`9ec690b`](https://github.com/npm/git/commit/9ec690b2b454fc1dbc90428ea187ca974fb86217) [#143](https://github.com/npm/git/pull/143) use lru-cache named export (@lukekarrys)

### Dependencies

* [`9e5902f`](https://github.com/npm/git/commit/9e5902f0f0989118c814923bfcf9b08a10487523) [#143](https://github.com/npm/git/pull/143) bump lru-cache from 7.18.3 to 10.0.1

## [4.1.0](https://github.com/npm/git/compare/v4.0.4...v4.1.0) (2023-06-06)

### Features

* [`f73ed8d`](https://github.com/npm/git/commit/f73ed8dee9811a00a52073ff50544c8e3d907952) [#135](https://github.com/npm/git/pull/135) add option to stop git.find at a directory (#135) (@lukekarrys)

### Bug Fixes

* [`d5a99e3`](https://github.com/npm/git/commit/d5a99e3f58a433dfd04d9d389dab50ca947b1085) [#137](https://github.com/npm/git/pull/137) dont default `find` `root` option to anything (@lukekarrys)

## [4.0.4](https://github.com/npm/git/compare/v4.0.3...v4.0.4) (2023-03-08)

### Dependencies

* [`1095bed`](https://github.com/npm/git/commit/1095bed420065fb2e04577b627b1d8d7622c7fe3) [#118](https://github.com/npm/git/pull/118) remove mkdirp and rimraf (#118)

## [4.0.3](https://github.com/npm/git/compare/v4.0.2...v4.0.3) (2022-11-01)

### Dependencies

* [`1d9ca2a`](https://github.com/npm/git/commit/1d9ca2a31141ea4b423967b3858dba2c2578b554) [#105](https://github.com/npm/git/pull/105) bump @npmcli/promise-spawn from 5.0.0 to 6.0.0 (#105)
* [`1103697`](https://github.com/npm/git/commit/11036976ce086230197bb63eccc902b80d7e6a7d) [#104](https://github.com/npm/git/pull/104) bump which from 2.0.2 to 3.0.0 (#104)

## [4.0.2](https://github.com/npm/git/compare/v4.0.1...v4.0.2) (2022-10-26)

### Dependencies

* [`96c168e`](https://github.com/npm/git/commit/96c168e01a2c07614896dff1b59c0a1e0ebae1b3) [#100](https://github.com/npm/git/pull/100) bump @npmcli/promise-spawn from 4.0.0 to 5.0.0 (#100)

## [4.0.1](https://github.com/npm/git/compare/v4.0.0...v4.0.1) (2022-10-17)

### Dependencies

* [`4eff9fe`](https://github.com/npm/git/commit/4eff9fef5977d853e0da7ee8b2213f7ec873dd6c) [#94](https://github.com/npm/git/pull/94) bump @npmcli/promise-spawn from 3.0.0 to 4.0.0 (#94)
* [`496d1cb`](https://github.com/npm/git/commit/496d1cb9c51e03035fce77958745c59d5fd74350) [#96](https://github.com/npm/git/pull/96) bump npm-pick-manifest from 7.0.2 to 8.0.0 (#96)

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
