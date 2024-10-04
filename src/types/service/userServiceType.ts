import type { ResponseBase } from './apiResponseBase';
import type { Gender } from '../domain/userType';

export interface LoginRequest {
  code: string;
  redirectUri: string;
}

export interface LoginResponse extends ResponseBase {
  data: {
    jwt: string;
    member: {
      id: number;
      birthYear: number;
      email: string;
      firstLoginYn: boolean;
      gender: string;
      introduce: string;
      nationality: string;
      nickName: string;
      profileImgUrl: string;
      refreshToken: string;
      role: string;
      totalPoint: number;
    };
  };
}

export interface UserDetailResponse extends ResponseBase {
  data: {
    id: number;
    name: string;
    nickName: string;
    profileImgUrl: string;
    introduce: string;
    email: string;
    gender: Gender;
    birthYear: number;
    nationality: string;
    totalPoint: number;
    refreshToken: string;
    firstLoginYn: boolean;
    role: string;
  };
}

export interface UpdateMyProfileImageRequest {
  file: File;
}

export interface UpdateMyIntroduceRequest {
  introduce: string;
}

export interface UpdateMyBirthYearRequest {
  birthYear: number;
}

export interface UpdateMyNicknameRequest {
  nickName: string;
}
export interface UpdateMyGenderRequest {
  gender: Gender;
}
export interface UpdateMyNationalityRequest {
  nationality: string;
}

export interface UserReviewHistoryResponse extends ResponseBase {
  data: {
    influencerId: number;
    influencerName: string;
    influencerImageUrl: string;
    selfIntroduction: string;
    gender: Gender;
    nationality: string;
    tagList: string[];
    reviewId: number;
    reviewContent: string;
    contentRating: number;
    communicationRating: number;
    trustRating: number;
    latestReviewDate: string;
    isAuthenticated: boolean;
    isFollowing: boolean;
  }[];
}

export interface UserPostHistoryResponse extends ResponseBase {
  data: {
    communityId: number;
    communityName: string;
    influencerId: number | null; // null일 경우 커뮤니티, 있을 경우 팬채널
    influencerName: string | null;
    postId: number;
    postContent: string;
    postCrDate: string;
    postLinkCount: number;
    postDisLikeCount: number;
    postCommentCount: number;
  }[];
}
export interface UserCommentHistoryResponse extends ResponseBase {
  data: {
    communityId: number;
    communityName: string;
    influencerId: number | null; // null일 경우 커뮤니티, 있을 경우 팬채널
    influencerName: string | null;
    postId: number;
    postContent: string;
    postCrDate: string;
    commentId: number;
    commentContents: string;
    commentLikeCount: number;
    commentDisLikeCount: number;
    commentCrDate: string;
  }[];
}
