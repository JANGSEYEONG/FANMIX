import type { ResponseBase } from './apiResponseBase';

export interface PopularPostsResponse extends ResponseBase {
  data: {
    communityId: number;
    communityName: string | null;
    influencerId: number | null;
    influencerName: string | null;
    postId: number;
    content: string;
    viewCount: number;
    likeCount: number;
    commentCount: number;
    crDate: string;
  }[];
}
