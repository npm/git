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

const maxRetry = 3

const missingPathspecRe = /pathspec .* did not match any file\(s\) known to git/

class GitError extends Error {
  shouldRetry () {
    return false
  }
}

class GitConnectionError extends GitError {
  shouldRetry (number) {
    return number < maxRetry
  }
}

class GitPathspecError extends GitError {}

class GitUnknownError extends GitError {}

function makeError (message) {
  if (connectionErrorRe.test(message)) {
    return new GitConnectionError(message)
  } else if (missingPathspecRe.test(message)) {
    return new GitPathspecError(message)
  }
  return new GitUnknownError(message)
}

module.exports = {
  makeError,
  GitConnectionError,
  GitPathspecError,
  GitUnknownError
}
