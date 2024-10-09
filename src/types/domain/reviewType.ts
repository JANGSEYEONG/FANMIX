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

// 특정 인플루언서의 전체 리뷰 정렬 타입 (인플루언서 상세보기 페이지에서 사용)
export const SPECIFIC_INFLUENCER_REVIEWS_SORT_TYPES = {
  LATEST: 'LATEST',
  RECOMMENDED: 'RECOMMENDED',
  // TIER: 'TIER', 티어는 레벨시스템 구현되면
} as const;
export type SpecificInfluencerReviewsSortType = keyof typeof SPECIFIC_INFLUENCER_REVIEWS_SORT_TYPES;

// #20241009.syjang, 특정/전체 정렬 타입이 현재는 같지만, 나중에 확장 가능성을 위해 분리함
// 전체 인플루언서의 전체 리뷰 정렬 타입 (한줄리뷰 페이지에서 사용)
export const ALL_INFLUENCER_REVIEWS_SORT_TYPES = {
  LATEST: 'LATEST',
  RECOMMENDED: 'RECOMMENDED',
  // TIER: 'TIER', 티어는 레벨시스템 구현되면
} as const;
export type AllInfluencerReviewsSortType = keyof typeof ALL_INFLUENCER_REVIEWS_SORT_TYPES;
