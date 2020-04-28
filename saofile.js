const superb = require('superb')

module.exports = {
  prompts() {
    return [
      {
        name: 'name',
        message: 'What is the name of the new project',
        default: this.outFolder,
        filter: val => val.toLowerCase()
      },
      {
        name: 'description',
        message: 'How would you descripe the new project',
        default: `Angular Micro-frontend`
      },
      {
        name: 'hasSSR',
        type: 'confirm',
        message: 'Do you want to include Server-Side Rendering (SSR)',
        default: true
      },
    ]
  },
  actions: function () {
    return [
      {
        type: 'add',
        files: '**',
        filters: {
          'webpack.browser.config.js': !this.answers.hasSSR,
          'package.browser.json': !this.answers.hasSSR
        }
      },
      {
        type: 'move',
        patterns: {
          'webpack.browser.config.js' : 'webpack.config.js',
          'package.browser.json' : 'package.json'
        }
      },
      {
        type: 'remove',
        files: 'src/server.main.ts',
        when: !this.answers.hasSSR
      },
      {
        type: 'move',
        patterns: {
          gitignore: '.gitignore'
        }
      }
    ]
  },
  async completed() {
    await this.npmInstall()
    this.showProjectTips()
  }
}
