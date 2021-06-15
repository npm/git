const {
  GitConnectionError,
  GitPathspecError,
  GitUnknownError
} = require('./errors.js')

const connectionErrorRe = new RegExp([
  'remote error: Internal Server Error',
  'The remote end hung up unexpectedly',
  'Connection timed out',
  'Operation timed out',
  'Failed to connect to .* Timed out',
  'Connection reset by peer',
  'SSL_ERROR_SYSCALL',
  'The requested URL returned error: 503'
].join('|'))

const missingPathspecRe = /pathspec .* did not match any file\(s\) known to git/

function makeError (message) {
  if (connectionErrorRe.test(message)) {
    return new GitConnectionError(message)
  } else if (missingPathspecRe.test(message)) {
    return new GitPathspecError(message)
  }
  return new GitUnknownError(message)
}

module.exports = makeError
