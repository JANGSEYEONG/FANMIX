/**
 * 텍스트를 입력받은 줄 수에 맞게 최대한 균등하게 나누는 함수
 * @param text 나눌 텍스트
 * @param lines 나눌 줄 수 (기본값: 2)
 * @returns 줄바꿈(\n)으로 구분된 문자열
 */
export const splitTextEvenly = (text: string, lines: number = 2): string => {
  // 줄 수가 1 이하면 그냥 원본 텍스트 반환
  if (lines <= 1) return text;

  const words = text.split(' '); // 단어 단위로 분리
  const totalLength = text.length;
  const avgLineLength = Math.ceil(totalLength / lines); // 줄당 평균 길이 계산 (올림)

  const result: string[] = [];
  let currentLine = '';
  let currentLineLength = 0;

  // 단어들을 돌면서 줄 나누기
  for (const word of words) {
    // 현재 줄 길이 + 새 단어 길이가 평균 길이 초과하고, 아직 줄 수 덜 찼으면 실행
    if (currentLineLength + word.length > avgLineLength && result.length < lines - 1) {
      result.push(currentLine.trim());
      currentLine = '';
      currentLineLength = 0;
    }
    currentLine += word + ' ';
    currentLineLength += word.length + 1; // 1은 공백 길이
  }

  // 마지막 줄 처리
  if (currentLine) {
    result.push(currentLine.trim());
  }

  // 줄바꿈으로 합쳐서 반환
  return result.join('\n');
};
