import type { ResponseBase } from './apiResponseBase';
import type { Gender } from '../domain/userType';
import type {
  InfluencerSearchSortType,
  InfluencerSearchType,
  PlatformLink,
} from '../domain/influencerType';

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

export interface UpdateOnePickInfluencerRequest {
  influencerId: number;
  onePick: number; // 1:원픽지정, 0 :일반팬
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

export interface UserOnePickInfluencerResponse extends ResponseBase {
  data: {
    influencerId: number;
    influencerName: string;
    influencerImageUrl: string;
    selfIntroduction: string;
    tagList: string[];
    isAuthenticated: boolean;
    isFollowing: boolean;
    fanChannelId: number;

    memberId: number;
    memberName: string;
    isOnepick: number; //원픽은 항상 1
    onepickEnrolltime: string;
  };
}

export interface SearchInfluencersByNameResponse extends ResponseBase {
  data: {
    influencerId: number;
    influencerName: string;
    influencerImageUrl: string;
    isAuthenticated: boolean;
  }[];
}

export interface SearchInfluencersRequest {
  searchType: InfluencerSearchType;
  keyword: string;
  sort: InfluencerSearchSortType;
}
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

    contentsOrientationList: number[]; // 창의 - 진지 - 역동 순서
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
