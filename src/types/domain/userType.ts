export type Gender = 'MALE' | 'FEMALE' | 'UNKNOWN' | null;

export interface User {
  userId: string; // 유저 식별자
  nickName: string;
  email: string;
  birthYear: number;
  gender: Gender;
  introduce: string;
  nationality: string;
  profileImgUrl: string;
  role: string;
  totalPoint: number;
}
