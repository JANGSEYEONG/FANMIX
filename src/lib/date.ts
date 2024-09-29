import { format } from 'date-fns';

/**
 * Date 객체를 'YY.MM.DD' 형식의 문자열로 변환
 * @param date - 변환할 Date 객체
 * @returns 'YY.MM.DD' 형식의 문자열
 */
export const formatDateToYYMMDD = (date: Date): string => {
  return format(date, 'yy.MM.dd');
};

/**
 * ISO 8601 형식의 문자열을 Date 객체로 변환
 * @param dateString - 변환할 ISO 8601 형식의 문자열 (예: '2024-09-25T16:23:08.015122900')
 * @returns Date 객체
 */
export const parseISOToDate = (dateString: string): Date => {
  return new Date(dateString);
};

/**
 * Date 객체를 ISO 8601 형식의 문자열로 변환
 * @param date - 변환할 Date 객체
 * @returns ISO 8601 형식의 문자열 (예: '2024-09-25T16:23:08.015Z')
 */
export const formatDateToISO = (date: Date): string => {
  return date.toISOString();
};
