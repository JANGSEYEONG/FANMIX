import api from './fetch';
import type {
  InfluencerReviewDetailWithCommentsResponse,
  PopularReviewsResponse,
} from '@/types/service/reviewServiceType';

// 메인 - 인기 리뷰 리스트
export const getPopularReviewsData = async (): Promise<PopularReviewsResponse> => {
  return api.get<PopularReviewsResponse>(
    `${process.env.NEXT_PUBLIC_URL}/api/influencers/reviews/hot5`,
  );
};

// 리뷰 상세보기 (리뷰데이터 + 댓글 리스트)
export const getInfluencerReviewDetailWithCommentsData = async (
  influencerId: string,
  reviewId: string,
): Promise<InfluencerReviewDetailWithCommentsResponse> => {
  return api.get<InfluencerReviewDetailWithCommentsResponse>(
    `${process.env.NEXT_PUBLIC_URL}/api/influencers/${influencerId}/reviews/${reviewId}/comments`,
    { hasAuth: true },
  );
};
