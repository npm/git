const isClean = require('../lib/is-clean.js')
const spawn = require('../lib/spawn.js')
const t = require('tap')

const cwd = t.testdir()
const { resolve } = require('path')
const { promisify } = require('util')
const writeFile = promisify(require('fs').writeFile)
const write = (file, data) => writeFile(resolve(cwd, file), data)

t.test('create git repo', t =>
  spawn(['init'], { cwd })
  .then(() => write('hello', 'world')))

t.test('dir is clean, just one unknown file', t =>
  t.resolveMatch(isClean({cwd}), true))

t.test('add the file, no longer clean', t =>
  spawn(['add', 'hello'], { cwd })
  .then(() => t.resolveMatch(isClean({cwd}), false)))

t.test('commit the file, clean again', t =>
  spawn(['commit', '-m', 'x'], { cwd })
  .then(() => t.resolveMatch(isClean({cwd}), true)))

t.test('edit the file, unclean again', t =>
  write('hello', 'goodbye')
  .then(() => t.resolveMatch(isClean({cwd}), false)))

t.test('default to cwd', t => {
  process.chdir(cwd)
  return t.resolveMatch(isClean(), false)
})
