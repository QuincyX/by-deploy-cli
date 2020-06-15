const chalk = require('chalk')

module.exports = {
  info(payload: any) {
    console.log(chalk.yellow(payload))
  },
  success(payload: any) {
    console.log(chalk.green(payload))
  },
  warning(payload: any) {
    console.log(chalk.orange(payload))
  },
  error(payload: any) {
    console.log(chalk.red(payload))
  },
}
