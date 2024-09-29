// 로그인 한 유저의 데이터
export interface User {
  userId: string; // 유저 식별자
  nickName: string;
  email: string;
  birthYear: number;
  gender: string;
  introduce: string;
  nationality: string;
  profileImgUrl: string;
  role: string;
  totalPoint: number;
}
