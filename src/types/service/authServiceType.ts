export interface LoginRequest {
  code: string;
}

export interface LoginResponse {
  status: string;
  customCode: string | null;
  data: {
    // #20240917. syjang, 아래 데이터 타입들은 백엔드 api 확정 되고 수정 필요
    accessToken: string;
    refreshToken: string;
    isFirstLogin: boolean;

    userId: string;
    nickName: string;
    email: string;
  };
  message: string | null;
}
