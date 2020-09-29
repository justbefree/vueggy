#!/bin/bash
# @Author: Just be free
# @Date:   2020-05-29 13:40:04
# @Last Modified by:   Just be free
# @Last Modified time: 2020-09-29 18:12:11

#!/usr/bin/env sh

# 当发生错误时中止脚本
set -e

# 构建
npm run build

# cd 到构建输出的目录下 
cd docs

# 部署到自定义域域名
# echo 'www.example.com' > CNAME
git init
git add -A
git commit -m 'deploy'

# 部署到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master
git push -f git@github.com:justbefree/vueggy.git master:gh-pages

# 部署到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

cd -