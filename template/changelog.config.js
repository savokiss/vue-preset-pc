module.exports = {
  'list': [
    'test',
    'feat',
    'fix',
    'chore',
    'docs',
    'refactor',
    'style',
    'ci',
    'perf'
  ],
  'maxMessageLength': 64,
  'minMessageLength': 3,
  'questions': [
    'type',
    'scope',
    'subject',
    // 'body',
    // 'breaking',
    // 'issues',
    'lerna'
  ],
  'scopes': [],
  'types': {
    'chore': {
      'description': '构建流程或工具脚本等变更',
      'emoji': '🤖',
      'value': 'chore'
    },
    'ci': {
      'description': 'CI 相关的变更',
      'emoji': '🎡',
      'value': 'ci'
    },
    'docs': {
      'description': '只包含文档变更',
      'emoji': '✏️',
      'value': 'docs'
    },
    'feat': {
      'description': '新功能',
      'emoji': '🎸',
      'value': 'feat'
    },
    'fix': {
      'description': 'Bug修复',
      'emoji': '🐛',
      'value': 'fix'
    },
    'perf': {
      'description': '提升性能的变更',
      'emoji': '⚡️',
      'value': 'perf'
    },
    'refactor': {
      'description': '不影响功能和bug的重构',
      'emoji': '💡',
      'value': 'refactor'
    },
    'release': {
      'description': '版本发布',
      'emoji': '🏹',
      'value': 'release'
    },
    'style': {
      'description': '代码格式化、注释等变更',
      'emoji': '💄',
      'value': 'style'
    },
    'test': {
      'description': '添加测试用例',
      'emoji': '💍',
      'value': 'test'
    }
  }
}
