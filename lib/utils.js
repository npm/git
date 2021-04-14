const { basename } = require('path')

const isWindows = opts => (opts.fakePlatform || process.platform) === 'win32'

// wrap the target in quotes for Windows when using cmd(.exe) as a shell to
// avoid clone failures for paths with spaces
const escapePath = (gitPath, opts) => {
  const isCmd = opts.shell && (basename(opts.shell.toLowerCase(), '.exe') === 'cmd')
  if (isWindows(opts) && isCmd && !gitPath.startsWith('"')) {
    return `"${gitPath}"`
  }
  return gitPath
}

// catch & parse remote repos safely
const escapeRemote = (repo) => {
  let remote
  try {
    remote = new URL(repo).href
  } catch (e) {}
  return remote || repo
}

exports.escapeRemote = escapeRemote
exports.escapePath = escapePath
exports.isWindows = isWindows
