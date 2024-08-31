#!/bin/bash

# Husky 스크립트에 실행 권한 부여
chmod +x .husky/pre-commit
chmod +x .husky/commit-msg

# commitizen.sh 스크립트에 실행 권한 부여
chmod +x commitizen.sh

echo "File permissions updated successfully."