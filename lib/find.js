const is = require('./is.js')
const { dirname, sep } = require('path')

module.exports = async ({ cwd = process.cwd(), root = sep } = {}) => {
  while (true) {
    if (await is({ cwd })) {
      return cwd
    }
    const next = dirname(cwd)
    if (cwd === root || cwd === next) {
      return null
    }
    cwd = next
  }
}
