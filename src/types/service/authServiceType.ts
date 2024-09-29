export interface LoginRequest {
  code: string;
  redirectUri: string;
}

export interface LoginResponse {
  status: string;
  customCode: string | null;
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
  message: string | null;
}
