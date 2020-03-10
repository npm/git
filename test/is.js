const t = require('tap')
const isGit = require('../lib/is.js')

t.test('a git index is git', t => t.resolveMatch(isGit({cwd: t.testdir({
  '.git': {
    index: 'a file',
  },
})}), true))

t.test('no .git is not git', t => t.resolveMatch(isGit({cwd: t.testdir({})}), false))

t.test('.git non-dir is not git', t => t.resolveMatch(isGit({cwd: t.testdir({
  '.git': 'i am not a git i swear',
})}), false))

t.test('non-file index is not git', t => t.resolveMatch(isGit({cwd: t.testdir({
  '.git': {
    index: {
      a: 'dir is not an index',
    },
  },
})}), false))

t.test('missing index is not git', t => t.resolveMatch(isGit({cwd: t.testdir({
  '.git': {},
})}), false))

t.test('default to cwd', t => {
  // this will fail if your tmpdir is in a git repo, I suppose
  const tmp = require('os').tmpdir()
  process.chdir(tmp)
  return t.resolveMatch(isGit(), false)
})
