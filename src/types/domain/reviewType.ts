import { z } from 'zod';

// 리뷰 최대 점수
export const REVIEW_MAX_SCORE = 10;

// 리뷰 모드
export const REVIEW_MODE = {
  VIEW: 'VIEW',
  FORM_CREATE: 'FORM_CREATE',
  FORM_EDIT: 'FORM_EDIT',
} as const;
export type ReviewMode = keyof typeof REVIEW_MODE;

// 리뷰 생성 데이터 관련 타입
export const reviewFormSchema = z.object({
  content: z.string().min(1),
  contentsRating: z.number().min(1).max(10),
  communicationRating: z.number().min(1).max(10),
  trustRating: z.number().min(1).max(10),
});

export type ReviewFormData = z.infer<typeof reviewFormSchema>;

export interface MyLatestReview {
  reviewId: number;
  isBefore15Days: boolean; //마지막 리뷰 15일 전인지 후인지
  contentsRating: number;
  communicationRating: number;
  trustRating: number;
  reviewDate: string;
  reviewContent: string;
}
