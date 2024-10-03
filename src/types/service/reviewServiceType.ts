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
