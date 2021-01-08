module.exports = (api, options, rootOptions) => {
  // 复制并用 ejs 渲染 `./template` 内所有的文件
  api.render('../template')
  // 修改 `package.json` 里的字段
  api.extendPackage({
    dependencies: {
      'axios': '^0.21.1',
      'js-cookie': '^2.2.1',
      'vue-router': '^3.4.9',
      'vuex': '^3.6.0',
      'normalize.css': '^8.0.1'
    },
    devDependencies: {
      'git-cz': '^4.7.6',
      'compression-webpack-plugin': '^2.0.0'
    },
    scripts: {
      'dev': 'vue-cli-service serve',
      'build:testing': 'vue-cli-service build --mode testing',
      'build:staging': 'vue-cli-service build --mode staging',
      'build:production': 'vue-cli-service build',
      'commit': 'git add . && npx git-cz'
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
        'element-ui': '^2.14.1'
      }
    })
  }
}