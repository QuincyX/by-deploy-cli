# this is a deploy tool for by' private project

- 模板功能
> by create xxx

- 





require('download-git-repo')
require('fs').existsSync
require('ora') //用于命令行上的加载效果
require('user-home')  //用于获取用户的根目录
require('tildify') //将绝对路径转换成带波浪符的路径
require('rimraf').sync // 相当于UNIX的“rm -rf”命令