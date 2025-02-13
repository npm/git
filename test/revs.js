const revs = require('../lib/revs.js')
const spawn = require('../lib/spawn.js')
const t = require('tap')
const repo = t.testdir()
const fs = require('fs')

const git = (...cmd) => spawn(cmd, { cwd: repo })
let mainBranch = 'main'
const fixMainBranch = (err) => {
  if (err.code !== 129) {
    throw err
  }
  const oldMainBranch = 'master'
  const fixedRefs = {}
  for (const index of Object.keys(expect.refs)) {
    if (index === mainBranch) {
      fixedRefs[oldMainBranch] = expect.refs[index]
      fixedRefs[oldMainBranch].ref = oldMainBranch
    } else {
      fixedRefs[index] = expect.refs[index]
    }
  }
  expect.refs = fixedRefs
  mainBranch = oldMainBranch
  return git('init')
}
const write = (f, c) => fs.writeFileSync(`${repo}/${f}`, c)
t.test('setup', () =>
  git('init', '-b', mainBranch).catch(fixMainBranch)
    .then(() => git('config', 'user.name', 'pacotedev'))
    .then(() => git('config', 'user.email', 'i+pacotedev@izs.me'))
    .then(() => git('config', 'tag.gpgSign', 'false'))
    .then(() => git('config', 'commit.gpgSign', 'false'))
    .then(() => git('config', 'tag.forceSignAnnotated', 'false'))
    .then(() => write('foo', 'bar'))
    .then(() => git('add', 'foo'))
    .then(() => git('commit', '-m', 'foobar'))
    .then(() => git('tag', '-a', 'asdf', '-m', 'asdf'))
    .then(() => write('bar', 'foo'))
    .then(() => git('add', 'bar'))
    .then(() => git('commit', '-m', 'barfoo'))
    .then(() => git('tag', '-a', 'quux', '-m', 'quux'))
    .then(() => write('bob', 'obo'))
    .then(() => git('add', 'bob'))
    .then(() => git('commit', '-m', 'bob plays the obo'))
    .then(() => git('tag', '-am', 'version 1.2.3', 'version-1.2.3'))
    .then(() => git('tag', '-am', 'too big', '69' + Math.pow(2, 53) + '.0.0'))
    .then(() => write('gleep', 'glorp'))
    .then(() => git('add', 'gleep'))
    .then(() => git('commit', '-m', 'gleep glorp'))
    .then(() => git('tag', '-am', 'head version', '69.42.0'))
)

t.test('point latest at HEAD', t =>
  revs(repo).then(r => t.same(r['dist-tags'], {
    HEAD: '69.42.0',
    latest: '69.42.0',
  })))

t.test('add a latest branch, point to 1.2.3 version', () =>
  git('checkout', '-b', 'latest')
    .then(() => git('reset', '--hard', 'version-1.2.3'))
    .then(() => git('checkout', mainBranch))
)

// sharing is caring
const shaRE = /^[0-9a-f]{40}$/
const expect = {
  versions: {
    '1.2.3': {
      sha: shaRE,
      ref: 'version-1.2.3',
      type: 'tag',
    },
  },
  'dist-tags': {
    latest: '1.2.3',
    HEAD: '69.42.0',
  },
  refs: {
    latest: {
      sha: shaRE,
      ref: 'latest',
      type: 'branch',
    },
    [mainBranch]: {
      sha: shaRE,
      ref: mainBranch,
      type: 'branch',
    },
    '699007199254740992.0.0': {
      sha: shaRE,
      ref: '699007199254740992.0.0',
      type: 'tag',
    },
    asdf: {
      sha: shaRE,
      ref: 'asdf',
      type: 'tag',
    },
    quux: {
      sha: shaRE,
      ref: 'quux',
      type: 'tag',
    },
    'version-1.2.3': {
      sha: shaRE,
      ref: 'version-1.2.3',
      type: 'tag',
    },
  },
  shas: Object,
}

t.test('check the revs', async t => {
  const r = await revs(repo, { noGitRevCache: true })
  const r2 = await revs(repo)
  t.equal(r, r2)
  t.match(r, expect)
  Object.keys(r.shas).forEach(sha => r.shas[sha].forEach(ref =>
    t.equal(r.refs[ref].sha, sha, `shas list is consistent ${ref}`)))
})

t.test('cache prevents repeated git ls-remote calls', async t => {
  let callCount = 0
  const originalSpawn = require('../lib/spawn.js')

  // Mock `spawn` to track calls
  require.cache[require.resolve('../lib/spawn.js')].exports = (...args) => {
    callCount++
    return originalSpawn(...args)
  }

  // Force reloading revs.js after modifying spawn
  delete require.cache[require.resolve('../lib/revs.js')]
  const revsModule = require('../lib/revs.js')

  await revsModule(repo) // First call should hit `git ls-remote`
  await revsModule(repo) // Second call should use cache

  t.equal(callCount, 1, 'git ls-remote should be called only once due to caching')

  // Restore original spawn.js
  t.teardown(() => {
    require.cache[require.resolve('../lib/spawn.js')].exports = originalSpawn
  })
})
