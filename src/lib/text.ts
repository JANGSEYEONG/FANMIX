/**
 * 주어진 경로에서 첫번째 경로 세그먼트를 추출합니다.
 * @param path 분석할 전체 경로 문자열
 * @returns 추출된 루트 경로. 항상 '/'로 시작 (경로가 비어있거나 루트('/')만 있는 경우 '/'를 반환)
 */
export const getRootPath = (path: string) => {
  return '/' + (path.split('/')[1] || '');
};

/**
 * 숫자에 3자리마다 쉼표를 추가합니다.
 * @param num 형식을 지정할 숫자
 * @returns 쉼표가 추가된 문자열
 */
export const formatNumber = (num: number): string => {
  return num.toLocaleString('ko-KR');
};
