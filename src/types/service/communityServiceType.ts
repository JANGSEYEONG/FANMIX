import type { ResponseBase } from './apiResponseBase';

export interface PopularPostsResponse extends ResponseBase {
  data: {
    communityId: number;
    influencerId: number | null;
    nickName: string;
    memberRank: string; // 현재 빈 문자열, 향후 랭크 정보가 추가될 수 있음
    memberImageUrl: string;
    postId: number;
    title: string;
    contents: string;
    createdAt: string; // ISO 8601 형식의 날짜 문자열
    viewCount: number;
    likeCount: number;
    dislikeCount: number;
    commentCount: number;
  }[];
}
