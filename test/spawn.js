const spawn = require('../lib/spawn.js')
const procLog = require('../lib/proc-log.js')

const t = require('tap')
t.rejects(spawn(['status'], { git: false }), {
  message: 'No git binary found in $PATH',
  code: 'ENOGIT'
})

const slash = require('slash')
const { resolve } = require('path')
const repo = t.testdir()

const fs = require('fs')
// init a repo.  this also tests the happy path and default options
t.test('setup repo', t => {
  const cwd = process.cwd()
  t.teardown(() => process.chdir(cwd))
  process.chdir(repo)
  return t.resolveMatch(spawn(['init']),
    { stdout: `Initialized empty Git repository in ${slash(fs.realpathSync.native(repo))}` })
})

t.test('retries', t => {
  const logs = []
  process.on('log', (...log) => logs.push(log))
  const te = resolve(repo, 'transient-error.js')
  fs.writeFileSync(te, `
console.error('Connection timed out')
process.exit(1)
  `)
  const retryOptions = {
    'one retry object': {
      retry: {
        retries: 2,
        factor: 1,
        maxTimeout: 1000,
        minTimeout: 1
      }
    },
    'namespaced fetchRetry* configs': {
      fetchRetries: 2,
      fetchRetryFactor: 1,
      fetchRetryMaxtimeout: 1000,
      fetchRetryMintimeout: 1
    }
  }
  const er = {
    message: 'command failed',
    cmd: process.execPath,
    args: [te],
    code: 1,
    signal: null,
    stdout: '',
    stderr: 'Connection timed out\n'
  }
  Object.keys(retryOptions).forEach(n => t.test(n, t =>
    t.rejects(spawn([te], {
      cwd: repo,
      git: process.execPath,
      log: procLog,
      ...(retryOptions[n])
    }), er).then(() => {
      t.same(logs, [
        [
          'silly',
          'pacote',
          `Retrying git command: ${te} attempt # 2`
        ],
        [
          'silly',
          'pacote',
          `Retrying git command: ${te} attempt # 3`
        ]
      ], 'got expected logs')
      logs.length = 0
    })))
  t.end()
})
