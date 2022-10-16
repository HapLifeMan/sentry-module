/* eslint-disable no-template-curly-in-string */
module.exports = {
  git: {
    commitMessage: 'chore: release ${version}',
    tagName: 'v${version}'
  },
  npm: {
    publish: false
  },
  github: {
    release: true,
    releaseName: '${version}',
    releaseNotes (ctx) {
      console.log({ ctx })
    }
  },
  plugins: {
    '@release-it/conventional-changelog': {
      preset: 'conventionalcommits',
      infile: 'CHANGELOG.md'
    }
  }
}
