#!/usr/bin/env bash

yarn build &&
cd build &&
git init &&
git add . &&
git commit -m 'deploying' &&
git remote add origin git@gitee.com:Yinyong_8799/sg-website.git &&
git push -u origin master -f
cd -