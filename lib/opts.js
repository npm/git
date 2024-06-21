// Values we want to set if they're not already defined by the end user
const defaultEnv = {}
module.exports = (opts = {}) => ({
  stdioString: true,
  ...opts,
  shell: false,
  env: opts.env || { ...defaultEnv, ...process.env },
})
