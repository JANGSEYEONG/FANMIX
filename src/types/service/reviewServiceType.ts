import type { ResponseBase } from './apiResponseBase';

export interface PopularReviewsResponse extends ResponseBase {
  data: {
    influencerId: number;
    influencerName: string;
    influencerImageUrl: string;
    influencerIsAuthenticated: boolean;
    reviewId: number;
    reviewerId: number;
    reviewerNickName: string;
    averageRating: number;
    contentsRating: number;
    communicationRating: number;
    trustRating: number;
    reviewDate: string; // ISO 8601 형식의 날짜 문자열
    reviewContent: string;
    reviewLikeCount: number;
    reviewDislikeCount: number;
    reviewCommentsCount: number;
    isLiked: boolean;
    isDisliked: boolean;
  }[];
}

// 내 마지막 한줄리뷰 응답
export interface MyLatestReviewForInfluencerResponse extends ResponseBase {
  data: {
    reviewId: number;
    isBefore15Days: boolean;
    contentsRating: number;
    communicationRating: number;
    trustRating: number;
    reviewDate: string; // ISO 8601 형식의 날짜 문자열
    reviewContent: string;
  };
}

// 한줄리뷰 작성 요청값
interface InfluencerReviewRequest {
  content: string;
  contentsRating: number;
  communicationRating: number;
  trustRating: number;
}
// 리뷰 생성 요청 (현재는 ReviewRequest와 동일)
export interface CreateInfluencerReviewRequest extends InfluencerReviewRequest {}

// 리뷰 수정 요청 (현재는 ReviewRequest와 동일)
export interface UpdateInfluencerReviewRequest extends InfluencerReviewRequest {}

// 백엔드에서 아직 완성데이터 안넘겨줌
interface InfluencerReviewResponse {
  content: string;
  contentsRating: number;
  communicationRating: number;
  trustRating: number;
}

// 리뷰 생성 응답
export interface CreateInfluencerReviewResponse extends ResponseBase {
  data: InfluencerReviewResponse;
}
// 리뷰 수정 응답
export interface UpdateInfluencerReviewResponse extends ResponseBase {
  data: InfluencerReviewResponse;
}
