const fs = require('node:fs')
const os = require('node:os')
const path = require('node:path')
const ini = require('ini')

const gitConfigPath = path.join(os.homedir(), '.gitconfig')

let cachedConfig = null

// Function to load and cache the git config
const loadGitConfig = () => {
  if (cachedConfig === null) {
    try {
      if (fs.existsSync(gitConfigPath)) {
        const configContent = fs.readFileSync(gitConfigPath, 'utf-8')
        cachedConfig = ini.parse(configContent)
      } else {
        cachedConfig = {}
      }
    } catch (error) {
      cachedConfig = {}
    }
  }
  return cachedConfig
}

const isGitSshCommandSetInConfig = () => {
  const config = loadGitConfig()
  return config.core && config.core.sshCommand !== undefined
}

const isGitAskPassSetInConfig = () => {
  const config = loadGitConfig()
  return config.core && config.core.askpass !== undefined
}

module.exports = (opts = {}) => {
  const sshCommandSetInEnv = process.env.GIT_SSH_COMMAND !== undefined
  const sshCommandSetInConfig = isGitSshCommandSetInConfig()
  const askPassSetInEnv = process.env.GIT_ASKPASS !== undefined
  const askPassSetInConfig = isGitAskPassSetInConfig()

  // Values we want to set if they're not already defined by the end user
  // This defaults to accepting new ssh host key fingerprints
  const finalGitEnv = {
    ...(askPassSetInEnv || askPassSetInConfig ? {} : {
      GIT_ASKPASS: 'echo',
    }),
    ...(sshCommandSetInEnv || sshCommandSetInConfig ? {} : {
      GIT_SSH_COMMAND: 'ssh -oStrictHostKeyChecking=accept-new',
    }),
  }

  return {
    stdioString: true,
    ...opts,
    shell: false,
    env: opts.env || { ...finalGitEnv, ...process.env },
  }
}
