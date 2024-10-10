import { ax, handleAxiosError } from './axios';

import type {
  AllInfluencersAllReviewsRequest,
  AllInfluencersAllReviewsResponse,
  CreateInfluencerReviewCommentRequest,
  CreateInfluencerReviewCommentResponse,
  CreateInfluencerReviewRequest,
  CreateInfluencerReviewResponse,
  DeleteInfluencerReviewCommentRequest,
  DeleteInfluencerReviewRequest,
  InfluencerReviewDetailWithCommentsRequest,
  InfluencerReviewDetailWithCommentsResponse,
  InfluencerReviewLikeDislikeRequest,
  MyLatestReviewForInfluencerResponse,
  PopularReviewsResponse,
  SpecificInfluencerAllReviewsRequest,
  SpecificInfluencerAllReviewsResponse,
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
  createInfluencerReview: async ({
    influencerId,
    reviewData,
  }: CreateInfluencerReviewRequest): Promise<CreateInfluencerReviewResponse> => {
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
  updateInfluencerReview: async ({
    influencerId,
    reviewId,
    reviewData,
  }: UpdateInfluencerReviewRequest) => {
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
  deleteInfluencerReview: async ({ influencerId, reviewId }: DeleteInfluencerReviewRequest) => {
    try {
      const response = await ax.delete(`/api/influencers/${influencerId}/reviews/${reviewId}`);
      console.log('deleteInfluencerReview:', response.data);
      return response.data;
    } catch (error) {
      handleAxiosError(error);
      throw error;
    }
  },

  // 특정 인플루언서의 한줄리뷰 전체 조회
  specificInfluencerAllReviews: async ({
    influencerId,
    sort,
  }: SpecificInfluencerAllReviewsRequest) => {
    try {
      const response = await ax.get<SpecificInfluencerAllReviewsResponse>(
        `/api/influencers/${influencerId}/reviews?sort=${sort}`,
      );
      console.log('specificInfluencerAllReviews:', response.data);
      return response.data;
    } catch (error) {
      handleAxiosError(error);
      throw error;
    }
  },

  // 전체 한줄리뷰 조회
  allInfluencersAllReviews: async ({ sort }: AllInfluencersAllReviewsRequest) => {
    try {
      const response = await ax.get<AllInfluencersAllReviewsResponse>(
        `/api/influencers/reviews?sort=${sort}`,
      );
      console.log('allInfluencersAllReviews:', response.data);
      return response.data;
    } catch (error) {
      handleAxiosError(error);
      throw error;
    }
  },

  // 리뷰 상세조회, 댓글 리스트 포힘
  influencerReviewDetailWithComments: async ({
    influencerId,
    reviewId,
  }: InfluencerReviewDetailWithCommentsRequest) => {
    try {
      const response = await ax.get<InfluencerReviewDetailWithCommentsResponse>(
        `/api/influencers/${influencerId}/reviews/${reviewId}/comments`,
      );
      console.log('influencerReviewDetailWithComments:', response.data);
      return response.data;
    } catch (error) {
      handleAxiosError(error);
      throw error;
    }
  },

  // 한줄리뷰 댓글 작성
  createInfluencerReviewComment: async ({
    influencerId,
    reviewId,
    content,
  }: CreateInfluencerReviewCommentRequest): Promise<CreateInfluencerReviewCommentResponse> => {
    try {
      const response = await ax.post(
        `/api/influencers/${influencerId}/reviews/${reviewId}/comments`,
        { content },
      );
      console.log('createInfluencerReviewComment:', response.data);
      return response.data;
    } catch (error) {
      handleAxiosError(error);
      throw error;
    }
  },

  // 한줄리뷰 댓글 삭제
  deleteInfluencerReviewComment: async ({
    influencerId,
    reviewId,
    commentId,
  }: DeleteInfluencerReviewCommentRequest) => {
    try {
      const response = await ax.delete(
        `/api/influencers/${influencerId}/reviews/${reviewId}/comments/${commentId}`,
      );
      console.log('deleteInfluencerReviewComment:', response.data);
      return response.data;
    } catch (error) {
      handleAxiosError(error);
      throw error;
    }
  },

  // 한줄리뷰 좋아요/싫어요 평가
  influencerReviewLikeDislike: async ({
    influencerId,
    reviewId,
    isLike,
  }: InfluencerReviewLikeDislikeRequest) => {
    try {
      const response = await ax.post(`/api/influencers/${influencerId}/reviews/${reviewId}/like`, {
        isLike,
      });
      console.log('influencerReviewLikeDislike:', response.data);
      return response.data;
    } catch (error) {
      handleAxiosError(error);
      throw error;
    }
  },
};
