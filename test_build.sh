#!/bin/bash
echo '=== package.json ==='
cat package.json
echo ''
echo '=== Files ==='
find . -name '*.tsx' -o -name '*.ts' | sort
echo ''
echo '=== npm install ==='
npm install 2>&1
echo ''
echo '=== npm run build ==='
npm run build 2>&1
