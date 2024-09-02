const typeChoices = require('./constant');
const { showDecoratedMessage } = require('./util');

module.exports = {
  prompter: (cz, commit) => {
    const questions = [
      {
        type: 'list',
        name: 'type',
        message: '1️⃣  커밋 라벨을 선택하세요:',
        choices: typeChoices,
      },
      {
        type: 'input',
        name: 'subject',
        message: '2️⃣  커밋 메시지를 입력하세요:',
        validate: (input) => {
          if (input.length === 0) {
            return '커밋 메시지는 비워둘 수 없습니다.';
          }
          if (input.length > 100) {
            return '커밋 메시지는 100자를 넘을 수 없습니다.';
          }
          return true;
        },
      },
      {
        type: 'input',
        name: 'ticketNumber',
        message: '3️⃣  이슈 번호를 입력하세요 (숫자만):',
        validate: (input) => {
          if (!/^\d+$/.test(input)) {
            return '유효한 숫자를 입력해주세요.';
          }
          return true;
        },
      },
    ];

    cz.prompt(questions).then((answers) => {
      const { type, subject, ticketNumber } = answers;
      const message = `${type}: ${subject} (#${ticketNumber})`;

      showDecoratedMessage(message);

      // 확인 질문
      cz.prompt([
        {
          type: 'confirm',
          name: 'confirmCommit',
          message: '✅ 커밋 메시지가 위와 같아요! 커밋할까요?',
          default: false,
        },
      ]).then((confirmAnswer) => {
        if (confirmAnswer.confirmCommit) {
          commit(message);
        } else {
          showDecoratedMessage('❌ 커밋이 취소되었습니다.');
        }
      });
    });
  },
};
