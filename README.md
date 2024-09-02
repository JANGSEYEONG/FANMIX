```bash
# git 관련 추가된 cli

# 1. 커밋 컨벤션 편하게 지키려고 추가
yarn commit

# 2. 브랜치 재작성하기 귀찮으니까 만듬
yarn push
yarn branch # 생성, 전환, 삭제있음. 생성 시에 컨벤션 편하게 지키려고 추가

# 권한 오류가 발생하면, 아래 스크립트를 실행하여 필요한 권한 부여하세요~
chmod +x scripts/update_permissions.sh
./scripts/update_permissions.sh
```
