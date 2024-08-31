module.exports = {
  prompter: (cz, commit) => {
    const typeChoices = [
      { value: '✨ feat', name: '✨ feat:\t새로운 기능' },
      { value: '🐛 fix', name: '🐛 fix:\t버그 수정' },
      { value: '♻️ refactor', name: '♻️ refactor:\t코드 리팩토링' },
      { value: '🎨 design', name: '🎨 design:\tCSS 등 사용자 UI 디자인 변경' },
      {
        value: '💎 style',
        name: '💎 style:\t코드 포맷팅, 코드 변경이 없는 경우',
      },
      {
        value: '📦 chore',
        name: '📦 chore:\t빌드 업무 수정, 패키지 매니저 설정, 자잘한 코드 수정',
      },
      { value: '💬 comment', name: '💬 comment:\t주석 추가 및 변경' },
      { value: '📚 docs', name: '📚 docs:\t문서 수정' },
      {
        value: '🚑 !HOTFIX',
        name: '🚑 !HOTFIX:\t급하게 치명적인 버그를 고치는 경우',
      },
      { value: '🚀 perf', name: '🚀 perf:\t성능 개선' },
    ];

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

      const divider = '='.repeat(50);
      const decoratedMessage = `✅ 커밋 메시지가 다음과 같아요! 커밋할까요?
      ${divider}
      ${message}
      ${divider}
      `;
      // 확인 질문
      cz.prompt([
        {
          type: 'confirm',
          name: 'confirmCommit',
          message: decoratedMessage,
          default: false,
        },
      ]).then((confirmAnswer) => {
        if (confirmAnswer.confirmCommit) {
          commit(message);
        } else {
          console.log('❌ 커밋이 취소되었습니다.');
        }
      });
    });
  },
};
