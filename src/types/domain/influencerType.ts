export interface InfluencerRatingMetrics {
  contentScore: number;
  communicationScore: number;
  trustworthinessScore: number;
}

export interface Influencer {
  influencerId: string;
  name: string;
  imageSrc: string;
  isVerified: boolean;
  averageRating: InfluencerRatingMetrics;
}

// 리뷰에 필요한 인플루언서 정보만 포함하는 새로운 인터페이스
interface InfluencerReviewInfo {
  influencerId: string;
  name: string;
  imageSrc: string;
  isVerified: boolean;
}

export interface InteractionStat {
  likesCount: number;
  dislikesCount: number;
  commentsCount?: number;
  createdAt: Date;
}

// "유저"가 평가한 리뷰 형태
export interface InfluencerReview {
  reviewId: string;
  influencer: InfluencerReviewInfo;
  rating: InfluencerRatingMetrics; // 점수 평가
  content: string; // 한줄리뷰 내용
  interaction: InteractionStat;
}
