import type { ResponseBase } from './apiResponseBase';

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
    gender: string;
    birthYear: string;
    nationality: string;
    totalPoint: number;
    refreshToken: string;
    firstLoginYn: boolean;
    role: string;
  };
}
