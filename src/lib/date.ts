import { format } from 'date-fns';

/**
 * Date 객체를 'YY.MM.DD' 형식의 문자열로 변환
 * @param date - 변환할 Date 객체
 * @returns 'YY.MM.DD' 형식의 문자열
 */
export const formatDateToYYMMDD = (date: Date): string => {
  return format(date, 'yy.MM.dd');
};
