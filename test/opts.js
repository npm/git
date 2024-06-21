const t = require('tap')
const gitOpts = require('../lib/opts.js')

t.test('as non-root', t => {
  process.getuid = () => 999
  t.match(gitOpts({
    foo: 'bar',
    env: { override: 'for some reason' },
  }, {
    uid: 420,
    gid: 69,
    abc: 'def',
  }), {
    foo: 'bar',
    env: { override: 'for some reason' },
    uid: undefined,
    gid: undefined,
    abc: undefined,
  }, 'do not set uid/gid as non-root')
  t.end()
})
