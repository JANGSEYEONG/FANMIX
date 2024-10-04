import type { ResponseBase } from './apiResponseBase';

export interface MyFollowedInfluencersResponse extends ResponseBase {
  data: {
    influencerId: number;
    influencerName: string;
    isAuthenticated: boolean; // 인증유무
    isOnepick: boolean; // 원픽 유무
    onepickEnrolltime: string; // 원픽으로 지정한 시간
    u_date: string; // 팔로우로 지정한 시간
  }[];
}
export interface InfluencerFollowStatuResponse extends ResponseBase {
  data: {
    isFollowing: boolean;
  };
}
