let gitPath
module.exports = (opts = {}) => {
  if (!gitPath) {
    try {
      // inline lazy require to avoid unnecessary perf cost when requiring @npmcli/git 
      const which = require('which')
      gitPath = which.sync('git')
    } catch {
      // ignore errors
    }
  }

  if (opts.git) {
    return opts.git
  }
  if (!gitPath || opts.git === false) {
    return Object.assign(new Error('No git binary found in $PATH'), { code: 'ENOGIT' })
  }
  return gitPath
}
