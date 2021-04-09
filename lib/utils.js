const isWindows = opts => (opts.fakePlatform || process.platform) === 'win32'

// wrap the target in quotes for Windows when using cmd.exe as a shell
// to avoid clone failures for paths with spaces
const escapePath = (path, opts) => {
  if (isWindows(opts) && /cmd(\.exe)?$/i.test(opts.shell) && !path.startsWith('"')) {
    return `"${path}"`
  }
  return path
}


module.exports = {
  isWindows,
  escapePath
}
