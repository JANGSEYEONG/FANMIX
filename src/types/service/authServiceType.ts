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
      gender: Gender;
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

export interface RefreshAccessTokenResponse extends ResponseBase {
  data: string;
}
