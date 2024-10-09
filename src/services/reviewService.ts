import { ax, handleAxiosError } from './axios';

import type {
  CreateInfluencerReviewRequest,
  CreateInfluencerReviewResponse,
  MyLatestReviewForInfluencerResponse,
  PopularReviewsResponse,
  UpdateInfluencerReviewRequest,
} from '@/types/service/reviewServiceType';

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

  // 특정 인플루언서 리뷰 중 나의 마지막 한줄리뷰
  myLatestReviewForInfluencer: async (
    influencerId: number,
  ): Promise<MyLatestReviewForInfluencerResponse> => {
    try {
      const response = await ax.get<MyLatestReviewForInfluencerResponse>(
        `/api/members/influencers/${influencerId}/reviews/latest`,
      );
      console.log('myLatestReviewForInfluencer:', response.data);
      return response.data;
    } catch (error) {
      handleAxiosError(error);
      throw error;
    }
  },

  // 한줄리뷰 작성
  createInfluencerReview: async (
    influencerId: number,
    reviewData: CreateInfluencerReviewRequest,
  ): Promise<CreateInfluencerReviewResponse> => {
    try {
      const response = await ax.post(`/api/influencers/${influencerId}/reviews`, reviewData);
      console.log('createInfluencerReview:', response.data);
      return response.data;
    } catch (error) {
      handleAxiosError(error);
      throw error;
    }
  },
  // 한줄리뷰 수정
  updateInfluencerReview: async (
    influencerId: number,
    reviewId: number,
    reviewData: UpdateInfluencerReviewRequest,
  ) => {
    try {
      const response = await ax.put(
        `/api/influencers/${influencerId}/reviews/${reviewId}`,
        reviewData,
      );
      console.log('updateInfluencerReview:', response.data);
      return response.data;
    } catch (error) {
      handleAxiosError(error);
      throw error;
    }
  },

  // 한줄리뷰 삭제
  deleteInfluencerReview: async (influencerId: number, reviewId: number) => {
    try {
      const response = await ax.delete(`/api/influencers/${influencerId}/reviews/${reviewId}`);
      console.log('deleteInfluencerReview:', response.data);
      return response.data;
    } catch (error) {
      handleAxiosError(error);
      throw error;
    }
  },

  // 전체 한줄리뷰 조회

  // 한줄리뷰 좋아요/싫어요 평가

  // 특정 인플루언서의 한줄리뷰 전체 조회

  // 리뷰 상세조회, 댓글 리스트 포힘

  // 한줄리뷰 댓글 작성

  // 한줄리뷰 댓글 삭제
};
