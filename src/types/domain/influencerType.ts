import type { PlatformType } from '@/constants/platform';

export interface Influencer {
  influencerId: number;
  name: string;
  imageSrc: string;
  isVerified: boolean;
  averageRating: {
    contentsRating: number;
    communicationRating: number;
    trustRating: number;
  };
}

////////////////////////

export interface InteractionStat {
  likesCount: number;
  dislikesCount: number;
  commentsCount?: number;
}

// 인플루언서 플랫폼 타입
export interface PlatformLink {
  platformType: PlatformType;
  url: string;
}

// 인플루언서 태그/활동명 검색 타입
export const INFLUENCER_SEARCH_TYPES = {
  INFLUENCER_NAME: 'INFLUENCER_NAME',
  TAG: 'TAG',
} as const;
export const INFLUENCER_SEARCH_SORT_TYPES = {
  VIEW_COUNT: 'VIEW_COUNT',
  RATING: 'RATING',
  LATEST_REVIEW: 'LATEST_REVIEW',
} as const;
export type InfluencerSearchType = keyof typeof INFLUENCER_SEARCH_TYPES;
export type InfluencerSearchSortType = keyof typeof INFLUENCER_SEARCH_SORT_TYPES;
