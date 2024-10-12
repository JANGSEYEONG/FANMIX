import type { ResponseBase } from './apiResponseBase';
import type { MyFollowedInfluencerSortType } from '../domain/followType';

export interface MyFollowedInfluencersRequest {
  sort: MyFollowedInfluencerSortType;
}
export interface MyFollowedInfluencersResponse extends ResponseBase {
  data: {
    influencerId: number;
    influencerName: string;
    influencerImageUrl: string;
    authenticationStatus: 'APPROVED' | 'NOT_AUTHENTICATED';
    isOnePick: boolean; // 원픽 유무
    onepickEnrolltime: string | null; // 원픽으로 지정한 시간
    crDate: string; // cr이면 생성 시간일텐데 팔로우에 생성/수정 여부가 있나..
    uDate: string; // 팔로우로 지정한? 수정한? 시간?..
    latestReviewDate: string | null;
    myAverageRating: number;
    fanChannelId: number | null;
  }[];
}

export interface InfluencerFollowStatusRequest {
  influencerId: number;
}
export interface InfluencerFollowStatusResponse extends ResponseBase {
  data: boolean;
}

export interface ToggleInfluencerFollowRequest {
  influencerId: number;
  isFollowing: boolean;
}
