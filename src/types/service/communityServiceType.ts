import type { ResponseBase } from './apiResponseBase';

export interface PopularPostsResponse extends ResponseBase {
  data: {
    influencerId: number | null;
    communityId: number;
    communityName: string | null;
    influencerName: string | null;
    postId: number;
    content: string;
    viewCount: number;
    likeCount: number;
    commentCount: number;
    crDate: string;
  }[];
}
