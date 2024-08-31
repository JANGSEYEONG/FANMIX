#!/bin/sh

# Husky 환경 설정
. "$(dirname "$0")/.husky/_/husky.sh"

# pre-commit 훅 실행
if [ -f .husky/pre-commit ]; then
  .husky/pre-commit
else
  echo "Warning: .husky/pre-commit file not found. Skipping pre-commit hook."
fi

# pre-commit 훅이 성공적으로 실행되었다면 Commitizen 실행
if [ $? -eq 0 ]; then
  HUSKY=0 cz
else
  echo "Pre-commit hook failed. Aborting commit."
  exit 1
fi