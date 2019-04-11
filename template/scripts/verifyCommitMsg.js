const chalk = require('chalk')  // eslint-disable-line
const msgPath = process.env.GIT_PARAMS
const msg = require('fs').readFileSync(msgPath, 'utf-8').trim()

const commitRE = /^(v\d+\.\d+\.\d+(-(alpha|beta|rc.\d+))?$)|((revert: )?(feat|fix|docs|style|refactor|perf|test|workflow|ci|chore|types|build)(\(.+\))?: .{1,50})/
const mergeRE = /Merge .{1,50}/
if (!commitRE.test(msg) && !mergeRE.test(msg)) {
  console.log()
  console.error(
    `  ${chalk.bgRed.white(' ERROR ')} ${chalk.red(`Commit message 格式不正确.`)}\n\n` +
    chalk.red(`  本项目强制使用Commit message 规范格式. 如:\n\n`) +
    `    ${chalk.green(`feat(compiler): add 'comments' option`)}\n` +
    `    ${chalk.green(`fix(v-model): handle events on blur (close #28)`)}\n\n` +
    chalk.red(`  请使用 ${chalk.cyan(`npm run commit`)} 命令生成Commit message.\n`)
  )
  process.exit(1)
}
