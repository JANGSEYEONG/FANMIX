const inquirer = require('inquirer');
const { execSync, spawnSync } = require('child_process');

const { showDecoratedMessage, getCurrentBranchNames } = require('./util');

const pushBranch = async () => {
  const branchNames = getCurrentBranchNames();

  const { branch } = await inquirer.prompt([
    {
      type: 'list',
      name: 'branch',
      message: '🚀 어떤 브랜치를 push 하시겠어요?',
      choices: branchNames,
    },
  ]);

  try {
    // 현재 브랜치가 원격 저장소에 있는지 확인
    const remoteExists = doesRemoteBranchExist(branch);

    if (!remoteExists) {
      const { confirmPush } = await inquirer.prompt([
        {
          type: 'confirm',
          name: 'confirmPush',
          message: `🌟 '${branch}' 브랜치가 원격 저장소에 없습니다. 새로 push 하시겠어요?`,
          default: true,
        },
      ]);

      if (!confirmPush) {
        console.log('👌 Push가 취소되었어요.');
        return;
      }
    }

    const result = spawnSync('git', ['push', 'origin', branch], { encoding: 'utf-8' });

    const output = result.stdout + result.stderr;

    if (output.includes('Everything up-to-date')) {
      showDecoratedMessage(`ℹ️ '${branch}' 브랜치는 이미 최신 상태예요!`);
    } else if (output.includes('->')) {
      showDecoratedMessage(`🎉 '${branch}' 브랜치가 성공적으로 push 되었어요!`);
    } else {
      showDecoratedMessage('🤔 Push 결과를 확인해주세요.');
    }

    // 에러 코드 확인
    if (result.status !== 0) {
      throw new Error(`Git push failed with status ${result.status}`);
    }
  } catch (error) {
    console.error(`🙈 앗! Push 중 오류가 발생했어요: ${error.message}`);

    if (error.message.includes('rejected')) {
      console.log(
        '💡 Tip: 원격 브랜치가 로컬 브랜치보다 앞서 있을 수 있어요. pull 먼저 해보는 건 어떨까요?',
      );
    }
  }
};

const doesRemoteBranchExist = async (branch) => {
  try {
    execSync(`git ls-remote --exit-code --heads origin ${branch}`, { encoding: 'utf-8' });
    return true;
  } catch (error) {
    return false;
  }
};

pushBranch();
