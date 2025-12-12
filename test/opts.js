const t = require('tap')
const ini = require('ini')
let [GIT_ASKPASS, GIT_SSH_COMMAND] = ['', '']

const mockFs = {
  existsSync: () => false,
  readFileSync: () => '',
}

let gitOpts

t.beforeEach(() => {
  backupEnv()
  gitOpts = t.mock('../lib/opts.js', {
    'node:fs': mockFs,
  })
})

t.afterEach(() => {
  restoreEnv()
})

t.test('defaults', t => {
  t.match(gitOpts(), {
    env: {
      GIT_ASKPASS: 'echo',
      GIT_SSH_COMMAND: 'ssh -o BatchMode=yes',
    },
    shell: false,
  }, 'got the git defaults we want')

  t.end()
})

t.test('handle case when fs.existsSync throws an error', t => {
  const gitOptsWithMockFs = t.mock('../lib/opts.js', {
    'node:fs': {
      ...mockFs,
      existsSync: () => {
        throw new Error('Mocked error')
      },
    },
  })

  t.match(gitOptsWithMockFs(), {
    env: {
      GIT_ASKPASS: 'echo',
      GIT_SSH_COMMAND: 'ssh -o BatchMode=yes',
    },
    shell: false,
  }, 'should apply defaults when fs.existsSync throws an error')

  t.end()
})

t.test('handle case when git config does not exist', t => {
  const gitOptsWithMockFs = t.mock('../lib/opts.js', {
    'node:fs': {
      ...mockFs,
      existsSync: () => false,
    },
  })

  t.match(gitOptsWithMockFs(), {
    env: {
      GIT_ASKPASS: 'echo',
      GIT_SSH_COMMAND: 'ssh -o BatchMode=yes',
    },
    shell: false,
  }, 'should apply defaults when git config does not exist')

  t.end()
})

t.test('does not override when sshCommand is set in env', t => {
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
  const gitConfigContent = `[core]
  askpass = echo
  sshCommand = custom_ssh_command
`
  const gitOptsWithMockFs = t.mock('../lib/opts.js', {
    'node:fs': {
      ...mockFs,
      existsSync: () => true,
      readFileSync: () => gitConfigContent,
    },
  })

  t.match(gitOptsWithMockFs(), {
    env: {
      GIT_ASKPASS: null,
      GIT_SSH_COMMAND: null,
    },
    shell: false,
  }, 'sshCommand in git config remains')

  t.end()
})

t.test('does not override when sshCommand is set in git config', t => {
  const gitConfigContent = `[core]
  askpass = echo
  sshCommand = custom_ssh_command
`

  const { loadGitConfig } = t.mock('../lib/opts.js', {
    'node:fs': {
      ...mockFs,
      existsSync: () => true,
      readFileSync: () => gitConfigContent,
    },
  })

  t.match(loadGitConfig(),
    ini.parse(gitConfigContent),
    'cachedConfig should be populated with git config'
  )

  const gitOptsWithMockFs = t.mock('../lib/opts.js', {
    'node:fs': {
      ...mockFs,
      existsSync: () => true,
      readFileSync: () => gitConfigContent,
    },
  })

  t.match(gitOptsWithMockFs(), {
    env: {
      GIT_ASKPASS: null,
      GIT_SSH_COMMAND: null,
    },
    shell: false,
  }, 'sshCommand in git config remains')

  t.end()
})

function backupEnv () {
  GIT_ASKPASS = process.env.GIT_ASKPASS
  GIT_SSH_COMMAND = process.env.GIT_SSH_COMMAND
  delete process.env.GIT_ASKPASS
  delete process.env.GIT_SSH_COMMAND
}

function restoreEnv () {
  process.env.GIT_ASKPASS = GIT_ASKPASS
  process.env.GIT_SSH_COMMAND = GIT_SSH_COMMAND
}
