const _makeError = require('../lib/make-error.js')
const errors = require('../lib/errors.js')
const t = require('tap')

const makeError = (message) =>
  // Create the error with properties like it came from promise-spawn
  _makeError(Object.assign(new Error(), { stderr: message }))

t.test('throw matching error for missing pathspec', (t) => {
  const missingPathspec = makeError('error: pathspec \'foo\' did not match any file(s) known to git')
  t.ok(missingPathspec instanceof errors.GitPathspecError, 'error is a pathspec error')

  t.end()
})

t.test('only transient connection errors are retried', (t) => {
  const sslError = makeError('SSL_ERROR_SYSCALL')
  t.ok(sslError.shouldRetry(1), 'transient error, not beyond max')
  t.ok(sslError instanceof errors.GitConnectionError, 'error is a connection error')

  const unknownError = makeError('asdf')
  t.notOk(unknownError.shouldRetry(1), 'unknown error, do not retry')
  t.ok(unknownError instanceof errors.GitUnknownError, 'error is an unknown error')

  const connectError = makeError('Failed to connect to fooblz Timed out')
  t.notOk(connectError.shouldRetry(69), 'beyond max retries, do not retry')
  t.ok(connectError instanceof errors.GitConnectionError, 'error is a connection error')

  t.end()
})
