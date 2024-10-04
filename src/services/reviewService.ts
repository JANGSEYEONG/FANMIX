import { ax, handleAxiosError } from './axios';

import type { PopularReviewsResponse } from '@/types/service/reviewServiceType';

export const reviewService = {
  // 인기 리뷰 조회
  popularReviews: async (): Promise<PopularReviewsResponse> => {
    try {
      const response = await ax.get<PopularReviewsResponse>('/api/influencers/reviews/hot5');
      console.log('getWeeklyHotInfluencers:', response.data);
      return response.data;
    } catch (error) {
      handleAxiosError(error);
      throw error;
    }
  },
  // 전체 한줄리뷰 조회

  // 한줄리뷰 작성

  // 한줄리뷰 수정

  // 한줄리뷰 삭제

  // 한줄리뷰 좋아요/싫어요 평가

  // 특정 인플루언서의 한줄리뷰 전체 조회

  // 특정 인플루언서 리뷰 중 나의 마지막 한줄리뷰

  // 리뷰 상세조회, 댓글 리스트 포힘

  // 한줄리뷰 댓글 작성

  // 한줄리뷰 댓글 삭제
};
