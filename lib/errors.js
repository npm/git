
const maxRetry = 3

class GitError extends Error {
  shouldRetry () {
    return false
  }
}

class GitConnectionError extends GitError {
  constructor (message) {
    super(`A git connection error occurred. ${message}`)
  }

  shouldRetry (number) {
    return number < maxRetry
  }
}

class GitPathspecError extends GitError {
  constructor (message) {
    super(`The git reference could not be found. ${message}`)
  }
}

class GitUnknownError extends GitError {
  constructor (message) {
    super(`An unknown git error occurred. ${message}`)
  }
}

module.exports = {
  GitConnectionError,
  GitPathspecError,
  GitUnknownError
}
