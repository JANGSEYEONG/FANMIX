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

export interface InfluencersByNameResponse extends ResponseBase {
  data: {
    influencerId: number;
    influencerName: string;
    influencerImageUrl: string;
    isAuthenticated: boolean;
  }[];
}
