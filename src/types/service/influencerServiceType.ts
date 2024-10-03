import type { ResponseBase } from './apiResponseBase';

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
