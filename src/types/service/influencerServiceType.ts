import type { ResponseBase } from './apiResponseBase';
import type { Gender } from '../domain/userType';
import type {
  InfluencerSearchSortType,
  InfluencerSearchType,
  PlatformLink,
} from '../domain/influencerType';

// 메인 - 주간 인기 인플루언서
export interface WeeklyHotInfluencersResponse extends ResponseBase {
  data: {
    influencerId: number;
    influencerName: string;
    influencerImageUrl: string;
    isAuthenticated: boolean;
  }[];
}

export interface RecentlyVerifiedInfluencerResponse extends ResponseBase {
  data: {
    influencerId: number;
    influencerName: string;
    influencerImageUrl: string;
    isAuthenticated: boolean;
  }[];
}

// 원픽 인플루언서 설정
export interface UpdateOnePickInfluencerRequest {
  influencerId: number;
  onePick: boolean; // true:원픽지정, false:일반팬
}
export interface UpdateOnePickInfluencerResponse extends ResponseBase {
  data: {
    memberId: number;
    memberName: string;
    influencerId: number;
    influencerName: string;
    isOnepick: number; //0,1
    onepickEnrolltime: string;
  };
}

// 사용자의 원픽 인플루언서 조회
export interface UserOnePickInfluencerRequest {
  userId: number;
}
export interface UserOnePickInfluencerResponse extends ResponseBase {
  data: {
    influencerId: number;
    influencerName: string;
    influencerImageUrl: string;
    gender: Gender;
    nationality: string;
    tagList: string[];
    averageRating: number;
    contentsRating: number;
    communicationRating: number;
    trustRating: number;
    totalReviewCount: number;
    isAuthenticated: boolean;
    isFollowing: boolean;
    fanChannelId: number | null;
  } | null;
}

// 인플루언서 검색 - 이름 (메인 검색))
export interface SearchInfluencersByNameResponse extends ResponseBase {
  data: {
    influencerId: number;
    influencerName: string;
    influencerImageUrl: string;
    isAuthenticated: boolean;
  }[];
}

// 인플루언서 검색 - 이름, 태그, 정렬 (인플루언서 찾기 페이지)
export interface SearchInfluencersRequest {
  searchType: InfluencerSearchType;
  keyword: string;
  sort: InfluencerSearchSortType;
}

// 인플루언서 검색 - 이름, 태그, 정렬 (인플루언서 찾기 페이지)
export interface SearchInfluencersResponse extends ResponseBase {
  data: {
    influencerId: number;
    influencerName: string;
    influencerImageUrl: string;
    tagList: string[];
    latestReviewDate: string; // ISO 8601 format date string
    averageRating: number;
    contentsRating: number;
    communicationRating: number;
    trustRating: number;
    isAuthenticated: boolean;
  }[];
}

// 인플루언서 상세정보
export interface InfluencerDetailRequest {
  influencerId: number;
}

export interface InfluencerDetailResponse extends ResponseBase {
  data: {
    influencerId: number;
    influencerName: string;
    influencerImageUrl: string;
    selfIntroduction: string;
    gender: Gender;
    nationality: string;

    snsList: PlatformLink[];
    mediaList: PlatformLink[];
    plusList: PlatformLink[];

    contentsOrientationList: [number, number, number]; // 창의 - 진지 - 역동 순서
    tagList: string[];
    latestReviewDate: string;
    averageRating: number;
    contentsRating: number;
    communicationRating: number;
    trustRating: number;
    totalReviewCount: number;
    isAuthenticated: boolean;
    isFollowing: boolean;
    fanChannelId: number;

    bestReview: {
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
    };
  };
}
