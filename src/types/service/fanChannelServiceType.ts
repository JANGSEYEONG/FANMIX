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
    isFan: boolean;
  }[];
}
