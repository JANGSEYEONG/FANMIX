import type { ResponseBase } from './apiResponseBase';
import type {
  AllInfluencerReviewsSortType,
  SpecificInfluencerReviewsSortType,
} from '../domain/reviewType';

// 메인페이지 - 인기있는 리뷰
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
  reviewData: {
    content: string;
    contentsRating: number;
    communicationRating: number;
    trustRating: number;
  };
}
// 리뷰 생성 요청
export interface CreateInfluencerReviewRequest extends InfluencerReviewRequest {
  influencerId: number;
}

// 리뷰 수정 요청
export interface UpdateInfluencerReviewRequest extends InfluencerReviewRequest {
  influencerId: number;
  reviewId: number;
}

// 백엔드에서 아직 완성데이터 안넘겨줌
interface InfluencerReviewResponse {
  reviewId: number;
  isBefore15Days: boolean;
  contentsRating: number;
  communicationRating: number;
  trustRating: number;
  reviewDate: string; // ISO 8601 형식의 날짜 문자열
  reviewContent: string;
}

// 리뷰 생성 응답
export interface CreateInfluencerReviewResponse extends ResponseBase {
  data: InfluencerReviewResponse;
}
// 리뷰 수정 응답
export interface UpdateInfluencerReviewResponse extends ResponseBase {
  data: InfluencerReviewResponse;
}

// 리뷰 삭제 요청
export interface DeleteInfluencerReviewRequest {
  influencerId: number;
  reviewId: number;
}

// 특정 인플루언서의 전체 한줄리뷰 - 정렬
export interface SpecificInfluencerAllReviewsRequest {
  influencerId: number;
  sort: SpecificInfluencerReviewsSortType;
}

// 특정 인플루언서의 전체 한줄리뷰
export interface SpecificInfluencerAllReviewsResponse extends ResponseBase {
  data: {
    reviewId: number;
    reviewerId: number;
    reviewerNickName: string;
    averageRating: number;
    contentsRating: number;
    communicationRating: number;
    trustRating: number;
    reviewDate: string;
    reviewContent: string;
    reviewLikeCount: number;
    reviewDislikeCount: number;
    reviewCommentsCount: number;
    isMyReview: boolean;
    isLiked: boolean;
    isDisliked: boolean;
  }[];
}

// 모든 인플루언서의 전체 리뷰 데이터
export interface AllInfluencersAllReviewsRequest {
  sort: AllInfluencerReviewsSortType;
}

// 특정 인플루언서의 전체 리뷰 데이터
export interface AllInfluencersAllReviewsResponse extends ResponseBase {
  data: {
    influencerId: number;
    influencerName: string;
    influencerImageUrl: string;
    isAuthenticated: boolean;
    reviewId: number;
    reviewerId: number;
    reviewerNickName: string;
    averageRating: number;
    contentsRating: number;
    communicationRating: number;
    trustRating: number;
    reviewDate: string;
    reviewContent: string;
    reviewLikeCount: number;
    reviewDislikeCount: number;
    reviewCommentsCount: number;
    isMyReview: boolean;
    isLiked: boolean;
    isDisliked: boolean;
  }[];
}

// 리뷰 상세보기 (리뷰 내용 + 코멘트 리스트)
export interface InfluencerReviewDetailWithCommentsRequest {
  influencerId: number;
  reviewId: number;
}
export interface InfluencerReviewDetailWithCommentsResponse extends ResponseBase {
  data: {
    review: {
      reviewId: number;
      reviewerId: number;
      reviewerNickName: string;
      averageRating: number;
      contentsRating: number;
      communicationRating: number;
      trustRating: number;
      reviewDate: string;
      reviewContent: string;
      reviewLikeCount: number;
      reviewDislikeCount: number;
      reviewCommentsCount: number;
      isLiked: boolean;
      isDisliked: boolean;
    };
    commentList: {
      commentId: number;
      commenterId: number;
      commenterNickName: string;
      commentContent: string;
      isMyComment: boolean;
      isDeleted: boolean;
      commentDate: string;
    }[];
  };
}

// 리뷰 댓글 생성
export interface CreateInfluencerReviewCommentRequest {
  influencerId: number;
  reviewId: number;
  content: string;
}

export interface CreateInfluencerReviewCommentResponse extends ResponseBase {
  data: {
    commentId: number;
    commenterId: number;
    commenterNickName: string;
    commentDate: string;
    commentContent: string;
    isMyComment: boolean;
    isDeleted: boolean;
  };
}

// 리뷰 댓글 삭제
export interface DeleteInfluencerReviewCommentRequest {
  influencerId: number;
  reviewId: number;
  commentId: number;
}

// 리뷰 좋아요/싫어요
export interface InfluencerReviewLikeDislikeRequest {
  influencerId: number;
  reviewId: number;
  isLike: boolean;
}
