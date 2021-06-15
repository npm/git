const makeError = require('../lib/make-error.js')
const errors = require('../lib/errors.js')
const t = require('tap')

t.test('throw matching error for missing pathspec', (t) => {
  const missingPathspec = makeError('error: pathspec \'foo\' did not match any file(s) known to git')
  t.ok(missingPathspec instanceof errors.GitPathspecError, 'transient error, not beyond max')

  t.end()
})

t.test('only transient connection errors are retried', (t) => {
  const sslError = makeError('SSL_ERROR_SYSCALL')
  t.ok(sslError.shouldRetry(1), 'transient error, not beyond max')
  t.ok(sslError instanceof errors.GitConnectionError)

  const unknownError = makeError('asdf')
  t.notOk(unknownError.shouldRetry(1), 'unknown error, do not retry')
  t.ok(unknownError instanceof errors.GitUnknownError)

  const connectError = makeError('Failed to connect to fooblz Timed out')
  t.notOk(connectError.shouldRetry(69), 'beyond max retries, do not retry')
  t.ok(connectError instanceof errors.GitConnectionError)

  t.end()
})
