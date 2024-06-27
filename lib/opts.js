const fs = require('fs')
const os = require('os')
const path = require('path')
const ini = require('ini')

const gitConfigPath = path.join(os.homedir(), '.gitconfig')

// Function to check if sshCommand is set in the git config
const isGitSshCommandSetInConfig = () => {
  try {
    if (fs.existsSync(gitConfigPath)) {
      const config = ini.parse(fs.readFileSync(gitConfigPath, 'utf-8'))
      return config.core && config.core.sshCommand !== undefined
    }
  } catch (error) {
    return false
  }
  return false
}

// Function to check if askpass is set in the git config
const isGitAskPassSetInConfig = () => {
  try {
    if (fs.existsSync(gitConfigPath)) {
      const config = ini.parse(fs.readFileSync(gitConfigPath, 'utf-8'))
      return config.core && config.core.askpass !== undefined
    }
  } catch (error) {
    return false
  }
  return false
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
