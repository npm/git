const t = require('tap')
const find = require('../lib/find.js')

t.test('find the git dir', t => {
  const root = t.testdir({
    '.git': { index: 'hello' },
    a: { b: { c: { d: { e: {} }}}},
  })
  const path = `${root}/a/b/c/d/e`
  return t.resolveMatch(find({ cwd: path }), root)
})

t.test('no git dir to find', t => {
  // this will fail if your tmpdir is in a git repo, I suppose
  const path = require('os').tmpdir()
  return t.resolveMatch(find({ cwd: path }), null)
})

t.test('default to cwd', t => {
  // this will fail if your tmpdir is in a git repo, I suppose
  const path = require('os').tmpdir()
  process.chdir(path)
  return t.resolveMatch(find(), null)
})
