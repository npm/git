const error = require('../lib/error.js')
const t = require('tap')

t.test('only transient errors are retried', (t) => {
  const sslError = error.makeError('SSL_ERROR_SYSCALL')
  t.ok(sslError.shouldRetry(1), 'transient error, not beyond max')
  const unknownError = error.makeError('asdf')
  t.notOk(unknownError.shouldRetry(1), 'unknown error, do not retry')
  const connectError = error.makeError('asdf')
  t.notOk(connectError.shouldRetry(69), 'beyond max retries, do not retry')
})
