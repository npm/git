const t = require('tap')
const proxyquire = require('proxyquire')
const gitOpts = require('../lib/opts.js')
const fs = require('fs')
const os = require('os')
const path = require('path')

const gitConfigPath = path.join(os.homedir(), '.gitconfig')

const mockFs = {
  existsSync: () => false,
  readFileSync: () => '',
}

// Utility function to backup and restore gitconfig
const backupGitConfig = () => {
  const backupPath = `${gitConfigPath}.backup`
  if (fs.existsSync(gitConfigPath)) {
    fs.copyFileSync(gitConfigPath, backupPath)
    fs.unlinkSync(gitConfigPath)
  }
  return backupPath
}

const restoreGitConfig = (backupPath) => {
  if (fs.existsSync(backupPath)) {
    fs.copyFileSync(backupPath, gitConfigPath)
    fs.unlinkSync(backupPath)
  } else if (fs.existsSync(gitConfigPath)) {
    fs.unlinkSync(gitConfigPath)
  }
}

const writeGitConfig = (content) => {
  fs.writeFileSync(gitConfigPath, content)
}

t.test('handle case when fs.existsSync throws an error', t => {
  const { GIT_ASKPASS, GIT_SSH_COMMAND } = process.env
  t.teardown(() => {
    process.env.GIT_ASKPASS = GIT_ASKPASS
    process.env.GIT_SSH_COMMAND = GIT_SSH_COMMAND
  })

  // Mocking fs.existsSync to throw an error
  const gitOptsWithMockFs = proxyquire('../lib/opts.js', {
    fs: {
      ...mockFs,
      existsSync: () => {
        throw new Error('Mocked error')
      },
    },
  })

  t.match(gitOptsWithMockFs(), {
    env: {
      GIT_ASKPASS: 'echo',
      GIT_SSH_COMMAND: 'ssh -oStrictHostKeyChecking=accept-new',
    },
    shell: false,
  }, 'should apply defaults when fs.existsSync throws an error')

  t.end()
})

t.test('defaults', t => {
  const backupPath = backupGitConfig()
  const { GIT_ASKPASS, GIT_SSH_COMMAND } = process.env
  t.teardown(() => {
    restoreGitConfig(backupPath)
    process.env.GIT_ASKPASS = GIT_ASKPASS
    process.env.GIT_SSH_COMMAND = GIT_SSH_COMMAND
  })

  delete process.env.GIT_ASKPASS
  delete process.env.GIT_SSH_COMMAND

  t.match(gitOpts(), {
    env: {
      GIT_ASKPASS: 'echo',
      GIT_SSH_COMMAND: 'ssh -oStrictHostKeyChecking=accept-new',
    },
    shell: false,
  }, 'got the git defaults we want')

  t.end()
})

t.test('does not override when sshCommand is set in env', t => {
  const backupPath = backupGitConfig()
  const { GIT_ASKPASS, GIT_SSH_COMMAND } = process.env
  t.teardown(() => {
    restoreGitConfig(backupPath)
    process.env.GIT_ASKPASS = GIT_ASKPASS
    process.env.GIT_SSH_COMMAND = GIT_SSH_COMMAND
  })

  process.env.GIT_ASKPASS = 'test_askpass'
  process.env.GIT_SSH_COMMAND = 'test_ssh_command'

  t.match(gitOpts(), {
    env: {
      GIT_ASKPASS: 'test_askpass',
      GIT_SSH_COMMAND: 'test_ssh_command',
    },
    shell: false,
  }, 'values already in process.env remain')

  t.end()
})

t.test('as non-root', t => {
  const backupPath = backupGitConfig()
  const { GIT_ASKPASS, GIT_SSH_COMMAND } = process.env
  t.teardown(() => {
    restoreGitConfig(backupPath)
    process.env.GIT_ASKPASS = GIT_ASKPASS
    process.env.GIT_SSH_COMMAND = GIT_SSH_COMMAND
  })

  process.getuid = () => 999

  t.match(gitOpts({
    foo: 'bar',
    env: { override: 'for some reason' },
  }, {
    uid: 420,
    gid: 69,
    abc: 'def',
  }), {
    foo: 'bar',
    env: { override: 'for some reason' },
    uid: undefined,
    gid: undefined,
    abc: undefined,
  }, 'do not set uid/gid as non-root')

  t.end()
})

t.test('does not override when sshCommand is set in git config', t => {
  const backupPath = backupGitConfig()
  const { GIT_ASKPASS, GIT_SSH_COMMAND } = process.env
  t.teardown(() => {
    restoreGitConfig(backupPath)
    process.env.GIT_ASKPASS = GIT_ASKPASS
    process.env.GIT_SSH_COMMAND = GIT_SSH_COMMAND
  })

  writeGitConfig(`
[core]
  askpass = echo
  sshCommand = custom_ssh_command
`)

  t.match(gitOpts(), {
    env: {
      GIT_ASKPASS: 'undefined',
      GIT_SSH_COMMAND: 'undefined',
    },
    shell: false,
  }, 'sshCommand in git config remains')

  t.end()
})
