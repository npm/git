const { escapePath } = require('./utils.js')
const which = require('which')

let gitPath
try {
  gitPath = which.sync('git')
} catch (e) {}

module.exports = (opts = {}) =>
  opts.git ||
  opts.git !== false && escapePath(gitPath, opts) ||
  Object.assign(new Error('No git binary found in $PATH'), { code: 'ENOGIT' })
