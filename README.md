# @npmcli/git

A utility for spawning git from npm CLI contexts.

This is _not_ an implementation of git itself, it's just a thing that
spawns child processes to tell the system git CLI implementation to do
stuff.

## USAGE

```js
git.clone(['git://foo/bar.git']) // clone a repo
  .then(() => git.spawn(['checkout', 'some-branch'], {cwd: 'bar'}))
  .then(() => git.spawn(['you get the idea']))
```

## API

All methods take an options object.  Options are described below.

### `git.spawn(args, opts = {})` -> Promise

Launch a `git` subprocess with the arguments specified.

All the other functions call this one at some point.

Processes are launched using
[`@npmcli/promise-spawn`](http://npm.im/@npmcli/promise-spawn), with the
`stdioString: true` option enabled by default, since git output is
generally in readable string format.

### `git.clone(repo, ref = 'HEAD', target = null, opts = {})`

Clone the repository into `target` path (or the default path for the name
of the repository), checking out `ref`.

In lieu of a specific `ref`, you may also pass in a `spec` option, which is
a [`npm-package-arg`](http://npm.im/npm-package-arg) object for a `git`
package dependency reference.  In this way, you can select SemVer tags
within a range, or any git committish value.  For example:

```js
const npa = require('npm-package-arg')
git.clone('git@github.com:npm/git.git', '', null, {
  spec: npa('github:npm/git#semver:1.x'),
})

// only gitRange and gitCommittish are relevant, so this works, too
git.clone('git@github.com:npm/git.git', null, null, {
  spec: { gitRange: '1.x' }
})
```

### `git.revs(repo, opts = {})`

Fetch a representation of all of the named references in a given
repository.  The resulting doc is intentionally somewhat
[packument](https://www.npmjs.com/package/pacote#packuments)-like, so that
git semver ranges can be applied using the same
[`npm-pick-manifest`](http://npm.im/npm-pick-manifest) logic.

The resulting object looks like:

```js
revs = {
  versions: {
    // all semver-looking tags go in here...
    // version: { sha, ref, rawRef, type }
    '1.0.0': {
      sha: '1bc5fba3353f8e1b56493b266bc459276ab23139',
      ref: 'v1.0.0',
      rawRef: 'refs/tags/v1.0.0',
      type: 'tag',
    },
  },
  'dist-tags': {
    HEAD: '1.0.0',
    latest: '1.0.0',
  },
  refs: {
    // all the advertised refs that can be cloned down remotely
    HEAD: { sha, ref, rawRef, type: 'head' },
    master: { ... },
    'v1.0.0': { ... },
    'refs/tags/v1.0.0': { ... },
  },
  shas: {
    // all named shas referenced above
    // sha: [list, of, refs]
    '6b2501f9183a1753027a9bf89a184b7d3d4602c7': [
      'HEAD',
      'master',
      'refs/heads/master',
    ],
    '1bc5fba3353f8e1b56493b266bc459276ab23139': [ 'v1.0.0', 'refs/tags/v1.0.0' ],
  },
}
```
