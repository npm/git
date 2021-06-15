const error = require('../lib/error.js')
const t = require('tap')

t.test('throw matching error for missing pathspec', (t) => {
  const missingPathspec = error.makeError('error: pathspec \'foo\' did not match any file(s) known to git')
  t.ok(missingPathspec instanceof error.GitPathspecError, 'transient error, not beyond max')

  t.end()
})

t.test('only transient connection errors are retried', (t) => {
  const sslError = error.makeError('SSL_ERROR_SYSCALL')
  t.ok(sslError.shouldRetry(1), 'transient error, not beyond max')
  t.ok(sslError instanceof error.GitConnectionError)

  const unknownError = error.makeError('asdf')
  t.notOk(unknownError.shouldRetry(1), 'unknown error, do not retry')
  t.ok(unknownError instanceof error.GitUnknownError)

  const connectError = error.makeError('Failed to connect to fooblz Timed out')
  t.notOk(connectError.shouldRetry(69), 'beyond max retries, do not retry')
  t.ok(connectError instanceof error.GitConnectionError)

  t.end()
})
