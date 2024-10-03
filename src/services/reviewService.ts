import { ax, handleAxiosError } from './axios';

import type { PopularReviewsResponse } from '@/types/service/reviewServiceType';

export const reviewService = {
  // 인기 리뷰 조회
  getPopularReviews: async (): Promise<PopularReviewsResponse> => {
    try {
      const response = await ax.get<PopularReviewsResponse>('/api/influencers/reviews/hot5');
      console.log('getWeeklyHotInfluencers:', response.data);
      return response.data;
    } catch (error) {
      handleAxiosError(error);
      throw error;
    }
  },
  // 리뷰 상세조회
  // 리뷰 작성
  // 리뷰 수정
  // 리뷰 삭제
  // 리뷰 코멘트 작성
  // 리뷰 코멘트 삭제
  // 전체 한줄리뷰 조회
};
