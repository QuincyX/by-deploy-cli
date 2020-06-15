#!/usr/bin/env node
import inquirer from 'inquirer'
// import yargs from 'yargs'
const yargs = require('yargs')
const chalk = require('chalk')
const pkg = require('../package.json')
const gitService = require('./service/git')

const argv = yargs
  .command(
    'up',
    '-> sync fork to upstream',
    (yargs: any) => {
      yargs.option('url', {
        alias: 'u',
        describe: 'url to bind on',
        default: 'http://yargs.js.org/',
      })
    },
    (argv: any) => {
      const { _, $0, ...payload } = argv
      foo(payload)
    }
  )
  .command(
    'git',
    '-> get git info',
    (yargs: any) => {},
    (argv: any) => {
      const { _, $0, ...payload } = argv
      gitService()
    }
  )
  .usage(
    `【 ${pkg.name} 】\nBBYY deploy toolkit cli \n\nUsage: by <command> <option>`
  )
  .help('help')
  .alias('help', 'h')
  .version('version', pkg.version)
  .alias('version', 'v').argv

function foo(payload?: any) {
  console.log(chalk.blue('>>>>>> payload: '), payload)
}
