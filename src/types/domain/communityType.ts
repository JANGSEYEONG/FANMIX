// 포스트(글) 요약 카드 (메인, 활동내역에서 사용)
export interface TextPostCardData {
  influencerId: number | null;
  communityId: number;
  communityName: string | null;
  influencerName: string | null;
  postId: number;
  content: string;
  likeCount: number;
  commentCount: number;
  crDate: string;
}
