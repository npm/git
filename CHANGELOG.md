# Changelog

## [6.0.3](https://github.com/npm/git/compare/v6.0.2...v6.0.3) (2025-02-18)
### Dependencies
* [`4d688db`](https://github.com/npm/git/commit/4d688db7f82adcb4281eca07c4e63b9de3085500) [#225](https://github.com/npm/git/pull/225) remove promise-inflight (#225)

## [6.0.2](https://github.com/npm/git/compare/v6.0.1...v6.0.2) (2025-02-18)
### Dependencies
* [`618c70c`](https://github.com/npm/git/commit/618c70cedcde3cbf2a01863df5f9467658a48352) [#223](https://github.com/npm/git/pull/223) remove promise-inflight (#223)
### Chores
* [`29dfb33`](https://github.com/npm/git/commit/29dfb3324ab0b06f28b94971d6d8719853b20bf6) [#222](https://github.com/npm/git/pull/222) ensure tests correctly mock environment variables before loading opts.js (#222) (@owlstronaut)
* [`0fc4208`](https://github.com/npm/git/commit/0fc4208897ed29c0651f17d8e7593827110d1ea7) [#220](https://github.com/npm/git/pull/220) bump npm-package-arg from 11.0.3 to 12.0.1 (#220) (@dependabot[bot])
* [`52d8b0e`](https://github.com/npm/git/commit/52d8b0efc675574b5c0dbec7932b921b97f1f453) [#221](https://github.com/npm/git/pull/221) bump @npmcli/template-oss from 4.23.3 to 4.24.1 (#221) (@dependabot[bot], @npm-cli-bot)

## [6.0.1](https://github.com/npm/git/compare/v6.0.0...v6.0.1) (2024-10-02)
### Dependencies
* [`a4c2c21`](https://github.com/npm/git/commit/a4c2c21c74c9c0c9d73a9ea857ad8cedc47879cc) [#216](https://github.com/npm/git/pull/216) bump `which@5.0.0`
* [`3bbfa2c`](https://github.com/npm/git/commit/3bbfa2c769fb4c3beb118eab4f93c42aef1ccbaf) [#216](https://github.com/npm/git/pull/216) bump `npm-pick-manifest@10.0.0`

## [6.0.0](https://github.com/npm/git/compare/v5.0.8...v6.0.0) (2024-09-26)
### ⚠️ BREAKING CHANGES
* `@npmcli/git` now supports node `^18.17.0 || >=20.5.0`
### Bug Fixes
* [`a405d65`](https://github.com/npm/git/commit/a405d65abfef7652648468ae6fa43eb7f8a7ad96) [#211](https://github.com/npm/git/pull/211) align to npm 10 node engine range (@reggi)
### Dependencies
* [`68c31f0`](https://github.com/npm/git/commit/68c31f0d5396c5db2fa961e5f0e609f2f943a58b) [#211](https://github.com/npm/git/pull/211) `proc-log@5.0.0`
* [`917a535`](https://github.com/npm/git/commit/917a5356d8b63167c0fefd331441cfc1988aab56) [#211](https://github.com/npm/git/pull/211) `ini@5.0.0`
* [`e192bea`](https://github.com/npm/git/commit/e192beafc7ac2997ebc4d1bc0d2763f03421a8a7) [#211](https://github.com/npm/git/pull/211) `@npmcli/promise-spawn@8.0.0`
### Chores
* [`e989fa1`](https://github.com/npm/git/commit/e989fa1f53d998c4eca0d74c718c284cf7b3bdcb) [#211](https://github.com/npm/git/pull/211) run template-oss-apply (@reggi)
* [`dbfdd90`](https://github.com/npm/git/commit/dbfdd90965cde5e334ab9639ea6e881bbf096678) [#205](https://github.com/npm/git/pull/205) bump @npmcli/eslint-config from 4.0.5 to 5.0.0 (@dependabot[bot])
* [`4d33150`](https://github.com/npm/git/commit/4d3315033d077da5a7433f2af7ea006010301a1e) [#206](https://github.com/npm/git/pull/206) postinstall for dependabot template-oss PR (@hashtagchris)
* [`8c699c1`](https://github.com/npm/git/commit/8c699c13df9e1867e6931dadfacd2bc90c50c555) [#206](https://github.com/npm/git/pull/206) bump @npmcli/template-oss from 4.23.1 to 4.23.3 (@dependabot[bot])

## [5.0.8](https://github.com/npm/git/compare/v5.0.7...v5.0.8) (2024-07-09)

### Bug Fixes

* [`2135513`](https://github.com/npm/git/commit/21355134c1a7077eea507611892393888edf2fb7) [#194](https://github.com/npm/git/pull/194) smarter git ssh override (#194) (@dennishenry, pacotedev)

## [5.0.7](https://github.com/npm/git/compare/v5.0.6...v5.0.7) (2024-05-04)

### Bug Fixes

* [`fbf9390`](https://github.com/npm/git/commit/fbf9390c88f8b7c57e0a1e0d3f898a87a52b6da3) [#186](https://github.com/npm/git/pull/186) linting: no-unused-vars (@lukekarrys)

### Chores

* [`3a54aa9`](https://github.com/npm/git/commit/3a54aa91cc5a972d7777083150689275fda86be5) [#186](https://github.com/npm/git/pull/186) bump @npmcli/template-oss to 4.22.0 (@lukekarrys)
* [`ea26e3a`](https://github.com/npm/git/commit/ea26e3ac1f9dbff487784660ef16cb32dc179414) [#186](https://github.com/npm/git/pull/186) postinstall for dependabot template-oss PR (@lukekarrys)
* [`b7ab170`](https://github.com/npm/git/commit/b7ab17047e52a514af10688ae8611aaca96be696) [#184](https://github.com/npm/git/pull/184) bump @npmcli/template-oss from 4.21.3 to 4.21.4 (@dependabot[bot])

## [5.0.6](https://github.com/npm/git/compare/v5.0.5...v5.0.6) (2024-04-12)

### Dependencies

* [`683deed`](https://github.com/npm/git/commit/683deedadcc6359cc1aa8c18adbd22542fd7860e) [#182](https://github.com/npm/git/pull/182) `proc-log@4.0.0` (#182)

## [5.0.5](https://github.com/npm/git/compare/v5.0.4...v5.0.5) (2024-04-08)

### Bug Fixes

* [`d9bf355`](https://github.com/npm/git/commit/d9bf355a35b4d11b86b64bec8f748ddba088a926) [#180](https://github.com/npm/git/pull/180) use fs/promises instead of util.promisify (#180) (@lukekarrys)

## [5.0.4](https://github.com/npm/git/compare/v5.0.3...v5.0.4) (2023-12-19)

### Bug Fixes

* [`c398872`](https://github.com/npm/git/commit/c3988721734281bb793d85db3dcbe8cacae59961) [#176](https://github.com/npm/git/pull/176) lazy load of which module (#176) (@thecodrr)

### Chores

* [`46192f5`](https://github.com/npm/git/commit/46192f559efa8b9ee2eed2132b7e143c10af1d1d) [#175](https://github.com/npm/git/pull/175) postinstall for dependabot template-oss PR (@lukekarrys)
* [`51011f8`](https://github.com/npm/git/commit/51011f8440b20a80502e35861e1adc5bdb33cdfc) [#175](https://github.com/npm/git/pull/175) bump @npmcli/template-oss from 4.21.1 to 4.21.3 (@dependabot[bot])
* [`8b1d897`](https://github.com/npm/git/commit/8b1d8971c9ee58becdbc0c272fb257dd1b9899d5) [#173](https://github.com/npm/git/pull/173) postinstall for dependabot template-oss PR (@lukekarrys)
* [`157ed48`](https://github.com/npm/git/commit/157ed4845c5f85af4a8a9a5fbed4b72c0bd4eca0) [#173](https://github.com/npm/git/pull/173) bump @npmcli/template-oss from 4.19.0 to 4.21.1 (@dependabot[bot])
* [`0d06a9f`](https://github.com/npm/git/commit/0d06a9f92bd2382333943e1f764a118336399736) [#154](https://github.com/npm/git/pull/154) postinstall for dependabot template-oss PR (@lukekarrys)
* [`b425d28`](https://github.com/npm/git/commit/b425d28218e6ceae4a81f371a8f651c1671b4259) [#154](https://github.com/npm/git/pull/154) bump @npmcli/template-oss from 4.18.1 to 4.19.0 (@dependabot[bot])
* [`ecc938a`](https://github.com/npm/git/commit/ecc938aaf3923951813b13ef9665a9bdf55a9cab) [#152](https://github.com/npm/git/pull/152) postinstall for dependabot template-oss PR (@lukekarrys)
* [`72430ad`](https://github.com/npm/git/commit/72430ad21e8b9e3dbbd0bb518d42a7bd6b26fed9) [#152](https://github.com/npm/git/pull/152) bump @npmcli/template-oss from 4.18.0 to 4.18.1 (@dependabot[bot])

## [5.0.3](https://github.com/npm/git/compare/v5.0.2...v5.0.3) (2023-08-30)

### Dependencies

* [`5d5a6ed`](https://github.com/npm/git/commit/5d5a6edee92ef09efa11c750d7168a60357c5104) [#150](https://github.com/npm/git/pull/150) bump @npmcli/promise-spawn from 6.0.2 to 7.0.0

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
