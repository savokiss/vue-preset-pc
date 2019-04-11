module.exports = (api, options, rootOptions) => {
  // 复制并用 ejs 渲染 `./template` 内所有的文件
  api.render('./template')
  // 修改 `package.json` 里的字段
  api.extendPackage({
    dependencies: {
      'axios': '^0.18.0',
      'js-cookie': '^2.2.0'
    },
    devDependencies: {
      'gulp': '3.9.1',
      'gulp-ssh': '^0.7.0',
      'git-cz': '^2.0.0',
      'compression-webpack-plugin': '^2.0.0'
    },
    scripts: {
      'dev': 'vue-cli-service serve',
      'build:testing': 'vue-cli-service build --mode testing',
      'build:staging': 'vue-cli-service build --mode staging',
      'build:production': 'vue-cli-service build',
      'commit': 'git add . && npx git-cz',
      'deploy:testing': 'npx gulp upload:testing'
    },
    config: {
      commitizen: {
        path: './node_modules/git-cz'
      }
    },
    gitHooks: {
      'commit-msg': 'node scripts/verifyCommitMsg.js'
    }
  })

  if (options['ui-framework'] === 'element-ui') {
    api.extendPackage({
      dependencies: {
        'element-ui': '^2.4.5'
      }
    })
  }
}