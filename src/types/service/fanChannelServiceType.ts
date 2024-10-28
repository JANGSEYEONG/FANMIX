import type { ResponseBase } from './apiResponseBase';
import type { AllFanChannelsSortType } from '../domain/fanChannelType';

export interface AllFanChannelsRequest {
  sort: AllFanChannelsSortType;
}

export interface AllFanChannelsResponse extends ResponseBase {
  data: {
    communityId: number;
    influencerId: number;
    influencerName: string;
    influencerImageUrl: string;
    authenticationStatus: 'REGISTERED' | 'CANCEL';
    followerCount: number;
    postCount: number;
    latestPostDate: string;
    isFollowing: boolean;
  }[];
}

export interface FanChannelInfoRequest {
  communityId: number;
}
export interface FanChannelInfoRespose extends ResponseBase {
  data: {
    influencer: number;
    influencerName: string;
    influencerImageUrl: string;
    authenticationStatus: 'APPROVED' | 'REJECTED';
    followerCount: number;
    postCount: number;
    latestPostDate: string;
  };
}
