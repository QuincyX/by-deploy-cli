const exec = require('child_process').execSync
const print = require('../util/log')

const getGitInfo = (): string => {
  let name
  let email
  try {
    name = exec('git config --get user.name')
    email = exec('git config --get user.email')
  } catch (e) {}
  return (name || '') + (email || '')
}

module.exports = function run() {
  const info = getGitInfo()
  print.success('git info')
  print.info(info)
}
